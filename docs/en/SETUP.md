# 🔧 Setup Guide

This guide will help you set up **TBC Duck Analyzer** step by step.

## Prerequisites

- Modern web browser (Chrome, Firefox, Edge, Safari)
- Account on [WarcraftLogs.com](https://www.warcraftlogs.com)
- URL of a public or private combat log

## Step 1: Create API Keys on WarcraftLogs

### 1.1 Access WarcraftLogs

1. Open [WarcraftLogs.com](https://www.warcraftlogs.com)
2. Sign in with your account
3. Go to your [Profile](https://www.warcraftlogs.com/profile)

### 1.2 Create an API Client (v2)

1. Scroll to the bottom of the page
2. Find the **"API Clients"** or **"API Tokens"** section
3. Click **"Create New Client (V2)"**
4. Fill in the form:
   - **Application Name**: `TBC Duck Analyzer` (or your preferred name)
   - **Description**: `Personal log analysis tool`
   - **Redirect URL**: Leave blank or use `http://localhost`
5. Click **"Create"**

### 1.3 Copy Your Keys

After creating the client, you'll see:
- **Client ID**: 36-character string (e.g., `a176f7f9-dd8e-4303-ae31-b1234567890a`)
- **Client Secret**: 40-character string (e.g., `abcdef123456789abcdef123456789abcdef1234`)

⚠️ **IMPORTANT**: Store these keys securely. Don't share them with anyone.

## Step 2: Configure TBC Duck Analyzer

### 2.1 Open the Tool

1. Open [TBC Duck Analyzer](https://patitokun03-spec.github.io/TBC-Duck-Analyzer) (or your local server)
2. You'll see the main interface

### 2.2 Open Settings

1. Click ⚙️ **Settings** (top right corner)
2. The configuration panel will open

### 2.3 Enter Your Keys

1. **Profile Name**: Enter a name for your profile (e.g., "Main Raid")
2. **WCL Client ID**: Paste your Client ID (36 characters)
3. **WCL Client Secret**: Paste your Client Secret (40 characters)
   - The field is a **password** field, so text won't be visible

### 2.4 Validate Keys

- ✅ If the fields turn **green**, your keys are valid
- ❌ If they turn **red**, there's an error in the length

### 2.5 Save

1. Click **"SAVE AND CONNECT"**
2. You should see a confirmation message

## Test: Analyze Your First Log

### 3.1 Get a Log URL

1. Go to [WarcraftLogs.com](https://www.warcraftlogs.com)
2. Find or create a comblog
3. Open the log
4. Copy the full URL from the address bar
   - E.g., `https://www.warcraftlogs.com/reports/ABC123def456GHI789`

### 3.2 Analyze the Log

1. Return to the **TBC Duck Analyzer** page
2. In the input field, paste the log URL
3. Click **"LOG CHECK"**
4. Wait for the analysis to load!

### 3.3 Interpret Results

Once loaded, you'll see:

- **Encounter Tabs**: Each tab is a boss or the "OVERALL"
- **Grouped Classes**: Players separated by class
- **Player Cards**: Each player with:
  - 🎯 Specialization icon
  - 🛡️ Used buffs (with counters)
  - ✨ Spells/Consumables (with usage numbers)

## Advanced Options

### Discord Webhook (Optional)

If you want to send results to Discord:

1. Create a Webhook on your Discord server:
   - Open Server Settings
   - Go to **Integrations** → **Webhooks**
   - Click **"Create Webhook"**
   - Name it "TBC Duck Analyzer"
   - Copy the **Webhook URL**

2. In TBC Duck Analyzer Settings:
   - Paste the URL in **"Discord Webhook URL"**
   - Click **"SAVE AND CONNECT"**

3. When you analyze a log, you'll have the **"SEND TO DISCORD"** button

### Local Storage

✅ Your API keys are stored in the browser's local storage
- They're not sent to any external server (except WarcraftLogs)
- If you clear cookies/cache, you'll lose the configuration

💡 To backup your configuration:
```javascript
// In browser console (F12)
console.log(localStorage.getItem('auditor_config'));
```

## Troubleshooting

### "Invalid or expired API Keys"

- Verify you copied the keys correctly
- Verify the keys have the correct length:
  - Client ID: 36 characters
  - Client Secret: 40 characters
- Generate new keys on WarcraftLogs

### "No results found for this log"

- The log might be private (requires special access)
- The URL might be typed incorrectly
- The log might not have enough data

### Icons look blurry

- Reload the page (Ctrl+F5 or Cmd+Shift+R)
- Clear your browser cache
- Try a different browser

### Discord button doesn't appear

- Verify the Webhook URL is correct
- The Webhook must be valid on Discord

## FAQ

### Are my API keys safe?

✅ Yes, they're stored locally in your browser and NOT sent to our servers.

### Can I use this without API keys?

❌ No, you need the keys to access WarcraftLogs data.

### What information is sent to WarcraftLogs?

Only legitimate API requests with your credentials.

### Is there a limit to how many logs I can analyze?

It depends on your quota on WarcraftLogs (usually 100 requests/min).

### Can I use this offline?

✅ Yes, but you'll need to download the files locally:
- Save all files in a folder
- Open `index.html` in your browser

---

## Need Help?

- 🔵 Read the [README](../en/README.md)
- 📝 Report an issue: use the **Feedback** button

---

**Last updated**: 2026-04-05
