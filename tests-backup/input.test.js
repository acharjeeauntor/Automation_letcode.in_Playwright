const { test, expect } = require("@playwright/test")
const { InputPage } = require('../pages/input.page')
const { TestPage } = require("../pages/test.page")
const InputData = require("../projectVariables/inputData.json")

let inputPage, testPage, page

test.describe("Input test", () => {

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage()
        await page.goto("./")
       
        inputPage = new InputPage(page)
        testPage = new TestPage(page)

        await testPage.accessInputFields()

    })


    test("Verify input page", async () => {
        expect(await inputPage.getInputFieldsPageLink()).toContain(InputData.url)
    })

    test("Verify Enter your full Name section", async () => {
        await inputPage.enterFullName(InputData.fullname)
    })

    test("Verify Append a text and press keyboard tab section", async () => {
        await inputPage.appendTextAndKeyboardTab(InputData.appendText)
    })

    test("Verify What is inside the text box section", async () => {
        expect(await inputPage.getValueFromInsideTextBox()).toBe(InputData.valueFromInsideTextBox)
    })

    test("Verify Clear the text section", async () => {
        await inputPage.clearInputText()
    })

})
