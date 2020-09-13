import TestConfig from '../TestConfig';

const webdriver = require('selenium-webdriver');
const { Key } = require('selenium-webdriver');

const testName = {
  testFirstEntry: 'test first entry of help tab',
  testSelectSet: 'test select set',
};

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

  test(testName.testFirstEntry, async () => {
    const help = await TestConfig.getElementByName(driver, 'Help');
    await help.click();

    const dropdownField = await TestConfig.getElementById(driver, 'topics');
    const selectedTopic = await dropdownField.getAttribute('value');

    const helpContent = await TestConfig.getElementById(driver, 'help-content');
    const helpContentInfo = await helpContent.getText();

    expect(selectedTopic).toEqual('general');
    expect(helpContentInfo).toEqual('All program must have start and end command.\n\nPlease select syntax keywords in the selection box for specification.');
  }, 35000);

  test(testName.testSelectSet, async () => {
    const help = await TestConfig.getElementByName(driver, 'Help');
    await help.click();

    const dropdownField = await TestConfig.getElementById(driver, 'topics');
    await dropdownField.click();
    await dropdownField.sendKeys('set', Key.ENTER);
    const selectedTopic = await dropdownField.getAttribute('value');

    const helpContent = await TestConfig.getElementById(driver, 'help-content');
    const helpContentInfo = await helpContent.getText();

    expect(selectedTopic).toEqual('set');
    expect(helpContentInfo).toEqual('Sets the type that can be written to the memory cell. the args are either `numbers` or `letters`.\n\nExample:\nstart\nset(letters)\nwrite("hello")\nfree\nwrite("world!")\nend');
  }, 35000);
});
