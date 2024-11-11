import { test, expect } from '@playwright/test';

test('Route search', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Neka alla', { exact: true }).click();
  await page.getByText('Sök', { exact: true }).click();
  await page.locator('[name="q"]').fill('Test');
  await page.keyboard.press('Enter');
  await expect(page.locator('.SearchPage h2.chakra-heading')).toContainText(
    '81 träffar på Test'
  );
});
