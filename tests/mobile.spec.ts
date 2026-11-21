import { test, expect } from "@playwright/test";

const widths = [320, 360, 375, 390, 414, 430, 768, 1024, 1366, 1440, 1920];
const screenshotWidths = [375, 430, 768, 1366];

test("homepage and AI page have no unintended horizontal overflow", async ({ page }) => {
  for (const width of widths) {
    await page.setViewportSize({ width, height: 844 });
    for (const path of ["/", "/solutions/local-ai-agents"]) {
      await page.goto(path);
      await page.waitForLoadState("networkidle");
      const dimensions = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      }));
      expect(
        dimensions.scrollWidth,
        `${path} overflows horizontally at ${width}px`,
      ).toBeLessThanOrEqual(dimensions.clientWidth);
    }
  }
});

test("mobile navigation, Escape key, and AI scenario tabs work", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  const menuButton = page.getByRole("button", { name: "Open navigation" });
  await menuButton.click();
  await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(menuButton).toBeFocused();

  await page.goto("/solutions/local-ai-agents");
  await expect(page.getByText("Illustrative Workflow — Not a Live AI Demo")).toBeVisible();
  const retailTab = page.getByRole("tab", { name: "Retail Operations" });
  await retailTab.click();
  await expect(retailTab).toHaveAttribute("aria-selected", "true");
  await expect(page.getByText("Which products need attention today?")).toBeVisible();
});

test("capture requested responsive screenshots", async ({ page }) => {
  for (const width of screenshotWidths) {
    await page.setViewportSize({ width, height: width < 768 ? 844 : 900 });
    await page.goto("/solutions/local-ai-agents");
    await page.waitForLoadState("networkidle");
    await page.screenshot({
      path: `test-results/ai-page-${width}px.png`,
      fullPage: true,
    });
  }
});
