const windowsPageSelector = {
    openHomePageBtnSelector: "#home",
    multiPageBtnSelector: "#multi"
}


class WindowsPage {
    constructor(page) {
        this.page = page
    }

    async clickOpenHomePage(){
        await this.page.click(windowsPageSelector.openHomePageBtnSelector)
    }
    async clickMultiWindows(){
        await this.page.click(windowsPageSelector.multiPageBtnSelector)
    }


}

module.exports = { WindowsPage, windowsPageSelector }