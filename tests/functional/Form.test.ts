import test from "@lib/BaseTest"
import {expect} from "@playwright/test"
import FormData from "@data/formData.json"

test.describe(`Test Form`,async()=>{
    test.beforeEach(async ({ formPage }) => {
        await formPage.navigateToUrl()
    })
    test(`@Functional Submit Form`,async({ formPage })=>{
        await formPage.submitForm(FormData.FirstName,FormData.LastName,FormData.email,
            FormData.phone,FormData.adds1,FormData.adds2,
            FormData.state,FormData.postalcode,FormData.countryCode,
            FormData.country,FormData.dob)
    })
})