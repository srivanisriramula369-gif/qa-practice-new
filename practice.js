const { Builder, By, Key, until } = require("selenium-webdriver");

async function locatorChallenges(){

let driver = await new Builder().forBrowser("chrome").build();

try{

// -----------------------------
// Challenge 1
// Find Google search box
// -----------------------------

await driver.get("https://www.google.com");

let searchBox = await driver.findElement(By.name("q"));

console.log("Search box located");


// -----------------------------
// Challenge 2
// Type text and press Enter
// -----------------------------

await searchBox.sendKeys("Selenium JavaScript", Key.RETURN);

console.log("Search executed");

await driver.sleep(4000);


// -----------------------------
// Challenge 3
// Locate Login button on hometownfoodz
// -----------------------------

await driver.get("https://hometownfoodz.com");

await driver.sleep(5000);

let loginBtn = await driver.findElement(
By.xpath("//*[contains(text(),'Login')]")
);

console.log("Login button located");


// -----------------------------
// Challenge 4
// Locate phone number input
// -----------------------------

await loginBtn.click();

let phoneInput = await driver.wait(
until.elementLocated(By.xpath("//input[@type='tel']")),
10000
);

console.log("Phone input located");


// -----------------------------
// Challenge 5
// Find all restaurant cards
// -----------------------------

await driver.get("https://hometownfoodz.com");

await driver.sleep(5000);

let restaurants = await driver.findElements(
By.xpath("//div[contains(@class,'restaurant')]")
);

console.log("Total restaurants found:", restaurants.length);


}catch(error){

console.log("Automation error:", error);

}finally{

await driver.quit();

}

}

locatorChallenges();