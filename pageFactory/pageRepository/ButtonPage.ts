import { Page } from "@playwright/test"
import{WebActions} from "../../lib/WebActions"
import{ButtonPageObjects} from "../objectRepository/ButtonPageObjects"

let webActions:WebActions
let buttonPageObjects:ButtonPageObjects

export class ButtonPage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page
        webActions = new WebActions(this.page)
        buttonPageObjects = new ButtonPageObjects()
    }

   async navigateToUrl(url:string):Promise<void>{
       await webActions.navigateToURL(url)
   }



}