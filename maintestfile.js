const { By } = require("selenium-webdriver");
const createDriver = require("./driver");
const { enterText } = require("./utils");

async function loginTest(){

    let driver = await createDriver();

    await driver.get("https://www.google.com");

    let searchBox = await driver.findElement(By.name("q"));

    await enterText(searchBox, "Selenium NodeJS");

}

loginTest();