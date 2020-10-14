import webdriver, { Key } from 'selenium-webdriver';
import TestConfig from '../TestConfig';

const testBinaryViewOfInteger = 'test the binary view of integer type';
const testBinaryViewOfLong = 'test the binary view of long type';
const testBinaryViewOfFloat = 'test the binary view of float type';
const testBinaryViewOfNegative = 'test the binary view of negative number';
const testBinaryViewOfCharacter = 'test the binary view of character type';
const testBinaryViewOfString = 'test the binary view of string type';

describe('test binary view', () => {
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

  test(testBinaryViewOfInteger, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(integer)\nwrite(43697)\nend');

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    await driver.actions().doubleClick(memoryCell0).perform();

    const binaryCells = await TestConfig.getElementById(driver, 'memory-0');
    const binaryCellsRes = await binaryCells.getText();

    expect(binaryCellsRes).toEqual('1\n0\n1\n0\n1\n0\n1\n0\n1\n0\n1\n1\n0\n0\n0\n1');
  }, 35000);

  test(testBinaryViewOfLong, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(long)\nwrite(4163953387)\nend');

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    await driver.actions().doubleClick(memoryCell0).perform();

    const binaryCells = await TestConfig.getElementById(driver, 'memory-0');
    const binaryCellsRes = await binaryCells.getText();

    expect(binaryCellsRes).toEqual('1\n1\n1\n1\n1\n0\n0\n0\n0\n0\n1\n1\n0\n0\n0\n0\n1\n1\n1\n0\n0\n0\n1\n0\n1\n1\n1\n0\n1\n0\n1\n1');
  }, 35000);

  test(testBinaryViewOfFloat, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(float)\nwrite(10.75)\nmove(next)\nset(float)\nwrite(-10.75)\nend');

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    await driver.actions().doubleClick(memoryCell0).perform();

    const memoryCell1 = await TestConfig.getElementById(driver, 'memory-1');
    await driver.actions().doubleClick(memoryCell1).perform();

    const binaryCells0 = await TestConfig.getElementById(driver, 'memory-0');
    const binaryCells0Res = await binaryCells0.getText();

    const binaryCells1 = await TestConfig.getElementById(driver, 'memory-1');
    const binaryCells1Res = await binaryCells1.getText();

    expect(binaryCells0Res).toEqual('0\n1\n0\n0\n0\n0\n0\n1\n0\n0\n1\n0\n1\n1\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0');
    expect(binaryCells1Res).toEqual('1\n1\n0\n0\n0\n0\n0\n1\n0\n0\n1\n0\n1\n1\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0\n0');
}, 35000);

  test(testBinaryViewOfNegative, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(integer)\nwrite(-43697)\nend');

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    await driver.actions().doubleClick(memoryCell0).perform();

    const binaryCells = await TestConfig.getElementById(driver, 'memory-0');
    const binaryCellsRes = await binaryCells.getText();

    expect(binaryCellsRes).toEqual('0\n1\n0\n1\n0\n1\n0\n1\n0\n1\n0\n0\n1\n1\n1\n0');
  }, 35000);

  test(testBinaryViewOfCharacter, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(character)\nwrite("r")\nend');

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    await driver.actions().doubleClick(memoryCell0).perform();

    const binaryCells = await TestConfig.getElementById(driver, 'memory-0');
    const binaryCellsRes = await binaryCells.getText();

    expect(binaryCellsRes).toEqual('0\n1\n1\n1\n0\n0\n1\n0');
  }, 35000);

  test(testBinaryViewOfString, async () => {
    const str1 = 'romela';
    const str2 = 'nguage';
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(string)\nwrite("romelanguage")\nend');

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    await driver.actions().doubleClick(memoryCell0).perform();

    const memoryCell1 = await TestConfig.getElementById(driver, 'memory-1');
    await driver.actions().doubleClick(memoryCell1).perform();

    const binaryCells0 = await TestConfig.getElementById(driver, 'memory-0');
    const binaryCells0Res = await binaryCells0.getText();

    const binaryCells1 = await TestConfig.getElementById(driver, 'memory-1');
    const binaryCells1Res = await binaryCells1.getText();

    expect(binaryCells0Res).toEqual('0\n1\n1\n1\n0\n0\n1\n0\n0\n1\n1\n0\n1\n1\n1\n1\n0\n1\n1\n0\n1\n1\n0\n1\n0\n1\n1\n0\n0\n1\n0\n1\n0\n1\n1\n0\n1\n1\n0\n0\n0\n1\n1\n0\n0\n0\n0\n1');
    expect(binaryCells1Res).toEqual('0\n1\n1\n0\n1\n1\n1\n0\n0\n1\n1\n0\n0\n1\n1\n1\n0\n1\n1\n1\n0\n1\n0\n1\n0\n1\n1\n0\n0\n0\n0\n1\n0\n1\n1\n0\n0\n1\n1\n1\n0\n1\n1\n0\n0\n1\n0\n1');
  }, 35000);
});
