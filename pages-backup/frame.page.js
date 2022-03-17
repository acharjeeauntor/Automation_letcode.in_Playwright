const framePageSelector = {
    firstFrameName: "firstFr",
    frameSelector:"xpath=//iframe[@id='firstFr']",
    firstNameInputSelector: " [name='fname']",
    lastNameInputSelector: "[name='lname']",
    emailInputSelector: "[name='email']"

}

class FramePage {
    constructor(page) {
        this.page = page
    }

    async enterFirstName(frame, fname) {
        await frame.fill(framePageSelector.firstNameInputSelector, fname)
    }

    async enterLastName(frame, lname) {
        await frame.fill(framePageSelector.lastNameInputSelector, lname)
    }


    async enterEmail(frame, email) {
        await frame.fill(framePageSelector.emailInputSelector, email)
    }

    async getFullName(){
        await this.page.fill(framePageSelector.emailInputSelector,email)
    }


}

module.exports = { FramePage, framePageSelector }