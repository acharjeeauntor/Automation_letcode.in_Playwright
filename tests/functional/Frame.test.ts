import test from "@lib/BaseTest"
import FrameData from "@data/frameData.json"


test.describe(`Test Frame`, async () => {
    test.beforeEach(async ({ framePage }) => {
        await framePage.navigateToUrl("/frame")
    })

    test(`Enter your Name`, async ({ framePage }) => {
        await framePage.enterName(FrameData.firstName,FrameData.lastName)
    })

    test(`Enter your Email`, async ({ framePage }) => {
        await framePage.enterEmail(FrameData.email)
    })

})