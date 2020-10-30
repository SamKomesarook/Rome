import webdriver, { Key } from 'selenium-webdriver';
import TestConfig from '../TestConfig';

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

    expect(selectedKeyword).toEqual('start');
    expect(helpContentInfo).toContain('Indicates the start of the program.\nAll programs must begin with this command.');
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
    expect(helpContentInfo).toContain('Sets the type that can be written to the memory cell.');
  }, 35000);
});
