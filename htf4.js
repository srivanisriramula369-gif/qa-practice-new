const { Builder, By, until, Key } = require("selenium-webdriver");
const path = require("path");

async function hometownfoodzLogin() {

    let driver = await new Builder().forBrowser("chrome").build();

    try {

        // Open website
        await driver.get("https://hometownfoodz.com/login");

        // Wait phone input
        let phoneInput = await driver.wait(
            until.elementLocated(By.xpath("//input[@type='tel']")),
            15000
        );

        await phoneInput.clear();
        await phoneInput.sendKeys("01589758620");

        console.log("Phone number entered");

        // Click Send OTP
        let sendOtpBtn = await driver.wait(
            until.elementLocated(By.xpath("//button[contains(text(),'Send OTP')]")),
            10000
        );

        await sendOtpBtn.click();
        console.log("Send OTP clicked");

        // Wait OTP field
        let otpInput = await driver.wait(
            until.elementLocated(By.xpath("//input[@type='text']")),
            15000
        );

        await otpInput.sendKeys("872190");
        console.log("OTP entered");

        // Click Verify
        let verifyBtn = await driver.wait(
            until.elementLocated(By.xpath("//button[contains(text(),'Verify')]")),
            10000
        );

        await verifyBtn.click();
        console.log("Verify OTP clicked");

        // Wait profile page
        await driver.wait(until.urlContains("userprofile"), 20000);

        console.log("User profile page loaded");

        // Upload profile picture
        let uploadInput = await driver.wait(
            until.elementLocated(By.xpath("//input[@type='file']")),
            15000
        );

        let filePath = path.resolve("C:/Users/LENOVO T460S/Downloads/sv.jpg");
        await uploadInput.sendKeys(filePath);

        console.log("Profile image uploaded");

        // Enter Name
        let nameField = await driver.findElement(By.xpath("//input[@placeholder='Name']"));
        await nameField.sendKeys("hometownfoodz", Key.ENTER);

        console.log("Name entered");

        // Enter Email
        let emailField = await driver.findElement(By.xpath("//input[@placeholder='Email']"));
        await emailField.sendKeys("htf@gmail.com", Key.ENTER);

        console.log("Email entered");

        // Select Country
        let country = await driver.findElement(By.xpath("//div[contains(text(),'Select Country')]"));
        await country.click();

        let countryInput = await driver.switchTo().activeElement();
        await countryInput.sendKeys("India", Key.ENTER);

        console.log("Country selected");

        // Select State
        let state = await driver.findElement(By.xpath("//div[contains(text(),'Select State')]"));
        await state.click();

        let stateInput = await driver.switchTo().activeElement();
        await stateInput.sendKeys("Telangana", Key.ENTER);

        console.log("State selected");

        // Select District
        let district = await driver.findElement(By.xpath("//div[contains(text(),'Select District')]"));
        await district.click();

        let districtInput = await driver.switchTo().activeElement();
        await districtInput.sendKeys("Warangal", Key.ENTER);

        console.log("District selected");

        // Click Submit
        let submitBtn = await driver.wait(
            until.elementLocated(By.xpath("//button[contains(text(),'Submit')]")),
            10000
        );

        await submitBtn.click();

        console.log("Profile submitted");

        // Wait homepage/menu
        await driver.sleep(8000);

        // Search Biryani
        let biryani = await driver.wait(
            until.elementLocated(By.xpath("//*[contains(text(),'Biryani')]")),
            20000
        );

        await driver.executeScript("arguments[0].scrollIntoView(true);", biryani);
        await driver.sleep(1000);

        await biryani.click();

        console.log("Biryani category clicked");

        await driver.sleep(5000);

    } catch (error) {

        console.log("Automation error:", error);

    } finally {

        await driver.quit();

    }
}

hometownfoodzLogin();