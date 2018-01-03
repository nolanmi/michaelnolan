var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Logo_TV_2015.png') {
      myImage.setAttribute ('src','images/mn-monogram.png');
    } else {
      myImage.setAttribute ('src','images/Logo_TV_2015.png');
    }
}
function multiply(num1,num2) {
  var result = num1 * num2;
  return result;
}

multiply(4,7);
multiply(20,20);
multiply(0.5,3);

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Who is cool? ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Who is cool? ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
