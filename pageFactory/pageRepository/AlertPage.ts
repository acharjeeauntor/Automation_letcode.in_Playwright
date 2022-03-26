import { Page } from "@playwright/test"
import { WebActions } from "@lib/WebActions"
import { AlertPageObjects } from "@objects/AlertPageObjects"

let webActions: WebActions
let alertPageObjects: AlertPageObjects

export class AlertPage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
        webActions = new WebActions(this.page)
        alertPageObjects = new AlertPageObjects()
    }

    async navigateToUrl(): Promise<void> {
        await webActions.navigateToURL("/alert")
    }

    async getSimpleAlertMsg(): Promise<string> {
        let alertMsg: string
        try {
            this.page.on('dialog', async (dialog) => {
                //console.log(dialog.message())
                alertMsg = dialog.message()
                //console.log(dialog.defaultValue())
                //console.log(dialog.type())
                await dialog.accept()
            })

            await webActions.clickElement(alertPageObjects.Simple_Alert_Btn_ID)
            return alertMsg
        } catch {
            console.log(`Somting Wrong in getSimpleAlertMsg() Function`)
        }
    }

    async getConfirmAlertMsg(): Promise<string> {
        let confirmMsg: string
        try {
            this.page.on('dialog', async (dialog) => {
                //console.log(dialog.message())
                confirmMsg = dialog.message()
                //console.log(dialog.defaultValue())
                //console.log(dialog.type())
                await dialog.dismiss()

            })

            await webActions.clickElement(alertPageObjects.Confirm_Alert_Btn_ID)
            return confirmMsg
        } catch {
            console.log(`Somting Wrong in getConfirmAlertMsg() Function`)
        }


    }
    async enterNameInPrompt(name: string) {
        this.page.on('dialog', async (dialog) => {
            await dialog.accept(name)
        })
        await webActions.clickElement(alertPageObjects.Prompt_Alert_Btn_ID)
    }

    async verifyNameInPrompt(name: string) {
        await webActions.verifyElementContainsText(alertPageObjects.Prompt_Name_ID, name)
    }


}