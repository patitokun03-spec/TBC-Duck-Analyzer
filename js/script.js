window.missingAuras = new Set();
window.missingSpells = new Set();

function detectPlayerSpec(player) {
    if (!player) return "Unknown";
    
    // Si tiene icono, intentar usarlo directamente como spec
    if (player.icon) {
        const iconStr = player.icon.toLowerCase();
        
        // Si ya es un spec (formato "clase-spec" o "clase"), normalizarlo
        if (iconStr.includes('-') || CLASSES.map(c => c.toLowerCase()).includes(iconStr)) {
            // Normalizar a formato "Clase-Spec" o "Clase"
            const parts = iconStr.split('-');
            if (parts.length === 2) {
                // "warlock-destruction" -> "Warlock-Destruction"
                const normalized = parts[0].charAt(0).toUpperCase() + parts[0].slice(1) + '-' + 
                                 parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
                if (SPEC_ICONS[normalized]) {
                    return normalized;
                }
            } else if (parts.length === 1) {
                // "warlock" -> "Warlock"
                const normalized = iconStr.charAt(0).toUpperCase() + iconStr.slice(1);
                if (SPEC_ICONS[normalized]) {
                    return normalized;
                }
            }
        }
        
        // Si no es un spec string, devolver como está (podría ser nombre de icono real)
        return player.icon;
    }
    
    // Fallback a subType (clase genérica)
    return player.subType || "Unknown";
}

function showEncounter(id) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.encounter-content').forEach(content => content.classList.remove('active'));
    document.getElementById(`tab-${id}`).classList.add('active');
    document.getElementById(`enc-${id}`).classList.add('active');
}

function parseLogId(input) {
    if (!input) return "";
    let val = input.trim();
    if (val.includes("warcraftlogs.com/reports/")) {
        val = val.split("/reports/")[1].split(/[#?\/]/)[0];
    }
    return val;
}

function checkKeyLengths() {
    const idInput = document.getElementById('wclId');
    const secretInput = document.getElementById('wclSecret');
    const warning = document.getElementById('keyWarning');
    
    let idValid = idInput.value.trim().length === 36 || idInput.value.trim().length === 0;
    let secretValid = secretInput.value.trim().length === 40 || secretInput.value.trim().length === 0;

    if (idInput.value.trim().length > 0) {
        idInput.className = idValid ? 'input-valid' : 'input-invalid';
    } else {
        idInput.className = '';
    }

    if (secretInput.value.trim().length > 0) {
        secretInput.className = secretValid ? 'input-valid' : 'input-invalid';
    } else {
        secretInput.className = '';
    }

    if ((!idValid && idInput.value) || (!secretValid && secretInput.value)) {
        warning.style.display = "block";
    } else {
        warning.style.display = "none";
    }
}

function buildEncounterHTML(fightId, events, allActors) {
    let classGroups = {};
    CLASSES.forEach(c => classGroups[c] = {});

    let playerCombatantInfos = {}; 
    let playerTempEnchants = {};

    events.forEach(ev => {
        if (ev.type === 'combatantinfo') {
            if (!playerCombatantInfos[ev.sourceID]) playerCombatantInfos[ev.sourceID] = [];
            playerCombatantInfos[ev.sourceID].push(ev.auras ? ev.auras.map(a => a.ability) : []);

            const p = allActors.find(x => x.id === ev.sourceID);
            if (!playerTempEnchants[ev.sourceID]) playerTempEnchants[ev.sourceID] = [];
            
            // --- DETECCIÓN DE ESPECIALIZACIÓN ---
            let playerSpec = detectPlayerSpec(p);
            
            // Fallback específico para Paladines Protection
            if (p && p.subType === "Paladin" && !playerSpec.includes("Holy") && !playerSpec.includes("Retribution")) {
                playerSpec = "Paladin-Protection";
            }
            
            if (p) window.detectedSpecs[p.name] = playerSpec;

            let enchants = [];
            let weapons = 1; 
            
            if (ev.gear && p) {
                let offHand = ev.gear[16];
                if (['Rogue', 'Hunter', 'Warrior', 'Shaman'].includes(p.subType)) {
                    if (offHand && offHand.id !== 0 && offHand.icon) {
                        let iconName = offHand.icon.toLowerCase();
                        let isWeapon = iconName.includes('sword') || iconName.includes('axe') || 
                                       iconName.includes('mace') || iconName.includes('hammer') || 
                                       iconName.includes('dagger') || iconName.includes('fist') || 
                                       iconName.includes('blade') || iconName.includes('knife') ||
                                       iconName.includes('weapon');
                        if (isWeapon) weapons = 2; 
                    }
                }

                [15, 16].forEach(slotIdx => {
                    let item = ev.gear[slotIdx];
                    if (item && item.id !== 0) {
                        let rawEnchant = item.temporaryEnchant || item.tempEnchant;
                        if (rawEnchant) {
                            if (!window.playerEnchantsForConsole[p.name]) window.playerEnchantsForConsole[p.name] = new Set();
                            window.playerEnchantsForConsole[p.name].add(rawEnchant);
                        }

                        let foundEnchant = null;
                        if (item.temporaryEnchant) foundEnchant = item.temporaryEnchant;
                        else if (item.tempEnchant) foundEnchant = item.tempEnchant;
                        if (!foundEnchant || !ENCHANT_DB[foundEnchant]) {
                            if (item.permanentEnchant && ENCHANT_DB[item.permanentEnchant]) foundEnchant = item.permanentEnchant;
                            else if (item.enchant && ENCHANT_DB[item.enchant]) foundEnchant = item.enchant;
                        }
                        if (foundEnchant) enchants.push(foundEnchant);
                    }
                });
            }
            playerTempEnchants[ev.sourceID].push({ enchants: enchants, weapons: weapons });
        }
    });

    events.forEach(ev => {
        let playerId = ev.sourceID;
        if (ev.type === 'damage' && ev.abilityGameID === 33671) playerId = ev.targetID;

        const p = allActors.find(x => x.id === playerId);
        if (!p) return; 
        
        const subType = p.subType;
        if (!classGroups[subType]) return; 
        
        let finalSpec = window.detectedSpecs[p.name] || detectPlayerSpec(p) || p.subType;
        if (!classGroups[subType][p.name]) classGroups[subType][p.name] = { spells: {}, specIcon: finalSpec, playerRef: p };

        if (ev.type === 'cast') {
            if (!SPELL_DB[ev.abilityGameID] && ev.abilityGameID !== 33671) {
                window.missingSpells.add(`${ev.abilityGameID}`);
            }
            if (ev.abilityGameID === 33671) return;
        }

        if (ev.type === 'cast' && SPELL_DB[ev.abilityGameID] && !SPELL_DB[ev.abilityGameID].isInterrupt && !SPELL_DB[ev.abilityGameID].isMechanic) {
            if (!classGroups[subType][p.name].spells[ev.abilityGameID]) classGroups[subType][p.name].spells[ev.abilityGameID] = { count: 0, damage: 0 };
            classGroups[subType][p.name].spells[ev.abilityGameID].count += 1;
        }
        else if (ev.type === 'interrupt' && SPELL_DB[ev.abilityGameID]) {
            // Solo mostrar interrupts que realmente interrumpen casteos (tipo 'interrupt')
            const interruptSpellId = ev.abilityGameID;
            if (!classGroups[subType][p.name].spells[interruptSpellId]) classGroups[subType][p.name].spells[interruptSpellId] = { count: 0, damage: 0 };
            classGroups[subType][p.name].spells[interruptSpellId].count += 1;
        }
        // SUMAMOS EL DAÑO DEL SAPPER DE CLASSIC Y TBC
        else if (ev.type === 'damage' && (ev.abilityGameID === 13241 || ev.abilityGameID === 30486 || ev.abilityGameID === 33671)) {
            const itemSpellId = ev.abilityGameID; 
            if (!classGroups[subType][p.name].spells[itemSpellId]) classGroups[subType][p.name].spells[itemSpellId] = { count: 0, damage: 0 };
            classGroups[subType][p.name].spells[itemSpellId].damage += (ev.amount || 0) + (ev.absorbed || 0);
            if (ev.abilityGameID === 33671) classGroups[subType][p.name].spells[itemSpellId].count += 1; 
        }
    });

    let mechSidebarHTML = "";
    if (fightId !== 'overall') {
        let shatterLeaderboard = [];
        CLASSES.forEach(cls => {
            Object.entries(classGroups[cls]).forEach(([name, data]) => {
                if (data.spells[33671] && data.spells[33671].damage > 0) {
                    shatterLeaderboard.push({ name: name, cls: cls, damage: data.spells[33671].damage });
                }
            });
        });
        shatterLeaderboard.sort((a, b) => b.damage - a.damage);
        if (shatterLeaderboard.length > 0) {
            let listHTML = shatterLeaderboard.map((p, index) => {
                let medal = index === 0 ? "🥇" : (index === 1 ? "🥈" : (index === 2 ? "🥉" : ""));
                return `<div class="mech-row"><span><span class="medal">${medal}</span><span class="${p.cls}-color font-bold">${p.name}</span></span><span class="spell-damage">${p.damage >= 1000 ? (p.damage/1000).toFixed(1)+'k' : p.damage}</span></div>`;
            }).join('');
            mechSidebarHTML = `<div class="mechanics-sidebar"><div class="mech-box"><div class="mech-header">🚨 SHATTER DMG</div><div class="mech-body">${listHTML}</div></div></div>`;
        }
    }

    let html = `<div class="boss-content-inner"><div class="class-rows-container">`;
    let hasEvents = Object.values(classGroups).some(cls => Object.keys(cls).length > 0);
    
    if (!hasEvents) {
        html += `<p style="text-align:center; color:#888; padding: 20px;">No tracked abilities used.</p>`;
    } else {
        html += CLASSES.map(cls => {
            const playersInClass = classGroups[cls];
            if (Object.keys(playersInClass).length === 0) return "";
            
            const playersSorted = Object.entries(playersInClass).sort((a, b) => {
                let specA = a[1].specIcon || "A";
                let specB = b[1].specIcon || "B";
                return specA.localeCompare(specB);
            });

            return `
            <div class="class-row ${cls}-row">
                <div class="class-header ${cls}-header">${cls}</div>
                <div class="class-players">
                    ${playersSorted.map(([name, data]) => {
                        let htmlBuffs = "";
                        const p = allActors.find(x => x.name === name);
                        const infos = p ? (playerCombatantInfos[p.id] || []) : [];
                        const enchInfos = p ? (playerTempEnchants[p.id] || []) : [];
                        const totalFights = infos.length; 

                        if (totalFights > 0) {
                            let standardBuffHtmls = [];
                            let weaponBuffHtmls = [];
                            const isOverall = (fightId === 'overall' && totalFights > 1);
                            
                            const usedBuffs = Object.keys(BUFF_DB).filter(id => infos.some(auras => auras.includes(parseInt(id))));
                            usedBuffs.forEach(id => {
                                const count = infos.filter(auras => auras.includes(parseInt(id))).length;
                                let ratioDisplay = `<span class="buff-ratio">${count}${isOverall ? `/${totalFights}` : ''}</span>`;
                                standardBuffHtmls.push(`<div class="buff-item has-tooltip"><img class="buff-icon" src="assets/icons/${BUFF_DB[id].icon}.jpg" onerror="this.src='assets/icons/inv_misc_questionmark.jpg'"><span class="custom-tooltip">${BUFF_DB[id].name}</span>${ratioDisplay}</div>`);
                            });

                            const weaponBuffsAggregated = {};
                            let totalExpectedWeapons = 0;
                            enchInfos.forEach(info => {
                                totalExpectedWeapons += info.weapons;
                                info.enchants.forEach(eId => {
                                    if (ENCHANT_DB[eId]) {
                                        let enchName = ENCHANT_DB[eId].name;
                                        if (!weaponBuffsAggregated[enchName]) weaponBuffsAggregated[enchName] = { count: 0, icon: ENCHANT_DB[eId].icon };
                                        weaponBuffsAggregated[enchName].count += 1;
                                    }
                                });
                            });

                            Object.entries(weaponBuffsAggregated).forEach(([enchName, d]) => {
                                let ratioHtml = (isOverall || totalExpectedWeapons > 1) ? `<span class="buff-ratio">${d.count}/${totalExpectedWeapons}</span>` : "";
                                weaponBuffHtmls.push(`<div class="buff-item has-tooltip"><img class="buff-icon weapon-enchant" src="assets/icons/${d.icon}.jpg" onerror="this.src='assets/icons/inv_misc_questionmark.jpg'"><span class="custom-tooltip">${enchName} (Weapon)</span>${ratioHtml}</div>`);
                            });

                            let allBuffHtmls = [...standardBuffHtmls, ...weaponBuffHtmls];

                            htmlBuffs = allBuffHtmls.length === 0 ? '<span style="font-size:0.75rem; color:#ff5252; font-weight:bold;">NO BUFFS</span>' : allBuffHtmls.join('');
                        }

                        let spellListHtml = Object.entries(data.spells).filter(([spellId]) => SPELL_DB[spellId] && spellId != 33671).map(([spellId, sData]) => {
                            let dmgText = sData.damage > 0 ? (sData.damage >= 1000 ? (sData.damage / 1000).toFixed(1) + 'k' : sData.damage) : "";
                            let sName = SPELL_DB[spellId].name;
                            if (sName.length > 12) sName = sName.substring(0, 10) + '...';
                            return `<div class="spell-item has-tooltip"><img class="spell-icon" src="assets/icons/${SPELL_DB[spellId].icon}.jpg" onerror="this.src='assets/icons/inv_misc_questionmark.jpg'"><span class="custom-tooltip">${SPELL_DB[spellId].name}</span><span class="spell-name">${sName}</span><span class="spell-count">x${Math.max(1, sData.count)}</span>${sData.damage > 0 ? `<span class="spell-damage">${dmgText}</span>` : ''}</div>`;
                        }).join('');

                        let specRaw = data.specIcon || cls;
                        let specImgName = SPEC_ICONS[specRaw] || SPEC_ICONS[specRaw.split('-')[0]] || SPEC_ICONS[cls] || 'inv_misc_questionmark';

                        return `<div class="player-card"><div class="player-name ${cls}-color"><img src="assets/icons/${specImgName}.jpg" class="spec-icon" onerror="this.src='assets/icons/inv_misc_questionmark.jpg'">${name}</div>${htmlBuffs ? `<div class="buff-bar">${htmlBuffs}</div>` : ''}<div class="spell-grid">${spellListHtml}</div></div>`;
                    }).join('')}
                </div>
            </div>`;
        }).join('');
    }

    html += `</div>${mechSidebarHTML}</div>`; 
    return html;
}

async function auditarLog() {
    const rawInput = document.getElementById('logId').value.trim();
    const logId = parseLogId(rawInput);
    
    const divTabs = document.getElementById('encounterTabs');
    const divRes = document.getElementById('resultados');
    const config = JSON.parse(localStorage.getItem('auditor_config') || '{}');
    if (!config.wclId || !config.wclSecret) return divRes.innerHTML = "<p style='color:#ff5252; text-align:center;'>⚠️ Please configure your API Keys in Settings</p>";

    divTabs.innerHTML = "";
    divRes.innerHTML = "<p style='text-align:center; color:#f4b400; font-weight:bold; font-size:1.2rem; margin-top:20px;'>POLICE IS INVESTIGATING...</p>";

    window.detectedSpecs = {}; 
    window.playerEnchantsForConsole = {}; 

    try {
        const responseToken = await fetch("https://www.warcraftlogs.com/oauth/token", { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: `grant_type=client_credentials&client_id=${config.wclId}&client_secret=${config.wclSecret}` });
        const tokenData = await responseToken.json();
        if (tokenData.error) throw new Error("Invalid or expired API Keys.");

        const castIds = Object.keys(SPELL_DB).join(',');
        const filterExp = `(type = 'cast' AND ability.id IN (${castIds})) OR (type = 'damage' AND ability.id IN (13241, 30486, 33671)) OR type = 'interrupt' OR type = 'combatantinfo'`;
        const query = JSON.stringify({ query: `{reportData {report(code: "${logId}") {title fights(killType: Encounters) { id name startTime endTime kill } masterData { actors(type: "Player") { id name subType icon } } events(startTime: 0, endTime: 999999999999, filterExpression: "${filterExp}") { data }}}}`   });

        const responseData = await fetch("https://www.warcraftlogs.com/api/v2/client", { method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${tokenData.access_token}` }, body: query });
        const res = await responseData.json();
        
        if (res.errors) throw new Error(res.errors[0].message);
        if (!res.data || !res.data.reportData || !res.data.reportData.report) {
            throw new Error("Report not found, it is private, or the link is incorrect.");
        }

        const report = res.data.reportData.report;
        const allActors = report.masterData.actors || [];
        const allEvents = report.events.data || [];
        window.currentLogTitle = report.title;

        let tabsHtml = `<button id="tab-overall" class="tab-btn overall active" onclick="showEncounter('overall')">OVERALL</button>`;
        let contentHtml = `<div id="enc-overall" class="encounter-content active">${buildEncounterHTML('overall', allEvents, allActors)}</div>`;
        let wipeCounts = {};
        
        report.fights.forEach(fight => {
            let isKill = fight.kill;
            let statusText = isKill ? "" : ` #${wipeCounts[fight.name] = (wipeCounts[fight.name] || 0) + 1}`;
            tabsHtml += `<button id="tab-${fight.id}" class="tab-btn ${isKill ? "kill" : "wipe"}" onclick="showEncounter('${fight.id}')">${fight.name}${statusText}</button>`;
            const fightEvents = allEvents.filter(ev => ev.timestamp >= (fight.startTime - 15000) && ev.timestamp <= (fight.endTime + 5000));
            contentHtml += `<div id="enc-${fight.id}" class="encounter-content">${buildEncounterHTML(fight.id, fightEvents, allActors)}</div>`;
        });

        document.getElementById('encounterTabs').innerHTML = tabsHtml;
        divRes.innerHTML = contentHtml;
        document.getElementById('btnDiscord').style.display = "inline-block";

        // Tablas en consola eliminadas - ya no se necesitan

    } catch (e) { divRes.innerHTML = `<p style='text-align:center; color:#ff5252; font-weight:bold; font-size:1.1rem; margin-top:20px;'>Error: ${e.message}</p>`; }
}

function toggleSettings() { document.getElementById('settingsOverlay').classList.toggle('is-open'); }
function openTutorial() { document.getElementById('tutorialOverlay').classList.add('is-open'); }
function closeTutorial() { document.getElementById('tutorialOverlay').classList.remove('is-open'); }
function checkLoginStatus() {
    const config = JSON.parse(localStorage.getItem('auditor_config') || '{}');
    const userDiv = document.getElementById('loggedInUser');
    if (config.wclId) { userDiv.style.display = 'block'; document.getElementById('profileNameDisplay').innerText = config.name || 'No Name'; } 
    else { userDiv.style.display = 'none'; }
}

function saveSettings() {
    const idInput = document.getElementById('wclId').value.trim();
    const secretInput = document.getElementById('wclSecret').value.trim();
    
    if (idInput.length !== 36 || secretInput.length !== 40) {
        alert("API Keys length is incorrect. Please check them.");
        return;
    }

    const config = { name: document.getElementById('profileName').value, wclId: idInput, wclSecret: secretInput, webhook: document.getElementById('discordWebhook').value };
    localStorage.setItem('auditor_config', JSON.stringify(config));
    alert("Saved!"); toggleSettings(); checkLoginStatus(); 
}

function logoutProfile() { if(confirm("Disconnect profile?")) { localStorage.removeItem('auditor_config'); checkLoginStatus(); } }
async function enviarADiscord() {
    const config = JSON.parse(localStorage.getItem('auditor_config') || '{}');
    if (!config.webhook) return alert("Please configure the Webhook in Settings.");
    const logId = parseLogId(document.getElementById('logId').value);
    const msg = { embeds: [{ title: `🛡️ Audit - ${config.name || "Auditor"}`, description: `Log: **${window.currentLogTitle || logId}**`, color: 16035840, fields: [{ name: "View Audit", value: `[Link](${window.location.href.split('?')[0]}?log=${logId})` }, { name: "Original Report", value: `[WCL](https://www.warcraftlogs.com/reports/${logId})` }] }] };
    await fetch(config.webhook, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(msg) });
    alert("Sent to Discord!");
}

window.onload = () => {
    checkLoginStatus(); 
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('log')) { document.getElementById('logId').value = urlParams.get('log'); auditarLog(); }
    document.getElementById('logId').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            auditarLog();
        }
    });
};