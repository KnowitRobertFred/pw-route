import { test } from '../fixtures/allFixtures';

test('Test route', async ({ mainPage, searchResultsPage }) => {
  await mainPage.gotoPage();
  await mainPage.declineCookies();
  await mainPage.searchFor('Test');
  await searchResultsPage.assertNumberOfHits(1);
});
