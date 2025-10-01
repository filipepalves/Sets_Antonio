import { test, expect } from '@playwright/test';

test.describe('📋 Content Tests', () => {
  test('🎵 Music Versions Test', async ({ page }) => {
    await page.goto('/');

    // Wait for loading to disappear
    await page.waitForSelector('text=Loading', { state: 'hidden', timeout: 30000 });

    // Just verify that at least one Larkination version exists
    const versionPattern = page.locator('span[class*="sc-hjsuWn"]:has-text("Larkination")');
    await expect(versionPattern.first()).toBeVisible();
  });

  test('🃏 Card Structure Test', async ({ page }) => {
    await page.goto('/');

    // Wait for loading to disappear
    await page.waitForSelector('text=Loading', { state: 'hidden', timeout: 30000 });

    const cards = page.locator('li.sc-hwddKA');
    const cardCount = await cards.count();
    expect(cardCount).toBeGreaterThan(0);

    // Just verify the first card has the expected structure
    const firstCard = cards.first();
    await expect(firstCard.locator('span[class*="sc-hjsuWn"]').first()).toBeVisible();
  });

  test('🎨 Styling Components Test', async ({ page }) => {
    await page.goto('/');

    // Wait for loading to disappear
    await page.waitForSelector('text=Loading', { state: 'hidden', timeout: 30000 });

    await expect(page.locator('.sc-fbQrwq')).toBeVisible();
    await expect(page.locator('.sc-gGKoUb')).toBeVisible();
    const cards = await page.locator('.sc-hwddKA').count();
    expect(cards).toBeGreaterThan(0);
  });

  test('📜 List Format Test', async ({ page }) => {
    await page.goto('/');

    // Wait for loading to disappear
    await page.waitForSelector('text=Loading', { state: 'hidden', timeout: 30000 });

    const list = page.locator('ul.sc-gGKoUb');
    await expect(list).toBeVisible();

    const listItems = await list.locator('li').count();
    expect(listItems).toBeGreaterThan(0);
  });
});