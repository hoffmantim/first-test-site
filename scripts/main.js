var myHeading = document.querySelector('h1');
myHeading.textContent = 'BJJ White Belt Test';


var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/BJJ_White_Belt.png') {
      myImage.setAttribute ('src','images/MMA-Icon-BJJ.png');
    } else {
      myImage.setAttribute ('src','images/BJJ_White_Belt.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.', 'My name');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'BJJ is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'BJJ is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}