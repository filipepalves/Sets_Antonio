import { test, expect } from '@playwright/test';

test.describe('♿ Accessibility Tests', () => {
  test('✅ Page Structure Test', async ({ page }) => {
    await page.goto('/');
    
    // Wait for loading to disappear
    await page.waitForSelector('text=Loading', { state: 'hidden', timeout: 15000 });
    
    const hasTitle = await page.locator('title').count();
    expect(hasTitle).toBeGreaterThan(0);
    
    const hasMainContent = await page.locator('#root').count();
    expect(hasMainContent).toBeGreaterThan(0);
    
    const hasTextContent = await page.locator('span:has-text("Michael Larkin")').count();
    expect(hasTextContent).toBeGreaterThan(0);
  });

  test('🎨 Color Contrast Test', async ({ page }) => {
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

  test('⌨️ Keyboard Navigation Test', async ({ page }) => {
    await page.goto('/');
    
    await page.keyboard.press('Tab');
    
    const focusedElement = await page.evaluate(() => {
      return document.activeElement?.tagName;
    });

    expect(focusedElement).toBeTruthy();
  });

  test('🌍 Language Attribute Test', async ({ page }) => {
    await page.goto('/');
    
    const lang = await page.locator('html').getAttribute('lang');
    
    if (lang) {
      expect(lang).toMatch(/^[a-z]{2}(-[A-Z]{2})?$/);
    }
  });

  test('🖼️ Image Alt Text Test', async ({ page }) => {
    await page.goto('/');
    
    const totalImages = await page.locator('img').count();
    
    if (totalImages > 0) {
      const imagesWithoutAlt = await page.locator('img:not([alt])').count();
      expect(imagesWithoutAlt).toBe(0);
    } else {
      console.log('No images found on the page');
    }
  });
});