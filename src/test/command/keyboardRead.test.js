const webdriver = require('selenium-webdriver');
const { until } = require('selenium-webdriver');
const { By } = require('selenium-webdriver');
const { Key } = require('selenium-webdriver');

const url = 'http://localhost:3000/';
const testName = {
  testKeyboardRead: 'test keyboard read input correctly',
  testKeyboardReadEmpty: 'test keyboard read empty letters',
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

describe('test keyboard read', () => {
  let driver;

  beforeAll(async () => {
    driver = new webdriver.Builder().forBrowser('chrome').build();
    await driver.get(url);
  }, 30000);

  // afterAll(async () => {
  //   await driver.quit();
  // }, 40000);

  // afterEach(async () => {
  //   const codingArea = await getElementById(driver, 'coding-area');
  //   await codingArea.clear();

  //   const stopBtn = await getElementById(driver, 'stop-button');
  //   stopBtn.click();
  // });

  test(testName.testKeyboardRead, async () => {
    const codingArea = await getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nimport(IO)\nkeyboardRead\nend');

    const startBtn = await getElementById(driver, 'start-button');
    startBtn.click();

    const inputArea = await getElementById(driver, 'input-bar');
    await inputArea.sendKeys('hello!');
    await driver.actions().keyDown(Key.ENTER).perform();

    const outputArea = await getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

    const writtenMemoryCell = await getElementById(driver, 'memory-0');
    const writtenMemoryCellRes = await writtenMemoryCell.getText();

    expect(outputAreaRes).toEqual('');
    expect(writtenMemoryCellRes).toEqual('hello!');
  }, 35000);

  // test(testName.testKeyboardReadEmpty, async () => {
  //   const codingArea = await getElementById(driver, 'coding-area');
  //   await codingArea.sendKeys('start\nimport(IO)\nkeyboardRead\nend');

  //   const startBtn = await getElementById(driver, 'start-button');
  //   startBtn.click();

  //   const inputArea = await getElementById(driver, 'input-area');
  //   await inputArea.sendKeys('');
  //   await inputArea.sendKeys

  //   const outputArea = await getElementById(driver, 'output-area');
  //   const outputAreaRes = await outputArea.getText();

  //   const writtenMemoryCell = await getElementById(driver, 'memory-0');
  //   const writtenMemoryCellRes = await writtenMemoryCell.getText();

  //   expect(outputAreaRes).toEqual('');
  //   expect(writtenMemoryCellRes).toEqual('hello!');
  // }, 35000);
});
