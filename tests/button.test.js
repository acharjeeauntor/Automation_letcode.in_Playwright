const { test, expect } = require("@playwright/test")
const { ButtonPage } = require('../pages/button.page')
const { TestPage } = require("../pages/test.page")
//const InputData = require("../projectVariables/inputData.json")

let buttonPage, testPage
test.describe("Button test", () => {
    test("Test button element", async ({ page }) => {
        buttonPage = new ButtonPage(page)
        testPage = new TestPage(page)

        await page.goto("./")
        await testPage.accessButtonPage()
        



        // await buttonPage.clickGotoHomeBtnAndGetUrl().then(url=>{
        //     expect(url).toEqual("https://letcode.in/")
        // })
        expect(await buttonPage.clickGotoHomeBtnAndGetUrl()).toEqual("https://letcode.in/")


        expect(page.url()).toBe("...")

        

        await buttonPage.navigateBackFromHomePageAndGetUrl().then(url => {
            expect(url).toContain("/buttons")
        })

        await buttonPage.getColorCode().then(color => {
            console.log(color)
            expect(color).toEqual('rgb(138, 77, 118)')
        })
        await buttonPage.buttonDisable()

    })
})
