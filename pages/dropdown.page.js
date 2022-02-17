const dropdownPageSelectors = {
    fruitsDropdownSelector: "#fruits",
    selectedOptionTextSelector: ".content .subtitle",
    heroDropDownSelector: "#superheros",
    languageDropdownSelector: "#lang",
    languageOptionSelector:"#lang option",
    countryOptionSelector:"#country"
}

class DropdownPage {
    constructor(page) {
        this.page = page
    }

    async selectFruit(text) {
        const ele = await this.page.locator(dropdownPageSelectors.fruitsDropdownSelector)
        await ele.selectOption({ label: text })
    }

    async getSelectedFruitName() {
        const ele = await this.page.locator(dropdownPageSelectors.selectedOptionTextSelector)
        return ele.textContent()
    }

    async selectSuperHero(label, value, index) {
        const ele = await this.page.locator(dropdownPageSelectors.heroDropDownSelector)
        await ele.selectOption([{ label: label }, { value: value }, { index: index }])
    }

    async getSelectedHeroName() {
        const ele = await this.page.locator(dropdownPageSelectors.selectedOptionTextSelector).nth(1)
        return ele.textContent()
    }

    async getAllLangOptions() {
     // const lang = await this.page.locator(dropdownPageSelectors.languageOptionSelector)
      const lang = await this.page.$$(dropdownPageSelectors.languageOptionSelector)
      const len =await lang.length
      for(var i=0;i<len;i++){
        console.log(await this.page.locator(dropdownPageSelectors.languageOptionSelector).nth(i).textContent())
        if(i===len-1){
            const ele = await this.page.locator(dropdownPageSelectors.languageDropdownSelector)
            await ele.selectOption({index:len-1})
            return this.page.locator(dropdownPageSelectors.languageOptionSelector).nth(len-1).textContent()
        }
      }
    }

    async getSelectedProgrammingLanguage() {
        const ele = await this.page.locator(dropdownPageSelectors.selectedOptionTextSelector).nth(1)
        return ele.textContent()
    }

    async selectCounty(countryName) {
        await this.page.selectOption(dropdownPageSelectors.countryOptionSelector,countryName)
        const val = await this.page.$eval(dropdownPageSelectors.countryOptionSelector,el=> el.value)
        console.log(val)
        return val
    }

}

module.exports = { DropdownPage, dropdownPageSelectors }