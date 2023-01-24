import { expect, test } from '@playwright/test';

test.describe('athlete overview', () => {
  test('should display table when data exists', async ({ page }) => {
    await page.goto('http://localhost:4200');

    await page.route('http://localhost:3000/athlete', async (route) =>
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify([
          {
            combinedName: 'Herr Fabian Fabian',
            age: '24',
            combinedAddress: 'Musterstraße 11, 12345 Musterstadt, Germany',
            email: 'test@mail.de',
            phoneNumber: '',
          },
        ]),
      })
    );

    await page.goto('http://localhost:4200/athlete');

    // check column header are present
    const nameColumn = await page.getByRole('columnheader', { name: 'Name' });
    const ageColumn = await page.getByRole('columnheader', { name: 'Age' });
    const addressColumn = await page.getByRole('columnheader', { name: 'Address' });
    const emailColumn = await page.getByRole('columnheader', { name: 'Email' });
    const phoneNumberColumn = await page.getByRole('columnheader', { name: 'Phone Number' });
    const optionsButtonColumn = await page.locator('mat-header-cell:nth-child(6)');
    await expect(nameColumn).toBeVisible();
    await expect(ageColumn).toBeVisible();
    await expect(addressColumn).toBeVisible();
    await expect(emailColumn).toBeVisible();
    await expect(phoneNumberColumn).toBeVisible();
    await expect(optionsButtonColumn).toBeVisible();

    // check paginator is present
    const paginator = await page.getByText('Items per page: 5 0 of 0');
    await expect(paginator).toBeVisible();

    // check row value
    const row = await page.getByRole('row', {
      name: 'Herr Fabian Fabian 24 Musterstraße 11, 12345 Musterstadt, Germany test@mail.de',
    });
    const optionButtonValue = await page
      .getByRole('row', { name: 'Herr Fabian Fabian 24 Musterstraße 11, 12345 Musterstadt, Germany test@mail.de' })
      .getByRole('button');

    await expect(row).toBeVisible();
    await expect(optionButtonValue).toBeVisible();
  });
});
