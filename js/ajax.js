(function () {
	"use strict";

	var xhr = new XMLHttpRequest();
	

	// xhr.onload = function () {
	// 	console.log(JSON.parse(xhr.responseText));
	// }

	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			console.log(JSON.parse(xhr.responseText)[0]);
		}
	}
	xhr.withCredentials = true;
	xhr.open('GET', 'js/data.json', true);
	xhr.send();

	
}());