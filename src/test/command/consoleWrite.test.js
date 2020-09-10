import TestConfig from '../TestConfig';

const webdriver = require('selenium-webdriver');

const testName = {
  testConsoleWriteLetters: 'test keyboard write letters correctly',
  testConsoleWriteNumbers: 'test keyboard write numbers',
  testConsoleWriteEmpty: 'test keyboard write empty letters',
  testConsoleWriteNoQuote: 'test keyboard write letters without quote',
};

describe('test console write', () => {
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

    const stopBtn = await TestConfig.getElementById(driver, 'stop-button');
    stopBtn.click();
  });

  test(testName.testConsoleWriteLetters, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nimport(IO)\nconsoleWrite("hello!")\nend');

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const outputArea = await TestConfig.getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    expect(outputAreaRes).toEqual('hello!');
    expect(memoryCell0Res).toEqual('');
  }, 35000);

  test(testName.testConsoleWriteNumbers, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nimport(IO)\nconsoleWrite(1)\nend');

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const outputArea = await TestConfig.getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    expect(outputAreaRes).toEqual('1');
    expect(memoryCell0Res).toEqual('');
  }, 35000);

  test(testName.testConsoleWriteEmpty, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nimport(IO)\nconsoleWrite("")\nend');

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const outputArea = await TestConfig.getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    expect(outputAreaRes).toEqual('');
    expect(memoryCell0Res).toEqual('');
  }, 35000);

  test(testName.testConsoleWriteNoQuote, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nimport(IO)\nconsoleWrite()\nend');

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const outputArea = await TestConfig.getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    expect(outputAreaRes).toEqual("mismatched input ')' expecting {'memory', NUMBER, STRLIT}");
    expect(memoryCell0Res).toEqual('');
  }, 35000);
});
