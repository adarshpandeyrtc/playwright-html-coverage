import { test } from './baseFixtures';

test.beforeEach(async ({ page }) => {
  await page.goto("/about")
})

test('use Yellow as a background color in about', async ( {page }) => {
    await page.click("text=Yellow")
    await page.waitForSelector("text=#f1c40f")
  })