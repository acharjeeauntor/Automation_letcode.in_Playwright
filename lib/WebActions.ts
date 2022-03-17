import{test,Page} from "@playwright/test"

export class WebActions{
    readonly page:Page
    constructor(page:Page){
        this.page = page
    }

    async navigateToURL(url: string):Promise<void> {
        await this.page.goto(url);
    }

    async waitForElementAttached(locator: string): Promise<void> {
        await this.page.waitForSelector(locator);
    }

    async clickElement(locator: string): Promise<void> {
        await this.waitForElementAttached(locator);
        await this.page.click(locator);
    }

}