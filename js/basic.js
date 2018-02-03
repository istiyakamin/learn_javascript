// this is sigle line comment

/*
This is multiple line comment 
This is for testing 
*/

//Console only for use debuggin purpose
console.log('This is for testing');

//alert('Welcome to learning Javascript');

var firstVariable = 'istiyak',
	age = 20,
	email, other;

	email = age;	

	console.log(firstVariable);
	console.log(age);
	console.log(email);

// this is single quota
var singleQuote = 'This is sigle',
	dobleQuote = "This is Doble", // this is doble quota
	number = 20; //this is for numbe

	arrayTest = ['istiyak', 'Amin', 'Santo'];

	console.log(arrayTest[0+1]);

	objectTest = {
		santo : 'good boy',
		nayem : 'bad boy'
	};
	console.log(objectTest.santo);

// Arithmatic Operator
	
var addition = 50+50;
var subtraction = 50-30;
var multiple = 5*5;
var division = 100/10;
var modulus = 100%3;
	
	console.log(addition); //100
	console.log(subtraction); // 20
	console.log(multiple); // 25
	console.log(division); // 10
	console.log(modulus); // 1

var oneObject = new String('hello world');

	console.log(oneObject);

// function getColor(color) {
// 	var things = {
// 		red : "this is red",
// 		blue : "this is blue"
// 	};

// 	return things[color] || "Color Not Found";
// }

// 	console.log(getColor('red'));

var color = function getColor(color) {
	var test = console.log(color);
	return true;
}

(function newFunc() {
	console.log("Invoked Automatically");
}());

!function otherFunc(){
	console.log("INvoked Automatically Tooo");
}();

	console.log(window.location.href);

(function locaFunc() {
	var local = "Hello World";
	console.log(local);
	console.log(addition);
}());

(function thisFunc(){
	"use strict"
	var object = {
		properity : "This is First Properity",
		method : function () {
			return this.properity;
		}
	}
	console.log(object.method());
}());