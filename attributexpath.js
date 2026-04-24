const { Builder, By, until } = require("selenium-webdriver");

async function challenge4(){

let driver = await new Builder().forBrowser("chrome").build();

await driver.get("https://hometownfoodz.com/login");

let phone = await driver.wait(
until.elementLocated(By.xpath("//input[@type='tel']")),
10000
);

await phone.sendKeys("0589758620");

console.log("Phone entered");

}

challenge4();