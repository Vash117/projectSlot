window.addEventListener("load", setData);
document.querySelector(".creditandBGN").addEventListener("click", reSetCredit);
function reSetCredit() {
  let confirmed = confirm("Are you sure you want to reset your Credit");
  if (confirmed) {
    document.getElementById("credit").textContent = 10000;
    uploadData();
  }
}
//SOUNDS
const winSound = new Audio("win.wav");
const stopReel = new Audio("stopReel.wav");
const LinesAndBetSound = new Audio("linesAndBet.wav");
const misteryWin = new Audio("misteryWin.mp3");
function stopSound() { 
  stopReel.play();
}
y = 1;
// lines + button 'lines-'
var lineTwoIsTrue = false;
var lineThreeIsTrue = false;
var lineFourIsTrue = false;
var lineFiveIsTrue = false;
function linesPlus() {
  document.getElementById("lines-").innerHTML = "lines -";
  document.getElementById("lines-").style.display = "block";
  document.getElementById("lines-").style.pointerEvents = "all";
  document.getElementById("totalLines").innerHTML = ++y;
  var v = z * y;
  document.getElementById("totalBet").innerHTML = v;
  LinesAndBetSound.currentTime = 0;
  LinesAndBetSound.play();
  if (y == 5) {
    document.getElementById("totalLines").innerHTML = 5;
    document.getElementById("lines+").style.pointerEvents = "none";
    document.getElementById("lines+").innerHTML = "MAX LINES";
  }
  if (y == 5) {
    document.getElementById("lineoneline").style.display = "inline";
    document.getElementById("lineoneline1").style.display = "inline";
    document.getElementById("lineoneline2").style.display = "inline";
    document.getElementById("lineoneline3").style.display = "inline";
    document.getElementById("lineoneline4").style.display = "inline";
    document.getElementById("lineTwoline").style.display = "inline";
    document.getElementById("lineTwoline1").style.display = "inline";
    document.getElementById("lineTwoline2").style.display = "inline";
    document.getElementById("lineTwoline3").style.display = "inline";
    document.getElementById("lineTwoline4").style.display = "inline";
    document.getElementById("lineThreeline").style.display = "inline";
    document.getElementById("lineThreeline1").style.display = "inline";
    document.getElementById("lineThreeline2").style.display = "inline";
    document.getElementById("lineThreeline3").style.display = "inline";
    document.getElementById("lineThreeline4").style.display = "inline";
    document.getElementById("lineFourlineOne").style.display = "inline";
    document.getElementById("lineFourlineFive").style.display = "inline";
    document.getElementById("lineFivelineOne").style.display = "inline";
    document.getElementById("lineFivelineFive").style.display = "inline";
    lineTwoIsTrue = true;
    lineThreeIsTrue = true;
    lineFourIsTrue = true;
    lineFiveIsTrue = true;
  } else if (y == 4) {
    document.getElementById("lineoneline").style.display = "inline";
    document.getElementById("lineoneline1").style.display = "inline";
    document.getElementById("lineoneline2").style.display = "inline";
    document.getElementById("lineoneline3").style.display = "inline";
    document.getElementById("lineoneline4").style.display = "inline";
    document.getElementById("lineTwoline").style.display = "inline";
    document.getElementById("lineTwoline1").style.display = "inline";
    document.getElementById("lineTwoline2").style.display = "inline";
    document.getElementById("lineTwoline3").style.display = "inline";
    document.getElementById("lineTwoline4").style.display = "inline";
    document.getElementById("lineThreeline").style.display = "inline";
    document.getElementById("lineThreeline1").style.display = "inline";
    document.getElementById("lineThreeline2").style.display = "inline";
    document.getElementById("lineThreeline3").style.display = "inline";
    document.getElementById("lineThreeline4").style.display = "inline";
    document.getElementById("lineFourlineOne").style.display = "inline";
    document.getElementById("lineFourlineFive").style.display = "inline";
    lineTwoIsTrue = true;
    lineThreeIsTrue = true;
    lineFourIsTrue = true;
  } else if (y == 3) {
    document.getElementById("lineoneline").style.display = "inline";
    document.getElementById("lineoneline1").style.display = "inline";
    document.getElementById("lineoneline2").style.display = "inline";
    document.getElementById("lineoneline3").style.display = "inline";
    document.getElementById("lineoneline4").style.display = "inline";
    document.getElementById("lineTwoline").style.display = "inline";
    document.getElementById("lineTwoline1").style.display = "inline";
    document.getElementById("lineTwoline2").style.display = "inline";
    document.getElementById("lineTwoline3").style.display = "inline";
    document.getElementById("lineTwoline4").style.display = "inline";
    document.getElementById("lineThreeline").style.display = "inline";
    document.getElementById("lineThreeline1").style.display = "inline";
    document.getElementById("lineThreeline2").style.display = "inline";
    document.getElementById("lineThreeline3").style.display = "inline";
    document.getElementById("lineThreeline4").style.display = "inline";
    lineTwoIsTrue = true;
    lineThreeIsTrue = true;
  } else if (y == 2) {
    document.getElementById("lineoneline").style.display = "inline";
    document.getElementById("lineoneline1").style.display = "inline";
    document.getElementById("lineoneline2").style.display = "inline";
    document.getElementById("lineoneline3").style.display = "inline";
    document.getElementById("lineoneline4").style.display = "inline";
    document.getElementById("lineTwoline").style.display = "inline";
    document.getElementById("lineTwoline1").style.display = "inline";
    document.getElementById("lineTwoline2").style.display = "inline";
    document.getElementById("lineTwoline3").style.display = "inline";
    document.getElementById("lineTwoline4").style.display = "inline";
    lineTwoIsTrue = true;
  }
}
//lines minus button
function LinesMinus() {
  document.getElementById("lines+").style.pointerEvents = "all";
  document.getElementById("lines+").innerHTML = "lines +";
  document.getElementById("totalLines").innerHTML = --y;
  var v = z * y;
  document.getElementById("totalBet").innerHTML = v;
  LinesAndBetSound.currentTime = 0;
  LinesAndBetSound.play();
  if (y <= 1) {
    document.getElementById("totalLines").innerHTML = 1;
    document.getElementById("lines-").innerHTML = "MIN LINES";
    document.getElementById("lines-").style.pointerEvents = "none";
    document.getElementById("lineoneline").style.display = "inline";
    document.getElementById("lineoneline1").style.display = "inline";
    document.getElementById("lineoneline2").style.display = "inline";
    document.getElementById("lineoneline3").style.display = "inline";
    document.getElementById("lineoneline4").style.display = "inline";
    document.getElementById("lineTwoline").style.display = "none";
    document.getElementById("lineTwoline1").style.display = "none";
    document.getElementById("lineTwoline2").style.display = "none";
    document.getElementById("lineTwoline3").style.display = "none";
    document.getElementById("lineTwoline4").style.display = "none";
    document.getElementById("lineThreeline").style.display = "none";
    document.getElementById("lineThreeline1").style.display = "none";
    document.getElementById("lineThreeline2").style.display = "none";
    document.getElementById("lineThreeline3").style.display = "none";
    document.getElementById("lineThreeline4").style.display = "none";
    document.getElementById("lineFourlineOne").style.display = "none";
    document.getElementById("lineFourlineFive").style.display = "none";
    document.getElementById("lineFivelineOne").style.display = "none";
    document.getElementById("lineFivelineFive").style.display = "none";
  }
  if (y < 2) {
    document.getElementById("lineoneline").style.display = "inline";
    document.getElementById("lineoneline1").style.display = "inline";
    document.getElementById("lineoneline2").style.display = "inline";
    document.getElementById("lineoneline3").style.display = "inline";
    document.getElementById("lineoneline4").style.display = "inline";
    document.getElementById("lineTwoline").style.display = "none";
    document.getElementById("lineTwoline1").style.display = "none";
    document.getElementById("lineTwoline2").style.display = "none";
    document.getElementById("lineTwoline3").style.display = "none";
    document.getElementById("lineTwoline4").style.display = "none";
    document.getElementById("lineThreeline").style.display = "none";
    document.getElementById("lineThreeline1").style.display = "none";
    document.getElementById("lineThreeline2").style.display = "none";
    document.getElementById("lineThreeline3").style.display = "none";
    document.getElementById("lineThreeline4").style.display = "none";
    document.getElementById("lineFourlineOne").style.display = "none";
    document.getElementById("lineFourlineFive").style.display = "none";
    document.getElementById("lineFivelineOne").style.display = "none";
    document.getElementById("lineFivelineFive").style.display = "none";
    lineTwoIsTrue = false;
    lineThreeIsTrue = false;
    lineFourIsTrue = false;
    lineFiveIsTrue = false;
  } else if (y < 3) {
    document.getElementById("lineoneline").style.display = "inline";
    document.getElementById("lineoneline1").style.display = "inline";
    document.getElementById("lineoneline2").style.display = "inline";
    document.getElementById("lineoneline3").style.display = "inline";
    document.getElementById("lineoneline4").style.display = "inline";
    document.getElementById("lineTwoline").style.display = "inline";
    document.getElementById("lineTwoline1").style.display = "inline";
    document.getElementById("lineTwoline2").style.display = "inline";
    document.getElementById("lineTwoline3").style.display = "inline";
    document.getElementById("lineTwoline4").style.display = "inline ";
    document.getElementById("lineThreeline").style.display = "none";
    document.getElementById("lineThreeline1").style.display = "none";
    document.getElementById("lineThreeline2").style.display = "none";
    document.getElementById("lineThreeline3").style.display = "none";
    document.getElementById("lineThreeline4").style.display = "none";
    document.getElementById("lineFourlineOne").style.display = "none";
    document.getElementById("lineFourlineFive").style.display = "none";
    document.getElementById("lineFivelineOne").style.display = "none";
    document.getElementById("lineFivelineFive").style.display = "none";
    lineThreeIsTrue = false;
    lineFourIsTrue = false;
    lineFiveIsTrue = false;
  } else if (y < 4) {
    document.getElementById("lineoneline").style.display = "inline";
    document.getElementById("lineoneline1").style.display = "inline";
    document.getElementById("lineoneline2").style.display = "inline";
    document.getElementById("lineoneline3").style.display = "inline";
    document.getElementById("lineoneline4").style.display = "inline";
    document.getElementById("lineTwoline").style.display = "inline";
    document.getElementById("lineTwoline1").style.display = "inline";
    document.getElementById("lineTwoline2").style.display = "inline";
    document.getElementById("lineTwoline3").style.display = "inline";
    document.getElementById("lineTwoline4").style.display = "inline ";
    document.getElementById("lineThreeline").style.display = "inline";
    document.getElementById("lineThreeline1").style.display = "inline";
    document.getElementById("lineThreeline2").style.display = "inline";
    document.getElementById("lineThreeline3").style.display = "inline";
    document.getElementById("lineThreeline4").style.display = "inline";
    document.getElementById("lineFourlineOne").style.display = "none";
    document.getElementById("lineFourlineFive").style.display = "none";
    document.getElementById("lineFivelineOne").style.display = "none";
    document.getElementById("lineFivelineFive").style.display = "none";
    lineFourIsTrue = false;
    lineFiveIsTrue = false;
  } else if (y < 5) {
    document.getElementById("lineoneline").style.display = "inline";
    document.getElementById("lineoneline1").style.display = "inline";
    document.getElementById("lineoneline2").style.display = "inline";
    document.getElementById("lineoneline3").style.display = "inline";
    document.getElementById("lineoneline4").style.display = "inline";
    document.getElementById("lineTwoline").style.display = "inline";
    document.getElementById("lineTwoline1").style.display = "inline";
    document.getElementById("lineTwoline2").style.display = "inline";
    document.getElementById("lineTwoline3").style.display = "inline";
    document.getElementById("lineTwoline4").style.display = "inline ";
    document.getElementById("lineThreeline").style.display = "inline";
    document.getElementById("lineThreeline1").style.display = "inline";
    document.getElementById("lineThreeline2").style.display = "inline";
    document.getElementById("lineThreeline3").style.display = "inline";
    document.getElementById("lineThreeline4").style.display = "inline";
    document.getElementById("lineFourlineOne").style.display = "inline";
    document.getElementById("lineFourlineFive").style.display = "inline";
    document.getElementById("lineFivelineOne").style.display = "none";
    document.getElementById("lineFivelineFive").style.display = "none";
    lineFiveIsTrue = false;
  }
}

//total bet
var z = 0;
function betPlus() {
  document.getElementById("bet-").style.pointerEvents = "all";
  LinesAndBetSound.currentTime = 0;
  LinesAndBetSound.play();
  if (z >= 100) {
    document.getElementById("betPerLine").innerHTML = z += 100;
  } else if (z >= 25) {
    document.getElementById("betPerLine").innerHTML = z += 25;
  } else document.getElementById("betPerLine").innerHTML = z += 5;
  var v = z * y;
  document.getElementById("totalBet").innerHTML = v;
  document.getElementById("bet-").style.pointerEvents = "all";
}
function betMinus() {
  LinesAndBetSound.currentTime = 0;
  LinesAndBetSound.play();
  if (z > 100) {
    document.getElementById("betPerLine").innerHTML = z -= 100;
  } else if (z > 25) {
    document.getElementById("betPerLine").innerHTML = z -= 25;
  } else {
    document.getElementById("betPerLine").innerHTML = z -= 5;
  }
  var v = z * y;
  document.getElementById("totalBet").innerHTML = v;
  if (z <= 0) {
    document.getElementById("bet-").style.pointerEvents = "none";
  }
}
var totalBet = z * y;
var credit = document.getElementById("credit").innerHTML;
// simbols
var simbols = [
  "<img src=cherry.svg width =100% height =100%>",
  "<img src=orange.svg width =100% height =100%>",
  "<img src=plum.svg width =100% height =100%>",
  "<img src=lemon.svg width =100% height =100%>",
  "<img src=watermelon.svg width =100% height =100%>",
  "<img src=cherry.svg width =100% height =100%>",
  "<img src=lemon.svg width =100% height =100%>",
  "<img src=watermelon.svg width =100% height =100%>",
  "<img src=lemon.svg width =100% height =100%>",
  "<img src=lemon.svg width =100% height =100%>",
  "<img src=grape.svg width =100% height =100%>",
  "<img src=orange.svg width =100% height =100%>",
  "<img src=plum.svg width =100% height =100%>",
  "<img src=grape.svg width =100% height =100%>",
  "<img src=seven.svg width =100% height =100%>",
  "<img src=lemon.svg width =100% height =100%>",
  "<img src=orange.svg width =100% height =100%>",
  "<img src=plum.svg width =100% height =100%>",
  "<img src=grape.svg width =100% height =100%>",
  "<img src=seven.svg width =100% height =100%>",
  "<img src=cherry.svg width =100% height =100%>",
  "<img src=orange.svg width =100% height =100%>",
  "<img src=plum.svg width =100% height =100%>",
  "<img src=cherry.svg width =100% height =100%>",
  "<img src=watermelon.svg width =100% height =100%>",
  "<img src=cherry.svg width =100% height =100%>",
  "<img src=cherry.svg width =100% height =100%>",
  "<img src=lemon.svg width =100% height =100%>",
  "<img src=grape.svg width =100% height =100%>",
  "<img src=watermelon.svg width =100% height =100%>",
  "<img src=grape.svg width =100% height =100%>",
  "<img src=orange.svg width =100% height =100%>",
  "<img src=plum.svg width =100% height =100%>",
  "<img src=grape.svg width =100% height =100%>",
  "<img src=seven.svg width =100% height =100%>",
  "<img src=grape.svg width =100% height =100%>",
  "<img src=lemon.svg width =100% height =100%>",
  "<img src=plum.svg width =100% height =100%>",
  "<img src=grape.svg width =100% height =100%>",
  "<img src=lemon.svg width =100% height =100%>",
  "<img src=cherry.svg width =100% height =100%>",
  "<img src=orange.svg width =100% height =100%>",
  "<img src=plum.svg width =100% height =100%>",
  "<img src=cherry.svg width =100% height =100%>",
  "<img src=watermelon.svg width =100% height =100%>",
  "<img src=cherry.svg width =100% height =100%>",
  "<img src=lemon.svg width =100% height =100%>",
  "<img src=watermelon.svg width =100% height =100%>",
  "<img src=grape.svg width =100% height =100%>",
  "<img src=watermelon.svg width =100% height =100%>",
  "<img src=grape.svg width =100% height =100%>",
  "<img src=orange.svg width =100% height =100%>",
  "<img src=plum.svg width =100% height =100%>",
  "<img src=watermelon.svg width =100% height =100%>",
  "<img src=lemon.svg width =100% height =100%>",
  "<img src=grape.svg width =100% height =100%>",
  "<img src=orange.svg width =100% height =100%>",
  "<img src=lemon.svg width =100% height =100%>",
  "<img src=lemon.svg width =100% height =100%>",
  "<img src=seven.svg width =100% height =100%>",
  "<img src=cherry.svg width =100% height =100%>",
  "<img src=orange.svg width =100% height =100%>",
  "<img src=plum.svg width =100% height =100%>",
  "<img src=cherry.svg width =100% height =100%>",
  "<img src=watermelon.svg width =100% height =100%>",
  "<img src=cherry.svg width =100% height =100%>",
  "<img src=lemon.svg width =100% height =100%>",
  "<img src=watermelon.svg width =100% height =100%>",
  "<img src=lemon.svg width =100% height =100%>",
  "<img src=watermelon.svg width =100% height =100%>",
  "<img src=grape.svg width =100% height =100%>",
  "<img src=orange.svg width =100% height =100%>",
  "<img src=plum.svg width =100% height =100%>",
  "<img src=grape.svg width =100% height =100%>",
  "<img src=seven.svg width =100% height =100%>",
  "<img src=grape.svg width =100% height =100%>",
  "<img src=lemon.svg width =100% height =100%>",
  "<img src=plum.svg width =100% height =100%>",
  "<img src=grape.svg width =100% height =100%>",
  "<img src=lemon.svg width =100% height =100%>",
  "<img src=cherry.svg width =100% height =100%>",
  "<img src=orange.svg width =100% height =100%>",
  "<img src=plum.svg width =100% height =100%>",
  "<img src=cherry.svg width =100% height =100%>",
  "<img src=watermelon.svg width =100% height =100%>",
  "<img src=cherry.svg width =100% height =100%>",
  "<img src=cherry.svg width =100% height =100%>",
  "<img src=watermelon.svg width =100% height =100%>",
  "<img src=grape.svg width =100% height =100%>",
  "<img src=watermelon.svg width =100% height =100%>",
  "<img src=grape.svg width =100% height =100%>",
  "<img src=orange.svg width =100% height =100%>",
  "<img src=plum.svg width =100% height =100%>",
  "<img src=watermelon.svg width =100% height =100%>",
  "<img src=seven.svg width =100% height =100%>",
  "<img src=lemon.svg width =100% height =100%>",
  "<img src=orange.svg width =100% height =100%>",
  "<img src=plum.svg width =100% height =100%>",
  "<img src=watermelon.svg width =100% height =100%>",
  "<img src=seven.svg width =100% height =100%>",
];
// simbols to here

let spins = 0;
function start() {
  let startButton = document.getElementById("start");
  // gif flame clear :
  document.getElementById("lineOne").style.backgroundImage = "none";
  document.getElementById("lineTwo").style.backgroundImage = "none";
  document.getElementById("lineThree").style.backgroundImage = "none";
  document.getElementById("lineFour").style.backgroundImage = "none";
  document.getElementById("lineFive").style.backgroundImage = "none";
  document.getElementById("realOne").style.backgroundImage = "none";
  document.getElementById("realTwo").style.backgroundImage = "none";
  document.getElementById("realThree").style.backgroundImage = "none";
  document.getElementById("realFour").style.backgroundImage = "none";
  document.getElementById("realFive").style.backgroundImage = "none";
  document.getElementById("line3One").style.backgroundImage = "none";
  document.getElementById("line3Two").style.backgroundImage = "none";
  document.getElementById("line3Three").style.backgroundImage = "none";
  document.getElementById("line3Four").style.backgroundImage = "none";
  document.getElementById("line3Five").style.backgroundImage = "none";
  document.getElementById("lineOne").style.backgroundImage = "none";
  document.getElementById("realTwo").style.backgroundImage = "none";
  document.getElementById("line3Three").style.backgroundImage = "none";
  document.getElementById("realFour").style.backgroundImage = "none";
  document.getElementById("lineFive").style.backgroundImage = "none";
  document.getElementById("line3One").style.backgroundImage = "none";
  document.getElementById("realTwo").style.backgroundImage = "none";
  document.getElementById("lineThree").style.backgroundImage = "none";
  document.getElementById("realFour").style.backgroundImage = "none";
  document.getElementById("line3Five").style.backgroundImage = "none";
  spins++;
  let win = 0;
  document.getElementById("lineFourlineOne").style.display = "none";
  document.getElementById("lineFourlineFive").style.display = "none";
  document.getElementById("lineFivelineOne").style.display = "none";
  document.getElementById("lineFivelineFive").style.display = "none";
  if (y == 5) {
    lineTwoIsTrue = true;
    lineThreeIsTrue = true;
    lineFourIsTrue = true;
    lineFiveIsTrue = true;
  } else if (y == 4) {
    lineTwoIsTrue = true;
    lineThreeIsTrue = true;
    lineFourIsTrue = true;
  } else if (y == 3) {
    lineTwoIsTrue = true;
    lineThreeIsTrue = true;
  } else if (y == 2) {
    lineTwoIsTrue = true;
  } else if (y < 2) {
    lineTwoIsTrue = false;
    lineThreeIsTrue = false;
    lineFourIsTrue = false;
    lineFiveIsTrue = false;
  } else if (y < 3) {
    lineThreeIsTrue = false;
    lineFourIsTrue = false;
    lineFiveIsTrue = false;
  } else if (y < 4) {
    lineFourIsTrue = false;
    lineFiveIsTrue = false;
  } else if (y < 5) {
    lineFiveIsTrue = false;
  }
  var totalBet = z * y;
  var credit = document.getElementById("credit").innerHTML;
  let iron = Number(document.getElementById("iron").textContent);
  let bronze = Number(document.getElementById("bronze").textContent);
  let silver = Number(document.getElementById("silver").textContent);
  let gold = Number(document.getElementById("gold").textContent);
  if (credit >= totalBet && totalBet != 0) {
    startButton.disabled = true;
    stopPointerEvents();
    animationRealOne();
    animationRealTwo();
    animationRealTree();
    animationRealFour();
    animationRealFive();
    document.getElementById("credit").innerHTML = credit - totalBet;
    setTimeout(realOne, 1250);
    setTimeout(stopSound, 1250); //real one stop sound
    setTimeout(realTwo, 1500);
    setTimeout(stopSound, 1500); //real 2 stop sound
    setTimeout(realTree, 1750);
    setTimeout(stopSound, 1750); //real 3 stop sound
    setTimeout(realFour, 2000);
    setTimeout(stopSound, 2000); //real 4 stop sound
    setTimeout(realFive, 2250);
    setTimeout(stopSound, 2250); //real 5 stop sound
    setTimeout(check, 2500);
    setTimeout(clearImgIntervalRO, 1250);
    setTimeout(clearImgIntervalRT, 1500);
    setTimeout(clearImgIntervalRTr, 1750);
    setTimeout(clearImgIntervalRF, 2000);
    setTimeout(clearImgIntervalRFv, 2250);
    setTimeout(startPointerEvents, 2500);
    setTimeout(uploadData, 2600);
    if (iron < 200) {
      iron += totalBet * 0.0003;
    }
    if (bronze < 800) {
      bronze += totalBet * 0.0005;
    }
    if (silver < 2000) {
      silver += totalBet * 0.0008;
    }
    if (gold < 5000) {
      gold += totalBet * 0.001;
    }
    document.getElementById("iron").innerHTML = iron.toFixed(2);
    document.getElementById("bronze").innerHTML = bronze.toFixed(2);
    document.getElementById("silver").innerHTML = silver.toFixed(2);
    document.getElementById("gold").innerHTML = gold.toFixed(2);
    document.getElementById("ironMistery").style.display = "none";
  } else {
    document.getElementById("start").style.display = "block";
  }
  let combos = document.getElementById("show");
  combos.innerHTML = "";
  function check() {
    clearImgIntervalRO();
    clearImgIntervalRT();
    clearImgIntervalRTr();
    clearImgIntervalRF();
    clearImgIntervalRFv();
    if (
      realOnepos1 === realTwopos1 &&
      realTwopos1 === realThreepos1 &&
      realThreepos1 === realFourpos1 &&
      realFourpos1 === realFivepos1 &&
      realOnepos1 === "<img src=seven.svg width =100% height =100%>"
    ) {
      win += totalBet * 1000;
      document.getElementById("credit").innerHTML =
        Number(credit) + win - totalBet;
      document.getElementById("lineOne").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineTwo").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineThree").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineFour").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineFive").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineOne").style.backgroundSize = "cover";
      document.getElementById("lineTwo").style.backgroundSize = "cover";
      document.getElementById("lineThree").style.backgroundSize = "cover";
      document.getElementById("lineFour").style.backgroundSize = "cover";
      document.getElementById("lineFive").style.backgroundSize = "cover";
      combos.innerHTML += `Line1 ${realOnepos1}${realTwopos1}${realThreepos1}${realFourpos1}${realFivepos1} Win: ${
        totalBet * 1000
      } `;
    } else if (
      realOnepos1 === realTwopos1 &&
      realTwopos1 === realThreepos1 &&
      realThreepos1 === realFourpos1 &&
      realFourpos1 === realFivepos1 &&
      realOnepos1 === "<img src=grape.svg width =100% height =100%>"
    ) {
      win += totalBet * 100;
      document.getElementById("lineOne").style.borderImage =
        "url(flame.gif) 25 round";
      document.getElementById("credit").innerHTML =
        Number(credit) + win - totalBet;
      document.getElementById("lineOne").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineTwo").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineThree").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineFour").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineFive").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineOne").style.backgroundSize = "cover";
      document.getElementById("lineTwo").style.backgroundSize = "cover";
      document.getElementById("lineThree").style.backgroundSize = "cover";
      document.getElementById("lineFour").style.backgroundSize = "cover";
      document.getElementById("lineFive").style.backgroundSize = "cover";
      combos.innerHTML += `Line1 ${realOnepos1}${realTwopos1}${realThreepos1}${realFourpos1}${realFivepos1} Win: ${
        totalBet * 100
      } `;
    } else if (
      realOnepos1 === realTwopos1 &&
      realTwopos1 === realThreepos1 &&
      realThreepos1 === realFourpos1 &&
      realFourpos1 === realFivepos1 &&
      realOnepos1 === "<img src=watermelon.svg width =100% height =100%>"
    ) {
      win += totalBet * 100;
      document.getElementById("lineOne").style.borderImage =
        "url(flame.gif) 25 round";
      document.getElementById("credit").innerHTML =
        Number(credit) + win - totalBet;
      document.getElementById("lineOne").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineTwo").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineThree").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineFour").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineFive").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineOne").style.backgroundSize = "cover";
      document.getElementById("lineTwo").style.backgroundSize = "cover";
      document.getElementById("lineThree").style.backgroundSize = "cover";
      document.getElementById("lineFour").style.backgroundSize = "cover";
      document.getElementById("lineFive").style.backgroundSize = "cover";
      combos.innerHTML += `Line1 ${realOnepos1}${realTwopos1}${realThreepos1}${realFourpos1}${realFivepos1} Win: ${
        totalBet * 100
      } `;
    } else if (
      realOnepos1 === realTwopos1 &&
      realTwopos1 === realThreepos1 &&
      realThreepos1 === realFourpos1 &&
      realFourpos1 === realFivepos1
    ) {
      win += totalBet * 40;
      document.getElementById("lineOne").style.borderImage =
        "url(flame.gif) 25 round";
      document.getElementById("credit").innerHTML =
        Number(credit) + win - totalBet;
      document.getElementById("lineOne").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineTwo").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineThree").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineFour").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineFive").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineOne").style.backgroundSize = "cover";
      document.getElementById("lineTwo").style.backgroundSize = "cover";
      document.getElementById("lineThree").style.backgroundSize = "cover";
      document.getElementById("lineFour").style.backgroundSize = "cover";
      document.getElementById("lineFive").style.backgroundSize = "cover";
      combos.innerHTML += `Line1 ${realOnepos1}${realTwopos1}${realThreepos1}${realFourpos1}${realFivepos1} Win: ${
        totalBet * 40
      } `;
    } else if (
      realOnepos1 === realTwopos1 &&
      realTwopos1 === realThreepos1 &&
      realThreepos1 === realFourpos1 &&
      realOnepos1 === "<img src=seven.svg width =100% height =100%>"
    ) {
      win += totalBet * 200;
      document.getElementById("lineOne").style.borderImage =
        "url(flame.gif) 25 round";
      document.getElementById("credit").innerHTML =
        Number(credit) + win - totalBet;
      document.getElementById("lineOne").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineTwo").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineThree").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineFour").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineOne").style.backgroundSize = "cover";
      document.getElementById("lineTwo").style.backgroundSize = "cover";
      document.getElementById("lineThree").style.backgroundSize = "cover";
      document.getElementById("lineFour").style.backgroundSize = "cover";
      combos.innerHTML += `Line1 ${realOnepos1}${realTwopos1}${realThreepos1}${realFourpos1} Win: ${
        totalBet * 200
      } `;
    } else if (
      realOnepos1 === realTwopos1 &&
      realTwopos1 === realThreepos1 &&
      realThreepos1 === realFourpos1 &&
      realOnepos1 === "<img src=grape.svg width =100% height =100%>"
    ) {
      win += totalBet * 40;
      document.getElementById("lineOne").style.borderImage =
        "url(flame.gif) 25 round";
      document.getElementById("credit").innerHTML =
        Number(credit) + win - totalBet;
      document.getElementById("lineOne").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineTwo").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineThree").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineFour").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineOne").style.backgroundSize = "cover";
      document.getElementById("lineTwo").style.backgroundSize = "cover";
      document.getElementById("lineThree").style.backgroundSize = "cover";
      document.getElementById("lineFour").style.backgroundSize = "cover";
      combos.innerHTML += `Line1 ${realOnepos1}${realTwopos1}${realThreepos1}${realFourpos1} Win: ${
        totalBet * 40
      } `;
    } else if (
      realOnepos1 === realTwopos1 &&
      realTwopos1 === realThreepos1 &&
      realThreepos1 === realFourpos1 &&
      realOnepos1 === "<img src=watermelon.svg width =100% height =100%>"
    ) {
      win += totalBet * 40;
      document.getElementById("lineOne").style.borderImage =
        "url(flame.gif) 25 round";
      document.getElementById("credit").innerHTML =
        Number(credit) + win - totalBet;
      document.getElementById("lineOne").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineTwo").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineThree").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineFour").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineOne").style.backgroundSize = "cover";
      document.getElementById("lineTwo").style.backgroundSize = "cover";
      document.getElementById("lineThree").style.backgroundSize = "cover";
      document.getElementById("lineFour").style.backgroundSize = "cover";
      combos.innerHTML += `Line1 ${realOnepos1}${realTwopos1}${realThreepos1}${realFourpos1} Win: ${
        totalBet * 40
      } `;
    } else if (
      realOnepos1 === realTwopos1 &&
      realTwopos1 === realThreepos1 &&
      realThreepos1 === realFourpos1
    ) {
      win += totalBet * 10;
      document.getElementById("lineOne").style.borderImage =
        "url(flame.gif) 25 round";
      document.getElementById("credit").innerHTML =
        Number(credit) + win - totalBet;
      document.getElementById("lineOne").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineTwo").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineThree").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineFour").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineOne").style.backgroundSize = "cover";
      document.getElementById("lineTwo").style.backgroundSize = "cover";
      document.getElementById("lineThree").style.backgroundSize = "cover";
      document.getElementById("lineFour").style.backgroundSize = "cover";
      combos.innerHTML += `Line1 ${realOnepos1}${realTwopos1}${realThreepos1}${realFourpos1} Win: ${
        totalBet * 10
      } `;
    } else if (
      realOnepos1 === realTwopos1 &&
      realTwopos1 === realThreepos1 &&
      realOnepos1 === "<img src=seven.svg width =100% height =100%>"
    ) {
      win += totalBet * 20;
      document.getElementById("lineOne").style.borderImage =
        "url(flame.gif) 25 round";
      document.getElementById("credit").innerHTML =
        Number(credit) + win - totalBet;
      document.getElementById("lineOne").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineTwo").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineThree").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineOne").style.backgroundSize = "cover";
      document.getElementById("lineTwo").style.backgroundSize = "cover";
      document.getElementById("lineThree").style.backgroundSize = "cover";
      combos.innerHTML += `Line1 ${realOnepos1}${realTwopos1}${realTwopos1} Win: ${
        totalBet * 20
      } `;
    } else if (
      realOnepos1 === realTwopos1 &&
      realTwopos1 === realThreepos1 &&
      realOnepos1 === "<img src=grape.svg width =100% height =100%>"
    ) {
      win += totalBet * 10;
      document.getElementById("lineOne").style.borderImage =
        "url(flame.gif) 25 round";
      document.getElementById("credit").innerHTML =
        Number(credit) + win - totalBet;
      document.getElementById("lineOne").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineTwo").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineThree").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineOne").style.backgroundSize = "cover";
      document.getElementById("lineTwo").style.backgroundSize = "cover";
      document.getElementById("lineThree").style.backgroundSize = "cover";
      combos.innerHTML += `Line1 ${realOnepos1}${realTwopos1}${realTwopos1} Win: ${
        totalBet * 10
      } `;
    } else if (
      realOnepos1 === realTwopos1 &&
      realTwopos1 === realThreepos1 &&
      realOnepos1 === "<img src=watermelon.svg width =100% height =100%>"
    ) {
      win += totalBet * 10;
      document.getElementById("lineOne").style.borderImage =
        "url(flame.gif) 25 round";
      document.getElementById("credit").innerHTML =
        Number(credit) + win - totalBet;
      document.getElementById("lineOne").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineTwo").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineThree").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineOne").style.backgroundSize = "cover";
      document.getElementById("lineTwo").style.backgroundSize = "cover";
      document.getElementById("lineThree").style.backgroundSize = "cover";
      combos.innerHTML += `Line1 ${realOnepos1}${realTwopos1}${realTwopos1} Win: ${
        totalBet * 10
      } `;
    } else if (realOnepos1 === realTwopos1 && realTwopos1 === realThreepos1) {
      win += totalBet * 4;
      document.getElementById("lineOne").style.borderImage =
        "url(flame.gif) 25 round";
      document.getElementById("credit").innerHTML =
        Number(credit) + win - totalBet;
      document.getElementById("lineOne").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineTwo").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineThree").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineOne").style.backgroundSize = "cover";
      document.getElementById("lineTwo").style.backgroundSize = "cover";
      document.getElementById("lineThree").style.backgroundSize = "cover";
      combos.innerHTML += `Line1 ${realOnepos1}${realTwopos1}${realTwopos1} Win: ${
        totalBet * 4
      } `;
    } else if (
      realOnepos1 === realTwopos1 &&
      realTwopos1 === "<img src=cherry.svg width =100% height =100%>"
    ) {
      win += totalBet;
      document.getElementById("credit").innerHTML =
        Number(credit) + win - totalBet;
      document.getElementById("lineOne").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineTwo").style.backgroundImage =
        "url(flame.gif)";
      document.getElementById("lineOne").style.backgroundSize = "cover";
      document.getElementById("lineTwo").style.backgroundSize = "cover";
      combos.innerHTML += `Line1 ${realOnepos1}${realTwopos1} Win: ${totalBet} `;
    }

    // line TWO check
    if (lineTwoIsTrue) {
      if (
        realOnepos2 === realTwopos2 &&
        realTwopos2 === realThreepos2 &&
        realThreepos2 === realFourpos2 &&
        realFourpos2 === realFivepos2 &&
        realOnepos2 === "<img src=seven.svg width =100% height =100%>"
      ) {
        win += totalBet * 1000;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("realOne").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realTwo").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realThree").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realFour").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realFive").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realOne").style.backgroundSize = "cover";
        document.getElementById("realTwo").style.backgroundSize = "cover";
        document.getElementById("realThree").style.backgroundSize = "cover";
        document.getElementById("realFour").style.backgroundSize = "cover";
        document.getElementById("realFive").style.backgroundSize = "cover";
        combos.innerHTML += `Line2 ${realOnepos2}${realTwopos2}${realThreepos2}${realFourpos2}${realFivepos2} Win: ${
          totalBet * 1000
        } `;
      } else if (
        realOnepos2 === realTwopos2 &&
        realTwopos2 === realThreepos2 &&
        realThreepos2 === realFourpos2 &&
        realFourpos2 === realFivepos2 &&
        realOnepos2 === "<img src=grape.svg width =100% height =100%>"
      ) {
        win += totalBet * 100;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("realOne").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realTwo").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realThree").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realFour").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realFive").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realOne").style.backgroundSize = "cover";
        document.getElementById("realTwo").style.backgroundSize = "cover";
        document.getElementById("realThree").style.backgroundSize = "cover";
        document.getElementById("realFour").style.backgroundSize = "cover";
        document.getElementById("realFive").style.backgroundSize = "cover";
        combos.innerHTML += `Line2 ${realOnepos2}${realTwopos2}${realThreepos2}${realFourpos2}${realFivepos2} Win: ${
          totalBet * 100
        } `;
      } else if (
        realOnepos2 === realTwopos2 &&
        realTwopos2 === realThreepos2 &&
        realThreepos2 === realFourpos2 &&
        realFourpos2 === realFivepos2 &&
        realOnepos2 === "<img src=watermelon.svg width =100% height =100%>"
      ) {
        win += totalBet * 100;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("realOne").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realTwo").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realThree").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realFour").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realFive").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realOne").style.backgroundSize = "cover";
        document.getElementById("realTwo").style.backgroundSize = "cover";
        document.getElementById("realThree").style.backgroundSize = "cover";
        document.getElementById("realFour").style.backgroundSize = "cover";
        document.getElementById("realFive").style.backgroundSize = "cover";
        combos.innerHTML += `Line2 ${realOnepos2}${realTwopos2}${realThreepos2}${realFourpos2}${realFivepos2} Win: ${
          totalBet * 100
        } `;
      } else if (
        realOnepos2 === realTwopos2 &&
        realTwopos2 === realThreepos2 &&
        realThreepos2 === realFourpos2 &&
        realFourpos2 === realFivepos2
      ) {
        win += totalBet * 40;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("realOne").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realTwo").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realThree").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realFour").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realFive").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realOne").style.backgroundSize = "cover";
        document.getElementById("realTwo").style.backgroundSize = "cover";
        document.getElementById("realThree").style.backgroundSize = "cover";
        document.getElementById("realFour").style.backgroundSize = "cover";
        document.getElementById("realFive").style.backgroundSize = "cover";
        combos.innerHTML += `Line2 ${realOnepos2}${realTwopos2}${realThreepos2}${realFourpos2}${realFivepos2} Win: ${
          totalBet * 40
        } `;
      } else if (
        realOnepos2 === realTwopos2 &&
        realTwopos2 === realThreepos2 &&
        realThreepos2 === realFourpos2 &&
        realOnepos2 === "<img src=seven.svg width =100% height =100%>"
      ) {
        win += totalBet * 200;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("realOne").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realTwo").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realThree").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realFour").style.backgroundImage =
          "url(flame.gif)";
        ocument.getElementById("realOne").style.backgroundSize = "cover";
        document.getElementById("realTwo").style.backgroundSize = "cover";
        document.getElementById("realThree").style.backgroundSize = "cover";
        document.getElementById("realFour").style.backgroundSize = "cover";
        combos.innerHTML += `Line2 ${realOnepos2}${realTwopos2}${realThreepos2}${realFourpos2} Win: ${
          totalBet * 200
        } `;
      } else if (
        realOnepos2 === realTwopos2 &&
        realTwopos2 === realThreepos2 &&
        realThreepos2 === realFourpos2 &&
        realOnepos2 === "<img src=grape.svg width =100% height =100%>"
      ) {
        win += totalBet * 40;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("realOne").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realTwo").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realThree").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realFour").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realOne").style.backgroundSize = "cover";
        document.getElementById("realTwo").style.backgroundSize = "cover";
        document.getElementById("realThree").style.backgroundSize = "cover";
        document.getElementById("realFour").style.backgroundSize = "cover";
        combos.innerHTML += `Line2 ${realOnepos2}${realTwopos2}${realThreepos2}${realFourpos2} Win: ${
          totalBet * 40
        } `;
      } else if (
        realOnepos2 === realTwopos2 &&
        realTwopos2 === realThreepos2 &&
        realThreepos2 === realFourpos2 &&
        realOnepos2 === "<img src=watermelon.svg width =100% height =100%>"
      ) {
        win += totalBet * 40;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("realOne").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realTwo").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realThree").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realFour").style.backgroundImage =
          "url(flame.gif)";
        ocument.getElementById("realOne").style.backgroundSize = "cover";
        document.getElementById("realTwo").style.backgroundSize = "cover";
        document.getElementById("realThree").style.backgroundSize = "cover";
        document.getElementById("realFour").style.backgroundSize = "cover";
        combos.innerHTML += `Line2 ${realOnepos2}${realTwopos2}${realThreepos2}${realFourpos2} Win: ${
          totalBet * 40
        } `;
      } else if (
        realOnepos2 === realTwopos2 &&
        realTwopos2 === realThreepos2 &&
        realThreepos2 === realFourpos2
      ) {
        win += totalBet * 10;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("realOne").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realTwo").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realThree").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realFour").style.backgroundImage =
          "url(flame.gif)";
        ocument.getElementById("realOne").style.backgroundSize = "cover";
        document.getElementById("realTwo").style.backgroundSize = "cover";
        document.getElementById("realThree").style.backgroundSize = "cover";
        document.getElementById("realFour").style.backgroundSize = "cover";
        combos.innerHTML += `Line2 ${realOnepos2}${realTwopos2}${realThreepos2}${realFourpos2} Win: ${
          totalBet * 10
        }`;
      } else if (
        realOnepos2 === realTwopos2 &&
        realTwopos2 === realThreepos2 &&
        realOnepos2 === "<img src=seven.svg width =100% height =100%>"
      ) {
        win += totalBet * 20;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("realOne").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realTwo").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realThree").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realOne").style.backgroundSize = "cover";
        document.getElementById("realTwo").style.backgroundSize = "cover";
        document.getElementById("realThree").style.backgroundSize = "cover";
        combos.innerHTML += `Line2 ${realOnepos2}${realTwopos2}${realThreepos2} Win: ${
          totalBet * 20
        } `;
      } else if (
        realOnepos2 === realTwopos2 &&
        realTwopos2 === realThreepos2 &&
        realOnepos2 === "<img src=grape.svg width =100% height =100%>"
      ) {
        win += totalBet * 10;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("realOne").style.backgroundSize = "cover";
        document.getElementById("realTwo").style.backgroundSize = "cover";
        document.getElementById("realThree").style.backgroundSize = "cover";
        combos.innerHTML += `Line2 ${realOnepos2}${realTwopos2}${realThreepos2} Win: ${
          totalBet * 10
        } `;
      } else if (
        realOnepos2 === realTwopos2 &&
        realTwopos2 === realThreepos2 &&
        realOnepos2 === "<img src=watermelon.svg width =100% height =100%>"
      ) {
        win += totalBet * 10;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("realOne").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realTwo").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realThree").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realOne").style.backgroundSize = "cover";
        document.getElementById("realTwo").style.backgroundSize = "cover";
        document.getElementById("realThree").style.backgroundSize = "cover";
        combos.innerHTML += `Line2 ${realOnepos2}${realTwopos2}${realThreepos2} Win: ${
          totalBet * 10
        } `;
      } else if (realOnepos2 === realTwopos2 && realTwopos2 === realThreepos2) {
        win += totalBet * 4;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("realOne").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realTwo").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realThree").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realOne").style.backgroundSize = "cover";
        document.getElementById("realTwo").style.backgroundSize = "cover";
        document.getElementById("realThree").style.backgroundSize = "cover";
        combos.innerHTML += `Line2 ${realOnepos2}${realTwopos2}${realThreepos2} Win: ${
          totalBet * 4
        } `;
      } else if (
        realOnepos2 === realTwopos2 &&
        realTwopos2 === "<img src=cherry.svg width =100% height =100%>"
      ) {
        win += totalBet;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("realOne").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realTwo").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realOne").style.backgroundSize = "cover";
        document.getElementById("realTwo").style.backgroundSize = "cover";
        combos.innerHTML += `Line2 ${realOnepos2}${realTwopos2} Win: ${totalBet}`;
      }
    }
    //line THREE check :
    if (lineThreeIsTrue) {
      if (
        realOnepos3 === realTwopos3 &&
        realTwopos3 === realThreepos3 &&
        realThreepos3 === realFourpos3 &&
        realFourpos3 === realFivepos3 &&
        realOnepos3 === "<img src=seven.svg width =100% height =100%>"
      ) {
        win += totalBet * 1000;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("line3One").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Two").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Three").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Four").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Five").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3One").style.backgroundSize = "cover";
        document.getElementById("line3Two").style.backgroundSize = "cover";
        document.getElementById("line3Three").style.backgroundSize = "cover";
        document.getElementById("line3Four").style.backgroundSize = "cover";
        document.getElementById("line3Five").style.backgroundSize = "cover";
        combos.innerHTML += `Line3 ${realOnepos3}${realTwopos3}${realThreepos3}${realFourpos3}${realFivepos3} win: ${
          totalBet * 1000
        } `;
      } else if (
        realOnepos3 === realTwopos3 &&
        realTwopos3 === realThreepos3 &&
        realThreepos3 === realFourpos3 &&
        realFourpos3 === realFivepos3 &&
        realOnepos3 === "<img src=grape.svg width =100% height =100%>"
      ) {
        win += totalBet * 50;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("line3One").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Two").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Three").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Four").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Five").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3One").style.backgroundSize = "cover";
        document.getElementById("line3Two").style.backgroundSize = "cover";
        document.getElementById("line3Three").style.backgroundSize = "cover";
        document.getElementById("line3Four").style.backgroundSize = "cover";
        document.getElementById("line3Five").style.backgroundSize = "cover";
        combos.innerHTML += `Line3 ${realOnepos3}${realTwopos3}${realThreepos3}${realFourpos3}${realFivepos3} win: ${
          totalBet * 50
        } `;
      } else if (
        realOnepos3 === realTwopos3 &&
        realTwopos3 === realThreepos3 &&
        realThreepos3 === realFourpos3 &&
        realFourpos3 === realFivepos3 &&
        realOnepos3 === "<img src=watermelon.svg width =100% height =100%>"
      ) {
        win += totalBet * 50;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("line3One").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Two").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Three").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Four").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Five").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3One").style.backgroundSize = "cover";
        document.getElementById("line3Two").style.backgroundSize = "cover";
        document.getElementById("line3Three").style.backgroundSize = "cover";
        document.getElementById("line3Four").style.backgroundSize = "cover";
        document.getElementById("line3Five").style.backgroundSize = "cover";
        combos.innerHTML += `Line3 ${realOnepos3}${realTwopos3}${realThreepos3}${realFourpos3}${realFivepos3} win: ${
          totalBet * 50
        } `;
      } else if (
        realOnepos3 === realTwopos3 &&
        realTwopos3 === realThreepos3 &&
        realThreepos3 === realFourpos3 &&
        realFourpos3 === realFivepos3
      ) {
        win += totalBet * 30;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("line3One").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Two").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Three").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Four").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Five").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3One").style.backgroundSize = "cover";
        document.getElementById("line3Two").style.backgroundSize = "cover";
        document.getElementById("line3Three").style.backgroundSize = "cover";
        document.getElementById("line3Four").style.backgroundSize = "cover";
        document.getElementById("line3Five").style.backgroundSize = "cover";
        combos.innerHTML += `Line3 ${realOnepos3}${realTwopos3}${realThreepos3}${realFourpos3}${realFivepos3} win: ${
          totalBet * 30
        } `;
      } else if (
        realOnepos3 === realTwopos3 &&
        realTwopos3 === realThreepos3 &&
        realThreepos3 === realFourpos3 &&
        realOnepos3 === "<img src=seven.svg width =100% height =100%>"
      ) {
        win += totalBet * 200;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("line3One").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Two").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Three").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Four").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3One").style.backgroundSize = "cover";
        document.getElementById("line3Two").style.backgroundSize = "cover";
        document.getElementById("line3Three").style.backgroundSize = "cover";
        document.getElementById("line3Four").style.backgroundSize = "cover";
        combos.innerHTML += `Line3 ${realOnepos3}${realTwopos3}${realThreepos3}${realFourpos3} win: ${
          totalBet * 200
        } `;
      } else if (
        realOnepos3 === realTwopos3 &&
        realTwopos3 === realThreepos3 &&
        realThreepos3 === realFourpos3 &&
        realOnepos3 === "<img src=grape.svg width =100% height =100%>"
      ) {
        win += totalBet * 30;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("line3One").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Two").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Three").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Four").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3One").style.backgroundSize = "cover";
        document.getElementById("line3Two").style.backgroundSize = "cover";
        document.getElementById("line3Three").style.backgroundSize = "cover";
        document.getElementById("line3Four").style.backgroundSize = "cover";
        combos.innerHTML += `Line3 ${realOnepos3}${realTwopos3}${realThreepos3}${realFourpos3} win: ${
          totalBet * 30
        } `;
      } else if (
        realOnepos3 === realTwopos3 &&
        realTwopos3 === realThreepos3 &&
        realThreepos3 === realFourpos3 &&
        realOnepos3 === "<img src=watermelon.svg width =100% height =100%>"
      ) {
        win += totalBet * 30;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("line3One").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Two").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Three").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Four").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3One").style.backgroundSize = "cover";
        document.getElementById("line3Two").style.backgroundSize = "cover";
        document.getElementById("line3Three").style.backgroundSize = "cover";
        document.getElementById("line3Four").style.backgroundSize = "cover";
        combos.innerHTML += `Line3 ${realOnepos3}${realTwopos3}${realThreepos3}${realFourpos3} win: ${
          totalBet * 30
        } `;
      } else if (
        realOnepos3 === realTwopos3 &&
        realTwopos3 === realThreepos3 &&
        realThreepos3 === realFourpos3
      ) {
        win += totalBet * 10;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("line3One").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Two").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Three").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Four").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3One").style.backgroundSize = "cover";
        document.getElementById("line3Two").style.backgroundSize = "cover";
        document.getElementById("line3Three").style.backgroundSize = "cover";
        document.getElementById("line3Four").style.backgroundSize = "cover";
        combos.innerHTML += `Line3 ${realOnepos3}${realTwopos3}${realThreepos3}${realFourpos3} win: ${
          totalBet * 10
        } `;
      } else if (
        realOnepos3 === realTwopos3 &&
        realTwopos3 === realThreepos3 &&
        realOnepos3 === "<img src=seven.svg width =100% height =100%>"
      ) {
        win += totalBet * 20;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("line3One").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Two").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Three").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3One").style.backgroundSize = "cover";
        document.getElementById("line3Two").style.backgroundSize = "cover";
        document.getElementById("line3Three").style.backgroundSize = "cover";
        combos.innerHTML += `Line3 ${realOnepos3}${realTwopos3}${realThreepos3} win : ${
          totalBet * 20
        } `;
      } else if (
        realOnepos3 === realTwopos3 &&
        realTwopos3 === realThreepos3 &&
        realOnepos3 === "<img src=grape.svg width =100% height =100%>"
      ) {
        win += totalBet * 10;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("line3One").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Two").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Three").style.backgroundImage =
          "url(flame.gif)";

        document.getElementById("line3One").style.backgroundSize = "cover";
        document.getElementById("line3Two").style.backgroundSize = "cover";
        document.getElementById("line3Three").style.backgroundSize = "cover";
        combos.innerHTML += `Line3 ${realOnepos3}${realTwopos3}${realThreepos3} win: ${
          totalBet * 10
        } `;
      } else if (
        realOnepos3 === realTwopos3 &&
        realTwopos3 === realThreepos3 &&
        realOnepos3 === "<img src=watermelon.svg width =100% height =100%>"
      ) {
        win += totalBet * 10;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("line3One").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Two").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Three").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3One").style.backgroundSize = "cover";
        document.getElementById("line3Two").style.backgroundSize = "cover";
        document.getElementById("line3Three").style.backgroundSize = "cover";
        combos.innerHTML += `Line3 ${realOnepos3}${realTwopos3}${realThreepos3} win: ${
          totalBet * 10
        } `;
      } else if (realOnepos3 === realTwopos3 && realTwopos3 === realThreepos3) {
        win += totalBet * 4;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("line3One").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Two").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Three").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3One").style.backgroundSize = "cover";
        document.getElementById("line3Two").style.backgroundSize = "cover";
        document.getElementById("line3Three").style.backgroundSize = "cover";
        combos.innerHTML += `Line3 ${realOnepos3}${realTwopos3}${realThreepos3} win: ${
          totalBet * 4
        } `;
      } else if (
        realOnepos3 === realTwopos3 &&
        realTwopos3 === "<img src=cherry.svg width =100% height =100%>"
      ) {
        win += totalBet;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("line3One").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Two").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3One").style.backgroundSize = "cover";
        document.getElementById("line3Two").style.backgroundSize = "cover";
        combos.innerHTML += `Line3 ${realOnepos3}${realTwopos3} win: ${totalBet} `;
      }
    }
    //line FOUR check V :
    if (lineFourIsTrue) {
      if (
        realOnepos1 === realTwopos2 &&
        realTwopos2 === realThreepos3 &&
        realThreepos3 === realFourpos2 &&
        realFourpos2 === realFivepos1 &&
        realOnepos1 === "<img src=seven.svg width =100% height =100%>"
      ) {
        win += totalBet * 1000;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("lineOne").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realTwo").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Three").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realFour").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("lineFive").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("lineOne").style.backgroundSize = "cover";
        document.getElementById("realTwo").style.backgroundSize = "cover";
        document.getElementById("line3Three").style.backgroundSize = "cover";
        document.getElementById("realFour").style.backgroundSize = "cover";
        document.getElementById("lineFive").style.backgroundSize = "cover";
        combos.innerHTML += `Line4 ${realOnepos1}${realTwopos2}${realThreepos3}${realFourpos2}${realFivepos1} Win: ${
          totalBet * 1000
        } `;
      } else if (
        realOnepos1 === realTwopos2 &&
        realTwopos2 === realThreepos3 &&
        realThreepos3 === realFourpos2 &&
        realFourpos2 === realFivepos1 &&
        realOnepos1 === "<img src=grape.svg width =100% height =100%>"
      ) {
        win += totalBet * 100;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("lineOne").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realTwo").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Three").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realFour").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("lineFive").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("lineOne").style.backgroundSize = "cover";
        document.getElementById("realTwo").style.backgroundSize = "cover";
        document.getElementById("line3Three").style.backgroundSize = "cover";
        document.getElementById("realFour").style.backgroundSize = "cover";
        document.getElementById("lineFive").style.backgroundSize = "cover";
        combos.innerHTML += `Line4 ${realOnepos1}${realTwopos2}${realThreepos3}${realFourpos2}${realFivepos1} Win: ${
          totalBet * 100
        } `;
      } else if (
        realOnepos1 === realTwopos2 &&
        realTwopos2 === realThreepos3 &&
        realThreepos3 === realFourpos2 &&
        realFourpos2 === realFivepos1 &&
        realOnepos1 === "<img src=watermelon.svg width =100% height =100%>"
      ) {
        win += totalBet * 100;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("lineOne").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realTwo").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Three").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realFour").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("lineFive").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("lineOne").style.backgroundSize = "cover";
        document.getElementById("realTwo").style.backgroundSize = "cover";
        document.getElementById("line3Three").style.backgroundSize = "cover";
        document.getElementById("realFour").style.backgroundSize = "cover";
        document.getElementById("lineFive").style.backgroundSize = "cover";
        combos.innerHTML += `Line4 ${realOnepos1}${realTwopos2}${realThreepos3}${realFourpos2}${realFivepos1} Win: ${
          totalBet * 100
        } `;
      } else if (
        realOnepos1 === realTwopos2 &&
        realTwopos2 === realThreepos3 &&
        realThreepos3 === realFourpos2 &&
        realFourpos2 === realFivepos1
      ) {
        win += totalBet * 40;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("lineOne").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realTwo").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Three").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realFour").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("lineFive").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("lineOne").style.backgroundSize = "cover";
        document.getElementById("realTwo").style.backgroundSize = "cover";
        document.getElementById("line3Three").style.backgroundSize = "cover";
        document.getElementById("realFour").style.backgroundSize = "cover";
        document.getElementById("lineFive").style.backgroundSize = "cover";
        combos.innerHTML += `Line4 ${realOnepos1}${realTwopos2}${realThreepos3}${realFourpos2}${realFivepos1} Win: ${
          totalBet * 40
        } `;
      } else if (
        realOnepos1 === realTwopos2 &&
        realTwopos2 === realThreepos3 &&
        realThreepos3 === realFourpos2 &&
        realOnepos1 === "<img src=seven.svg width =100% height =100%>"
      ) {
        win += totalBet * 200;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("lineOne").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realTwo").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Three").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realFour").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("lineOne").style.backgroundSize = "cover";
        document.getElementById("realTwo").style.backgroundSize = "cover";
        document.getElementById("line3Three").style.backgroundSize = "cover";
        document.getElementById("realFour").style.backgroundSize = "cover";
        combos.innerHTML += `Line4 ${realOnepos1}${realTwopos2}${realThreepos3}${realFourpos2} Win: ${
          totalBet * 200
        } `;
      } else if (
        realOnepos1 === realTwopos2 &&
        realTwopos2 === realThreepos3 &&
        realThreepos3 === realFourpos2 &&
        realOnepos1 === "<img src=grape.svg width =100% height =100%>"
      ) {
        win += totalBet * 40;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("lineOne").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realTwo").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Three").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realFour").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("lineOne").style.backgroundSize = "cover";
        document.getElementById("realTwo").style.backgroundSize = "cover";
        document.getElementById("line3Three").style.backgroundSize = "cover";
        document.getElementById("realFour").style.backgroundSize = "cover";
        combos.innerHTML += `Line4 ${realOnepos1}${realTwopos2}${realThreepos3}${realFourpos2} Win: ${
          totalBet * 40
        } `;
      } else if (
        realOnepos1 === realTwopos2 &&
        realTwopos2 === realThreepos3 &&
        realThreepos3 === realFourpos2 &&
        realOnepos1 === "<img src=watermelon.svg width =100% height =100%>"
      ) {
        win += totalBet * 40;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("lineOne").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realTwo").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Three").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realFour").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("lineOne").style.backgroundSize = "cover";
        document.getElementById("realTwo").style.backgroundSize = "cover";
        document.getElementById("line3Three").style.backgroundSize = "cover";
        document.getElementById("realFour").style.backgroundSize = "cover";
        combos.innerHTML += `Line4 ${realOnepos1}${realTwopos2}${realThreepos3}${realFourpos2} Win: ${
          totalBet * 40
        } `;
      } else if (
        realOnepos1 === realTwopos2 &&
        realTwopos2 === realThreepos3 &&
        realThreepos3 === realFourpos2
      ) {
        win += totalBet * 10;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("lineOne").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realTwo").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Three").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realFour").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("lineOne").style.backgroundSize = "cover";
        document.getElementById("realTwo").style.backgroundSize = "cover";
        document.getElementById("line3Three").style.backgroundSize = "cover";
        document.getElementById("realFour").style.backgroundSize = "cover";
        combos.innerHTML += `Line4 ${realOnepos1}${realTwopos2}${realThreepos3}${realFourpos2} Win: ${
          totalBet * 10
        } `;
      } else if (
        realOnepos1 === realTwopos2 &&
        realTwopos2 === realThreepos3 &&
        realOnepos1 === "<img src=seven.svg width =100% height =100%>"
      ) {
        win += totalBet * 20;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("lineOne").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realTwo").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Three").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("lineOne").style.backgroundSize = "cover";
        document.getElementById("realTwo").style.backgroundSize = "cover";
        document.getElementById("line3Three").style.backgroundSize = "cover";
        combos.innerHTML += `Line4 ${realOnepos1}${realTwopos2}${realThreepos3} Win: ${
          totalBet * 20
        } `;
      } else if (
        realOnepos1 === realTwopos2 &&
        realTwopos2 === realThreepos3 &&
        realOnepos1 === "<img src=grape.svg width =100% height =100%>"
      ) {
        win += totalBet * 10;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("lineOne").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realTwo").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Three").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("lineOne").style.backgroundSize = "cover";
        document.getElementById("realTwo").style.backgroundSize = "cover";
        document.getElementById("line3Three").style.backgroundSize = "cover";
        combos.innerHTML += `Line4 ${realOnepos1}${realTwopos2}${realThreepos3} Win: ${
          totalBet * 10
        } `;
      } else if (
        realOnepos1 === realTwopos2 &&
        realTwopos2 === realThreepos3 &&
        realOnepos1 === "<img src=watermelon.svg width =100% height =100%>"
      ) {
        win += totalBet * 10;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("lineOne").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realTwo").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Three").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("lineOne").style.backgroundSize = "cover";
        document.getElementById("realTwo").style.backgroundSize = "cover";
        document.getElementById("line3Three").style.backgroundSize = "cover";
        combos.innerHTML += `Line4 ${realOnepos1}${realTwopos2}${realThreepos3} Win: ${
          totalBet * 10
        } `;
      } else if (realOnepos1 === realTwopos2 && realTwopos2 === realThreepos3) {
        win += totalBet * 4;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("lineOne").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realTwo").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Three").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("lineOne").style.backgroundSize = "cover";
        document.getElementById("realTwo").style.backgroundSize = "cover";
        document.getElementById("line3Three").style.backgroundSize = "cover";
        combos.innerHTML += `Line4 ${realOnepos1}${realTwopos2}${realThreepos3} Win: ${
          totalBet * 4
        } `;
      } else if (
        realOnepos1 === realTwopos2 &&
        realTwopos2 === "<img src=cherry.svg width =100% height =100%>"
      ) {
        win += totalBet;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("lineOne").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realTwo").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("lineOne").style.backgroundSize = "cover";
        document.getElementById("realTwo").style.backgroundSize = "cover";
        combos.innerHTML += `Line4 ${realOnepos1}${realTwopos2} Win: ${totalBet} `;
      }
    }
    //line Five check ^^:
    if (lineFiveIsTrue) {
      if (
        realOnepos3 === realTwopos2 &&
        realTwopos2 === realThreepos1 &&
        realThreepos1 === realFourpos2 &&
        realFourpos2 === realFivepos3 &&
        realOnepos3 === "<img src=seven.svg width =100% height =100%>"
      ) {
        win += totalBet * 1000;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("line3One").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realTwo").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("lineThree").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realFour").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Five").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3One").style.backgroundSize = "cover";
        document.getElementById("realTwo").style.backgroundSize = "cover";
        document.getElementById("lineThree").style.backgroundSize = "cover";
        document.getElementById("realFour").style.backgroundSize = "cover";
        document.getElementById("line3Five").style.backgroundSize = "cover";
        combos.innerHTML += `Line5 ${realOnepos3}${realTwopos2}${realThreepos1}${realFourpos2}${realFivepos3} Win: ${
          totalBet * 1000
        } `;
      } else if (
        realOnepos3 === realTwopos2 &&
        realTwopos2 === realThreepos1 &&
        realThreepos1 === realFourpos2 &&
        realFourpos2 === realFivepos3 &&
        realOnepos3 === "<img src=grape.svg width =100% height =100%>"
      ) {
        win += totalBet * 100;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("line3One").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realTwo").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("lineThree").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realFour").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Five").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3One").style.backgroundSize = "cover";
        document.getElementById("realTwo").style.backgroundSize = "cover";
        document.getElementById("lineThree").style.backgroundSize = "cover";
        document.getElementById("realFour").style.backgroundSize = "cover";
        document.getElementById("line3Five").style.backgroundSize = "cover";
        combos.innerHTML += `Line5 ${realOnepos3}${realTwopos2}${realThreepos1}${realFourpos2}${realFivepos3} Win: ${
          totalBet * 100
        } `;
      } else if (
        realOnepos3 === realTwopos2 &&
        realTwopos2 === realThreepos1 &&
        realThreepos1 === realFourpos2 &&
        realFourpos2 === realFivepos3 &&
        realOnepos3 === "<img src=watermelon.svg width =100% height =100%>"
      ) {
        win += totalBet * 100;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("line3One").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realTwo").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("lineThree").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realFour").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Five").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3One").style.backgroundSize = "cover";
        document.getElementById("realTwo").style.backgroundSize = "cover";
        document.getElementById("lineThree").style.backgroundSize = "cover";
        document.getElementById("realFour").style.backgroundSize = "cover";
        document.getElementById("line3Five").style.backgroundSize = "cover";
        combos.innerHTML += `Line5 ${realOnepos3}${realTwopos2}${realThreepos1}${realFourpos2}${realFivepos3} Win: ${
          totalBet * 100
        } `;
      } else if (
        realOnepos3 === realTwopos2 &&
        realTwopos2 === realThreepos1 &&
        realThreepos1 === realFourpos2 &&
        realFourpos2 === realFivepos3
      ) {
        win += totalBet * 40;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("line3One").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realTwo").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("lineThree").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realFour").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3Five").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3One").style.backgroundSize = "cover";
        document.getElementById("realTwo").style.backgroundSize = "cover";
        document.getElementById("lineThree").style.backgroundSize = "cover";
        document.getElementById("realFour").style.backgroundSize = "cover";
        document.getElementById("line3Five").style.backgroundSize = "cover";
        combos.innerHTML += `Line5 ${realOnepos3}${realTwopos2}${realThreepos1}${realFourpos2}${realFivepos3} Win: ${
          totalBet * 40
        } `;
      } else if (
        realOnepos3 === realTwopos2 &&
        realTwopos2 === realThreepos1 &&
        realThreepos1 === realFourpos2 &&
        realOnepos3 === "<img src=seven.svg width =100% height =100%>"
      ) {
        win += totalBet * 200;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("line3One").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realTwo").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("lineThree").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realFour").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3One").style.backgroundSize = "cover";
        document.getElementById("realTwo").style.backgroundSize = "cover";
        document.getElementById("lineThree").style.backgroundSize = "cover";
        document.getElementById("realFour").style.backgroundSize = "cover";
        combos.innerHTML += `Line5 ${realOnepos3}${realTwopos2}${realThreepos1}${realFourpos2} Win: ${
          totalBet * 200
        } `;
      } else if (
        realOnepos3 === realTwopos2 &&
        realTwopos2 === realThreepos1 &&
        realThreepos1 === realFourpos2 &&
        realOnepos3 === "<img src=grape.svg width =100% height =100%>"
      ) {
        win += totalBet * 40;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("line3One").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realTwo").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("lineThree").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realFour").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3One").style.backgroundSize = "cover";
        document.getElementById("realTwo").style.backgroundSize = "cover";
        document.getElementById("lineThree").style.backgroundSize = "cover";
        document.getElementById("realFour").style.backgroundSize = "cover";
        combos.innerHTML += `Line5 ${realOnepos3}${realTwopos2}${realThreepos1}${realFourpos2} Win: ${
          totalBet * 40
        } `;
      } else if (
        realOnepos3 === realTwopos2 &&
        realTwopos2 === realThreepos1 &&
        realThreepos1 === realFourpos2 &&
        realOnepos3 === "<img src=watermelon.svg width =100% height =100%>"
      ) {
        win += totalBet * 40;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("line3One").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realTwo").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("lineThree").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realFour").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3One").style.backgroundSize = "cover";
        document.getElementById("realTwo").style.backgroundSize = "cover";
        document.getElementById("lineThree").style.backgroundSize = "cover";
        document.getElementById("realFour").style.backgroundSize = "cover";
        combos.innerHTML += `Line5 ${realOnepos3}${realTwopos2}${realThreepos1}${realFourpos2} Win: ${
          totalBet * 40
        } `;
      } else if (
        realOnepos3 === realTwopos2 &&
        realTwopos2 === realThreepos1 &&
        realThreepos1 === realFourpos2
      ) {
        win += totalBet * 10;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("line3One").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realTwo").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("lineThree").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realFour").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3One").style.backgroundSize = "cover";
        document.getElementById("realTwo").style.backgroundSize = "cover";
        document.getElementById("lineThree").style.backgroundSize = "cover";
        document.getElementById("realFour").style.backgroundSize = "cover";
        combos.innerHTML += `Line5 ${realOnepos3}${realTwopos2}${realThreepos1}${realFourpos2} Win: ${
          totalBet * 10
        } `;
      } else if (
        realOnepos3 === realTwopos2 &&
        realTwopos2 === realThreepos1 &&
        realOnepos3 === "<img src=seven.svg width =100% height =100%>"
      ) {
        win += totalBet * 20;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("line3One").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realTwo").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("lineThree").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3One").style.backgroundSize = "cover";
        document.getElementById("realTwo").style.backgroundSize = "cover";
        document.getElementById("lineThree").style.backgroundSize = "cover";
        combos.innerHTML += `Line5 ${realOnepos3}${realTwopos2}${realThreepos1} Win: ${
          totalBet * 20
        } `;
      } else if (
        realOnepos3 === realTwopos2 &&
        realTwopos2 === realThreepos1 &&
        realOnepos3 === "<img src=grape.svg width =100% height =100%>"
      ) {
        win += totalBet * 10;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("line3One").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realTwo").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("lineThree").style.backgroundImage =
          "url(flame.gif)";

        document.getElementById("line3One").style.backgroundSize = "cover";
        document.getElementById("realTwo").style.backgroundSize = "cover";
        document.getElementById("lineThree").style.backgroundSize = "cover";
        combos.innerHTML += `Line5 ${realOnepos3}${realTwopos2}${realThreepos1} Win : ${
          totalBet * 10
        } `;
      } else if (
        realOnepos3 === realTwopos2 &&
        realTwopos2 === realThreepos1 &&
        realOnepos3 === "<img src=watermelon.svg width =100% height =100%>"
      ) {
        win += totalBet * 10;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("line3One").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realTwo").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("lineThree").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3One").style.backgroundSize = "cover";
        document.getElementById("realTwo").style.backgroundSize = "cover";
        document.getElementById("lineThree").style.backgroundSize = "cover";
        combos.innerHTML += `Line5 ${realOnepos3}${realTwopos2}${realThreepos1} Win: ${
          totalBet * 10
        } `;
      } else if (realOnepos3 === realTwopos2 && realTwopos2 === realThreepos1) {
        win += totalBet * 4;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("line3One").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realTwo").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("lineThree").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3One").style.backgroundSize = "cover";
        document.getElementById("realTwo").style.backgroundSize = "cover";
        document.getElementById("lineThree").style.backgroundSize = "cover";
        combos.innerHTML += `Line5 ${realOnepos3}${realTwopos2}${realThreepos1} Win: ${
          totalBet * 4
        } `;
      } else if (
        realOnepos3 === realTwopos2 &&
        realTwopos2 === "<img src=cherry.svg width =100% height =100%>"
      ) {
        win += totalBet;
        document.getElementById("credit").innerHTML =
          Number(credit) + win - totalBet;
        document.getElementById("line3One").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("realTwo").style.backgroundImage =
          "url(flame.gif)";
        document.getElementById("line3One").style.backgroundSize = "cover";
        document.getElementById("realTwo").style.backgroundSize = "cover";
        combos.innerHTML += `Line5 ${realOnepos3}${realTwopos2} Win: ${totalBet} `;
      }
    }
    if (win != 0) {
      document.getElementById("lastWins").innerHTML +=
        `<p>Spin ${spins} ${combos.innerHTML} </p>` + "<br>";
      winSound.play();
    }
    //IRON CHECK
    if (iron >= rngIron && totalBet >= 50) {
      win += Number(iron * 100);
      misteryWin.play();
      document.getElementById("credit").innerHTML =
        Number(credit) + Number(Math.floor(win)) - totalBet;
      document.getElementById("ironMistery").style.display = "block";
      document.getElementById("ironMistery").style.color = "#bb00ff";
      document.getElementById(
        "ironMistery"
      ).innerHTML = `You have won the iron mistery at ${iron.toFixed(2)} BGN`;
      document.getElementById("iron").textContent = 90.0;
      rngIron = Math.floor(Math.random() * (200 - 100 + 1) + 100);
    }
    if (bronze >= rngBronze && totalBet >= 100) {
      win += Number(bronze * 100);
      document.getElementById("credit").innerHTML =
        Number(credit) + Number(Math.floor(win)) - totalBet;
      document.getElementById("ironMistery").style.display = "block";
      document.getElementById("ironMistery").style.color = "#cd7f32";
      document.getElementById(
        "ironMistery"
      ).innerHTML = `You have won the bronze mistery at ${bronze.toFixed(
        2
      )} BGN`;
      document.getElementById("bronze").textContent = 350.0;
      rngBronze = Math.floor(Math.random() * (800 - 400 + 1) + 400);
      misteryWin.play();
    }
    if (silver >= rngSilver && totalBet >= 200) {
      win += Number(silver * 100);
      document.getElementById("credit").innerHTML =
        Number(credit) + Number(Math.floor(win)) - totalBet;
      document.getElementById("ironMistery").style.display = "block";
      document.getElementById("ironMistery").style.color = "#c0c0c0";
      document.getElementById(
        "ironMistery"
      ).innerHTML = `You have won the silver mistery at ${silver.toFixed(
        2
      )} BGN`;
      document.getElementById("silver").textContent = 800.0;
      rngSilver = Math.floor(Math.random() * (2000 - 1000 + 1) + 1000);
      misteryWin.play();
    }
    if (gold >= rngGold && totalBet >= 500) {
      win += Number(gold * 100);
      document.getElementById("credit").innerHTML =
        Number(credit) + Number(Math.floor(win)) - totalBet;
      document.getElementById("ironMistery").style.display = "block";
      document.getElementById("ironMistery").style.color = "#ffd700";
      document.getElementById(
        "ironMistery"
      ).innerHTML = `You have won the gold mistery at ${gold.toFixed(2)} BGN`;
      document.getElementById("gold").textContent = 1800.0;
      rngGold = Math.floor(Math.random() * (5000 - 2000 + 1) + 2000);
      misteryWin.play();
    }
  }
}
//REAL ONE POSITION VARIABLE
let realOnepos1;
let realOnepos2;
let realOnepos3;
//REAL TWO POSITION VARIABLES
let realTwopos1;
let realTwopos2;
let realTwopos3;
//REAL THREE POSITION VARIABLES
let realThreepos1;
let realThreepos2;
let realThreepos3;
//REAL FOUR POSITION VARIABLES
let realFourpos1;
let realFourpos2;
let realFourpos3;
//REAL FIVE POSITION VARIABLES
let realFivepos1;
let realFivepos2;
let realFivepos3;
//REAL ONE FUNCTION
function realOne() {
  document.getElementById("lineOne").style.animationIterationCount = "1";
  document.getElementById("realOne").style.animationIterationCount = "1";
  document.getElementById("line3One").style.animationIterationCount = "1";
  document.getElementById("hidden1").style.animationIterationCount = "1";
  realOnepos1 = simbols[Math.floor(Math.random() * 100)];
  realOnepos2 = simbols[Math.floor(Math.random() * 100)];
  realOnepos3 = simbols[Math.floor(Math.random() * 100)];
  document.getElementById("lineOne").innerHTML = realOnepos1;
  document.getElementById("realOne").innerHTML = realOnepos2;
  document.getElementById("line3One").innerHTML = realOnepos3;
}
//REAL TWO FUNCTION
function realTwo() {
  document.getElementById("lineTwo").style.animationIterationCount = "1";
  document.getElementById("realTwo").style.animationIterationCount = "1";
  document.getElementById("line3Two").style.animationIterationCount = "1";
  document.getElementById("hidden2").style.animationIterationCount = "1";
  realTwopos1 = simbols[Math.floor(Math.random() * 100)];
  realTwopos2 = simbols[Math.floor(Math.random() * 100)];
  realTwopos3 = simbols[Math.floor(Math.random() * 100)];
  document.getElementById("lineTwo").innerHTML = realTwopos1;
  document.getElementById("realTwo").innerHTML = realTwopos2;
  document.getElementById("line3Two").innerHTML = realTwopos3;
}
//REAL THREE FUNCTION
function realTree() {
  document.getElementById("lineThree").style.animationIterationCount = "1";
  document.getElementById("realThree").style.animationIterationCount = "1";
  document.getElementById("line3Three").style.animationIterationCount = "1";
  document.getElementById("hidden3").style.animationIterationCount = "1";
  realThreepos1 = simbols[Math.floor(Math.random() * 100)];
  realThreepos2 = simbols[Math.floor(Math.random() * 100)];
  realThreepos3 = simbols[Math.floor(Math.random() * 100)];
  document.getElementById("lineThree").innerHTML = realThreepos1;
  document.getElementById("realThree").innerHTML = realThreepos2;
  document.getElementById("line3Three").innerHTML = realThreepos3;
}
//REAL FOUR FUNCTION
function realFour() {
  document.getElementById("lineFour").style.animationIterationCount = "1";
  document.getElementById("realFour").style.animationIterationCount = "1";
  document.getElementById("line3Four").style.animationIterationCount = "1";
  document.getElementById("hidden4").style.animationIterationCount = "1";
  realFourpos1 = simbols[Math.floor(Math.random() * 100)];
  realFourpos2 = simbols[Math.floor(Math.random() * 100)];
  realFourpos3 = simbols[Math.floor(Math.random() * 100)];
  document.getElementById("lineFour").innerHTML = realFourpos1;
  document.getElementById("realFour").innerHTML = realFourpos2;
  document.getElementById("line3Four").innerHTML = realFourpos3;
}
//REAL FIVE FUNCTION
function realFive() {
  document.getElementById("lineFive").style.animationIterationCount = "1";
  document.getElementById("realFive").style.animationIterationCount = "1";
  document.getElementById("line3Five").style.animationIterationCount = "1";
  document.getElementById("hidden5").style.animationIterationCount = "1";
  realFivepos1 = simbols[Math.floor(Math.random() * 100)];
  realFivepos2 = simbols[Math.floor(Math.random() * 100)];
  realFivepos3 = simbols[Math.floor(Math.random() * 100)];
  document.getElementById("lineFive").innerHTML = realFivepos1;
  document.getElementById("realFive").innerHTML = realFivepos2;
  document.getElementById("line3Five").innerHTML = realFivepos3;
}
//mistery  :
let rngIron = Math.floor(Math.random() * (200 - 100 + 1) + 100);
let rngBronze = Math.floor(Math.random() * (800 - 400 + 1) + 400);
let rngSilver = Math.floor(Math.random() * (2000 - 1000 + 1) + 1000);
let rngGold = Math.floor(Math.random() * (5000 - 2000 + 1) + 2000);
let auto;
//AUTO PLAY START :
function startAuto() {
  auto = setInterval(start, 2750);
  document.getElementById("startAuto").style.display = "none";
  document.getElementById("stopAuto").style.display = "block";
  document.getElementById("startAuto").style.pointerEvents = "none";
  document.getElementById("stopAuto").style.pointerEvents = "all";
}
function stopAuto() {
  clearInterval(auto);
  document.getElementById("startAuto").style.display = "block";
  document.getElementById("stopAuto").style.display = "none";
  document.getElementById("stopAuto").style.pointerEvents = "none";
  document.getElementById("startAuto").style.pointerEvents = "all";
}
// ANIMATIONS FUNCTIONS
function animationRealOne() {
  //REAL ONE
  clearImgInt = setInterval(changeImgRO, 250);
  document.getElementById("lineOne").style.animationDuration = "0.5s";
  document.getElementById("lineOne").style.animationIterationCount = "infinite";
  document.getElementById("realOne").style.animationDuration = "0.5s";
  document.getElementById("realOne").style.animationIterationCount = "infinite";
  document.getElementById("line3One").style.animationDuration = "0.5s";
  document.getElementById("line3One").style.animationIterationCount =
    "infinite";
  document.getElementById("hidden1").style.animationDuration = "0.5s";
  document.getElementById("hidden1").style.animationIterationCount = "infinite";
}
//RealTwo
function animationRealTwo() {
  clearImgInt2 = setInterval(changeImgRT, 250);
  document.getElementById("lineTwo").style.animationDuration = "0.5s";
  document.getElementById("lineTwo").style.animationIterationCount = "infinite";
  document.getElementById("realTwo").style.animationDuration = "0.5s";
  document.getElementById("realTwo").style.animationIterationCount = "infinite";
  document.getElementById("line3Two").style.animationDuration = "0.5s";
  document.getElementById("line3Two").style.animationIterationCount =
    "infinite";
  document.getElementById("hidden2").style.animationDuration = "0.5s";
  document.getElementById("hidden2").style.animationIterationCount = "infinite";
}
//REAL Tree
function animationRealTree() {
  clearImgInt3 = setInterval(changeImgRTr, 250);
  document.getElementById("lineThree").style.animationDuration = "0.5s";
  document.getElementById("lineThree").style.animationIterationCount =
    "infinite";
  document.getElementById("realThree").style.animationDuration = "0.5s";
  document.getElementById("realThree").style.animationIterationCount =
    "infinite";
  document.getElementById("line3Three").style.animationDuration = "0.5s";
  document.getElementById("line3Three").style.animationIterationCount =
    "infinite";
  document.getElementById("hidden3").style.animationDuration = "0.5s";
  document.getElementById("hidden3").style.animationIterationCount = "infinite";
}
//REAL FOUR
function animationRealFour() {
  clearImgInt4 = setInterval(changeImgRF, 250);
  document.getElementById("lineFour").style.animationDuration = "0.5s";
  document.getElementById("lineFour").style.animationIterationCount =
    "infinite";
  document.getElementById("realFour").style.animationDuration = "0.5s";
  document.getElementById("realFour").style.animationIterationCount =
    "infinite";
  document.getElementById("line3Four").style.animationDuration = "0.5s";
  document.getElementById("line3Four").style.animationIterationCount =
    "infinite";
  document.getElementById("hidden4").style.animationDuration = "0.5s";
  document.getElementById("hidden4").style.animationIterationCount = "infinite";
}
// real five
function animationRealFive() {
  clearImgInt5 = setInterval(changeImgRFv, 250);
  document.getElementById("lineFive").style.animationDuration = "0.5s";
  document.getElementById("lineFive").style.animationIterationCount =
    "infinite";
  document.getElementById("realFive").style.animationDuration = "0.5s";
  document.getElementById("realFive").style.animationIterationCount =
    "infinite";
  document.getElementById("line3Five").style.animationDuration = "0.5s";
  document.getElementById("line3Five").style.animationIterationCount =
    "infinite";
  document.getElementById("hidden5").style.animationDuration = "0.5s";
  document.getElementById("hidden5").style.animationIterationCount = "infinite";
}

// Show wins
function showWins() {
  let winsDiv = document.getElementById("lastWins");
  winsDiv.style.display = "flex";
  winsDiv.style.pointerEvents = "all";
}
//close wins
function closeWins() {
  document.getElementById("lastWins").style.display = "none";
}
//Dev and Des INFO page
function showInfo() {
  let infoDiv = document.getElementById("infoScreen");
  infoDiv.style.display = "flex";
}
function closeThisDiv() {
  let infoDiv = document.getElementById("infoScreen");
  infoDiv.style.display = "none";
}
function changeImgRO() {
  realOnepos1 = simbols[Math.floor(Math.random() * 100)];
  realOnepos2 = simbols[Math.floor(Math.random() * 100)];
  realOnepos3 = simbols[Math.floor(Math.random() * 100)];
  document.getElementById("lineOne").innerHTML = realOnepos1;
  document.getElementById("realOne").innerHTML = realOnepos2;
  document.getElementById("line3One").innerHTML = realOnepos3;
}
function changeImgRT() {
  realTwopos1 = simbols[Math.floor(Math.random() * 100)];
  realTwopos2 = simbols[Math.floor(Math.random() * 100)];
  realTwopos3 = simbols[Math.floor(Math.random() * 100)];
  document.getElementById("lineTwo").innerHTML = realTwopos1;
  document.getElementById("realTwo").innerHTML = realTwopos2;
  document.getElementById("line3Two").innerHTML = realTwopos3;
}
function changeImgRTr() {
  realThreepos1 = simbols[Math.floor(Math.random() * 100)];
  realThreepos2 = simbols[Math.floor(Math.random() * 100)];
  realThreepos3 = simbols[Math.floor(Math.random() * 100)];
  document.getElementById("lineThree").innerHTML = realThreepos1;
  document.getElementById("realThree").innerHTML = realThreepos2;
  document.getElementById("line3Three").innerHTML = realThreepos3;
}
function changeImgRF() {
  realFourpos1 = simbols[Math.floor(Math.random() * 100)];
  realFourpos2 = simbols[Math.floor(Math.random() * 100)];
  realFourpos3 = simbols[Math.floor(Math.random() * 100)];
  document.getElementById("lineFour").innerHTML = realFourpos1;
  document.getElementById("realFour").innerHTML = realFourpos2;
  document.getElementById("line3Four").innerHTML = realFourpos3;
}
function changeImgRFv() {
  realFivepos1 = simbols[Math.floor(Math.random() * 100)];
  realFivepos2 = simbols[Math.floor(Math.random() * 100)];
  realFivepos3 = simbols[Math.floor(Math.random() * 100)];
  document.getElementById("lineFive").innerHTML = realFivepos1;
  document.getElementById("realFive").innerHTML = realFivepos2;
  document.getElementById("line3Five").innerHTML = realFivepos3;
}
//ANIMATION CLEAR INTERVAL
function clearImgIntervalRO() {
  clearInterval(clearImgInt);
}
function clearImgIntervalRT() {
  clearInterval(clearImgInt2);
}
function clearImgIntervalRTr() {
  clearInterval(clearImgInt3);
}
function clearImgIntervalRF() {
  clearInterval(clearImgInt4);
}
function clearImgIntervalRFv() {
  clearInterval(clearImgInt5);
}
//Start and stop startButton functions
function stopPointerEvents() {
  document.getElementById("start").style.pointerEvents = "none";
  document.getElementById("start").innerText = " please wait";
}
function startPointerEvents() {
  document.getElementById("start").style.pointerEvents = "all";
  document.getElementById("start").innerText = "start";
  let startButton = document.getElementById("start");
  startButton.disabled = false;
}
//uplode and set data
function uploadData() {
  let curentCredit = document.getElementById("credit").innerText;
  let curentIron = document.getElementById("iron").innerText;
  let curentBronze = document.getElementById("bronze").innerText;
  let curentSilver = document.getElementById("silver").innerText;
  let curentGold = document.getElementById("gold").innerText;
  let sendData = {
    curentCredit,
    curentIron,
    curentBronze,
    curentSilver,
    curentGold,
  };
  localStorage.setItem("slotData", JSON.stringify(sendData));
}
function setData() {
  if (localStorage.getItem("slotData")) {
    let data = JSON.parse(localStorage.getItem("slotData"));
    document.getElementById("credit").innerText = data.curentCredit;
    document.getElementById("iron").innerText = data.curentIron;
    document.getElementById("bronze").innerText = data.curentBronze;
    document.getElementById("silver").innerText = data.curentSilver;
    document.getElementById("gold").innerText = data.curentGold;
  } 
}