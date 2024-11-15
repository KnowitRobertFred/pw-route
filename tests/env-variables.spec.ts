import test, { expect } from '@playwright/test';
import * as testdata from '../testdata';

test('It should be possible to use different data', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page
    .getByRole('textbox', { name: 'Username' })
    .fill(testdata.myUsername);
  await page
    .getByRole('textbox', { name: 'Password' })
    .fill(testdata.myPassword);
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.locator('[data-test=title]')).toHaveText('Products');
});
