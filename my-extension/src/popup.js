'use strict';

import './popup.css';


// Communicate with background file by sending a message
chrome.runtime.sendMessage(
  {
    type: 'GREETINGS',
    payload: {
      message: 'Hello, my name is Pop. I am from Popup.',
    },
  },
  (response) => {
    console.log(response.message);
  }
);
