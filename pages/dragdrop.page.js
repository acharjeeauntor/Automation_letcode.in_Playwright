const dragdropPageSelector = {
    srcBoxSelector: "#draggable",
    dstBoxSelector: "#droppable"
}

class DragDropPage {
    constructor(page) {
        this.page = page
    }


    async dragSrcBox() {
        await this.page.waitForSelector(dragdropPageSelector.srcBoxSelector)
        const src = await this.page.locator(dragdropPageSelector.srcBoxSelector)
        if (src != null) {
            const srcBound = await src.boundingBox()
            if(srcBound!=null){
                await this.page.mouse.move(srcBound.x+srcBound.width/2,srcBound.y+srcBound.height/2)
                await this.page.mouse.down()
            }else {
            throw new Error("No Bound")
        }
        } else {
            throw new Error("No Element")
        }
    }

    async dropToDstBox() {
        await this.page.waitForSelector(dragdropPageSelector.dstBoxSelector)
        const dst = await this.page.locator(dragdropPageSelector.dstBoxSelector)
        if (dst != null) {
            const dstBound = await dst.boundingBox()
            if(dstBound!=null){
                await this.page.mouse.move(dstBound.x+dstBound.width/2,dstBound.y+dstBound.height/2)
                await this.page.mouse.down()
            }else {
            throw new Error("No Bound")
        }
        } else {
            throw new Error("No Element")
        }
    }



}

module.exports = { dragdropPageSelector, DragDropPage }