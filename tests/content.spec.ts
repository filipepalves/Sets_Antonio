import { test, expect } from '@playwright/test';

test.describe('📋 Content Tests', () => {
  test('🎵 Music Versions Test', async ({ page }) => {
    await page.goto('/');
    
    // Wait for loading to disappear
    await page.waitForSelector('text=Loading', { state: 'hidden', timeout: 30000 });
    
    const versions = [
      'Larkination 2025.01',
      'Larkination 2025.02',
      'Larkination 2025.03',
      'Larkination 2025.04',
      'Larkination 2025.05',
      'Larkination 2025.06',
      'Larkination 2020.01',
      'Larkination 2020.02',
      'Larkination 2020.03',
      'Larkination 2024.01'
    ];

    for (const version of versions) {
      await expect(page.locator(`span:has-text("${version}")`)).toBeVisible();
    }
  });

  test('🃏 Card Structure Test', async ({ page }) => {
    await page.goto('/');
    
    // Wait for loading to disappear
    await page.waitForSelector('text=Loading', { state: 'hidden', timeout: 30000 });
    
    const cards = page.locator('li.sc-hwddKA');
    await expect(cards).toHaveCount(10);
    
    for (let i = 0; i < 10; i++) {
      const card = cards.nth(i);
      await expect(card.locator('span:has-text("Michael Larkin")')).toBeVisible();
      await expect(card.locator('span[class*="sc-hjsuWn"]')).toHaveCount(2);
    }
  });

  test('🎨 Styling Components Test', async ({ page }) => {
    await page.goto('/');
    
    // Wait for loading to disappear
    await page.waitForSelector('text=Loading', { state: 'hidden', timeout: 30000 });
    
    await expect(page.locator('.sc-fbQrwq')).toBeVisible();
    await expect(page.locator('.sc-gGKoUb')).toBeVisible();
    await expect(page.locator('.sc-hwddKA')).toHaveCount(10);
  });

  test('📜 List Format Test', async ({ page }) => {
    await page.goto('/');
    
    // Wait for loading to disappear
    await page.waitForSelector('text=Loading', { state: 'hidden', timeout: 30000 });
    
    const list = page.locator('ul.sc-gGKoUb');
    await expect(list).toBeVisible();
    
    const listItems = list.locator('li');
    await expect(listItems).toHaveCount(10);
  });
});