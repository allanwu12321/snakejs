$(document).ready(function() {
  const head = new Head($('#board'));
  const apple = new Apple($('#board'));
  var last = head;
  var lastset = last;

  function changeDir(){
    $('body').on('keydown', function(e) {
      if (e.keyCode === 37 && head.currentDirection != 'right') {
        head.currentDirection = 'left';
      }
      else if(e.keyCode === 38 && head.currentDirection != 'up'){
        head.currentDirection = 'down';
      }
      else if(e.keyCode === 39 && head.currentDirection != 'left'){
        head.currentDirection = 'right';
      }
      else if(e.keyCode === 40 && head.currentDirection != 'down'){
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
      /*
      var newpos = {top: Math.floor((Math.random() * 699)/50) * 50, left: Math.floor((Math.random() * 699)/50) * 50}
      var temp = head.prev
      var poslist = [head.pos]
      while(temp != null){
        poslist.push(temp.pos)
      }
      while(newpos in poslist){
        newpos = {top: Math.floor((Math.random() * 699)/50) * 50, left: Math.floor((Math.random() * 699)/50) * 50}
      }
      */
      apple.reposition()
      last = new Body($('#board'), last)
      lastset.prev = last
      lastset = last
    }
  }, head.SPEED);
});
