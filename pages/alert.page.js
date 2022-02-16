const { test, expect } = require("@playwright/test")

const alertPageSelectors = {
    simpleAlertBtnSelector: '#accept',
    confirmAlertBtnSelector: '#confirm',
    promptAlertBtnSelector: '#prompt',
    promptNameSelector: "#myName",
    modernAlertBtnSelector: '#modern',
}

class AlertPage {
    constructor(page) {
        this.page = page
    }

    async getSimpleAlertMsg() {
        let alertMsg;
        this.page.on('dialog', async (dialog) => {
            //console.log(dialog.message())
            alertMsg = dialog.message()
            //console.log(dialog.defaultValue())
            //console.log(dialog.type())
            await dialog.accept()
        })

        const element = await this.page.locator(alertPageSelectors.simpleAlertBtnSelector)
        await element.click()
        return alertMsg

    }

    async getConfirmAlertMsg() {
        let confirmMsg;
        this.page.on('dialog', async (dialog) => {
            //console.log(dialog.message())
            confirmMsg = dialog.message()
            //console.log(dialog.defaultValue())
            //console.log(dialog.type())
            await dialog.dismiss()
            
        })

        const element = await this.page.locator(alertPageSelectors.confirmAlertBtnSelector)
        await element.click()
        return confirmMsg

    }


    async enterNameInPrompt(name) {

        this.page.on('dialog', async (dialog) => {
            await dialog.accept(name)
        })

        const element = await this.page.locator(alertPageSelectors.promptAlertBtnSelector)
        await element.click()
    }

    async getName() {
        const ele = await this.page.locator(alertPageSelectors.promptNameSelector)
        var text = await ele.textContent()
        var name = await text.split(':')[1]
        return name
    }



}

module.exports = { AlertPage, alertPageSelectors }