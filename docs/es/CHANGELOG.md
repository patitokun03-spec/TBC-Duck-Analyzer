# Changelog

Todos los cambios importantes en este proyecto serán documentados en este archivo.

## [1.2.0] - 2026-04-14

### ✨ Migración Full-Stack y Arquitectura
- **Integración Node.js** - Migración a un entorno backend Node.js (`server.js`) sustituyendo la mera lógica de configuración estática.
- **Proxy Local para Iconos** - El servidor ahora intercepta, cachea y sirve de forma limpia los iconos de Wowhead a través de puntos `/api/icon/`, reduciendo drásticamente los tiempos de carga.
- **Integración con Base de Datos SQLite** - Integración directa del sistema `logs_cache` en el backend para una consulta persistente e independiente.
- **Soporte Docker** - La aplicación se puede lanzar unificadamente en entornos locales y cloud mediante `Dockerfile` y `docker-compose.yml`.

### 🐛 Soluciones Lógicas y del Inspector de Equipo
- **Matriz Estricta de Encantamientos** - Reescritura del código `isEnchantable` priorizando los SlotIDs 1-19 reales mapeados de la API de WoW. Elimina falsos negativos de falta de enchants en Collar, Cintura, Camisas, Tabardo, y Ranged.
- **Lógica de Prioridad de Encantamiento** - El aviso "❌ Slacking" respeta ahora estrictamente la omisión de enchants temporales como aceites y piedras si carece de encantamiento permanente.
- **Validación de Armas Off-hand** - Añadida regla de refinamiento sobre armas off-hand (Slot 17). Los encantamientos exigen ahora que el ítem sea escudo o arma, eximiendo a los simples objetos de clase "held in off-hand".
- **Perfección del Grid UI** - Desincronización de márgenes flexbox superada; el marco del paperdoll y la etiqueta "ARMOR" gozan de una sincronización vertical limpia.
- **Debugs de Consola** - Añadidos de logs para desarrolladores embebidos sobre un ciclo mapping the exact equipment state into array.

---

## [1.1.0] - 2026-04-06

### ✨ Rediseño del Inspector de Equipo (Gear Inspector)
- **Overhaul Completo del Inspector** - Diseño expandido en un grid limpio de 2 columnas.
- **Detalles de Encantamientos TBC** - Mapeo automático de IDs de encantamiento a nombres legibles y estadísticas exactas de The Burning Crusade.
- **Agrupación de Encantamientos de Arma** - Exclusión estricta de encantamientos permanentes del rastreador de consumibles (ej: cruzado o mangosta no saldrán como elixires).
- **Tooltips Optimizados** - Carga diferida de los tooltips de Wowhead (0 picos de lag al inspeccionar), superposición de gemas mejorada y sistema anti-hover ciego.
- **Paperdoll Refinado** - Silueta 2D matemáticamente acoplada a las coordenadas exactas de las casillas del juego real.
- **Atajos de Teclado** - Añadida pulsación de la tecla `Escape` para cerrar limpiamente todas las ventanas superpuestas.

---

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
1. Abre un [GitHub Issue](https://github.com/patitokun03-spec/TBC-Duck-Analyzer/issues)
2. O usa el botón **📝 Feedback** en la web

Incluye:
- Qué versión usas
- Qué esperabas que pasara
- Qué pasó en su lugar
- Steps to reproduce
