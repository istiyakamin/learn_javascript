(function () {
	 "use strict";


	 (function a() {
	 	var apple = "Apple";
	 	(function b() {
	 		var bat = "bat";
	 		(function c() {
	 			var cat = "cat";
	 			(function d() {
	 				console.log(apple);
	 				console.log(bat);
	 				console.log(cat);
	 			}());

	 		}());
	 	}());
	 }());
	 
}());