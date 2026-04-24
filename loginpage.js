const { By } = require("selenium-webdriver");

class LoginPage {

username = By.id("username");
password = By.id("password");
loginButton = By.id("login");

}

module.exports = new LoginPage();