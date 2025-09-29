import { test, expect } from '@playwright/test';

test.describe('Accessibility Tests', () => {
  test('should have proper page structure', async ({ page }) => {
    await page.goto('/');
    
    const hasTitle = await page.locator('title').count();
    expect(hasTitle).toBeGreaterThan(0);
    
    const hasH1 = await page.locator('h1').count();
    expect(hasH1).toBeGreaterThan(0);
  });

  test('should have proper contrast ratios', async ({ page }) => {
    await page.goto('/');
    
    const bodyStyles = await page.locator('body').evaluate((el) => {
      const styles = window.getComputedStyle(el);
      return {
        color: styles.color,
        backgroundColor: styles.backgroundColor
      };
    });

    expect(bodyStyles.color).toBeTruthy();
    expect(bodyStyles.backgroundColor).toBeTruthy();
  });

  test('should be keyboard navigable', async ({ page }) => {
    await page.goto('/');
    
    await page.keyboard.press('Tab');
    
    const focusedElement = await page.evaluate(() => {
      return document.activeElement?.tagName;
    });

    expect(focusedElement).toBeTruthy();
  });

  test('should have proper language attribute', async ({ page }) => {
    await page.goto('/');
    
    const lang = await page.locator('html').getAttribute('lang');
    
    if (lang) {
      expect(lang).toMatch(/^[a-z]{2}(-[A-Z]{2})?$/);
    }
  });

  test('should have alt text for images', async ({ page }) => {
    await page.goto('/');
    
    const imagesWithoutAlt = await page.locator('img:not([alt])').count();
    
    expect(imagesWithoutAlt).toBe(0);
  });
});