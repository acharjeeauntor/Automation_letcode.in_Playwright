import { WebActions } from "../../lib/WebActions";
import { FramePageObjects } from "../objectRepository/FramePageObjects"
import { Page } from "@playwright/test"

let webActions: WebActions
let framePageObjects: FramePageObjects

export class FramePage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
        webActions = new WebActions(this.page)
        framePageObjects = new FramePageObjects()
    }

    async navigateToUrl(url: string): Promise<void> {
        await webActions.navigateToURL(url)
    }
}