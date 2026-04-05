# Changelog

Todos los cambios importantes en este proyecto serán documentados en este archivo.

## [1.0.0] - 2026-04-05 - LANZAMIENTO OFICIAL

### ✨ Características Nuevas
- Sistema de análisis de logs de WarcraftLogs
- Rastreo de consumibles (pociones, sappers, piedras de afilado)
- Detección automática de buffs y encantamientos de arma
- Panel de especialización automática
- Soporte para Discord Webhooks

### 🎯 Habilidades de Interrupción Agregadas
- **Rogue**: Kick (38768)
- **Warrior**: Pummel (6554), Shield Bash (29704)
- **Mage**: Counterspell (2139)
- **Shaman**: Earth Shock (25454)

Solo se muestran cuando realmente interrumpen un casteo.

### 🏁 Habilidades Raciales Agregadas
- **Blood Elf**: Arcane Torrent (28730)
- **Undead**: Will of the Forsaken (7744)
- **Dwarf**: Stoneform (20594)
- **Tauren**: War Stomp (20549)

### 📁 Mejoras de Infraestructura
- Estructura de carpetas reorganizada (css/, js/, assets/, docs/)
- Sistema de feedback integrado (GitHub Issues)
- Tutorial inicial para nuevos usuarios
- Documentación completa

### 🔧 Cambios Técnicos
- 145+ iconos descargados localmente (mejor rendimiento)
- Migración de iconos a assets/icons
- Detección mejorada de especialización
- Lógica de display condicional para interrupts

### ✅ Cumplidos
- Analizar consumibles por jugador
- Mostrar buffs y encantamientos
- Tracking de interrupts por evento
- Detección de specs TBC
- Sistema de almacenamiento local de API keys

### 🚧 Conocidos/Limitaciones
- WarcraftLogs no siempre envía especialización específica (solo clase)
- Algunos iconos de consumibles raros pueden no disponerse
- No se rastrea daño en consumibles innecesarios (planeado v1.1)

### 📊 Estadísticas
- 145 iconos en repositorio
- 26 consumibles soportados
- 4 interrupts+1 shield bash
- 4 habilidades raciales
- 9 clases de WoW TBC

---

## [0.9.0] - 2026-04-01 - Beta

### ✨ Características Beta
- Prototipo inicial de análisis
- Rastreo básico de especializaciones
- Primeras 10 consumibles

### 🐛 Bugs Solucionados  
- Problema de iconos pixelados (resuelto con calidad media)
- Error en detección de Paladines Protection

---

## Próximas Mejoras (v1.1+)

### Fase 1: Equipamiento (v1.1)
- [ ] Scanner automático de equipo
- [ ] Marcar consumibles no óptimos
- [ ] Sugerir mejoras de enchants
- [ ] Caché de logs analizados

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
1. Abre un [GitHub Issue](https://github.com/PatoChivato/analyzer/issues)
2. O usa el botón **📝 Feedback** en la web

Incluye:
- Qué versión usas
- Qué esperabas que pasara
- Qué pasó en su lugar
- Steps to reproduce
