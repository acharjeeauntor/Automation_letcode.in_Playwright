import { test, Page, expect } from "@playwright/test"

export class WebActions {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
    }

    async navigateToURL(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async waitForElementAttached(locator: string): Promise<void> {
        await this.page.waitForSelector(locator);
    }

    async clickElement(locator: string): Promise<void> {
        await this.waitForElementAttached(locator);
        await this.page.click(locator);
    }

    async clickAndHoldElement(locator: string): Promise<void> {
        await this.waitForElementAttached(locator);
        await this.page.click(locator, {
            delay: 5000
        });
    }

    async getBGColorCode(locator: string): Promise<string> {
        await this.waitForElementAttached(locator);
        const color = await this.page.locator(locator).evaluate((el) => {
            return window.getComputedStyle(el).getPropertyValue('background-color');
        });
        return color
    }





    async verifyElementText(locator: string, text: string): Promise<void> {
        await this.waitForElementAttached(locator);
        const textValue = await this.page.textContent(locator);
        expect(textValue.trim()).toBe(text);
    }

    async verifyElementContainsText(locator: string, text: string): Promise<void> {
        await this.waitForElementAttached(locator);
        await expect(this.page.locator(locator)).toContainText(text);
    }


    async verifyByUrl(url: string): Promise<void> {
        let currentUrl = this.page.url()
        expect(currentUrl).toContain(url);
    }

}