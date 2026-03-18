import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4178/');
});

test('navigation to learn section works', async ({ page }) => {
  await page.get_by_role('link', { name: 'Learn' }).click();
  await expect(page.get_by_role('heading', { name: 'Learn' })).toBeVisible();
});

test('dictionary search returns results', async ({ page }) => {
  await page.get_by_role('link', { name: 'Dict' }).click();
  const searchInput = page.get_by_placeholder('Search for a word...');
  await searchInput.fill('light');
  await page.waitForTimeout(1000); // Wait for fetch

  // Look for result card (searching through shadow DOM is automatic)
  const card = page.locator('hg-dict-search hg-card');
  await expect(card.first()).toBeVisible();
  await expect(card.first()).toContainText('light');
});

test('spelling practice feedback works', async ({ page }) => {
  // Spelling is on home page
  const input = page.get_by_placeholder('Type word...');
  await input.fill('curiosity');
  await page.get_by_role('button', { name: 'Check Spelling' }).click();
  await expect(page.locator('.feedback.success')).toContainText('Correct!');
});
