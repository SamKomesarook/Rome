import TestConfig from '../TestConfig';

const webdriver = require('selenium-webdriver');
const { Key } = require('selenium-webdriver');

const testName = {
  testKeyboardRead: 'test keyboard read input correctly',
  testKeyboardReadEmpty: 'test keyboard read empty string',
};

describe('test keyboard read', () => {
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
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.clear();

    const stopBtn = await TestConfig.getElementById(driver, 'reset-button');
    stopBtn.click();
  }, 30000);

  test(testName.testKeyboardRead, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nimport(IO)\nkeyboardRead\nend');

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const inputArea = await TestConfig.getElementById(driver, 'input-bar');
    await inputArea.sendKeys('hello!');
    await driver.actions().keyDown(Key.ENTER).perform();

    const outputArea = await TestConfig.getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    expect(outputAreaRes).toEqual('');
    expect(memoryCell0Res).toEqual('hello!');
  }, 35000);

  test(testName.testKeyboardReadEmpty, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nimport(IO)\nkeyboardRead\nend');

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const inputArea = await TestConfig.getElementById(driver, 'input-bar');
    await inputArea.sendKeys('');
    await driver.actions().keyDown(Key.ENTER).perform();

    const outputArea = await TestConfig.getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    expect(outputAreaRes).toEqual('');
    expect(memoryCell0Res).toEqual('');
  }, 35000);
});
