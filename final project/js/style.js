$(document).ready(function(){

	//on click of the mobile menu, show the list items
	$('.mobile-menu').click(function(){
		$('nav ul').toggleClass('open');	
			})

	});


	// BEGIN TOOL
	// Step 1: On click of icons, show search button and reset question value
	$('.activate-search').click(function(e) {
		var icon = $(this).attr('id');
		
		$('#search-box').removeClass('hide');
		$('.button-question').val('');


		//if the icon is eggs, ask the question how many. if it's milk or butter, ask how much
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


	// Step 2: Submit button click
	$('#submit-btn').click(function(event) {
		event.preventDefault();

		//get the value of the input text
		//if the select dropdown isn't hidden you have to get that value
		//take those 3 values and pass into a function that returns a result
		var result = calculateIngredients();

		// this gives you the three values you need
		var selectedIngredient = result[2];
		var selectedUnit = result[1];
		var selectedValue = result[0];

		console.log(selectedValue, selectedUnit, selectedIngredient);

		// before calculting substitues, convert to tablespoons
		if((selectedUnit != 'tablespoons') && (selectedIngredient != 'eggs')) {
			var result = convertToTablespoons(selectedUnit, selectedValue);
			console.log(result);
			selectedValue = result;
			selectedUnit = 'tablespoons';
		}


		if (isNaN(selectedValue) === true) {
			$('.results-box').text("please enter a number");
			$('.results-box').css('color','red');

		} else if (selectedIngredient === 'eggs') {
		 	$('.results-box').html(convertToEggs(selectedValue, substitutes));
		} else if (selectedIngredient === 'milk') {
			$('.results-box').html(convertToMilk(selectedValue, substitutes));
		} else {
			$('.results-box').html(convertToButter(selectedValue, substitutes));
		}

});

//store what substitutes to use later on
var substitutes = {
	egg: [
		//these are all in tablespoons
		{ 
			"1": "flax seed",
			"3": "water"
		},
		{
			"3": "applesauce or pureed fruit, such as banana"
		},
		{	"3": " aquafaba (aka chickpea liquid)"

		},
		{	"2": " potato starch"

		}

		],

	milk: [
		{
			"1":" almond milk, coconut milk, hemp milk, etc"
		},	

		{
			"1":"full-fat soy milk (replacing whole milk)"
		},
		{
			"1": "water"
		}
		
		],

	butter: [
		{
			"1":"solid coconut oil"
		},
		{
			"1":"Earth Balance or other vegan shortening (cookies and pie crusts)"
		},
		{
			"1":" olive oil (in spicy baking, like gingerbread)"
		},

		],
};

//this is converting either teaspoons or cups to tablespoons. the first value you pass in should be the unit and the second is how much to convert. math.round rounds to the nearest interger


function convertToTablespoons (unit, value) {
	//if it's teaspoons do something
	var result;
	if (unit === "teaspoons") {
		result = value / 3;
	}
	//if it's cups do something
	if (unit === "cups") {
		result = value * 16;
	}
	if (unit === "tablespoons") {
		result = value;
	}

	return Math.round(result);
}

function convertBackToUnit (unit, value) {
	//convert the unit back to what it originally was
	var result;
	if (unit === "teaspoons") {
		result = value * 3;
	}
	//if it's cups do something
	if (unit === "cups") {
		result = value / 16;
	}

	if (unit === "tablespoons") {
		result = value;
	}

	return Math.round(result);

}

function formatResult (array){
	var conversionResult='';
	for (var i = 0; i < array.length; i++){
		conversionResult += "<br />" + array[i] + "<br />" + "<span>or</span>" + "<br />";
	}

	return conversionResult;
}

function convertToEggs(num, substitutes){

	// create an array to hold all of the egg substitutes
	var eggSubstitutes = [];
	
	// loop through all of the egg substitutes
	for (var i =  0; i < substitutes.egg.length; i++) {
		
		// create an array to store the groups of substitutes
		var tempArray = [];

		// loop through each group of substitutes
		for (var key in substitutes.egg[i]) {

			// add logic to determine how many are in this group,
			// then add plus sites after each one but the last
	
			// checks if it has the key
		  if (substitutes.egg[i].hasOwnProperty(key)) {

		  	// parse key to num and multiply by user's input
		  	var subs = parseInt(key) * num;
		  	
		  	// add measurement and ingredient to updated number
		  	var withMeasurement = subs + "tablespoons" + substitutes.egg[i][key];
			
			// add measurement to temp array
			tempArray.push(withMeasurement); 
		  	
		  }
		}

		// add temp array to egg substitute array
		eggSubstitutes.push(tempArray);

	};
	console.log(eggSubstitutes);
	// return eggSubstitutes array
	return formatResult(eggSubstitutes); // an array of egg substittues
}


function convertToButter (num, substitutes){
	// create an array to hold all of the butter substitutes
	var butterSubstitutes = [];

	// loop through all of the butter substitutes
	for (var i =  0; i < substitutes.butter.length; i++) {
		
		// create an array to store the groups of butter substitutes
		var tempArray = [];

		// loop through each group of substitutes
		for (var key in substitutes.butter[i]) {
		  
		  
			// checks if it has the key
		  if (substitutes.butter[i].hasOwnProperty(key)) {

		  	// parse key to num and multiply by user's input
		  	var subs = parseInt(key) * num;

		  	var originalUserInput= calculateIngredients();	

		  	//this variable will be the converted number (e.g. I input 6 cups milk - this will convert the tablespoons conversion back to the original cups unit)
		  	var convertedNumber =convertBackToUnit(originalUserInput[1], subs);
		  	
		  	// add measurement and ingredient to updated number
		  	var withMeasurement = convertedNumber + originalUserInput[1] + substitutes.butter[i][key];
			
			// add measurement to temp array
			tempArray.push(withMeasurement); 
		  	
		  }
		}

		// add temp array to butter substitute array
		butterSubstitutes.push(tempArray);

	};

		//in the return we are calling formatResult which convert our array to a string and gives it back to us. That value we return to whoever calls convertToButter
	return formatResult(butterSubstitutes);
}

function convertToMilk (num, substitutes){

	// create an array to hold all of the milk substitutes
	var milkSubstitutes = [];

	// loop through all of the milk substitutes
	for (var i =  0; i < substitutes.milk.length; i++) {
		
		// create an array to store the groups of substitutes
		var tempArray = [];

		// loop through each group of milk substitutes
		for (var key in substitutes.milk[i]) {
		  
		  
			// checks if it has the key
		  if (substitutes.milk[i].hasOwnProperty(key)) {

		  	// parse key to num and multiply by user's input
		  	var subs = parseInt(key) * num;
		  	
		  	var originalUserInput= calculateIngredients();	

		  	//this variable will be the converted number (e.g. I input 6 cups milk - this will convert the tablespoons conversion back to the original cups unit)
		  	var convertedNumber =convertBackToUnit(originalUserInput[1], subs);
		  	
		  	// add measurement and ingredient to updated number
		  	var withMeasurement = convertedNumber + originalUserInput[1] + substitutes.milk[i][key];
		
			// add measurement to temp array
			tempArray.push(withMeasurement); 
		  	
		  }
		}

		// add temp array to egg substitute array
		milkSubstitutes.push(tempArray);

	};
	return formatResult(milkSubstitutes); // an array of milk subs
}

// Returns: the num in the input, the unit, and which ingredient it was
// Called on line 87
function calculateIngredients(){
	var num = $("input.button-question").val();
    var unit = $("select#select-measurement").val();
    var ingredient = $("input[name='radio-button']:checked").val();

    // if we are on eggs, also set the unit to eggs
    if(ingredient === 'eggs') {
    	unit = ingredient;
    }

    return [num, unit, ingredient];
}

