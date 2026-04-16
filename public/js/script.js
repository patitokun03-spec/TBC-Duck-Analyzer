window.missingAuras = new Set();
window.missingSpells = new Set();
window.activeClassFilters = null;

// Alias mapping for WCL spec names that don't match our SPEC_ICONS keys
const SPEC_ALIASES = {
    "Druid-Guardian": "Druid-Feral",
    "Druid-Feral Combat": "Druid-Feral",
    "Warlock-Curses": "Warlock-Affliction",
    "Paladin-Justicar": "Paladin-Protection",
};

function detectPlayerSpec(player, combatantInfo) {
    if (!player) return "Unknown";

    // WCL provides spec via player.icon as "class-spec" (e.g. "paladin-protection")
    // Trust WCL first. Only fall back to stat inference when WCL gives just the class.
    if (player.icon) {
        const iconStr = player.icon.toLowerCase();

        // Check if it looks like a "class-spec" or "class" string
        if (iconStr.includes('-') || CLASSES.map(c => c.toLowerCase()).includes(iconStr)) {
            const parts = iconStr.split('-');

            if (parts.length >= 2) {
                // "paladin-protection" -> "Paladin-Protection"
                const normalized = parts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('-');
                // Check aliases first (e.g. "Paladin-Justicar" -> "Paladin-Protection")
                if (SPEC_ALIASES[normalized]) return SPEC_ALIASES[normalized];
                // Direct match in our spec icons
                if (SPEC_ICONS[normalized]) return normalized;
            } else if (parts.length === 1) {
                // WCL gave just the class name without spec (e.g. "Paladin")
                // Attempt stat-based inference if we have combatantInfo
                const normalized = iconStr.charAt(0).toUpperCase() + iconStr.slice(1);
                if (CLASSES.includes(normalized)) {
                    return inferSpecFromStats(normalized, combatantInfo);
                }
            }
        }

        // icon is a raw WoW icon name (not a spec string) - return as-is
        return player.icon;
    }

    // Fallback: WCL gave no icon at all
    if (player.subType && CLASSES.includes(player.subType)) {
        return inferSpecFromStats(player.subType, combatantInfo);
    }
    return player.subType || "Unknown";
}


// Sensible raid defaults per class when WCL doesn't provide a spec AND we have no gear stats
const CLASS_SPEC_DEFAULTS = {
    "Warrior": "Warrior-Fury",
    "Paladin": "Paladin-Holy",
    "Hunter": "Hunter-BeastMastery",
    "Rogue": "Rogue-Combat",
    "Priest": "Priest-Holy",
    "Shaman": "Shaman-Restoration",
    "Mage": "Mage-Fire",
    "Warlock": "Warlock-Destruction",
    "Druid": "Druid-Balance",
};

// Fallback: infer spec from combatantInfo stats when WCL doesn't provide a spec.
// NOTE: WCL reports block/dodge/crit as PERCENTAGES (0-100), armor as raw value.
function inferSpecFromStats(className, info) {
    if (!info) return CLASS_SPEC_DEFAULTS[className] || className;

    const agi       = info.agility   || 0;
    const intel     = info.intellect || 0;
    const str       = info.strength  || 0;
    const armor     = info.armor     || 0;
    const hitSpell  = info.hitSpell  || 0;
    const hitMelee  = info.hitMelee  || 0;
    const critSpell = info.critSpell || 0;
    const block     = info.block     || 0;  // % block chance
    const dodge     = info.dodge     || 0;  // % dodge chance

    switch (className) {
        case "Paladin":
            // Prot: plate + shield = armor > 12000, or block% > 15
            if (armor > 12000 || block > 15) return "Paladin-Protection";
            // Ret: str dominant over int, has melee hit
            if (str > intel && str > 250 && hitMelee > 0) return "Paladin-Retribution";
            return "Paladin-Holy";

        case "Warrior":
            // Prot: shield equipped = armor > 12000, or block% > 15
            if (armor > 12000 || block > 15) return "Warrior-Protection";
            return "Warrior-Fury";

        case "Druid":
            if ((agi > 300 || armor > 15000) && hitMelee > hitSpell) return "Druid-Feral";
            if (hitSpell > 50 && critSpell > 50) return "Druid-Balance";
            if (intel > 300 && hitSpell <= 50 && hitMelee <= 30) return "Druid-Restoration";
            return agi > intel ? "Druid-Feral" : "Druid-Balance";

        case "Priest":
            if (hitSpell > 50 && critSpell > 50) return "Priest-Shadow";
            return "Priest-Holy";

        case "Shaman":
            if (agi > 300 && hitMelee > 30) return "Shaman-Enhancement";
            if (hitSpell > 50 && critSpell > 50) return "Shaman-Elemental";
            return "Shaman-Restoration";

        default:
            return CLASS_SPEC_DEFAULTS[className] || className;
    }
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

            if (p && ev.gear) {
                if (!window.playerGearDB) window.playerGearDB = {};
                if (!window.playerGearDB[fightId]) window.playerGearDB[fightId] = {};
                window.playerGearDB[fightId][p.name] = ev.gear;
            }

            // --- DETECCIÓN DE ESPECIALIZACIÓN ---
            // Pass ev (combatantInfo event) so stat inference can use gear stats when WCL has no spec
            let playerSpec = detectPlayerSpec(p, ev);

            if (p && p.subType === 'Paladin') {
                console.log(`[SPEC DEBUG] Paladin: ${p.name} | icon: "${p.icon}" | detected: "${playerSpec}"`);
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

                        if (rawEnchant && ENCHANT_DB[rawEnchant]) {
                            enchants.push(rawEnchant);
                        }
                    }
                });
            }
            playerTempEnchants[ev.sourceID].push({ enchants: enchants, weapons: weapons });
        } else if (['applybuff', 'applybuffstack', 'refreshbuff', 'cast'].includes(ev.type)) {
            if (typeof BUFF_DB !== 'undefined' && BUFF_DB[ev.abilityGameID]) {
                const srcId = ev.sourceID;
                if (!playerCombatantInfos[srcId]) playerCombatantInfos[srcId] = [[]];
                else if (playerCombatantInfos[srcId].length === 0) playerCombatantInfos[srcId].push([]);

                if (!playerCombatantInfos[srcId][playerCombatantInfos[srcId].length - 1].includes(ev.abilityGameID)) {
                    playerCombatantInfos[srcId][playerCombatantInfos[srcId].length - 1].push(ev.abilityGameID);
                }
            }
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
                return `<div class="mech-row"><span><span class="medal">${medal}</span><span class="${p.cls}-color font-bold">${p.name}</span></span><span class="spell-damage">${p.damage >= 1000 ? (p.damage / 1000).toFixed(1) + 'k' : p.damage}</span></div>`;
            }).join('');
            mechSidebarHTML = `<div class="mechanics-sidebar"><div class="mech-box"><div class="mech-header" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'flex' : 'none'; this.innerHTML = this.nextElementSibling.style.display === 'none' ? '▶ 🚨 SHATTER DMG' : '▼ 🚨 SHATTER DMG';" style="cursor:pointer; display:flex; align-items:center; justify-content:center; gap:5px;">▼ 🚨 SHATTER DMG</div><div class="mech-body">${listHTML}</div></div></div>`;
        }
    }

    let hasEvents = Object.values(classGroups).some(cls => Object.keys(cls).length > 0);

    let classFiltersHTML = "";
    if (hasEvents) {
        classFiltersHTML = `<div class="class-filters-container">`;
        CLASSES.forEach(cls => {
            if (Object.keys(classGroups[cls]).length > 0) {
                let iconName = SPEC_ICONS[cls] || 'inv_misc_questionmark';
                if (cls === 'Paladin') iconName = 'spell_holy_auraoflight';
                if (cls === 'Warlock') iconName = 'spell_shadow_rainoffire';
                if (cls === 'Mage') iconName = 'spell_nature_wispsplode';

                let isActive = window.activeClassFilters === null || window.activeClassFilters.has(cls);
                let btnActiveCls = isActive ? "active" : "";

                classFiltersHTML += `<button class="class-filter-btn ${btnActiveCls}" data-class="${cls}" onclick="toggleClassVisibility('${cls}', this)">
                    <img src="/api/icon/${iconName}.jpg" onerror="this.src='/api/icon/inv_misc_questionmark.jpg'" class="filter-icon">
                    <span class="${cls}-color">${cls}</span>
                </button>`;
            }
        });
        classFiltersHTML += `</div>`;
    }

    let html = `${classFiltersHTML}<div class="boss-content-inner"><div class="class-rows-container">`;

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

            let isActive = window.activeClassFilters === null || window.activeClassFilters.has(cls);
            return `
            <div class="class-row ${cls}-row" style="display: ${isActive ? 'flex' : 'none'};">
                <div class="class-header ${cls}-header">${cls}</div>
                <div class="class-players">
                    ${playersSorted.map(([name, data]) => {
                let htmlBuffs = "";
                const p = allActors.find(x => x.name === name);
                const infos = p ? (playerCombatantInfos[p.id] || []) : [];
                const enchInfos = p ? (playerTempEnchants[p.id] || []) : [];
                const totalFights = Math.max(1, infos.length);

                let standardBuffHtmls = [];
                let weaponBuffHtmls = [];
                const isOverall = (fightId === 'overall' && infos.length > 1);

                const usedBuffs = Object.keys(BUFF_DB).filter(id => infos.some(auras => auras.includes(parseInt(id))));
                usedBuffs.forEach(id => {
                    const count = infos.filter(auras => auras.includes(parseInt(id))).length;
                    let ratioDisplay = `<span class="buff-ratio">${count}${isOverall ? `/${totalFights}` : ''}</span>`;
                    standardBuffHtmls.push(`<div class="buff-item has-tooltip"><img class="buff-icon" src="/api/icon/${BUFF_DB[id].icon}.jpg" onerror="this.src='/api/icon/inv_misc_questionmark.jpg'"><span class="custom-tooltip">${BUFF_DB[id].name}</span>${ratioDisplay}</div>`);
                });

                const weaponBuffsAggregated = {};
                let totalExpectedWeapons = 0;
                enchInfos.forEach(info => {
                    totalExpectedWeapons += info.weapons;
                    info.enchants.forEach(eId => {
                        if (ENCHANT_DB[eId]) {
                            let enchName = ENCHANT_DB[eId].name;
                            if (!weaponBuffsAggregated[enchName]) weaponBuffsAggregated[enchName] = { count: 0, icon: ENCHANT_DB[eId].icon || 'inv_misc_questionmark' };
                            weaponBuffsAggregated[enchName].count += 1;
                        }
                    });
                });

                Object.entries(weaponBuffsAggregated).forEach(([enchName, d]) => {
                    let ratioHtml = `<span class="buff-ratio">${d.count}${isOverall || totalExpectedWeapons > 1 ? `/${totalExpectedWeapons}` : ''}</span>`;
                    weaponBuffHtmls.push(`<div class="buff-item has-tooltip"><img class="buff-icon weapon-enchant" src="/api/icon/${d.icon}.jpg" onerror="this.src='/api/icon/inv_misc_questionmark.jpg'"><span class="custom-tooltip">${enchName} (Weapon)</span>${ratioHtml}</div>`);
                });

                let allBuffHtmls = [...standardBuffHtmls, ...weaponBuffHtmls];
                htmlBuffs = allBuffHtmls.length === 0 ? '<span style="font-size:0.75rem; color:#ff5252; font-weight:bold;">NO BUFFS</span>' : allBuffHtmls.join('');

                let spellListHtml = Object.entries(data.spells).filter(([spellId]) => SPELL_DB[spellId] && spellId != 33671).sort(([spellIdA], [spellIdB]) => {
                    const catA = SPELL_DB[spellIdA].category || 2;
                    const catB = SPELL_DB[spellIdB].category || 2;
                    return catA - catB;
                }).map(([spellId, sData]) => {
                    let dmgText = sData.damage > 0 ? (sData.damage >= 1000 ? (sData.damage / 1000).toFixed(1) + 'k' : sData.damage) : "";
                    return `<div class="spell-item has-tooltip"><img class="spell-icon" src="/api/icon/${SPELL_DB[spellId].icon}.jpg" onerror="this.src='/api/icon/inv_misc_questionmark.jpg'"><span class="custom-tooltip">${SPELL_DB[spellId].name}</span><span class="spell-count">x${Math.max(1, sData.count)}</span>${sData.damage > 0 ? `<span class="spell-damage">${dmgText}</span>` : ''}</div>`;
                }).join('');

                let specRaw = data.specIcon || cls;
                let specImgName = SPEC_ICONS[specRaw] || SPEC_ICONS[specRaw.split('-')[0]] || SPEC_ICONS[cls] || 'inv_misc_questionmark';

                let gearBtnHtml = `<button class="inspect-btn" onclick="openGearModal('${name}', '${fightId}', '${cls}', '${specRaw}')">🔍 Inspect Gear</button>`;

                return `<div class="player-card"><div class="player-name ${cls}-color"><img src="/api/icon/${specImgName}.jpg" class="spec-icon" onerror="this.src='/api/icon/inv_misc_questionmark.jpg'">${name}</div>${gearBtnHtml}${htmlBuffs ? `<div class="buff-bar">${htmlBuffs}</div>` : ''}<div class="spell-grid">${spellListHtml}</div></div>`;
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

    divTabs.innerHTML = "";
    divRes.innerHTML = "<p style='text-align:center; color:#f4b400; font-weight:bold; font-size:1.2rem; margin-top:20px;'>POLICE IS INVESTIGATING...</p>";

    window.detectedSpecs = {};
    window.playerEnchantsForConsole = {};
    
    // Solo inicializamos los filtros si es la primera vez (null) para no pisar selecciones entre logs
    if (window.activeClassFilters === null) {
        window.activeClassFilters = new Set(CLASSES);
    }

    try {
        const responseData = await fetch('/api/audit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ logId })
        });

        const res = await responseData.json();

        if (res.error) throw new Error(res.error);
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
            
            let bossIconHtml = "";
            let bossKey = fight.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            // Gruul's Lair
            if (bossKey.includes('gruul')) bossIconHtml = `<img src="/assets/bosses/ui-ej-boss-gruul-the-dragonkiller.png" class="boss-tab-icon">`;
            else if (bossKey.includes('maulgar')) bossIconHtml = `<img src="/assets/bosses/ui-ej-boss-high-king-maulgar.png" class="boss-tab-icon">`;
            // Magtheridon's Lair
            else if (bossKey.includes('magtheridon')) bossIconHtml = `<img src="/assets/bosses/ui-ej-boss-magtheridon.png" class="boss-tab-icon">`;
            // Karazhan
            else if (bossKey.includes('attumen')) bossIconHtml = `<img src="/assets/bosses/ui-ej-boss-attumen-the-huntsman.png" class="boss-tab-icon">`;
            else if (bossKey.includes('moroes')) bossIconHtml = `<img src="/assets/bosses/ui-ej-boss-moroes.png" class="boss-tab-icon">`;
            else if (bossKey.includes('maiden')) bossIconHtml = `<img src="/assets/bosses/ui-ej-boss-maiden-of-virtue.png" class="boss-tab-icon">`;
            else if (bossKey.includes('opera') || bossKey.includes('romulo') || bossKey.includes('julianne') || bossKey.includes('big-bad-wolf') || bossKey.includes('wizard-of-oz') || bossKey.includes('crone')) bossIconHtml = `<img src="/assets/bosses/ui-ej-boss-opera.png" class="boss-tab-icon">`;
            else if (bossKey.includes('curator')) bossIconHtml = `<img src="/assets/bosses/ui-ej-boss-the-curator.png" class="boss-tab-icon">`;
            else if (bossKey.includes('shade') || bossKey.includes('aran')) bossIconHtml = `<img src="/assets/bosses/ui-ej-boss-shade-of-aran.png" class="boss-tab-icon">`;
            else if (bossKey.includes('illhoof') || bossKey.includes('terestian')) bossIconHtml = `<img src="/assets/bosses/ui-ej-boss-terestian-illhoof.png" class="boss-tab-icon">`;
            else if (bossKey.includes('netherspite')) bossIconHtml = `<img src="/assets/bosses/ui-ej-boss-netherspite.png" class="boss-tab-icon">`;
            else if (bossKey.includes('malchezaar') || bossKey.includes('prince')) bossIconHtml = `<img src="/assets/bosses/ui-ej-boss-prince-malchezaar.png" class="boss-tab-icon">`;
            else if (bossKey.includes('chess')) bossIconHtml = `<img src="/assets/bosses/ui-ej-boss-chess-alliance.png" class="boss-tab-icon">`;

            tabsHtml += `<button id="tab-${fight.id}" class="tab-btn ${isKill ? "kill" : "wipe"}" onclick="showEncounter('${fight.id}')">${bossIconHtml} ${fight.name}${statusText}</button>`;
            const fightEvents = allEvents.filter(ev => ev.timestamp >= (fight.startTime - 15000) && ev.timestamp <= (fight.endTime + 5000));
            contentHtml += `<div id="enc-${fight.id}" class="encounter-content">${buildEncounterHTML(fight.id, fightEvents, allActors)}</div>`;
        });

        document.getElementById('encounterTabs').innerHTML = tabsHtml;
        divRes.innerHTML = contentHtml;
        document.getElementById('btnDiscord').style.display = "inline-block";
        window.history.pushState({}, '', '/report/' + logId);

        // --- PRECARGA INVISIBLE DE NOMBRES WOWHEAD ---
        let prefetchDiv = document.getElementById('wh-prefetch');
        if (!prefetchDiv) {
            prefetchDiv = document.createElement('div');
            prefetchDiv.id = 'wh-prefetch';
            prefetchDiv.style.cssText = 'display:none; pointer-events:none; position:absolute; width:0; height:0; overflow:hidden;';
            document.body.appendChild(prefetchDiv);
        }
        let uniqueItemIds = new Set();
        if (window.playerGearDB) {
            Object.values(window.playerGearDB).forEach(fightMap => {
                Object.values(fightMap).forEach(gearArr => {
                    if (Array.isArray(gearArr)) {
                        gearArr.forEach(item => { if (item && item.id) uniqueItemIds.add(item.id); });
                    }
                });
            });
        }
        let prefetchHtml = '';
        uniqueItemIds.forEach(id => {
            prefetchHtml += `<a href="https://tbc.wowhead.com/item=${id}"></a>`;
        });
        prefetchDiv.innerHTML = prefetchHtml;

    } catch (e) { divRes.innerHTML = `<p style='text-align:center; color:#ff5252; font-weight:bold; font-size:1.1rem; margin-top:20px;'>Error: ${e.message}</p>`; }
}


// =============================================
// DISCORD WEBHOOK PROFILE MANAGER
// Profiles stored in localStorage as JSON array
// [{id, name, url}]
// =============================================

let _editingWebhookId = null; // null = adding new, string = editing existing

function getWebhookProfiles() {
    try {
        return JSON.parse(localStorage.getItem('discord_webhooks') || '[]');
    } catch { return []; }
}

function saveWebhookProfiles(profiles) {
    localStorage.setItem('discord_webhooks', JSON.stringify(profiles));
}

function renderWebhookProfiles() {
    const list = document.getElementById('webhookProfilesList');
    if (!list) return;
    const profiles = getWebhookProfiles();

    if (profiles.length === 0) {
        list.innerHTML = '';
        return;
    }

    list.innerHTML = profiles.map(p => `
        <div class="webhook-profile-card">
            <div class="webhook-profile-info">
                <div class="webhook-profile-name">💬 ${escapeHtml(p.name)}</div>
                <div class="webhook-profile-url">${escapeHtml(p.url)}</div>
            </div>
            <div class="webhook-profile-actions">
                <button class="webhook-btn-send" onclick="sendToWebhookProfile('${p.id}')">▶ Send</button>
                <button class="webhook-btn-edit" onclick="editWebhookProfile('${p.id}')">✏</button>
                <button class="webhook-btn-delete" onclick="deleteWebhookProfile('${p.id}')">🗑</button>
            </div>
        </div>
    `).join('');
}

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function showWebhookForm(editId = null) {
    _editingWebhookId = editId;
    const form = document.getElementById('webhookForm');
    const section = document.querySelector('.webhook-profiles-section');
    const formTitle = document.getElementById('webhookFormTitle');
    const nameInput = document.getElementById('webhookNameInput');
    const urlInput = document.getElementById('discordWebhookInput');

    if (editId) {
        const profiles = getWebhookProfiles();
        const p = profiles.find(x => x.id === editId);
        if (p) {
            nameInput.value = p.name;
            urlInput.value = p.url;
        }
        formTitle.textContent = '✏️ Edit Profile';
    } else {
        nameInput.value = '';
        urlInput.value = '';
        formTitle.textContent = '➕ New Profile';
    }

    section.style.display = 'none';
    form.style.display = 'flex';
    nameInput.focus();
}

function hideWebhookForm() {
    _editingWebhookId = null;
    document.getElementById('webhookForm').style.display = 'none';
    document.querySelector('.webhook-profiles-section').style.display = 'flex';
}

function saveWebhookProfile() {
    const name = document.getElementById('webhookNameInput').value.trim();
    const url = document.getElementById('discordWebhookInput').value.trim();

    if (!name) {
        document.getElementById('webhookNameInput').focus();
        document.getElementById('webhookNameInput').style.borderColor = '#ff5252';
        setTimeout(() => document.getElementById('webhookNameInput').style.borderColor = '', 2000);
        return;
    }
    if (!url || !url.includes('discord.com/api/webhooks/')) {
        document.getElementById('discordWebhookInput').focus();
        document.getElementById('discordWebhookInput').style.borderColor = '#ff5252';
        setTimeout(() => document.getElementById('discordWebhookInput').style.borderColor = '', 2000);
        return;
    }

    const profiles = getWebhookProfiles();

    if (_editingWebhookId) {
        const idx = profiles.findIndex(x => x.id === _editingWebhookId);
        if (idx !== -1) {
            profiles[idx].name = name;
            profiles[idx].url = url;
        }
    } else {
        profiles.push({ id: Date.now().toString(), name, url });
    }

    saveWebhookProfiles(profiles);
    hideWebhookForm();
    renderWebhookProfiles();
}

function editWebhookProfile(id) {
    showWebhookForm(id);
}

function deleteWebhookProfile(id) {
    const profiles = getWebhookProfiles().filter(x => x.id !== id);
    saveWebhookProfiles(profiles);
    renderWebhookProfiles();
}

async function sendToWebhookProfile(id) {
    const profiles = getWebhookProfiles();
    const p = profiles.find(x => x.id === id);
    if (!p) return;

    const btn = document.querySelector(`.webhook-profile-card .webhook-btn-send[onclick*="${id}"]`);
    if (btn) {
        btn.textContent = '⏳ Sending...';
        btn.disabled = true;
    }

    const logId = parseLogId(document.getElementById('logId').value);
    const reportUrl = `${window.location.origin}/report/${logId}`;
    const msg = {
        embeds: [{
            title: "🦆 TBC Duck Analyzer - Log Audit",
            description: `${window.currentLogTitle || logId}\n\n📊 [**View Full Audit**](${reportUrl})\n📜 [**Original WCL Report**](https://www.warcraftlogs.com/reports/${logId})`,
            color: 16035840
        }]
    };

    try {
        const resp = await fetch(p.url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(msg) });
        if (resp.ok || resp.status === 204) {
            if (btn) { btn.textContent = '✅ Sent!'; setTimeout(() => { btn.textContent = '▶ Send'; btn.disabled = false; }, 2000); }
        } else {
            throw new Error(`HTTP ${resp.status}`);
        }
    } catch (e) {
        if (btn) { btn.textContent = '❌ Error'; setTimeout(() => { btn.textContent = '▶ Send'; btn.disabled = false; }, 2500); }
    }
}

function enviarADiscord() {
    document.getElementById('discordOverlay').classList.add('is-open');
    // Always show list first, hide form
    hideWebhookForm();
    renderWebhookProfiles();
}

function closeDiscordModal() {
    document.getElementById('discordOverlay').classList.remove('is-open');
    hideWebhookForm();
}

// Legacy: kept for compatibility but now unused
async function procesarDiscordWebhook() {}


window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);
    let potentialLogId = urlParams.get('log');

    if (window.location.pathname.startsWith('/report/')) {
        potentialLogId = window.location.pathname.split('/report/')[1];
    }

    if (potentialLogId) {
        document.getElementById('logId').value = potentialLogId;
        auditarLog();
    }

    document.getElementById('logId').addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            auditarLog();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            document.getElementById('gearOverlay').classList.remove('is-open');
        }
    });
};



window.toggleClassVisibility = function(cls, btn) {
    btn.classList.toggle('active');
    let isActive = btn.classList.contains('active');

    if (isActive) {
        window.activeClassFilters.add(cls);
    } else {
        window.activeClassFilters.delete(cls);
    }

    // Aplicar los cambios en TODAS las pre-renderizaciones
    document.querySelectorAll(`.class-row.${cls}-row`).forEach(row => {
        row.style.display = isActive ? 'flex' : 'none';
    });
    
    // Sincronizar todos los botones representativos de esa misma clase
    document.querySelectorAll(`.class-filter-btn[data-class="${cls}"]`).forEach(b => {
        if (isActive) b.classList.add('active');
        else b.classList.remove('active');
    });
};

function openGearModal(playerName, encounterId, className, specName) {
    const gear = (window.playerGearDB && window.playerGearDB[encounterId] && window.playerGearDB[encounterId][playerName]) ? window.playerGearDB[encounterId][playerName] : [];

    console.log(`--- DEBUG GEAR: ${playerName} ---`);
    if (gear && gear.length > 0) {
        gear.forEach((item, index) => {
            if (!item || item.id === 0) return;
            const slotId = item.slotId || (index + 1);
            if (item.permanentEnchant) {
                console.log(`Slot: ${slotId} | Item: ${item.name} | EnchantID: ${item.permanentEnchant}`);
            } else {
                console.log(`Slot: ${slotId} | Item: ${item.name} | No permanent enchant found`);
            }
        });
    }

    document.getElementById('gearModalTitle').innerHTML = `<img src="/api/icon/${SPEC_ICONS[specName] || SPEC_ICONS[specName.split('-')[0]] || SPEC_ICONS[className] || 'inv_misc_questionmark'}.jpg" class="spec-icon" style="width:24px; height:24px; vertical-align:middle; border-radius:4px; margin: 0 8px 0 0; border: 1px solid #444;" onerror="this.src='/api/icon/inv_misc_questionmark.jpg'"> <span class="${className}-color" style="text-transform: uppercase;">${playerName}</span>`;

    let paperDollHtml = '';
    let tableHtml = '';

    if (!gear || gear.length === 0) {
        document.getElementById('gearModalContent').innerHTML = `<p style="text-align:center; color:#aaa; padding:20px;">No gear data available for this encounter.</p>`;
        document.getElementById('gearOverlay').classList.add('is-open');
        return;
    }

    const groups = [
        { title: "Armor", slots: [0, 2, 14, 4, 8, 9, 5, 6, 7] },
        { title: "Jewelry", slots: [1, 10, 11, 12, 13] },
        { title: "Weapons", slots: [15, 16, 17] }
    ];

    let groupHtmlMap = { "Armor": "", "Jewelry": "", "Weapons": "" };

    // Fetch all equipped item IDs for set bonus detection
    let allGearIds = gear.filter(g => g && g.id !== 0).map(g => g.id).join(':');

    // Pre-check: is this player an Enchanter?
    // In TBC only Enchanters can enchant their own rings (slots i=10 and i=11).
    // If either ring has a permanentEnchant, the player is an Enchanter
    // and BOTH rings should have one.
    const ring1 = gear[10];
    const ring2 = gear[11];
    const isEnchanter = (
        (ring1 && ring1.id !== 0 && (ring1.permanentEnchant || ring1.enchant)) ||
        (ring2 && ring2.id !== 0 && (ring2.permanentEnchant || ring2.enchant))
    );

    // Built paperDoll slots & table rows
    for (let i = 0; i <= 18; i++) {
        let item = gear[i];

        if (item && item.id !== 0) {
            let iconUrlStr = item.icon ? item.icon.toLowerCase().replace(/\s+/g, '_').replace(/\.jpg$/i, '') : '';
            let iconUrl = iconUrlStr ? `/api/icon/${iconUrlStr}.jpg` : '/api/icon/inv_misc_questionmark.jpg';

            // Collect gems, enchants, and set pieces for Wowhead Tooltips
            let wowheadParams = `item=${item.id}&pcs=${allGearIds}`;
            let gemIdsStr = '';

            // Gems using medium icon so they exist on server, we resize via CSS
            let gemsHtml = '';
            let gemsTableHtml = '';
            if (item.gems && item.gems.length > 0) {
                gemIdsStr = item.gems.map(g => g.id).join(':');
                wowheadParams += `&gems=${gemIdsStr}`;

                item.gems.forEach((g, gemIdx) => {
                    let gemIconStr = g.icon ? g.icon.toLowerCase().replace(/\s+/g, '_').replace(/\.jpg$/i, '') : 'inv_misc_questionmark';
                    let isMetaGem = (i === 0 && gemIdx === 0);
                    let gemClass = isMetaGem ? 'paperdoll-gem-icon meta-gem' : 'paperdoll-gem-icon';
                    let gemTableClass = isMetaGem ? 'socket-icon meta-gem' : 'socket-icon';
                    let linkStyle = isMetaGem ? 'display:inline-block; line-height:0;' : 'display:inline-block; line-height:0; border-radius:50%;';
                    let linkTableStyle = isMetaGem ? 'display:inline-block; line-height:0; margin:0 1px;' : 'display:inline-block; line-height:0; border-radius:50%; margin:0 1px;';
                    gemsHtml += `<a href="https://www.wowhead.com/tbc/item=${g.id}" onclick="event.preventDefault();" data-wowhead="item=${g.id}&domain=tbc" data-wh-rename-link="false" data-wh-icon-size="none" style="${linkStyle}"><img class="${gemClass}" src="/api/icon/${gemIconStr}.jpg" onerror="this.style.display='none'"></a>`;
                    gemsTableHtml += `<a href="https://www.wowhead.com/tbc/item=${g.id}" onclick="event.preventDefault();" data-wowhead="item=${g.id}&domain=tbc" data-wh-rename-link="false" data-wh-icon-size="none" style="${linkTableStyle}"><img class="${gemTableClass}" src="/api/icon/${gemIconStr}.jpg" onerror="this.style.display='none'"></a>`;
                });
            }

            let permEnchant = item.permanentEnchant || item.enchant;
            let rawEnchant = permEnchant;
            let enchantHtml = '';

            let slotId = i + 1;

            function isEnchantable(sId) {
                // Standard enchantable slots
                // 1=Head, 3=Shoulder, 5=Chest, 7=Legs, 8=Feet, 9=Wrist, 10=Hands
                // 15=Back, 16=MainHand, 17=OffHand/Shield
                const validSlots = [1, 3, 5, 7, 8, 9, 10, 15, 16, 17];
                return validSlots.includes(sId);
            }

            let needsEnchant = isEnchantable(slotId);

            // Rings (i=10 → slotId=11, i=11 → slotId=12):
            // Only flag as needing enchant if the player is confirmed as an Enchanter
            if ((i === 10 || i === 11) && isEnchanter) {
                needsEnchant = true;
            }

            if (slotId === 17) {
                const itemName = (item.name || "").toLowerCase();
                const itemType = (item.type || "").toLowerCase();
                const itemSubType = (item.subType || "").toLowerCase();
                if (!itemName.includes("shield") && !itemType.includes("shield") && !itemType.includes("weapon") && !itemSubType.includes("shield")) {
                    needsEnchant = false;
                }
            }

            let isMissingEnchant = false;

            if (needsEnchant && (typeof permEnchant === 'undefined' || !permEnchant || permEnchant === 0)) {
                isMissingEnchant = true;
                enchantHtml = `<span style="color: #ff5252; font-weight:bold;">Slacking</span>`;
            } else if (rawEnchant && rawEnchant !== 0) {
                wowheadParams += `&ench=${rawEnchant}`;
                let color = "#ff5252";
                let enchantEmoji = "❓";
                if (typeof OPTIMAL_ENCHANTS !== 'undefined' && OPTIMAL_ENCHANTS[specName]) {
                    const enchData = OPTIMAL_ENCHANTS[specName];
                    if (enchData.best && enchData.best.includes(rawEnchant)) {
                        color = "#4caf50";
                        enchantEmoji = "✨";
                    } else if (enchData.alt && enchData.alt.includes(rawEnchant)) {
                        color = "#f4b400";
                        enchantEmoji = "🟨";
                    }
                }

                if (ENCHANT_DB[rawEnchant]) {
                    enchantHtml = `${enchantEmoji} <span style="color: ${color};">${ENCHANT_DB[rawEnchant].name}</span>`;
                } else {
                    enchantHtml = `${enchantEmoji} <a href="https://www.wowhead.com/tbc/enchant=${rawEnchant}" data-wowhead="domain=tbc" style="color: ${color}; text-decoration:none; opacity: 1; pointer-events: none;">Enchant #${rawEnchant}</a>`;
                }
            }

            // Add domain
            wowheadParams += `&domain=tbc`;

            // Quality colors class
            let qClass = '';
            let iconClass = '';
            if (item.quality === 4) { qClass = 'q-epic'; iconClass = 'icon-q4'; }
            else if (item.quality === 3) { qClass = 'q-rare'; iconClass = 'icon-q3'; }
            else if (item.quality === 5) { qClass = 'q-legendary'; iconClass = 'icon-q5'; }
            else if (item.quality === 2) { qClass = 'q-uncommon'; iconClass = 'icon-q2'; }

            // To make sure wowhead links are positioned over the image inside the slot box properly, wrap them inside.
            paperDollHtml += `<div class="gear-slot paperdoll-slot slot-${i} ${iconClass}">
                <a href="https://www.wowhead.com/tbc/item=${item.id}" onclick="event.preventDefault();" data-wowhead="${wowheadParams}" data-wh-rename-link="false" data-wh-icon-size="none" style="display:block; width:100%; height:100%;">
                    <img src="${iconUrl}" onerror="this.src='/api/icon/inv_misc_questionmark.jpg'" class="slot-icon" ${isMissingEnchant ? 'style="border: 1px solid #ff5252; box-shadow: 0 0 10px #ff5252; width:100%; height:100%; display:block; object-fit:cover;"' : 'style="width:100%; height:100%; display:block; object-fit:cover;"'}>
                </a>
                <div class="gem-container paperdoll-gems">${gemsHtml}</div>
                ${isMissingEnchant ? `<div style="position:absolute; top:-6px; right:-6px; font-size:12px; font-weight:bold; color:#ff5252; text-shadow:0 0 3px #000, 0 0 3px #000; z-index:25; pointer-events:none;">❌</div>` : ''}
            </div>`;

            // Generate row HTML
            let rowHtml = `
                <div class="gear-table-row">
                    <div class="gear-table-icon-group">
                        <a href="https://www.wowhead.com/tbc/item=${item.id}" onclick="event.preventDefault();" data-wowhead="${wowheadParams}" data-wh-rename-link="false" data-wh-icon-size="none" style="display:block; text-decoration:none;">
                            <img class="gear-table-icon ${iconClass}" src="${iconUrl}" onerror="this.src='/api/icon/inv_misc_questionmark.jpg'">
                        </a>
                    </div>
                    <div class="gear-table-details">
                        <span class="gear-table-name ${qClass}" style="background-image:none !important; padding-left:0 !important;">
                            <a href="https://www.wowhead.com/tbc/item=${item.id}" onclick="event.preventDefault();" data-wowhead="domain=tbc" data-wh-rename-link="true" class="item-name-no-tooltip">...</a>
                        </span>
                        ${enchantHtml ? `<div class="gear-table-enchants">${enchantHtml}</div>` : ''}
                    </div>
                </div>`;

            // Put in correct group
            groups.forEach(group => {
                if (group.slots.includes(i)) groupHtmlMap[group.title] += rowHtml;
            });

        } else {
            // Empy slots remain absolute correctly
            paperDollHtml += `<div class="gear-slot slot-${i}" style="opacity:0.2; background: url('/api/icon/inv_misc_questionmark.jpg') center/cover;"></div>`;
        }
    }

    // Assemble table groups in two columns
    tableHtml = `
        <div class="gear-column-left">
            <div class="table-section-title">Armor</div>
            ${groupHtmlMap["Armor"]}
        </div>
        <div class="gear-column-right">
            <div class="table-section-title">Jewelry</div>
            ${groupHtmlMap["Jewelry"]}
            <div class="table-section-title">Weapons</div>
            ${groupHtmlMap["Weapons"]}
        </div>
    `;

    let bgIcon = SPEC_ICONS[specName] || SPEC_ICONS[specName.split('-')[0]] || SPEC_ICONS[className] || 'inv_misc_questionmark';

    const contentHtmlStr = `
        <div class="gear-modal-content">
            <div class="paperdoll-container" style="background: radial-gradient(circle, #2a2a2a 0%, #111 80%); border: 2px solid #222; border-radius: 12px; box-shadow: inset 0 0 40px rgba(0,0,0,0.9);">
                <div style="position: absolute; top:15px; left:50%; transform:translateX(-50%); width:150px; height:405px; background: url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 100 185\\'%3E%3Cpath fill=\\'%23333\\' opacity=\\'0.5\\' d=\\'M35,20 C35,10 65,10 65,20 C65,30 60,35 50,35 C40,35 35,30 35,20 Z M25,40 L75,40 L85,100 L75,100 L70,60 L60,60 L60,180 L40,180 L40,60 L30,60 L25,100 L15,100 Z\\'/%3E%3C/svg%3E') center/contain no-repeat;"></div>
                ${paperDollHtml}
            </div>
            <div class="gear-table-container">
                ${tableHtml}
            </div>
        </div>
    `;

    const fragment = document.createDocumentFragment();
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = contentHtmlStr;
    while (tempDiv.firstChild) {
        fragment.appendChild(tempDiv.firstChild);
    }

    const gearContentEl = document.getElementById('gearModalContent');
    gearContentEl.innerHTML = '';
    gearContentEl.appendChild(fragment);

    document.getElementById('gearOverlay').classList.add('is-open');

    if (typeof $WowheadPower !== 'undefined') {
        $WowheadPower.refreshLinks();
    }
}

function closeGearModal() {
    document.getElementById('gearOverlay').classList.remove('is-open');
}


