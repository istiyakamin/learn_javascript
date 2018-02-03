(function (){
	"use strict";
	if (500) {
		console.log("This is true");
	}
	else {
		console.log("This is false");
	}
	var firstArray = ['Istiyak', 'Amin'];
	if (firstArray) {
		console.log("This is avaiable");
	}
	else {
		console.log("This is not avaiable");
	}

	(1) ? console.log("This is if function") : console.log("This is else function0");

// switch statement
var switcher = "Sabto"
switch (switcher) {
	case "Panto":
		console.log("This is Pranto");
		break;
	case "Sabto":
		console.log("This is Santo");
		break;
	default:
		console.log("This is not Santo and Pranto");
		break;
}

var anArray = ['item1', 'item2', 'item3'];
	console.log(anArray.length);

	for (var i = 0; i < anArray.length; i++) {
		console.log(anArray[i]);
	}

	// Natural number 

	for(var i = 1; i <=10; i++){
		console.log(i);
		console.log(i++);
		console.log(++i);

	}
	

}());