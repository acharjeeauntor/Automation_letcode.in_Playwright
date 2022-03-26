import test from "@lib/BaseTest"
import { expect } from "@playwright/test"

test.describe(`Test Radio and Checkbox`, async () => {
    test.beforeEach(async ({ radioAndCheckboxPage }) => {
        await radioAndCheckboxPage.navigateToUrl()
    })
    test(`Test Radio buttons`, async ({ radioAndCheckboxPage }) => {
        await radioAndCheckboxPage.checkYesInSelectAnyOne()
        await radioAndCheckboxPage.checkNoInSelectOnlyOne()
        await radioAndCheckboxPage.checkYesInFindBug()
        expect(await radioAndCheckboxPage.isBarIsSelected()).toBeTruthy
        expect(await radioAndCheckboxPage.isMaybeIsDisabled()).toBeTruthy

    })
    test(`Test Checkbox`, async ({ radioAndCheckboxPage }) => {
        expect(await radioAndCheckboxPage.isRememberMeIsChecked()).toBeTruthy
        await radioAndCheckboxPage.checkIAgreeToThe()

    })
})