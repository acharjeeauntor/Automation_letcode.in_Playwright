import test from "../../lib/BaseTest"
import { expect } from "@playwright/test"

test.describe(`Test Button`, async () => {
    test(`Goto Home and come back here using driver command`, async ({ buttonPage }) => {
        await test.step(`Goto Button page`, async () => {
            await buttonPage.navigateToUrl("/buttons")
        })
        await test.step(`Click Go to Home Button`, async () => {
            await buttonPage.clickGoToHomeBtn()
        })
        await test.step(`Verify home page`, async () => {
            await buttonPage.verifyHomePageByUrl("https://letcode.in/")
        })
        await test.step(`Navigate Back to previous page`, async () => {
            await buttonPage.navigateBackFromHomePage()
        })
    })
    test(`Find the color of the button`, async ({ buttonPage }) => {
        await test.step(`Goto Button page`, async () => {
            await buttonPage.navigateToUrl("/buttons")
        })
        await test.step(`Verify Button BG Color`, async () => {
            let colorCode = await buttonPage.btnBGColor()
            expect(colorCode).toEqual('rgb(138, 77, 118)')
        })
    })
    test(`Confirm button is disabled`, async ({ buttonPage }) => {
        await test.step(`Goto Button page`, async () => {
            await buttonPage.navigateToUrl("/buttons")
        })
        await test.step(`Verify button is disabled`, async () => {
            await buttonPage.verifyBtnDisable()
        })
    })

    test(`Click and Hold Button`, async ({ buttonPage }) => {
        await test.step(`Goto Button page`, async () => {
            await buttonPage.navigateToUrl("/buttons")
        })
        await test.step(`Click and Hold Button`, async () => {
            await buttonPage.clickAndHoldButton()
        })
        await test.step(`Verify Button text after click and hold`, async () => {
            await buttonPage.verifyHoldBtnText(`Button has been long pressed`)
        })
    })
})