# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2026-04-05 - OFFICIAL RELEASE

### ✨ New Features
- WarcraftLogs log analysis system
- Consumables tracking (potions, sappers, sharpening stones)
- Automatic buff and weapon enchant detection
- Auto specialization panel
- Discord Webhooks support

### 🎯 Interrupt Abilities Added
- **Rogue**: Kick (38768)
- **Warrior**: Pummel (6554), Shield Bash (29704)
- **Mage**: Counterspell (2139)
- **Shaman**: Earth Shock (25454)

Only displayed when they actually interrupt a cast.

### 🏁 Racial Abilities Added
- **Blood Elf**: Arcane Torrent (28730)
- **Undead**: Will of the Forsaken (7744)
- **Dwarf**: Stoneform (20594)
- **Tauren**: War Stomp (20549)

### 📁 Infrastructure Improvements
- Reorganized folder structure (css/, js/, assets/, docs/)
- Integrated feedback system (GitHub Issues)
- Initial tutorial for new users
- Complete documentation

### 🔧 Technical Changes
- 145+ icons downloaded locally (better performance)
- Icon migration to assets/icons
- Improved specialization detection
- Conditional interrupt display logic

### ✅ Completed
- Analyze consumables per player
- Display buffs and enchants
- Track interrupts per event
- Detect TBC specs
- Local API key storage system

### 🚧 Known Issues/Limitations
- WarcraftLogs doesn't always send specific specialization (only class)
- Some rare consumable icons may not be available
- No tracking of damage from suboptimal consumables (planned for v1.1)

### 📊 Statistics
- 145 icons in repository
- 26 supported consumables
- 4 interrupts + 1 shield bash
- 4 racial abilities
- 9 WoW TBC classes

---

## [0.9.0] - 2026-04-01 - Beta

### ✨ Beta Features
- Initial analysis prototype
- Basic specialization tracking
- First 10 consumables

### 🐛 Bug Fixes
- Fixed pixelated icon issue (resolved w/ medium quality)
- Fixed Paladin Protection detection error

---

## Upcoming Improvements (v1.1+)

### Phase 1: Equipment (v1.1)
- [ ] Automatic equipment scanner
- [ ] Mark suboptimal consumables
- [ ] Suggest enchant improvements
- [ ] Cache analyzed logs

### Phase 2: Analysis (v1.2)
- [ ] Per-encounter statistics
- [ ] Player comparison
- [ ] Consumable ranking
- [ ] Export to CSV/JSON

### Phase 3: Community (v1.3)
- [ ] Comments system
- [ ] Share analysis
- [ ] Discord bot integration
- [ ] Public log database

---

## Versioning Format

This project follows [Semantic Versioning](https://semver.org/)

- **MAJOR** - Breaking changes (new API, structure)
- **MINOR** - New features (backwards compatible)
- **PATCH** - Bugfixes and hotfixes

---

## How to Report Changes

If you find bugs or have suggestions:
1. Open a [GitHub Issue](https://github.com/PatoChivato/analyzer/issues)
2. Or use the **📝 Feedback** button on the web

Include:
- What version you're using
- What you expected to happen
- What happened instead
- Steps to reproduce
