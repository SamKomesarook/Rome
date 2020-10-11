import webdriver, { Key } from 'selenium-webdriver';
import TestConfig from '../TestConfig';

// Test names
const testDebuggerLoop = 'test debugger with loop';
const testStartWhileDebugging = 'test run start while debugging';
const testStartAfterDebugging = 'test run start after debugging';
const testResetDebugging = 'test run reset while debugging';

describe('test debugger', () => {
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

  test(testDebuggerLoop, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(string)\nwrite("abc")\nmove(next)\nset(integer)\nwrite(3)\nloop(memory(2)){\nmove(next)\nset(string)\nwrite("data")\n}\nend');

    const debuggerBtn = await TestConfig.getElementByXpath(driver, '//*[@id="debug-control"]/div[1]');
    await debuggerBtn.click();

    const stepIntoBtn = await TestConfig.getElementByXpath(driver, '//*[@id="debug-control"]/div[2]', false);
    expect(await stepIntoBtn.isDisplayed()).toEqual(false);

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();
    expect(await debuggerBtn.isDisplayed()).toEqual(false);

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell1 = await TestConfig.getElementById(driver, 'memory-1');
    const memoryCell2 = await TestConfig.getElementById(driver, 'memory-2');
    const memoryCell3 = await TestConfig.getElementById(driver, 'memory-3');
    const memoryCell4 = await TestConfig.getElementById(driver, 'memory-4');

    // At write("abc")
    await stepIntoBtn.click();
    expect(await memoryCell0.getText()).toEqual('abc');
    expect(await memoryCell1.getText()).toEqual('');
    expect(await memoryCell2.getText()).toEqual('');
    expect(await memoryCell3.getText()).toEqual('');
    expect(await memoryCell4.getText()).toEqual('');

    // At move(next)
    await stepIntoBtn.click();
    expect(await memoryCell0.getText()).toEqual('abc');
    expect(await memoryCell1.getText()).toEqual('');
    expect(await memoryCell2.getText()).toEqual('');
    expect(await memoryCell3.getText()).toEqual('');
    expect(await memoryCell4.getText()).toEqual('');

    // At set(integer)
    await stepIntoBtn.click();
    expect(await memoryCell0.getText()).toEqual('abc');
    expect(await memoryCell1.getText()).toEqual('');
    expect(await memoryCell2.getText()).toEqual('');
    expect(await memoryCell3.getText()).toEqual('');
    expect(await memoryCell4.getText()).toEqual('');

    // At write(3)
    await stepIntoBtn.click();
    expect(await memoryCell0.getText()).toEqual('abc');
    expect(await memoryCell1.getText()).toEqual('3');
    expect(await memoryCell2.getText()).toEqual('');
    expect(await memoryCell3.getText()).toEqual('');
    expect(await memoryCell4.getText()).toEqual('');

    // At loop(memory(2)) - 1
    await stepIntoBtn.click();
    expect(await memoryCell0.getText()).toEqual('abc');
    expect(await memoryCell1.getText()).toEqual('3');
    expect(await memoryCell2.getText()).toEqual('');
    expect(await memoryCell3.getText()).toEqual('');
    expect(await memoryCell4.getText()).toEqual('');

    // At move(next) - 1
    await stepIntoBtn.click();
    expect(await memoryCell0.getText()).toEqual('abc');
    expect(await memoryCell1.getText()).toEqual('3');
    expect(await memoryCell2.getText()).toEqual('');
    expect(await memoryCell3.getText()).toEqual('');
    expect(await memoryCell4.getText()).toEqual('');

    // At set(string) - 1
    await stepIntoBtn.click();
    expect(await memoryCell0.getText()).toEqual('abc');
    expect(await memoryCell1.getText()).toEqual('3');
    expect(await memoryCell2.getText()).toEqual('');
    expect(await memoryCell3.getText()).toEqual('');
    expect(await memoryCell4.getText()).toEqual('');

    // At write("data") - 1
    await stepIntoBtn.click();
    expect(await memoryCell0.getText()).toEqual('abc');
    expect(await memoryCell1.getText()).toEqual('3');
    expect(await memoryCell2.getText()).toEqual('data');
    expect(await memoryCell3.getText()).toEqual('');
    expect(await memoryCell4.getText()).toEqual('');

    // At move(next) - 2
    await stepIntoBtn.click();
    expect(await memoryCell0.getText()).toEqual('abc');
    expect(await memoryCell1.getText()).toEqual('3');
    expect(await memoryCell2.getText()).toEqual('data');
    expect(await memoryCell3.getText()).toEqual('');
    expect(await memoryCell4.getText()).toEqual('');

    // At set(string) - 2
    await stepIntoBtn.click();
    expect(await memoryCell0.getText()).toEqual('abc');
    expect(await memoryCell1.getText()).toEqual('3');
    expect(await memoryCell2.getText()).toEqual('data');
    expect(await memoryCell3.getText()).toEqual('');
    expect(await memoryCell4.getText()).toEqual('');

    // At write("data") - 2
    await stepIntoBtn.click();
    expect(await memoryCell0.getText()).toEqual('abc');
    expect(await memoryCell1.getText()).toEqual('3');
    expect(await memoryCell2.getText()).toEqual('data');
    expect(await memoryCell3.getText()).toEqual('data');
    expect(await memoryCell4.getText()).toEqual('');

    // At move(next) - 3
    await stepIntoBtn.click();
    expect(await memoryCell0.getText()).toEqual('abc');
    expect(await memoryCell1.getText()).toEqual('3');
    expect(await memoryCell2.getText()).toEqual('data');
    expect(await memoryCell3.getText()).toEqual('data');
    expect(await memoryCell4.getText()).toEqual('');

    // At set(string) - 3
    await stepIntoBtn.click();
    expect(await memoryCell0.getText()).toEqual('abc');
    expect(await memoryCell1.getText()).toEqual('3');
    expect(await memoryCell2.getText()).toEqual('data');
    expect(await memoryCell3.getText()).toEqual('data');
    expect(await memoryCell4.getText()).toEqual('');

    // At write("data") - 3
    await stepIntoBtn.click();
    expect(await memoryCell0.getText()).toEqual('abc');
    expect(await memoryCell1.getText()).toEqual('3');
    expect(await memoryCell2.getText()).toEqual('data');
    expect(await memoryCell3.getText()).toEqual('data');
    expect(await memoryCell4.getText()).toEqual('data');

    expect(await debuggerBtn.isDisplayed()).toEqual(false);
    expect(await stepIntoBtn.isDisplayed()).toEqual(false);
  }, 35000);

  test(testStartWhileDebugging, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(string)\nwrite("abc")\nmove(next)\nend');

    const debuggerBtn = await TestConfig.getElementByXpath(driver, '//*[@id="debug-control"]/div[1]');
    await debuggerBtn.click();

    const stepIntoBtn = await TestConfig.getElementByXpath(driver, '//*[@id="debug-control"]/div[2]', false);
    expect(await stepIntoBtn.isDisplayed()).toEqual(false);

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();
    expect(await debuggerBtn.isDisplayed()).toEqual(false);

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');

    stepIntoBtn.click();
    expect(await memoryCell0.getText()).toEqual('abc');

    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();
    expect(await debuggerBtn.isDisplayed()).toEqual(false);
    expect(await stepIntoBtn.isDisplayed()).toEqual(true);
    expect(await memoryCell0.getText()).toEqual('');

    stepIntoBtn.click();
    expect(await memoryCell0.getText()).toEqual('abc');
  }, 35000);

  test(testStartAfterDebugging, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(string)\nwrite("abc")\nmove(next)\nend');

    const debuggerBtn = await TestConfig.getElementByXpath(driver, '//*[@id="debug-control"]/div[1]');
    await debuggerBtn.click();

    const stepIntoBtn = await TestConfig.getElementByXpath(driver, '//*[@id="debug-control"]/div[2]', false);
    expect(await stepIntoBtn.isDisplayed()).toEqual(false);

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();
    expect(await debuggerBtn.isDisplayed()).toEqual(false);

    stepIntoBtn.click();
    stepIntoBtn.click();

    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();
    expect(await debuggerBtn.isDisplayed()).toEqual(false);
    expect(await stepIntoBtn.isDisplayed()).toEqual(false);
  }, 35000);

  test(testResetDebugging, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(string)\nwrite("abc")\nmove(next)\nend');

    const debuggerBtn = await TestConfig.getElementByXpath(driver, '//*[@id="debug-control"]/div[1]');
    await debuggerBtn.click();

    const stepIntoBtn = await TestConfig.getElementByXpath(driver, '//*[@id="debug-control"]/div[2]', false);
    expect(await stepIntoBtn.isDisplayed()).toEqual(false);

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();
    expect(await debuggerBtn.isDisplayed()).toEqual(false);

    stepIntoBtn.click();
    stepIntoBtn.click();

    await consoleInput.sendKeys('reset');
    await driver.actions().keyDown(Key.ENTER).perform();
    expect(await debuggerBtn.isDisplayed()).toEqual(true);
    expect(await stepIntoBtn.isDisplayed()).toEqual(false);
  }, 35000);
});
