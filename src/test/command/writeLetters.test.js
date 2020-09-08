import TestConfig from '../TestConfig';

const webdriver = require('selenium-webdriver');
const { until } = require('selenium-webdriver');
const { By } = require('selenium-webdriver');

const testName = {
  testWriteLetters: 'test write letters correctly in memory',
  testWriteNumbers: 'test write numbers in letters field in memory',
  testWriteEmpty: 'test write empty letters in memory',
  testWriteNoQuote: 'test write letters without quote in memory',
};

const getElementById = async (driver, id, timeout = 2000) => {
  const el = await driver.wait(until.elementLocated(By.id(id)), timeout);
  return await driver.wait(until.elementIsVisible(el), timeout);
};

const getElementByName = async (driver, name, timeout = 2000) => {
  const el = await driver.wait(until.elementLocated(By.name(name)), timeout);
  return await driver.wait(until.elementIsVisible(el), timeout);
};

const getElementByXpath = async (driver, xpath, timeout = 2000) => {
  const el = await driver.wait(until.elementLocated(By.xpath(xpath)), timeout);
  return await driver.wait(until.elementIsVisible(el), timeout);
};

describe('test write letters', () => {
  let driver;

  beforeAll(async () => {
    driver = new webdriver.Builder().forBrowser('chrome').build();
    await driver.get(TestConfig.URL);
  }, 30000);

  afterAll(async () => {
    await driver.quit();
  }, 40000);

  afterEach(async () => {
    const codingArea = await getElementById(driver, 'coding-area');
    await codingArea.clear();

    const stopBtn = await getElementById(driver, 'stop-button');
    stopBtn.click();
  });

  test(testName.testWriteLetters, async () => {
    const codingArea = await getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(letters)\nwrite("hello!")\nend');

    const startBtn = await getElementById(driver, 'start-button');
    await startBtn.click();

    const outputArea = await getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

    const memoryCell0 = await getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    expect(outputAreaRes).toEqual('');
    expect(memoryCell0Res).toEqual('"hello!"');
  }, 35000);

  test(testName.testWriteNumbers, async () => {
    const codingArea = await getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(letters)\nwrite(1)\nend');

    const startBtn = await getElementById(driver, 'start-button');
    await startBtn.click();

    const outputArea = await getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

    const memoryCell0 = await getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    expect(outputAreaRes).toEqual('Wrong memory type for writing');
    expect(memoryCell0Res).toEqual('');
  }, 35000);

  test(testName.testWriteEmpty, async () => {
    const codingArea = await getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(letters)\nwrite("")\nend');

    const startBtn = await getElementById(driver, 'start-button');
    await startBtn.click();

    const outputArea = await getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

    const memoryCell0 = await getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    expect(outputAreaRes).toEqual('');
    expect(memoryCell0Res).toEqual('""');
  }, 35000);

  test(testName.testWriteNoQuote, async () => {
    const codingArea = await getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(letters)\nwrite()\nend');

    const startBtn = await getElementById(driver, 'start-button');
    await startBtn.click();

    const outputArea = await getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

    const memoryCell0 = await getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    expect(outputAreaRes).toEqual("mismatched input ')' expecting {'memory', NUMBER, STRLIT}");
    expect(memoryCell0Res).toEqual('');
  }, 35000);
});
