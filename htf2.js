const { Builder, By, until } = require("selenium-webdriver");

async function hometownfoodzLogin() {

    let driver = await new Builder().forBrowser("chrome").build();

    try {

        // Open login page
        await driver.get("https://hometownfoodz.com/login");

        // Wait for phone input field
        let phoneInput = await driver.wait(
            until.elementLocated(By.xpath("//input[@type='tel']")),
            15000
        );

        // Clear existing value
        await phoneInput.clear();

        // Enter phone number with +91
        await phoneInput.sendKeys("01589758620");

        console.log("Phone number entered");

        // Click Send OTP
        let sendOtpBtn = await driver.wait(
            until.elementLocated(By.xpath("//button[contains(text(),'Send OTP')]")),
            10000
        );

        await sendOtpBtn.click();

        console.log("Send OTP clicked");

        // Wait for OTP field
        let otpInput = await driver.wait(
            until.elementLocated(By.xpath("//input[@type='text']")),
            15000
        );

        // Enter OTP
        await otpInput.sendKeys("872190");

        console.log("OTP entered");

        // Wait for login
        await driver.sleep(6000);

        // Click Biryani category
        let biryani = await driver.wait(
            until.elementLocated(By.xpath("//*[contains(text(),'Biryani')]")),
            15000
        );

        await biryani.click();

        console.log("Biryani category clicked");

        await driver.sleep(5000);

    } catch (error) {

        console.log("Automation error:", error);

    } finally {

        // await driver.quit();

    }

}

hometownfoodzLogin();