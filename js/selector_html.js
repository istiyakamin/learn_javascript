(function () {
	"use strict";

	console.log(document.getElementById('header'));
	console.log(document.getElementsByClassName('title'));

	console.log(document.getElementsByTagName('p'));

	var fullID = document.getElementById('header');
	fullID.id = "changeId";
	fullID.classList.add('also_another');
	fullID.classList.remove('also_another');
	console.log(fullID.className);
	console.log(fullID.classList.contains('also'));

	console.log(fullID.tagName);

	fullID.innerHTML = '<div>' + fullID.innerHTML + '</div>';
	fullID.outerHTML = '<section>' + fullID.outerHTML + '</section>';

}())