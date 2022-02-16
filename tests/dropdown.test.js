const { test, expect } = require('@playwright/test')
const { TestPage } = require("../pages/test.page")
const { Common } = require("../helper/common")
const { DropdownPage, alertPageSelectors } = require("../pages/dropdown.page")

let dropdownPage, testPage, page, common


test.describe("Test Different types of Dropdown ", () => {


    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage()
        await page.goto("./")
        dropdownPage = new DropdownPage(page)
        testPage = new TestPage(page)
        common = new Common(page)

        await testPage.accessDropdownPage()
    })


    //Test Case Execution From Here....................................

    test("Select the apple using visible text", async () => {
      await dropdownPage.selectFruit({label:"Orange"})
    })
})

