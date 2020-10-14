import webdriver, { Key } from 'selenium-webdriver';
import TestConfig from '../TestConfig';

// Test names
const testIntMax = 'test write int with value exceeds maximum';
const testIntMin = 'test write int with value exceeds minumum';
const testValidInt = 'test write valid int within acceptable range';
const testDecimal = 'test write number with decimal point';
const testDoubleQuotes = 'test write number in double quotes';

describe('test integer', () => {
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
    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('reset');
    await driver.actions().keyDown(Key.ENTER).perform();
    await consoleInput.sendKeys('consoleClear');
    await driver.actions().keyDown(Key.ENTER).perform();

    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.clear();
  }, 30000);

  test(testIntMin, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(integer)\nwrite(-65536)\nend');

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();

    const secondConsoleRecord = await TestConfig.getElementByXpath(driver, '//*[@id="console"]/div[2]');
    const secondConsoleRecordRes = await secondConsoleRecord.getText();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    expect(secondConsoleRecordRes).toEqual('> Out of memory');
    expect(memoryCell0Res).toEqual('');
  }, 35000);

  test(testIntMax, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(integer)\nwrite(65536)\nend');

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();

    const secondConsoleRecord = await TestConfig.getElementByXpath(driver, '//*[@id="console"]/div[2]');
    const secondConsoleRecordRes = await secondConsoleRecord.getText();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    expect(secondConsoleRecordRes).toEqual('> Out of memory');
    expect(memoryCell0Res).toEqual('');
  }, 35000);

  test(testValidInt, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(integer)\nwrite(65535)\nmove(next)\nset(integer)\nwrite(-65535)\nmove(next)\nset(integer)\nwrite(0)\nend');

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();
    const memoryCell1 = await TestConfig.getElementById(driver, 'memory-1');
    const memoryCell1Res = await memoryCell1.getText();
    const memoryCell2 = await TestConfig.getElementById(driver, 'memory-2');
    const memoryCell2Res = await memoryCell2.getText();

    expect(memoryCell0Res).toEqual('65535');
    expect(memoryCell1Res).toEqual('-65535');
    expect(memoryCell2Res).toEqual('0');
  }, 35000);

  test(testDecimal, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(integer)\nwrite(10.7)\nend');

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();

    const secondConsoleRecord = await TestConfig.getElementByXpath(driver, '//*[@id="console"]/div[2]');
    const secondConsoleRecordRes = await secondConsoleRecord.getText();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    expect(secondConsoleRecordRes).toEqual('> Wrong memory type for writing');
    expect(memoryCell0Res).toEqual('');
  }, 35000);

  test(testDoubleQuotes, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(integer)\nwrite("10")\nend');

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();

    const secondConsoleRecord = await TestConfig.getElementByXpath(driver, '//*[@id="console"]/div[2]');
    const secondConsoleRecordRes = await secondConsoleRecord.getText();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    expect(secondConsoleRecordRes).toEqual('> Wrong memory type for writing');
    expect(memoryCell0Res).toEqual('');
  }, 35000);
});
