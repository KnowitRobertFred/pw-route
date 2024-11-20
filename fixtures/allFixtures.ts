import { mergeTests } from '@playwright/test';
import { test as pageObjects } from './page-object-fixtures';
import { test as routeFixtures } from './route-fixtures';

export const test = mergeTests(pageObjects, routeFixtures);
