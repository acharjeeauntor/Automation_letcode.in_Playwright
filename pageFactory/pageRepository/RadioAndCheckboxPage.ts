import { Page, PageScreenshotOptions } from "@playwright/test"
import { WebActions } from "@lib/WebActions"
import { RadioAndCheckboxPageObjects } from "@objects/RadioAndCheckboxPageObjects"

let webActions: WebActions
let radioAndCheckboxPageObjects: RadioAndCheckboxPageObjects

export class RadioAndCheckboxPage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
        webActions = new WebActions(this.page)
        radioAndCheckboxPageObjects = new RadioAndCheckboxPageObjects()
    }
    async navigateToUrl(): Promise<void> {
        await webActions.navigateToURL("/radio")
    }

    async checkYesInSelectAnyOne(){
        await webActions.checkElement(radioAndCheckboxPageObjects.Select_Any_One_Yes_ID)
    }
    async checkNoInSelectOnlyOne(){
        await webActions.checkElement(radioAndCheckboxPageObjects.Select_Only_One_No_ID)
    }
    async checkYesInFindBug(){
        await webActions.checkElement(radioAndCheckboxPageObjects.Select_Find_Bug_Yes_ID)
    }
    async isBarIsSelected(){
        await this.page.isChecked(radioAndCheckboxPageObjects.Select_Bar_ID)
    }
    async isMaybeIsDisabled(){
        await this.page.isDisabled(radioAndCheckboxPageObjects.Select_Maybe_ID)
    }
    async isRememberMeIsChecked(){
        await this.page.isChecked(radioAndCheckboxPageObjects.Select_Remember_Me_Text_Selector)
    }
    async checkIAgreeToThe(){
        await webActions.checkElement(radioAndCheckboxPageObjects.Select_I_agree_to_the_Text_Selector)
    }
}