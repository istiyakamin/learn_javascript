(function() {
	"use strict";
	var newFunc = function newFunc(arg1, arg2, arg3) {
		return arg1+arg2;
	}
	console.log(newFunc.length);

	var person = {
		name : "Istiyak Amin ",
		profession : " Web Developer"
	}
	function hello(user1) {
		return console.log("My name is " + this.name + user1 + " And I am a" + this.profession);
	}
	hello.call(person, "santo");

	function addToCart(price, fee) {
		if (!this.total) {
			this.total = 0;
		}

		this.total += price += fee;
		return this.name + ", Your cart is $" + this.total;
	}
	var dansCart = addToCart.bind(person, 10);
	console.log(dansCart(40));
	console.log(dansCart(160));

	var moslem = {
		name : "Moslem Uddin"
	}
	var moslu = addToCart.bind(moslem, 5)
	console.log(moslu(10));
	console.log(moslu(15));
}());