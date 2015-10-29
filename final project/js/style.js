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
		$('.button-question').val('');

			//if the icon is eggs do one thing if it's not do something else

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


	$('#submit-btn').click(function(event) {
		event.preventDefault();

		var substitutes = {
			egg: [
				{ 
					"1": "tablespoon(s) flax seed",
					"3": "tablespoons water"
				},
				{
					"3": "tablespoons applesauce or pureed fruit, such as banana"
				},
				{	"3": "tablespoons aquafaba (aka chickpea liquid)"

				},
				{	"2": "tablespoons potato starch"

				}

				],

			milk: [
				{
					"1":"tablespoon(s) almond milk, coconut milk, hemp milk, etc"
				},	

				{
					"1":"tablespoon(s) full-fat soy milk (replacing whole milk)"
				},
				{
					"1": "tablespoon(s) water"
				}
				
				],

			butter: [
				{
					"1":"tablespoon(s) solid coconut oil"
				},
				{
					"1":"tablespoon(s) Earth Balance or other vegan shortening (cookies and pie crusts)"
				},
				{
					"1":"tablespoon(s) olive oil (in spicy baking, like gingerbread)"
				},

				],
		};
		var userInput = $("input.button-question").val();
		console.log('click firing')

		// JQUERY get value of radio button 

		var radioSelect = $('input:radio[name=radio-button]').val();
		console.log(radioSelect);
		
		// IF check if butter or milk or eggs

		if (radioSelect === "eggs") {
		$('.results-box').text(convertToEggs(userInput, substitutes));
		} else if (radioSelect === "milk") {
		// ELSE IF
		$('.results-box').text(convertToButter(userInput, substitutes));
		} else {
		// ELSE
		$('.results-box').text(convertToMilk(userInput, substitutes));

		}
	
		//get the value of the input text
		//if the select dropdown isn't hidden you have to get that value
		//take those 3 values and pass into a function that returns a result
		var result = calculateIngredients();
			console.log(result);
			


		//update the text of the results box with that


		for (var i = 0; i < result.length; i++) {
		   	if (result[2] === "eggs") {
		   			console.log("eggs");
		   	} else if (result[2] === "milk") {
		   			console.log("milk"); 
		   	} else { 
		   			console.log("butter");

		   	


		}
	}



	function convertToEggs(num, substitutes){

		// create an array to hold all of the egg substitutes
		var eggSubstitutes = [];
		debugger;
		// loop through all of the egg substitutes
		for (var i =  0; i < substitutes.egg.length; i++) {
			
			// create an array to store the groups of substitutes
			var tempArray = [];

			// loop through each group of substitutes
			for (var key in substitutes.egg[i]) {
			  
			  
				// checks if it has the key
			  if (substitutes.egg[i].hasOwnProperty(key)) {

			  	// parse key to num and multiply by user's input
			  	var subs = parseInt(key) * num;
			  	
			  	// add measurement and ingredient to updated number
			  	var withMeasurement = subs + substitutes.egg[i][key];
				
				// add measurement to temp array
				tempArray.push(withMeasurement); 
			  	
			  }
			}

			// add temp array to egg substitute array
			eggSubstitutes.push(tempArray);

		};

		// return eggSubstitutes array
		return eggSubstitutes // an array of egg substittues
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
			  	
			  	// add measurement and ingredient to updated number
			  	var withMeasurement = subs + substitutes.butter[i][key];
				
				// add measurement to temp array
				tempArray.push(withMeasurement); 
			  	
			  }
			}

			// add temp array to butter substitute array
			butterSubstitutes.push(tempArray);

		};


		return butterSubstitutes// an array of butter substitutes
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
			  	
			  	// add measurement and ingredient to updated number
			  	var withMeasurement = subs + substitutes.milk[i][key];
				
				// add measurement to temp array
				tempArray.push(withMeasurement); 
			  	
			  }
			}

			// add temp array to egg substitute array
			milkSubstitutes.push(tempArray);

		};
		return milkSubstitutes // an array of milk subs
	}






	function calculateIngredients(){
		var num = $("input.button-question").val();
	    var unit = $("select#select-measurement").val();
	    var noUnit = $("input[name='radio-button']:checked").val();


	    return [num, unit, noUnit];


	}


});




//5. if the variable result is equal to butter, calculate num * substitution numb (e.g. 2 * 1/2 teaspoon) and apply the correct unit






// for (var i = 0; i < result.length; i++) {
//    	if (result[0] === 2) {
//    			return("eggs");
//    	} else if (result[2] === "milk") {
//    			console.log("milk"); 
//    	} else { 
//    			console.log("butter");

   	


// }











