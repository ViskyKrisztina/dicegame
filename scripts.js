function getRandom(number) {
  return Math.floor(Math.random() * Math.floor(number));
}

var randomNumber1 = getRandom(6)+1;
var randomNumber2 = getRandom(6)+1;


var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", "images/dice"+randomNumber1+".png");

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", "images/dice"+randomNumber2+".png");

var titleString = "";
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins 🚩!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins 🚩!";
} else {
  document.querySelector("h1").innerHTML = "🚩 You both win! 🚩";
}

setTimeout(function() {
  document.querySelector("h1").innerHTML = "Refresh me!"
}, 2500);
