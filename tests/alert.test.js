const { test, expect } = require('@playwright/test')
const { TestPage } = require("../pages/test.page")
const { Common } = require("../helper/common")
const { AlertPage, alertPageSelectors } = require("../pages/alert.page")
const AlertData = require('../projectVariables/alertData.json')

let alertPage, testPage, page, common
test.describe("Test Different types of Alert ", () => {
    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage()
        await page.goto("./")
        alertPage = new AlertPage(page)
        testPage = new TestPage(page)
        common = new Common(page)

        await testPage.accessAlertPage()
    })


    //Test Case Execution From Here....................................

    test("Test Simple Alert Message", async () => {
        expect(await alertPage.getSimpleAlertMsg()).toBe(AlertData.simpleAlertMsg)
    })
})

