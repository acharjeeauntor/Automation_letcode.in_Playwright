const testPageSelectors = {
    inputEditLinkSelector: "[href='/edit']",
    clickBtnSelector: "[href='/buttons']",
    fileLinkSelector:"[href='/file']"

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

}

module.exports={TestPage,testPageSelectors}