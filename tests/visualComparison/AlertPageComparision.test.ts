import test from "@lib/BaseTest"
import { expect } from '@playwright/test'
test("@Visual Test Visiual Comperision for Alert Page", async ({ page, alertPage }) => {
    alertPage.navigateToUrl()
    await page.waitForTimeout(10000)
    expect(await page.screenshot({scale:"device"})).toMatchSnapshot("alertPage.png")
})
