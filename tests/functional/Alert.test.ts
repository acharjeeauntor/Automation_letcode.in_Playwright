import test from "@lib/BaseTest"
import { expect } from "@playwright/test"
import AlertData from "@data/alertData.json"

test.describe(`Test Alert`, async () => {
    test.beforeEach(async ({ alertPage }) => {
        await alertPage.navigateToUrl()
    })

    test(`@Smoke Accept the Alert`, async ({ alertPage }) => {
        let msg = await alertPage.getSimpleAlertMsg()
        expect(msg).toBe(AlertData.simpleAlertMsg)
    })

    test(`@Functional Dismiss the Alert & print the alert text`, async ({ alertPage }) => {
        let msg = await alertPage.getConfirmAlertMsg()
        expect(msg).toBe(AlertData.confirmAlertMsg)
    })
    test(`@Functional Type your name & accept`, async ({ alertPage }) => {
       await alertPage.enterNameInPrompt(AlertData.name)
       await alertPage.verifyNameInPrompt(AlertData.name)
       
    })


})