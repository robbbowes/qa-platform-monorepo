import { test, expect } from "@playwright/test";

test("Authenticate as admin user", async ({ page }) => {
    await page.goto("/app/login");
    await expect(page).toHaveTitle(/Welcome to Medusa/, { timeout: 15_000 });
    await page.getByLabel("Email").fill(process.env.ADMIN_USER!);
    await page.getByLabel("Password").fill(process.env.ADMIN_PASSWORD!);
    await page.getByRole("button", { name: "Continue with Email" }).click();

    await expect(page).toHaveURL(/\/app\/orders/, { timeout: 15_000 });
    await page.context().storageState({ path: './.auth/admin.json' });
});
