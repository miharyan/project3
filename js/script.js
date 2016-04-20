$(document).ready(function () {

	$('button').click(function() {
		console.log("Clicked: ", this);
		$(this).addClass("chosen");
		var answer= $(this).hasClass("correct");
		if (answer == true) { 
		console.log("It's Correct!");
		$(this).addClass("right");
		} else {
		console.log("Too Bad...");
		$(this).addClass("wrong");
		}
		$(this).siblings('button').prop("disabled", true);
		
	});

		
});

function gradeTest() {
	var totalQuestions = 5;
	var correctAnswers = 0;
	var alertText;
	var i;
	
var answer = document.getElementById('button').value.toLowerCase();
	if(answer == 'correct') {
	correctAnswers++;
	}
	
if(correctAnswers == totalQuestions) {
	alertText = "Congratulations! You got all the questions right!";
}
else {
	alertText = "You got " + correctAnswers + " out of " + totalQuestions + " correct!";
}
alert(alertText);
}	
