const {test,expect} = require('@playwright/test')
const {TestPage} = require('../pages/test.page')
const {shadowDomPageSelector,ShadowDomPage} = require('../pages/shadowDom.page')

test.describe("Shadow Dom",async()=>{

    let testPage,shadowDomPage
    test("Enter First Name in Shadow DOM",async({page})=>{
        shadowDomPage = new ShadowDomPage(page)
        testPage = new TestPage(page)

       await page.goto("./")
       await testPage.accessShadowDomPage()
       await shadowDomPage.enterFirstName("Auntor")
       await page.waitForTimeout(10000)

    })
})