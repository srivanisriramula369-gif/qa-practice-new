const { Builder, By, until, Key } = require("selenium-webdriver");

async function hometownfoodzAutomation() {

    let driver = await new Builder().forBrowser("chrome").build();

    try {

        // OPEN SITE
        await driver.get("https://hometownfoodz.com/login");


        // PHONE
        let phone = await driver.wait(
            until.elementLocated(By.xpath("//input[@type='tel']")),
            15000
        );

        await phone.sendKeys("1589758620");
        console.log("Phone entered");


        // SEND OTP
        let sendOtp = await driver.findElement(By.xpath("//button[contains(text(),'Send OTP')]"));
        await sendOtp.click();


        // OTP
        let otp = await driver.wait(
            until.elementLocated(By.xpath("//input[@type='text']")),
            15000
        );

        await otp.sendKeys("872190");


        // VERIFY
        let verify = await driver.findElement(By.xpath("//button[contains(text(),'Verify')]"));
        await verify.click();

        console.log("Login successful");


        // WAIT FOR SEARCH BOX
        let searchBox = await driver.wait(
            until.elementLocated(By.xpath("//input[contains(@placeholder,'Search')]")),
            20000
        );


        // LOCATION POPUP
        try {

            let locationBtn = await driver.wait(
                until.elementLocated(By.xpath("//button[contains(.,'Use Current Location')]")),
                5000
            );

            await locationBtn.click();
            console.log("Location selected");

        } catch {

            console.log("Location popup not shown");

        }


        await driver.sleep(4000);


        // TYPE SEARCH
        await searchBox.sendKeys("HOME TOWN KITCHENS");

        console.log("Search text entered");


        // CLICK SEARCH ICON
        let searchIcon = await driver.findElement(
            By.xpath("//button//*[name()='svg']")
        );

        await searchIcon.click();

        console.log("Search executed");


        // WAIT FOR RESTAURANT CARD
        let restaurantCard = await driver.wait(
            until.elementLocated(By.xpath("//div[contains(text(),'HOME TOWN KITCHENS')]")),
            20000
        );

        console.log("Restaurant found");


        // CLICK RESTAURANT
        await driver.executeScript(
            "arguments[0].scrollIntoView({block:'center'});",
            restaurantCard
        );

        await driver.sleep(2000);

        await driver.executeScript(
            "arguments[0].click();",
            restaurantCard
        );

        console.log("Restaurant opened");


        // WAIT FOR MENU PAGE
        await driver.sleep(5000);


        // SCROLL PAGE
        for (let i = 0; i < 5; i++) {

            await driver.executeScript("window.scrollBy(0,1000)");
            await driver.sleep(2000);

        }

        console.log("Page scrolled");


        // GET MENU ITEMS
        let menuItems = await driver.findElements(By.xpath("//h6"));

        console.log("Total menu items:", menuItems.length);

        for (let item of menuItems) {

            let text = await item.getText();

            if (text.length > 0) {
                console.log("Menu Item:", text);
            }

        }

    } catch (error) {

        console.log("Automation error:", error);

    }

}

hometownfoodzAutomation();