# 🤝 Contribuir a PatoChivato

¡Gracias por tu interés en contribuir! Esta guía te ayudará a hacerlo.

## Formas de Contribuir

### 1️⃣ Reportar Bugs

### 1.1 Usar el Botón de Feedback

En la página web, haz clic en **📝 Feedback** → se abrirá GitHub Issues

### 1.2 Información a Incluir

Por favor incluye:

```markdown
## Descripción del Bug
[Describe qué está pasando]

## Pasos para Reproducir
1. [Primer paso]
2. [Segundo paso]
3. [Etc...]

## Comportamiento Esperado
[Qué debería pasar]

## Comportamiento Actual
[Qué pasa ahora]

## Entorno
- Navegador: [Chrome/Firefox/Edge/Safari]
- Versión: [ej: v1.0.0]
- URL del Log: [si aplica]
```

### 2️⃣ Solicitar Features

1. Ve a [GitHub Issues](https://github.com/patitokun03-spec/TBC-Duck-Analyzer/issues)
2. Haz clic en **"New Issue"**
3. Elige **"Feature request"**
4. Describe tu idea:

```markdown
## Feature: [Título Corto]

## Descripción
[Explica la característica que deseas]

## Por qué es útil
[Cómo beneficia a los usuarios]

## Alternativas Consideradas
[Otras formas de hacerlo]
```

### 3️⃣ Agregar o Editar Datos

#### 3.1 Agregar Consumibles/Hechizos/Buffs

Si falta un consumible, hechizo o buff:

1. Ve a [data.js](../js/data.js)
2. Encuentra la sección correcta (BUFF_DB, SPELL_DB, etc.)
3. Agrega la entrada:

```javascript
// En BUFF_DB
43771: { name: "Kibler Bits", icon: "inv_misc_food_" }, // ID oficial

// En SPELL_DB  
38768: { name: "Kick", icon: "ability_kick", isInterrupt: true },

// En ENCHANT_DB
2667: { name: "Enchant Weapon - Crusader", icon: "inv_enchant_essencedestructionpermanent" }
```

3. Si no sabes el icono exacto, busca en [wow.zamimg.com/icons](https://wow.zamimg.com/images/wow/icons/large/)
4. Crea un Pull Request con los cambios

#### 3.2 Agregar un Nuevo Icono

Si necesitas un icono que no existe:

1. Descarga desde [wow.zamimg.com](https://wow.zamimg.com/images/wow/icons/large/)
2. Guarda en `/assets/icons/`
3. Actualiza la referencia en `data.js`

### 4️⃣ Escribir Código

#### 4.1 Setup Local

```bash
# Clona el repositorio
git clone https://github.com/patitokun03-spec/TBC-Duck-Analyzer.git
cd analyzer

# Abre en tu editor favorito
code .

# Abre en el navegador
# Solo abre index.html en tu navegador (no necesita servidor)
```

#### 4.2 Flujo de Trabajo

1. **Crea una rama** para tu feature:
   ```bash
   git checkout -b feature/tu-feature-name
   ```

2. **Haz cambios** en los archivos necesarios:
   - `js/script.js` - Lógica principal
   - `js/data.js` - Base de datos
   - `css/styles.css` - Estilos
   - `index.html` - HTML

3. **Prueba** tus cambios (abre en navegador)

4. **Commit** tus cambios:
   ```bash
   git add .
   git commit -m "feat: descripcion de tu cambio"
   ```

5. **Push** a tu fork:
   ```bash
   git push origin feature/tu-feature-name
   ```

6. **Abre un Pull Request** en GitHub

#### 4.3 Guía de Estilo

- **JavaScript**: camelCase para variables y funciones
  ```javascript
  // ✅ Bien
  const playerName = "John";
  function detectPlayerSpec(player) { }
  
  // ❌ Mal
  const player_name = "John";
  function detectplayerspec(player) { }
  ```

- **CSS**: kebab-case para clases
  ```css
  /* ✅ Bien */
  .player-card { }
  .spell-item { }
  
  /* ❌ Mal */
  .playerCard { }
  .spellItem { }
  ```

- **Comments**: Español o Inglés, claros y concisos
  ```javascript
  // ✅ Bien
  // Detectar especialización basada en icono
  function detectPlayerSpec(player) { }
  
  // ❌ Mal
  // TODO: hacer algo aquí
  function detectPlayerSpec(player) { }
  ```

#### 4.4 Estructura de Cambios

Tus cambios no deben:
- ❌ Romper funcionalidad existente
- ❌ Cambia caminos de archivos sin actualizar referencias
- ❌ Agregar dependencias externas sin documentar

Tus cambios deben:
- ✅ Seguir la guía de estilo
- ✅ Incluir comentarios clarificadores
- ✅ Actualizar documentación si aplica
- ✅ Funcionar con los datos actuales de WarcraftLogs

### 5️⃣ Contribuir Documentación

Si encuentras errores o inconsistencias en la documentación:

1. Ve a los archivos en `/docs/`
2. Abre un issue o PR directamente en GitHub

## Proceso de Review

Todos los cambios pasan por:

1. **Validación automática**: Tests y linting (próximamente)
2. **Review de código**: Un mantenedor lo revisará
3. **Feedback**: Posibles sugerencias de mejora
4. **Merge**: Una vez aprobado, se mezcla al main

## Código de Conducta

- Sé respetuoso con otros contribuidores
- Enfócate en el código, no en las personas
- Si hay desacuerdo, discútelo en el issue/PR

## Preguntas Frecuentes

### ¿Cuánto tarda en revisarse mi PR?

Normalmente 2-7 días, dependiendo de:
- Complejidad del cambio
- Tiempo disponible de los mantenedores
- Calidad de la documentación

### ¿Pueden rechazar mi PR?

Sí, si:
- No sigue la guía de estilo
- Rompe funcionalidad existente
- No es relevante para el proyecto

Siempre se explican los motivos para que puedas aprender.

### ¿Debo crear un issue antes de un PR?

- **Para bugs**: Sí, abre primero un issue
- **Para features pequeñas**: Solo si quieres discutir antes
- **Para typos/docs**: No es necesario

### ¿Hay compensación monetaria?

En estos momentos, **no**. Este es un proyecto de comunidad hecho por voluntarios.

## Reconocimiento

Todos los contribuidores serán mencionados en:
- El archivo CONTRIBUTORS.md (próximamente)
- La página de créditos del sitio web

## Contacto

- 📧 Email: dev@patochivato.com (próximamente)
- 💬 Discord: [Canal de Desarrollo](https://discord.gg/patochivato) (próximamente)
- 🐛 Issues: [GitHub Issues](https://github.com/patitokun03-spec/TBC-Duck-Analyzer/issues)

---

**¡Muchas gracias por considerar contribuir!** 🎉

Cada contribución, sin importar cuán pequeña, ayuda a mejorar la herramienta para toda la comunidad.
