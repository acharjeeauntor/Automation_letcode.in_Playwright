import { test as baseTest } from "@playwright/test"
import { ButtonPage } from "../pageFactory/pageRepository/ButtonPage"
import { InputPage } from "../pageFactory/pageRepository/InputPage"
import { DropDownPage } from "../pageFactory/pageRepository/DropDownPage"
import { FramePage } from "../pageFactory/pageRepository/FramePage"
import { AlertPage } from "../pageFactory/pageRepository/AlertPage"
import { WindowsPage } from "../pageFactory/pageRepository/WindowsPage"
import { ElementsPage } from "../pageFactory/pageRepository/ElementsPage"


const test = baseTest.extend<{
    buttonPage: ButtonPage
    inputPage: InputPage
    dropdownPage:DropDownPage
    framePage:FramePage
    alertPage:AlertPage
    windowsPage:WindowsPage
    elementsPage:ElementsPage

}>({
    buttonPage: async ({ page }, use) => {
        await use(new ButtonPage(page))
    },
    inputPage: async ({ page }, use) => {
        await use(new InputPage(page))
    },
    dropdownPage: async ({ page }, use) => {
        await use(new DropDownPage(page))
    },
    framePage: async ({ page }, use) => {
        await use(new FramePage(page))
    },
    alertPage: async ({ page }, use) => {
        await use(new AlertPage(page))
    },
    windowsPage:async({page},use)=>{
        await use(new WindowsPage(page))
    },
    elementsPage:async({page},use)=>{
        await use(new ElementsPage(page))
    }
})

export default test