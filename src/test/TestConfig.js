const { until } = require('selenium-webdriver');
const { By } = require('selenium-webdriver');

class TestConfig {
    static URL = 'http://localhost:3000/';

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
}

export default TestConfig;
