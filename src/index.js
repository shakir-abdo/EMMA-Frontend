"use strict";

// ====================== //
// = Copyright (c) EMMA = //
// ====================== //

import "../src/styles/scss/main.scss";

// Dependencies
let httpServices = require("./handler/httpServices");
let config = require("../config.js");

// Logic
const sendButton = document.getElementById('sendButton');
sendButton.addEventListener('click', () => httpServices.httpGet(config.default.RestAPIURL));