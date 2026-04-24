const { Builder, By } = require("selenium-webdriver");

async function test(){

let driver = await new Builder().forBrowser("chrome").build();

await driver.get("https://google.com");

let search = await driver.findElement(By.name("q"));
await search.sendKeys("Osmania college of Law");

}

test();