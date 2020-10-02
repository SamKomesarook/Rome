import TestConfig from '../TestConfig';

const webdriver = require('selenium-webdriver');

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

  function listNum(str) {
    const strArray = str.split('');
    let res = '';
    for (let i = 0; i < str.length - 1; i++) {
      res = `${res + strArray[i]}\n`;
    }
    res += strArray[strArray.length - 1];
    return res;
  }

  function fillIn(str) {
    let fill = '';
    for (let i = 0; i < 8 - str.length; i++) {
      fill += '0';
    }
    return fill + str;
  }

  function transfer(str) {
    let res = '';
    for (let i = 0; i < 6; i++) {
      res += fillIn(str.charCodeAt(i).toString(2));
    }
    return res;
  }

  test(testBinaryViewOfInteger, async () => {
    const value = 43697;
    const str = value.toString();
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys(`start\nset(integer)\nwrite(${str})\nend`);

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    await driver.actions().doubleClick(memoryCell0).perform();

    const binaryCells = await TestConfig.getElementById(driver, 'memory-0');
    const binaryCellsRes = await binaryCells.getText();
    const bValue = parseInt(value).toString(2);
    const res = listNum(bValue);
    expect(binaryCellsRes).toEqual(res);

    const outputArea = await TestConfig.getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

    expect(outputAreaRes).toEqual('');
  }, 35000);

  test(testBinaryViewOfLong, async () => {
    const value = 4163953387;
    const str = value.toString();
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys(`start\nset(long)\nwrite(${str})\nend`);

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    await driver.actions().doubleClick(memoryCell0).perform();

    const binaryCells = await TestConfig.getElementById(driver, 'memory-0');
    const binaryCellsRes = await binaryCells.getText();
    const bValue = parseInt(value).toString(2);
    const res = listNum(bValue);
    expect(binaryCellsRes).toEqual(res);

    const outputArea = await TestConfig.getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

    expect(outputAreaRes).toEqual('');
  }, 35000);

  test(testBinaryViewOfFloat, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(float)\nwrite(10.75)\nmove(next)\nset(float)\nwrite(-10.75)\nend');

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    await driver.actions().doubleClick(memoryCell0).perform();

    const memoryCell1 = await TestConfig.getElementById(driver, 'memory-1');
    await driver.actions().doubleClick(memoryCell1).perform();

    const binaryCells0 = await TestConfig.getElementById(driver, 'memory-0');
    const binaryCells0Res = await binaryCells0.getText();

    const binaryCells1 = await TestConfig.getElementById(driver, 'memory-1');
    const binaryCells1Res = await binaryCells1.getText();

    expect(binaryCells0Res).toEqual(listNum('01000001001011000000000000000000'));
    expect(binaryCells1Res).toEqual(listNum('11000001001011000000000000000000'));

    const outputArea = await TestConfig.getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

    expect(outputAreaRes).toEqual('');
  }, 35000);

  test(testBinaryViewOfNegative, async () => {
    const value = -43697;
    const absValue = 43697;
    const str = value.toString();
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys(`start\nset(integer)\nwrite(${str})\nend`);

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    await driver.actions().doubleClick(memoryCell0).perform();

    const binaryCells = await TestConfig.getElementById(driver, 'memory-0');
    const binaryCellsRes = await binaryCells.getText();
    const bValue = parseInt(absValue).toString(2);
    const negBin = bValue.replace(/1/g, '9').replace(/0/g, '1').replace(/9/g, '0');
    const res = listNum(negBin);
    expect(binaryCellsRes).toEqual(res);

    const outputArea = await TestConfig.getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

    expect(outputAreaRes).toEqual('');
  }, 35000);

  test(testBinaryViewOfCharacter, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(character)\nwrite("r")\nend');

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    await driver.actions().doubleClick(memoryCell0).perform();

    const binaryCells = await TestConfig.getElementById(driver, 'memory-0');
    const binaryCellsRes = await binaryCells.getText();
    const bValue = fillIn('r'.charCodeAt(0).toString(2));
    const res = listNum(bValue);
    expect(binaryCellsRes).toEqual(res);

    const outputArea = await TestConfig.getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

    expect(outputAreaRes).toEqual('');
  }, 35000);

  test(testBinaryViewOfString, async () => {
    const str1 = 'romela';
    const str2 = 'nguage';
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(string)\nwrite("romelanguage")\nend');

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    await driver.actions().doubleClick(memoryCell0).perform();

    const memoryCell1 = await TestConfig.getElementById(driver, 'memory-1');
    await driver.actions().doubleClick(memoryCell1).perform();

    const binaryCells0 = await TestConfig.getElementById(driver, 'memory-0');
    const binaryCells0Res = await binaryCells0.getText();
    const bValue0 = transfer(str1);
    const res0 = listNum(bValue0);

    const binaryCells1 = await TestConfig.getElementById(driver, 'memory-1');
    const binaryCells1Res = await binaryCells1.getText();
    const bValue1 = transfer(str2);
    const res1 = listNum(bValue1);

    expect(binaryCells0Res).toEqual(res0);
    expect(binaryCells1Res).toEqual(res1);

    const outputArea = await TestConfig.getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

    expect(outputAreaRes).toEqual('');
  }, 35000);
});
