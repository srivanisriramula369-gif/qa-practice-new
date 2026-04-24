const { Builder, By, until } = require("selenium-webdriver");

async function hometownfoodzLogin() {

    let driver = await new Builder().forBrowser("chrome").build();

    try {

        // open login page
        await driver.get("https://hometownfoodz.com/login");

        // wait for phone input
        let phoneInput = await driver.wait(
            until.elementLocated(By.xpath("//input[@type='tel']")),
            15000
        );

        // clear existing +91 value
        await phoneInput.clear();

        // enter 10 digit number (without +91)
        await phoneInput.sendKeys("0589758620");

        console.log("Phone number entered");

        // click Send OTP
        let sendOtpBtn = await driver.wait(
            until.elementLocated(By.xpath("//button[contains(text(),'Send OTP')]")),
            10000
        );

        await sendOtpBtn.click();

        console.log("Send OTP clicked");

        // wait for OTP input
        let otpInput = await driver.wait(
            until.elementLocated(By.xpath("//input[@type='text']")),
            15000
        );

        // enter test OTP
        await otpInput.sendKeys("872190");

        console.log("OTP entered");

        // wait for login success
        await driver.sleep(6000);

        // click Biryani category
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

        // optional browser close
        // await driver.quit();

    }

}

hometownfoodzLogin();