import { Page } from "@playwright/test"
import { FormPageObjects } from "@objects/FormPageObjects"
import { WebActions } from "@lib/WebActions"

let webActions: WebActions
let formPageObjects: FormPageObjects

export class FormPage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
        webActions = new WebActions(this.page)
        formPageObjects = new FormPageObjects()
    }

    async navigateToUrl(): Promise<void> {
        await webActions.navigateToURL("/forms")
    }

    async submitForm(fname: string, lname: string,
        email: string, phone: string,
        address1: string, address2: string,
        state: string, postalCode: string,
        countryCode: string, country: string, dateOfBirth: string) {
        await webActions.enterElementText(formPageObjects.First_Name_Input_ID, fname)
        await webActions.enterElementText(formPageObjects.Last_Name_Input_ID, lname)

        try{
            webActions.waitForElementAttached(formPageObjects.Email_Input_ID)
            const ele = this.page.locator(formPageObjects.Email_Input_ID)
            await ele.focus()
            await this.page.keyboard.press('End')
            await ele.type(email)
        }catch{
            console.log("Somthing wrong in InputPage")
        }
        await webActions.selectDropDownByLabel(formPageObjects.Country_Code_Selector,countryCode)
        await webActions.enterElementText(formPageObjects.Phone_Input_ID, phone)
        await webActions.enterElementText(formPageObjects.Address_Line_1_Input_ID, address1)
        await webActions.enterElementText(formPageObjects.Address_Line_2_Input_ID, address2)
        await webActions.enterElementText(formPageObjects.State_Input_ID, state)
        await webActions.enterElementText(formPageObjects.Postal_Code_Input_ID, postalCode)
        await webActions.selectDropDownByLabel(formPageObjects.Country_Selector,country)
        await webActions.typeElementText(formPageObjects.Date_Of_Birth_ID, dateOfBirth)
        await webActions.checkElement(formPageObjects.Gender_ID)
        await webActions.checkElement(formPageObjects.Agree_Selector)
        await webActions.clickElement(formPageObjects.Submit_Btn_Selector)
    }


}