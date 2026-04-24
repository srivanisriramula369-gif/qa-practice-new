const { Builder, By, until, Key } = require("selenium-webdriver");
const path = require("path");

async function hometownfoodzLogin() {

    let driver = await new Builder().forBrowser("chrome").build();

    try {

        // OPEN WEBSITE
        await driver.get("https://hometownfoodz.com/login");

        // PHONE INPUT
        let phoneInput = await driver.wait(
            until.elementLocated(By.xpath("//input[@type='tel']")),
            15000
        );

        await phoneInput.clear();
        await phoneInput.sendKeys("01589758620");

        console.log("Phone number entered");


        // SEND OTP
        let sendOtpBtn = await driver.wait(
            until.elementLocated(By.xpath("//button[contains(text(),'Send OTP')]")),
            10000
        );

        await sendOtpBtn.click();
        console.log("Send OTP clicked");


        // OTP INPUT
        let otpInput = await driver.wait(
            until.elementLocated(By.xpath("//input[@type='text']")),
            15000
        );

        await otpInput.sendKeys("872190");
        console.log("OTP entered");


        // VERIFY BUTTON
        let verifyBtn = await driver.wait(
            until.elementLocated(By.xpath("//button[contains(text(),'Verify')]")),
            10000
        );

        await verifyBtn.click();
        console.log("Verify OTP clicked");


        // WAIT FOR PROFILE PAGE
        await driver.wait(until.urlContains("userprofile"), 20000);

        console.log("User profile page loaded");


        // =============================
        // PROFILE IMAGE UPLOAD
        // =============================

        let uploadInput = await driver.wait(
            until.elementLocated(By.xpath("//input[@type='file']")),
            15000
        );

        let filePath = path.resolve("C:/Users/LENOVO T460S/Downloads/sv.jpg");

        await uploadInput.sendKeys(filePath);

        console.log("Profile image uploaded");


        // WAIT FOR CROP POPUP SAVE BUTTON
        let saveBtn = await driver.wait(
            until.elementLocated(By.xpath("//button[contains(text(),'SAVE')]")),
            15000
        );

        await driver.sleep(2000);

        await driver.executeScript("arguments[0].click();", saveBtn);

        console.log("Profile image saved");


        // =============================
        // ENTER NAME
        // =============================

        let nameField = await driver.wait(
            until.elementLocated(By.xpath("//input[contains(@placeholder,'Name')]")),
            15000
        );

        await nameField.clear();
        await nameField.sendKeys("hometownfoodz");

        console.log("Name entered");


        // =============================
        // ENTER EMAIL
        // =============================

        let emailField = await driver.wait(
            until.elementLocated(By.xpath("//input[contains(@placeholder,'Email')]")),
            15000
        );

        await emailField.clear();
        await emailField.sendKeys("htf@gmail.com");

        console.log("Email entered");


        // =============================
        // SELECT COUNTRY
        // =============================

        let country = await driver.wait(
            until.elementLocated(By.xpath("//div[contains(text(),'Select Country')]")),
            15000
        );

        await country.click();

        let countryInput = await driver.switchTo().activeElement();
        await countryInput.sendKeys("India", Key.ENTER);

        console.log("Country selected");


        // =============================
        // SELECT STATE
        // =============================

        let state = await driver.wait(
            until.elementLocated(By.xpath("//div[contains(text(),'Select State')]")),
            15000
        );

        await state.click();

        let stateInput = await driver.switchTo().activeElement();
        await stateInput.sendKeys("Telangana", Key.ENTER);

        console.log("State selected");


        // =============================
        // SELECT DISTRICT
        // =============================

        let district = await driver.wait(
            until.elementLocated(By.xpath("//div[contains(text(),'Select District')]")),
            15000
        );

        await district.click();

        let districtInput = await driver.switchTo().activeElement();
        await districtInput.sendKeys("Warangal", Key.ENTER);

        console.log("District selected");


        // =============================
        // CLICK SUBMIT
        // =============================

        let submitBtn = await driver.wait(
            until.elementLocated(By.xpath("//button[contains(text(),'Submit')]")),
            15000
        );

        await submitBtn.click();

        console.log("Profile submitted");


        // WAIT FOR PAGE LOAD
        await driver.sleep(6000);


        // =============================
        // CLICK BIRYANI CATEGORY
        // =============================

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

        // Screenshot if error occurs
        let screenshot = await driver.takeScreenshot();
        require("fs").writeFileSync("error.png", screenshot, "base64");

    } finally {

        await driver.quit();

    }
}

hometownfoodzLogin();