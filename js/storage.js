(function () {
	"use strict";

	console.log(window.sessionStorage);

	window.sessionStorage.setItem('item1', true);
	window.sessionStorage.setItem('item2', "hellow world");
	window.sessionStorage.setItem('item3', ['one', 'two']);
	//window.sessionStorage.setItem('item4', JSON.stringify({first_name:'istiyak', last_name:'amin'}));

	console.log(JSON.parse(window.sessionStorage.getItem('item4')));

	function readAll() {
		var x, length;
		for(x=0, length = window.sessionStorage.length; x < length; x++){
			console.log(window.sessionStorage.key(x));
		}
	}
	

	window.sessionStorage.removeItem('item1');
	window.sessionStorage.clear();
	
	readAll()

}());