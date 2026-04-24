//find login button using contains(text())


const { Builder, By } = require("selenium-webdriver");

async function challenge5(){

let driver = await new Builder().forBrowser("chrome").build();

await driver.get("https://hometownfoodz.com");

await driver.sleep(5000);

let loginBtn = await driver.findElement(
By.xpath("//*[contains(text(),'Login')]")
);

await loginBtn.click();

}

challenge5();