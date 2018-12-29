class Apple {

  constructor($el) {
    this.node = $('<img id="apple"></img>');
    this.node.attr('src', 'src/assets/apple.jpg');
    $el.append(this.node);
    this.node.css({ top: 0, left: 0 });
    this.pos = this.node.position()
    this.reposition()
  }

  reposition(){
    let position = this.pos
    let max = Math.random() * 699
    position.top = Math.floor(max/50) * 50
    max = Math.random() * 699
    position.left = Math.floor(max/50) * 50

    this.node.css(position)
  }


}
