const { until } = require('selenium-webdriver');
const { By } = require('selenium-webdriver');

class TestConfig {
    static URL = 'http://localhost:3000/';

    static CAPABILITIES = {
      browserName: 'chrome',
    };

    static getElementById = async (driver, id, timeout = 2000) => {
      const el = await driver.wait(until.elementLocated(By.id(id)), timeout);
      return await driver.wait(until.elementIsVisible(el), timeout);
    };

    static getElementByName = async (driver, name, timeout = 2000) => {
      const el = await driver.wait(until.elementLocated(By.name(name)), timeout);
      return await driver.wait(until.elementIsVisible(el), timeout);
    };

    static getElementByXpath = async (driver, xpath, timeout = 2000) => {
      const el = await driver.wait(until.elementLocated(By.xpath(xpath)), timeout);
      return await driver.wait(until.elementIsVisible(el), timeout);
    };

    static loginPass = async (driver) => {
      const passwordField = await this.getElementByXpath(driver, '/html/body/div/div/div/input');
      await passwordField.sendKeys('rome0000');
      const goBtn = await this.getElementByXpath(driver, '/html/body/div/div/div/button');
      await goBtn.click();
    };
}

export default TestConfig;
