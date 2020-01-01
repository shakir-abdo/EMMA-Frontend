"use strict";

// ====================== //
// = Copyright (c) EMMA = //
// ====================== //

import "../src/styles/scss/main.scss";

// Dependencies
let httpServices = require("./handler/httpServices");
let config = require("../config.js");

// Logic
const input = document.getElementById('input');
input.addEventListener('keyup', (event) => {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        document.getElementById('response').innerHTML = httpServices.httpGet(config.default.RestAPIURL);
    }
  });