$(document).ready(function(){


$('.mobile-menu').click(function(){
	$('nav ul').toggleClass('open');	
		})

});

//1. Hide Button

//2. on click of any of the icons, remove the hide class

//3. on click of an icon show search

$('.activate-search').click(function(e) {
	var icon = $(this).attr('id');
	
	$('#search-box').removeClass('hide');

	if (icon === "eggs") {
		//switch the default text in the input
		//update the options in the dropdown
		$('.button-question').attr('placeholder',"How many?");
		$('#select-measurement').addClass('hide');
	} else {
		$('.button-question').attr('placeholder',"How much?")
		$('#select-measurement').removeClass('hide');
	}
});

//4. get the value of the input with jQuery. target the input id .val

//5. 

$('#submit-btn').click(function() {
	console.log('click firing')
	$('.results-box').removeClass('hide');

	//get the value of the input text
	//if the select dropdown isn't hidden you have to get that value
	//take those 3 values and pass into a function that returns a result
	var result = calculateIngredients();
	//update the text of the results box with that

});




function calculateIngredients(ingredient, num, unit){
	num = $("input[id='weight']").val(),
    unit1 = $("option[value='teaspoon']").val(),
    unit2 = $("option[value='teaspoon']").val(),
    unit3 = $("option[value='cups']").val(),
    result = (num1*num2);


	return result;
}


























	var howMuch = $("input[name='howMuch']").val();


	$('#form').validate(function(event){
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

	