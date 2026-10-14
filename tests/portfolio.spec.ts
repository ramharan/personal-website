import { test, expect } from "@playwright/test";
test("profile, navigation and contact remain usable", async ({
  page,
}, testInfo) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "A clear perspective",
  );
  const portrait = page.getByRole("img", { name: "Hariharan Ramachandran wearing a blue suit" });
  await expect(portrait).toBeVisible();
  await expect.poll(() => portrait.evaluate((el) => (el as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
  await expect(page.locator('link[rel="icon"][href="/hariharan-icon.png"]')).toHaveCount(1);
  const iconResponse = await page.request.get("/hariharan-icon.png");
  expect(iconResponse.status()).toBe(200);
  expect(iconResponse.headers()["content-type"]).toContain("image/png");
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  if (testInfo.project.name === "mobile") await page.getByRole("button", { name: "Menu +" }).click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Expertise" })
    .click();
  await expect(page).toHaveURL(/#expertise$/);
  await expect(page.locator("#expertise")).toBeInViewport();
  await expect(
    page.getByRole("link", { name: "hari@hariharan.biz" }),
  ).toHaveAttribute("href", "mailto:hari@hariharan.biz");
  await expect(
    page.getByRole("link", { name: "+91 73580 65999" }),
  ).toHaveAttribute("href", "tel:+917358065999");
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#main$/);
  await page.screenshot({
    path: `test-results/${testInfo.project.name}-full.png`,
    fullPage: true,
  });
  expect(errors).toEqual([]);
});
test("reduced motion and missing routes", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  expect(
    await page
      .locator("html")
      .evaluate((el) => getComputedStyle(el).scrollBehavior),
  ).toBe("auto");
  const response = await page.goto("/not-a-page");
  expect(response?.status()).toBe(404);
});


test("automatic motion settles and live reduced motion cancels effects", async ({ page }, testInfo) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  await page.waitForTimeout(4500);
  expect(await page.evaluate(() => document.getAnimations().every(a => a.playState !== "running"))).toBe(true);
  if (testInfo.project.name === "desktop") {
    await page.getByRole("button", {name:"Rotate perspective"}).click();
    await expect.poll(() => page.locator(".sculpture").evaluate(el => (el as HTMLElement).style.transform)).toContain("rotateY");
    await page.emulateMedia({ reducedMotion: "reduce" });
    await expect.poll(() => page.locator(".sculpture").evaluate(el => getComputedStyle(el).transform)).toBe("none");
  }
});

test("core biography and contact work without JavaScript", async ({ browser }, testInfo) => {
  const context = await browser.newContext({ javaScriptEnabled: false,
    viewport: testInfo.project.name === "mobile" ? { width: 320, height: 844 } : { width: 1440, height: 1000 } });
  const page = await context.newPage();
  await page.goto(String(testInfo.project.use.baseURL));
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await page.getByRole("navigation").getByRole("link", { name: "Experience" }).click();
  await expect(page.locator("#experience")).toBeInViewport();
  await expect(page.getByRole("link", { name: "hari@hariharan.biz" })).toHaveAttribute("href", "mailto:hari@hariharan.biz");
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await context.close();
});

 test("mobile menu closes with Escape and returns focus",async({page},info)=>{if(info.project.name!=="mobile")return;await page.goto("/");const toggle=page.getByRole("button",{name:"Menu +"});await toggle.click();await page.getByRole("navigation").getByRole("link",{name:"About",exact:true}).focus();await page.keyboard.press("Escape");await expect(toggle).toBeFocused();await expect(toggle).toHaveAttribute("aria-expanded","false");});
