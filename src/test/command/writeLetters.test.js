const webdriver = require('selenium-webdriver');
const { until } = require('selenium-webdriver');
const { By } = require('selenium-webdriver');

const url = 'http://localhost:3000/';
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
    await driver.get(url);
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
    startBtn.click();

    const outputArea = await getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

    const writtenMemoryCell = await getElementById(driver, 'memory-0');
    const writtenMemoryCellRes = await writtenMemoryCell.getText();

    expect(outputAreaRes).toEqual('');
    expect(writtenMemoryCellRes).toEqual('"hello!"');
  }, 35000);

  test(testName.testWriteNumbers, async () => {
    const codingArea = await getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(letters)\nwrite(1)\nend');

    const startBtn = await getElementById(driver, 'start-button');
    startBtn.click();

    const outputArea = await getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

    const writtenMemoryCell = await getElementById(driver, 'memory-0');
    const writtenMemoryCellRes = await writtenMemoryCell.getText();

    expect(outputAreaRes).toEqual('Wrong memory type for writing');
    expect(writtenMemoryCellRes).toEqual('');
  }, 35000);

  test(testName.testWriteEmpty, async () => {
    const codingArea = await getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(letters)\nwrite("")\nend');

    const startBtn = await getElementById(driver, 'start-button');
    startBtn.click();

    const outputArea = await getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

    const writtenMemoryCell = await getElementById(driver, 'memory-0');
    const writtenMemoryCellRes = await writtenMemoryCell.getText();

    expect(outputAreaRes).toEqual('');
    expect(writtenMemoryCellRes).toEqual('""');
  }, 35000);

  test(testName.testWriteNoQuote, async () => {
    const codingArea = await getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(letters)\nwrite()\nend');

    const startBtn = await getElementById(driver, 'start-button');
    startBtn.click();

    const outputArea = await getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

    const writtenMemoryCell = await getElementById(driver, 'memory-0');
    const writtenMemoryCellRes = await writtenMemoryCell.getText();

    expect(outputAreaRes).toEqual("mismatched input ')' expecting {'memory', NUMBER, STRLIT}");
    expect(writtenMemoryCellRes).toEqual('');
  }, 35000);
});
