# 🔍 PATOCHIVATO - WoW Log Analyzer

A professional tool to analyze **World of Warcraft TBC** combat logs from **WarcraftLogs**, displaying consumables, buffs, interrupt abilities, and racial abilities per player.

![Version](https://img.shields.io/badge/Version-1.0.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- 📊 **Detailed log analysis** - View consumables, buffs, and weapon enchants
- ⚡ **Interrupt tracking** - Automatically detect when each player interrupted casts
- 🏁 **Racial abilities** - Track the use of racial abilities (Arcane Torrent, Stoneform, etc.)
- 🎯 **Auto spec detection** - Automatically identify each player's specialization
- 💾 **Local storage** - Securely save your API keys in the browser
- 🔗 **Discord integration** - Export results to Discord webhooks (optional)

## 🚀 Quick Start

### 1. Get Your API Keys from WarcraftLogs

1. Go to [WarcraftLogs API Console](https://www.warcraftlogs.com/api/clients)
2. Create a new client (API v2) called "PatoChivato"
3. Copy the **Client ID** (36 characters) and **Client Secret** (40 characters)

### 2. Configure the Tool

1. Open the web page
2. Click ⚙️ **Settings**
3. Paste your Client ID and Client Secret
4. The ❓ **Help** button will show step-by-step instructions

### 3. Analyze a Log

1. Copy the full URL of your WarcraftLogs report (e.g., `https://www.warcraftlogs.com/reports/...`)
2. Paste it in the input field
3. Click **LOG CHECK**
4. Done! You'll see the complete analysis

## 📋 Project Structure

```
Analyzer/
├── index.html              # Main page
├── README.md               # This file (English)
├── CHANGELOG.md            # Change history
├── LICENSE                 # MIT License
│
├── css/
│   └── styles.css          # Page styles
│
├── js/
│   ├── script.js           # Main logic
│   └── data.js             # Database of spells, buffs, etc.
│
├── assets/
│   └── icons/              # WoW icons (145+ files)
│
└── docs/
    ├── en/
    │   ├── SETUP.md        # Detailed setup guide
    │   ├── CONTRIBUTING.md # How to contribute
    │   └── README.md       # English documentation
    └── es/
        ├── SETUP.md        # Guía de configuración
        ├── CONTRIBUTING.md # Cómo contribuir
        └── README.md       # Documentación en español
```

## 🔧 Supported Data

### Tracked Consumables
- Potions (Haste, Destruction, Mana, Healing)
- Sharpening Stones
- Sappers (Explosives)
- Food & Drink Buffs
- Enchanting Materials

### Interrupt Abilities
- **Rogue**: Kick (38768)
- **Warrior**: Pummel (6554), Shield Bash (29704)
- **Mage**: Counterspell (2139)
- **Shaman**: Earth Shock (25454)

### Racial Abilities
- **Blood Elf**: Arcane Torrent
- **Undead**: Will of the Forsaken
- **Dwarf**: Stoneform
- **Tauren**: War Stomp

## 🐛 Report Issues

Found a bug or have a suggestion?

- Use the **📝 Feedback** button on the page
- Or create an issue on [GitHub Issues](https://github.com/PatoChivato/analyzer/issues)

### Report Types
- 🔴 **Bug**: Something isn't working correctly
- ✨ **Feature**: New feature or improvement request
- 📊 **Data**: Missing spell, buff, or consumable

## 📚 Documentation

- [SETUP.md](docs/en/SETUP.md) - Detailed setup guide
- [CONTRIBUTING.md](docs/en/CONTRIBUTING.md) - How to contribute
- [Spanish Docs](docs/es/) - Documentation en español

## 📝 Changelog

View [CHANGELOG.md](CHANGELOG.md) for the full change history.

## 🤝 Contributing

Contributions are welcome! Please:

1. Read [CONTRIBUTING.md](docs/en/CONTRIBUTING.md)
2. Fork the project
3. Create a branch for your feature
4. Commit and push your changes
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more details.

## 🙏 Credits

- **WarcraftLogs API** - For providing access to log data
- **WoW Icons** - From wow.zamimg.com
- **TBC Community** - For suggestions and feedback

## 📞 Contact & Links

- 📧 Email: contact@patochivato.com (coming soon)
- 🌐 Web: www.patochivato.com (coming soon)
- 💬 Discord: [Community](https://discord.gg/patochivato) (coming soon)

---

**Known Issues:**
- If you don't see a specific specialization, it's because WarcraftLogs didn't send that information
- Some rare consumable icons may show as question marks (we're adding them)

**Roadmap v1.1:**
- ✅ Equipment scanner
- ✅ Suboptimal consumables detection
- ✅ Per-boss statistics
- ✅ Cached log analysis
