(function () {
	"use strict";

	var obj = {
		'one' : 'this is Number One',
	}
	var obj2 = {
		'two' : 'this is Number two',
	}

	Object.prototype.specialProperty = "hello";

	console.log(obj2);
}());