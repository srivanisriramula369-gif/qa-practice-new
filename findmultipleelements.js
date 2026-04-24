const { Builder, By } = require("selenium-webdriver");

async function challenge3(){

let driver = await new Builder().forBrowser("chrome").build();

await driver.get("https://hometownfoodz.com");

await driver.sleep(5000);

let restaurants = await driver.findElements(
By.xpath("//div[contains(@class,'restaurant')]")
);

console.log("Restaurants found:", restaurants.length);

}

challenge3();