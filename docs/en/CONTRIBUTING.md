# 🤝 Contributing to TBC Duck Analyzer

Thank you for your interest in contributing! This guide will help you do so.

## Ways to Contribute

### 1️⃣ Report Bugs

### 1.1 Use the Feedback Button

On the web page, click **📝 Feedback** → GitHub Issues will open

### 1.2 Information to Include

Please include:

```markdown
## Bug Description
[Describe what is happening]

## Steps to Reproduce
1. [First step]
2. [Second step]
3. [Etc...]

## Expected Behavior
[What should happen]

## Actual Behavior
[What is happening now]

## Environment
- Browser: [Chrome/Firefox/Edge/Safari]
- Version: [e.g., v1.0.0]
- Log URL: [if applicable]
```

### 2️⃣ Request Features

1. Go to [GitHub Issues](https://github.com/patitokun03-spec/TBC-Duck-Analyzer/issues)
2. Click **"New Issue"**
3. Choose **"Feature request"**
4. Describe your idea:

```markdown
## Feature: [Short Title]

## Description
[Explain the feature you want]

## Why It's Useful
[How it benefits users]

## Considered Alternatives
[Other ways to do it]
```

### 3️⃣ Add or Edit Data

#### 3.1 Add Consumables/Spells/Buffs

If a consumable, spell, or buff is missing:

1. Go to [data.js](../../js/data.js)
2. Find the correct section (BUFF_DB, SPELL_DB, etc.)
3. Add the entry:

```javascript
// In BUFF_DB
43771: { name: "Kibler Bits", icon: "inv_misc_food_" }, // Official ID

// In SPELL_DB  
38768: { name: "Kick", icon: "ability_kick", isInterrupt: true },

// In ENCHANT_DB
2667: { name: "Enchant Weapon - Crusader", icon: "inv_enchant_essencedestructionpermanent" }
```

3. If you don't know the exact icon, search at [wow.zamimg.com/icons](https://wow.zamimg.com/images/wow/icons/large/)
4. Create a Pull Request with the changes

#### 3.2 Add a New Icon

If you need an icon that doesn't exist:

1. Download from [wow.zamimg.com](https://wow.zamimg.com/images/wow/icons/large/)
2. Save to `/assets/icons/`
3. Update the reference in `data.js`

### 4️⃣ Write Code

#### 4.1 Local Setup

```bash
# Clone the repository
git clone https://github.com/patitokun03-spec/TBC-Duck-Analyzer.git
cd analyzer

# Open in your favorite editor
code .

# Open in browser
# Just open index.html in your browser (no server needed)
```

#### 4.2 Workflow

1. **Create a branch** for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make changes** to the necessary files:
   - `js/script.js` - Main logic
   - `js/data.js` - Database
   - `css/styles.css` - Styles
   - `index.html` - HTML

3. **Test** your changes (open in browser)

4. **Commit** your changes:
   ```bash
   git add .
   git commit -m "feat: description of your change"
   ```

5. **Push** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request** on GitHub

#### 4.3 Style Guide

- **JavaScript**: camelCase for variables and functions
  ```javascript
  // ✅ Good
  const playerName = "John";
  function detectPlayerSpec(player) { }
  
  // ❌ Bad
  const player_name = "John";
  function detectplayerspec(player) { }
  ```

- **CSS**: kebab-case for classes
  ```css
  /* ✅ Good */
  .player-card { }
  .spell-item { }
  
  /* ❌ Bad */
  .playerCard { }
  .spellItem { }
  ```

- **Comments**: Spanish or English, clear and concise
  ```javascript
  // ✅ Good
  // Detect specialization based on icon
  function detectPlayerSpec(player) { }
  
  // ❌ Bad
  // TODO: do something here
  function detectPlayerSpec(player) { }
  ```

#### 4.4 Change Structure

Your changes must NOT:
- ❌ Break existing functionality
- ❌ Change file paths without updating references
- ❌ Add external dependencies without documenting

Your changes must:
- ✅ Follow the style guide
- ✅ Include clarifying comments
- ✅ Update documentation if applicable
- ✅ Work with current WarcraftLogs data

### 5️⃣ Contribute Documentation

If you find errors or inconsistencies in the documentation:

1. Go to the files in `/docs/`
2. Open an issue or PR directly on GitHub

## Review Process

All changes go through:

1. **Automatic validation**: Tests and linting (coming soon)
2. **Code review**: A maintainer will review it
3. **Feedback**: Possible suggestions for improvement
4. **Merge**: Once approved, it merges to main

## Code of Conduct

- Be respectful to other contributors
- Focus on code, not on people
- If there's disagreement, discuss it in the issue/PR

## Frequently Asked Questions

### How long does it take for my PR to be reviewed?

Usually 2-7 days, depending on:
- Complexity of the change
- Available time from maintainers
- Quality of the documentation

### Can my PR be rejected?

Yes, if:
- It doesn't follow the style guide
- It breaks existing functionality
- It's not relevant to the project

The reasons are always explained so you can learn.

### Should I create an issue before a PR?

- **For bugs**: Yes, open an issue first
- **For small features**: Only if you want to discuss it first
- **For typos/docs**: Not necessary

### Is there monetary compensation?

Right now, **no**. This is a community project made by volunteers.

## Recognition

All contributors will be mentioned in:
- The CONTRIBUTORS.md file (coming soon)
- The website credits page

## Contact

Soon

---

**Thank you for considering contributing!** 🎉

Every contribution, no matter how small, helps improve the tool for the entire community.
