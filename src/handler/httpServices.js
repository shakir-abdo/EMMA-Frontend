"use strict";

// ====================== //
// = Copyright (c) EMMA = //
// ====================== //

export function httpGet(url){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send('Access-Control-Allow-Origin');
    console.log(xmlHttp.responseText);
    document.getElementById('response').innerHTML = xmlHttp.responseText;
    return xmlHttp.responseText;
}