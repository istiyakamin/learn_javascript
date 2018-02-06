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

	//fullID.innerHTML = '<div>' + fullID.innerHTML + '</div>';
	//fullID.outerHTML = '<section>' + fullID.outerHTML + '</section>';

	var titleName = document.getElementsByClassName('paragraph')[0];
	titleName.textContent = "I love Javascript";
	console.log(titleName);

	titleName.setAttribute('contenteditable', true);


	fullID.addEventListener('click',function (e) {
		console.log('This is a ' + e.target.nodeName);
		e.stopPropagation();
	});

	document.addEventListener('click',function () {
		console.log("Hello, I am Clicked ");
	});

}())