// find a parent element from child texy

const { Builder, By } = require("selenium-webdriver");

async function challenge3(){

let driver = await new Builder().forBrowser("chrome").build();

await driver.get("https://hometownfoodz.com");

await driver.sleep(5000);

let element = await driver.findElement(
By.xpath("//span[contains(text(),'Biryani')]/parent::*")
);

await element.click();

}

challenge3();