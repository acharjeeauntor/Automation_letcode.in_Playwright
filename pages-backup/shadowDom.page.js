const shadowDomPageSelector = {
    firstNameInputSelector: "#fname"
}
class ShadowDomPage {
    constructor(page) {
        this.page = page
    }

    async enterFirstName(name){
        await this.page.fill(shadowDomPageSelector.firstNameInputSelector,name)
    }
}

module.exports = { ShadowDomPage, shadowDomPageSelector }