import TestConfig from '../TestConfig';

const webdriver = require('selenium-webdriver');

// Test names
const testOverflowToSpecial = 'test string overflows and reach special cell';
const testOverflowMemorySection = 'test string overflows the memory section';
const testEmptyString = 'test write empty string';
const testWithoutQuotes = 'test write string without quotes';

describe('test string', () => {
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

  test(testOverflowToSpecial, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(string)\nwrite("1234567890123456789012345678901234567890123456789012345678901234567890")\nend');

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const outputArea = await TestConfig.getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();
    const memoryCell1 = await TestConfig.getElementById(driver, 'memory-1');
    const memoryCell1Res = await memoryCell1.getText();
    const memoryCell2 = await TestConfig.getElementById(driver, 'memory-2');
    const memoryCell2Res = await memoryCell2.getText();
    const memoryCell3 = await TestConfig.getElementById(driver, 'memory-3');
    const memoryCell3Res = await memoryCell3.getText();
    const memoryCell4 = await TestConfig.getElementById(driver, 'memory-4');
    const memoryCell4Res = await memoryCell4.getText();
    const memoryCell5 = await TestConfig.getElementById(driver, 'memory-5');
    const memoryCell5Res = await memoryCell5.getText();
    const memoryCell6 = await TestConfig.getElementById(driver, 'memory-6');
    const memoryCell6Res = await memoryCell6.getText();
    const memoryCell7 = await TestConfig.getElementById(driver, 'memory-7');
    const memoryCell7Res = await memoryCell7.getText();
    const memoryCell8 = await TestConfig.getElementById(driver, 'memory-8');
    const memoryCell8Res = await memoryCell8.getText();
    const memoryCell9 = await TestConfig.getElementById(driver, 'memory-9');
    const memoryCell9Res = await memoryCell9.getText();
    const memoryCell10 = await TestConfig.getElementById(driver, 'memory-10');
    const memoryCell10Res = await memoryCell10.getText();
    const memoryCell11 = await TestConfig.getElementById(driver, 'memory-11');
    const memoryCell11Res = await memoryCell11.getText();

    expect(outputAreaRes).toEqual('Out of memory');
    expect(memoryCell0Res).toEqual('');
    expect(memoryCell1Res).toEqual('');
    expect(memoryCell2Res).toEqual('');
    expect(memoryCell3Res).toEqual('');
    expect(memoryCell4Res).toEqual('');
    expect(memoryCell5Res).toEqual('');
    expect(memoryCell6Res).toEqual('');
    expect(memoryCell7Res).toEqual('');
    expect(memoryCell8Res).toEqual('');
    expect(memoryCell9Res).toEqual('');
    expect(memoryCell10Res).toEqual('');
    expect(memoryCell11Res).toEqual('');
  }, 35000);

  test(testOverflowMemorySection, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(string)\nwrite("12345678901234567890123456789012345678901234567890123456789012345678901234567890")\nend');

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const outputArea = await TestConfig.getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();
    const memoryCell1 = await TestConfig.getElementById(driver, 'memory-1');
    const memoryCell1Res = await memoryCell1.getText();
    const memoryCell2 = await TestConfig.getElementById(driver, 'memory-2');
    const memoryCell2Res = await memoryCell2.getText();
    const memoryCell3 = await TestConfig.getElementById(driver, 'memory-3');
    const memoryCell3Res = await memoryCell3.getText();
    const memoryCell4 = await TestConfig.getElementById(driver, 'memory-4');
    const memoryCell4Res = await memoryCell4.getText();
    const memoryCell5 = await TestConfig.getElementById(driver, 'memory-5');
    const memoryCell5Res = await memoryCell5.getText();
    const memoryCell6 = await TestConfig.getElementById(driver, 'memory-6');
    const memoryCell6Res = await memoryCell6.getText();
    const memoryCell7 = await TestConfig.getElementById(driver, 'memory-7');
    const memoryCell7Res = await memoryCell7.getText();
    const memoryCell8 = await TestConfig.getElementById(driver, 'memory-8');
    const memoryCell8Res = await memoryCell8.getText();
    const memoryCell9 = await TestConfig.getElementById(driver, 'memory-9');
    const memoryCell9Res = await memoryCell9.getText();
    const memoryCell10 = await TestConfig.getElementById(driver, 'memory-10');
    const memoryCell10Res = await memoryCell10.getText();
    const memoryCell11 = await TestConfig.getElementById(driver, 'memory-11');
    const memoryCell11Res = await memoryCell11.getText();

    expect(outputAreaRes).toEqual('Out of memory');
    expect(memoryCell0Res).toEqual('');
    expect(memoryCell1Res).toEqual('');
    expect(memoryCell2Res).toEqual('');
    expect(memoryCell3Res).toEqual('');
    expect(memoryCell4Res).toEqual('');
    expect(memoryCell5Res).toEqual('');
    expect(memoryCell6Res).toEqual('');
    expect(memoryCell7Res).toEqual('');
    expect(memoryCell8Res).toEqual('');
    expect(memoryCell9Res).toEqual('');
    expect(memoryCell10Res).toEqual('');
    expect(memoryCell11Res).toEqual('');
  }, 35000);

  test(testEmptyString, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(string)\nwrite("")\nend');

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const outputArea = await TestConfig.getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    expect(outputAreaRes).toEqual('');
    expect(memoryCell0Res).toEqual('');
  }, 35000);

  test(testWithoutQuotes, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(string)\nwrite(abc)\nend');

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const outputArea = await TestConfig.getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    expect(outputAreaRes).toEqual("mismatched input 'abc' expecting {'memory', NUMBER, FLOAT, STRLIT}");
    expect(memoryCell0Res).toEqual('');
  }, 35000);
});
