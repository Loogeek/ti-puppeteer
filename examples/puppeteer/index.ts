import puppeteer from 'puppeteer';
import fs from 'fs/promises';

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });

  const page = await browser.newPage();
  await page.goto('https://baidu.com');

  await page.type('#kw', 'Hello Loogeek');
  await page.click('#su');

  await page.waitForSelector('#container');
  const screenshot = await page.screenshot();
  await fs.writeFile('./screenshot.png', screenshot);

  await browser.close();
})();
