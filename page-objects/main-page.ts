import { Locator, Page } from '@playwright/test';

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
    await this.openSearchButton.click();
    await this.searchInput.fill(searchTerm);
    await this.searchButton.click();
  }
}

export default MainPage;
