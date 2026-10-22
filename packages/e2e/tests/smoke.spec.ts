import { test, expect } from "@playwright/test";

test.use({ storageState: './.auth/admin.json' });

test("homepage has title", async ({ page }) => {
  await page.goto("/app/orders");

  await expect(page.locator('button').getByText('admin@test.com')).toBeVisible({ timeout: 15_000 });
});
