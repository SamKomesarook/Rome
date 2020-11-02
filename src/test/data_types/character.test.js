import webdriver, { Key } from 'selenium-webdriver';
import TestConfig from '../TestConfig';

// Test names
const testValidCharacter = 'test write a character';
const testEmptyCharacter = 'test write empty character';
const testMultipleCharacters = 'test write multiples characters';
const testWithoutQuotes = 'test write character without quotes';

describe('test character', () => {
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

  test(testValidCharacter, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys("start\nset(character)\nwrite('u')\nend");

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    expect(memoryCell0Res).toEqual('u');
  }, 35000);

  test(testEmptyCharacter, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys("start\nset(character)\nwrite('')\nend");

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    expect(memoryCell0Res).toEqual('');
  }, 35000);

  test(testMultipleCharacters, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys("start\nset(character)\nwrite('ab')\nend");

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();

    const secondConsoleRecord = await TestConfig.getElementByXpath(driver, '//*[@id="console"]/div[2]');
    const secondConsoleRecordRes = await secondConsoleRecord.getText();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    expect(secondConsoleRecordRes).toEqual('> ERROR: Out of memory');
    expect(memoryCell0Res).toEqual('');
  }, 35000);

  test(testWithoutQuotes, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(character)\nwrite(abc)\nend');

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();

    const secondConsoleRecord = await TestConfig.getElementByXpath(driver, '//*[@id="console"]/div[2]');
    const secondConsoleRecordRes = await secondConsoleRecord.getText();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    expect(secondConsoleRecordRes).toEqual("> ERROR: mismatched input 'abc' expecting {'memory', NUMBER, FLOAT, CHARACTER, STRLIT}");
    expect(memoryCell0Res).toEqual('');
  }, 35000);
});
