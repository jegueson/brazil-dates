import { expect, test } from "@playwright/test";

const CURRENT_YEAR = new Date().getFullYear();

test("home page renders primary heading", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", {
      name: `Calendário Brasileiro ${CURRENT_YEAR}`,
    }),
  ).toBeVisible();
});

test("about page renders expected title", async ({ page }) => {
  await page.goto("/sobre");
  await expect(
    page.getByRole("heading", { name: "Sobre o Calendário Brasileiro" }),
  ).toBeVisible();
});
