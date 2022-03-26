import { Page } from "@playwright/test"
import { DropDownPageObjects } from "@objects/DropDownPageObjects"
import { WebActions } from "@lib/WebActions"

let webActions: WebActions
let dropDownPageObjects: DropDownPageObjects
export class DropDownPage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
        webActions = new WebActions(this.page)
        dropDownPageObjects = new DropDownPageObjects()
    }

    async navigateToUrl(): Promise<void> {
        await webActions.navigateToURL("/dropdowns")
    }

    async selectApple(fruit: string): Promise<void> {
        await webActions.selectDropDownByLabel(dropDownPageObjects.Fruits_Dropdown_ID, fruit)
    }
    async verifyFruitSelection(fruit: string): Promise<void> {
        await webActions.verifyElementContainsText(dropDownPageObjects.Selected_OptionText_Selector, fruit)
    }
    async selectSuperHero(value: string): Promise<void> {
        await webActions.selectDropDownByValue(dropDownPageObjects.Hero_DropDown_ID, value)
    }
    async verifyHeroSelection(name: string): Promise<void> {
        await webActions.verifyElementContainsText(dropDownPageObjects.Selected_OptionText_Selector, name)
    }

    async printAllLangOptions(): Promise<string> {
        try {
            const lang = await this.page.$$(dropDownPageObjects.Language_Option_Selector_ID)
            const len = lang.length
            for (var i = 0; i < len; i++) {
                console.log(await this.page.locator(dropDownPageObjects.Language_Option_Selector_ID).nth(i).textContent())
                if (i === len - 1) {
                    const ele = this.page.locator(dropDownPageObjects.Language_Dropdown_ID)
                    await ele.selectOption({ index: len - 1 })
                    return this.page.locator(dropDownPageObjects.Language_Option_Selector_ID).nth(len - 1).textContent()
                }
            }
        } catch {
            console.log("Somthing Wrong in printAllLangOptions() function ")
        }

    }

    async verifyLanguageSelection(lan: string): Promise<void> {
        await webActions.verifyElementContainsText(dropDownPageObjects.Selected_OptionText_Selector, lan)
    }

    async selectCountry(value: string): Promise<void> {
        await webActions.selectDropDownByValue(dropDownPageObjects.Country_Option_Selector_ID, value)
    }

}