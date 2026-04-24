const { Builder, By, until } = require("selenium-webdriver");

async function hometownfoodzTest(){

let driver = await new Builder().forBrowser("chrome").build();

try {

    // 1️⃣ open website
    await driver.get("https://hometownfoodz.com");

    // wait for page to load
    await driver.sleep(4000);

    // 2️⃣ click Biryani category
    let biryani = await driver.findElement(
        By.xpath("//span[contains(text(),'Biryani')]")
    );

    await biryani.click();

    await driver.sleep(3000);

    // 3️⃣ click restaurant card
    let restaurant = await driver.findElement(
        By.xpath("//div[contains(@class,'restaurant')]")
    );

    await restaurant.click();

    await driver.sleep(5000);

} 
catch(error){

    console.log(error);

}

}

hometownfoodzTest();