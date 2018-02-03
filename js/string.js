(function () {
	var myName = 'MY name is Istiyak Amin Santo';

	console.log(myName.length); // measuring the length
	console.log(myName.split(" ")); // separetor and make array
	console.log(myName.indexOf('t')); // find the positon 
	console.log(myName.indexOf('m', 1)); // find the positon  
	console.log(myName.lastIndexOf('m')); // find the last positon

	console.log(myName.toUpperCase()); // convert to uppercase 
	console.log(myName.toLowerCase()); // convert to lowercase 
	
	console.log(myName.substring(11)); // after show the positon 
	console.log(myName.substring(3,7)); // between show the positon 

	console.log(myName.slice(11)); // after show the positon 
	console.log(myName.slice(-18)); // start end the positon

	console.log(myName.replace("Istiyak Amin Santo", "Moslem Uddin Pranto")); // replace the positon

	console.log("    HEllo world     ".toUpperCase().trim()); // remove the space for using trim
}())