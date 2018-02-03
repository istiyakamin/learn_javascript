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
//		console.log(i++); // Odd number 
//		console.log(++i); // Even Number

	}

	// for in 
	var anObject = {
		prop1 : 'property1',
		prop2 : 'property2',
		prop3 : 'property3',
		prop4 : 'property4'
	}
	for(var prop in anObject){
		console.log(anObject[prop]);
	}

	// while loop
	var limit = 1;
	while (limit <= 5) {
		console.log(limit++);
	}

	// do while 
	var tooLimit = 1;
	do{
		tooLimit++;
		console.log("Once");
	}while (tooLimit <=3) {
		console.log(tooLimit);

	}
	

}());