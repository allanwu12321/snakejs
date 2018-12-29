// creates a constructor function - research ES6 classes
class Head {

  // this is what's called when you use the "new" keyword
  constructor($el) {
    this.prev = null
    this.failed = false
    this.label = "real head"
    this.node = $('<div id="head"></div>');
    this.currentDirection = 'right';
    this.SPEED = 250;
    $el.append(this.node);
    this.node.css({ top: 0, left: 0});
    this.pos = this.node.position()
  }

  // same as Head.prototype.move = function() {...}
  move() {

    let direction = this.currentDirection;

    if (direction === 'right') {
      this.pos.left += 50;
    }
    else if(direction === 'left'){
      this.pos.left -= 50;
    }
    else if(direction === 'up'){
      this.pos.top += 50;
    }
    else if(direction === 'down'){
      this.pos.top -= 50;
    }

    if(this.pos.left > 650 || this.pos.left < 0 || this.pos.top > 650 || this.pos.top < 0){
      alert("GG")
      this.failed = true
    }

    var temp = this.prev
    while(temp != null){
      if(this.pos.left === temp.pos.left && this.pos.top === temp.pos.top){
        alert("hit itself")
        this.failed = true
      }
      temp = temp.prev
    }

    this.node.css(this.pos);
  }

}
