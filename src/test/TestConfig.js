const { until } = require('selenium-webdriver');
const { By } = require('selenium-webdriver');

class TestConfig {
    static URL = 'http://localhost:3000/';

    static CAPABILITIES = {
      browserName: 'chrome',
    };

    static getElementById = async (driver, id, shouldBeVisible = true, timeout = 2000) => {
      const el = await driver.wait(until.elementLocated(By.id(id)), timeout);
      if (shouldBeVisible) {
        return await driver.wait(until.elementIsVisible(el), timeout);
      }
      return el;
    };

    static getElementByName = async (driver, name, shouldBeVisible = true, timeout = 2000) => {
      const el = await driver.wait(until.elementLocated(By.name(name)), timeout);
      if (shouldBeVisible) {
        return await driver.wait(until.elementIsVisible(el), timeout);
      }
      return el;
    };

    static getElementByXpath = async (driver, xpath, shouldBeVisible = true, timeout = 2000) => {
      const el = await driver.wait(until.elementLocated(By.xpath(xpath)), timeout);
      if (shouldBeVisible) {
        return await driver.wait(until.elementIsVisible(el), timeout);
      }
      return el;
    };

    static loginPass = async (driver) => {
      const passwordField = await this.getElementByName(driver, 'password-field');
      await passwordField.sendKeys('rome0000');
      const goBtn = await this.getElementByXpath(driver, '//*[@id="root"]/div/div/button');
      await goBtn.click();
    };
}

export default TestConfig;
