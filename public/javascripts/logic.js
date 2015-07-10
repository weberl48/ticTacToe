var checkWinner = function (winner, render, box, game) {
  var restart = 0;
  var endGame = function (box) {
    for (var i = 0; i < box.length; i++) {
      box[i].innerHTML = "";
      }
      alert("The Winner is" + ' ' + render + '!');
      restart ++;

  };
      // row check
      if (render == winner[0][0] && render == winner[0][1] && render == winner[0][2] ){

        endGame(box);

      } else if (render==winner[1][0] && render == winner[1][1] && render == winner[1][2]){
        endGame(box);

      } else if (render==winner[2][0] && render == winner[2][1] && render == winner[2][2]){
        endGame(box);

      // column check
      } else if (render==winner[0][0] && render == winner[1][0] && render == winner[2][0]){
        endGame(box);

      } else if (render==winner[0][1] && render == winner[1][1] && render == winner[2][1]){
        endGame(box);

      } else if (render==winner[0][2] && render == winner[1][2] && render == winner[2][2]){
        endGame(box);

      // diagnol check
      } else if (render==winner[0][0] && render == winner[1][1] && render == winner[2][2]) {
        endGame(box);

      } else if (render==winner[0][2] && render == winner[1][1] && render == winner[2][0]) {
        endGame(box);

      // Cats Game Check
      } else {
        var temp = 0;
        for (var l = 0; l < box.length; l++) {
          if(box[l].innerHTML === "X" || box[l].innerHTML == "O")
            temp ++;
        }
        if(temp === 9) {
          alert('Cats Game!');
          for (var z = 0; z < box.length; z++) {
            box[z].innerHTML = "";
          temp = 0;
          }
          restart ++;
          game([[1,2,3], [4,5,6], [7,8,9]]);
        }
      }

    if(restart === 1) {
      restart = 0;
      game([[1,2,3], [4,5,6], [7,8,9]]);
    }

};
