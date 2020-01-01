"use strict";

// ====================== //
// = Copyright (c) EMMA = //
// ====================== //

export function httpGet(url){
    if(!url || url.length == 0){
        return "No URL provided!";
    }
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send('Access-Control-Allow-Origin');
    return xmlHttp.responseText;
}