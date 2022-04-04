import test from "@lib/BaseTest"
import { expect } from '@playwright/test'
test("@Visual Test Visiual Comperision for Input Page", async ({ page, inputPage }) => {
    inputPage.navigateToUrl()
    await page.waitForTimeout(10000)
    expect(await page.screenshot()).toMatchSnapshot("inputPage.png")
})
