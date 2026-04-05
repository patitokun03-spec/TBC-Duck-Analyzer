# 🔧 Guía de Configuración

Esta guía te ayudará a configurar **PATOCHIVATO** paso a paso.

## Requisitos Previos

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Cuenta en [WarcraftLogs.com](https://www.warcraftlogs.com)
- URL de un log de combate público o privado

## Paso 1: Crear API Keys en WarcraftLogs

### 1.1 Acceder a WarcraftLogs

1. Abre [WarcraftLogs.com](https://www.warcraftlogs.com)
2. Inicia sesión con tu cuenta
3. Ve a tu [Perfil](https://www.warcraftlogs.com/profile)

### 1.2 Crear un Cliente API (v2)

1. Desplázate hasta el final de la página
2. Busca la sección **"API Clients"** o **"API Tokens"**
3. Haz clic en **"Create New Client (V2)"**
4. Llena el formulario:
   - **Application Name**: `PatoChivato` (o el nombre que prefieras)
   - **Description**: `Herramienta personal de análisis de logs`
   - **Redirect URL**: Déjalo en blanco o pon `http://localhost`
5. Haz clic en **"Create"**

### 1.3 Copiar las Claves

Después de crear el cliente, verás:
- **Client ID**: Cadena de 36 caracteres (ej: `a176f7f9-dd8e-4303-ae31-b1234567890a`)
- **Client Secret**: Cadena de 40 caracteres (ej: `abcdef123456789abcdef123456789abcdef1234`)

⚠️ **IMPORTANTE**: Guarda estas claves en un lugar seguro. No las compartas con nadie.

## Paso 2: Configurar PatoChivato

### 2.1 Abrir la Herramienta

1. Abre [PATOCHIVATO](https://patochivato.com) (o tu servidor local)
2. Verás la interfaz principal

### 2.2 Abrir Settings

1. Haz clic en **⚙️ Settings** (esquina superior derecha)
2. Se abrirá el panel de configuración

### 2.3 Introducir las Claves

1. **Profile Name**: Escribe un nombre para tu perfil (ej: "Mi Raid Principal")
2. **WCL Client ID**: Pega tu Client ID (36 caracteres)
3. **WCL Client Secret**: Pega tu Client Secret (40 caracteres)
   - El campo es de **password**, así que no se verá el texto

### 2.4 Validar Claves

- ✅ Si los campos se vuelven **verdes**, las claves son válidas
- ❌ Si se vuelven **rojos**, hay un error en la longitud

### 2.5 Guardar

1. Haz clic en **"SAVE AND CONNECT"**
2. Deberías ver un mensaje de confirmación

## Prueba: Analizar tu Primer Log

### 3.1 Obtener un URL de Log

1. Ve a [WarcraftLogs.com](https://www.warcraftlogs.com)
2. Busca o crea un log de combate
3. Abre el log
4. Copia el URL completo de la barra de dirección
   - Ej: `https://www.warcraftlogs.com/reports/ABC123def456GHI789`

### 3.2 Analizar el Log

1. Vuelve a la página de **PATOCHIVATO**
2. En el campo de entrada, pega el URL del log
3. Haz clic en **"LOG CHECK"**
4. ¡Espera a que se cargue el análisis!

### 3.3 Interpretar Resultados

Una vez cargado, verás:

- **Tabs de Encuentros**: Cada pestaña es un boss o el "OVERALL"
- **Clases Agrupadas**: Los jugadores separados por clase
- **Tarjetas de Jugador**: Cada jugador con:
  - 🎯 Icono de especialización
  - 🛡️ Buffs usados (con contadores)
  - ✨ Hechizos/Consumibles (con números de usos)

## Opciones Avanzadas

### Discord Webhook (Opcional)

Si quieres enviar los resultados a Discord:

1. Crea un Webhook en tu servidor Discord:
   - Abre Configuración del Servidor
   - Ve a **Integraciones** → **Webhooks**
   - Haz clic en **"Crear Webhook"**
   - Nombra el webhook "PatoChivato"
   - Copia la **URL del Webhook**

2. En PATOCHIVATO Settings:
   - Pega la URL en **"Discord Webhook URL"**
   - Haz clic en **"SAVE AND CONNECT"**

3. Cuando analices un log, tendrás el botón **"SEND TO DISCORD"**

### Almacenamiento Local

✅ Tus API keys se guardan en el almacenamiento local del navegador
- No se envían a ningún servidor externo (excepto WarcraftLogs)
- Si borras cookies/caché, perderás la configuración

💡 Para respaldar tu configuración:
```javascript
// En la consola del navegador (F12)
console.log(localStorage.getItem('auditor_config'));
```

## Solución de Problemas

### "Invalid or expired API Keys"

- Verifica que hayas copiado las claves correctamente
- Verifica que las claves tengan la longitud correcta:
  - Client ID: 36 caracteres
  - Client Secret: 40 caracteres
- Genera unas claves nuevas en WarcraftLogs

### "No results found for this log"

- El log podría ser privado (requiere acceso especial)
- El URL podría estar mal escrito
- El log podría no tener datos suficientes

### Los iconos se ven borrosos

- Recarga la página (Ctrl+F5 o Cmd+Shift+R)
- Vacía el caché del navegador
- Prueba con otro navegador

### No aparecer el botón Discord

- Verifica que la URL del Webhook sea correcta
- El Webhook debe ser válido en Discord

## FAQ

### ¿Mis API keys son seguras?

✅ Sí, se guardan localmente en tu navegador y NO se envían a nuestros servidores.

### ¿Puedo usar esto sin API keys?

❌ No, necesitas las claves para acceder a los datos de WarcraftLogs.

### ¿Qué información se envía a WarcraftLogs?

Solo solicitudes legítimas a su API con tus credenciales

### ¿Hay límite de logs que puedo analizar?

Depende de tu cuota en WarcraftLogs (usualmente 100 requests/min)

### ¿Puedo usar esto offline?

✅ Sí, pero necesitarás descargar los archivos localmente
- Guarda todos los archivos en una carpeta
- Abre `index.html` en tu navegador

---

## Necesitas Ayuda?

- 🔵 Lee el [README](../README.md)
- 📝 Reporta un error: usa el botón **Feedback**
- 💬 Comunidad: [Discord](https://discord.gg/patochivato) (próximamente)

---

**Última actualización**: 2026-04-05
