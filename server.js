require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios');
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = process.env.PORT || 3000;

const clientId = process.env.WCL_CLIENT_ID;
const clientSecret = process.env.WCL_CLIENT_SECRET;

// Configurar SQLite y crear tabla
const db = new sqlite3.Database(path.join(__dirname, 'database.sqlite'), (err) => {
    if (err) console.error("Error opening DB:", err.message);
});

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS logs_cache (
        log_id TEXT PRIMARY KEY,
        log_data TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
    // Attempt to add column in case the DB was created before the column was added to the schema
    db.run(`ALTER TABLE logs_cache ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP`, (err) => {
        // Ignore duplicate column errors silently
    });
});

function cleanupDatabase() {
    db.run("DELETE FROM logs_cache WHERE created_at < DATETIME('now', '-2 hours')", (err) => {
        if (err) {
            console.error("Cleanup error:", err.message);
        }
    });
}
cleanupDatabase();
setInterval(cleanupDatabase, 15 * 60 * 1000); // Se ejecuta cada 15 minutos

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Endpoint para el cliente
app.post('/api/audit', async (req, res) => {
    try {
        const logId = req.body.logId;
        if (!logId) {
            return res.status(400).json({ error: "Missing logId" });
        }

        // Consultar a la base de datos como caché
        db.get("SELECT log_data FROM logs_cache WHERE log_id = ?", [logId], async (err, row) => {
            if (err) {
                console.error("Cache read error:", err);
            }
            if (row && row.log_data) {
                // Encontrado en caché
                try {
                    return res.json(JSON.parse(row.log_data));
                } catch (e) {
                    console.error("JSON parse error:", e);
                }
            }

            // No existe o falló en caché, procedemos a consultar WCL
            try {

                console.log(clientId, clientSecret);
                if (!clientId || !clientSecret) {
                    return res.status(500).json({ error: "WCL_CLIENT_ID and WCL_CLIENT_SECRET are not configured on the server." });
                }

                // Obtener IDs de spells dinámicamente de data.js para no duplicar código
                const dataJs = fs.readFileSync(path.join(__dirname, 'public', 'js', 'data.js'), 'utf8');
                const spellDbMatch = dataJs.match(/const SPELL_DB = \{([\s\S]*?)\n\};/);
                let castIds = "";
                if (spellDbMatch) {
                    const matches = [...spellDbMatch[1].matchAll(/^\s+(\d+):/gm)];
                    castIds = matches.map(m => m[1]).join(',');
                } else {
                    return res.status(500).json({ error: "No se pudo leer SPELL_DB desde data.js" });
                }

                const buffDbMatch = dataJs.match(/const BUFF_DB = \{([\s\S]*?)\n\};/);
                let buffIds = "";
                if (buffDbMatch) {
                    const matches = [...buffDbMatch[1].matchAll(/^\s+(\d+):/gm)];
                    buffIds = matches.map(m => m[1]).join(',');
                }

                // Petición a WarcraftLogs para obtener token
                const responseToken = await axios.post(
                    "https://www.warcraftlogs.com/oauth/token",
                    `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
                    { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
                );

                const token = responseToken.data.access_token;
                if (!token) throw new Error("Invalid or expired API Keys.");

                // Query y filtro
                const filterExp = `(type = 'cast' AND ability.id IN (${castIds})) OR (type = 'damage' AND ability.id IN (13241, 30486, 33671)) OR type = 'interrupt' OR type = 'combatantinfo' OR (type IN ('applybuff', 'applybuffstack', 'refreshbuff', 'cast') AND ability.id IN (${buffIds}))`;
                const query = JSON.stringify({
                    query: `{reportData {report(code: "${logId}") {title fights(killType: Encounters) { id name startTime endTime kill } masterData { actors(type: "Player") { id name subType icon } } events(startTime: 0, endTime: 999999999999, filterExpression: "${filterExp}") { data }}}}`
                });

                const responseData = await axios.post(
                    "https://www.warcraftlogs.com/api/v2/client",
                    query,
                    { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` } }
                );

                if (responseData.data.errors) {
                    throw new Error(responseData.data.errors[0].message);
                }

                // Guardar en la base de datos (caché)
                const responseString = JSON.stringify(responseData.data);
                db.run("INSERT OR REPLACE INTO logs_cache (log_id, log_data) VALUES (?, ?)", [logId, responseString], (insertErr) => {
                    if (insertErr) {
                        console.error("Cache insert error:", insertErr);
                    }
                });

                res.json(responseData.data);

            } catch (error) {
                console.error(error);
                const errorMsg = error.response?.data?.message || error.message || "Unknown error";
                res.status(500).json({ error: errorMsg });
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Unknown error" });
    }
});

// Endpoint para iconos
app.get('/api/icon/:iconName([\\w\\.-]+).jpg', async (req, res) => {
    const iconName = req.params.iconName;
    const fileName = iconName + '.jpg';
    const iconPath = path.join(__dirname, 'public', 'assets', 'icons', fileName);

    if (fs.existsSync(iconPath)) {
        return res.sendFile(iconPath);
    }

    try {
        const response = await axios({
            method: 'GET',
            url: `https://wow.zamimg.com/images/wow/icons/large/${fileName}`,
            responseType: 'stream'
        });

        const dir = path.dirname(iconPath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        const writer = fs.createWriteStream(iconPath);
        response.data.pipe(writer);

        writer.on('finish', () => {
            res.sendFile(iconPath);
        });

        writer.on('error', (err) => {
            console.error('Error writing icon:', err);
            res.status(500).send('Error saving icon');
        });
    } catch (err) {
        console.error('Error downloading icon:', fileName);
        const defPath = path.join(__dirname, 'public', 'assets', 'icons', 'inv_misc_questionmark.jpg');
        if (fs.existsSync(defPath)) {
            try {
                fs.copyFileSync(defPath, iconPath);
                return res.sendFile(iconPath);
            } catch (copyErr) {
                return res.sendFile(defPath);
            }
        }
        res.status(404).send('Icon not found');
    }
});

// Nuevo EndPoint de Reporte Dinámico
app.get('/report/:logId', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Fallback para SPA si es necesario en el futuro
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    console.log(clientId, clientSecret);
});
