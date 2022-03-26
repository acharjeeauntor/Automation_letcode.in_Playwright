import { test as baseTest } from "@playwright/test"
import { ButtonPage } from "@pages/ButtonPage"
import { InputPage } from "@pages/InputPage"
import { DropDownPage } from "@pages/DropDownPage"
import { FramePage } from "@pages/FramePage"
import { AlertPage } from "@pages/AlertPage"
import { WindowsPage } from "@pages/WindowsPage"
import { ElementsPage } from "@pages/ElementsPage"
import { WaitPage } from "@pages/WaitPage"
import { ShadowDomPage } from "@pages/ShadowDomPage"
import { RadioAndCheckboxPage } from "@pages/RadioAndCheckboxPage"
import { FormPage } from "@pages/FormPage"
import { DragAndDropPage } from "@pages/DragAndDropPage"
import { MultiSelectPage } from "@pages/MultiSelectPage"


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