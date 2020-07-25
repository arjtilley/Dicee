
// alert("Hello!");

function randomNumber() {
  var randomNumber = Math.random();
  randomNumber *= 6;
  randomNumber = Math.floor(randomNumber)+1;
  return randomNumber;
  }

function rollDice() {
  var roll = randomNumber();
  var fname = "images/dice"+roll+".png";
  return fname;
}

var dice1 = rollDice();
var dice2 = rollDice();

document.querySelector(".img1").setAttribute("src", dice1);
document.querySelector(".img2").setAttribute("src", dice2);

if (dice1 > dice2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (dice2 > dice1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else if (dice1 === dice2) {
  document.querySelector("h1").innerHTML = "Draw!";
}
