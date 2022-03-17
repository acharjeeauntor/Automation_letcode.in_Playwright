const { test, expect } = require("@playwright/test")
const { ElementsPage, elementsPageSelector } = require('../pages/elements.page')
const { TestPage } = require("../pages/test.page")
const ElementData = require("../projectVariables/elementData.json")


let testPage, elementsPage, page
test.describe("Elements test", async () => {

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage()
        await page.goto("./")
        elementsPage = new ElementsPage(page)
        testPage = new TestPage(page)

        await testPage.accessElementPage()
    })

    test("Find Git repos & user information", async () => {
        await elementsPage.enterGitUsername(ElementData.username)
        expect (await elementsPage.userImageSelector()).toBeVisible()
        await elementsPage.getUserInfo()
      expect(await elementsPage.getTotalRepos()).toBe(ElementData.totalrepo)
        
    })



})