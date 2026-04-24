//check thr first restaurant card-use xpath indexing

const { Builder, By } = require("selenium-webdriver");

async function challenge4(){

let driver = await new Builder().forBrowser("chrome").build();

await driver.get("https://hometownfoodz.com");

await driver.sleep(5000);

let firstRestaurant = await driver.findElement(
By.xpath("(//div[contains(@class,'restaurant')])[1]")
);

await firstRestaurant.click();

}

challenge4();