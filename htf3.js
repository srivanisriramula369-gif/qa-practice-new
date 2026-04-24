const { Builder, By, until } = require("selenium-webdriver");

async function hometownfoodzLogin() {

    let driver = await new Builder().forBrowser("chrome").build();

    try {

        // Open login page
        await driver.get("https://hometownfoodz.com/login");

        // Wait for phone input
        let phoneInput = await driver.wait(
            until.elementLocated(By.xpath("//input[@type='tel']")),
            15000
        );

        // Clear existing value
        await phoneInput.clear();

        // Enter phone number
        await phoneInput.sendKeys("01589758620");

        console.log("Phone number entered");

        // Click Send OTP
        let sendOtpBtn = await driver.wait(
            until.elementLocated(By.xpath("//button[contains(text(),'Send OTP')]")),
            10000
        );

        await sendOtpBtn.click();

        console.log("Send OTP clicked");

        // Wait for OTP input
        let otpInput = await driver.wait(
            until.elementLocated(By.xpath("//input[@type='text']")),
            15000
        );

        // Enter OTP
        await otpInput.sendKeys("872190");

        console.log("OTP entered");

        // Click Verify OTP
        let verifyBtn = await driver.wait(
            until.elementLocated(By.xpath("//button[contains(text(),'Verify')]")),
            10000
        );

        await verifyBtn.click();

        console.log("Verify OTP clicked");

        // Wait for page to load after login
        await driver.sleep(8000);

        // Scroll page
        await driver.executeScript("window.scrollBy(0,500)");
        await driver.sleep(2000);

        // Locate Biryani category
        let biryani = await driver.wait(
            until.elementLocated(By.xpath("//*[contains(text(),'Biryani')]")),
            20000
        );

        await driver.executeScript("arguments[0].scrollIntoView(true);", biryani);
        await driver.sleep(1000);

        await biryani.click();

        console.log("Biryani category clicked");

        // Wait to observe
        await driver.sleep(5000);

    } catch (error) {

        console.log("Automation error:", error);

    } finally {

        await driver.quit();

    }
}

hometownfoodzLogin();