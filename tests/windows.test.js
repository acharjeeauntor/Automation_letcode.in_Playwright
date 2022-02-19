const { test, expect } = require("@playwright/test")
const { WindowsPage, windowsPageSelector } = require('../pages/windows.page')
const { TestPage } = require("../pages/test.page")


let windowsPage, testPage

test.describe("Single and Multiple Window Handle", async () => {
    // test.beforeAll(async ({ browser }) => {
    //     page = await browser.newPage()
    //    // context = await browser.newContext()
    //     await page.goto("./")
    //     //await page.goto('https://letcode.in/windows')

    //     windowsPage = new WindowsPage(page)
    //     testPage = new TestPage(page)

    //     await testPage.accessWindowsPage()
    // })

    test("single Page/ window handle", async ({ page, context }) => {
        await page.goto("./")

        windowsPage = new WindowsPage(page)
        testPage = new TestPage(page)

        await testPage.accessWindowsPage()

        const [newWindow] = await Promise.all([
            context.waitForEvent('page'),
            await windowsPage.clickOpenHomePage()

        ])
        console.log(newWindow.url())
        await newWindow.waitForLoadState()
        expect(newWindow.url()).toContain("test")
        await testPage.clickSignInBtn(newWindow)
        //await newWindow.waitForNavigation()
        expect(newWindow.url()).toContain("signin")
        await page.bringToFront()
        await testPage.clickWorkSpace()
        expect(page.url()).toContain("test")
        await newWindow.bringToFront()
        await newWindow.close()
    })

    test("Multiple Page/ window handle", async ({ page, context }) => {
        await page.goto("./")

        windowsPage = new WindowsPage(page)
        testPage = new TestPage(page)

        await testPage.accessWindowsPage()

        const [multiWindow] = await Promise.all([
            context.waitForEvent('page'),
            await windowsPage.clickMultiWindows()

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


