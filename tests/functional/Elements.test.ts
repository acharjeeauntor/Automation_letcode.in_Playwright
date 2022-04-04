import test from "@lib/BaseTest"
import { expect } from "@playwright/test"
import ElementData from "@data/elementData.json"

test.describe(`Test Elementes`, async () => {
    test.beforeEach(async ({ elementsPage }) => {
        await elementsPage.navigateToUrl()
    })
    test(`@Functional Find Git repos & user information`, async ({ elementsPage }) => {
        await test.step(`Type and Enter your Git username`, async () => {
            await elementsPage.enterGitUsername(ElementData.username)
        })
        await test.step(`Assert that user has image`, async () => {
            expect(await elementsPage.userImageSelector()).toBeVisible()
        })
        await test.step(`Print the user name & other informations`, async () => {
            await elementsPage.getUserInfo()
        })
        await test.step(`Assert that no.of public repositories are listed correctly`, async () => {
            // Example of Soft assertion & Custom expect Message
            expect.soft(await elementsPage.getTotalRepos(),"Custom expect Message: Total 30 Repo should be shown").toBe(ElementData.totalrepo)
            console.log("Total 30 repo need to show")

        })




    })
})