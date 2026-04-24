const { Builder } = require("selenium-webdriver");

async function openBrowser() {

    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://www.google.com");

}

openBrowser();