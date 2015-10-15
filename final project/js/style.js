$(document).ready(function(){


$('.mobile-menu').click(function(){
	$('nav ul').toggleClass('open');	
		})

});


//get the value of the input with jQuery. target the input id .val

	$('#form').submit(function(event){
		event.preventDefault();

		var userAnswer = $('input').val().toLowerCase(); 
			console.log(userAnswer);


		if (userAnswer === "eggs" || userAnswer==="egg") {
		 $('.question').html("how many?");

		} else if (userAnswer === "milk") {
		 $('.question').html("how much?");

		} else if (userAnswer === "butter") {
		 $('.question').html("how much?");
				}
	});

	