const { Builder, By } = require("selenium-webdriver");

async function challenge5(){

let driver = await new Builder().forBrowser("chrome").build();

await driver.get("https://www.google.com");

let searchBox = await driver.findElement(
By.css("textarea[name='q']")
);

console.log("Located using CSS selector");

}

challenge5();