import test from "@lib/BaseTest"
import InputData from "@data/inputData.json"

test.describe(`Test Input`, async () => {
    test.beforeEach(async ({ inputPage }) => {
        await inputPage.navigateToUrl()
    })

    test(`@Functional Enter your full Name`, async ({ inputPage }) => {
        await inputPage.enterFullName(InputData.fullName)
    })
    test(`@Functional Append a text and press keyboard tab`, async ({ inputPage }) => {
        await inputPage.appendTextAndKeyboardTab(InputData.appendText)
    })
    test(`@Functional What is inside the text box`, async ({ inputPage }) => {
        await inputPage.verifyTextBoxValue(InputData.textBoxValue)
    })
    test(`@Functional Clear the text`, async ({ inputPage }) => {
        await inputPage.clearInputField()
    })

})

