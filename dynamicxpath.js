const { Builder, By, Key } = require("selenium-webdriver");

async function challenge1(){

let driver = await new Builder().forBrowser("chrome").build();

try{

await driver.get("https://www.google.com");

let searchBox = await driver.findElement(
By.xpath("//textarea[contains(@name,'q')]")
);

await searchBox.sendKeys("Automation Testing", Key.RETURN);

}catch(e){

console.log(e);

}

}

challenge1();