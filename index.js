
// making the dices go random
var randomDice1 = Math.floor(Math.random()*6)+1;
var randomImage= "images/dice"+randomDice1+".png"
document.querySelectorAll("img")[0].setAttribute("src",randomImage)

var randomDice2 = Math.floor(Math.random()*6)+1;
var randomImage="images/dice"+randomDice2+".png"
document.querySelectorAll("img")[1].setAttribute("src",randomImage)

// shows who is the winner
if (randomDice1 > randomDice2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins"
    }
    else if (randomDice2 > randomDice1){
        document.querySelector("h1").innerHTML = " Player 2 wins 🚩"
    }
    else
    {
        document.querySelector("h1").innerHTML = "🚩 its a tie 🚩"
    }
