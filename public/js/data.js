const CLASSES = ["Warrior", "Paladin", "Hunter", "Rogue", "Priest", "Shaman", "Mage", "Warlock", "Druid"];

// === DICCIONARIO MASIVO DE SPECS TBC ===
const SPEC_ICONS = {
    // WARRIOR
    "Warrior": "ability_warrior_innerrage",
    "Warrior-Arms": "ability_warrior_savageblow",
    "Warrior-Fury": "ability_warrior_innerrage",
    "Warrior-Protection": "inv_shield_06",

    // PALADIN
    "Paladin": "spell_holy_auramasters",
    "Paladin-Holy": "spell_holy_holybolt",
    "Paladin-Protection": "spell_holy_avengersshield", // Escudo oficial
    "Paladin-Retribution": "spell_holy_auraoflight",

    // HUNTER
    "Hunter": "ability_hunter_beasttaming",
    "Hunter-BeastMastery": "ability_hunter_beasttaming",
    "Hunter-Marksmanship": "ability_marksmanship",
    "Hunter-Survival": "ability_hunter_swiftstrike",

    // ROGUE
    "Rogue": "ability_rogue_eviscerate",
    "Rogue-Combat": "ability_backstab",
    "Rogue-Assassination": "ability_rogue_eviscerate",
    "Rogue-Subtlety": "ability_stealth",

    // PRIEST
    "Priest": "spell_holy_wordfortitude",
    "Priest-Holy": "spell_holy_guardianspirit",
    "Priest-Discipline": "spell_holy_powerwordshield",
    "Priest-Shadow": "spell_shadow_shadowwordpain",

    // SHAMAN
    "Shaman": "spell_nature_bloodlust",
    "Shaman-Elemental": "spell_nature_lightning",
    "Shaman-Enhancement": "spell_nature_lightningshield",
    "Shaman-Restoration": "spell_nature_magicimmunity",

    // MAGE
    "Mage": "spell_frost_frostbolt",
    "Mage-Arcane": "spell_holy_magicalsentry",
    "Mage-Fire": "spell_fire_firebolt02",
    "Mage-Frost": "spell_frost_frostbolt02",

    // WARLOCK
    "Warlock": "spell_shadow_metamorphosis",
    "Warlock-Affliction": "spell_shadow_deathcoil",
    "Warlock-Demonology": "spell_shadow_metamorphosis",
    "Warlock-Destruction": "spell_shadow_rainoffire",

    // DRUID
    "Druid": "ability_druid_catform",
    "Druid-Balance": "spell_nature_starfall",
    "Druid-Feral": "ability_racial_bearform",
    "Druid-Restoration": "spell_nature_healingtouch"
};

const BUFF_DB = {
    // Elixires
    17538: { name: "Elixir of Mongoose", icon: "inv_potion_32" },
    11406: { name: "Elixir Demonslaying", icon: "inv_potion_27" },
    17539: { name: "Greater Arcane Elixir", icon: "inv_potion_25" },
    28497: { name: "Elixir Major Agility", icon: "inv_potion_127" },
    39627: { name: "Elixir Draenic Wisdom", icon: "inv_potion_155" },
    28509: { name: "Elixir Major Mageblood", icon: "inv_potion_151" },
    33721: { name: "Adept's Elixir", icon: "inv_potion_96" },
    28491: { name: "Elixir Healing Power", icon: "inv_potion_142" },
    28503: { name: "Elixir Major Shadow", icon: "inv_potion_145" },
    28490: { name: "Elixir Major Strength", icon: "inv_potion_152" },
    38954: { name: "Fel Strength Elixir", icon: "inv_potion_152" },
    28502: { name: "Elixir of Major Defense", icon: "inv_potion_122" },
    39625: { name: "Elixir Major Fortitude", icon: "inv_potion_158" },
    13445: { name: "Greater Elixir of Defense", icon: "inv_potion_57" },

    // Scrolls
    33077: { name: "Scroll of Agility V", icon: "inv_scroll_02" },
    33082: { name: "Scroll of Strength V", icon: "inv_scroll_02" },
    33079: { name: "Scroll of Protection V", icon: "inv_scroll_07" },
    33081: { name: "Scroll of Spirit V", icon: "inv_scroll_01" },
    5665: { name: "Bogling Root", icon: "inv_misc_herb_07" },

    // Comidas
    33261: { name: "Warp Burger", icon: "inv_misc_food_65" },
    33262: { name: "Grilled Mudfish", icon: "inv_misc_food_78" },
    33256: { name: "Roasted Clefthoof", icon: "inv_misc_food_60" },
    33264: { name: "Crunchy Serpent", icon: "inv_misc_food_88_ravagernuggets" },
    27665: { name: "Poached Bluefish", icon: "inv_misc_food_76" },
    33263: { name: "Blackened Basilisk", icon: "inv_misc_food_86_basilisk" },
    33268: { name: "Golden Fish Sticks", icon: "inv_misc_fish_18" },
    33258: { name: "Crawdad / Feast", icon: "inv_misc_fish_16" },
    35271: { name: "Shortribs / Talbuk", icon: "inv_misc_food_48" },
    45020: { name: "Hot Apple Cider", icon: "inv_drink_23" },
    33253: { name: "Buzzard / Clam Bar", icon: "inv_misc_food_85_stegadonbite" },
    33267: { name: "Feltail Delight", icon: "inv_misc_food_74" },
    33266: { name: "Blackened Sporefish", icon: "inv_misc_food_79" },
    43763: { name: "Spicy Hot Talbuk", icon: "inv_misc_food_84_roastclefthoof" },

    // Frascos
    28520: { name: "Flask of Relentless Assault", icon: "inv_potion_117" },
    28519: { name: "Flask of Mighty Restoration", icon: "inv_potion_118" },
    28521: { name: "Flask of Blinding Light", icon: "inv_potion_115" },
    28540: { name: "Flask of Pure Death", icon: "inv_potion_116" },
    28518: { name: "Flask of Fortification", icon: "inv_potion_158" },
    17628: { name: "Flask of Supreme Power", icon: "inv_potion_41" },
    17627: { name: "Flask of Distilled Wisdom", icon: "inv_potion_97" }
};

const ENCHANT_DB = {
    // Aceites
    2628: { name: "Brilliant Wizard Oil", icon: "inv_potion_105" },
    2629: { name: "Brilliant Mana Oil", icon: "inv_potion_100" },
    2677: { name: "Superior Mana Oil", icon: "inv_potion_101" }, // Actualizado a Superior Mana Oil
    2678: { name: "Superior Wizard Oil", icon: "inv_potion_141" },

    // Piedras
    2713: { name: "Adamantite Sharpening Stone", icon: "inv_stone_sharpeningstone_07" },
    2723: { name: "Scope (+28 Crit)", icon: "inv_stone_weightstone_07" },
    2955: { name: "Adamantite Weightstone", icon: "inv_stone_weightstone_07" },
    2506: { name: "Dense Sharpening Stone", icon: "inv_stone_02" },

    // Enchants
    2523: { name: "+30 Hit Rating" },
    2724: { name: "+28 Crit" },
    2670: { name: "+35 Agi" },
    3001: { name: "+35 Heal, 12 SP, 7 MP5" },
    2980: { name: "+33 Heal, 11 SP, 4 MP5" },
    2746: { name: "+66 Heal, 22 SP, 20 Stam" },
    2940: { name: "+9 Stam, Minor Speed" },
    2617: { name: "+30 Heal & 10 SP" },
    3003: { name: "+34 AP & 16 Hit" },
    2986: { name: "+30 AP & 10 Crit" },
    3012: { name: "+50 AP & 12 Crit" },
    2657: { name: "+12 Agi" },
    368: { name: "+12 Agi" },
    2647: { name: "+12 Str" },
    684: { name: "+15 Str" },
    2673: { name: "Mongoose" },
    1900: { name: "Crusader" },
    2661: { name: "+6 Stats" },
    33990: { name: "+15 Spi" },
    2991: { name: "+15 Def & 10 Dodge" },
    3002: { name: "+22 SP & 14 Hit" },
    2748: { name: "+35 SP & 20 Stam" },
    2646: { name: "+12 Stam" },
    2650: { name: "+15 SP" },
    2937: { name: "+20 SP" },
    2928: { name: "+12 SP" },
    2668: { name: "+20 SP & Heal" },
    1071: { name: "+18 Stam" },
    2343: { name: "+81 Heal & 27 SP" },
    2654: { name: "+12 Int" },
    2982: { name: "+18 SP & 10 Crit" },
    2614: { name: "+20 Shadow SP" },
    2621: { name: "Subtlety" },
    2672: { name: "Soulfrost" },
    2564: { name: "+15 Agi" },
    1583: { name: "+24 AP" },
    2669: { name: "+40 SP" },
    2997: { name: "+20 AP & 15 Crit" },
    2995: { name: "+12 SP & 15 Crit" },
    2662: { name: "+120 Armor" },
    2622: { name: "+12 Dodge" },
    2979: { name: "+29 Heal & 10 SP" },
    3150: { name: "+6 MP5" },
    2930: { name: "+20 Heal & 7 SP" },
    2983: { name: "+26 AP" },
    1593: { name: "+24 AP" },
    1594: { name: "+26 AP" },
    2649: { name: "+12 Stam" },
    2322: { name: "+35 Heal & 12 SP" },
    3010: { name: "+40 AP & 10 Crit" },
    3011: { name: "+40 AP & 10 Crit" },
    2504: { name: "+30 SP" },
    369: { name: "+12 Int" },
    2981: { name: "+15 SP" },
    1891: { name: "+4 Stats" },
    2938: { name: "+20 Spell Pen" },
    2722: { name: "+10 Damage" },
    2671: { name: "Sunfire" },
    911: { name: "Minor Speed" },
    2994: { name: "+13 Spell Crit" },
    2996: { name: "+13 Crit" },
    2992: { name: "+5 MP5" },
    2990: { name: "+13 Def" },
    2939: { name: "+6 Agi, Minor Speed" },
    2605: { name: "+18 Spell" },
    2999: { name: "+16 Defense & +17 Dodge" },
    2978: { name: "+15 Dodge & +10 Defense" },
    2935: { name: "+15 Spell Hit" },
    2934: { name: "+10 Spell Crit" },
    1888: { name: "+5 All Resistance" },
    929: { name: "+7 Stam" },
    3013: { name: "+40 Stam & 12 Agi" },
    2929: { name: "+2 Weapon Dmg" },
    1144: { name: "+15 Spirit" },
    2745: { name: "+46 Heal +16 SP +15 Stam" },
    2705: { name: "+55 Heal +19 SP" },
    2606: { name: "+30 AP" },
    2566: { name: "+24 Heal & 8 SP" },
    3096: { name: "+17 Str & +17 Int" },
    2667: { name: "Savagery" },
    2655: { name: "+15 Shield Block" },
    2648: { name: "+12 Defense" },
    2747: { name: "+25 SP & +15 Stam" },
    2659: { name: "+150 HP" },
    2613: { name: "+2% Threat" },
    2505: { name: "+55 Heal & 19 SP" },
    2590: { name: "+4 MP5 & 10 Stam & 24 Heal" },
    2715: { name: "+31 Heal & 11 SP & 5 MP5" },
};

const SPELL_DB = {
    // Paladin
    1020: { name: "Divine Shield", icon: "spell_holy_divineintervention", category: 1 },
    642: { name: "Divine Shield", icon: "spell_holy_divineintervention", category: 1 },
    27138: { name: "Exorcism", icon: "spell_holy_excorcism_02", category: 2 },
    31884: { name: "Avenging Wrath", icon: "spell_holy_avenginewrath", category: 1 },

    // Mage
    30449: { name: "Spellsteal", icon: "spell_arcane_arcane02", category: 2 },
    12472: { name: "Icy Veins", icon: "spell_frost_coldhearted", category: 1 },
    12042: { name: "Arcane Power", icon: "spell_nature_lightning", category: 1 },
    27619: { name: "Ice Block", icon: "spell_frost_frost", category: 1 },
    45438: { name: "Ice Block", icon: "spell_frost_frost", category: 1 },
    27089: { name: "Mana Gem", icon: "inv_misc_gem_sapphire_02", category: 2 },
    2139: { name: "Counterspell", icon: "spell_frost_iceshock", isInterrupt: true, category: 2 },

    // Rogue
    13877: { name: "Blade Flurry", icon: "ability_warrior_punishingblow", category: 1 },
    13750: { name: "Adrenaline Rush", icon: "spell_shadow_shadowworddominate", category: 1 },
    11305: { name: "Sprint", icon: "ability_rogue_sprint", category: 2 },
    12328: { name: "Sweeping Strikes", icon: "ability_rogue_slicedice", category: 2 },
    9512: { name: "Thistle Tea", icon: "inv_drink_milk_05", category: 5 },
    31224: { name: "Cloak of Shadows", icon: "spell_shadow_nethercloak", category: 1 },
    6774: { name: "Slice and Dice", icon: "ability_rogue_slicedice", category: 2 },
    26866: { name: "Expose Armor", icon: "ability_warrior_riposte", category: 2 },
    38768: { name: "Kick", icon: "ability_kick", isInterrupt: true, category: 2 },

    // Priest
    14751: { name: "Inner Focus", icon: "spell_frost_windwalkon", category: 2 },
    34433: { name: "Shadowfiend", icon: "spell_shadow_shadowfiend", category: 1 },
    10060: { name: "Power Infusion", icon: "spell_holy_powerinfusion", category: 1 },
    33206: { name: "Pain Suppression", icon: "spell_holy_painsupression", category: 1 },
    6346: { name: "Fear Ward", icon: "spell_holy_excorcism", category: 1 },

    // Hunter
    3045: { name: "Rapid Fire", icon: "ability_hunter_runningshot", category: 1 },
    19574: { name: "Bestial Wrath", icon: "ability_druid_ferociousbite", category: 1 },
    23989: { name: "Readiness", icon: "ability_hunter_readiness", category: 1 },
    34477: { name: "Misdirection", icon: "ability_hunter_misdirection", category: 2 },

    // Warrior
    12292: { name: "Death Wish", icon: "spell_shadow_deathpact", category: 1 },
    1719: { name: "Recklessness", icon: "ability_criticalstrike", category: 1 },
    6554: { name: "Pummel", icon: "inv_gauntlets_04", isInterrupt: true, category: 2 },
    29704: { name: "Shield Bash", icon: "ability_warrior_shieldbash", isInterrupt: true, category: 2 },

    // Warlock
    29858: { name: "Soulshatter", icon: "spell_arcane_arcane01", category: 2 },
    27226: { name: "Curse Recklessness", icon: "spell_shadow_unholystrength", category: 2 },
    11717: { name: "Curse Recklessness", icon: "spell_shadow_unholystrength", category: 2 },
    27228: { name: "Curse Elements", icon: "spell_shadow_chilltouch", category: 2 },
    27263: { name: "Shadowburn", icon: "spell_shadow_scourgebuild", category: 2 },

    // Shaman
    2825: { name: "Bloodlust", icon: "spell_nature_bloodlust", category: 1 },
    32182: { name: "Heroism", icon: "ability_shaman_heroism", category: 1 },
    2894: { name: "Fire Elemental", icon: "spell_fire_elemental_totem", category: 1 },
    32594: { name: "Earth Shield", icon: "spell_nature_skinofearth", category: 1 },
    30823: { name: "Shamanistic Rage", icon: "spell_nature_shamanrage", category: 1 },
    16166: { name: "Elemental Mastery", icon: "spell_nature_wispheal", category: 2 },
    16190: { name: "Mana Tide Totem", icon: "spell_frost_summonwaterelemental", category: 1 },
    25454: { name: "Earth Shock", icon: "spell_nature_earthshock", isInterrupt: true, category: 2 },

    // Druid
    29166: { name: "Innervate", icon: "spell_nature_lightning", category: 1 },
    22812: { name: "Barkskin", icon: "spell_nature_stoneclawtotem", category: 1 },
    18562: { name: "Swiftmend", icon: "inv_relics_idolofrejuvenation", category: 2 },
    33831: { name: "Force of Nature", icon: "ability_druid_forceofnature", category: 1 },
    16188: { name: "Nature's Swiftness", icon: "spell_nature_ravenform", category: 2 },
    26993: { name: "Faerie Fire", icon: "spell_nature_faeriefire", category: 2 },
    33602: { name: "Improved Faerie Fire", icon: "spell_nature_faeriefire", category: 2 },
    // Paladin
    27154: { name: "Lay on Hands", icon: "spell_holy_layonhands", category: 1 },
    20235: { name: "Lay on Hands", icon: "spell_holy_layonhands", category: 1 },
    20216: { name: "Divine Flavor", icon: "spell_holy_heal", category: 2 },
    31842: { name: "Divine Illumination", icon: "spell_holy_divineillumination", category: 2 },

    // Trinkets
    35166: { name: "Bloodlust Brooch", icon: "inv_misc_monsterscales_15", category: 3 },
    35165: { name: "Essence of Martyr", icon: "inv_valentineperfumebottle", category: 3 },
    35163: { name: "Silver Crescent", icon: "inv_weapon_shortblade_23", category: 3 },
    28093: { name: "Swarmguard", icon: "inv_misc_ahnqirajtrinket_04", category: 3 },
    23723: { name: "Mind Quickening", icon: "spell_nature_wispheal", category: 3 },
    51582: { name: "Rocket Boots", icon: "inv_gizmo_rocketboot_01", category: 3 },
    33807: { name: "Abacus of Violent Odds", icon: "inv_misc_enggizmos_18", category: 3 },

    // Racial Abilities
    20572: { name: "Blood Fury", icon: "racial_orc_berserkerstrength", category: 3 },
    28730: { name: "Arcane Torrent", icon: "spell_shadow_teleport", category: 4 },
    7744: { name: "Will of the Forsaken", icon: "spell_shadow_raisedead", category: 4 },
    20594: { name: "Stoneform", icon: "spell_shadow_unholystrength", category: 4 },
    20549: { name: "War Stomp", icon: "ability_warstomp", category: 4 },
    26297: { name: "Berserking", icon: "racial_troll_berserk", category: 3 },
    20554: { name: "Berserking", icon: "racial_troll_berserk", category: 3 },
    26296: { name: "Berserking", icon: "racial_troll_berserk", category: 3 },

    // Consumables (Healthstones, Sappers)
    27238: { name: "Healthstone", icon: "inv_stone_04", category: 5 },
    43204: { name: "Healthstone", icon: "inv_stone_04", category: 5 },
    27239: { name: "Healthstone", icon: "inv_stone_04", category: 5 },
    27237: { name: "Healthstone", icon: "inv_stone_04", category: 5 },

    30486: { name: "TBC Sapper", icon: "inv_gizmo_supersappercharge", category: 5 },
    13241: { name: "Goblin Sapper", icon: "spell_fire_selfdestruct", category: 5 },

    // Potions & Runes
    28507: { name: "Haste Potion", icon: "inv_potion_108", category: 5 },
    28508: { name: "Destruction Potion", icon: "inv_potion_107", category: 5 },
    17531: { name: "Super Mana Potion", icon: "inv_potion_137", category: 5 },
    17534: { name: "Super Healing Potion", icon: "inv_potion_153", category: 5 },
    28515: { name: "Ironshield Potion", icon: "inv_potion_133", category: 5 },
    35476: { name: "Drums of Battle", icon: "inv_misc_drum_02", category: 5 },
    35478: { name: "Drums of Resto", icon: "inv_misc_drum_01", category: 5 },
    28499: { name: "Mana Pot/Injector", icon: "inv_potion_137", category: 5 },
    27869: { name: "Dark Rune", icon: "spell_shadow_sealofkings", category: 5 },
    16666: { name: "Demonic Rune", icon: "inv_misc_rune_04", category: 5 },
    28495: { name: "Super Healing Potion", icon: "inv_potion_131", category: 5 }
};
const OPTIMAL_ENCHANTS = {
    // =====================================================================
    // OPTIMAL ENCHANTS PER SPEC - TBC (3-Tier System)
    // best = BiS enchants (GREEN ✨)
    // alt  = Acceptable alternatives (YELLOW 🟨)
    // Not in either = Bad/wrong enchant (RED ❓)
    // =====================================================================

    // --- WARRIORS ---
    "Warrior-Arms": {
        best: [
            3003,           // Head: Glyph of Ferocity
            2986, 2997,     // Shoulder: Greater Vengeance (Aldor) / Greater Blade (Scryer)
            2661,           // Chest: +6 Stats
            368,            // Cloak: +12 Agi
            2647,           // Bracer: +12 Str
            684,            // Gloves: +15 Str
            3012,           // Legs: Nethercobra (+50 AP, +12 Crit)
            2940, 2939,     // Boots: Boar's Speed / Cat's Swiftness
            2673            // Weapon: Mongoose
        ],
        alt: [
            2983,           // Shoulder: lesser inscription
            1891,           // Chest: +4 Stats
            2657, 1593, 1594, // Bracer: +12 Agi, +24 AP, +26 AP
            2996, 1583, 2564, // Gloves: +13 Crit, +24 AP, +15 Agi
            3010, 3011,     // Legs: Cobrahide (+40 AP)
            911,            // Boots: Minor Speed
            2667, 2670, 2929 // Weapon: Savagery, +35 Agi, +2 Dmg
        ]
    },
    "Warrior-Fury": {
        best: [
            3003,           // Head: Glyph of Ferocity
            2986, 2997,     // Shoulder: Greater Vengeance / Blade
            2661,           // Chest: +6 Stats
            368,            // Cloak: +12 Agi
            2647,           // Bracer: +12 Str
            684,            // Gloves: +15 Str
            3012,           // Legs: Nethercobra
            2940, 2939,     // Boots: Boar's / Cat's Speed
            2673            // Weapon: Mongoose
        ],
        alt: [
            2983,           // Shoulder: lesser inscription
            1891,           // Chest: +4 Stats
            2657, 1593, 1594, // Bracer: +12 Agi, AP
            2996, 1583, 2564, // Gloves: +13 Crit, +24 AP, +15 Agi
            3010, 3011,     // Legs: Cobrahide
            911,            // Boots: Minor Speed
            2667, 2670, 2929 // Weapon: Savagery, +35 Agi, +2 Dmg
        ]
    },
    "Warrior-Protection": {
        best: [
            2999,           // Head: Glyph of the Defender
            2991,           // Shoulder: Greater Inscription of Warding
            2661, 2659,     // Chest: +6 Stats / +150 HP (both BiS)
            2622,           // Cloak: +12 Dodge
            2649,           // Bracer: +12 Stam
            684,            // Gloves: +15 Str (threat)
            3013,           // Legs: Nethercleft (+40 Stam, +12 Agi)
            2940,           // Boots: Boar's Speed
            2673,           // Weapon: Mongoose
            1071            // Shield: +18 Stam
        ],
        alt: [
            2978,           // Shoulder: lesser Warding
            1891,           // Chest: +4 Stats
            2662, 368, 1888, // Cloak: +120 Armor, +12 Agi, +5 Resist
            2613,           // Cloak: +2% Threat
            2648, 2647, // Bracer: +12 Def, +12 Stam alt, +12 Str
            2996, 2990,     // Gloves: +13 Crit, +13 Def
            3012, 3010, 3011, // Legs: Nethercobra/Cobrahide
            911, 929,       // Boots: Minor Speed, +7 Stam
            2670,           // Weapon: +35 Agi
            2655, 2605      // Shield: +15 Block, +18 Spell
        ]
    },

    // --- PALADINS ---
    "Paladin-Holy": {
        best: [
            3001,           // Head: Glyph of Renewal
            2980, 2979,     // Shoulder: Faith (Aldor) / Oracle (Scryer)
            2661,           // Chest: +6 Stats
            2621,           // Cloak: Subtlety
            2617, 2930,     // Bracer: +30 Heal & 10 SP (BiS all healers), +20 Heal & 7 SP
            2322,           // Gloves: +35 Heal & 12 SP
            2746,           // Legs: Silver Spellthread (+66 Heal)
            2940,           // Boots: Boar's Speed
            2343,           // Weapon: Major Healing (+81 Heal)
            2654, 369       // Shield: +12 Int (best for holy paladins)
        ],
        alt: [
            3002,           // Head: Glyph of Power (SP-focused build)
            2982, 2995,     // Shoulder: DPS inscriptions (SP-focused build)
            2715,           // Shoulder: +31 Heal & 11 SP & 5 MP5
            1891, 2659,     // Chest: +4 Stats, +150 HP
            2654, 2928, 2566, // Bracer: +12 Int, +12 SP, +24 Heal
            2668, 2650, 2937, // Gloves: +20 SP/Heal, +15 SP, +20 SP
            2745, 2748, 2747, 2590, // Legs: lesser spellthreads, +24 Heal legs
            911, 2992, 3150, 2657, // Boots: Minor Speed, +5 MP5, +6 MP5, +12 Agi
            2705, 2505, 2669, // Weapon: +55 Heal, +55 Heal & 19 SP, +40 SP
            2928             // Ring: +12 SP (enchanting)
        ]
    },
    "Paladin-Protection": {
        best: [
            2999, 3002,           // Head: Glyph of the Defender
            2991,           // Shoulder: Greater Warding
            2661, 2659,     // Chest: +6 Stats / +150 HP
            2622,           // Cloak: +12 Dodge
            2646, 2650,          // Bracer: +12 Stam
            2937,            // Gloves: +20 SP
            2748,
            2940, 2649,     // Boots: Boar's Speed, +12 Stam (best for prot)
            2669,           // Weapon: +40 SP
            1071,           // Shield: +18 Stam
            2928, 2928
        ],
        alt: [
            2978,           // Shoulder: lesser Warding.
            1891,           // Chest: +4 Stats
            2662, 368, 1888, // Cloak: Armor, Agi, Resist
            2613,           // Cloak: +2% Threat
            2648, 2647,     // Bracer: Def, Str
            2996, 2990, // Gloves: Crit, Def, SP
            3012, 3010, 3011, // Legs: DPS options
            911, 929,       // Boots: Speed, +7 Stam
            2669, 2670,     // Weapon: +40 SP, +35 Agi
            2655, 2605      // Shield: Block, Spell
        ]
    },
    "Paladin-Retribution": {
        best: [
            3003,           // Head: Glyph of Ferocity
            2986, 2997,     // Shoulder: Greater Vengeance / Blade
            2661,           // Chest: +6 Stats
            368,            // Cloak: +12 Agi
            2647,           // Bracer: +12 Str
            684,            // Gloves: +15 Str
            3012,           // Legs: Nethercobra
            2940, 2939, 2657, // Boots: Boar's / Cat's Speed, +12 Agi (best for ret)
            2673            // Weapon: Mongoose
        ],
        alt: [
            2983,           // Shoulder: lesser inscription
            1891,           // Chest: +4 Stats
            1593, 1594,     // Bracer: AP
            2996, 1583, 2564, // Gloves: Crit, AP, +15 Agi
            3010, 3011,     // Legs: Cobrahide
            911,            // Boots: Minor Speed
            2667, 2670, 2929 // Weapon: Savagery, +35 Agi, +2 Dmg
        ]
    },

    // --- HUNTERS ---
    "Hunter-BeastMastery": {
        best: [
            3003,           // Head: Glyph of Ferocity
            2986, 2997,     // Shoulder: Vengeance / Blade
            2661,           // Chest: +6 Stats
            368,            // Cloak: +12 Agi
            1593,           // Bracer: +24 AP (best for hunters)
            2564,           // Gloves: +15 Agi
            3012,           // Legs: Nethercobra
            2940, 2939,     // Boots: Boar's / Cat's Speed
            2673,           // Weapon: Mongoose
            2724,           // Ranged: Stabilized Eternium Scope
            2929            // Ring: +2 Weapon Dmg (enchanting)
        ],
        alt: [
            2606,           // Shoulder: +30 AP (lesser)
            2983,           // Shoulder: lesser inscription
            1891,           // Chest: +4 Stats
            2657, 1594, 2647, // Bracer: +12 Agi, +26 AP, +12 Str
            2996, 684, 1583, // Gloves: +13 Crit, +15 Str, +24 AP
            3010, 3011,     // Legs: Cobrahide
            911, 2657,      // Boots: Minor Speed, +12 Agi
            2670            // Weapon: +35 Agi
        ]
    },
    "Hunter-Marksmanship": {
        best: [
            3003, 2986, 2997, 2661, 368,
            1593,           // Bracer: +24 AP (best)
            2564,           // Gloves: +15 Agi
            3012, 2940, 2939, 2673, 2724,
            2929            // Ring: +2 Weapon Dmg (enchanting)
        ],
        alt: [
            2606, 2983, 1891, 2657, 1594, 2647,
            2996, 684, 1583, 3010, 3011, 911, 2670
        ]
    },
    "Hunter-Survival": {
        best: [
            3003, 2986, 2997, 2661, 368,
            1593, 2564, 3012, 2940, 2939, 2673, 2724,
            2929            // Ring: +2 Weapon Dmg (enchanting)
        ],
        alt: [
            2606, 2983, 1891, 2657, 1594, 2647,
            2996, 684, 1583, 3010, 3011, 911, 2670
        ]
    },

    // --- ROGUES ---
    "Rogue-Combat": {
        best: [
            3003,           // Head: Glyph of Ferocity
            2986, 2997,     // Shoulder: Vengeance / Blade
            2661,           // Chest: +6 Stats
            368,            // Cloak: +12 Agi
            2657,           // Bracer: +12 Agi
            2564,           // Gloves: +15 Agi
            3012,           // Legs: Nethercobra
            2940, 2939,     // Boots: Speed
            2673            // Weapon: Mongoose
        ],
        alt: [
            2983, 1891,
            1593, 1594,     // Bracer: AP
            2996, 1583, 684, // Gloves: Crit, AP, Str
            3010, 3011,
            911, 2670
        ]
    },
    "Rogue-Assassination": {
        best: [
            3003, 2986, 2997, 2661, 368, 2657, 2564,
            3012, 2940, 2939, 2673
        ],
        alt: [
            2983, 1891, 1593, 1594,
            2996, 1583, 684, 3010, 3011, 911, 2670
        ]
    },
    "Rogue-Subtlety": {
        best: [
            3003, 2986, 2997, 2661, 368, 2657, 2564,
            3012, 2940, 2939, 2673
        ],
        alt: [
            2983, 1891, 1593, 1594,
            2996, 1583, 684, 3010, 3011, 911, 2670
        ]
    },

    // --- PRIESTS ---
    "Priest-Holy": {
        best: [
            3001,           // Head: Glyph of Renewal
            2980, 2979,     // Shoulder: Faith / Oracle
            2661,           // Chest: +6 Stats
            2621,           // Cloak: Subtlety
            2617, 2930,     // Bracer: +30 Heal & 10 SP (BiS all healers), +20 Heal & 7 SP
            2322,           // Gloves: +35 Heal & 12 SP (best healer gloves)
            2746,           // Legs: Silver Spellthread
            2940,           // Boots: Boar's Speed
            2343            // Weapon: Major Healing
        ],
        alt: [
            2715,           // Shoulder: +31 Heal & 11 SP & 5 MP5
            1891,           // Chest: +4 Stats
            2654, 2928, 2566, // Bracer: Int, SP, lesser Heal
            2668, 2650,     // Gloves: +20 SP/Heal, +15 SP
            2745, 2748, 2747, 2590, // Legs: lesser spellthreads
            911, 2992, 3150, // Boots: Speed, MP5
            2705, 2505, 2669 // Weapon: +55 Heal, +55 Heal & 19 SP, +40 SP
        ]
    },
    "Priest-Discipline": {
        best: [
            3001, 2980, 2979, 2661, 2621,
            2617, 2930,     // Bracer: +30 Heal & 10 SP (BiS all healers), +20 Heal & 7 SP
            2322,           // Gloves: +35 Heal & 12 SP
            2746, 2940, 2343
        ],
        alt: [
            2715, 1891, 2654, 2928, 2566,
            2668, 2650,
            2745, 2748, 2747, 2590,
            911, 2992, 3150, 2705, 2505, 2669
        ]
    },
    "Priest-Shadow": {
        best: [
            3002,           // Head: Glyph of Power
            2982, 2995,     // Shoulder: Discipline (Aldor) / Orb (Scryer)
            2661,           // Chest: +6 Stats
            2621,           // Cloak: Subtlety
            2928,           // Bracer: +12 SP
            2937,           // Gloves: +20 SP (best caster gloves)
            2748,           // Legs: Runic Spellthread
            2940,           // Boots: Boar's Speed
            2672,           // Weapon: Soulfrost
            2650,
        ],
        alt: [
            2981,           // Shoulder: lesser inscription
            1891,           // Chest: +4 Stats
            2938,           // Cloak: +20 Spell Pen
            2654,           // Bracer: +12 Int
            2935, 2934, 2668, // Gloves: +15 SP, Spell Hit, Spell Crit, +20 SP/Heal
            2747,           // Legs: Mystic Spellthread
            911,            // Boots: Minor Speed
            2669, 2504, 2614 // Weapon: +40 SP, +30 SP, +20 Shadow
        ]
    },

    // --- SHAMANS ---
    "Shaman-Elemental": {
        best: [
            3002,           // Head: Glyph of Power
            2982, 2995,     // Shoulder: Discipline / Orb
            2661,           // Chest: +6 Stats
            2621,           // Cloak: Subtlety
            2928,           // Bracer: +12 SP
            2937,           // Gloves: +20 SP (best caster gloves)
            2748,           // Legs: Runic Spellthread
            2940,           // Boots: Boar's Speed
            2671,           // Weapon: Sunfire
            2654, 369       // Shield: +12 Int (best for ele shaman)
        ],
        alt: [
            2981, 1891, 2938,
            2654,
            2650, 2935, 2934, 2668,
            2747, 911, 2504, 2669
        ]
    },
    "Shaman-Enhancement": {
        best: [
            3003,           // Head: Glyph of Ferocity
            2986, 2997,     // Shoulder: Vengeance / Blade
            2661,           // Chest: +6 Stats
            368,            // Cloak: +12 Agi
            2647,           // Bracer: +12 Str
            684,            // Gloves: +15 Str
            3012,           // Legs: Nethercobra
            2940, 2939,     // Boots: Speed
            2673            // Weapon: Mongoose
        ],
        alt: [
            2983, 1891,
            2657, 1593, 1594,
            2996, 1583, 2564,
            3010, 3011, 911,
            2667, 2670
        ]
    },
    "Shaman-Restoration": {
        best: [
            3001, 2980, 2979, 2661, 2621,
            2617, 2930,     // Bracer: +30 Heal & 10 SP (BiS all healers), +20 Heal & 7 SP
            2322,           // Gloves: +35 Heal & 12 SP (best healer gloves)
            2746, 2940, 2343,
            2654, 369       // Shield: +12 Int (best for resto shaman)
        ],
        alt: [
            2715, 1891, 2654, 2928, 2566,
            2668, 2650,
            2745, 2748, 2747, 2590,
            911, 2992, 3150, 2705, 2505, 2669
        ]
    },

    // --- MAGES ---
    "Mage-Arcane": {
        best: [
            3002,           // Head: Glyph of Power
            2982, 2995,     // Shoulder: Discipline / Orb
            2661,           // Chest: +6 Stats
            2621,           // Cloak: Subtlety
            2654,           // Bracer: +12 Int (best for mages)
            2937,           // Gloves: +20 SP (best caster gloves)
            2748,           // Legs: Runic Spellthread
            2940,           // Boots: Boar's Speed
            2671            // Weapon: Sunfire (Arcane + Fire)
        ],
        alt: [
            2981, 1891, 2938,
            2928,           // Bracer: +12 SP (alt)
            2650, 2935, 2934, 2668,
            2747, 911, 2669, 2504
        ]
    },
    "Mage-Fire": {
        best: [
            3002, 2982, 2995, 2661, 2621,
            2654,           // Bracer: +12 Int (best for mages)
            2937,           // Gloves: +20 SP
            2748, 2940, 2671
        ],
        alt: [
            2981, 1891, 2938, 2928,
            2650, 2935, 2934, 2668,
            2747, 911, 2669, 2504
        ]
    },
    "Mage-Frost": {
        best: [
            3002, 2982, 2995, 2661, 2621,
            2654,           // Bracer: +12 Int (best for mages)
            2937,           // Gloves: +20 SP
            2748, 2940, 2672  // Soulfrost for Frost
        ],
        alt: [
            2981, 1891, 2938, 2928,
            2650, 2935, 2934, 2668,
            2747, 911, 2669, 2504
        ]
    },

    // --- WARLOCKS ---
    "Warlock-Affliction": {
        best: [
            3002,           // Head: Glyph of Power
            2982, 2995,     // Shoulder: Discipline / Orb
            2661,           // Chest: +6 Stats
            2621,           // Cloak: Subtlety
            2928,           // Bracer: +12 SP
            2937,           // Gloves: +20 SP (best caster gloves)
            2748,           // Legs: Runic Spellthread
            2940,           // Boots: Boar's Speed
            2672            // Weapon: Soulfrost (Shadow)
        ],
        alt: [
            2981, 1891, 2938, 2654,
            2650, 2935, 2934, 2668,
            2747, 911,
            2669, 2504, 2614
        ]
    },
    "Warlock-Demonology": {
        best: [
            3002, 2982, 2995, 2661, 2621, 2928,
            2937,           // Gloves: +20 SP
            2748, 2940, 2672
        ],
        alt: [
            2981, 1891, 2938, 2654,
            2650, 2935, 2934, 2668,
            2747, 911, 2669, 2504
        ]
    },
    "Warlock-Destruction": {
        best: [
            3002, 2982, 2995, 2661, 2621, 2928,
            2937,           // Gloves: +20 SP
            2748, 2940, 2671, 2672  // Sunfire for Fire Destr
        ],
        alt: [
            2981, 1891, 2938, 2654,
            2650, 2935, 2934, 2668,
            2747, 911, 2669, 2504
        ]
    },

    // --- DRUIDS ---
    "Druid-Feral": {
        best: [
            3003, 2999,     // Head: Ferocity (DPS) or Defender (Tank) - both BiS
            2986, 2997,     // Shoulder DPS: Greater Vengeance / Blade
            2991,           // Shoulder Tank: Greater Warding
            2661, 2659,     // Chest: +6 Stats (best) / +150 HP (tank)
            368, 2622,      // Cloak: +12 Agi (best DPS) / +12 Dodge (Tank)
            2657,           // Bracer DPS: +12 Agi
            2646,           // Bracer Tank: +12 Stam (best for feral/tank)
            684,            // Gloves: +15 Str
            3012, 3013,     // Legs: Nethercobra (DPS) / Nethercleft (Tank)
            2940, 2939,     // Boots: Boar's Speed / Cat's Swiftness (best)
            2673, 2670,     // Weapon: Mongoose, +35 Agi (both best)
            2929, 2649      // Ring: +2 Weapon Dmg (best)
        ],
        alt: [
            2983, 2978,     // Shoulder: lesser inscriptions
            1891,           // Chest: +4 Stats
            2662,           // Cloak: +120 Armor
            2647, 1593, 1594, 2648, // Bracer: Str, AP, Def
            2996, 1583, 2990, 2564, // Gloves: Crit, AP, Def, +15 Agi
            3010, 3011,     // Legs: Cobrahide
            911, 2606, 2649 // Boots: Minor Speed
        ]
    },
    "Druid-Balance": {
        best: [
            3002, 2982, 2995, 2661, 2621, 2928,
            2937,           // Gloves: +20 SP (best caster)
            2748, 2940, 2671
        ],
        alt: [
            2981, 1891, 2938, 2654,
            2650, 2935, 2934, 2668,
            2747, 911, 2669, 2504
        ]
    },
    "Druid-Restoration": {
        best: [
            3001, 2980, 2979, 2661, 2621,
            2617, 2930,     // Bracer: +30 Heal & 10 SP (BiS all healers), +20 Heal & 7 SP
            2322,           // Gloves: +35 Heal & 12 SP (best healer gloves)
            2746, 2940, 2343
        ],
        alt: [
            2715, 1891, 2654, 2928, 2566,
            2668, 2650,
            2745, 2748, 2747, 2590,
            911, 2992, 3150, 2705, 2505, 2669
        ]
    }
};
