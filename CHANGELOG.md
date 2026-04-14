# Changelog

All notable changes to TBC Duck Analyzer are documented here.

## [1.2.0] - 2026-04-14

### ✨ Full-Stack Migration & Architecture
- **Node.js Integration** - Migrated to a Node.js express backend environment (`server.js`) replacing pure static configuration logic.
- **Local Proxy for Assets** - Server now intelligently intercepts, caches, and serves Wowhead icons via `/api/icon/` endpoints to radically reduce load times and bandwidth.
- **SQLite Database Integration** - Integrated `logs_cache` system directly into backend for persistent querying.
- **Docker Support** - Packaged backend application using `Dockerfile` and `docker-compose.yml` for unified, consistent local testing and cloud environment rollouts.

### 🐛 Gear Inspector & Logic Fixes
- **Strict Enchant Validation Matrix** - Re-engineered enchantment tracking matrix. Prevents false-negative warnings on Neck, Shirt, Waist, Rings, Trinkets, and Ranged.
- **Enchant Priority Logic** - "❌ Slacking" warning now accurately respects the precedence of permanent enchants over temporary enchantments like oils or stones.
- **Off-hand Weapon Validation** - Reworked rules conditionally targeting item sub-types. Enchants strictly validated only when dealing with genuine shields or standard weapons.
- **UI Grid Perfection** - Addressed flexbox margin desyncs linking paperdoll spacing cleanly with armor container titles.
- **Console Debugs** - Silent debugging logs injected directly within iteration loop mapping exact equipment metadata visually.

---

## [1.1.0] - 2026-04-06

### ✨ UI & Gear Inspector Redesign
- **Complete Gear Inspector Overhaul** - Expanded layout with a clean 2-column grid.
- **TBC Enchantment Details** - Automatic mapping of TBC Enchant IDs to readable names + localized stats.
- **Weapon Enchant Grouping** - Permanent enchants strictly excluded from consumables tracker.
- **Optimized Tooltips** - Deferred Wowhead tooltip loading (0 lag spike on inspect), strict CSS clipping, and prevented accidental hover on text.
- **Refined Paperdoll** - Responsive 2D stickman SVG mathematically bound to exact slot coordinates.
- **Hotkeys** - Added `Escape` key listener to seamlessly close all active overlays/modals.

---

## [1.0.0] - 2026-04-05 - Official Release

### ✨ Features
- **Log Analysis** - Analyze World of Warcraft TBC combat logs from Warcraft Logs
- **Consumables Tracking** - Track potions, sappers, food buffs, and weapon enchants per player
- **Interrupt Detection** - Automatically detect interrupt abilities used in combat
- **Racial Abilities** - Track racial ability usage (Arcane Torrent, Stoneform, War Stomp, etc.)
- **Auto Spec Detection** - Automatically identify player specialization
- **Discord Integration** - Export analysis results to Discord (optional)
- **Local Storage** - Securely store API keys in your browser (never sent to servers)
- **Interactive UI** - Dark theme with modern, responsive design

### 🎯 Supported Abilities
- Interrupt abilities for Rogue, Warrior, Mage, and Shaman
- Racial abilities for all playable races
- 26+ consumable types tracked and counted

### 🐛 Known Limitations
- Warcraft Logs may not always provide specific specialization (shows class only)
- Some consumables may have limited icon availability
- Discord export requires a valid webhook URL

---

## [0.9.0] - 2026-04-01 - Beta

### ✨ Initial Features
- Basic log analysis
- Spec detection (first version)
- Consumable tracking (beta)

---

## Planned Improvements (v1.1+)

- [ ] Equipment scanner
- [ ] Suggest optimal consumables
- [ ] Cache analyzed logs
- [ ] More detailed analytics

---

**For feedback or bug reports, use the 📝 Feedback button in the app or [open an issue on GitHub](https://github.com/patitokun03-spec/TBC-Duck-Analyzer/issues)**

### Phase 2: Analysis (v1.2)
- [ ] Encounter statistics
- [ ] Player comparisons
- [ ] Consumables ranking
- [ ] Export to CSV/JSON

### Phase 3: Community (v1.3)
- [ ] Comment system
- [ ] Share analysis
- [ ] Discord bot integration
- [ ] Public logs database

---

## Versioning Format

This project follows [Semantic Versioning](https://semver.org/)

- **MAJOR** - Incompatible changes (new API, structure)
- **MINOR** - New features (backwards compatible)
- **PATCH** - Bugs and fixes

---

## Reporting Issues

If you find bugs or have suggestions:
1. Open a [GitHub Issue](https://github.com/patitokun03-spec/TBC-Duck-Analyzer/issues)
2. Or use the **📝 Feedback** button on the website

Please include:
- What version you are using
- What you expected to happen
- What actually happened
- Steps to reproduce
