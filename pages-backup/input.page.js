const { test, expect } = require("@playwright/test")

const inputPageSelectors = {
    fullNameInputSelector: "#fullName",
    keyboardTabInputSelector: "#join",
    insideTextBoxInputSelector: "#getMe",
    clearTextInputSelector: "#clearMe",
    readonlyInputSelector: "#dontwrite"
}


class InputPage {
    constructor(page) {
        this.page = page
    }

    async getInputFieldsPageLink() {
        return await this.page.url()
    }

    async enterFullName(name) {
        await this.page.type(inputPageSelectors.fullNameInputSelector, name)
    }

    async appendTextAndKeyboardTab(text) {
        try{
            const ele = await this.page.locator(inputPageSelectors.keyboardTabInputSelector)
            await ele.focus()
            await this.page.keyboard.press('End')
            await ele.type(text)
        }catch{
            console.log("Somthing wrong in InputPage")
        }

    }


    async getValueFromInsideTextBox() {
        return await this.page.getAttribute(inputPageSelectors.insideTextBoxInputSelector, 'value')
    }


    async clearInputText() {
        await this.page.fill(inputPageSelectors.clearTextInputSelector, "")
    }

}

module.exports = { InputPage, inputPageSelectors }