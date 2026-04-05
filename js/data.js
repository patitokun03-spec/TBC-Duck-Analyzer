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
    "Paladin-Protection": "inv_shield_06", // Escudo oficial
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
    5665:  { name: "Bogling Root", icon: "inv_misc_herb_07" },

    // Comidas
    33288: { name: "Warp Burger", icon: "inv_misc_food_65" },
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
    17628: { name: "Flask of Supreme Power", icon: "inv_potion_41" }
};

const ENCHANT_DB = {
    // Aceites
    2628: { name: "Brilliant Wizard Oil", icon: "inv_potion_105" },
    2629: { name: "Brilliant Mana Oil", icon: "inv_potion_100" },
    2677: { name: "Superior Mana Oil", icon: "inv_potion_101" }, // Actualizado a Superior Mana Oil
    2678: { name: "Superior Wizard Oil", icon: "inv_potion_141" },
    2589: { name: "Superior Wizard Oil", icon: "inv_potion_141" },
    2625: { name: "Superior Wizard Oil", icon: "inv_potion_141" },
    28017: { name: "Superior Wizard Oil", icon: "inv_potion_141" },
    2588: { name: "Superior Mana Oil", icon: "inv_potion_101" },
    2624: { name: "Superior Mana Oil", icon: "inv_potion_101" },
    2626: { name: "Superior Mana Oil", icon: "inv_potion_101" },
    28013: { name: "Superior Mana Oil", icon: "inv_potion_101" },
    
    // Piedras
    2713: { name: "Adamantite Sharpening Stone", icon: "inv_stone_sharpeningstone_07" },
    2714: { name: "Adamantite Sharpening Stone", icon: "inv_stone_sharpeningstone_07" },
    34340: { name: "Adamantite Sharpening Stone", icon: "inv_stone_sharpeningstone_07" },
    2724: { name: "Adamantite Weightstone", icon: "inv_stone_weightstone_07" },
    2723: { name: "Adamantite Weightstone", icon: "inv_stone_weightstone_07" },
    2955: { name: "Adamantite Weightstone", icon: "inv_stone_weightstone_07" },
    2670: { name: "Adamantite Weightstone", icon: "inv_stone_weightstone_07" },
    2506: { name: "Dense Sharpening Stone", icon: "inv_stone_02" } // ID Corregida
};

const SPELL_DB = {
    // Paladin
    1020: { name: "Divine Shield", icon: "spell_holy_divineintervention", category: 1 },
    642:  { name: "Divine Shield", icon: "spell_holy_divineintervention", category: 1 },
    27138: { name: "Exorcism", icon: "spell_holy_excorcism_02", category: 2 },
    31884: { name: "Avenging Wrath", icon: "spell_holy_avenginewrath", category: 1 },
    
    // Mage
    30449: { name: "Spellsteal", icon: "spell_arcane_arcane02", category: 2 },
    12472: { name: "Icy Veins", icon: "spell_frost_coldhearted", category: 1 },
    12042: { name: "Arcane Power", icon: "spell_nature_lightning", category: 1 },
    27619: { name: "Ice Block", icon: "spell_frost_frost", category: 1 }, 
    45438: { name: "Ice Block", icon: "spell_frost_frost", category: 1 }, 
    27089: { name: "Mana Gem", icon: "inv_misc_gem_sapphire_02", category: 2 },
    2139:  { name: "Counterspell", icon: "spell_frost_iceshock", isInterrupt: true, category: 2 }, 
    
    // Rogue
    13877: { name: "Blade Flurry", icon: "ability_warrior_punishingblow", category: 1 },
    13750: { name: "Adrenaline Rush", icon: "spell_shadow_shadowworddominate", category: 1 },
    11305: { name: "Sprint", icon: "ability_rogue_sprint", category: 2 },
    12328: { name: "Sweeping Strikes", icon: "ability_rogue_slicedice", category: 2 },
    9512:  { name: "Thistle Tea", icon: "inv_drink_milk_05", category: 5 },
    31224: { name: "Cloak of Shadows", icon: "spell_shadow_nethercloak", category: 1 },
    6774:  { name: "Slice and Dice", icon: "ability_rogue_slicedice", category: 2 },
    26866: { name: "Expose Armor", icon: "ability_warrior_riposte", category: 2 },
    38768: { name: "Kick", icon: "ability_kick", isInterrupt: true, category: 2 }, 
    
    // Priest
    14751: { name: "Inner Focus", icon: "spell_frost_windwalkon", category: 2 },
    34433: { name: "Shadowfiend", icon: "spell_shadow_shadowfiend", category: 1 },
    10060: { name: "Power Infusion", icon: "spell_holy_powerinfusion", category: 1 },
    33206: { name: "Pain Suppression", icon: "spell_holy_painsupression", category: 1 },
    6346:  { name: "Fear Ward", icon: "spell_holy_excorcism", category: 1 }, 
    
    // Hunter
    3045: { name: "Rapid Fire", icon: "ability_hunter_runningshot", category: 1 },
    19574: { name: "Bestial Wrath", icon: "ability_druid_ferociousbite", category: 1 },
    23989: { name: "Readiness", icon: "ability_hunter_readiness", category: 1 },
    34477: { name: "Misdirection", icon: "ability_hunter_misdirection", category: 2 },
    
    // Warrior
    12292: { name: "Death Wish", icon: "spell_shadow_deathpact", category: 1 },
    1719:  { name: "Recklessness", icon: "ability_criticalstrike", category: 1 },
    6554:  { name: "Pummel", icon: "inv_gauntlets_04", isInterrupt: true, category: 2 },
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
    15821: { name: "BL Brooch", icon: "inv_misc_monsterscales_15", category: 3 },
    35166: { name: "Bloodlust Brooch", icon: "inv_misc_monsterscales_15", category: 3 },
    35165: { name: "Essence of Martyr", icon: "inv_valentineperfumebottle", category: 3 },
    17320: { name: "Essence Martyr", icon: "inv_valentineperfumebottle", category: 3 },
    35163: { name: "Silver Crescent", icon: "inv_weapon_shortblade_23", category: 3 },
    28093: { name: "Swarmguard", icon: "inv_misc_ahnqirajtrinket_04", category: 3 },
    23723: { name: "Mind Quickening", icon: "spell_nature_wispheal", category: 3 },
    26297: { name: "Berserking", icon: "spell_shadow_berserk", category: 3 },
    20554: { name: "Berserking", icon: "racial_troll_berserk", category: 3 }, 
    20572: { name: "Blood Fury", icon: "racial_orc_berserkerstrength", category: 3 }, 
    51582: { name: "Rocket Boots", icon: "inv_gizmo_rocketboot_01", category: 3 },
    
    // Racial Abilities
    28730: { name: "Arcane Torrent", icon: "spell_shadow_teleport", category: 4 },
    7744:  { name: "Will of the Forsaken", icon: "spell_shadow_deathcoil", category: 4 },
    20594: { name: "Stoneform", icon: "inv_shield_26", category: 4 },
    20549: { name: "War Stomp", icon: "ability_warstomp", category: 4 },
    
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

