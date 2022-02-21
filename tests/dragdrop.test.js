const { test, expect } = require("@playwright/test")
const { DragDropPage } = require('../pages/dragdrop.page')
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
        test.setTimeout(120000);
        dragdropPage.dragSrcBox()
        dragdropPage.dropToDstBox()
       
    })
})
