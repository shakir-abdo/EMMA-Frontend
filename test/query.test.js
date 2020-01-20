"use strict";

// ====================== //
// = Copyright (c) EMMA = //
// ====================== //

let { Builder, By, Key, until } = require("selenium-webdriver");
 
process.on("unhandledRejection", (err, promise) => {
    console.log("Test did not pass.");
    process.exit(1);
});

(async function query(){
    let driver = await new Builder().forBrowser("chrome").build();
    try {
        console.log("Running test.");
        await driver.get("https://emma-ai.com");
        await driver.findElement(By.id("evaluator-input")).sendKeys("I am sad", Key.RETURN);
        await driver.wait(until.elementTextIs(driver.findElement(By.css("span.tone-result")), "negative"), undefined);
    }
    catch (e){
        console.log("Test did not pass.");
    }
    finally {
        console.log("Test passed!");
        await driver.quit();
    }
})();
