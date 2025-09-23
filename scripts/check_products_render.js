const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    const url = process.argv[2] || 'http://localhost:3000/products';
    console.log('Loading', url);
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 15000 });

    // Wait for the product card name element
    const selector = '.productName';
    await page.waitForSelector(selector, { timeout: 10000 });

    const names = await page.$$eval(selector, els => els.map(e => e.textContent.trim()).slice(0, 50));
    console.log(JSON.stringify({ count: names.length, sample: names }, null, 2));

    await browser.close();
    process.exit(0);
  } catch (err) {
    console.error('ERROR', err && err.message ? err.message : err);
    process.exit(2);
  }
})();
