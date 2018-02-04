(function () {
	"use strict";

	var dateTime = new Date();
	console.log(dateTime);
	console.log(typeof(dateTime));

	var newDate = new Date('december 03 1999');
	console.log(newDate);
	console.log(newDate.getDate());
	console.log(newDate.getDay());
	console.log(newDate.getMonth());
	console.log(newDate.getYear());
	console.log(newDate.getFullYear());

	console.log(newDate.getUTCDate());
	console.log(newDate.getUTCMonth());
	console.log(newDate.getUTCDay());
	console.log(newDate.getUTCFullYear());
}())