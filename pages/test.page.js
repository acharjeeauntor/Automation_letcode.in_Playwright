const testPageSelectors = {
    inputEditLinkSelector: "[href='/edit']",
    clickBtnSelector: "[href='/buttons']",
    fileLinkSelector:"[href='/file']",
    alertLinkSelector:"[href='/alert']",
    dropDownLinkSelector:"[href='/dropdowns']",
    windowsLinkSelector:"[href='/windows']",
    workSpaceTabSelector:"#testing",
    signInBtnSelector:"[href='/signin']",
    frameLinkSelector:"[href='/frame']"
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
      async accessDropdownPage(){
        await this.page.click(testPageSelectors.dropDownLinkSelector)
      }
      async accessWindowsPage(){
        await this.page.click(testPageSelectors.windowsLinkSelector)
      }
      async clickWorkSpace(){
        await this.page.click(testPageSelectors.workSpaceTabSelector)
      }
      async clickSignInBtn(page){
        await page.click(testPageSelectors.signInBtnSelector)
      }
      async accessFramePage(){
        await this.page.click(testPageSelectors.frameLinkSelector)
      }

}

module.exports={TestPage,testPageSelectors}