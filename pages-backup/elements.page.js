const elementsPageSelector = {
    usernameSearchInputSelector: "[name='username']",
    userImageSelector: ".media img",
    userNameSelector: ".media-content .title",
    userAddressSelector: ".media-content .subtitle",
    userSkillSelector: ".media-content span",
    repoLinkSelector:".content ol li a"

}

class ElementsPage {
    constructor(page) {
        this.page = page
    }

    async enterGitUsername(name) {
        const ele = await this.page.locator(elementsPageSelector.usernameSearchInputSelector)
        await ele.fill(name)
        await ele.press("Enter")

    }

    async userImageSelector() {
        await this.page.waitForSelector(elementsPageSelector.userImageSelector)
        return this.page.locator(elementsPageSelector.userImageSelector)
        
    }

    async getUserInfo() {
        const nameElement = await this.page.locator(elementsPageSelector.userNameSelector)
        const AddressElement = await this.page.locator(elementsPageSelector.userAddressSelector)
        const skillElement = await this.page.locator(elementsPageSelector.userSkillSelector)
        console.log("Name: "+ await nameElement.textContent())
        console.log("Address: "+await AddressElement.textContent())
        console.log("Skill: "+await skillElement.textContent())
    }

    async getTotalRepos(){
        await this.page.waitForSelector(elementsPageSelector.repoLinkSelector)
        const repos = await this.page.$$(elementsPageSelector.repoLinkSelector)
         for await(const repo of repos){
             console.log(await repo.innerText())
        }
        console.log(repos.length)
        return repos.length
    }

}

module.exports ={ElementsPage,elementsPageSelector}