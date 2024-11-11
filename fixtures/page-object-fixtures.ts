import { test as base } from '@playwright/test';
import MainPage from '../page-objects/main-page';
import SearchResultsPage from '../page-objects/search-results-page';

type MyFixtures = {
  mainPage: MainPage;
  searchResultsPage: SearchResultsPage;
};

export const test = base.extend<MyFixtures>({
  mainPage: async ({ page }, use) => {
    await use(new MainPage(page));
  },
  searchResultsPage: async ({ page }, use) => {
    await use(new SearchResultsPage(page));
  },
});

export { expect } from '@playwright/test';
