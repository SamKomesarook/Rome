import TestConfig from '../TestConfig';

const webdriver = require('selenium-webdriver');
const { Key } = require('selenium-webdriver');

const testFirstEntry = 'test first entry of challenge tab';
const testSelectCalculator = 'test select calculator';

describe('test challenge tab', () => {
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
    const challenge = await TestConfig.getElementByName(driver, 'Challenge');
    await challenge.click();

    const dropdownField = await TestConfig.getElementById(driver, 'topics');
    const selectedTopic = await dropdownField.getAttribute('value');

    const challengeContent = await TestConfig.getElementByXpath(driver, '//*[@id="challenge"]/div[2]');
    const challengeContentInfo = await challengeContent.getText();

    expect(selectedTopic).toEqual('Challenge Title');
    expect(challengeContentInfo).toEqual('Challenge content and solution');
  }, 35000);

  test(testSelectCalculator, async () => {
    const challenge = await TestConfig.getElementByName(driver, 'Challenge');
    await challenge.click();

    const dropdownField = await TestConfig.getElementById(driver, 'topics');
    await dropdownField.click();
    await dropdownField.sendKeys('Calculator', Key.ENTER);
    const selectedTopic = await dropdownField.getAttribute('value');

    const challengeContent = await TestConfig.getElementByXpath(driver, '//*[@id="challenge"]/div[2]');
    const challengeContentInfo = await challengeContent.getText();

    expect(selectedTopic).toEqual('Calculator');
    expect(challengeContentInfo).toEqual('Create a program that asks a user for two numbers, then adds them together and displays the result.');
  }, 35000);
});
