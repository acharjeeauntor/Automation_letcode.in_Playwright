import { Page } from "@playwright/test"
import { WebActions } from "@lib/WebActions"
import { DragAndDropPageObjects } from "@objects/DragAndDropPageObjects"

let webActions: WebActions
let dragAndDropPageObjects: DragAndDropPageObjects

export class DragAndDropPage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
        webActions = new WebActions(this.page)
        dragAndDropPageObjects = new DragAndDropPageObjects()
    }

    async navigateToUrl(): Promise<void> {
        await webActions.navigateToURL("/dropable")
    }

    async dragAndDropBox(): Promise<void> {
        await webActions.dragAndDrop(dragAndDropPageObjects.Source_Box_ID, dragAndDropPageObjects.Target_Box_ID)
    }

    async getTargetBoxText(): Promise<string> {
         let result = await this.page.locator(dragAndDropPageObjects.Target_Box_Text_Selector).innerText()
         return result
    }
}