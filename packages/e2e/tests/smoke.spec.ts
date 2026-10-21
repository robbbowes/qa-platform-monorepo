import { test, expect } from "@playwright/test";

test("homepage has title", async ({ page }) => {
  await page.goto("/app");

  await expect(page).toHaveTitle(/Welcome to Medusa/, { timeout: 15_000 });
});
