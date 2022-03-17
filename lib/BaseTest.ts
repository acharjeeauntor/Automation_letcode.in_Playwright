import { test as baseTest } from "@playwright/test"
import { ButtonPage } from "../pageFactory/pageRepository/ButtonPage"

const test = baseTest.extend<{
    buttonPage: ButtonPage
}>({
    buttonPage: async ({ page }, use) => {
        await use(new ButtonPage(page))
    }
})

export default test