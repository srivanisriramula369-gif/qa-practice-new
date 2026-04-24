async function enterText(element, text){
    await element.sendKeys(text);
}

module.exports = { enterText };