class Apple {

  constructor($el) {
    this.node = $('<img id="apple"></img>');
    this.node.attr('src', 'src/assets/apple.jpg');
    $el.append(this.node);
    this.node.css({ top: Math.floor(Math.random() * 699/50) * 50, left: Math.floor(Math.random() * 699/50) * 50 });
    this.pos = this.node.position()
  }

  reposition(h){
    function check(pos){
      let temp = h
      while(temp != null){
        if(pos.top === temp.pos.top && pos.left === temp.pos.left){
          return false
        }
        temp = temp.prev
      }
      return true
    }
    let max = Math.random() * 699
    this.pos.top = Math.floor(max/50) * 50
    max = Math.random() * 699
    this.pos.left = Math.floor(max/50) * 50
    while(!check(this.pos)){
      let max = Math.random() * 699
      this.pos.top = Math.floor(max/50) * 50
      max = Math.random() * 699
      this.pos.left = Math.floor(max/50) * 50
    }

    this.node.css(this.pos)
  }


}
