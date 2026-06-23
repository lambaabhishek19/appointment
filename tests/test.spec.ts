import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://ssc.wilkencloud.de/ulm/select2?md=4');
  await page.locator('#span-cnc-600').check();
  await page.locator('#OKButton').click();

   await page.locator('#WeiterButton').click();
   await page.locator('#OKButton').click();
 await page.locator('#WeiterButton').click();
  await expect( page.getByText('Kein freier Termin verfügbar')).toBeVisible();
});
