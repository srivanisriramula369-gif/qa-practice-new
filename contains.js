//Open Google and locate the search box using dynamic XPath.

const { Builder, By } = require("selenium-webdriver");

async function challenge1(){

let driver = await new Builder().forBrowser("chrome").build();

await driver.get("https://www.google.com");

let searchBox = await driver.findElement(
By.xpath("//textarea[contains(@name,'q')]")
);

await searchBox.sendKeys("Advanced XPath");

}

challenge1();