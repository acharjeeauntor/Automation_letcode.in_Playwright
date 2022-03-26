import{Page} from "@playwright/test"
import { WebActions } from "@lib/WebActions"
import { ElementsPageObjects } from "@objects/ElementsPageObjects"

let webActions:WebActions
let elementsPageObjects:ElementsPageObjects

export class ElementsPage{
    readonly page:Page
    constructor(page:Page){
        this.page=page
        webActions = new WebActions(this.page)
        elementsPageObjects = new ElementsPageObjects()
    }

    async navigateToUrl(): Promise<void> {
        await webActions.navigateToURL("/elements")
    }

    async enterGitUsername(name:string) {
        const ele =  this.page.locator(elementsPageObjects.Username_Search_Input_Selector)
        await ele.fill(name)
        await ele.press("Enter")

    }

    async userImageSelector() {
        await this.page.waitForSelector(elementsPageObjects.UserImage_Selector)
        return this.page.locator(elementsPageObjects.UserImage_Selector)
        
    }

    async getUserInfo() {
        const nameElement =  this.page.locator(elementsPageObjects.UserName_Selector)
        const AddressElement =  this.page.locator(elementsPageObjects.UserAddress_Selector)
        const skillElement =  this.page.locator(elementsPageObjects.UserSkill_Selector)
        console.log("Name: "+ await nameElement.textContent())
        console.log("Address: "+await AddressElement.textContent())
        console.log("Skill: "+await skillElement.textContent())
    }

    async getTotalRepos(){
        await this.page.waitForSelector(elementsPageObjects.Repo_Link_Selector)
        const repos = await this.page.$$(elementsPageObjects.Repo_Link_Selector)
         for await(const repo of repos){
             console.log(await repo.innerText())
        }
        console.log(repos.length)
        return repos.length
    }



}