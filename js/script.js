$(document).ready(function () {

	$('button').click(function() {
		console.log("Clicked: ", this);
		$(this).addClass("chosen");
	});
$( "#Kale" ).append( $( "p:first" ).hasClass( "chosen" ).toString() )
$( "#Chinese Broccoli" ).append( $( "p:first" ).hasClass( "chosen" ).toString() )	
		
});

