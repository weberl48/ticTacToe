var winner;

var game = function () {
  var box = document.getElementsByClassName('box');
  var render = 'O';

  var populate = function (render, move) {
    for (var i = 0; i < winner.length; i++) {
      var row = winner[i];
      for (var j = 0; j < row.length; j++) {
        // console.log(row);
        if(row[j] == move)
          row[j] = render;
      }
    }
  };

  for (var i = 0; i < box.length; i++) {
    box[i].addEventListener('click', function () {
      if(render === 'O') {
        render = 'X';
        this.innerHTML = 'X';
        var move = this.id;
        // console.log(move);
        populate(render, move);
      }
      else {
        render = 'O';
        this.innerHTML = 'O';
        var move = this.id;
        // console.log(move);
        populate(render, move);
      }
      checkWinner(winner, render, box, game);
    });
  }
};

game([[1,2,3], [4,5,6], [7,8,9]]);
