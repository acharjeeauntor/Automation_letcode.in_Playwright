const waitsPageLocator={
alertBtnSelector:"#accept"
}

class WaitPage{
    constructor(page){
        this.page = page
    }

    async clickSimpleAlertBtn(){
        await this.page.click(waitsPageLocator.alertBtnSelector)
    }


}

module.exports={waitsPageLocator,WaitPage}