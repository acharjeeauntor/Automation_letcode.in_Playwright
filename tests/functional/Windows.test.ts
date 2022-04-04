import test from "@lib/BaseTest"
import { expect } from "@playwright/test"

test.describe(`Test Windows`, async () => {
    test.beforeEach(async ({ windowsPage }) => {
        await windowsPage.navigateToUrl()
    })
    test(`@Functional Goto Home`, async ({ windowsPage,context}) => {
       
        const [newWindow] = await Promise.all([
            context.waitForEvent('page'),
            await windowsPage.clickOpenHomePageBtn()

        ])
        await newWindow.waitForLoadState()
        expect(newWindow.url()).toContain("test")
        await newWindow.bringToFront()
        await newWindow.close()

    })
    test(`@Functional Open muiltple windows`, async ({ windowsPage,context}) => {
       
        const [multiWindow] = await Promise.all([
            context.waitForEvent('page'),
            await windowsPage.clickMultipleWindowsBtn()

        ])
        await multiWindow.waitForLoadState()
        const allWindows = multiWindow.context().pages()
        console.log("Total Window: " + allWindows.length)
        allWindows.forEach(page => {
            console.log(page.url())
        })

        allWindows[0].bringToFront()
        expect(allWindows[0].url()).toContain("windows")
        allWindows[0].close()

        allWindows[1].bringToFront()
        expect(allWindows[1].url()).toContain("alert")
        allWindows[1].close()

        allWindows[2].bringToFront()
        expect(allWindows[2].url()).toContain("dropdown")

    })
})