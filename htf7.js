const { Builder, By, until, Key } = require("selenium-webdriver");
const path = require("path");

async function hometownfoodzLogin() {

    let driver = await new Builder().forBrowser("chrome").build();

    try {

        // =========================
        // OPEN WEBSITE
        // =========================
        await driver.get("https://hometownfoodz.com/login");


        // =========================
        // PHONE NUMBER
        // =========================
        let phoneInput = await driver.wait(
            until.elementLocated(By.xpath("//input[@type='tel']")),
            15000
        );

        await phoneInput.sendKeys("1589758620");
        console.log("Phone number entered");


        // =========================
        // SEND OTP
        // =========================
        let sendOtp = await driver.wait(
            until.elementLocated(By.xpath("//button[contains(text(),'Send OTP')]")),
            10000
        );

        await sendOtp.click();
        console.log("Send OTP clicked");


        // =========================
        // ENTER OTP
        // =========================
        let otpInput = await driver.wait(
            until.elementLocated(By.xpath("//input[@type='text']")),
            15000
        );

        await otpInput.sendKeys("872190");
        console.log("OTP entered");


        // =========================
        // VERIFY OTP
        // =========================
        let verifyBtn = await driver.wait(
            until.elementLocated(By.xpath("//button[contains(text(),'Verify')]")),
            10000
        );

        await verifyBtn.click();
        console.log("Verify OTP clicked");


        // =========================
        // WAIT FOR LOGIN
        // =========================
        await driver.wait(async () => {

            let url = await driver.getCurrentUrl();
            return url.includes("userprofile") || url.includes("hometownfoodz");

        }, 20000);

        console.log("Login successful");


        // =========================
        // CHECK PROFILE PAGE
        // =========================
        let currentUrl = await driver.getCurrentUrl();

        if (currentUrl.includes("userprofile")) {

            console.log("Profile page detected");


            // NAME
            let name = await driver.wait(
                until.elementLocated(By.xpath("//label[text()='Name']/following::input[1]")),
                15000
            );

            await name.sendKeys("Test User");


            // EMAIL
            let email = await driver.findElement(
                By.xpath("//label[text()='Email']/following::input[1]")
            );

            await email.sendKeys("testuser@gmail.com");


            // COUNTRY
            let country = await driver.wait(
                until.elementLocated(By.xpath("//div[contains(text(),'Select Country')]")),
                15000
            );

            await country.click();

            let countryOption = await driver.wait(
                until.elementLocated(By.xpath("//li[contains(text(),'India')]")),
                15000
            );

            await countryOption.click();


            // STATE
            await driver.sleep(2000);

            let state = await driver.findElement(
                By.xpath("//div[contains(text(),'Select State')]")
            );

            await state.click();

            let stateOption = await driver.wait(
                until.elementLocated(By.xpath("//li[normalize-space()='Telangana']")),
                15000
            );

            await stateOption.click();


            // DISTRICT
            let district = await driver.findElement(
                By.xpath("//div[contains(text(),'Select District')]")
            );

            await district.click();

            let districtOption = await driver.wait(
                until.elementLocated(By.xpath("//li[normalize-space()='Warangal']")),
                15000
            );

            await districtOption.click();


            // SUBMIT
            let submit = await driver.wait(
                until.elementLocated(By.css("button.MuiButton-containedPrimary")),
                15000
            );

            await driver.executeScript("arguments[0].click();", submit);

            console.log("Profile submitted");

        }


        // =========================
        // CLICK SEARCH ICON
        // =========================
        let searchIcon = await driver.wait(
            until.elementLocated(By.css("button.MuiIconButton-root")),
            15000
        );

        await searchIcon.click();
        console.log("Search icon clicked");


        // =========================
        // ENTER SEARCH TEXT
        // =========================
        let searchBox = await driver.wait(
            until.elementLocated(By.xpath("//input[contains(@placeholder,'Search')]")),
            15000
        );

        await searchBox.clear();
        await searchBox.sendKeys("FHFGH");

        console.log("Search text entered");


        // =========================
        // CLICK SEARCH BUTTON
        // =========================
        await searchIcon.click();
        console.log("Search button clicked");


        // =========================
        // WAIT FOR RESULTS
        // =========================
        await driver.sleep(4000);

        await driver.wait(
            until.elementLocated(By.xpath("//*[contains(text(),'FHFGH')]")),
            20000
        );

        console.log("FHFGH listing displayed");


    } catch (err) {

        console.log("Automation error:", err);

    }

}

hometownfoodzLogin();