import { test } from '../fixtures/page-object-fixtures';

test('Route search', async ({ mainPage, searchResultsPage }) => {
  await mainPage.gotoPage();
  await mainPage.declineCookies();
  await mainPage.searchFor('Test');
  await searchResultsPage.assertNumberOfHits(81);
});
