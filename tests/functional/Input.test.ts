import test from "../../lib/BaseTest"
import { expect } from "@playwright/test"
import InputData from "../../test-data/inputData.json"


test.describe(`Test Input`, async () => {
    test.beforeEach(async ({ inputPage }) => {
        await inputPage.navigateToUrl("/edit")
    })

    test(`Enter your full Name`, async ({ inputPage }) => {
        await inputPage.enterFullName(InputData.fullName)
    })
    test(`Append a text and press keyboard tab`, async ({ inputPage }) => {
        await inputPage.appendTextAndKeyboardTab(InputData.appendText)
    })
    test.only(`What is inside the text box`, async ({ inputPage }) => {
    await inputPage.verifyTextBoxValue(InputData.textBoxValue)
    })
    test(`Clear the text`, async ({ inputPage }) => {
        await inputPage.clearInputField()
    })

})