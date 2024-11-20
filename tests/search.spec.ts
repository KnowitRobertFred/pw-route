import { test } from '../fixtures/allFixtures';
import * as fs from 'fs';
import path from 'path';

test('Route search', async ({ mainPage, searchResultsPage }) => {
  // // Direkt i testet ==>:
  // const file = path.resolve(
  //   __dirname,
  //   '..',
  //   'mock-data',
  //   'globalSearchHits.json'
  // );
  // const fileContent = fs.readFileSync(file, 'utf-8');
  // await mainPage.page.route('**/getGlobalSearchHits*', async (route) => {
  //   await route.fulfill({ body: fileContent });
  // });
  // // <== Direkt i testet

  await mainPage.gotoPage();
  await mainPage.declineCookies();
  await mainPage.searchFor('Test');
  await searchResultsPage.assertNumberOfHits(1);
});
