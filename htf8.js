const { Builder, By, until, Key } = require("selenium-webdriver");

async function hometownfoodzLogin() {

    let driver = await new Builder().forBrowser("chrome").build();

    try {

        // OPEN WEBSITE
        await driver.get("https://hometownfoodz.com/login");


        // ===============================
        // ENTER PHONE
        // ===============================
        let phoneInput = await driver.wait(
            until.elementLocated(By.xpath("//input[@type='tel']")),
            15000
        );

        await phoneInput.sendKeys("1589758620");
        console.log("Phone number entered");


        // ===============================
        // SEND OTP
        // ===============================
        let sendOtp = await driver.wait(
            until.elementLocated(By.xpath("//button[contains(text(),'Send OTP')]")),
            10000
        );

        await sendOtp.click();
        console.log("Send OTP clicked");


        // ===============================
        // ENTER OTP
        // ===============================
        let otpInput = await driver.wait(
            until.elementLocated(By.xpath("//input[@type='text']")),
            15000
        );

        await otpInput.sendKeys("872190");
        console.log("OTP entered");


        // ===============================
        // VERIFY OTP
        // ===============================
        let verifyBtn = await driver.wait(
            until.elementLocated(By.xpath("//button[contains(text(),'Verify')]")),
            10000
        );

        await verifyBtn.click();
        console.log("Verify OTP clicked");


        // ===============================
        // WAIT FOR HOMEPAGE
        // ===============================
        await driver.wait(
            until.elementLocated(By.xpath("//input[contains(@placeholder,'Search')]")),
            20000
        );

        console.log("Login successful");


        // ===============================
        // HANDLE LOCATION POPUP
        // ===============================
        try {

            // If popup already visible
            let useLocation = await driver.wait(
                until.elementLocated(By.xpath("//button[contains(.,'USE CURRENT LOCATION')]")),
                7000
            );

            await useLocation.click();
            console.log("Location popup already open");

        } catch {

            console.log("Opening location popup");

            // Click location icon
            let locationIcon = await driver.wait(
                until.elementLocated(By.xpath("//*[name()='svg' and @data-testid='LocationOnIcon']/..")),
                20000
            );

            await locationIcon.click();

            // Wait popup
            let useLocation = await driver.wait(
                until.elementLocated(By.xpath("//button[contains(.,'Use Current Location')]")),
                8000
            );

            await useLocation.click();


            console.log("Location selected");

        }

        await driver.sleep(15000);

        // ===============================
        // CLICK SEARCH ICON
        // ===============================
        // let searchIcon = await driver.wait(
        //     until.elementLocated(By.css("button.MuiIconButton-root")),
        //     15000
        // );

        // await searchIcon.click();

        // console.log("Search icon clicked");


        // ===============================
        // ENTER SEARCH TEXT
        // ===============================
        let searchBox = await driver.wait(
            until.elementLocated(By.xpath("//input[contains(@placeholder,'Search')]")),
            15000

        );

        await searchBox.clear();
        await searchBox.sendKeys("HOME TOWN KITCHENS", Key.ENTER);

        console.log("Search executed");


        // ===============================
        // WAIT FOR LISTING
        // ===============================
        await driver.wait(
            until.elementLocated(By.xpath("//*[contains(text(),'HOME TOWN FOODS')]")),
            20000
        );

        console.log("Listing displayed successfully");


    } catch (err) {

        console.log("Automation error:", err);

    }

}

hometownfoodzLogin();