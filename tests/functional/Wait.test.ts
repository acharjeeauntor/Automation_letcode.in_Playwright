import test from "../../lib/BaseTest"
import { expect } from "@playwright/test"
import WaitData from "../../test-data/waitData.json"

test.describe(`Test Wait`, async () => {
    test.beforeEach(async ({ waitPage }) => {
        await waitPage.navigateToUrl("/waits")
    })
    test(`Accept the Alert`, async ({ waitPage }) => {
        let msg = await waitPage.getSimpleBtnAlertMsg()
        expect(msg).toBe(WaitData.alertMsg)
    })
})