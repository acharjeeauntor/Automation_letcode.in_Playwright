import{test,expect,Page} from "@playwright/test"
import{AlertPage,alertPageSelectors} from "../pages/alert.page"
import {TestPage,testPageSelectors} from "../pages/test.page"
import AlertData from "../projectVariables/alertData.json"


let alertPage:AlertPage, testPage:TestPage, page:Page


test.describe("Test Different types of Alert ", () => {


    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage()
        await page.goto("./")
        alertPage = new AlertPage(page)
        testPage = new TestPage(page)

        await testPage.accessAlertPage()
    })


    //Test Case Execution From Here....................................

    test("Accept the Alert", async () => {
        expect(await alertPage.getSimpleAlertMsg()).toBe(AlertData.simpleAlertMsg)
    })

    test("Dismiss the Alert & print the alert text", async () => {
        expect.soft(await alertPage.getConfirmAlertMsg(),"This issue is known limitaion").toBe(AlertData.confirmAlertMsg)
    })

    test("Type your name & accept", async () => {
      await alertPage.enterNameInPrompt(AlertData.name)
      expect(await alertPage.getName()).toContain(AlertData.name)
    })
})

