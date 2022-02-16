const dropdownPageSelectors={
    fruitsDropdownSelector:"#fruits"
}

class DropdownPage{
    constructor(page){
        this.page = page
    }

async selectFruit(text){
    const ele = await this.page.locator(dropdownPageSelectors.fruitsDropdownSelector)
    await ele.selectOption(text)
}


}

module.exports={DropdownPage,dropdownPageSelectors}