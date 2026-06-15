const CLASSES = ["Warrior","Paladin","Hunter","Rogue","Priest","Shaman","Mage","Warlock","Druid"];

const SPEC_ICONS = {
    "Warrior": "ability_warrior_innerrage",
    "Warrior-Arms": "ability_warrior_savageblow",
    "Warrior-Fury": "ability_warrior_innerrage",
    "Warrior-Protection": "inv_shield_06",
    "Paladin": "spell_holy_holybolt",
    "Paladin-Holy": "spell_holy_holybolt",
    "Paladin-Protection": "spell_holy_avengersshield",
    "Paladin-Retribution": "spell_holy_auraoflight",
    "Hunter": "ability_hunter_beasttaming",
    "Hunter-BeastMastery": "ability_hunter_beasttaming",
    "Hunter-Marksmanship": "ability_marksmanship",
    "Hunter-Survival": "ability_hunter_swiftstrike",
    "Rogue": "ability_rogue_eviscerate",
    "Rogue-Combat": "ability_backstab",
    "Rogue-Assassination": "ability_rogue_eviscerate",
    "Rogue-Subtlety": "ability_stealth",
    "Priest": "spell_holy_wordfortitude",
    "Priest-Holy": "spell_holy_holybolt",
    "Priest-Discipline": "spell_holy_powerwordshield",
    "Priest-Shadow": "spell_shadow_shadowwordpain",
    "Shaman": "spell_nature_bloodlust",
    "Shaman-Elemental": "spell_nature_lightning",
    "Shaman-Enhancement": "spell_nature_lightningshield",
    "Shaman-Restoration": "spell_nature_magicimmunity",
    "Mage": "spell_frost_frostbolt",
    "Mage-Arcane": "spell_holy_magicalsentry",
    "Mage-Fire": "spell_fire_firebolt02",
    "Mage-Frost": "spell_frost_frostbolt02",
    "Warlock": "spell_shadow_metamorphosis",
    "Warlock-Affliction": "spell_shadow_deathcoil",
    "Warlock-Demonology": "spell_shadow_metamorphosis",
    "Warlock-Destruction": "spell_shadow_rainoffire",
    "Druid": "ability_druid_catform",
    "Druid-Balance": "spell_nature_starfall",
    "Druid-Feral": "ability_racial_bearform",
    "Druid-Restoration": "spell_nature_healingtouch",
};

const BUFF_DB = {
    // ── FLASKS (order 10) ──────────────────────────────────────────────────
    17627: {name:"Flask of Distilled Wisdom",    icon:"inv_potion_97",  order:10},
    17628: {name:"Flask of Supreme Power",       icon:"inv_potion_41",  order:10},
    28518: {name:"Flask of Fortification",       icon:"inv_potion_158", order:10},
    28519: {name:"Flask of Mighty Restoration",  icon:"inv_potion_118", order:10},
    28520: {name:"Flask of Relentless Assault",  icon:"inv_potion_117", order:10},
    28521: {name:"Flask of Blinding Light",      icon:"inv_potion_116", order:10},
    28540: {name:"Flask of Pure Death",          icon:"inv_potion_115", order:10},

    // ── BATTLE ELIXIRS (order 20) ──────────────────────────────────────────
    11406: {name:"Elixir Demonslaying",          icon:"inv_potion_27",  order:20},
    17538: {name:"Elixir of Mongoose",           icon:"inv_potion_32",  order:20},
    17539: {name:"Greater Arcane Elixir",        icon:"inv_potion_25",  order:20},
    28490: {name:"Elixir Major Strength",        icon:"inv_potion_152", order:20},
    28497: {name:"Elixir Major Agility",         icon:"inv_potion_127", order:20},
    28503: {name:"Elixir Major Shadow",          icon:"inv_potion_145", order:20},
    33721: {name:"Adept's Elixir",              icon:"inv_potion_96",  order:20},
    38954: {name:"Fel Strength Elixir",          icon:"inv_potion_152", order:20},

    // ── GUARDIAN ELIXIRS (order 30) ────────────────────────────────────────
    13445: {name:"Greater Elixir of Defense",    icon:"inv_potion_57",  order:30},
    28491: {name:"Elixir Healing Power",         icon:"inv_potion_142", order:30},
    28502: {name:"Elixir of Major Defense",      icon:"inv_potion_122", order:30},
    28509: {name:"Elixir Major Mageblood",       icon:"inv_potion_151", order:30},
    39625: {name:"Elixir Major Fortitude",       icon:"inv_potion_158", order:30},
    39627: {name:"Elixir Draenic Wisdom",        icon:"inv_potion_155", order:30},

    // ── FOOD (order 40) ────────────────────────────────────────────────────
    27665: {name:"Poached Bluefish",             icon:"inv_misc_food_76",                order:40},
    33253: {name:"Buzzard / Clam Bar",           icon:"inv_misc_food_85_stegadonbite",   order:40},
    33256: {name:"Roasted Clefthoof",            icon:"inv_misc_food_60",                order:40},
    33258: {name:"Crawdad / Feast",              icon:"inv_misc_fish_16",                order:40},
    33261: {name:"Warp Burger",                  icon:"inv_misc_food_65",                order:40},
    33262: {name:"Grilled Mudfish",              icon:"inv_misc_food_78",                order:40},
    33263: {name:"Blackened Basilisk",           icon:"inv_misc_food_86_basilisk",       order:40},
    33264: {name:"Crunchy Serpent",              icon:"inv_misc_food_88_ravagernuggets", order:40},
    33266: {name:"Blackened Sporefish",          icon:"inv_misc_food_79",                order:40},
    33267: {name:"Feltail Delight",              icon:"inv_misc_food_74",                order:40},
    33268: {name:"Golden Fish Sticks",           icon:"inv_misc_fish_18",                order:40},
    35271: {name:"Shortribs / Talbuk",           icon:"inv_misc_food_48",                order:40},
    43722: {name:"Skullfish Soup",               icon:"inv_misc_food_63",                order:40},
    43763: {name:"Spicy Hot Talbuk",             icon:"inv_misc_food_84_roastclefthoof", order:40},
    43764: {name:"Spicy Hot Talbuk",             icon:"inv_misc_food_84_roastclefthoof", order:40},
    45020: {name:"Hot Apple Cider",              icon:"inv_drink_23",                    order:40},

    // ── SCROLLS (order 50) ─────────────────────────────────────────────────
    33077: {name:"Scroll of Agility V",          icon:"inv_scroll_02",  order:50},
    33079: {name:"Scroll of Protection V",       icon:"inv_scroll_07",  order:50},
    33080: {name:"Scroll of Spirit V",           icon:"inv_scroll_01",  order:50},
    33081: {name:"Scroll of Spirit V",           icon:"inv_scroll_01",  order:50},
    33082: {name:"Scroll of Strength V",         icon:"inv_scroll_02",  order:50},

    // ── OTHER CONSUMABLES / MISC (order 60) ───────────────────────────────
    5665:  {name:"Bogling Root",                 icon:"inv_misc_herb_07", order:60},
    11371: {name:"Gift of Arthas",               icon:"inv_potion_28",    order:60},
    11374: {name:"Gift of Arthas",               icon:"inv_potion_28",    order:60},

    // ── IN-COMBAT CONSUMABLES (order 70) ──────────────────────────────────
    43204: {name:"Healthstone",    icon:"inv_stone_04",              order:70, category:5},
    27235: {name:"Healthstone 0/2",icon:"inv_stone_04",              order:70, category:5},
    27236: {name:"Healthstone 1/2",icon:"inv_stone_04",              order:70, category:5},
    27237: {name:"Healthstone 2/2",icon:"inv_stone_04",              order:70, category:5},
    16666: {name:"Demonic Rune",   icon:"inv_misc_rune_04",          order:70, category:5},
    27869: {name:"Dark Rune",      icon:"spell_shadow_sealofkings",  order:70, category:5},
    10058: {name:"Mana Ruby", icon:"inv_misc_gem_ruby_01",           order:70, category:5},
    27103: {name:"Mana Emerald", icon:"inv_misc_gem_stone_01",       order:70, category:5},
    41031: {name:"Nethergon Energy",icon:"inv_potion_137",           order:70, category:5},
    41032: {name:"Nethergon Vapor", icon:"inv_potion_131",           order:70, category:5},
    41618: {name:"Bottled Nethergon Energy", icon:"inv_potion_156",  order:70, category:5},
    41620: {name:"Bottled Nethergon Vapor", icon:"inv_potion_153",   order:70, category:5},
    43182: {name:"Cenarion Healing Salve",icon:"inv_potion_153",     order:70, category:5},
    43183: {name:"Cenarion Mana Salve",icon:"inv_potion_137",        order:70, category:5},
    41029: {name:"Cenarion Healing Salve",icon:"inv_potion_153",     order:70, category:5},
    41030: {name:"Cenarion Mana Salve",icon:"inv_potion_137",        order:70, category:5},
    10909: {name:"Major Healing Potion", icon:"inv_potion_54",       order:70, category:5},
    17534: {name:"Super Healing Potion", icon:"inv_potion_153",      order:70, category:5},
    28495: {name:"Healing Potion Injector",icon:"inv_potion_131",    order:70, category:5},
    33092: {name:"Healing Potion Injector",icon:"inv_potion_131",    order:70, category:5},
    13444: {name:"Major Mana Potion", icon:"inv_potion_76",          order:70, category:5},
    17531: {name:"Super Mana Potion", icon:"inv_potion_137",         order:70, category:5},
    28499: {name:"Mana Potion Injector",icon:"inv_potion_168",       order:70, category:5},
    33093: {name:"Mana Potion Injector",icon:"inv_potion_168",       order:70, category:5},
    35476: {name:"Drums of Battle", icon:"inv_misc_drum_02",         order:70, category:5},
    35478: {name:"Drums of Restoration",icon:"inv_misc_drum_01",     order:70, category:5},
    35475: {name:"Drums of War", icon:"inv_misc_drum_03",            order:70, category:5},
    35477: {name:"Drums of Speed", icon:"inv_misc_drum_04",          order:70, category:5},
    35474: {name:"Drums of Panic", icon:"inv_misc_drum_06",          order:70, category:5},
    28507: {name:"Haste Potion",   icon:"inv_potion_108",            order:70, category:5},
    28508: {name:"Destruction Potion",icon:"inv_potion_107",         order:70, category:5},
    28579: {name:"Ironshield Potion",icon:"inv_potion_133",          order:70, category:5},
    28515: {name:"Ironshield Potion",icon:"inv_potion_133",          order:70, category:5},
    28726: {name:"Nightmare Seed",icon:"inv_misc_herb_nightmareseed",order:70, category:5},

    // ── TRINKET PROCS (hidden, category:3) ───────────────────────────────
    33807: {name:"Abacus of Violent Odds",icon:"inv_misc_enggizmos_18",order:99, category:3},
};

const ENCHANT_DB = {
    368: {name:"+12 Agi"},
    369: {name:"+12 Int"},
    684: {name:"+15 Str"},
    911: {name:"Minor Speed"},
    2841: {name:"+10 Stamina"},
    2988: {name:"+8 Nature Resist"},
    2997: {name:"+13 Dodge Rating"},
    2998: {name:"+7 All Resistances"},
    3005: {name:"+20 Nature Resistance"},
    3008: {name:"+20 Frost Resistance"},
    929: {name:"+7 Stam"},
    1071: {name:"+18 Stam"},
    1144: {name:"+15 Spirit"},
    1583: {name:"+24 AP"},
    1593: {name:"+24 AP"},
    1594: {name:"+26 AP"},
    1888: {name:"+5 All Resistance"},
    1891: {name:"+4 Stats"},
    1900: {name:"Crusader"},
    2322: {name:"+35 Heal & 12 SP"},
    2343: {name:"+81 Heal & 27 SP"},
    2504: {name:"+30 SP"},
    2505: {name:"+55 Heal & 19 SP"},
    2506: {name:"Dense Sharpening Stone",icon:"inv_stone_02"},
    2523: {name:"+30 Hit Rating"},
    2564: {name:"+15 Agi"},
    2566: {name:"+24 Heal & 8 SP"},
    2590: {name:"+4 MP5 & 10 Stam & 24 Heal"},
    2605: {name:"+18 Spell"},
    2606: {name:"+30 AP"},
    2613: {name:"+2% Threat"},
    2614: {name:"+20 Shadow SP"},
    2617: {name:"+30 Heal & 10 SP"},
    2621: {name:"Subtlety"},
    2622: {name:"+12 Dodge"},
    2628: {name:"Brilliant Wizard Oil",icon:"inv_potion_105"},
    2629: {name:"Brilliant Mana Oil",icon:"inv_potion_100"},
    2646: {name:"+12 Stam"},
    2647: {name:"+12 Str"},
    2648: {name:"+12 Defense"},
    2649: {name:"+12 Stam"},
    2650: {name:"+15 SP"},
    2654: {name:"+12 Int"},
    2655: {name:"+15 Shield Block"},
    2657: {name:"+12 Agi"},
    2659: {name:"+150 HP"},
    2661: {name:"+6 Stats"},
    2662: {name:"+120 Armor"},
    2666: {name:"+30 Intellect"},
    2667: {name:"Savagery"},
    2668: {name:"+20 SP & Heal"},
    2669: {name:"+40 SP"},
    2670: {name:"+35 Agi"},
    2671: {name:"Sunfire"},
    2672: {name:"Soulfrost"},
    2673: {name:"Mongoose"},
    2677: {name:"Superior Mana Oil",icon:"inv_potion_101"},
    2678: {name:"Superior Wizard Oil",icon:"inv_potion_141"},
    2705: {name:"+55 Heal +19 SP"},
    2713: {name:"Adamantite Sharpening Stone",icon:"inv_stone_sharpeningstone_07"},
    2715: {name:"+31 Heal & 11 SP & 5 MP5"},
    2722: {name:"+10 Damage"},
    2723: {name:"Scope (+28 Crit)",icon:"inv_stone_weightstone_07"},
    2724: {name:"+28 Crit"},
    2745: {name:"+46 Heal +16 SP +15 Stam"},
    2746: {name:"+66 Heal, 22 SP, 20 Stam"},
    2747: {name:"+25 SP & +15 Stam"},
    2748: {name:"+35 SP & 20 Stam"},
    2928: {name:"+12 SP"},
    2929: {name:"+2 Weapon Dmg"},
    2930: {name:"+20 Heal & 7 SP"},
    2934: {name:"+10 Spell Crit"},
    2935: {name:"+15 Spell Hit"},
    2937: {name:"+20 SP"},
    2938: {name:"+20 Spell Pen"},
    2939: {name:"+6 Agi, Minor Speed"},
    2940: {name:"+9 Stam, Minor Speed"},
    2955: {name:"Adamantite Weightstone",icon:"inv_stone_weightstone_07"},
    2978: {name:"+15 Dodge & +10 Defense"},
    2979: {name:"+29 Heal & 10 SP"},
    2980: {name:"+33 Heal, 11 SP, 4 MP5"},
    2981: {name:"+15 SP"},
    2982: {name:"+18 SP & 10 Crit"},
    2983: {name:"+26 AP"},
    2986: {name:"+30 AP & 10 Crit"},
    2990: {name:"+13 Def"},
    2991: {name:"+15 Def & 10 Dodge"},
    2992: {name:"+5 MP5"},
    2994: {name:"+13 Spell Crit"},
    2995: {name:"+12 SP & 15 Crit"},
    2996: {name:"+13 Crit"},
    2997: {name:"+20 AP & 15 Crit"},
    2999: {name:"+16 Defense & +17 Dodge"},
    3001: {name:"+35 Heal, 12 SP, 7 MP5"},
    3002: {name:"+22 SP & 14 Hit"},
    3003: {name:"+34 AP & 16 Hit"},
    3010: {name:"+40 AP & 10 Crit"},
    3011: {name:"+40 AP & 10 Crit"},
    3012: {name:"+50 AP & 12 Crit"},
    3013: {name:"+40 Stam & 12 Agi"},
    3096: {name:"+17 Str & +17 Int"},
    3150: {name:"+6 MP5"},
    33990: {name:"+15 Spi"},

    // Seals para tracking por Auras (no renderizar en consumibles)
    25742: {name:"Seal of Righteousness", category: 'seal'},
    25740: {name:"Seal of Righteousness", category: 'seal'},
    25739: {name:"Seal of Righteousness", category: 'seal'},
    25738: {name:"Seal of Righteousness", category: 'seal'},
    25737: {name:"Seal of Righteousness", category: 'seal'},
    25736: {name:"Seal of Righteousness", category: 'seal'},
    25735: {name:"Seal of Righteousness", category: 'seal'},
    25713: {name:"Seal of Righteousness", category: 'seal'},
    27156: {name:"Seal of Righteousness", category: 'seal'},
    27155: {name:"Seal of Righteousness", category: 'seal'},
    20154: {name:"Seal of Crusader", category: 'seal'},
    20305: {name:"Seal of Crusader", category: 'seal'},
    20306: {name:"Seal of Crusader", category: 'seal'},
    20307: {name:"Seal of Crusader", category: 'seal'},
    20308: {name:"Seal of Crusader", category: 'seal'},
    21082: {name:"Seal of Crusader", category: 'seal'},
    27158: {name:"Seal of Crusader", category: 'seal'},
    20164: {name:"Seal of Justice", category: 'seal'},
    20165: {name:"Seal of Light", category: 'seal'},
    20347: {name:"Seal of Light", category: 'seal'},
    20348: {name:"Seal of Light", category: 'seal'},
    20349: {name:"Seal of Light", category: 'seal'},
    27160: {name:"Seal of Light", category: 'seal'},
    27159: {name:"Seal of Light", category: 'seal'},
    20166: {name:"Seal of Wisdom", category: 'seal'},
    20356: {name:"Seal of Wisdom", category: 'seal'},
    20357: {name:"Seal of Wisdom", category: 'seal'},
    27167: {name:"Seal of Wisdom", category: 'seal'},
    27166: {name:"Seal of Wisdom", category: 'seal'},
    20375: {name:"Seal of Command", category: 'seal'},
    20376: {name:"Seal of Command", category: 'seal'},
    20377: {name:"Seal of Command", category: 'seal'},
    20378: {name:"Seal of Command", category: 'seal'},
    20379: {name:"Seal of Command", category: 'seal'},
    27157: {name:"Seal of Command", category: 'seal'},
    31892: {name:"Seal of Blood", category: 'seal'},
    34870: {name:"Seal of Martyr", category: 'seal'},
    31801: {name:"Seal of Vengeance", category: 'seal'}
};

const SPELL_DB = {
    642: {name:"Divine Shield",icon:"spell_holy_divineintervention",category:1},
    1020: {name:"Divine Shield",icon:"spell_holy_divineintervention",category:1},
    1719: {name:"Recklessness",icon:"ability_criticalstrike",category:1},
    2139: {name:"Counterspell",icon:"spell_frost_iceshock",isInterrupt:true,category:2},
    2825: {name:"Bloodlust",icon:"spell_nature_bloodlust",category:1},
    2894: {name:"Fire Elemental",icon:"spell_fire_elemental_totem",category:1},
    3045: {name:"Rapid Fire",icon:"ability_hunter_runningshot",category:1},
    6346: {name:"Fear Ward",icon:"spell_holy_excorcism",category:1},
    6554: {name:"Pummel",icon:"inv_gauntlets_04",isInterrupt:true,category:2},
    6774: {name:"Slice and Dice",icon:"ability_rogue_slicedice",category:2},
    7744: {name:"Will of the Forsaken",icon:"spell_shadow_raisedead",category:4},
    9512: {name:"Thistle Tea",icon:"inv_drink_milk_05",category:5},
    10060: {name:"Power Infusion",icon:"spell_holy_powerinfusion",category:1},
    11305: {name:"Sprint",icon:"ability_rogue_sprint",category:2},
    11717: {name:"Curse Recklessness",icon:"spell_shadow_unholystrength",category:2},
    12042: {name:"Arcane Power",icon:"spell_nature_lightning",category:1},
    12292: {name:"Death Wish",icon:"spell_shadow_deathpact",category:1},
    12328: {name:"Sweeping Strikes",icon:"ability_rogue_slicedice",category:2},
    1680: {name:"Whirlwind",icon:"ability_whirlwind",category:2},
    30335: {name:"Bloodthirst",icon:"spell_nature_bloodlust",category:2},
    25375: {name:"Mind Blast",icon:"spell_shadow_unholyfrenzy",category:2},
    10057: {name:"Mana Citrine",icon:"inv_misc_gem_opal_01",category:5},
    10058: {name:"Mana Ruby",icon:"inv_misc_gem_ruby_01",category:5},
    27103: {name:"Mana Emerald",icon:"inv_misc_gem_stone_01",category:5},
    37445: {name:"Serpent-Coil Braid",icon:"spell_nature_poisoncleansingtotem",category:3},
    12472: {name:"Icy Veins",icon:"spell_frost_coldhearted",category:1},
    13241: {name:"Goblin Sapper",icon:"spell_fire_selfdestruct",category:5},
    13750: {name:"Adrenaline Rush",icon:"spell_shadow_shadowworddominate",category:1},
    13877: {name:"Blade Flurry",icon:"ability_warrior_punishingblow",category:1},
    14751: {name:"Inner Focus",icon:"spell_frost_windwalkon",category:2},
    16166: {name:"Elemental Mastery",icon:"spell_nature_wispheal",category:2},
    16188: {name:"Nature's Swiftness",icon:"spell_nature_ravenform",category:2},
    17116: {name:"Nature's Swiftness",icon:"spell_nature_ravenform",category:2},
    16190: {name:"Mana Tide Totem",icon:"spell_frost_summonwaterelemental",category:1},
    16666: {name:"Demonic Rune",icon:"inv_misc_rune_04",category:5},
    17531: {name:"Super Mana Potion",icon:"inv_potion_137",category:5},
    17534: {name:"Super Healing Potion",icon:"inv_potion_153",category:5},
    18562: {name:"Swiftmend",icon:"inv_relics_idolofrejuvenation",category:2},
    19574: {name:"Bestial Wrath",icon:"ability_druid_ferociousbite",category:1},
    10308: {name:"Hammer of Justice",icon:"spell_holy_sealofmight",category:1},
    20216: {name:"Divine Flavor",icon:"spell_holy_heal",category:2},
    20235: {name:"Lay on Hands",icon:"spell_holy_layonhands",category:1},
    20271: {name:"Judgement",icon:"spell_holy_righteousfury"},
    20272: {name:"Judgement of Wisdom",icon:"spell_holy_righteousnessaura"},
    20273: {name:"Judgement of the Crusader",icon:"spell_holy_holysmite"},
    20274: {name:"Judgement of Justice",icon:"spell_holy_sealofwrath"},
    20289: {name:"Judgement of Righteousness",icon:"ability_thunderbolt"},
    20424: {name:"Judgement of Command",icon:"ability_warrior_innerrage"},
    20484: {name:"Rebirth",icon:"spell_nature_reincarnation",category:1,isRes:true},
    31804: {name:"Judgement of the Martyr",icon:"spell_holy_sealofblood"},
    31898: {name:"Judgement of Blood",icon:"spell_holy_sealofblood"},
    21183: {name:"Judgement of the Crusader",icon:"spell_holy_holysmite"},
    20185: {name:"Judgement of Light",icon:"spell_holy_righteousfury"},
    20186: {name:"Judgement of Wisdom",icon:"spell_holy_righteousnessaura"},
    20184: {name:"Judgement of Justice",icon:"spell_holy_sealofwrath"},
    35395: {name:"Crusader Strike",icon:"spell_holy_crusaderstrike",category:2},

    // Paladin Seals
    25742: {name:"Seal of Righteousness",icon:"spell_holy_slowingpoison",category:2},
    25740: {name:"Seal of Righteousness",icon:"spell_holy_slowingpoison",category:2},
    25739: {name:"Seal of Righteousness",icon:"spell_holy_slowingpoison",category:2},
    25738: {name:"Seal of Righteousness",icon:"spell_holy_slowingpoison",category:2},
    25737: {name:"Seal of Righteousness",icon:"spell_holy_slowingpoison",category:2},
    25736: {name:"Seal of Righteousness",icon:"spell_holy_slowingpoison",category:2},
    25735: {name:"Seal of Righteousness",icon:"spell_holy_slowingpoison",category:2},
    25713: {name:"Seal of Righteousness",icon:"spell_holy_slowingpoison",category:2},
    27155: {name:"Seal of Righteousness",icon:"spell_holy_slowingpoison",category:2},
    27156: {name:"Seal of Righteousness",icon:"spell_holy_slowingpoison",category:2},
    20154: {name:"Seal of the Crusader",icon:"spell_holy_holysmite",category:2},
    20305: {name:"Seal of the Crusader",icon:"spell_holy_holysmite",category:2},
    20306: {name:"Seal of the Crusader",icon:"spell_holy_holysmite",category:2},
    20307: {name:"Seal of the Crusader",icon:"spell_holy_holysmite",category:2},
    20308: {name:"Seal of the Crusader",icon:"spell_holy_holysmite",category:2},
    21082: {name:"Seal of the Crusader",icon:"spell_holy_holysmite",category:2},
    27158: {name:"Seal of the Crusader",icon:"spell_holy_holysmite",category:2},
    20164: {name:"Seal of Justice",icon:"spell_holy_sealofwrath",category:2},
    20165: {name:"Seal of Light",icon:"spell_holy_healingaura",category:2},
    20347: {name:"Seal of Light",icon:"spell_holy_healingaura",category:2},
    20348: {name:"Seal of Light",icon:"spell_holy_healingaura",category:2},
    20349: {name:"Seal of Light",icon:"spell_holy_healingaura",category:2},
    27159: {name:"Seal of Light",icon:"spell_holy_healingaura",category:2},
    27160: {name:"Seal of Light",icon:"spell_holy_healingaura",category:2},
    20166: {name:"Seal of Wisdom",icon:"spell_holy_righteousnessaura",category:2},
    20356: {name:"Seal of Wisdom",icon:"spell_holy_righteousnessaura",category:2},
    20357: {name:"Seal of Wisdom",icon:"spell_holy_righteousnessaura",category:2},
    27166: {name:"Seal of Wisdom",icon:"spell_holy_righteousnessaura",category:2},
    27167: {name:"Seal of Wisdom",icon:"spell_holy_righteousnessaura",category:2},
    20375: {name:"Seal of Command",icon:"ability_warrior_innerrage",category:2},
    20376: {name:"Seal of Command",icon:"ability_warrior_innerrage",category:2},
    20377: {name:"Seal of Command",icon:"ability_warrior_innerrage",category:2},
    20378: {name:"Seal of Command",icon:"ability_warrior_innerrage",category:2},
    20379: {name:"Seal of Command",icon:"ability_warrior_innerrage",category:2},
    27157: {name:"Seal of Command",icon:"ability_warrior_innerrage",category:2},
    31892: {name:"Seal of Blood",icon:"spell_holy_sealofblood",category:2},
    31801: {name:"Seal of Vengeance",icon:"spell_holy_sealofblood",category:2},
    34870: {name:"Seal of the Martyr",icon:"spell_holy_sealofblood",category:2},
    1044: {name:"Blessing of Freedom",icon:"spell_holy_sealofvalor",category:1},
    10278: {name:"Blessing of Protection",icon:"spell_holy_sealofprotection",category:1},
    20549: {name:"War Stomp",icon:"ability_warstomp",category:4},
    20554: {name:"Berserking",icon:"racial_troll_berserk",category:1},
    20572: {name:"Blood Fury",icon:"racial_orc_berserkerstrength",category:1},
    20594: {name:"Stoneform",icon:"spell_shadow_unholystrength",category:4},
    22812: {name:"Barkskin",icon:"spell_nature_stoneclawtotem",category:1},
    32182: {name:"Heroism",icon:"ability_shaman_heroism",category:1},
    23723: {name:"Mind Quickening",icon:"spell_nature_wispheal",category:3},
    23989: {name:"Readiness",icon:"ability_hunter_readiness",category:1},
    25454: {name:"Earth Shock",icon:"spell_nature_earthshock",isInterrupt:true,category:2},
    26296: {name:"Berserking",icon:"racial_troll_berserk",category:1},
    26297: {name:"Berserking",icon:"racial_troll_berserk",category:1},
    26866: {name:"Expose Armor",icon:"ability_warrior_riposte",category:2},
    26993: {name:"Faerie Fire",icon:"spell_nature_faeriefire",category:2},
    27089: {name:"Mana Gem",icon:"inv_misc_gem_sapphire_02",category:2},
    27138: {name:"Exorcism",icon:"spell_holy_excorcism_02",category:2},
    27154: {name:"Lay on Hands",icon:"spell_holy_layonhands",category:1},
    27226: {name:"Curse Recklessness",icon:"spell_shadow_unholystrength",category:2},
    27228: {name:"Curse Elements",icon:"spell_shadow_chilltouch",category:2},
    27235: {name:"Healthstone 0/2",icon:"inv_stone_04",category:5},
    27236: {name:"Healthstone 1/2",icon:"inv_stone_04",category:5},
    27237: {name:"Healthstone 2/2",icon:"inv_stone_04",category:5},
    27263: {name:"Shadowburn",icon:"spell_shadow_scourgebuild",category:2},
    29341: {name:"Shadowburn",icon:"spell_shadow_scourgebuild",category:2},
    30546: {name:"Shadowburn",icon:"spell_shadow_scourgebuild",category:2},
    27223: {name:"Death Coil",icon:"spell_shadow_deathcoil",category:2},
    27619: {name:"Ice Block",icon:"spell_frost_frost",category:1},
    27869: {name:"Dark Rune",icon:"spell_shadow_sealofkings",category:5},
    28093: {name:"Lightning Speed",icon:"inv_misc_ahnqirajtrinket_04",category:5},
    28495: {name:"Super Healing Potion",icon:"inv_potion_131",category:5},
    28499: {name:"Mana Pot/Injector",icon:"inv_potion_168",category:5},
    28507: {name:"Haste Potion",icon:"inv_potion_108",category:5},
    28508: {name:"Destruction Potion",icon:"inv_potion_107",category:5},
    28579: {name:"Ironshield Potion",icon:"inv_potion_133",category:5},
    28515: {name:"Ironshield Potion",icon:"inv_potion_133",category:5},
    28726: {name:"Nightmare Seed",icon:"inv_misc_herb_nightmareseed",category:5},
    28730: {name:"Arcane Torrent",icon:"spell_shadow_teleport",category:4},
    29166: {name:"Innervate",icon:"spell_nature_lightning",category:1},
    41031: {name:"Nethergon Energy",icon:"inv_potion_137",category:5},
    41032: {name:"Nethergon Vapor",icon:"inv_potion_131",category:5},
    41618: {name:"Bottled Nethergon Energy",icon:"inv_potion_156",category:5},
    41620: {name:"Bottled Nethergon Vapor",icon:"inv_potion_153",category:5},
    43182: {name:"Cenarion Healing Salve",icon:"inv_potion_153",category:5},
    43183: {name:"Cenarion Mana Salve",icon:"inv_potion_137",category:5},
    41029: {name:"Cenarion Healing Salve",icon:"inv_potion_153",category:5},
    41030: {name:"Cenarion Mana Salve",icon:"inv_potion_137",category:5},
    34653: {name:"LC Prayerbook",icon:"inv_relics_libramoftruth",category:3},
    33702: {name:"Blood Fury",icon:"racial_orc_berserkerstrength",category:1},
    29704: {name:"Shield Bash",icon:"ability_warrior_shieldbash",isInterrupt:true,category:2},
    30330: {name:"Mortal Strike",icon:"ability_warrior_savageblow",category:2},
    25248: {name:"Mortal Strike",icon:"ability_warrior_savageblow",category:2},
    29858: {name:"Soulshatter",icon:"spell_arcane_arcane01",category:2},
    30449: {name:"Spellsteal",icon:"spell_arcane_arcane02",category:2},
    30486: {name:"TBC Sapper",icon:"inv_gizmo_supersappercharge",category:5},
    30216: {name:"Fel Iron Bomb",icon:"inv_gizmo_felironbomb",category:5},
    30217: {name:"Adamantite Grenade",icon:"inv_misc_bomb_08",category:5},
    23063: {name:"Dense Dynamite",icon:"inv_misc_bomb_06",category:5},
    30823: {name:"Shamanistic Rage",icon:"spell_nature_shamanrage",category:1},
    31224: {name:"Cloak of Shadows",icon:"spell_shadow_nethercloak",category:1},
    31804: {name:"Judgement of the Martyr",icon:"spell_holy_sealofblood"},
    31842: {name:"Divine Illumination",icon:"spell_holy_divineillumination",category:2},
    31884: {name:"Avenging Wrath",icon:"spell_holy_avenginewrath",category:1},
    31898: {name:"Judgement of Blood",icon:"spell_holy_sealofblood"},
    32182: {name:"Heroism",icon:"ability_shaman_heroism",category:1},
    32594: {name:"Earth Shield",icon:"spell_nature_skinofearth",category:1},
    33206: {name:"Pain Suppression",icon:"spell_holy_painsupression",category:1},
    33602: {name:"Improved Faerie Fire",icon:"spell_nature_faeriefire",category:2},
    33807: {name:"Abacus of Violent Odds",icon:"inv_misc_enggizmos_18",category:3},
    33831: {name:"Force of Nature",icon:"ability_druid_forceofnature",category:1},
    34433: {name:"Shadowfiend",icon:"spell_shadow_shadowfiend",category:1},
    34477: {name:"Misdirection",icon:"ability_hunter_misdirection",category:2},
    35163: {name:"Silver Crescent",icon:"inv_weapon_shortblade_23",category:3},
    35165: {name:"Essence of Martyr",icon:"inv_valentineperfumebottle",category:3},
    35166: {name:"Bloodlust Brooch",icon:"inv_misc_monsterscales_15",category:3},
    35476: {name:"Drums of Battle",icon:"inv_misc_drum_02",category:5},
    35478: {name:"Drums of Resto",icon:"inv_misc_drum_01",category:5},
    38768: {name:"Kick",icon:"ability_kick",isInterrupt:true,category:2},
    43204: {name:"Healthstone",icon:"inv_stone_04",category:5},
    45438: {name:"Ice Block",icon:"spell_frost_frost",category:1},
    51582: {name:"Rocket Boots",icon:"inv_gizmo_rocketboot_01",category:3},
    26481: {name:"Badge of the Swarmguard",icon:"inv_misc_ahnqirajtrinket_04",category:3},
    40402: {name:"Earring of Soulful Meditation",icon:"inv_jewelry_ring_07",category:3},
    40729: {name:"Badge of Tenacity",icon:"inv_misc_armorkit_12",category:3},
    // Nuevas habilidades de Shaman
    17364: {name:"Stormstrike",icon:"ability_shaman_stormstrike"},
    25547: {name:"Fire Nova Totem",icon:"spell_fire_sealoffire"},
    25546: {name:"Fire Nova Totem",icon:"spell_fire_sealoffire"},
    11315: {name:"Fire Nova Totem",icon:"spell_fire_sealoffire"},
    11314: {name:"Fire Nova Totem",icon:"spell_fire_sealoffire"},
    8499: {name:"Fire Nova Totem",icon:"spell_fire_sealoffire"},
    8498: {name:"Fire Nova Totem",icon:"spell_fire_sealoffire"},
    // Nuevas habilidades de Priest
    33076: {name:"Prayer of Mending",icon:"spell_holy_prayerofmendingtbc"},
    34866: {name:"Circle of Healing",icon:"spell_holy_circleofrenewal"},
    34865: {name:"Circle of Healing",icon:"spell_holy_circleofrenewal"},
    34864: {name:"Circle of Healing",icon:"spell_holy_circleofrenewal"},
    34863: {name:"Circle of Healing",icon:"spell_holy_circleofrenewal"},
    34861: {name:"Circle of Healing",icon:"spell_holy_circleofrenewal"},
    20608: {name:"Reincarnation",icon:"spell_nature_reincarnation",category:1,isRes:true},
    20707: {name:"Soulstone Res",icon:"spell_shadow_soulgem",category:1,isRes:true},
    26994: {name:"Rebirth",icon:"spell_nature_reincarnation",category:1,isRes:true},

    // Priest abilities
    25218: {name:"Power Word: Shield",icon:"spell_holy_powerwordshield",category:2},
    25217: {name:"Power Word: Shield",icon:"spell_holy_powerwordshield",category:2},
    10901: {name:"Power Word: Shield",icon:"spell_holy_powerwordshield",category:2},
    33076: {name:"Prayer of Mending",icon:"spell_holy_prayerofmendingtga",category:2},
    34866: {name:"Circle of Healing",icon:"spell_holy_circleofrenewal",category:2},
    34865: {name:"Circle of Healing",icon:"spell_holy_circleofrenewal",category:2},
    34864: {name:"Circle of Healing",icon:"spell_holy_circleofrenewal",category:2},
    34863: {name:"Circle of Healing",icon:"spell_holy_circleofrenewal",category:2},
    34861: {name:"Circle of Healing",icon:"spell_holy_circleofrenewal",category:2},
    1161: {name:"Challenging Shout",icon:"ability_bullrush",category:2},
    5209: {name:"Challenging Roar",icon:"ability_druid_challangingroar",category:2},
};

const OPTIMAL_ENCHANTS = {
    "Warrior-Arms": {best:[3003,2986,2997,2661,368,2647,684,3012,2940,2939,2673],alt:[2983,1891,2657,1593,1594,2996,1583,2564,3010,3011,911,2667,2670,2929]},
    "Warrior-Fury": {best:[3003,2986,2997,2661,368,2647,684,3012,2940,2939,2673],alt:[2983,1891,2657,1593,1594,2996,1583,2564,3010,3011,911,2667,2670,2929]},
    "Warrior-Protection": {best:[2999,2991,2661,2659,2622,2649,684,3013,2940,2673,1071],alt:[2978,1891,2662,368,1888,2613,2648,2647,2996,2990,3012,3010,3011,911,929,2670,2655,2605]},
    "Paladin-Holy": {best:[3001,2980,2979,2661,2621,2617,2930,2322,2746,2940,2343,2654,369,2666],alt:[3002,2982,2995,2715,1891,2659,2654,2928,2566,2668,2650,2937,2745,2748,2747,2590,911,2992,3150,2657,2705,2505,2669,2928]},
    "Paladin-Protection": {best:[2999,3002,2991,2661,2659,2622,2646,2650,2937,2748,2940,2649,2669,1071,2928,2928],alt:[2978,1891,2662,368,1888,2613,2648,2647,2996,2990,3012,3010,3011,911,929,2669,2670,2655,2605]},
    "Paladin-Retribution": {best:[3003,2986,2997,2661,368,2647,684,3012,2940,2939,2657,2673],alt:[2983,1891,1593,1594,2996,1583,2564,3010,3011,911,2667,2670,2929]},
    "Hunter-BeastMastery": {best:[3003,2986,2997,2661,368,1593,2564,3012,2940,2939,2673,2724,2929],alt:[2606,2983,1891,2657,1594,2647,2996,684,1583,3010,3011,911,2657,2670]},
    "Hunter-Marksmanship": {best:[3003,2986,2997,2661,368,1593,2564,3012,2940,2939,2673,2724,2929],alt:[2606,2983,1891,2657,1594,2647,2996,684,1583,3010,3011,911,2670]},
    "Hunter-Survival": {best:[3003,2986,2997,2661,368,1593,2564,3012,2940,2939,2673,2724,2929],alt:[2606,2983,1891,2657,1594,2647,2996,684,1583,3010,3011,911,2670]},
    "Rogue-Combat": {best:[3003,2986,2997,2661,368,2657,2564,3012,2940,2939,2673],alt:[2983,1891,1593,1594,2996,1583,684,3010,3011,911,2670]},
    "Rogue-Assassination": {best:[3003,2986,2997,2661,368,2657,2564,3012,2940,2939,2673],alt:[2983,1891,1593,1594,2996,1583,684,3010,3011,911,2670]},
    "Rogue-Subtlety": {best:[3003,2986,2997,2661,368,2657,2564,3012,2940,2939,2673],alt:[2983,1891,1593,1594,2996,1583,684,3010,3011,911,2670]},
    "Priest-Holy": {best:[3001,2980,2979,2661,2621,2617,2930,2322,2746,2940,2343],alt:[2715,1891,2654,2928,2566,2668,2650,2745,2748,2747,2590,911,2992,3150,2705,2505,2669]},
    "Priest-Discipline": {best:[3001,2980,2979,2661,2621,2617,2930,2322,2746,2940,2343],alt:[2715,1891,2654,2928,2566,2668,2650,2745,2748,2747,2590,911,2992,3150,2705,2505,2669]},
    "Priest-Shadow": {best:[3002,2982,2995,2661,2621,2928,2937,2748,2940,2672,2650],alt:[2981,1891,2938,2654,2935,2934,2668,2747,911,2669,2504,2614]},
    "Shaman-Elemental": {best:[3002,2982,2995,2661,2621,2928,2937,2748,2940,2671,2654,369],alt:[2981,1891,2938,2654,2650,2935,2934,2668,2747,911,2504,2669]},
    "Shaman-Enhancement": {best:[3003,2986,2997,2661,368,2647,684,3012,2940,2939,2673],alt:[2983,1891,2657,1593,1594,2996,1583,2564,3010,3011,911,2667,2670]},
    "Shaman-Restoration": {best:[3001,2980,2979,2661,2621,2617,2930,2322,2746,2940,2343,2654,369],alt:[2715,1891,2654,2928,2566,2668,2650,2745,2748,2747,2590,911,2992,3150,2705,2505,2669]},
    "Mage-Arcane": {best:[3002,2982,2995,2661,2621,2654,2937,2748,2940,2671],alt:[2981,1891,2938,2928,2650,2935,2934,2668,2747,911,2669,2504]},
    "Mage-Fire": {best:[3002,2982,2995,2661,2621,2654,2937,2748,2940,2671],alt:[2981,1891,2938,2928,2650,2935,2934,2668,2747,911,2669,2504]},
    "Mage-Frost": {best:[3002,2982,2995,2661,2621,2654,2937,2748,2940,2672],alt:[2981,1891,2938,2928,2650,2935,2934,2668,2747,911,2669,2504]},
    "Warlock-Affliction": {best:[3002,2982,2995,2661,2621,2928,2937,2748,2940,2672,2650],alt:[2981,1891,2938,2654,2935,2934,2668,2747,911,2669,2504,2614]},
    "Warlock-Demonology": {best:[3002,2982,2995,2661,2621,2928,2937,2748,2940,2672,2650],alt:[2981,1891,2938,2654,2935,2934,2668,2747,911,2669,2504]},
    "Warlock-Destruction": {best:[3002,2982,2995,2661,2621,2928,2937,2748,2940,2671,2672,2650],alt:[2981,1891,2938,2654,2935,2934,2668,2747,911,2669,2504]},
    "Druid-Feral": {best:[3003,2613,2999,2986,2997,2991,2661,2659,368,2622,2657,2646,684,3012,3013,2940,2939,2673,2670,2929,2649],alt:[2983,2978,1891,2662,2647,1593,1594,2648,2996,1583,2990,2564,3010,3011,911,2606,2649]},
    "Druid-Balance": {best:[3002,2982,2995,2661,2621,2928,2937,2748,2940,2671],alt:[2981,1891,2938,2654,2650,2935,2934,2668,2747,911,2669,2504]},
    "Druid-Restoration": {best:[3001,2980,2979,2661,2621,2617,2930,2322,2746,2940,2343],alt:[2715,1891,2654,2928,2566,2668,2650,2745,2748,2747,2590,911,2992,3150,2705,2505,2669]},
};

const TIMELINE_SPELLS = {
    // Trinket Procs & Actives
    34774: { name: "DST", icon: "inv_misc_bone_elfskull_01", color: "#8a2be2" }, // Dragonspine Trophy
    34775: { name: "DST", icon: "inv_misc_bone_elfskull_01", color: "#8a2be2" }, // Dragonspine Trophy Haste Buff
    37198: { name: "Tome of Fiery Redemption", icon: "inv_relics_libramofhope", color: "#f4b400" }, // Tome of Fiery Redemption
    33649: { name: "Hourglass", icon: "inv_misc_hourglass_02", color: "#8a2be2" }, // Hourglass of the Unraveller
    33702: { name: "Blood Fury", icon: "racial_orc_berserkerstrength", color: "#d9534f" }, // Blood Fury (SP caster version)
    33370: { name: "Quagmirran's Eye", icon: "inv_misc_eye_01", color: "#179299" }, // Fungal Frenzy
    35163: { name: "Icon of the Silver Crescent", icon: "inv_trinket_naxxramas06", color: "#179299" },
    35165: { name: "Essence of the Martyr", icon: "inv_valentineperfumebottle", color: "#179299" },
    29601: { name: "Pendant of the Violet Eye", icon: "inv_trinket_naxxramas02", color: "#179299" },
    35166: { name: "Bloodlust Brooch", icon: "inv_trinket_naxxramas03", color: "#d9534f" },
    26481: { name: "Badge of the Swarmguard", icon: "inv_misc_ahnqirajtrinket_04", color: "#d9534f" },
    40402: { name: "Earring of Soulful Meditation", icon: "inv_jewelry_ring_07", color: "#8e44ad" },
    40729: { name: "Badge of Tenacity", icon: "inv_misc_armorkit_12", color: "#5cb85c" },
    35084: { name: "Scarab of the Infinite Cycle", icon: "inv_misc_orb_03", color: "#179299" },
    23723: { name: "Mind Quickening", icon: "spell_nature_wispheal", color: "#179299" },
    34477: { name: "Misdirection", icon: "ability_hunter_misdirection", color: "#ABD473" },
    33807: { name: "Abacus of Violent Odds", icon: "inv_misc_enggizmos_18", color: "#179299" },
    42084: { name: "Tsunami", icon: "inv_jewelry_talisman_04", color: "#8a2be2" },
    37445: { name: "Serpent-Coil Braid", icon: "spell_nature_poisoncleansingtotem", color: "#179299" },
    9512: { name: "Thistle Tea", icon: "inv_drink_milk_0", color: "#f1c40f", duration: 1000 },

    // Potions & Consumables
    28507: { name: "Haste Potion", icon: "inv_potion_108", color: "#e83e8c" },
    28508: { name: "Destruction Potion", icon: "inv_potion_107", color: "#e83e8c" },
    28579: { name: "Ironshield Potion", icon: "inv_potion_133", color: "#5cb85c" },
    28515: { name: "Ironshield Potion", icon: "inv_potion_133", color: "#5cb85c" },
    28726: { name: "Nightmare Seed", icon: "inv_misc_herb_nightmareseed", color: "#5cb85c" },
    35476: { name: "Drums of Battle", icon: "inv_misc_drum_02", color: "#e83e8c" },
    28499: { name: "Mana Potion", icon: "inv_potion_168", color: "#5bc0de", duration: 1000 },
    17531: { name: "Mana Potion", icon: "inv_potion_137", color: "#5bc0de", duration: 1000 },
    41031: { name: "Nethergon Energy", icon: "inv_potion_137", color: "#5bc0de", duration: 1000 },
    41032: { name: "Nethergon Vapor", icon: "inv_potion_131", color: "#e83e8c", duration: 1000 },
    41618: { name: "Bottled Nethergon Energy", icon: "inv_potion_156", color: "#5bc0de", duration: 1000 },
    41620: { name: "Bottled Nethergon Vapor", icon: "inv_potion_153", color: "#e83e8c", duration: 1000 },
    43182: { name: "Cenarion Healing Salve", icon: "inv_potion_153", color: "#e83e8c", duration: 1000 },
    43183: { name: "Cenarion Mana Salve", icon: "inv_potion_137", color: "#5bc0de", duration: 1000 },
    41029: { name: "Cenarion Healing Salve", icon: "inv_potion_153", color: "#e83e8c", duration: 1000 },
    41030: { name: "Cenarion Mana Salve", icon: "inv_potion_137", color: "#5bc0de", duration: 1000 },
    27103: { name: "Mana Emerald", icon: "inv_misc_gem_stone_01", color: "#5bc0de", duration: 1000 },
    10058: { name: "Mana Ruby", icon: "inv_misc_gem_ruby_01", color: "#5bc0de", duration: 1000 },
    10057: { name: "Mana Citrine", icon: "inv_misc_gem_opal_01", color: "#5bc0de", duration: 1000 },
    27089: { name: "Mana Emerald", icon: "inv_misc_gem_sapphire_02", color: "#5bc0de", duration: 1000 },
    11932: { name: "Mana Emerald", icon: "inv_misc_gem_sapphire_02", color: "#5bc0de", duration: 1000 },
    33066: { name: "Mana Emerald", icon: "inv_misc_gem_sapphire_02", color: "#5bc0de", duration: 1000 },
    16666: { name: "Demonic Rune", icon: "spell_shadow_sealofkings", color: "#8a2be2", duration: 1000 },
    27869: { name: "Dark Rune", icon: "spell_shadow_sealofkings", color: "#8a2be2", duration: 1000 },
    13241: { name: "Goblin Sapper", icon: "spell_fire_selfdestruct", color: "#ff4500", duration: 1000 },
    30486: { name: "Super Sapper", icon: "spell_fire_selfdestruct", color: "#ff4500", duration: 1000 },
    30216: { name: "Fel Iron Bomb", icon: "inv_gizmo_felironbomb", color: "#ff4500", duration: 1000 },
    30217: { name: "Adamantite Grenade", icon: "inv_misc_bomb_08", color: "#ff4500", duration: 1000 },
    23063: { name: "Dense Dynamite", icon: "inv_misc_bomb_06", color: "#ff4500", duration: 1000 },
    34653: { name: "LC Prayerbook", icon: "inv_relics_libramoftruth", color: "#fff" },

    // Class CDs
    34433: { name: "Shadowfiend", icon: "spell_shadow_shadowfiend", color: "#fff", duration: 15000 },
    11958: { name: "Cold Snap", icon: "spell_frost_wizardmark", color: "#5bc0de", duration: 1000 },
    2825: { name: "Bloodlust", icon: "spell_nature_bloodlust", color: "#d9534f" },
    32182: { name: "Heroism", icon: "ability_shaman_heroism", color: "#d9534f" },
    28093: { name: "Mongoose", icon: "spell_nature_lightning", color: "#66ccff" },
    2894: { name: "Fire Elemental", icon: "spell_fire_elemental_totem", color: "#ff4500", duration: 120000 },
    12472: { name: "Icy Veins", icon: "spell_frost_coldhearted", color: "#5bc0de" },
    12042: { name: "Arcane Power", icon: "spell_nature_lightning", color: "#5bc0de" },
    16166: { name: "Elemental Mastery", icon: "spell_nature_wispheal", color: "#5bc0de", duration: 1000 },
    13750: { name: "Adrenaline Rush", icon: "spell_shadow_shadowworddominate", color: "#f0ad4e" },
    13877: { name: "Blade Flurry", icon: "ability_warrior_punishingblow", color: "#f0ad4e" },
    19574: { name: "Bestial Wrath", icon: "ability_druid_ferociousbite", color: "#5cb85c" },
    12292: { name: "Death Wish", icon: "spell_shadow_deathpact", color: "#c9302c" },
    1719: { name: "Recklessness", icon: "ability_criticalstrike", color: "#c9302c" },
    3045: { name: "Rapid Fire", icon: "ability_hunter_runningshot", color: "#5cb85c" },
    10060: { name: "Power Infusion", icon: "spell_holy_powerinfusion", color: "#fff" },
    29166: { name: "Innervate", icon: "spell_nature_lightning", color: "#ff7d0a" },
    31884: { name: "Avenging Wrath", icon: "spell_holy_avenginwrath", color: "#f4b400" },
    31842: { name: "Divine Illumination", icon: "spell_holy_divineillumination", color: "#f4b400" },
    20572: { name: "Blood Fury", icon: "racial_orc_berserkerstrength", color: "#d9534f" },
    20554: { name: "Berserking", icon: "racial_troll_berserk", color: "#d9534f", duration: 10000 },
    26296: { name: "Berserking", icon: "racial_troll_berserk", color: "#d9534f", duration: 10000 },
    26297: { name: "Berserking", icon: "racial_troll_berserk", color: "#d9534f", duration: 10000 },
    20594: { name: "Stoneform", icon: "spell_shadow_unholystrength", color: "#777" },
    6774: { name: "Slice and Dice", icon: "ability_rogue_slicedice", color: "#ffff00" },
    31549: { name: "Slice and Dice", icon: "ability_rogue_slicedice", color: "#ffff00" },
    5171: { name: "Slice and Dice", icon: "ability_rogue_slicedice", color: "#ffff00" },
    1044: { name: "Blessing of Freedom", icon: "spell_holy_sealofvalor", color: "#f58cba", duration: 14000 },
    10278: { name: "Blessing of Protection", icon: "spell_holy_sealofprotection", color: "#f58cba", duration: 10000 },
    17116: { name: "Nature's Swiftness", icon: "spell_nature_ravenform", color: "#2ecc71" },
    16188: { name: "Nature's Swiftness", icon: "spell_nature_ravenform", color: "#2ecc71" },
    16190: { name: "Mana Tide Totem",   icon: "spell_frost_summonwaterelemental", color: "#00bcd4", duration: 12000 },
};

// ── CLASS ABILITY TRACKING (Casts/Debuff panel) ────────────────────────────
// casts: habilidades cuyo nº de casteos se contabiliza
// debuffs: buffs/debuffs de los que se muestra timeline de uptime (en targets de boss)
const CLASS_ABILITY_TRACKING = {

    // ── WARLOCK ─────────────────────────────────────────────────────────────
    "Warlock-Destruction": {
        casts: [
            // Shadow Bolt: TBC max rank 11 = 25307; also 27209 on some servers
            { ids: [25307, 25306, 25305, 27209, 686, 695, 705, 1088, 1106, 7617, 7618, 7619], topIds: [25307, 27209], name: "Shadow Bolt", icon: "spell_shadow_shadowbolt" },
            // Searing Pain: TBC max rank 8 = 27210
            { ids: [27210, 6262, 11394, 11395], topIds: [27210], name: "Searing Pain", icon: "spell_fire_soulburn" },
            // Soul Fire: TBC max rank 4 = 27211
            { ids: [27211, 6353, 17924], topIds: [27211], name: "Soul Fire", icon: "spell_fire_fireball" },
            // Immolate: TBC max rank 9 = 27215
            { ids: [27215, 348, 707, 1094, 2941, 11665, 11667, 11668], topIds: [27215], name: "Immolate", icon: "spell_fire_immolation" },
            // Corruption: TBC max rank 8 = 27216
            { ids: [27216, 172, 6222, 6223, 7648, 11671, 11672], topIds: [27216], name: "Corruption", icon: "spell_shadow_abominationexplosion" },
            // Life Tap: TBC max rank 7 = 27222
            { ids: [27222, 1454, 1455, 1456, 11687, 11688], topIds: [27222], name: "Life Tap", icon: "spell_shadow_burningspirit" },
        ],
        debuffs: [
            { ids: [27216, 172, 6222, 6223, 7648, 11671, 11672], name: "Corruption",             icon: "spell_shadow_abominationexplosion", color: "#8e44ad" },
            { ids: [27215, 348, 707, 1094, 2941, 11665, 11667, 11668], name: "Immolate",             icon: "spell_fire_immolation",        color: "#e74c3c" },
            { ids: [27218, 980, 1014, 6217, 11711, 11712],              name: "Curse of Agony",       icon: "spell_shadow_curseofsargeras",  color: "#9b59b6" },
            { ids: [27228, 1490, 11721, 11722],                         name: "Curse of Elements",    icon: "spell_shadow_chilltouch",       color: "#3498db" },
            { ids: [27226, 11717, 704, 7658, 7659],                     name: "Curse of Recklessness",icon: "spell_shadow_unholystrength",   color: "#e67e22" },
            { ids: [603, 30910],                                         name: "Curse of Doom",        icon: "spell_shadow_auraofdarkness",   color: "#c0392b" },
        ]
    },
    "Warlock-Affliction": {
        casts: [
            { ids: [25307, 25306, 25305, 27209, 686, 695, 705, 1088, 1106, 7617, 7618, 7619], topIds: [25307, 27209], name: "Shadow Bolt",    icon: "spell_shadow_shadowbolt" },
            { ids: [27216, 172, 6222, 6223, 7648, 11671, 11672],                               topIds: [27216],         name: "Corruption",     icon: "spell_shadow_abominationexplosion" },
            { ids: [27218, 980, 1014, 6217, 11711, 11712],                                     topIds: [27218],         name: "Curse of Agony", icon: "spell_shadow_curseofsargeras" },
            { ids: [27228, 1490, 11721, 11722],                                                topIds: [27228],         name: "Curse of Elements", icon: "spell_shadow_chilltouch" },
            { ids: [27226, 11717, 704, 7658, 7659],                                            topIds: [27226, 11717],  name: "Curse of Recklessness", icon: "spell_shadow_unholystrength" },
            { ids: [603, 30910],                                                                topIds: [30910],         name: "Curse of Doom",  icon: "spell_shadow_auraofdarkness" },
            { ids: [27222, 1454, 1455, 1456, 11687, 11688],                                    topIds: [27222],         name: "Life Tap",       icon: "spell_shadow_burningspirit" },
            { ids: [27261, 5500, 11094, 17941],                                                 topIds: [27261],         name: "Dark Pact",      icon: "spell_shadow_darkpact" },
        ],
        debuffs: [
            { ids: [27216, 172, 6222, 6223, 7648, 11671, 11672],   name: "Corruption",           icon: "spell_shadow_abominationexplosion", color: "#9b59b6" },
            { ids: [27218, 980, 1014, 6217, 11711, 11712],          name: "Curse of Agony",       icon: "spell_shadow_curseofsargeras",      color: "#8e44ad" },
            { ids: [27228, 1490, 11721, 11722],                     name: "Curse of Elements",    icon: "spell_shadow_chilltouch",           color: "#3498db" },
            { ids: [27226, 11717, 704, 7658, 7659],                 name: "Curse of Recklessness",icon: "spell_shadow_unholystrength",       color: "#e67e22" },
            { ids: [603, 30910],                                     name: "Curse of Doom",        icon: "spell_shadow_auraofdarkness",       color: "#c0392b" },
        ]
    },
    "Warlock-Demonology": {
        casts: [
            { ids: [25307, 25306, 25305, 27209, 686, 695, 705, 1088, 1106, 7617, 7618, 7619], topIds: [25307, 27209], name: "Shadow Bolt", icon: "spell_shadow_shadowbolt" },
            { ids: [27216, 172, 6222, 6223, 7648, 11671, 11672],                               topIds: [27216],        name: "Corruption", icon: "spell_shadow_abominationexplosion" },
            { ids: [27218, 980, 1014, 6217, 11711, 11712],                                     topIds: [27218],        name: "Curse of Agony", icon: "spell_shadow_curseofsargeras" },
            { ids: [27222, 1454, 1455, 1456, 11687, 11688],                                    topIds: [27222],        name: "Life Tap", icon: "spell_shadow_burningspirit" },
            { ids: [27261, 5500, 11094, 17941],                                                 topIds: [27261],        name: "Dark Pact", icon: "spell_shadow_darkpact" },
        ],
        debuffs: [
            { ids: [27216, 172, 6222, 6223, 7648, 11671, 11672], name: "Corruption",        icon: "spell_shadow_abominationexplosion", color: "#9b59b6" },
            { ids: [27218, 980, 1014, 6217, 11711, 11712],        name: "Curse of Agony",   icon: "spell_shadow_curseofsargeras",      color: "#8e44ad" },
            { ids: [27228, 1490, 11721, 11722],                   name: "Curse of Elements",icon: "spell_shadow_chilltouch",           color: "#3498db" },
            { ids: [27226, 11717, 704, 7658, 7659],                 name: "Curse of Recklessness",icon: "spell_shadow_unholystrength",       color: "#e67e22" },
            { ids: [603, 30910],                                     name: "Curse of Doom",        icon: "spell_shadow_auraofdarkness",       color: "#c0392b" },
        ]
    },

    // ── SHAMAN ──────────────────────────────────────────────────────────────
    "Shaman-Enhancement": {
        casts: [
            { ids: [17364], name: "Stormstrike",          icon: "ability_shaman_stormstrike" },
            { ids: [25454, 10414, 10413, 10412, 8046, 8045, 8044], name: "Earth Shock",          icon: "spell_nature_earthshock", trackAllCasts: true },
            { ids: [25464, 10473, 10472, 8058, 8056], name: "Frost Shock",          icon: "spell_frost_frostshock" },
            { ids: [25457, 10448, 10447, 8053, 8052, 8050], name: "Flame Shock",          icon: "spell_fire_flameshock" },
            { ids: [8498, 8499, 11314, 11315, 25546, 25547], name: "Fire Nova Totem", icon: "spell_fire_sealoffire" },
            { ids: [25449, 25448, 10392, 10391], name: "Lightning Bolt",       icon: "spell_nature_lightning" },
            { ids: [30823], name: "Shamanistic Rage",     icon: "spell_nature_shamanrage" },
            { ids: [25587], topIds: [25587], name: "Windfury Totem",         icon: "spell_nature_windfury" },
            { ids: [8512],  name: "Windfury Totem (Rank 1)", icon: "spell_nature_windfury" },
            { ids: [25359], name: "Grace of Air Totem",   icon: "spell_nature_invisibilitytotem" },
            { ids: [25574], name: "Nature Resistance Totem", icon: "spell_nature_natureresistancetotem" },
            { ids: [25528], name: "Strength of Earth Totem",   icon: "spell_nature_earthbindtotem" },
            { ids: [3738],  name: "Wrath of Air Totem",     icon: "spell_nature_slowingtotem" },
        ],
        debuffs: [
            { ids: [25464, 10473, 10472, 8058, 8056], name: "Frost Shock", icon: "spell_frost_frostshock", color: "#3498db", hideFromOverall: true },
            { ids: [25457, 10448, 10447, 8053, 8052, 8050], name: "Flame Shock", icon: "spell_fire_flameshock", color: "#e74c3c", hideFromOverall: true },
            { ids: [25454, 10414, 10413, 10412, 8046, 8045, 8044], name: "Earth Shock", icon: "spell_nature_earthshock", color: "#8e44ad", isCastPoint: true },
            { ids: [25587, 8512], name: "Windfury Totem",         icon: "spell_nature_windfury",       color: "#3498db", alwaysOnTop: true, sortOrder: 0, group: "air-totem" },
            { ids: [25359], name: "Grace of Air Totem",  icon: "spell_nature_invisibilitytotem",color: "#2ecc71", alwaysOnTop: true, sortOrder: 2, group: "air-totem" },
            { ids: [25574], name: "Nature Resistance Totem", icon: "spell_nature_natureresistancetotem", color: "#27ae60", alwaysOnTop: true, sortOrder: 2.5, group: "air-totem" },
            { ids: [3738],  name: "Wrath of Air Totem",     icon: "spell_nature_slowingtotem",  color: "#9b59b6", alwaysOnTop: true, sortOrder: 3, group: "air-totem" },
            { ids: [25528], name: "Strength of Earth Totem",  icon: "spell_nature_earthbindtotem",color: "#e67e22", alwaysOnTop: true, sortOrder: 4, group: "earth-totem" },
        ]
    },
    "Shaman-Elemental": {
        casts: [
            { ids: [25449, 25448, 10392, 10391], name: "Lightning Bolt",       icon: "spell_nature_lightning" },
            { ids: [25442], name: "Chain Lightning",      icon: "spell_nature_chainlightning" },
            { ids: [25454, 10414, 10413, 10412], name: "Earth Shock",          icon: "spell_nature_earthshock", trackAllCasts: true },
            { ids: [25464, 10473, 10472, 8058, 8056], name: "Frost Shock",          icon: "spell_frost_frostshock" },
            { ids: [25457, 10448, 10447, 8053, 8052, 8050], name: "Flame Shock",          icon: "spell_fire_flameshock" },
            { ids: [25547], name: "Fire Nova Totem",      icon: "spell_fire_sealoffire" },
            { ids: [16166], name: "Elemental Mastery",    icon: "spell_nature_wispheal" },
            { ids: [30706], name: "Totem of Wrath",       icon: "spell_fire_totemofwrath" },
            { ids: [25587], topIds: [25587], name: "Windfury Totem",         icon: "spell_nature_windfury" },
            { ids: [8512],  name: "Windfury Totem (Rank 1)", icon: "spell_nature_windfury" },
            { ids: [25359], name: "Grace of Air Totem",   icon: "spell_nature_invisibilitytotem" },
            { ids: [25574], name: "Nature Resistance Totem", icon: "spell_nature_natureresistancetotem" },
            { ids: [25528], name: "Strength of Earth Totem",   icon: "spell_nature_earthbindtotem" },
            { ids: [3738],  name: "Wrath of Air Totem",     icon: "spell_nature_slowingtotem" },
        ],
        debuffs: [
            { ids: [25464, 10473, 10472, 8058, 8056], name: "Frost Shock", icon: "spell_frost_frostshock", color: "#3498db", hideFromOverall: true },
            { ids: [25457, 10448, 10447, 8053, 8052, 8050], name: "Flame Shock", icon: "spell_fire_flameshock", color: "#e74c3c", hideFromOverall: true },
            { ids: [25454, 10414, 10413, 10412], name: "Earth Shock", icon: "spell_nature_earthshock", color: "#8e44ad", isCastPoint: true },
            { ids: [30706], name: "Totem of Wrath", icon: "spell_fire_totemofwrath", color: "#e67e22", alwaysOnTop: true, sortOrder: 0 },
            { ids: [25587, 8512], name: "Windfury Totem",         icon: "spell_nature_windfury",       color: "#3498db", alwaysOnTop: true, sortOrder: 1, group: "air-totem" },
            { ids: [25359], name: "Grace of Air Totem",  icon: "spell_nature_invisibilitytotem",color: "#2ecc71", alwaysOnTop: true, sortOrder: 2, group: "air-totem" },
            { ids: [25574], name: "Nature Resistance Totem", icon: "spell_nature_natureresistancetotem", color: "#27ae60", alwaysOnTop: true, sortOrder: 2.5, group: "air-totem" },
            { ids: [3738],  name: "Wrath of Air Totem",     icon: "spell_nature_slowingtotem",  color: "#9b59b6", alwaysOnTop: true, sortOrder: 3, group: "air-totem" },
            { ids: [25528], name: "Strength of Earth Totem",  icon: "spell_nature_earthbindtotem",color: "#e67e22", alwaysOnTop: true, sortOrder: 4, group: "earth-totem" },
        ]
    },
    "Shaman-Restoration": {
        casts: [
            { ids: [25423, 25422, 10605, 10604, 1064], name: "Chain Heal",           icon: "spell_nature_healingwavegreater", maxRank: 5 },
            { ids: [25391, 10468, 10467, 8010, 8008, 8004], name: "Lesser Healing Wave",  icon: "spell_nature_healingwavelesser", maxRank: 6 },
            { ids: [25396, 25395, 10466, 10465, 10464, 10463, 10462, 10461, 10460, 10459, 10458, 331], name: "Healing Wave", icon: "spell_nature_magicimmunity", maxRank: 12 },
            { ids: [32594, 32593, 33201], name: "Earth Shield",         icon: "spell_nature_skinofearth", maxRank: 3 },
            { ids: [16190], name: "Mana Tide Totem",      icon: "spell_frost_summonwaterelemental" },
            { ids: [25587], topIds: [25587], name: "Windfury Totem",         icon: "spell_nature_windfury" },
            { ids: [8512],  name: "Windfury Totem (Rank 1)", icon: "spell_nature_windfury" },
            { ids: [25359], name: "Grace of Air Totem",   icon: "spell_nature_invisibilitytotem" },
            { ids: [25574], name: "Nature Resistance Totem", icon: "spell_nature_natureresistancetotem" },
            { ids: [25528], name: "Strength of Earth Totem",   icon: "spell_nature_earthbindtotem" },
            { ids: [3738],  name: "Wrath of Air Totem",     icon: "spell_nature_slowingtotem" },
        ],
        debuffs: [
            { ids: [32594, 32593, 33201], name: "Earth Shield", icon: "spell_nature_skinofearth", color: "#f1c40f" },
            { ids: [25587, 8512], name: "Windfury Totem",         icon: "spell_nature_windfury",       color: "#3498db", alwaysOnTop: true, sortOrder: 1, group: "air-totem" },
            { ids: [25359], name: "Grace of Air Totem",  icon: "spell_nature_invisibilitytotem",color: "#2ecc71", alwaysOnTop: true, sortOrder: 2, group: "air-totem" },
            { ids: [25574], name: "Nature Resistance Totem", icon: "spell_nature_natureresistancetotem", color: "#27ae60", alwaysOnTop: true, sortOrder: 2.5, group: "air-totem" },
            { ids: [3738],  name: "Wrath of Air Totem",     icon: "spell_nature_slowingtotem",  color: "#9b59b6", alwaysOnTop: true, sortOrder: 3, group: "air-totem" },
            { ids: [25528], name: "Strength of Earth Totem",  icon: "spell_nature_earthbindtotem",color: "#e67e22", alwaysOnTop: true, sortOrder: 4, group: "earth-totem" },
        ]
    },

    // ── MAGE ────────────────────────────────────────────────────────────────
    "Mage-Frost": {
        casts: [
            { ids: [27072], name: "Frostbolt",            icon: "spell_frost_frostbolt02" },
            { ids: [27131], name: "Ice Lance",            icon: "spell_frost_frostbolttroll01" },
            { ids: [27087], name: "Cone of Cold",         icon: "spell_frost_glacier" },
            { ids: [27082], name: "Arcane Explosion",     icon: "spell_nature_wispsplode" },
            { ids: [12472], name: "Icy Veins",            icon: "spell_frost_coldhearted" },
            { ids: [11958], name: "Cold Snap",            icon: "spell_frost_wizardmark" },
        ],
        debuffs: []
    },
    "Mage-Fire": {
        casts: [
            { ids: [27070], name: "Fireball",             icon: "spell_fire_fireball02" },
            { ids: [27079], name: "Fire Blast",           icon: "spell_fire_fireball" },
            { ids: [27074], name: "Scorch",               icon: "spell_fire_soulburn" },
            { ids: [33938], name: "Pyroblast",            icon: "spell_fire_fireball01" },
            { ids: [27087], name: "Cone of Cold",         icon: "spell_frost_glacier" },
            { ids: [27082], name: "Arcane Explosion",     icon: "spell_nature_wispsplode" },
            { ids: [12042], name: "Arcane Power",         icon: "spell_nature_lightning" },
        ],
        debuffs: []
    },
    "Mage-Arcane": {
        casts: [
            { ids: [30451], name: "Arcane Blast",         icon: "spell_arcane_blast" },
            { ids: [25345], name: "Arcane Missiles",      icon: "spell_nature_starfall" },
            { ids: [27070], name: "Fireball",             icon: "spell_fire_fireball02" },
            { ids: [27087], name: "Cone of Cold",         icon: "spell_frost_glacier" },
            { ids: [27082], name: "Arcane Explosion",     icon: "spell_nature_wispsplode" },
            { ids: [12042], name: "Arcane Power",         icon: "spell_nature_lightning" },
            { ids: [12472], name: "Icy Veins",            icon: "spell_frost_coldhearted" },
        ],
        debuffs: []
    },

    // ── ROGUE ───────────────────────────────────────────────────────────────
    "Rogue-Combat": {
        casts: [
            { ids: [26862], name: "Sinister Strike",      icon: "spell_shadow_ritualofsacrifice" },
            { ids: [26865], name: "Eviscerate",           icon: "ability_rogue_eviscerate" },
            { ids: [26867], name: "Rupture",              icon: "ability_rogue_rupture" },
            { ids: [26866], name: "Expose Armor",         icon: "ability_warrior_riposte" },
            { ids: [6774],  name: "Slice and Dice",       icon: "ability_rogue_slicedice" },
        ],
        debuffs: [
            { ids: [26867], name: "Rupture",              icon: "ability_rogue_rupture",          color: "#e74c3c" },
            { ids: [14169, 26866], name: "Expose Armor",  icon: "ability_warrior_riposte",        color: "#95a5a6" },
        ]
    },
    "Rogue-Assassination": {
        casts: [
            { ids: [26863], name: "Backstab",             icon: "ability_backstab" },
            { ids: [26865], name: "Eviscerate",           icon: "ability_rogue_eviscerate" },
            { ids: [26867], name: "Rupture",              icon: "ability_rogue_rupture" },
            { ids: [6774],  name: "Slice and Dice",       icon: "ability_rogue_slicedice" },
        ],
        debuffs: [
            { ids: [26867], name: "Rupture",              icon: "ability_rogue_rupture",          color: "#e74c3c" },
            { ids: [14169, 26866], name: "Expose Armor",  icon: "ability_warrior_riposte",        color: "#95a5a6" },
        ]
    },
    "Rogue-Subtlety": {
        casts: [
            { ids: [26863], name: "Backstab",             icon: "ability_backstab" },
            { ids: [26864], name: "Hemorrhage",           icon: "spell_shadow_lifedrain" },
            { ids: [26865], name: "Eviscerate",           icon: "ability_rogue_eviscerate" },
            { ids: [6774],  name: "Slice and Dice",       icon: "ability_rogue_slicedice" },
        ],
        debuffs: [
            { ids: [26867], name: "Rupture",              icon: "ability_rogue_rupture",          color: "#e74c3c" },
            { ids: [14169, 26866], name: "Expose Armor",  icon: "ability_warrior_riposte",        color: "#95a5a6" },
        ]
    },

    // ── WARRIOR ─────────────────────────────────────────────────────────────
    "Warrior-Fury": {
        casts: [
            { ids: [25231, 20569, 11609, 11608, 845], name: "Cleave",             icon: "ability_warrior_cleave", trackOnDamage: true },
            { ids: [29707, 30324, 25286, 11567, 11566, 11565], name: "Heroic Strike",    icon: "ability_rogue_ambush", trackOnDamage: true },
            { ids: [25236], name: "Execute",              icon: "inv_sword_48" },
            { ids: [25225, 11597, 11596, 7405, 7386], name: "Sunder Armor", icon: "ability_warrior_sunder" },
            { ids: [20243], name: "Devastate", icon: "inv_sword_11" },
        ],
        debuffs: [
            { ids: [2048, 6673, 5242, 6192, 11549, 11550, 11551, 25289], name: "Battle Shout", icon: "ability_warrior_battleshout", color: "#C79C6E" },
            { ids: [25203, 11556, 11555, 11554], name: "Demoralizing Shout", icon: "ability_warrior_warcry", color: "#e74c3c" },
            { ids: [25225, 11597, 11596, 7405, 7386], name: "Sunder Armor", icon: "ability_warrior_sunder", color: "#7f8c8d" },
        ]
    },
    "Warrior-Arms": {
        casts: [
            { ids: [25231, 20569, 11609, 11608, 845], name: "Cleave",             icon: "ability_warrior_cleave", trackOnDamage: true },
            { ids: [29707, 30324, 25286, 11567, 11566, 11565], name: "Heroic Strike",    icon: "ability_rogue_ambush", trackOnDamage: true },
            { ids: [25236], name: "Execute",              icon: "inv_sword_48" },
            { ids: [25241], name: "Slam",                 icon: "ability_warrior_decisivestrike" },
            { ids: [25225, 11597, 11596, 7405, 7386], name: "Sunder Armor", icon: "ability_warrior_sunder" },
            { ids: [20243], name: "Devastate", icon: "inv_sword_11" },
        ],
        debuffs: [
            { ids: [2048, 6673, 5242, 6192, 11549, 11550, 11551, 25289], name: "Battle Shout", icon: "ability_warrior_battleshout", color: "#C79C6E" },
            { ids: [29859], name: "Blood Frenzy",         icon: "ability_warrior_bloodfrenzy", color: "#c0392b" },
            { ids: [25203, 11556, 11555, 11554], name: "Demoralizing Shout", icon: "ability_warrior_warcry", color: "#e74c3c" },
            { ids: [25225, 11597, 11596, 7405, 7386], name: "Sunder Armor", icon: "ability_warrior_sunder", color: "#7f8c8d" },
        ]
    },
    "Warrior-Protection": {
        casts: [
            { ids: [23922], name: "Shield Slam",          icon: "ability_warrior_shieldslam" },
            { ids: [25258], name: "Revenge",              icon: "ability_warrior_revenge" },
            { ids: [25231, 20569, 11609, 11608, 845], name: "Cleave",             icon: "ability_warrior_cleave", trackOnDamage: true },
            { ids: [30324, 25286, 11567, 11566, 11565], name: "Heroic Strike",    icon: "ability_rogue_ambush", trackOnDamage: true },
            { ids: [25225, 11597, 11596, 7405, 7386], name: "Sunder Armor", icon: "ability_warrior_sunder" },
            { ids: [20243], name: "Devastate", icon: "inv_sword_11" },
        ],
        debuffs: [
            { ids: [2048, 6673, 5242, 6192, 11549, 11550, 11551, 25289], name: "Battle Shout", icon: "ability_warrior_battleshout", color: "#C79C6E" },
            { ids: [25203, 11556, 11555, 11554], name: "Demoralizing Shout", icon: "ability_warrior_warcry", color: "#e74c3c" },
            { ids: [25225, 11597, 11596, 7405, 7386], name: "Sunder Armor", icon: "ability_warrior_sunder", color: "#7f8c8d" },
        ]
    },

    // ── PRIEST ──────────────────────────────────────────────────────────────
    "Priest-Shadow": {
        casts: [
            { ids: [25368], name: "Shadow Word: Pain",    icon: "spell_shadow_shadowwordpain" },
            { ids: [25387], name: "Mind Flay",            icon: "spell_shadow_siphonmana" },
            { ids: [34914, 34916, 34917], topIds: [34917], name: "Vampiric Touch", icon: "spell_holy_stoicism" },
            { ids: [34433], name: "Shadowfiend",          icon: "spell_shadow_shadowfiend" },
            { ids: [32996], name: "Shadow Word: Death",   icon: "spell_shadow_demonicfortitude" },
        ],
        debuffs: [
            { ids: [25368], name: "Shadow Word: Pain",    icon: "spell_shadow_shadowwordpain",   color: "#9b59b6" },
            { ids: [34914, 34916, 34917], name: "Vampiric Touch", icon: "spell_holy_stoicism",   color: "#8e44ad" },
        ]
    },
    "Priest-Holy": {
        casts: [
            { ids: [25235, 25233, 10917, 10916, 10915, 9474, 9473, 9472, 9471], name: "Flash Heal", icon: "spell_holy_flashheal", maxRank: 9 },
            { ids: [25213, 25210, 22009, 10965, 10964, 10963, 2060], name: "Greater Heal", icon: "spell_holy_greaterheal", maxRank: 7 },
            { ids: [25316, 25314, 10961, 10960, 10960], name: "Prayer of Healing", icon: "spell_holy_prayerofhealing02", maxRank: 6 },
            { ids: [25218, 25217, 10901], name: "Power Word: Shield", icon: "spell_holy_powerwordshield" },
            { ids: [33076], name: "Prayer of Mending",    icon: "spell_holy_prayerofmendingtbc" },
            { ids: [34861, 34863, 34864, 34865, 34866], name: "Circle of Healing", icon: "spell_holy_circleofrenewal" },
            { ids: [25222, 25221, 25220, 25219, 10928, 10927, 10926, 10925, 9049, 9048, 9047, 774], name: "Renew", icon: "spell_holy_renew", maxRank: 12 },
            { ids: [29429, 25429], name: "Fade",                    icon: "spell_magic_lesserinvisibilty" },
        ],
        debuffs: []
    },
    "Priest-Discipline": {
        casts: [
            { ids: [25235, 25233, 10917, 10916, 10915, 9474, 9473, 9472, 9471], name: "Flash Heal", icon: "spell_holy_flashheal", maxRank: 9 },
            { ids: [25213, 25210, 22009, 10965, 10964, 10963, 2060], name: "Greater Heal", icon: "spell_holy_greaterheal", maxRank: 7 },
            { ids: [25218, 25217, 10901], name: "Power Word: Shield", icon: "spell_holy_powerwordshield" },
            { ids: [33076], name: "Prayer of Mending",    icon: "spell_holy_prayerofmendingtbc" },
            { ids: [29429, 25429], name: "Fade",                    icon: "spell_magic_lesserinvisibilty" },
        ],
        debuffs: []
    },

    // ── HUNTER ──────────────────────────────────────────────────────────────
    "Hunter-BeastMastery": {
        casts: [
            { ids: [75], name: "Auto Shot",             icon: "ability_whirlwind" },
            { ids: [34120], name: "Steady Shot",          icon: "ability_hunter_steadyshot" },
            { ids: [27019], name: "Arcane Shot",          icon: "ability_impalingbolt" },
            { ids: [27021], name: "Multi-Shot",           icon: "ability_upgrademoonglaive" },
            { ids: [27016], name: "Serpent Sting",        icon: "ability_hunter_quickshot" },
            { ids: [19574], name: "Bestial Wrath",        icon: "ability_druid_ferociousbite" },
        ],
        debuffs: [
            { ids: [27016], name: "Serpent Sting",        icon: "ability_hunter_quickshot", color: "#27ae60" },
            { ids: [14325, 19425], name: "Hunter's Mark", icon: "ability_hunter_snipershot", color: "#c0392b" },
        ]
    },
    "Hunter-Marksmanship": {
        casts: [
            { ids: [75], name: "Auto Shot",             icon: "ability_whirlwind" },
            { ids: [34120], name: "Steady Shot",          icon: "ability_hunter_steadyshot" },
            { ids: [27019], name: "Arcane Shot",          icon: "ability_impalingbolt" },
            { ids: [27065], name: "Aimed Shot",           icon: "ability_hunter_focusedaim" },
            { ids: [27021], name: "Multi-Shot",           icon: "ability_upgrademoonglaive" },
            { ids: [27016], name: "Serpent Sting",        icon: "ability_hunter_quickshot" },
        ],
        debuffs: [
            { ids: [27016], name: "Serpent Sting",        icon: "ability_hunter_quickshot", color: "#27ae60" },
            { ids: [14325, 19425], name: "Hunter's Mark", icon: "ability_hunter_snipershot", color: "#c0392b" },
        ]
    },
    "Hunter-Survival": {
        casts: [
            { ids: [75], name: "Auto Shot",             icon: "ability_whirlwind" },
            { ids: [34120], name: "Steady Shot",          icon: "ability_hunter_steadyshot" },
            { ids: [27019], name: "Arcane Shot",          icon: "ability_impalingbolt" },
            { ids: [27016], name: "Serpent Sting",        icon: "ability_hunter_quickshot" },
            { ids: [27021], name: "Multi-Shot",           icon: "ability_upgrademoonglaive" },
        ],
        debuffs: [
            { ids: [27016], name: "Serpent Sting",        icon: "ability_hunter_quickshot", color: "#27ae60" },
            { ids: [14325, 19425], name: "Hunter's Mark", icon: "ability_hunter_snipershot", color: "#c0392b" },
        ]
    },

    // ── PALADIN ─────────────────────────────────────────────────────────────
    "Paladin-Retribution": {
        casts: [
            { ids: [35395], name: "Crusader Strike",      icon: "spell_holy_crusaderstrike" },
            { ids: [27138], name: "Exorcism",             icon: "spell_holy_excorcism_02" },
            { ids: [27154], name: "Lay on Hands",         icon: "spell_holy_layonhands" },
            { ids: [10308], name: "Hammer of Justice",    icon: "spell_holy_sealofmight" },
        ],
        debuffs: []
    },
    "Paladin-Holy": {
        casts: [
            { ids: [27137, 27136, 19943, 19942, 19941, 19940, 19939], name: "Flash of Light", icon: "spell_holy_flashheal", maxRank: 7 },
            { ids: [27136, 27135, 25292, 10456, 10455, 3472, 3471], name: "Holy Light",       icon: "spell_holy_holybolt", maxRank: 11 },
            { ids: [27174], name: "Holy Shock",           icon: "spell_holy_searinglight" },
            { ids: [27154], name: "Lay on Hands",         icon: "spell_holy_layonhands" },
            { ids: [31842], name: "Divine Illumination",  icon: "spell_holy_divineillumination" },
        ],
        debuffs: []
    },
    "Paladin-Protection": {
        casts: [
            { ids: [27174], name: "Holy Shock",           icon: "spell_holy_searinglight" },
            { ids: [27138], name: "Exorcism",             icon: "spell_holy_excorcism_02" },
            { ids: [10308], name: "Hammer of Justice",    icon: "spell_holy_sealofmight" },
        ],
        debuffs: []
    },

    // ── DRUID ───────────────────────────────────────────────────────────────
    "Druid-Feral": {
        casts: [
            { ids: [33987, 33986], name: "Mangle (Bear)",         icon: "ability_druid_mangle2" },
            { ids: [33983, 33982], name: "Mangle (Cat)",          icon: "ability_druid_mangle2" },
            { ids: [27002], name: "Shred",                icon: "spell_shadow_vampiricaura" },
            { ids: [24248], name: "Ferocious Bite",       icon: "ability_druid_ferociousbite" },
            { ids: [27008], name: "Rip",                  icon: "ability_ghoulfrenzy" },
            { ids: [26996], name: "Maul",                 icon: "ability_druid_maul" },
            { ids: [26997], name: "Swipe",                icon: "inv_misc_monsterclaw_03" },
            { ids: [33745], name: "Lacerate",             icon: "ability_druid_lacerate" },
            { ids: [26998, 9898], name: "Demoralizing Roar", icon: "ability_druid_demoralizingroar" },
            { ids: [27000], name: "Claw",                 icon: "ability_druid_rake" },
        ],
        debuffs: [
            { ids: [33987, 33986, 33983, 33982], name: "Mangle",  icon: "ability_druid_mangle2", color: "#e67e22" },
            { ids: [33745], name: "Lacerate",             icon: "ability_druid_lacerate", color: "#c0392b" },
            { ids: [26998, 9898], name: "Demoralizing Roar", icon: "ability_druid_demoralizingroar", color: "#f39c12" },
            { ids: [27008], name: "Rip",                  icon: "ability_ghoulfrenzy",      color: "#e74c3c" },
            { ids: [26993], name: "Faerie Fire",          icon: "spell_nature_faeriefire",  color: "#2ecc71" },
            { ids: [27011], name: "Faerie Fire (Feral)",  icon: "spell_nature_faeriefire",  color: "#27ae60" },
        ]
    },
    "Druid-Balance": {
        casts: [
            { ids: [25298], name: "Starfire",             icon: "spell_arcane_starfire" },
            { ids: [26985, 26984], name: "Wrath",                icon: "spell_nature_wrathv2" },
            { ids: [26988], name: "Moonfire",             icon: "spell_nature_starfall" },
            { ids: [27013], name: "Insect Swarm",         icon: "spell_nature_insectswarm" },
            { ids: [33831], name: "Force of Nature",      icon: "ability_druid_forceofnature" },
        ],
        debuffs: [
            { ids: [26988], name: "Moonfire",             icon: "spell_nature_starfall",    color: "#3498db" },
            { ids: [27013], name: "Insect Swarm",         icon: "spell_nature_insectswarm", color: "#8e44ad" },
            { ids: [26993], name: "Faerie Fire",          icon: "spell_nature_faeriefire",  color: "#2ecc71" },
        ]
    },
    "Druid-Restoration": {
        casts: [
            { ids: [26978, 26979, 25297, 9889, 9888, 8903, 5188, 5187], name: "Healing Touch", icon: "spell_nature_healingtouch", maxRank: 13 },
            { ids: [26981, 26982, 25299, 9841, 9840, 8910, 774], name: "Rejuvenation", icon: "spell_nature_rejuvenation", maxRank: 13 },
            { ids: [26980, 26982], name: "Regrowth",             icon: "spell_nature_resistnature", maxRank: 10 },
            { ids: [33763], name: "Lifebloom",            icon: "inv_misc_herb_felblossom" },
            { ids: [18562], name: "Swiftmend",            icon: "inv_relics_idolofrejuvenation" },
            { ids: [27013], name: "Insect Swarm",         icon: "spell_nature_insectswarm" },
        ],
        debuffs: [
            { ids: [27013], name: "Insect Swarm",         icon: "spell_nature_insectswarm", color: "#8e44ad" },
        ]
    },
}

const SPEC_ROLES = {
    "Warrior": "Melee DPS",
    "Warrior-Arms": "Melee DPS",
    "Warrior-Fury": "Melee DPS",
    "Warrior-Protection": "Tank",
    "Paladin": "Healer",
    "Paladin-Holy": "Healer",
    "Paladin-Protection": "Tank",
    "Paladin-Retribution": "Melee DPS",
    "Hunter": "Ranged DPS",
    "Hunter-BeastMastery": "Ranged DPS",
    "Hunter-Marksmanship": "Ranged DPS",
    "Hunter-Survival": "Ranged DPS",
    "Rogue": "Melee DPS",
    "Rogue-Combat": "Melee DPS",
    "Rogue-Assassination": "Melee DPS",
    "Rogue-Subtlety": "Melee DPS",
    "Priest": "Healer",
    "Priest-Holy": "Healer",
    "Priest-Discipline": "Healer",
    "Priest-Shadow": "Ranged DPS",
    "Shaman": "Healer",
    "Shaman-Elemental": "Ranged DPS",
    "Shaman-Enhancement": "Melee DPS",
    "Shaman-Restoration": "Healer",
    "Mage": "Ranged DPS",
    "Mage-Arcane": "Ranged DPS",
    "Mage-Fire": "Ranged DPS",
    "Mage-Frost": "Ranged DPS",
    "Warlock": "Ranged DPS",
    "Warlock-Affliction": "Ranged DPS",
    "Warlock-Demonology": "Ranged DPS",
    "Warlock-Destruction": "Ranged DPS",
    "Druid": "Healer",
    "Druid-Balance": "Ranged DPS",
    "Druid-Feral": "Melee DPS", // Kept as Melee DPS, could also be Tank
    "Druid-Restoration": "Healer"
};

if (typeof window !== 'undefined') {
    window.CLASSES = CLASSES;
    window.SPEC_ICONS = SPEC_ICONS;
    window.SPEC_ROLES = SPEC_ROLES;
    window.BUFF_DB = BUFF_DB;
    window.ENCHANT_DB = ENCHANT_DB;
    window.SPELL_DB = SPELL_DB;
    window.TIMELINE_SPELLS = TIMELINE_SPELLS;
    window.OPTIMAL_ENCHANTS = OPTIMAL_ENCHANTS;
    window.CLASS_ABILITY_TRACKING = CLASS_ABILITY_TRACKING;

    window.isBuffItem = (name) => {
        if (!name) return false;
        const lower = name.toLowerCase();
        return lower.includes('flask') || lower.includes('elixir') || lower.includes('roasted') || lower.includes('burger') || lower.includes('food') || lower.includes('soup') || lower.includes('steak') || lower.includes('delight') || lower.includes('fish') || lower.includes('crunchy') || lower.includes('scroll of') || lower.includes('rum') || lower.includes('kibler') || lower.includes('stew') || lower.includes('basilisk') || lower.includes('sausage') || lower.includes('sporeling') || lower.includes('mudder') || lower.includes('talbuk') || lower.includes('spicy') || lower.includes('crawdad');
    };

    window.isTrinket = (name) => {
        if (!name) return false;
        const lower = name.toLowerCase();
        return lower.includes('brooch') || lower.includes('badge') || lower.includes('pendant') || lower.includes('talisman') || lower.includes('hex shrunken head') || lower.includes('skull of') || lower.includes('icon of') || lower.includes('earring') || lower.includes('ashtongue') || lower.includes('tome of') || lower.includes('vial of') || lower.includes('bangle') || lower.includes('pipe') || lower.includes("mender's") || lower.includes('scarab') || lower.includes('abacus') || lower.includes('figurine') || lower.includes('essence') || lower.includes('eye of') || lower.includes('stone of') || lower.includes('ribbon') || lower.includes('compass') || lower.includes('book of') || lower.includes('charm');
    };

    window.getSpellSortCategory = (name, id) => {
        if (window.isTrinket(name)) return 0; // Trinkets absolute first

        const lower = name.toLowerCase();
        if (lower.includes('heroism') || lower.includes('bloodlust')) return 1;

        if (window.SPELL_DB && window.SPELL_DB[id] && window.SPELL_DB[id].category === 1) {
            return 2; // Major CDs / Big abilities
        }

        // Group by spec/type
        if (lower.includes('totem') || lower.includes('blessing') || lower.includes('aura') || lower.includes('aspect') || lower.includes('armor') || lower.includes('ward') || lower.includes('shout') || lower.includes('stance') || lower.includes('presence') || lower.includes('seal') || lower.includes('judgement')) return 3; // Utility / General Class

        if (lower.includes('heal') || lower.includes('cure') || lower.includes('renew') || lower.includes('rejuvenation') || lower.includes('regrowth') || lower.includes('lifebloom') || lower.includes('flash of light') || lower.includes('holy light') || lower.includes('prayer') || lower.includes('mend') || lower.includes('shield') || lower.includes('resurrect') || lower.includes('rebirth')) return 4; // Healers

        if (lower.includes('taunt') || lower.includes('sunder') || lower.includes('block') || lower.includes('defense') || lower.includes('swipe') || lower.includes('growl') || lower.includes('righteous fury')) return 5; // Tanks

        if (lower.includes('strike') || lower.includes('eviscerate') || lower.includes('bite') || lower.includes('cleave') || lower.includes('rend') || lower.includes('execute') || lower.includes('backstab') || lower.includes('ambush') || lower.includes('garrote')) return 6; // Melee DPS

        if (lower.includes('bolt') || lower.includes('shock') || lower.includes('fire') || lower.includes('frost') || lower.includes('shadow') || lower.includes('arcane') || lower.includes('smite') || lower.includes('wrath') || lower.includes('starfire') || lower.includes('shot') || lower.includes('sting')) return 7; // Ranged/Caster DPS

        return 8; // Others
    };
}
