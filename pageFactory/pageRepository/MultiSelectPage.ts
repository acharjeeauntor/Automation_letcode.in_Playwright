import { Page } from "@playwright/test"
import { WebActions } from "@lib/WebActions"
import { MultiSelectPageObjects } from "@objects/MultiSelectPageObjects"

let webActions: WebActions
let multiSelectPageObjects: MultiSelectPageObjects

export class MultiSelectPage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
        webActions = new WebActions(this.page)
        multiSelectPageObjects = new MultiSelectPageObjects()
    }
    async navigateToUrl(): Promise<void> {
        await webActions.navigateToURL("/selectable")
    }

    async selectItem(): Promise<void> {
        // Click text=Selenium
        await this.page.locator(multiSelectPageObjects.Selenium_Element_Selector).click({
            modifiers: ['Control']
        });
        // Click text=Protractor
        await this.page.locator(multiSelectPageObjects.Protractor_Element_Selector).click({
            modifiers: ['Control']
        });
        // Click text=Postman
        await this.page.locator(multiSelectPageObjects.Postman_Element_Selector).click({
            modifiers: ['Control']
        });
    }

}