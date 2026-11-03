import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4173/');
});

test('navigation to lessons works', async ({ page }) => {
  const app = page.locator('hg-app');
  await expect(app).toBeVisible();
  
  // Click on Lessons in Header
  const header = app.locator('hg-header');
  await header.getByText('レッスン').click();
  
  // Check that lessons view is rendered
  const lessonsView = app.locator('hg-lessons-view');
  await expect(lessonsView).toBeVisible();
});

test('dictionary search returns results', async ({ page }) => {
  const app = page.locator('hg-app');
  const header = app.locator('hg-header');
  await header.getByText('辞書').click();

  const dictView = app.locator('hg-dict-search');
  await expect(dictView).toBeVisible();

  const searchInput = dictView.locator('.search-input');
  await searchInput.fill('grace');
  await page.waitForTimeout(500);

  const card = dictView.locator('.dict-card');
  await expect(card.first()).toBeVisible();
  await expect(card.first()).toContainText('grace');
});

test('simulations page is accessible and shows level exams', async ({ page }) => {
  const app = page.locator('hg-app');
  const header = app.locator('hg-header');
  await header.getByText('模擬試験').click();

  const simView = app.locator('hg-simulations-view');
  await expect(simView).toBeVisible();
  await expect(simView.getByText('英語レベル模擬試験')).toBeVisible();
});
