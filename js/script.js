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
	
var a1 = document.getElementById('button').value.toLowerCase();
	if(a1 == 'correct') {
	correctAnswers++;
	}
	

