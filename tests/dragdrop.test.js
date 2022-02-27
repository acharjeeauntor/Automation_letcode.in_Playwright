const { test, expect } = require("@playwright/test")
const { DragDropPage,dragdropPageSelector } = require('../pages/dragdrop.page')
const { TestPage } = require("../pages/test.page")
//const InputData = require("../projectVariables/inputData.json")

let dragdropPage, testPage
test.describe("Drag Drop test", () => {

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage()
        await page.goto("./")
        dragdropPage = new DragDropPage(page)
        testPage = new TestPage(page)

        await testPage.accessDragDropPage()
    })

    test("Test Drag-Drop element", async () => {
        
        //await dragdropPage.dragSrcBox()
        // await dragdropPage.dropToDstBox()

        // await this.page.waitForSelector(dragdropPageSelector.srcBoxSelector)
        // await this.page.waitForSelector(dragdropPageSelector.dstBoxSelector)
        const src = await page.locator(dragdropPageSelector.srcBoxSelector)
        const dst = await page.locator(dragdropPageSelector.dstBoxSelector)
        const srcBound = await src.boundingBox()
        const dstBound = await dst.boundingBox()
        await page.mouse.move(srcBound.x + srcBound.width / 2, srcBound.y + srcBound.height / 2)
        await page.mouse.down()
        await page.mouse.move(dstBound.x + dstBound.width / 2, dstBound.y + dstBound.height / 2)
        await page.mouse.down()


        await page.waitForTimeout(10000)
       
    })
})
