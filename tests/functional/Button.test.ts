import test from "@lib/BaseTest"
import { expect } from "@playwright/test"
import ButtonData from "@data/buttonData.json"

test.describe(`Test Button`, async () => {
    test.beforeEach(async({ buttonPage })=>{
        await buttonPage.navigateToUrl()
    })
    test(`@Smoke Goto Home and come back here using driver command`, async ({ buttonPage }) => {
        // await test.step(`Goto Button page`, async () => {
        //     await buttonPage.navigateToUrl("/buttons")
        // })
        await test.step(`Click Go to Home Button`, async () => {
            await buttonPage.clickGoToHomeBtn()
        })
        await test.step(`Verify home page`, async () => {
            await buttonPage.verifyHomePageByUrl(ButtonData.homePageUrl)
        })
        await test.step(`Navigate Back to previous page`, async () => {
            await buttonPage.navigateBackFromHomePage()
        })
    })
    test(`@Functional Find the color of the button`, async ({ buttonPage }) => {
        // await test.step(`Goto Button page`, async () => {
        //     await buttonPage.navigateToUrl("/buttons")
        // })
        await test.step(`Verify Button BG Color`, async () => {
            let colorCode = await buttonPage.btnBGColor()
            expect(colorCode).toEqual(ButtonData.buttonColorCode)
        })
    })
    test(`@Functional Confirm button is disabled`, async ({ buttonPage }) => {
        // await test.step(`Goto Button page`, async () => {
        //     await buttonPage.navigateToUrl("/buttons")
        // })
        await test.step(`Verify button is disabled`, async () => {
           let result= await buttonPage.verifyBtnDisable()
           expect(result).toBe(true)
        })
    })

    test(`@Functional Click and Hold Button`, async ({ buttonPage }) => {
        // await test.step(`Goto Button page`, async () => {
        //     await buttonPage.navigateToUrl("/buttons")
        // })
        await test.step(`Click and Hold Button`, async () => {
            await buttonPage.clickAndHoldButton()
        })
        await test.step(`Verify Button text after click and hold`, async () => {
            await buttonPage.verifyHoldBtnText(ButtonData.buttonLongPressText)
        })
    })
})