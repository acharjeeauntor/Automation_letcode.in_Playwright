import test from "@lib/BaseTest"
import { expect } from "@playwright/test"
import DropDownData from "@data/dropdownData.json"

test.describe(`Test Dropdown`, async () => {
    test.beforeEach(async ({ dropdownPage }) => {
        await dropdownPage.navigateToUrl()
    })

    test(`@Functional Select the apple using visible text`, async ({ dropdownPage }) => {
        await dropdownPage.selectApple(DropDownData.FruitName)
        await dropdownPage.verifyFruitSelection(DropDownData.FruitName)
    })
    test(`@Functional Select your super hero's`, async ({ dropdownPage }) => {
        await dropdownPage.selectSuperHero(DropDownData.HeroValue)
      await dropdownPage.verifyHeroSelection(DropDownData.superHero)
     
    })
    test(`@Functional Select the last programming language and print all the options`, async ({ dropdownPage }) => {
        await dropdownPage.printAllLangOptions()
      await dropdownPage.verifyLanguageSelection(DropDownData.LastLanguage)
     
    })
    test(`@Functional Select India using value & print the selected value`, async ({ dropdownPage }) => {
     await dropdownPage.selectCountry(DropDownData.country)
     
    })
})