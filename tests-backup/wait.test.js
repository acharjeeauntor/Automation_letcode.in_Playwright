const {test,expect} = require("@playwright/test")
const {TestPage} = require('../pages-backup/test.page')
const {WaitPage, waitsPageLocator} = require('../pages-backup/wait.page')

test.describe("Test Explicit wait",async()=>{
    let testPage,waitPage
    test("Wait and Accept the Alert",async({page})=>{
        testPage = new TestPage(page)
        waitPage = new WaitPage(page)

        await page.goto("./")
        await testPage.accessWaitPage()
        page.on("dialog",async(alert)=>{
            console.log(alert.message())
            expect(alert.message()).toBe("Finally I'm here, just to say Hi :)")
            await alert.accept()
        })
        await waitPage.clickSimpleAlertBtn()
        await page.waitForEvent("dialog")
    })
})