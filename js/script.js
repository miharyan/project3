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
	
var a1 = document.getElementByName('button');
	for(i = 0; i < a1.length; i++) {
		if(a1[i].checked)
			if(a1[i].hasClass("correct") {
				correctAnswers++;
				break;
			}
		}
	}
var a2 = document.getElementByName('button');
	for(i = 0; i < a2.length; i++) {
		if(a2[i].checked)
			if(a2[i].hasClass("correct") {
				correctAnswers++;
				break;
			}
		}
	}
var a3 = document.getElementByName('button');
	for(i = 0; i < a3.length; i++) {
		if(a3[i].checked)
			if(a3[i].hasClass("correct") {
				correctAnswers++;
				break;
			}
		}
	}
var a4 = document.getElementByName('button');
	for(i = 0; i < a4.length; i++) {
		if(a4[i].checked)
			if(a4[i].hasClass("correct") {
				correctAnswers++;
				break;
			}
		}
	}
var a5 = document.getElementByName('button');
	for(i = 0; i < a5.length; i++) {
		if(a5[i].checked)
			if(a5[i].hasClass("correct") {
				correctAnswers++;
				break;
			}
		}
	}

	
if(correctAnswers == totalQuestions) {
	alertText = "Congratulations! You got all the questions right!";
}
else {
	alertText = "You got " + correctAnswers + " out of " + totalQuestions + " correct!";
}
alert(alertText);
}	
