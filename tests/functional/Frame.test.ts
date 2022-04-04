import test from "@lib/BaseTest"
import FrameData from "@data/frameData.json"


test.describe(`Test Frame`, async () => {
    test.beforeEach(async ({ framePage }) => {
        await framePage.navigateToUrl()
    })

    test(`@Functional Enter your Name`, async ({ framePage }) => {
        await framePage.enterName(FrameData.firstName,FrameData.lastName)
    })

    test(`@Functional Enter your Email`, async ({ framePage }) => {
        await framePage.enterEmail(FrameData.email)
    })

})