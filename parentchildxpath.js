const { Builder, By } = require("selenium-webdriver");

async function challenge2(){

let driver = await new Builder().forBrowser("chrome").build();

await driver.get("https://hometownfoodz.com");

await driver.sleep(5000);

let biryani = await driver.findElement(
By.xpath("//*[contains(text(),'Biryani')]")
);

console.log("Biryani element located");

await biryani.click();

}

challenge2();