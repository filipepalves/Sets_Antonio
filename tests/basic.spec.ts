import { test, expect } from '@playwright/test';

test.describe('Sets António Coutinho Website', () => {
  test('should load the homepage', async ({ page }) => {
    await page.goto('/');
    
    await expect(page).toHaveTitle(/Vite \+ React \+ TS/);
    
    await expect(page.locator('body')).toBeVisible();
  });

  test('should display Vite + React + TS content', async ({ page }) => {
    await page.goto('/');
    
    const heading = page.locator('h1');
    await expect(heading).toContainText('Vite + React + TS');
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    await expect(page).toHaveTitle(/Vite \+ React \+ TS/);
    await expect(page.locator('body')).toBeVisible();
  });

  test('should have no console errors', async ({ page }) => {
    const messages: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        messages.push(msg.text());
      }
    });

    await page.goto('/');
    
    expect(messages).toHaveLength(0);
  });

  test('should load without network failures', async ({ page }) => {
    let failedRequests = 0;
    
    page.on('response', (response) => {
      if (!response.ok()) {
        failedRequests++;
      }
    });

    await page.goto('/');
    
    expect(failedRequests).toBe(0);
  });
});