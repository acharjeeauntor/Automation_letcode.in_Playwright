const { test, expect } = require("@playwright/test")
const { FramePage, framePageSelector } = require('../pages/frame.page')
const { TestPage } = require("../pages/test.page")
const FrameData = require("../projectVariables/frameData.json")


let testPage, framePage, page
test.describe("Frame", async () => {

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage()
        await page.goto("./")
        framePage = new FramePage(page)
        testPage = new TestPage(page)

        await testPage.accessFramePage()
    })

    test("Test Frame", async () => {
        await page.waitForLoadState()
        const firstFrame = page.frame({ name: framePageSelector.firstFrameName })
        if (firstFrame !== null) {
            await framePage.enterFirstName(firstFrame,FrameData.firstName)
            await framePage.enterLastName(firstFrame, FrameData.lastName)

            // innerframe
            const frames = firstFrame.childFrames()
            if (frames !== null) {
                console.log(frames.length)
                await framePage.enterEmail(frames[0],FrameData.email)

            } else throw new Error("No such frame")

            // Back To Parent Frame / First Frame
            const parentFrame = frames[0].parentFrame()
            if (parentFrame !== null) {
                await framePage.enterFirstName(parentFrame,FrameData.updatedName)
                await framePage.enterLastName(parentFrame, FrameData.lastName)
            }

        } else throw new Error("No such frame")

    })
})



