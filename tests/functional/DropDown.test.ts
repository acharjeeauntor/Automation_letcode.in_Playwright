import test from "../../lib/BaseTest"
import { expect } from "@playwright/test"
import DropDownData from "../../test-data/dropdownData.json"
test.describe(`Test Dropdown`, async () => {
    test.beforeEach(async ({ dropdownPage }) => {
        await dropdownPage.navigateToUrl("/dropdowns")
    })

    test(`Select the apple using visible text`, async ({ dropdownPage }) => {
        await dropdownPage.selectApple(DropDownData.FruitName)
        await dropdownPage.verifyFruitSelection(DropDownData.FruitName)
    })
    test(`Select your super hero's`, async ({ dropdownPage }) => {
        await dropdownPage.selectSuperHero(DropDownData.HeroValue)
      await dropdownPage.verifyHeroSelection(DropDownData.superHero)
     
    })
    test(`Select the last programming language and print all the options`, async ({ dropdownPage }) => {
        await dropdownPage.printAllLangOptions()
      await dropdownPage.verifyLanguageSelection(DropDownData.LastLanguage)
     
    })
    test(`Select India using value & print the selected value`, async ({ dropdownPage }) => {
     await dropdownPage.selectCountry(DropDownData.country)
     
    })
})