import { expect, Locator, Page } from '@playwright/test';

class SearchResultsPage {
  private numberOfHitsField: Locator;
  constructor(public readonly page: Page) {
    this.numberOfHitsField = page.locator('.SearchPage h2.chakra-heading');
  }

  async assertNumberOfHits(expectedHits: number) {
    await expect(this.numberOfHitsField).toContainText(
      `${expectedHits} träffar på`
    );
  }
}

export default SearchResultsPage;
