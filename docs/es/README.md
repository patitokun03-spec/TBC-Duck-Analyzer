# 🔍 TBC Duck Analyzer - Analizador de Logs WoW

Una herramienta profesional para analizar logs de combate de **World of Warcraft TBC** desde **WarcraftLogs**, mostrando consumibles, buffs, habilidades de interrupción y habilidades raciales por jugador.

![Version](https://img.shields.io/badge/Version-1.0.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Características

- 📊 **Análisis detallado de logs** - Visualiza consumibles, buffs y encantamientos
- ⚡ **Interrupts tracking** - Detecta automáticamente cuándo cada jugador interrumpió casteos
- 🏁 **Racial abilities** - Rastrea el uso de habilidades raciales (Arcane Torrent, Stoneform, etc.)
- 🎯 **Detección de specs** - Identifica automáticamente la especialización de cada jugador
- 💾 **Almacenamiento local** - Guarda tus API keys de forma segura en el navegador
- 🔗 **Integración Discord** - Exporta resultados a Discord (opcional)

## 🚀 Inicio Rápido

### 1. Obtén tus API Keys de WarcraftLogs

1. Ve a [WarcraftLogs API Console](https://www.warcraftlogs.com/api/clients)
2. Crea un nuevo cliente (API v2) llamado "TBC Duck Analyzer"
3. Copia el **Client ID** (36 caracteres) y **Client Secret** (40 caracteres)

### 2. Configura la herramienta

1. Abre la página web
2. Haz clic en ⚙️ **Settings**
3. Pega tu Client ID y Client Secret
4. El botón ❓ **Help** te mostrará instrucciones paso a paso

### 3. Analiza un log

1. Copia el URL completo de tu log de WarcraftLogs (ej: `https://www.warcraftlogs.com/reports/...`)
2. Pégalo en el campo de entrada
3. Haz clic en **LOG CHECK**
4. ¡Listo! Verás el análisis completo

## 📋 Estructura del Proyecto

```
Analyzer/
├── index.html              # Página principal
├── README.md               # Este archivo
├── CHANGELOG.md            # Historial de cambios
├── LICENSE                 # Licencia MIT
│
├── css/
│   └── styles.css          # Estilos de la página
│
├── js/
│   ├── script.js           # Lógica principal
│   └── data.js             # Base de datos de hechizos, buffs, etc.
│
├── assets/
│   └── icons/              # Iconos de WoW (145+ archivos)
│
└── docs/
    ├── SETUP.md            # Guía de configuración detallada
    ├── CONTRIBUTING.md     # Cómo contribuir
    └── API.md              # Documentación de data.js
```

## 🔧 Datos Soportados

### Consumibles Rastreados
- Pociones (Haste, Destruction, Mana, Healing)
- Piedras de afilado (Sharpening Stones)
- Sappers (Explosivos)
- Gemas de comida y bebida
- Artefactos

### Habilidades de Interrupción
- **Rogue**: Kick (38768)
- **Warrior**: Pummel (6554), Shield Bash (29704)
- **Mage**: Counterspell (2139)
- **Shaman**: Earth Shock (25454)

### Habilidades Raciales
- **Blood Elf**: Arcane Torrent
- **Undead**: Will of the Forsaken
- **Dwarf**: Stoneform
- **Tauren**: War Stomp

## 🐛 Reportar Errores

¿Encontraste un bug o tienes una sugerencia?

- Usa el botón **📝 Feedback** en la página
- O crea un issue en [GitHub Issues](https://github.com/patitokun03-spec/TBC-Duck-Analyzer/issues)

### Tipos de Reporte
- 🔴 **Bug**: Algo no funciona correctamente
- ✨ **Feature**: Nueva característica o mejora
- 📊 **Data**: Falta un hechizo, buff o consumible

## 📚 Documentación

- [SETUP.md](docs/SETUP.md) - Guía detallada de configuración
- [CONTRIBUTING.md](docs/CONTRIBUTING.md) - Cómo contribuir con código o datos
- [API.md](docs/API.md) - Documentación de la estructura de datos

## 📝 Changelog

Ver [CHANGELOG.md](CHANGELOG.md) para el historial completo de cambios.

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Lee [CONTRIBUTING.md](docs/CONTRIBUTING.md)
2. Fork el proyecto
3. Crea una rama para tu feature
4. Commit y push
5. Abre un Pull Request

## 📄 Licencia

Distribuido bajo la licencia MIT. Ver [LICENSE](LICENSE) para más detalles.

## 🙏 Créditos

- **WarcraftLogs API** - Por proporcionar acceso a los datos de logs
- **Iconos de WoW** - De wow.zamimg.com
- **Comunidad TBC** - Por las sugerencias y feedback

## 📞 Contacto & Links

- 📧 Email: contacto@patochivato.com (próximamente)
- 🌐 Web: www.patochivato.com (próximamente)
- 💬 Discord: [Comunidad](https://discord.gg/patochivato) (próximamente)

---

**Problemas reportados recientemente:**
- Si no ves especialización específica, es porque WarcraftLogs no envió esa información
- Los iconos de algunos consumibles raros pueden mostrar signo de interrogación (estamos agregándolos)

**Roadmap v1.1:**
- ✅ Scanner de equipo
- ✅ Consumibles no óptimos (marcado automático)
- ✅ Estadísticas por boss
- ✅ Caché de logs analizados
