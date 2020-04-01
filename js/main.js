// Setting the starting score values
// 

let humanScore = 0;
let computerScore = 0;
let numberOfgames = 0;
let humanSelect = null;
let result = null;

// This function initializes all values

function reset() {
	humanScore = 0;
	computerScore = 0;
	numberOfgames = 0;
	humanSelect = null;
	$('#outcome').text("");
	$('#score').text("Score is: 0 to 0");
	$('#selectrock').removeClass('buttonselected');
	$('#selectpaper').removeClass('buttonselected');
	$('#selectscissors').removeClass('buttonselected');
}

// function play take the input from the human and bot and determines the winner

function play(humanPlay,computerPlay) {
  	if (humanPlay === computerPlay) {
    	result = "You tied";
  	} else if (humanPlay === "paper" && computerPlay === "rock" || 
            humanPlay === "rock" && computerPlay === "scissors" ||
            humanPlay === "scissors" && computerPlay === "paper") {
    	humanScore = humanScore + 1;
  		result = "You won!";
  	} else {
    	computerScore = computerScore + 1;
  		result = "You lost!";
  	}    
  }

// function that randomizes the computer's selection

function computerSelect() {
	let randomSelect = Math.random();
	// console.log(randomSelect);
	if (randomSelect > 0.333333 && randomSelect <= 0.666666) {
		computerSelection = "paper";
	} else if (randomSelect > 0.666666) {
		computerSelection = "scissors";
	} else {
		computerSelection = "rock";
	}
	console.log("computer selected: " + computerSelection);
}


//plays the game and shows the bot's selection

function playGame() {
	computerSelect();
	if (humanSelect == "paper" || humanSelect == "scissors" || humanSelect == "rock") {
		play(humanSelect,computerSelection);
		$('#bot').attr('src','images/' + computerSelection + '.png');
		// the bot selection image doesn't show tried use delay so you would see it for a bit
		// before showing the score
		$('#outcome').text(result);
		$('#score').text("Score is: " + humanScore + " to " + computerScore);
		}
	}

// opens the model with user's selection and the prompt to play

function openModal() {
	$('body').append('<div class="background-overlay"></div>');
	$('body').addClass('open');
	let clickedImage = $(this).attr('src');
	$('#pick').attr('src',clickedImage);
	let selection = $(this).attr('id');
	humanSelect = selection;
	// let humanSelect = $(this).attr('id');
	// not sure why lines 105 & 106 work but 107 doesn't
	// console.log("image selected" + clickedImage);
	// console.log("you selected:" + humanSelect);
	}

function closeModal() {
	$('body').removeClass('open');
	$('.background-overlay').remove();
	$('#bot').attr('src','images/robot-head.jpg');
	console.log("clicking")
}

//Nav sidebar
function activateSidebar() {
	$('.sidebar').addClass('active');
}

function deactivateSidebar() {
	$('.sidebar').removeClass('active');
}



// Core of the JS

$('.col-25 img').on('click',openModal);
$('#play').on('click',playGame);
$('.modal').on('click',closeModal);
$('#reset').on('click',reset);
$('.hamburger').on('click', activateSidebar);
$('.close').on('click', deactivateSidebar);
