import { expect, test } from "@playwright/test";

test("home page renders primary heading", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Calendário Brasileiro 2025" }),
  ).toBeVisible();
});

test("about page renders expected title", async ({ page }) => {
  await page.goto("/sobre");
  await expect(
    page.getByRole("heading", { name: "Sobre o Calendário Brasileiro" }),
  ).toBeVisible();
});
