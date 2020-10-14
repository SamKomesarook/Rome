import webdriver, { Key } from 'selenium-webdriver';
import TestConfig from '../TestConfig';
const { Key } = require('selenium-webdriver');

const testFirstEntry = 'test first entry of help tab';
const testSelectSet = 'test select set';

describe('test help tab', () => {
  let driver;

  beforeAll(async () => {
    driver = new webdriver.Builder().withCapabilities(TestConfig.CAPABILITIES).build();
    await driver.get(TestConfig.URL);
    await TestConfig.loginPass(driver);
  }, 30000);

  afterAll(async () => {
    await driver.quit();
  }, 40000);

  afterEach(async () => {
    await driver.navigate().refresh();
  }, 30000);

  test(testFirstEntry, async () => {
    const help = await TestConfig.getElementByName(driver, 'Help');
    await help.click();

    const dropdownField = await TestConfig.getElementById(driver, 'keywords');
    const selectedKeyword = await dropdownField.getAttribute('value');

    const helpContent = await TestConfig.getElementByXpath(driver, '//*[@id="help"]/div[2]');
    const helpContentInfo = await helpContent.getText();

    expect(selectedKeyword).toEqual('general');
    expect(helpContentInfo).toEqual('All program must have start and end command.\n\nPlease select syntax keywords in the selection box for specification.');
  }, 35000);

  test(testSelectSet, async () => {
    const help = await TestConfig.getElementByName(driver, 'Help');
    await help.click();

    const dropdownField = await TestConfig.getElementById(driver, 'keywords');
    await dropdownField.click();
    await dropdownField.sendKeys('set', Key.ENTER);
    const selectedKeyword = await dropdownField.getAttribute('value');

    const helpContent = await TestConfig.getElementByXpath(driver, '//*[@id="help"]/div[2]');
    const helpContentInfo = await helpContent.getText();

    expect(selectedKeyword).toEqual('set');
    expect(helpContentInfo).toEqual('Sets the type that can be written to the memory cell. the args could be `integer`, `long`, `float`, `character` or `string`.\n\nExample:\nstart\nset(string)\nwrite("hello")\nfree\nwrite("world!")\nend');
  }, 35000);
});
