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

