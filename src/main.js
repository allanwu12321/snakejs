$(document).ready(function() {
  const head = new Head($('#board'));
  const apple = new Apple($('#board'));
  var last = head;
  var lastset = last;

  function changeDir(){
    var keyBuffer = []
    $('body').on('keydown', function(e) {
      keyBuffer.push(e)
      if (keyBuffer[0].keyCode === 37 && head.currentDirection != 'right') {
        head.currentDirection = 'left';
      }
      else if(keyBuffer[0].keyCode === 38 && head.currentDirection != 'up'){
        head.currentDirection = 'down';
      }
      else if(keyBuffer[0].keyCode === 39 && head.currentDirection != 'left'){
        head.currentDirection = 'right';
      }
      else if(keyBuffer[0].keyCode === 40 && head.currentDirection != 'down'){
        head.currentDirection = 'up';
      }
    });
  }
  setInterval(function(){
    if(head.failed){
      return process.exit()
    }
    changeDir()
    head.move()
    if(head.pos.left === apple.pos.left && head.pos.top === apple.pos.top){
      apple.reposition(head)
      last = new Body($('#board'), last)
      lastset.prev = last
      lastset = last
    }
  }, head.SPEED);
});
