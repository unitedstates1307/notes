var childOne = document.getElementsByClassName('object-child-1');
var childTwo = document.getElementsByClassName('object-child-2');
var childThree = document.getElementsByClassName('object-child-3')

var fatherOne = document.getElementById('object-father-1');
var fatherTwo = document.getElementById('object-father-2');
var fatherThree = document.getElementById('object-father-3');

var fatherRect = fatherOne.getBoundingClientRect();
var fatherRectX = (fatherRect.right + fatherRect.left)/2;
var fatherRectY = (fatherRect.top + fatherRect.bottom)/2;


for(var i = 0; i < childOne.length; i++){
	var contextOne;
	contextOne = childOne[i].getContext("2d");
	contextOne.beginPAth();
	contextOne.moveTo(0, 0);
	contextOne.lineTo(fatherRectX, fatherRectY);
	contextOne.stroke();

}
