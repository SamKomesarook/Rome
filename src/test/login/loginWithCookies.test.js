import webdriver, { Key } from 'selenium-webdriver';
import TestConfig from '../TestConfig';

const loginWithCookies = 'test login with cookies';

describe('test login with cookies ', () => {
  let driver;

  beforeAll(async () => {
    driver = new webdriver.Builder().withCapabilities(TestConfig.CAPABILITIES).build();
    await driver.get(TestConfig.URL);
    await TestConfig.loginPass(driver);
  }, 30000);

  afterAll(async () => {
    await driver.quit();
  }, 40000);

  test(loginWithCookies, async () => {
    await driver.get(TestConfig.URL);

    let passwordField;
    let receivedErrorName;

    try {
      passwordField = await TestConfig.getElementByName(driver, 'password-field');
    } catch (err) {
      receivedErrorName = err.name;
    }

    expect(receivedErrorName).toEqual('TimeoutError');
    expect(passwordField).toBeUndefined();
  }, 35000);
});
