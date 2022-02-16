class Common{


constructor(page){
    this.page = page
}

    getDialogMessage(){
        let msg;
        this.page.on('dialog', (dialog) => {
            //console.log(dialog.message())
            msg = dialog.message()
            //console.log(dialog.defaultValue())
            //console.log(dialog.type())
            dialog.accept()
        })

        return msg
     
    }
}

module.exports={Common}