const { Builder, By } = require("selenium-webdriver");

async function challenge2(){

let driver = await new Builder().forBrowser("chrome").build();

await driver.get("https://hometownfoodz.com");

await driver.sleep(5000);

let noodles = await driver.findElement(
By.xpath("//*[contains(text(),'Noodles')]")
);

console.log("Noodles element located");

await noodles.click();

}

challenge2();