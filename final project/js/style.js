$(document).ready(function){

var ingredient = prompt("What do you want to replace","Type the ingredient here");

switch(indredient){
  case 'egg':
    console.log("How many eggs?");
    break;
  case 'milk':
    console.log("How much milk?");
    break;
  case 'butter':
    console.log("How much butter?");
    break;
  default:
    console.log("Hmmm, I'm not sure what " + ingredient + " is. Enter a different ingredient.");
}

};