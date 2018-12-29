class Body{
    constructor($el, head){
        this.prev = null
        this.label = "body"
        this.next = head
        this.SPEED = head.SPEED
        this.node = $('<div id = "body"></div>');
        $el.append(this.node)
        this.node.css({top: this.next.pos.top, left: this.next.pos.left})
        this.pos = this.node.position()
        setTimeout(this.move.bind(this), this.SPEED)
    }

    move(){
        let position = this.pos
        this.node.css(position)
        position.top = this.next.pos.top
        position.left = this.next.pos.left
        setTimeout(this.move.bind(this), this.SPEED)
    }
}