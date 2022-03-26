import { Page } from "@playwright/test"
import { WebActions } from "@lib/WebActions"
import { WindowsPageObjects } from "@objects/WindowsPageObjects"

let webActions: WebActions
let windowsPageObjects: WindowsPageObjects
export class WindowsPage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
        webActions = new WebActions(this.page)
        windowsPageObjects = new WindowsPageObjects()
    }

    async navigateToUrl(): Promise<void> {
        await webActions.navigateToURL("/windows")
    }
    async clickOpenHomePageBtn() {
        await webActions.clickElement(windowsPageObjects.Open_Home_Page_Btn_ID)
    }
    async clickMultipleWindowsBtn() {
        await webActions.clickElement(windowsPageObjects.Multi_Page_Btn_ID)
    }
}