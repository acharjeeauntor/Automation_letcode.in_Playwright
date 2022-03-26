import { Page, expect } from "@playwright/test"
import { WebActions } from "@lib/WebActions"
import { ButtonPageObjects } from "@objects/ButtonPageObjects"

let webActions: WebActions
let buttonPageObjects: ButtonPageObjects

export class ButtonPage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
        webActions = new WebActions(this.page)
        buttonPageObjects = new ButtonPageObjects()
    }

    async navigateToUrl(): Promise<void> {
        await webActions.navigateToURL("/buttons")
    }

    async clickGoToHomeBtn(): Promise<void> {
        await webActions.clickElement(buttonPageObjects.Home_Btn_ID)
    }

    async verifyHomePageByUrl(url: string): Promise<void> {
        await webActions.verifyByUrl(url)
    }
    async navigateBackFromHomePage() {
        this.page.goBack()
    }
    async btnBGColor(): Promise<string> {
        return await webActions.getBGColorCode(buttonPageObjects.Color_Btn_ID)
    }
    async verifyBtnDisable(): Promise<boolean> {
        return await this.page.locator(buttonPageObjects.Disable_Btn_Selector).isDisabled()

    }
    async clickAndHoldButton(): Promise<void> {
        await webActions.clickAndHoldElement(buttonPageObjects.Hold_Btn_Selector)
    }
    async verifyHoldBtnText(text: string): Promise<void> {
        await webActions.verifyElementContainsText(buttonPageObjects.Hold_Btn_Text, text)
    }

}