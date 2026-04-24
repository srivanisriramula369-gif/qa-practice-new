const { Builder, By } = require("selenium-webdriver");

async function test() {

    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://www.google.com");

    let searchBox = await driver.findElement(By.name("q"));

    await searchBox.sendKeys("Selenium WebDriver");

}

test();