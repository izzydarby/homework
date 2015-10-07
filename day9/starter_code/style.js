
alert("hello");

$(document).ready(function() {



// get the string value of user's input
// $( "submit-btn" ).click(function() {
//   var text = $( this ).text();
//   $( "input" ).val( text );
// });

//return image based off of input
$("#submit-btn").click(function(){
	event.preventDefault();

	//user inputs keyword
	var city = $('#city-type').val();


	 if (city === "new york"){

	 	$('body').attr("class","nyc");

	}
});

}

// 	if else ( $(".sf").css("background-image") === "url(images/sf.jpg)") {
//        alert('OK');.log("San Francisco")
// 	}
// 	if else ( $(".la").css("background-image") === "url(images/la.jpg)") {
//        alert('OK');.log("Los Angeles")
// 	}
// 	if else ( $(".austin").css("background-image") === "url(images/austin.jpg)") {
//        alert('OK');.log("Austin")
// 	}
// 	if else ( $(".sydney").css("background-image") === "url(images/sydney.jpg)") {
//        alert('OK');.log("Sydney")
// 	}


// // if none of those cities return for other

// 	}
// 	else $(

// 	}