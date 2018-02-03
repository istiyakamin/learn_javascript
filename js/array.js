(function () {
	"use strict";

	var testArray = ['one', 'two', 'three', 'four'];
	var testArray1 = ['one', 'two', 'three', 'four'];
	var testArray2 = ['one', 'two', 'three', 'four'];
	var testArray3 = [20, 100, 30, 185];
	var testArray4 = ['one', 'two', 'three', 'four'];
	var testArray5 = ['one', 'two', 'three', 'four'];


	console.log(testArray.length);

	testArray.push('Five');
	console.log(testArray);

	testArray.unshift('Zero');
	console.log(testArray);

	testArray1.pop();
	console.log(testArray1);

	testArray1.shift();
	console.log(testArray1);

	testArray2.splice(0,3, 'a', 'b', 'c');
	console.log(testArray2);

	testArray2.reverse();
	console.log(testArray2);

	testArray2.sort();
	console.log(testArray2);

	testArray3.sort(function(a,b){
		if (a<b){
			return false;
		}else if (a === b) {
			return 0;
		}else {
			return 1;
		}
	});
	console.log(testArray3);
	console.log(testArray3.slice(1));
	console.log(testArray2.join(''));
}())