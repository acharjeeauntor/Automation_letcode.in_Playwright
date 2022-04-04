import test from "@lib/BaseTest"
import { expect } from "@playwright/test"
import WaitData from "@data/waitData.json"

test.describe(`Test Wait`, async () => {
    test.beforeEach(async ({ waitPage }) => {
        await waitPage.navigateToUrl()
    })
    test(`@Functional Accept the Alert`, async ({ waitPage }) => {
        let msg = await waitPage.getSimpleBtnAlertMsg()
        expect(msg).toBe(WaitData.alertMsg)
    })
})