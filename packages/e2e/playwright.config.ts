import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  retries: process.env.CI ? 2 : 0,
  fullyParallel: true,
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  reporter: [
    ["list"],
    ["html", { open: "never" }],
    ["json", { outputFile: "test-results.json" }],
  ],
  use: {
    baseURL: process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:9000",
    trace: "retain-on-failure",
  },
});
