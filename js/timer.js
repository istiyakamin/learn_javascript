(function () {
	"use strict";

	// setTimer is here
	function logTimer(msg) {
		console.log(msg);
	}
	setTimeout(function () {
		logTimer("This is a Timer");
	}, 1000);

	// setInterval

	function timeInterval() {
		console.log('This is Time interval');
		counter++;
		if (counter === 5) {
			clearInterval(intervalID);
		}
	}
	var intervalID = setInterval(timeInterval, 1000);
	var counter = 1;

	
}())