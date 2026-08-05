import { chromium } from 'playwright';

const browser = await chromium.connectOverCDP('http://localhost:9222');
const context = browser.contexts()[0];
const page = context.pages()[0];

// Open the switcher (Vite HMR ya actualizó sin recargar)
await page.click('.current-location-indicator.clickable');
await page.waitForTimeout(700);

await page.screenshot({ path: '/tmp/switcher-after.png' });

const info = await page.evaluate(() => {
  const scrollDiv = document.querySelector('.location-switcher-scroll');
  if (!scrollDiv) return { error: '.location-switcher-scroll not found' };

  const cs = getComputedStyle(scrollDiv);
  return {
    scrollHeight: scrollDiv.scrollHeight,
    clientHeight: scrollDiv.clientHeight,
    overflowY: cs.overflowY,
    maxHeight: cs.maxHeight,
    isScrollable: scrollDiv.scrollHeight > scrollDiv.clientHeight,
    itemCount: scrollDiv.querySelectorAll('ion-item').length,
  };
});

console.log('Scroll div info:', JSON.stringify(info, null, 2));
await browser.close();
