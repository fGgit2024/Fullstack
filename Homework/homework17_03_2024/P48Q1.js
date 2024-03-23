console.log("+++++++++++++++++++++++++++++++Page 48 exercise no' 1");

function ScoreCalculation(NumOfGames) {
  var Score = 0;
  for (Index = 1; Index <= NumOfGames; Index++) {
    var WrongIput = 0;

    var BasketsToWin = +prompt("Please input the Baskets To win");
    if (isNaN(BasketsToWin)) {
      WrongIput = 1;
    }

    var BasketsToDuty = +prompt("Please input the Baskets To duty");
    if (isNaN(BasketsToDuty)) {
      WrongIput = 1;
    }

    if (WrongIput == 1) {
      alert("Please input only a number");
      Index = Index - 1;
    } else {
      if (BasketsToWin > BasketsToDuty) {
        Score = Score + 3;
      } else {
        if (BasketsToWin == BasketsToDuty) {
          Score = Score + 1;
        }
      }
    }
  }
  return Score;
}

console.log(
  "The number of points scored by Maccabi Tel Aviv is:" + ScoreCalculation(3)
);
