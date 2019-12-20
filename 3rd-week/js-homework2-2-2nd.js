function movable() {
  var mBox = document.getElementById('movable-box');
  var uBox = document.getElementById('unmovable-box')

  mBox.style.left = 0;
  mBox.style.top = 0;

  mBox.addEventListener('dragstart', function(event) {

    var x1 = event.clientX - parseInt(mBox.style.left);
    var y1 = event.clientY - parseInt(mBox.style.top);

    obj1 = {
      x : x1,
      y : y1
    }
  });

  mBox.addEventListener('dragend', function(event) {

    var x2 = event.clientX - obj1.x;
    var y2 = event.clientY - obj1.y;

    if (x2 > 920) {
      mBox.style.left = '920px';
    } else if (x2 < 0) {
      mBox.style.left = '0';
    }else {
      mBox.style.left = x2 + 'px';
    }

    if (y2 > 720) {
      mBox.style.top = '720px';
    }else if (y2 < 0) {
      mBox.style.top = '0';
    }else {
      mBox.style.top = y2 + 'px';
    }

  });

  mBox.addEventListener('drag', function () {
    var x3 = event.clientX - obj1.x;
    var y3 = event.clientY - obj1.y;
    if (x3 > 520 && x3 < 680){
      if (y3 >420 && y3 < 580) {
        uBox.style.backgroundColor = 'blue';
      }
    }
  });
}

window.onload = function() {
  movable();
}