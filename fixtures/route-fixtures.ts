import { test as base } from '@playwright/test';
import path from 'path';
import * as fs from 'fs';

const myPath = path.resolve(__dirname, '..', 'mock-data/globalSearchHits.json');
const responseContent = fs.readFileSync(myPath, 'utf-8');

export const test = base.extend({
  page: async ({ page }, use) => {
    await page.route('**/getGlobalSearchHits*', (route) => {
      route.fulfill({
        body: responseContent,
      });
    });
    await use(page);
  },
});
