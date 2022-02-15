class Common{


constructor(page){
    this.page = page
}

    getDialogMessage(){
        let x='zx';
        this.page.on('dialog', (dialog) => {
            console.log(dialog.message())
        
            console.log(dialog.defaultValue())
            console.log(dialog.type())
            dialog.accept()
            return dialog.message()
            //alertPage.getSimpleAlertMsg()
        })

        //return x
     
    }
}

module.exports={Common}