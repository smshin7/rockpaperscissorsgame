window.onload = function() {

var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors")


var userPick = null
var computerPicker = function() {
	var computerPick = Math.random();
			if(computerPick <= 0.33) {
			    document.getElementById("compAnswer").innerHTML = "Rock";
			    return "rock";
			} else if(computerPick <=0.66) {
			    document.getElementById("compAnswer").innerHTML = "Paper";
			    return "paper";
			} else {
			    document.getElementById("compAnswer").innerHTML = "Scissors";
			    return "scissors";
			};
		}

var result = function (userPick) {
	var computerPick = computerPicker()
	if (userPick === computerPick) {
		document.getElementById("theResult").innerHTML = "A tie!"
	}
	if (userPick == "rock") {
		if (computerPick == "scissors") {
			document.getElementById("theResult").innerHTML = "You win!"
		} else if (computerPick == "paper"){
			document.getElementById("theResult").innerHTML = "You lose. Computer wins."
		}
	}
	if (userPick == "paper") {
		if (computerPick == "rock") {
			document.getElementById("theResult").innerHTML = "You win!"
		} else if (computerPick == "scissors") {
			document.getElementById("theResult").innerHTML = "You lose. Computer wins."
		}
 	}
 	if (userPick == "scissors") {
 		if (computerPick == "paper") {
 			document.getElementById("theResult").innerHTML = "You win!"
 		} else if (computerPick == "rock") {
 			document.getElementById("theResult").innerHTML = "You lose. Computer wins."
 		}
 	}
};

rock.onclick = function () {
	result("rock");
};
paper.onclick = function () {
	result("paper");
};
scissors.onclick = function () {
	result("scissors")
}

};