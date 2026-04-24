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

        // OTP FIELD
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

        //==============================
        // WAIT PROFILE PAGE
        //==============================

        await driver.wait(until.urlContains("userprofile"), 20000);

        console.log("User profile page loaded");


        // ==============================
        // IMAGE UPLOAD
        // ==============================

        let uploadInput = await driver.wait(
            until.elementLocated(By.xpath("//input[@type='file']")),
            15000
        );

        let filePath = path.resolve("C:/Users/LENOVO T460S/Downloads/sv.jpg");

        await uploadInput.sendKeys(filePath);

        console.log("Image uploaded");

        //==============================
        // WAIT FOR CROP DIALOG
        //==============================
        let cropDialog = await driver.wait(
            until.elementLocated(By.xpath("//div[@role='dialog']")),
            15000
        );

        console.log("Crop dialog opened");

        //=============================
        // WAIT SAVE BUTTON
        //=============================
        let saveBtn = await driver.wait(
            until.elementLocated(By.xpath("//div[@role='dialog']//button[.='Save']")),
            15000
        );

        //============================
        // WAIT UNTIL BUTTON ENABLED
        //============================
        await driver.wait(async () => {
            let disabled = await saveBtn.getAttribute("disabled");
            return disabled === null;
        }, 10000);

        console.log("Save button enabled");

        //===========================
        // CLICK SAVE
        //===========================
        await driver.executeScript("arguments[0].click();", saveBtn);

        console.log("Image saved");


        // WAIT UNTIL POPUP CLOSES
        await driver.wait(until.stalenessOf(saveBtn), 10000);

        console.log("Crop popup closed");

        //==========================
        // NAME FIELD
        //==========================
        let name = await driver.wait(
            until.elementLocated(By.xpath("//label[text()='Name']/following::input[1]")),
            20000
        );

        await driver.executeScript("arguments[0].scrollIntoView(true);", name);

        await name.clear();
        await name.sendKeys("Test User");

        console.log("Name entered");

        //==========================
        //EMAIL FIELD
        //==========================
        let email = await driver.wait(
            until.elementLocated(By.xpath("//label[text()='Email']/following::input[1]")),
            20000
        );

        await driver.executeScript("arguments[0].scrollIntoView(true);", email);

        await email.clear();
        await email.sendKeys("testuser@gmail.com");

        console.log("Email entered");

        // ============================
        // COUNTRY
        // ============================

        let country = await driver.wait(
            until.elementLocated(By.xpath("//div[contains(text(),'Select Country')]")),
            15000
        );

        await driver.executeScript("arguments[0].scrollIntoView(true);", country);
        await country.click();

        let countryOption = await driver.wait(
            until.elementLocated(By.xpath("//li[contains(text(),'India')]")),
            15000
        );

        await countryOption.click();

        console.log("Country selected");

        // ============================
        // STATE
        // ============================

        // wait until state dropdown becomes enabled
        let state = await driver.wait(
            until.elementLocated(By.xpath("//div[contains(text(),'Select State')]")),
            15000
        );

        //==================================
        // small wait for UI refresh
        //==================================
        await driver.sleep(2000);

        await driver.executeScript("arguments[0].scrollIntoView(true);", state);

        await state.click();

        let stateOption = await driver.wait(
            until.elementLocated(By.xpath("//li[normalize-space()='Telangana']")),
            15000
        );

        await driver.executeScript("arguments[0].scrollIntoView(true);", stateOption);

        await stateOption.click();

        console.log("State selected");

        // ============================
        // DISTRICT
        // ============================

        let district = await driver.wait(
            until.elementLocated(By.xpath("//div[contains(text(),'Select District')]")),
            15000
        );

        await driver.executeScript("arguments[0].scrollIntoView(true);", district);

        await district.click();

        let districtOption = await driver.wait(
            until.elementLocated(By.xpath("//li[normalize-space()='Warangal']")),
            15000
        );

        await driver.executeScript("arguments[0].scrollIntoView(true);", districtOption);

        await districtOption.click();

        console.log("District selected");

        // ============================
        // SUBMIT
        // ============================

        let submitBtn = await driver.wait(
            until.elementLocated(By.css("button.MuiButton-containedPrimary")),
            15000
        );

        await driver.executeScript("arguments[0].scrollIntoView(true);", submitBtn);

        // force click using JS
        await driver.executeScript("arguments[0].click();", submitBtn);

        console.log("Form submitted successfully");

    }
    catch (err) {

        console.log("Automation error:", err);

    }

}

hometownfoodzLogin();

