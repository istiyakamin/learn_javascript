(function (argument) {
	"use strict";

	var anArray = ['one', 'two', 'three'];

	anArray.forEach(function(aValue, aIndex) {
		console.log("This is value " + aValue + " and This is a Index Number " + aIndex);
	})

	console.log(anArray.every(function(value){
		return typeof value === 'string';
	}));

	console.log(["hello", 2,4,"ready", "santo"].filter(function(value) {
		return typeof value !== 'string';
	}));

	console.log(anArray.map(function(value){
		return value.toUpperCase();
	}));

}());