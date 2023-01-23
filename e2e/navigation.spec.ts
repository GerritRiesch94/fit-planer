import { test, expect } from '@playwright/test';

test.describe('navigation', () => {
  test('should have navigation toolbar', async ({ page }) => {
    await page.goto('http://localhost:4200/');

    const homeLink = await page.getByRole('link', { name: 'Fit Planer' });
    const athleteOverviewLink = await page.getByRole('link', { name: 'Athlete Overview' });

    await expect(homeLink).toBeVisible();
    await expect(athleteOverviewLink).toBeVisible();
  });

  test('should have sidebar', async ({ page }) => {
    await page.goto('http://localhost:4200/');

    const sidebar = await page.locator('mat-drawer');
    await expect(sidebar).toBeVisible();

    const overviewButton = await page.getByRole('button').filter({ hasText: 'group' });
    await expect(overviewButton).toBeVisible();

    await page.locator('#menu-button').click();
    const overviewButtonWithText = await page.getByRole('button', { name: 'Athlete Overview' });
    await expect(overviewButtonWithText).toBeVisible();

    await page.locator('#menu-button').click();
    await expect(overviewButtonWithText).toBeHidden();
  });
});
