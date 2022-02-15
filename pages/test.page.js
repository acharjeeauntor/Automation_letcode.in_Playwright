const testPageSelectors = {
    inputEditLinkSelector: "[href='/edit']",
    clickBtnSelector: "[href='/buttons']",
    fileLinkSelector:"[href='/file']",
    alertLinkSelector:"[href='/alert']"
}


class TestPage {
    constructor(page) {
        this.page = page
    }

    async accessInputFields(){
      await this.page.click(testPageSelectors.inputEditLinkSelector)
    }
    async accessButtonPage(){
        await this.page.click(testPageSelectors.clickBtnSelector)
      }
      async accessFilePage(){
        await this.page.click(testPageSelectors.fileLinkSelector)
      }
      async accessAlertPage(){
        await this.page.click(testPageSelectors.alertLinkSelector)
      }

}

module.exports={TestPage,testPageSelectors}