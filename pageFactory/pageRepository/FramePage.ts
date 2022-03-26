import { WebActions } from "@lib/WebActions"
import { FramePageObjects } from "@objects/FramePageObjects"
import { Page } from "@playwright/test"

let webActions: WebActions
let framePageObjects: FramePageObjects

export class FramePage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
        webActions = new WebActions(this.page)
        framePageObjects = new FramePageObjects()
    }

    async navigateToUrl(): Promise<void> {
        await webActions.navigateToURL("/frame")
    }


    async enterName(firstName: string, lastName: string) {
        const fnameLocatorForFirstName = this.page.frameLocator(framePageObjects.First_Frame_ID).locator(framePageObjects.First_Name_Input_Selector)
        await fnameLocatorForFirstName.type(firstName)
        const fnameLocatorForLastName = this.page.frameLocator(framePageObjects.First_Frame_ID).locator(framePageObjects.Last_Name_Input_Selector)
        await fnameLocatorForLastName.type(lastName)
    }

    async enterEmail(email:string) {
        const fnameLocatorForEmail = this.page.frameLocator(framePageObjects.First_Frame_ID)
        .frameLocator(framePageObjects.Inner_Frame_Selector)
        .locator(framePageObjects.Email_Input_Selector)
        await fnameLocatorForEmail.type(email)
    }



}