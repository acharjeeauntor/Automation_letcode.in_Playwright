const {test,expect} = require("@playwright/test")

const buttonPageSelectors = {
homeBtnSelector:"#home",
colorBtnSelector:"#color",
disableBtnSelector:"[title='Disabled button']",
holdbtnXpathSelector:"//h2[contains(text(),'Button Hold!')]"
}


class ButtonPage {
    constructor(page) {
        this.page = page
    }

    async getButtonPageLink(){
        return await this.page.url()
      }

      async clickGotoHomeBtnAndGetUrl(){
          await this.page.click(buttonPageSelectors.homeBtnSelector)
          return await this.page.url()
      }

      async navigateBackFromHomePageAndGetUrl(){
        await this.page.goBack()
        return await this.page.url()
    }
                             
    async getColorCode(){
        const color = await this.page.locator(buttonPageSelectors.colorBtnSelector).evaluate((el) => {
            return window.getComputedStyle(el).getPropertyValue('background-color');
     });
     return color
    }

    async buttonDisable(){
        expect(await this.page.locator(buttonPageSelectors.disableBtnSelector)).toBeDisabled()
    }
}

module.exports={ButtonPage,buttonPageSelectors}