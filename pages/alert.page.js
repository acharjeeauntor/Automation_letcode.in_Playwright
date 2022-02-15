const { test, expect } = require("@playwright/test")

const alertPageSelectors = {
    simpleAlertBtnSelector: '#accept',
    confirmAlertBtnSelector: '#confirm',
    promptAlertBtnSelector: '#prompt',
    modernAlertBtnSelector: '#modern',
}

class AlertPage {
    constructor(page) {
        this.page = page
    }

    async getSimpleAlertMsg() {
        let msg;
        const element = await this.page.locator(alertPageSelectors.simpleAlertBtnSelector)

        this.page.on('dialog', (dialog) => {
            //console.log(dialog.message())
            msg = dialog.message()
            //console.log(dialog.defaultValue())
            //console.log(dialog.type())
            dialog.accept()
        })
        await element.click()
        return msg
    }

}

module.exports = { AlertPage, alertPageSelectors }