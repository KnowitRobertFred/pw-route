import { test, expect, request } from '@playwright/test';
import * as fs from 'fs';

test('Route search', async ({ page }) => {
  // Vänta på svar
  // Manipulera anrop
  // await page.route('**/getGlobalSearchHits*', async (route, request) => {
  //   const myUrl = request.url();
  //   const urlObj = new URL(myUrl);
  //   urlObj.searchParams.set('query', 'Solutions');

  //   await route.continue({ url: urlObj.toString() });
  // });

  // Avbryt anrop (bara för att)
  // await page.route('**/getGlobalSearchHits*', async (route) => {
  //   await route.abort();
  // });

  // Svara med hårdkodat anrop
  // await page.route('**/getGlobalSearchHits*', async (route) => {
  //   const globalSearchHits = fs.readFileSync('mock-data/globalSearchHits.json');
  //   await route.fulfill({ body: globalSearchHits });
  // });

  // Manipulera faktiskt svar
  // await page.route('**/getGlobalSearchHits*', async (route) => {
  //   const realResponse = await route.fetch();
  //   const body = await realResponse.json();
  //   const firstHit = body.searchHits[0];

  //   const myResponse = {
  //     searchHits: [firstHit],
  //     totalHits: 1,
  //     hasZeroHits: false,
  //     nextPage: null,
  //   };

  //   await route.fulfill({
  //     json: myResponse,
  //   });
  // });

  await page.goto('/');
  await page.getByText('Neka alla', { exact: true }).click();
  await page.getByText('Sök', { exact: true }).click();
  await page.locator('[name="q"]').fill('Test');
  await page.keyboard.press('Enter');

  // Vänta på att svar för anrop
  await page.waitForResponse('**/getGlobalSearchHits*');
  await expect(page.locator('.SearchPage h2.chakra-heading')).toContainText(
    '1 träffar på Test'
  );
});
