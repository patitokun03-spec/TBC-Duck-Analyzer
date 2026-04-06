
const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(\
        <html><head>
        <script>var whTooltips = {colorLinks: true, iconizeLinks: false, renameLinks: true, domain: 'tbc', hide: {icon: true}};</script>
        <script src='https://wow.zamimg.com/widgets/power.js'></script>
        </head><body>
        <a href='https://www.wowhead.com/tbc/item=28504' id='test'>TEST</a>
        </body></html>
    \, {waitUntil: 'networkidle0'});
    await page.hover('#test');
    await page.waitForTimeout(2000);
    const html = await page.evaluate(() => document.body.innerHTML);
    console.log(html);
    await browser.close();
})();
