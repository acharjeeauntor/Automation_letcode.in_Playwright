import { Page } from "@playwright/test"
import { WebActions } from "@lib/WebActions"
import { WaitPageObjects } from "@objects/WaitPageObjects"

let webActions: WebActions
let waitPageObjects: WaitPageObjects

export class WaitPage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
        webActions = new WebActions(this.page)
        waitPageObjects = new WaitPageObjects()
    }
    async navigateToUrl(): Promise<void> {
        await webActions.navigateToURL("/waits")
    }

    async getSimpleBtnAlertMsg(): Promise<string> {
        let alertMsg: string
        try {
            this.page.on("dialog", async (alert) => {
                alertMsg = alert.message()
                await alert.accept()
            })
            await webActions.clickElement(waitPageObjects.Alert_Btn_ID)
            await this.page.waitForEvent("dialog")
            return alertMsg
        } catch {
            console.log(`Somting Wrong in getSimpleAlertMsg() Function`)
        }
    }

}