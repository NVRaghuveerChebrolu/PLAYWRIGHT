import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.flipkart.com/');
  await page.getByRole('link', { name: 'Gaming Mouse', exact: true }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'ZEBRONICS Jaguar Wireless Ambidextrous Optical Mouse Wi...' }).first().click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Add to car' }).click();
  await page1.getByRole('button', { name: '+' }).click();
});