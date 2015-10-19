$(document).ready(function(){
	$("#show-this-on-click").addClass("hide");

$(".readmore").on("click", function(){
		event.preventDefault();

  $(this).next("#show-this-on-click").toggleClass("hide");
});
});
$(".learnmore").on("click", function(){
		event.preventDefault();

  $(this).next("#learnmoretext").toggleClass("hide");
});







