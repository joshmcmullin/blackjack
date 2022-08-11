
var pValue1 = 0;
var pValue2 = 0;
var pValue3 = 0;
var pValue4 = 0;
var pValue5 = 0;
var pValue6 = 0;
var pValueTotal = pValue1 + pValue2 + pValue3 + pValue4 + pValue5 + pValue6;

var pRoll1 = 0;
var pRoll2 = 0;
var pRoll3 = 0;
var pRoll4 = 0;
var pRoll5 = 0;
var pRoll6 = 0;

var dValue1 = 0;
var dValue2 = 0;
var dValue3 = 0;
var dValue4 = 0;
var dValue5 = 0;
var dValue6 = 0;
var dValueTotal = dValue1 + dValue2 + dValue3 + dValue4 + dValue5 + dValue6;

var dRoll1 = 0;
var dRoll2 = 0;
var dRoll3 = 0;
var dRoll4 = 0;
var dRoll5 = 0;
var dRoll6 = 0;

var chipCount = 5000;
var chipBet = 0;


function refreshPage() {

  pValue1 = 0;
  pValue2 = 0;
  pValue3 = 0;
  pValue4 = 0;
  pValue5 = 0;
  pValue6 = 0;
  pValueTotal = pValue1 + pValue2 + pValue3 + pValue4 + pValue5 + pValue6;

  pRoll1 = 0;
  pRoll2 = 0;
  pRoll3 = 0;
  pRoll4 = 0;
  pRoll5 = 0;
  pRoll6 = 0;

  dValue1 = 0;
  dValue2 = 0;
  dValue3 = 0;
  dValue4 = 0;
  dValue5 = 0;
  dValue6 = 0;
  dValueTotal = dValue1 + dValue2 + dValue3 + dValue4 + dValue5 + dValue6;

  dRoll1 = 0;
  dRoll2 = 0;
  dRoll3 = 0;
  dRoll4 = 0;
  dRoll5 = 0;
  dRoll6 = 0;

  chipBet = 0;

  if (document.querySelector(".img3").classList.contains("hidden")) {
  } else {
    (document.querySelector(".img3").classList.add("hidden"));
  }
  if (document.querySelector(".img4").classList.contains("hidden")) {
  } else {
    (document.querySelector(".img4").classList.add("hidden"));
  }
  if (document.querySelector(".img5").classList.contains("hidden")) {
  } else {
    (document.querySelector(".img5").classList.add("hidden"));
  }
  if (document.querySelector(".img6").classList.contains("hidden")) {
  } else {
    (document.querySelector(".img6").classList.add("hidden"));
  }
  if (document.querySelector(".img9").classList.contains("hidden")) {
  } else {
    (document.querySelector(".img9").classList.add("hidden"));
  }
  if (document.querySelector(".img10").classList.contains("hidden")) {
  } else {
    (document.querySelector(".img10").classList.add("hidden"));
  }
  if (document.querySelector(".img11").classList.contains("hidden")) {
  } else {
    (document.querySelector(".img11").classList.add("hidden"));
  }
  if (document.querySelector(".img12").classList.contains("hidden")) {
  } else {
    (document.querySelector(".img12").classList.add("hidden"));
  }

  document.querySelector(".img1").src = "images/zback.png";
  document.querySelector(".img2").src = "images/zback.png";
  document.querySelector(".img7").src = "images/zback.png";
  document.querySelector(".img8").src = "images/zback.png";

  document.querySelector(".dealer-score").innerHTML = "Dealer: " + dValueTotal;
  document.querySelector(".player-score").innerHTML = "Player: " + pValueTotal;
  document.querySelector("h1").innerHTML = "Welcome!";
  document.querySelector(".chip-bet").innerHTML = "Bet: " + chipBet;

  document.querySelector(".dealButton").classList.remove("displayNone");
  document.querySelector(".playButton").classList.add("displayNone");
  document.querySelector(".increase-bet").classList.remove("displayNone");
  document.querySelector(".decrease-bet").classList.remove("displayNone");

}

function increaseBet() {
  if (chipBet == chipCount) {
  } else {
    chipBet += 100;
  }
  document.querySelector(".chip-bet").innerHTML = "Bet: " + chipBet;
}

function decreaseBet() {
  if (chipBet == 0) {
  } else {
    chipBet -= 100;
  }
  document.querySelector(".chip-bet").innerHTML = "Bet: " + chipBet;
}

function playCards() {

    pRoll1 = (Math.floor(Math.random() * 52) + 1);
    pRoll2 = (Math.floor(Math.random() * 52) + 1);
    while (pRoll2 == pRoll1) {
      pRoll2 = (Math.floor(Math.random() * 52) + 1);
    }
    dRoll1 = (Math.floor(Math.random() * 52) + 1);
    while (dRoll1 == pRoll1 || dRoll1 == pRoll2) {
      dRoll1 = (Math.floor(Math.random() * 52) + 1);
    }

    document.querySelector(".increase-bet").classList.add("displayNone");
    document.querySelector(".decrease-bet").classList.add("displayNone");
    document.querySelector(".hitButton").classList.remove("displayNone");
    document.querySelector(".standButton").classList.remove("displayNone");
    document.querySelector(".dealButton").classList.add("displayNone");

    if (pRoll1 == 1 || pRoll1 == 14 || pRoll1 == 27 || pRoll1 == 40) {
        document.querySelector(".img7").src = "images/card" + pRoll1 + ".png";
        pValue1 = 11;
    } else if (pRoll1 == 2 || pRoll1 == 15 || pRoll1 == 28 || pRoll1 == 41) {
        document.querySelector(".img7").src = "images/card" + pRoll1 + ".png";
        pValue1 = 2;
    } else if (pRoll1 == 3 || pRoll1 == 16 || pRoll1 == 29 || pRoll1 == 42) {
        document.querySelector(".img7").src = "images/card" + pRoll1 + ".png";
        pValue1 = 3;
    } else if (pRoll1 == 4 || pRoll1 == 17 || pRoll1 == 30 || pRoll1 == 43) {
        document.querySelector(".img7").src = "images/card" + pRoll1 + ".png";
        pValue1 = 4;
    } else if (pRoll1 == 5 || pRoll1 == 18 || pRoll1 == 31 || pRoll1 == 44) {
        document.querySelector(".img7").src = "images/card" + pRoll1 + ".png";
        pValue1 = 5;
    } else if (pRoll1 == 6 || pRoll1 == 19 || pRoll1 == 32 || pRoll1 == 45) {
        document.querySelector(".img7").src = "images/card" + pRoll1 + ".png";
        pValue1 = 6;
    } else if (pRoll1 == 7 || pRoll1 == 20 || pRoll1 == 33 || pRoll1 == 46) {
        document.querySelector(".img7").src = "images/card" + pRoll1 + ".png";
        pValue1 = 7;
    } else if (pRoll1 == 8 || pRoll1 == 21 || pRoll1 == 34 || pRoll1 == 47) {
        document.querySelector(".img7").src = "images/card" + pRoll1 + ".png";
        pValue1 = 8;
    } else if (pRoll1 == 9 || pRoll1 == 22 || pRoll1 == 35 || pRoll1 == 48) {
        document.querySelector(".img7").src = "images/card" + pRoll1 + ".png";
        pValue1 = 9;
    } else if (pRoll1 == 10 || pRoll1 == 23 || pRoll1 == 36 || pRoll1 == 49) {
        document.querySelector(".img7").src = "images/card" + pRoll1 + ".png";
        pValue1 = 10;
    } else if (pRoll1 == 11 || pRoll1 == 24 || pRoll1 == 37 || pRoll1 == 50) {
        document.querySelector(".img7").src = "images/card" + pRoll1 + ".png";
        pValue1 = 10;
    } else if (pRoll1 == 12 || pRoll1 == 25 || pRoll1 == 38 || pRoll1 == 51) {
        document.querySelector(".img7").src = "images/card" + pRoll1 + ".png";
        pValue1 = 10;
    } else if (pRoll1 == 13 || pRoll1 == 26 || pRoll1 == 39 || pRoll1 == 52) {
        document.querySelector(".img7").src = "images/card" + pRoll1 + ".png";
        pValue1 = 10;
    }

    if (pRoll2 == 1 || pRoll2 == 14 || pRoll2 == 27 || pRoll2 == 40) {
        document.querySelector(".img8").src = "images/card" + pRoll2 + ".png";
        pValue2 = 11;
    } else if (pRoll2 == 2 || pRoll2 == 15 || pRoll2 == 28 || pRoll2 == 41) {
        document.querySelector(".img8").src = "images/card" + pRoll2 + ".png";
        pValue2 = 2;
    } else if (pRoll2 == 3 || pRoll2 == 16 || pRoll2 == 29 || pRoll2 == 42) {
        document.querySelector(".img8").src = "images/card" + pRoll2 + ".png";
        pValue2 = 3;
    } else if (pRoll2 == 4 || pRoll2 == 17 || pRoll2 == 30 || pRoll2 == 43) {
        document.querySelector(".img8").src = "images/card" + pRoll2 + ".png";
        pValue2 = 4;
    } else if (pRoll2 == 5 || pRoll2 == 18 || pRoll2 == 31 || pRoll2 == 44) {
        document.querySelector(".img8").src = "images/card" + pRoll2 + ".png";
        pValue2 = 5;
    } else if (pRoll2 == 6 || pRoll2 == 19 || pRoll2 == 32 || pRoll2 == 45) {
        document.querySelector(".img8").src = "images/card" + pRoll2 + ".png";
        pValue2 = 6;
    } else if (pRoll2 == 7 || pRoll2 == 20 || pRoll2 == 33 || pRoll2 == 46) {
        document.querySelector(".img8").src = "images/card" + pRoll2 + ".png";
        pValue2 = 7;
    } else if (pRoll2 == 8 || pRoll2 == 21 || pRoll2 == 34 || pRoll2 == 47) {
        document.querySelector(".img8").src = "images/card" + pRoll2 + ".png";
        pValue2 = 8;
    } else if (pRoll2 == 9 || pRoll2 == 22 || pRoll2 == 35 || pRoll2 == 48) {
        document.querySelector(".img8").src = "images/card" + pRoll2 + ".png";
        pValue2 = 9;
    } else if (pRoll2 == 10 || pRoll2 == 23 || pRoll2 == 36 || pRoll2 == 49) {
        document.querySelector(".img8").src = "images/card" + pRoll2 + ".png";
        pValue2 = 10;
    } else if (pRoll2 == 11 || pRoll2 == 24 || pRoll2 == 37 || pRoll2 == 50) {
        document.querySelector(".img8").src = "images/card" + pRoll2 + ".png";
        pValue2 = 10;
    } else if (pRoll2 == 12 || pRoll2 == 25 || pRoll2 == 38 || pRoll2 == 51) {
        document.querySelector(".img8").src = "images/card" + pRoll2 + ".png";
        pValue2 = 10;
    } else if (pRoll2 == 13 || pRoll2 == 26 || pRoll2 == 39 || pRoll2 == 52) {
        document.querySelector(".img8").src = "images/card" + pRoll2 + ".png";
        pValue2 = 10;
    }

    if (dRoll1 == 1 || dRoll1 == 14 || dRoll1 == 27 || dRoll1 == 40) {
        document.querySelector(".img1").src = "images/card" + dRoll1 + ".png";
        dValue1 = 11;
    } else if (dRoll1 == 2 || dRoll1 == 15 || dRoll1 == 28 || dRoll1 == 41) {
        document.querySelector(".img1").src = "images/card" + dRoll1 + ".png";
        dValue1 = 2;
    } else if (dRoll1 == 3 || dRoll1 == 16 || dRoll1 == 29 || dRoll1 == 42) {
        document.querySelector(".img1").src = "images/card" + dRoll1 + ".png";
        dValue1 = 3;
    } else if (dRoll1 == 4 || dRoll1 == 17 || dRoll1 == 30 || dRoll1 == 43) {
        document.querySelector(".img1").src = "images/card" + dRoll1 + ".png";
        dValue1 = 4;
    } else if (dRoll1 == 5 || dRoll1 == 18 || dRoll1 == 31 || dRoll1 == 44) {
        document.querySelector(".img1").src = "images/card" + dRoll1 + ".png";
        dValue1 = 5;
    } else if (dRoll1 == 6 || dRoll1 == 19 || dRoll1 == 32 || dRoll1 == 45) {
        document.querySelector(".img1").src = "images/card" + dRoll1 + ".png";
        dValue1 = 6;
    } else if (dRoll1 == 7 || dRoll1 == 20 || dRoll1 == 33 || dRoll1 == 46) {
        document.querySelector(".img1").src = "images/card" + dRoll1 + ".png";
        dValue1 = 7;
    } else if (dRoll1 == 8 || dRoll1 == 21 || dRoll1 == 34 || dRoll1 == 47) {
        document.querySelector(".img1").src = "images/card" + dRoll1 + ".png";
        dValue1 = 8;
    } else if (dRoll1 == 9 || dRoll1 == 22 || dRoll1 == 35 || dRoll1 == 48) {
        document.querySelector(".img1").src = "images/card" + dRoll1 + ".png";
        dValue1 = 9;
    } else if (dRoll1 == 10 || dRoll1 == 23 || dRoll1 == 36 || dRoll1 == 49) {
        document.querySelector(".img1").src = "images/card" + dRoll1 + ".png";
        dValue1 = 10;
    } else if (dRoll1 == 11 || dRoll1 == 24 || dRoll1 == 37 || dRoll1 == 50) {
        document.querySelector(".img1").src = "images/card" + dRoll1 + ".png";
        dValue1 = 10;
    } else if (dRoll1 == 12 || dRoll1 == 25 || dRoll1 == 38 || dRoll1 == 51) {
        document.querySelector(".img1").src = "images/card" + dRoll1 + ".png";
        dValue1 = 10;
    } else if (dRoll1 == 13 || dRoll1 == 26 || dRoll1 == 39 || dRoll1 == 52) {
        document.querySelector(".img1").src = "images/card" + dRoll1 + ".png";
        dValue1 = 10;
    }

    if (pValue1 + pValue2 == 22) {
      pValue1 = 1;
    } else if (pValue1 + pValue2 == 21) {
      document.querySelector("h1").innerHTML = "BlackJack!";
      document.querySelector(".hitButton").classList.add("displayNone");
      document.querySelector(".standButton").classList.add("displayNone");
      document.querySelector(".playButton").classList.remove("displayNone");
      pValueTotal = pValue1 + pValue2;
      console.log("Player's total: " + pValueTotal + ". BlackJack!");
      chipCount = (chipBet * 2) + chipCount;
      document.querySelector(".chip-count").innerHTML = "Chips: " + chipCount;
    }

    pValueTotal = pValue1 + pValue2
    dValueTotal = dValue1
    document.querySelector(".dealer-score").innerHTML = "Dealer: " + dValueTotal;
    document.querySelector(".player-score").innerHTML = "Player: " + pValueTotal;

}

function hitMe() {

  if (document.querySelector(".img9").classList.contains("hidden")) {
    hitMe1();
  } else if (document.querySelector(".img10").classList.contains("hidden")) {
    hitMe2();
  } else if (document.querySelector(".img11").classList.contains("hidden")) {
    hitMe3();
  } else if (document.querySelector(".img12").classList.contains("hidden")) {
    hitMe4();
  } else {
    console.log("congratz you broke it");
  }

}

function hitMe1() {

  pRoll3 = (Math.floor(Math.random() * 52) + 1);
  while (pRoll3 == pRoll1 || pRoll3 == pRoll2 || pRoll3 == dRoll1) {
    pRoll3 = (Math.floor(Math.random() * 52) + 1);
  }

  if (pRoll3 == 1 || pRoll3 == 14 || pRoll3 == 27 || pRoll3 == 40) {
      document.querySelector(".img9").src = "images/card" + pRoll3 + ".png";
      pValue3 = 11;
  } else if (pRoll3 == 2 || pRoll3 == 15 || pRoll3 == 28 || pRoll3 == 41) {
      document.querySelector(".img9").src = "images/card" + pRoll3 + ".png";
      pValue3 = 2;
  } else if (pRoll3 == 3 || pRoll3 == 16 || pRoll3 == 29 || pRoll3 == 42) {
      document.querySelector(".img9").src = "images/card" + pRoll3 + ".png";
      pValue3 = 3;
  } else if (pRoll3 == 4 || pRoll3 == 17 || pRoll3 == 30 || pRoll3 == 43) {
      document.querySelector(".img9").src = "images/card" + pRoll3 + ".png";
      pValue3 = 4;
  } else if (pRoll3 == 5 || pRoll3 == 18 || pRoll3 == 31 || pRoll3 == 44) {
      document.querySelector(".img9").src = "images/card" + pRoll3 + ".png";
      pValue3 = 5;
  } else if (pRoll3 == 6 || pRoll3 == 19 || pRoll3 == 32 || pRoll3 == 45) {
      document.querySelector(".img9").src = "images/card" + pRoll3 + ".png";
      pValue3 = 6;
  } else if (pRoll3 == 7 || pRoll3 == 20 || pRoll3 == 33 || pRoll3 == 46) {
      document.querySelector(".img9").src = "images/card" + pRoll3 + ".png";
      pValue3 = 7;
  } else if (pRoll3 == 8 || pRoll3 == 21 || pRoll3 == 34 || pRoll3 == 47) {
      document.querySelector(".img9").src = "images/card" + pRoll3 + ".png";
      pValue3 = 8;
  } else if (pRoll3 == 9 || pRoll3 == 22 || pRoll3 == 35 || pRoll3 == 48) {
      document.querySelector(".img9").src = "images/card" + pRoll3 + ".png";
      pValue3 = 9;
  } else if (pRoll3 == 10 || pRoll3 == 23 || pRoll3 == 36 || pRoll3 == 49) {
      document.querySelector(".img9").src = "images/card" + pRoll3 + ".png";
      pValue3 = 10;
  } else if (pRoll3 == 11 || pRoll3 == 24 || pRoll3 == 37 || pRoll3 == 50) {
      document.querySelector(".img9").src = "images/card" + pRoll3 + ".png";
      pValue3 = 10;
  } else if (pRoll3 == 12 || pRoll3 == 25 || pRoll3 == 38 || pRoll3 == 51) {
      document.querySelector(".img9").src = "images/card" + pRoll3 + ".png";
      pValue3 = 10;
  } else if (pRoll3 == 13 || pRoll3 == 26 || pRoll3 == 39 || pRoll3 == 52) {
      document.querySelector(".img9").src = "images/card" + pRoll3 + ".png";
      pValue3 = 10;
  }

  document.querySelector(".img9").classList.remove("hidden");

  if (pValue1 + pValue2 + pValue3 > 21) {
    if (pValue1 == 11) {
      pValue1 = 1;
    } else if (pValue2 == 11) {
      pValue2 = 1;
    } else if (pValue3 == 11) {
      pValue3 = 1;
    } else {
      document.querySelector("h1").innerHTML = "Bust! Dealer Wins!";
      document.querySelector(".hitButton, .standButton").classList.add("displayNone");
      document.querySelector(".standButton").classList.add("displayNone");
      document.querySelector(".playButton").classList.remove("displayNone");
      pValueTotal = pValue1 + pValue2 + pValue3 + pValue4 + pValue5 + pValue6;
      dValueTotal = dValue1 + dValue2 + dValue3 + dValue4 + dValue5 + dValue6;
      document.querySelector(".dealer-score").innerHTML = "Dealer: " + dValueTotal;
      document.querySelector(".player-score").innerHTML = "Player: " + pValueTotal;
      chipCount = chipCount - chipBet;
      document.querySelector(".chip-count").innerHTML = "Chips: " + chipCount;
    }
  } else {
    pValueTotal = pValue1 + pValue2 + pValue3 + pValue4 + pValue5 + pValue6;
    dValueTotal = dValue1 + dValue2 + dValue3 + dValue4 + dValue5 + dValue6;
    document.querySelector(".dealer-score").innerHTML = "Dealer: " + dValueTotal;
    document.querySelector(".player-score").innerHTML = "Player: " + pValueTotal;
  }

}

function hitMe2() {

  pRoll4 = (Math.floor(Math.random() * 52) + 1);
  while (pRoll4 == pRoll1 || pRoll4 == pRoll2 || pRoll4 == pRoll3 || pRoll4 == dRoll1) {
    pRoll4 = (Math.floor(Math.random() * 52) + 1);
  }

  if (pRoll4 == 1 || pRoll4 == 14 || pRoll4 == 27 || pRoll4 == 40) {
      document.querySelector(".img10").src = "images/card" + pRoll4 + ".png";
      pValue4 = 11;
  } else if (pRoll4 == 2 || pRoll4 == 15 || pRoll4 == 28 || pRoll4 == 41) {
      document.querySelector(".img10").src = "images/card" + pRoll4 + ".png";
      pValue4 = 2;
  } else if (pRoll4 == 3 || pRoll4 == 16 || pRoll4 == 29 || pRoll4 == 42) {
      document.querySelector(".img10").src = "images/card" + pRoll4 + ".png";
      pValue4 = 3;
  } else if (pRoll4 == 4 || pRoll4 == 17 || pRoll4 == 30 || pRoll4 == 43) {
      document.querySelector(".img10").src = "images/card" + pRoll4 + ".png";
      pValue4 = 4;
  } else if (pRoll4 == 5 || pRoll4 == 18 || pRoll4 == 31 || pRoll4 == 44) {
      document.querySelector(".img10").src = "images/card" + pRoll4 + ".png";
      pValue4 = 5;
  } else if (pRoll4 == 6 || pRoll4 == 19 || pRoll4 == 32 || pRoll4 == 45) {
      document.querySelector(".img10").src = "images/card" + pRoll4 + ".png";
      pValue4 = 6;
  } else if (pRoll4 == 7 || pRoll4 == 20 || pRoll4 == 33 || pRoll4 == 46) {
      document.querySelector(".img10").src = "images/card" + pRoll4 + ".png";
      pValue4 = 7;
  } else if (pRoll4 == 8 || pRoll4 == 21 || pRoll4 == 34 || pRoll4 == 47) {
      document.querySelector(".img10").src = "images/card" + pRoll4 + ".png";
      pValue4 = 8;
  } else if (pRoll4 == 9 || pRoll4 == 22 || pRoll4 == 35 || pRoll4 == 48) {
      document.querySelector(".img10").src = "images/card" + pRoll4 + ".png";
      pValue4 = 9;
  } else if (pRoll4 == 10 || pRoll4 == 23 || pRoll4 == 36 || pRoll4 == 49) {
      document.querySelector(".img10").src = "images/card" + pRoll4 + ".png";
      pValue4 = 10;
  } else if (pRoll4 == 11 || pRoll4 == 24 || pRoll4 == 37 || pRoll4 == 50) {
      document.querySelector(".img10").src = "images/card" + pRoll4 + ".png";
      pValue4 = 10;
  } else if (pRoll4 == 12 || pRoll4 == 25 || pRoll4 == 38 || pRoll4 == 51) {
      document.querySelector(".img10").src = "images/card" + pRoll4 + ".png";
      pValue4 = 10;
  } else if (pRoll4 == 13 || pRoll4 == 26 || pRoll4 == 39 || pRoll4 == 52) {
      document.querySelector(".img10").src = "images/card" + pRoll4 + ".png";
      pValue4 = 10;
  }

  document.querySelector(".img10").classList.remove("hidden");

  if (pValue1 + pValue2 + pValue3 + pValue4 > 21) {
    if (pValue1 == 11) {
      pValue1 = 1;
    } else if (pValue2 == 11) {
      pValue2 = 1;
    } else if (pValue3 == 11) {
      pValue3 = 1;
    } else if (pValue4 == 11) {
      pValue4 = 1;
    } else {
    document.querySelector("h1").innerHTML = "Bust! Dealer Wins!";
    document.querySelector(".hitButton").classList.add("displayNone");
    document.querySelector(".standButton").classList.add("displayNone");
    document.querySelector(".playButton").classList.remove("displayNone");
    pValueTotal = pValue1 + pValue2 + pValue3 + pValue4 + pValue5 + pValue6;
    dValueTotal = dValue1 + dValue2 + dValue3 + dValue4 + dValue5 + dValue6;
    document.querySelector(".dealer-score").innerHTML = "Dealer: " + dValueTotal;
    document.querySelector(".player-score").innerHTML = "Player: " + pValueTotal;
    chipCount = chipCount - chipBet;
    document.querySelector(".chip-count").innerHTML = "Chips: " + chipCount;
    }
  } else {
    pValueTotal = pValue1 + pValue2 + pValue3 + pValue4 + pValue5 + pValue6;
    dValueTotal = dValue1 + dValue2 + dValue3 + dValue4 + dValue5 + dValue6;
    document.querySelector(".dealer-score").innerHTML = "Dealer: " + dValueTotal;
    document.querySelector(".player-score").innerHTML = "Player: " + pValueTotal;
  }

}

function hitMe3() {

  pRoll5 = (Math.floor(Math.random() * 52) + 1);
  while (pRoll5 == pRoll1 || pRoll5 == pRoll2 || pRoll5 == pRoll3 || pRoll5 == pRoll4 || pRoll5 == dRoll1) {
    pRoll5 = (Math.floor(Math.random() * 52) + 1);
  }

  if (pRoll5 == 1 || pRoll5 == 14 || pRoll5 == 27 || pRoll5 == 40) {
      document.querySelector(".img11").src = "images/card" + pRoll5 + ".png";
      pValue5 = 11;
  } else if (pRoll5 == 2 || pRoll5 == 15 || pRoll5 == 28 || pRoll5 == 41) {
      document.querySelector(".img11").src = "images/card" + pRoll5 + ".png";
      pValue5 = 2;
  } else if (pRoll5 == 3 || pRoll5 == 16 || pRoll5 == 29 || pRoll5 == 42) {
      document.querySelector(".img11").src = "images/card" + pRoll5 + ".png";
      pValue5 = 3;
  } else if (pRoll5 == 4 || pRoll5 == 17 || pRoll5 == 30 || pRoll5 == 43) {
      document.querySelector(".img11").src = "images/card" + pRoll5 + ".png";
      pValue5 = 4;
  } else if (pRoll5 == 5 || pRoll5 == 18 || pRoll5 == 31 || pRoll5 == 44) {
      document.querySelector(".img11").src = "images/card" + pRoll5 + ".png";
      pValue5 = 5;
  } else if (pRoll5 == 6 || pRoll5 == 19 || pRoll5 == 32 || pRoll5 == 45) {
      document.querySelector(".img11").src = "images/card" + pRoll5 + ".png";
      pValue5 = 6;
  } else if (pRoll5 == 7 || pRoll5 == 20 || pRoll5 == 33 || pRoll5 == 46) {
      document.querySelector(".img11").src = "images/card" + pRoll5 + ".png";
      pValue5 = 7;
  } else if (pRoll5 == 8 || pRoll5 == 21 || pRoll5 == 34 || pRoll5 == 47) {
      document.querySelector(".img11").src = "images/card" + pRoll5 + ".png";
      pValue5 = 8;
  } else if (pRoll5 == 9 || pRoll5 == 22 || pRoll5 == 35 || pRoll5 == 48) {
      document.querySelector(".img11").src = "images/card" + pRoll5 + ".png";
      pValue5 = 9;
  } else if (pRoll5 == 10 || pRoll5 == 23 || pRoll5 == 36 || pRoll5 == 49) {
      document.querySelector(".img11").src = "images/card" + pRoll5 + ".png";
      pValue5 = 10;
  } else if (pRoll5 == 11 || pRoll5 == 24 || pRoll5 == 37 || pRoll5 == 50) {
      document.querySelector(".img11").src = "images/card" + pRoll5 + ".png";
      pValue5 = 10;
  } else if (pRoll5 == 12 || pRoll5 == 25 || pRoll5 == 38 || pRoll5 == 51) {
      document.querySelector(".img11").src = "images/card" + pRoll5 + ".png";
      pValue5 = 10;
  } else if (pRoll5 == 13 || pRoll5 == 26 || pRoll5 == 39 || pRoll5 == 52) {
      document.querySelector(".img11").src = "images/card" + pRoll5 + ".png";
      pValue5 = 10;
  }

  document.querySelector(".img11").classList.remove("hidden");

  if (pValue1 + pValue2 + pValue3 + pValue4 + pValue5 > 21) {
    if (pValue1 == 11) {
      pValue1 = 1;
    } else if (pValue2 == 11) {
      pValue2 = 1;
    } else if (pValue3 == 11) {
      pValue3 = 1;
    } else if (pValue4 == 11) {
      pValue4 = 1;
    } else if (pValue5 == 11){
      pValue5 = 1;
    } else {
    document.querySelector("h1").innerHTML = "Bust! Dealer Wins!";
    document.querySelector(".hitButton, .standButton").classList.add("displayNone");
    document.querySelector(".standButton").classList.add("displayNone");
    document.querySelector(".playButton").classList.remove("displayNone");
    pValueTotal = pValue1 + pValue2 + pValue3 + pValue4 + pValue5 + pValue6;
    dValueTotal = dValue1 + dValue2 + dValue3 + dValue4 + dValue5 + dValue6;
    document.querySelector(".dealer-score").innerHTML = "Dealer: " + dValueTotal;
    document.querySelector(".player-score").innerHTML = "Player: " + pValueTotal;
    chipCount = chipCount - chipBet;
    document.querySelector(".chip-count").innerHTML = "Chips: " + chipCount;
    }
  } else {
    pValueTotal = pValue1 + pValue2 + pValue3 + pValue4 + pValue5 + pValue6;
    dValueTotal = dValue1 + dValue2 + dValue3 + dValue4 + dValue5 + dValue6;
    document.querySelector(".dealer-score").innerHTML = "Dealer: " + dValueTotal;
    document.querySelector(".player-score").innerHTML = "Player: " + pValueTotal;
  }

}

function hitMe4() {

  pRoll6 = (Math.floor(Math.random() * 52) + 1);
  while (pRoll6 == pRoll1 || pRoll6 == pRoll2 || pRoll6 == pRoll3 || pRoll6 == pRoll4 || pRoll6 == pRoll5 || pRoll6 == dRoll1) {
    pRoll6 = (Math.floor(Math.random() * 52) + 1);
  }

  if (pRoll6 == 1 || pRoll6 == 14 || pRoll6 == 27 || pRoll6 == 40) {
      document.querySelector(".img12").src = "images/card" + pRoll6 + ".png";
      pValue6 = 11;
  } else if (pRoll6 == 2 || pRoll6 == 15 || pRoll6 == 28 || pRoll6 == 41) {
      document.querySelector(".img12").src = "images/card" + pRoll6 + ".png";
      pValue6 = 2;
  } else if (pRoll6 == 3 || pRoll6 == 16 || pRoll6 == 29 || pRoll6 == 42) {
      document.querySelector(".img12").src = "images/card" + pRoll6 + ".png";
      pValue6 = 3;
  } else if (pRoll6 == 4 || pRoll6 == 17 || pRoll6 == 30 || pRoll6 == 43) {
      document.querySelector(".img12").src = "images/card" + pRoll6 + ".png";
      pValue6 = 4;
  } else if (pRoll6 == 5 || pRoll6 == 18 || pRoll6 == 31 || pRoll6 == 44) {
      document.querySelector(".img12").src = "images/card" + pRoll6 + ".png";
      pValue6 = 5;
  } else if (pRoll6 == 6 || pRoll6 == 19 || pRoll6 == 32 || pRoll6 == 45) {
      document.querySelector(".img12").src = "images/card" + pRoll6 + ".png";
      pValue6 = 6;
  } else if (pRoll6 == 7 || pRoll6 == 20 || pRoll6 == 33 || pRoll6 == 46) {
      document.querySelector(".img12").src = "images/card" + pRoll6 + ".png";
      pValue6 = 7;
  } else if (pRoll6 == 8 || pRoll6 == 21 || pRoll6 == 34 || pRoll6 == 47) {
      document.querySelector(".img12").src = "images/card" + pRoll6 + ".png";
      pValue6 = 8;
  } else if (pRoll6 == 9 || pRoll6 == 22 || pRoll6 == 35 || pRoll6 == 48) {
      document.querySelector(".img12").src = "images/card" + pRoll6 + ".png";
      pValue6 = 9;
  } else if (pRoll6 == 10 || pRoll6 == 23 || pRoll6 == 36 || pRoll6 == 49) {
      document.querySelector(".img12").src = "images/card" + pRoll6 + ".png";
      pValue6 = 10;
  } else if (pRoll6 == 11 || pRoll6 == 24 || pRoll6 == 37 || pRoll6 == 50) {
      document.querySelector(".img12").src = "images/card" + pRoll6 + ".png";
      pValue6 = 10;
  } else if (pRoll6 == 12 || pRoll6 == 25 || pRoll6 == 38 || pRoll6 == 51) {
      document.querySelector(".img12").src = "images/card" + pRoll6 + ".png";
      pValue6 = 10;
  } else if (pRoll6 == 13 || pRoll6 == 26 || pRoll6 == 39 || pRoll6 == 52) {
      document.querySelector(".img12").src = "images/card" + pRoll6 + ".png";
      pValue6 = 10;
  }

  document.querySelector(".img12").classList.remove("hidden");

  if (pValue1 + pValue2 + pValue3 + pValue4 + pValue5 + pValue6 > 21) {
    if (pValue1 == 11) {
      pValue1 = 1;
    } else if (pValue2 == 11) {
      pValue2 = 1;
    } else if (pValue3 == 11) {
      pValue3 = 1;
    } else if (pValue4 == 11) {
      pValue4 = 1;
    } else if (pValue5 == 11) {
      pValue5 = 1;
    } else if (pValue6 == 11) {
      pValue6 = 1;
    } else {
    document.querySelector("h1").innerHTML = "Bust! Dealer Wins!";
    document.querySelector(".hitButton, .standButton").classList.add("displayNone");
    document.querySelector(".standButton").classList.add("displayNone");
    document.querySelector(".playButton").classList.remove("displayNone");
    pValueTotal = pValue1 + pValue2 + pValue3 + pValue4 + pValue5 + pValue6;
    dValueTotal = dValue1 + dValue2 + dValue3 + dValue4 + dValue5 + dValue6;
    document.querySelector(".dealer-score").innerHTML = "Dealer: " + dValueTotal;
    document.querySelector(".player-score").innerHTML = "Player: " + pValueTotal;
    chipCount = chipCount - chipBet;
    document.querySelector(".chip-count").innerHTML = "Chips: " + chipCount;
    }
  } else {
    pValueTotal = pValue1 + pValue2 + pValue3 + pValue4 + pValue5 + pValue6;
    dValueTotal = dValue1 + dValue2 + dValue3 + dValue4 + dValue5 + dValue6;
    document.querySelector(".dealer-score").innerHTML = "Dealer: " + dValueTotal;
    document.querySelector(".player-score").innerHTML = "Player: " + pValueTotal;
  }

}

function stand() {


  dRoll2 = (Math.floor(Math.random() * 52) + 1);
  while (dRoll2 == pRoll1 || dRoll2 == pRoll2 || dRoll2 == pRoll3 || dRoll2 == pRoll4 || dRoll2 == pRoll5 || dRoll2 == pRoll6 || dRoll2 == dRoll1) {
    dRoll2 = (Math.floor(Math.random() * 52) + 1);
  }
  dRoll3 = (Math.floor(Math.random() * 52) + 1);
  while (dRoll3 == pRoll1 || dRoll3 == pRoll2 || dRoll3 == pRoll3 || dRoll3 == pRoll4 || dRoll3 == pRoll5 || dRoll3 == pRoll6 || dRoll3 == dRoll1 || dRoll3 == dRoll2) {
    dRoll3 = (Math.floor(Math.random() * 52) + 1);
  }
  dRoll4 = (Math.floor(Math.random() * 52) + 1);
  while (dRoll4 == pRoll1 || dRoll4 == pRoll2 || dRoll4 == pRoll3 || dRoll4 == pRoll4 || dRoll4 == pRoll5 || dRoll4 == pRoll6 || dRoll4 == dRoll1 || dRoll4 == dRoll2 || dRoll4 == dRoll3) {
    dRoll4 = (Math.floor(Math.random() * 52) + 1);
  }
  dRoll5 = (Math.floor(Math.random() * 52) + 1);
  while (dRoll5 == pRoll1 || dRoll5 == pRoll2 || dRoll5 == pRoll3 || dRoll5 == pRoll4 || dRoll5 == pRoll5 || dRoll5 == pRoll6 || dRoll5 == dRoll1 || dRoll5 == dRoll2 || dRoll5 == dRoll3 || dRoll5 == dRoll4) {
    dRoll5 = (Math.floor(Math.random() * 52) + 1);
  }
  dRoll6 = (Math.floor(Math.random() * 52) + 1);
  while (dRoll6 == pRoll1 || dRoll6 == pRoll2 || dRoll6 == pRoll3 || dRoll6 == pRoll4 || dRoll6 == pRoll5 || dRoll6 == pRoll6 || dRoll6 == dRoll1 || dRoll6 == dRoll2 || dRoll6 == dRoll3 || dRoll6 == dRoll4 || dRoll6 == dRoll5) {
    dRoll6 = (Math.floor(Math.random() * 52) + 1);
  }


  if (dRoll2 == 1 || dRoll2 == 14 || dRoll2 == 27 || dRoll2 == 40) {
      document.querySelector(".img2").src = "images/card" + dRoll2 + ".png";
      dValue2 = 11;
  } else if (dRoll2 == 2 || dRoll2 == 15 || dRoll2 == 28 || dRoll2 == 41) {
      document.querySelector(".img2").src = "images/card" + dRoll2 + ".png";
      dValue2 = 2;
  } else if (dRoll2 == 3 || dRoll2 == 16 || dRoll2 == 29 || dRoll2 == 42) {
      document.querySelector(".img2").src = "images/card" + dRoll2 + ".png";
      dValue2 = 3;
  } else if (dRoll2 == 4 || dRoll2 == 17 || dRoll2 == 30 || dRoll2 == 43) {
      document.querySelector(".img2").src = "images/card" + dRoll2 + ".png";
      dValue2 = 4;
  } else if (dRoll2 == 5 || dRoll2 == 18 || dRoll2 == 31 || dRoll2 == 44) {
      document.querySelector(".img2").src = "images/card" + dRoll2 + ".png";
      dValue2 = 5;
  } else if (dRoll2 == 6 || dRoll2 == 19 || dRoll2 == 32 || dRoll2 == 45) {
      document.querySelector(".img2").src = "images/card" + dRoll2 + ".png";
      dValue2 = 6;
  } else if (dRoll2 == 7 || dRoll2 == 20 || dRoll2 == 33 || dRoll2 == 46) {
      document.querySelector(".img2").src = "images/card" + dRoll2 + ".png";
      dValue2 = 7;
  } else if (dRoll2 == 8 || dRoll2 == 21 || dRoll2 == 34 || dRoll2 == 47) {
      document.querySelector(".img2").src = "images/card" + dRoll2 + ".png";
      dValue2 = 8;
  } else if (dRoll2 == 9 || dRoll2 == 22 || dRoll2 == 35 || dRoll2 == 48) {
      document.querySelector(".img2").src = "images/card" + dRoll2 + ".png";
      dValue2 = 9;
  } else if (dRoll2 == 10 || dRoll2 == 23 || dRoll2 == 36 || dRoll2 == 49) {
      document.querySelector(".img2").src = "images/card" + dRoll2 + ".png";
      dValue2 = 10;
  } else if (dRoll2 == 11 || dRoll2 == 24 || dRoll2 == 37 || dRoll2 == 50) {
      document.querySelector(".img2").src = "images/card" + dRoll2 + ".png";
      dValue2 = 10;
  } else if (dRoll2 == 12 || dRoll2 == 25 || dRoll2 == 38 || dRoll2 == 51) {
      document.querySelector(".img2").src = "images/card" + dRoll2 + ".png";
      dValue2 = 10;
  } else if (dRoll2 == 13 || dRoll2 == 26 || dRoll2 == 39 || dRoll2 == 52) {
      document.querySelector(".img2").src = "images/card" + dRoll2 + ".png";
      dValue2 = 10;
  }

  pValueTotal = pValue1 + pValue2 + pValue3 + pValue4 + pValue5 + pValue6;
  dValueTotal = dValue1 + dValue2 + dValue3 + dValue4 + dValue5 + dValue6;

  if (dValueTotal == 22) { //Check to make sure Dealer doesn't roll double Aces that will "bust" incorrectly
    if (dValue1 == 11) {
      dValue1 = 1;
    } else if (dValue2 == 11) {
      dValue2 = 1;
    }
  }

  pValueTotal = pValue1 + pValue2 + pValue3 + pValue4 + pValue5 + pValue6;
  dValueTotal = dValue1 + dValue2 + dValue3 + dValue4 + dValue5 + dValue6;
  document.querySelector(".dealer-score").innerHTML = "Dealer: " + dValueTotal;
  document.querySelector(".player-score").innerHTML = "Player: " + pValueTotal;

  if (dValueTotal >= 17) {
    document.querySelector(".hitButton, .standButton").classList.add("displayNone");
    document.querySelector(".standButton").classList.add("displayNone");
    document.querySelector(".playButton").classList.remove("displayNone");
    if (dValueTotal > pValueTotal) {
      document.querySelector("h1").innerHTML = "Dealer Wins!";
      chipCount = chipCount - chipBet;
      document.querySelector(".chip-count").innerHTML = "Chips: " + chipCount;
    } else if (dValueTotal == pValueTotal) {
      document.querySelector("h1").innerHTML = "Draw!";
    } else if (dValueTotal < pValueTotal) {
      document.querySelector("h1").innerHTML = "Player Wins!";
      chipCount = chipCount + chipBet;
      document.querySelector(".chip-count").innerHTML = "Chips: " + chipCount;
    }
  } else if (dValueTotal < 17) {

    if (dRoll3 == 1 || dRoll3 == 14 || dRoll3 == 27 || dRoll3 == 40) {
        document.querySelector(".img3").src = "images/card" + dRoll3 + ".png";
        dValue3 = 11;
    } else if (dRoll3 == 2 || dRoll3 == 15 || dRoll3 == 28 || dRoll3 == 41) {
        document.querySelector(".img3").src = "images/card" + dRoll3 + ".png";
        dValue3 = 2;
    } else if (dRoll3 == 3 || dRoll3 == 16 || dRoll3 == 29 || dRoll3 == 42) {
        document.querySelector(".img3").src = "images/card" + dRoll3 + ".png";
        dValue3 = 3;
    } else if (dRoll3 == 4 || dRoll3 == 17 || dRoll3 == 30 || dRoll3 == 43) {
        document.querySelector(".img3").src = "images/card" + dRoll3 + ".png";
        dValue3 = 4;
    } else if (dRoll3 == 5 || dRoll3 == 18 || dRoll3 == 31 || dRoll3 == 44) {
        document.querySelector(".img3").src = "images/card" + dRoll3 + ".png";
        dValue3 = 5;
    } else if (dRoll3 == 6 || dRoll3 == 19 || dRoll3 == 32 || dRoll3 == 45) {
        document.querySelector(".img3").src = "images/card" + dRoll3 + ".png";
        dValue3 = 6;
    } else if (dRoll3 == 7 || dRoll3 == 20 || dRoll3 == 33 || dRoll3 == 46) {
        document.querySelector(".img3").src = "images/card" + dRoll3 + ".png";
        dValue3 = 7;
    } else if (dRoll3 == 8 || dRoll3 == 21 || dRoll3 == 34 || dRoll3 == 47) {
        document.querySelector(".img3").src = "images/card" + dRoll3 + ".png";
        dValue3 = 8;
    } else if (dRoll3 == 9 || dRoll3 == 22 || dRoll3 == 35 || dRoll3 == 48) {
        document.querySelector(".img3").src = "images/card" + dRoll3 + ".png";
        dValue3 = 9;
    } else if (dRoll3 == 10 || dRoll3 == 23 || dRoll3 == 36 || dRoll3 == 49) {
        document.querySelector(".img3").src = "images/card" + dRoll3 + ".png";
        dValue3 = 10;
    } else if (dRoll3 == 11 || dRoll3 == 24 || dRoll3 == 37 || dRoll3 == 50) {
        document.querySelector(".img3").src = "images/card" + dRoll3 + ".png";
        dValue3 = 10;
    } else if (dRoll3 == 12 || dRoll3 == 25 || dRoll3 == 38 || dRoll3 == 51) {
        document.querySelector(".img3").src = "images/card" + dRoll3 + ".png";
        dValue3 = 10;
    } else if (dRoll3 == 13 || dRoll3 == 26 || dRoll3 == 39 || dRoll3 == 52) {
        document.querySelector(".img3").src = "images/card" + dRoll3 + ".png";
        dValue3 = 10;
    }

    (document.querySelector(".img3").classList.remove("hidden"));

    pValueTotal = pValue1 + pValue2 + pValue3 + pValue4 + pValue5 + pValue6;
    dValueTotal = dValue1 + dValue2 + dValue3 + dValue4 + dValue5 + dValue6;

    if (dValueTotal > 22) { //Check to make sure Dealer doesn't roll double Aces that will "bust" incorrectly
      if (dValue1 == 11) {
        dValue1 = 1;
      } else if (dValue2 == 11) {
        dValue2 = 1;
      } else if (dValue3 == 11) {
        dValue3 = 1;
      }
    }

    pValueTotal = pValue1 + pValue2 + pValue3 + pValue4 + pValue5 + pValue6;
    dValueTotal = dValue1 + dValue2 + dValue3 + dValue4 + dValue5 + dValue6;
    document.querySelector(".dealer-score").innerHTML = "Dealer: " + dValueTotal;
    document.querySelector(".player-score").innerHTML = "Player: " + pValueTotal;

    if (dValueTotal > 21) {
      document.querySelector(".hitButton, .standButton").classList.add("displayNone");
      document.querySelector(".standButton").classList.add("displayNone");
      document.querySelector(".playButton").classList.remove("displayNone");
      document.querySelector("h1").innerHTML = "Player Wins!";
      chipCount = chipCount + chipBet;
      document.querySelector(".chip-count").innerHTML = "Chips: " + chipCount;
    } else if (dValueTotal >= 17) {
        document.querySelector(".hitButton, .standButton").classList.add("displayNone");
        document.querySelector(".standButton").classList.add("displayNone");
        document.querySelector(".playButton").classList.remove("displayNone");
        if (dValueTotal > pValueTotal) {
          document.querySelector("h1").innerHTML = "Dealer Wins!";
          chipCount = chipCount - chipBet;
          document.querySelector(".chip-count").innerHTML = "Chips: " + chipCount;
        } else if (dValueTotal == pValueTotal) {
          document.querySelector("h1").innerHTML = "Draw!";
        } else if (dValueTotal < pValueTotal) {
          document.querySelector("h1").innerHTML = "Player Wins!";
          chipCount = chipCount + chipBet;
          document.querySelector(".chip-count").innerHTML = "Chips: " + chipCount;
        }
      } else if (dValueTotal < 17) {

        if (dRoll4 == 1 || dRoll4 == 14 || dRoll4 == 27 || dRoll4 == 40) {
            document.querySelector(".img4").src = "images/card" + dRoll4 + ".png";
            dValue4 = 11;
        } else if (dRoll4 == 2 || dRoll4 == 15 || dRoll4 == 28 || dRoll4 == 41) {
            document.querySelector(".img4").src = "images/card" + dRoll4 + ".png";
            dValue4 = 2;
        } else if (dRoll4 == 3 || dRoll4 == 16 || dRoll4 == 29 || dRoll4 == 42) {
            document.querySelector(".img4").src = "images/card" + dRoll4 + ".png";
            dValue4 = 3;
        } else if (dRoll4 == 4 || dRoll4 == 17 || dRoll4 == 30 || dRoll4 == 43) {
            document.querySelector(".img4").src = "images/card" + dRoll4 + ".png";
            dValue4 = 4;
        } else if (dRoll4 == 5 || dRoll4 == 18 || dRoll4 == 31 || dRoll4 == 44) {
            document.querySelector(".img4").src = "images/card" + dRoll4 + ".png";
            dValue4 = 5;
        } else if (dRoll4 == 6 || dRoll4 == 19 || dRoll4 == 32 || dRoll4 == 45) {
            document.querySelector(".img4").src = "images/card" + dRoll4 + ".png";
            dValue4 = 6;
        } else if (dRoll4 == 7 || dRoll4 == 20 || dRoll4 == 33 || dRoll4 == 46) {
            document.querySelector(".img4").src = "images/card" + dRoll4 + ".png";
            dValue4 = 7;
        } else if (dRoll4 == 8 || dRoll4 == 21 || dRoll4 == 34 || dRoll4 == 47) {
            document.querySelector(".img4").src = "images/card" + dRoll4 + ".png";
            dValue4 = 8;
        } else if (dRoll4 == 9 || dRoll4 == 22 || dRoll4 == 35 || dRoll4 == 48) {
            document.querySelector(".img4").src = "images/card" + dRoll4 + ".png";
            dValue4 = 9;
        } else if (dRoll4 == 10 || dRoll4 == 23 || dRoll4 == 36 || dRoll4 == 49) {
            document.querySelector(".img4").src = "images/card" + dRoll4 + ".png";
            dValue4 = 10;
        } else if (dRoll4 == 11 || dRoll4 == 24 || dRoll4 == 37 || dRoll4 == 50) {
            document.querySelector(".img4").src = "images/card" + dRoll4 + ".png";
            dValue4 = 10;
        } else if (dRoll4 == 12 || dRoll4 == 25 || dRoll4 == 38 || dRoll4 == 51) {
            document.querySelector(".img4").src = "images/card" + dRoll4 + ".png";
            dValue4 = 10;
        } else if (dRoll4 == 13 || dRoll4 == 26 || dRoll4 == 39 || dRoll4 == 52) {
            document.querySelector(".img4").src = "images/card" + dRoll4 + ".png";
            dValue4 = 10;
        }

        (document.querySelector(".img4").classList.remove("hidden"));

        pValueTotal = pValue1 + pValue2 + pValue3 + pValue4 + pValue5 + pValue6;
        dValueTotal = dValue1 + dValue2 + dValue3 + dValue4 + dValue5 + dValue6;

        if (dValueTotal > 22) { //Check to make sure Dealer doesn't roll double Aces that will "bust" incorrectly
          if (dValue1 == 11) {
            dValue1 = 1;
          } else if (dValue2 == 11) {
            dValue2 = 1;
          } else if (dValue3 == 11) {
            dValue3 = 1;
          } else if (dValue4 == 11) {
            dValue4 = 1;
          }
        }

        pValueTotal = pValue1 + pValue2 + pValue3 + pValue4 + pValue5 + pValue6;
        dValueTotal = dValue1 + dValue2 + dValue3 + dValue4 + dValue5 + dValue6;
        document.querySelector(".dealer-score").innerHTML = "Dealer: " + dValueTotal;
        document.querySelector(".player-score").innerHTML = "Player: " + pValueTotal;

        if (dValueTotal > 21) {
          document.querySelector(".hitButton, .standButton").classList.add("displayNone");
          document.querySelector(".standButton").classList.add("displayNone");
          document.querySelector(".playButton").classList.remove("displayNone");
          document.querySelector("h1").innerHTML = "Player Wins!";
          chipCount = chipCount + chipBet;
          document.querySelector(".chip-count").innerHTML = "Chips: " + chipCount;
        } else if (dValueTotal >= 17) {
          document.querySelector(".hitButton, .standButton").classList.add("displayNone");
          document.querySelector(".standButton").classList.add("displayNone");
          document.querySelector(".playButton").classList.remove("displayNone");
          if (dValueTotal > pValueTotal) {
            document.querySelector("h1").innerHTML = "Dealer Wins!";
            chipCount = chipCount - chipBet;
            document.querySelector(".chip-count").innerHTML = "Chips: " + chipCount;
          } else if (dValueTotal == pValueTotal) {
            document.querySelector("h1").innerHTML = "Draw!";
          } else if (dValueTotal < pValueTotal) {
            document.querySelector("h1").innerHTML = "Player Wins!";
            chipCount = chipCount + chipBet;
            document.querySelector(".chip-count").innerHTML = "Chips: " + chipCount;
          }
        } else if (dValueTotal < 17) {
          console.log("congratz you broke it");
        }
      }

  }

}
