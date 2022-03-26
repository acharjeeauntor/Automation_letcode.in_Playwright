import { Page, expect } from "@playwright/test"
import { WebActions } from "@lib/WebActions"
import { InputPageObjects } from "@objects/InputPageObjects"

let webActions: WebActions
let inputPageObjects: InputPageObjects

export class InputPage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
        webActions = new WebActions(this.page)
        inputPageObjects = new InputPageObjects()
    }
    async navigateToUrl(): Promise<void> {
        await webActions.navigateToURL("/edit")
    }
    async enterFullName(name: string):Promise<void> {
        await webActions.enterElementText(inputPageObjects.Full_Name_Input_ID, name)
    }

    async clearInputField():Promise<void> {
        await webActions.clearInputField(inputPageObjects.Clear_Text_Input_ID)
    }
    async appendTextAndKeyboardTab(text:string):Promise<void> {
        try{
            webActions.waitForElementAttached(inputPageObjects.Keyboard_Tab_Input_ID)
            const ele = this.page.locator(inputPageObjects.Keyboard_Tab_Input_ID)
            await ele.focus()
            await this.page.keyboard.press('End')
            await ele.type(` ${text}`)
        }catch{
            console.log("Somthing wrong in InputPage")
        }

    }
    async verifyTextBoxValue(text:string):Promise<void> {
        await webActions.verifyElementAttribute(inputPageObjects.Inside_TextBox_Input_ID, 'value',text)
    }
}