import{test,expect,Page} from "@playwright/test"
import{ButtonPage,buttonPageSelectors} from "../pages/button.page"
import {TestPage,testPageSelectors} from "../pages/test.page"

let buttonPage:ButtonPage, testPage:TestPage
test.describe("Button test", () => {
    test("Test button element", async ({ page }) => {
        buttonPage = new ButtonPage(page)
        testPage = new TestPage(page)

        await page.goto("./")
        await testPage.accessButtonPage()

        // await buttonPage.clickGotoHomeBtnAndGetUrl().then(url=>{
        //     expect(url).toEqual("https://letcode.in/")
        // })
        // expect(await buttonPage.clickGotoHomeBtnAndGetUrl()).toEqual("https://letcode.in/")


        // expect(page.url()).toBe("...")

        

        // await buttonPage.navigateBackFromHomePageAndGetUrl().then(url => {
        //     expect(url).toContain("/buttons")
        // })

        // await buttonPage.getColorCode().then(color => {
        //     console.log(color)
        //     expect(color).toEqual('rgb(138, 77, 118)')
        // })
        // await buttonPage.buttonDisable()


        test.step("Click and Hold",async()=>{
            await buttonPage.clickAndHold()
            
            expect(await buttonPage.getHoldBtnText()).toContain("long pressed")
        })
    })
})
