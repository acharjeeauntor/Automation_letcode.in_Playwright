// const { test, expect } = require('@playwright/test')
// const { TestPage } = require("../pages/test.page")
// const { Common } = require("../helper/common")
// const { DropdownPage, alertPageSelectors } = require("../pages/dropdown.page")
// const DropDownData = require("../projectVariables/dropdownData.json")

import{test,expect,Page} from "@playwright/test"
import{DropdownPage,dropdownPageSelectors} from "../pages/dropdown.page"
import {TestPage,testPageSelectors} from "../pages/test.page"
import DropDownData from "../projectVariables/dropdownData.json"

let dropdownPage:DropdownPage, testPage:TestPage, page:Page


test.describe("Test Different types of Dropdown ", () => {
    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage()
        await page.goto("./")
        dropdownPage = new DropdownPage(page)
        testPage = new TestPage(page)

        await testPage.accessDropdownPage()
    })


    //Test Case Execution From Here....................................

    test("Select the apple using visible text", async () => {
      await dropdownPage.selectFruit(DropDownData.fruitName)
      expect(await dropdownPage.getSelectedFruitName()).toContain(DropDownData.fruitName)
    })
    test("Select your super hero's", async () => {
      await dropdownPage.selectSuperHero(DropDownData.heroName,DropDownData.heroValue,DropDownData.heroIndex)
      expect(await dropdownPage.getSelectedHeroName()).toContain(DropDownData.heroName)
    })

    test("Select the last programming language and print all the options", async () => {
     const lang = await dropdownPage.getAllLangOptions()
     expect(await dropdownPage.getSelectedProgrammingLanguage()).toContain(lang)
     //await dropdownPage.getAllLangOptions()
     
    })

    // test("Select India using value & print the selected value", async () => {
    //   const country = await dropdownPage.selectCounty(DropDownData.countryName)
    //   expect(country).toBe(DropDownData.countryName)
    // })

})

