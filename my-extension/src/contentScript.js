'use strict';

// Log `title` of current active web page
const pageTitle = document.head.getElementsByTagName('title')[0].innerHTML;
console.log(
  `Page title is: '${pageTitle}' - evaluated by Chrome extension's 'contentScript.js' file`
);


// var emails = document.getElementsByClassName('yW');
// var myArray = Array.from(emails);
// console.log(emails)
// console.log(myArray)
// myArray.forEach(function(element) {
//     // Access each element using the 'element' variable
//     console.log("thing here")
//     console.log(element.textContent);
// });





// Communicate with background file by sending a message
chrome.runtime.sendMessage(
  {
    type: 'GREETINGS',
    payload: {
      message: 'Hello, my name is Con. I am from ContentScript.',
    },
  },
  (response) => {
    console.log(response.message);
  }
);



