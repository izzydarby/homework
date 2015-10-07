
$(document).ready(function() {


// get the user's input on click of button

$("#submit-btn").click(function(event){
//stop doing the background it would normally do and change the background to what we want
	event.preventDefault();
	changeBackground();

});


//if input = city, set body class to city name
	
	function changeBackground(){
		var city = $('#city-type').val();

//set if else statements
	if (city === "new york" || city == "new york city" || city ==="nyc"){

		$('body').removeClass().addClass("nyc");

	} else if (city === "san francisco" || city == "sf"){

	 	$('body').removeClass().addClass("sf");

	} else if (city === "los angeles" || city === "la" || city === "lax"){

	 	$('body').removeClass().addClass("la");
	
	} else if (city === "sydney" || city === "syd"){

	 	$('body').removeClass().addClass("sydney");
	
	} else if (city === "austin" || city === "atx"){

	 	$('body').removeClass().addClass("austin");
	}	else {
// if none of those cities return for other
		""

	};
	$("entry")[5].reset();

};

	});
