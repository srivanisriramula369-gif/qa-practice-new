const { Builder } = require("selenium-webdriver");

async function createDriver() {

    let driver = await new Builder()
        .forBrowser("chrome")
        .build();

    return driver;
}

module.exports = createDriver;

//export
//module.exports = functionName

//Import
//const functionName = require("./fileName");

