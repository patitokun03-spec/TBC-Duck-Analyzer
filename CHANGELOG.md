# Changelog

All notable changes to TBC Duck Analyzer are documented here.

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

### Fase 2: Análisis (v1.2)
- [ ] Estadísticas por encuentro
- [ ] Comparativa entre jugadores
- [ ] Ranking de consumibles
- [ ] Export a CSV/JSON

### Fase 3: Comunidad (v1.3)
- [ ] Sistema de comentarios
- [ ] Compartir análisis
- [ ] Integración con Discord bot
- [ ] Base de datos de logs públicos

---

## Formato de Versionado

Este proyecto sigue [Semantic Versioning](https://semver.org/)

- **MAJOR** - Cambios incompatibles (nueva API, estrutura)
- **MINOR** - Nuevas características (retrocompatible)
- **PATCH** - Bugs y fixes

---

## Cómo Reportar Cambios

Si encuentras bugs o tienes sugerencias:
1. Abre un [GitHub Issue](https://github.com/patitokun03-spec/TBC-Duck-Analyzer/issues)
2. O usa el botón **📝 Feedback** en la web

Incluye:
- Qué versión usas
- Qué esperabas que pasara
- Qué pasó en su lugar
- Steps to reproduce
