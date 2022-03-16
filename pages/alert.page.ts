import {Page} from "@playwright/test"

export const alertPageSelectors = {
    simpleAlertBtnSelector: '#accept',
    confirmAlertBtnSelector: '#confirm',
    promptAlertBtnSelector: '#prompt',
    promptNameSelector: "#myName",
    modernAlertBtnSelector: '#modern',
}

export class AlertPage {
    readonly page:Page
    constructor(page:Page) {
        this.page = page
    }

    async getSimpleAlertMsg() {
        let alertMsg:any
        this.page.on('dialog', async (dialog) => {
            //console.log(dialog.message())
            alertMsg = dialog.message()
            //console.log(dialog.defaultValue())
            //console.log(dialog.type())
            await dialog.accept()
        })

        const element =  this.page.locator(alertPageSelectors.simpleAlertBtnSelector)
        await element.click()
        return alertMsg

    }

    async getConfirmAlertMsg() {
        let confirmMsg:any
        this.page.on('dialog', async (dialog) => {
            //console.log(dialog.message())
            confirmMsg = dialog.message()
            //console.log(dialog.defaultValue())
            //console.log(dialog.type())
            await dialog.dismiss()
            
        })

        const element =  this.page.locator(alertPageSelectors.confirmAlertBtnSelector)
        await element.click()
        return confirmMsg

    }


    async enterNameInPrompt(name:string) {

        this.page.on('dialog', async (dialog) => {
            await dialog.accept(name)
        })

        const element =  this.page.locator(alertPageSelectors.promptAlertBtnSelector)
        await element.click()
    }

    async getName() {
        const ele = this.page.locator(alertPageSelectors.promptNameSelector)
        var text = await ele.textContent()
        var name = text.split(':')[1]
        return name
    }



}
