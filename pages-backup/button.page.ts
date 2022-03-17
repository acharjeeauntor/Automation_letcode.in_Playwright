import {Page,expect} from "@playwright/test"

export const buttonPageSelectors = {
homeBtnSelector:"#home",
colorBtnSelector:"#color",
disableBtnSelector:"[title='Disabled button']",
holdbtnSelector:"button:has-text('Button Hold!')"
}


export class ButtonPage {
    readonly page:Page
    constructor(page:Page) {
        this.page = page
    }

    async getButtonPageLink(){
        return this.page.url()
      }

      async clickGotoHomeBtnAndGetUrl(){
          await this.page.click(buttonPageSelectors.homeBtnSelector)
          return  this.page.url()
      }

      async navigateBackFromHomePageAndGetUrl(){
        await this.page.goBack()
        return this.page.url()
    }
                             
    async getColorCode(){
        const color = await this.page.locator(buttonPageSelectors.colorBtnSelector).evaluate((el) => {
            return window.getComputedStyle(el).getPropertyValue('background-color');
     });
     return color
    }

    async buttonDisable(){
        expect( this.page.locator(buttonPageSelectors.disableBtnSelector)).toBeDisabled()
    }

    async clickAndHold(){
        await this.page.waitForSelector(buttonPageSelectors.holdbtnSelector)
        await this.page.click(buttonPageSelectors.holdbtnSelector,{
            delay:3000
        })
    }

    async getHoldBtnText(){
        //this.page.waitForSelector("//h2")
        return  this.page.locator("//h2").textContent()
    }
}
