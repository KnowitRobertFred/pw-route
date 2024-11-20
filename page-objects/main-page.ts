import { Locator, Page } from '@playwright/test';
import * as fs from 'fs';

class MainPage {
  private pageUrl = '/';
  private declineCookiesButton: Locator;
  private openSearchButton: Locator;
  private searchInput: Locator;
  private searchButton: Locator;

  constructor(public readonly page: Page) {
    this.declineCookiesButton = page.getByText('Neka alla', { exact: true });
    this.openSearchButton = page.getByText('Sök', { exact: true });
    this.searchInput = page.locator('[name="q"]');
    this.searchButton = page
      .locator('form')
      .getByRole('button', { name: 'Sök' });
  }

  async gotoPage() {
    await this.page.goto(this.pageUrl);
  }

  async declineCookies() {
    await this.declineCookiesButton.click();
  }

  async searchFor(searchTerm: string) {
    // // I page objectet ==>
    // const path = 'mock-data/globalSearchHits.json';
    // const responseData = fs.readFileSync(path, 'utf-8');
    // await this.page.route('**/getGlobalSearchHits*', async (route) => {
    //   await route.fulfill({ body: responseData });
    // });
    // // <==

    await this.openSearchButton.click();
    await this.searchInput.fill(searchTerm);
    await this.searchButton.click();
  }
}

export default MainPage;
