$(document).ready(function() {


// get the string value of user's input

$("#submit-btn").click(function(event){
//stop doing the background it would normally do and change the background to what we want
	event.preventDefault();
	changeBackground();

});
//set if else statement

//if input = city, set body class to city name
	
	function changeBackground(){
		var city = $('#city-type').val();


	if (city === "new york" || city == "new york city" || city ==="nyc"){

		$('body').removeClass().addClass("nyc");

	} else if (city === "san francisco" || city == "sf"){

	 	$('body').removeClass().addClass("sf");

	} else if (city === "los angeles" || city === "la"){

	 	$('body').removeClass().addClass("la");
	
	} else if (city === "sydney" || city === "syd"){

	 	$('body').removeClass().addClass()("sydney");
	
	} else if (city === "austin"){

	 	$('body').removeClass().addClass()("austin");
	}	else {
// if none of those cities return for other
		""

	};
	$("entry")[0].reset();

};

	});
