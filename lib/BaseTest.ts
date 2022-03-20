import { test as baseTest } from "@playwright/test"
import { ButtonPage } from "../pageFactory/pageRepository/ButtonPage"
import { InputPage } from "../pageFactory/pageRepository/InputPage"
import { DropDownPage } from "../pageFactory/pageRepository/DropDownPage"
import { FramePage } from "../pageFactory/pageRepository/FramePage"
import { AlertPage } from "../pageFactory/pageRepository/AlertPage"
import { WindowsPage } from "../pageFactory/pageRepository/WindowsPage"
import { ElementsPage } from "../pageFactory/pageRepository/ElementsPage"
import { WaitPage } from "../pageFactory/pageRepository/WaitPage"
import { ShadowDomPage } from "../pageFactory/pageRepository/ShadowDomPage"
import { RadioAndCheckboxPage } from "../pageFactory/pageRepository/RadioAndCheckboxPage"
import { FormPage } from "../pageFactory/pageRepository/FormPage"
import { DragAndDropPage } from "../pageFactory/pageRepository/DragAndDropPage"
import { MultiSelectPage } from "../pageFactory/pageRepository/MultiSelectPage"


const test = baseTest.extend<{
    buttonPage: ButtonPage
    inputPage: InputPage
    dropdownPage:DropDownPage
    framePage:FramePage
    alertPage:AlertPage
    windowsPage:WindowsPage
    elementsPage:ElementsPage
    waitPage:WaitPage
    shadowDomPage:ShadowDomPage
    radioAndCheckboxPage:RadioAndCheckboxPage
    formPage:FormPage
    dragAndDropPage:DragAndDropPage
    multiSelectPage:MultiSelectPage


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
    },
    waitPage:async({page},use)=>{
        await use(new WaitPage(page))
    },
    shadowDomPage:async({page},use)=>{
        await use(new ShadowDomPage(page))
    },
    radioAndCheckboxPage:async({page},use)=>{
        await use(new RadioAndCheckboxPage(page))
    },
    formPage:async({page},use)=>{
        await use(new FormPage(page))
    },
    dragAndDropPage:async({page},use)=>{
        await use(new DragAndDropPage(page))
    },
    multiSelectPage:async({page},use)=>{
        await use(new MultiSelectPage(page))
    }
})

export default test