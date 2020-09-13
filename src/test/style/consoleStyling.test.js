import TestConfig from '../TestConfig';

const webdriver = require('selenium-webdriver');

const testName = {
  testPaint: 'test the paint command in style',
  testSize: 'test the size command in style',
  testColor: 'test the color command in style',
  testUnderline: 'test the underline command in style',
  testBold: 'test the bold command in style',
  testItalic: 'test the italic command in style',
  testAlign: 'test the align command in style',
  testAll: 'test the combine result with all style command'
};

describe('test sidebar', () => {
  let driver;

  beforeAll(async () => {
    driver = new webdriver.Builder().withCapabilities(TestConfig.CAPABILITIES).build();
    await driver.get(TestConfig.URL);
    await TestConfig.loginPass(driver);
  }, 30000);

  afterAll(async () => {
    await driver.quit();
  }, 40000);


// <div contenteditable="false" id="output-area" style="background-color: blue; color: white; font-size: larger; text-align: center; font-weight: bold; font-style: italic; text-decoration-line: underline;">hello!


  afterEach(async () => {
    await driver.navigate().refresh();
  }, 30000);

  test(testName.testPaint, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nimport(IO)\nstyle{\npaint(blue)\n}\nconsoleWrite("hello!")\nend');

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const outputArea = await TestConfig.getElementById(driver, 'output-area');
    const paint = await outputArea.getCssValue("background-color");

    expect(paint).toEqual('rgba(0, 0, 255, 1)')

  }, 35000)

  test(testName.testSize, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nimport(IO)\nstyle{\ntext_size(larger)\n}\nconsoleWrite("hello!")\nend');

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const outputArea = await TestConfig.getElementById(driver, 'output-area');
    const fontSize = await outputArea.getCssValue("font-size");

    expect(fontSize).toEqual('19.2px')

  }, 35000)

  test(testName.testColor, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nimport(IO)\nstyle{\ntext_color(white)\n}\nconsoleWrite("hello!")\nend');

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const outputArea = await TestConfig.getElementById(driver, 'output-area');
    const textColor = await outputArea.getCssValue("color");

    expect(textColor).toEqual('rgba(255, 255, 255, 1)')

  }, 35000)  

  test(testName.testUnderline, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nimport(IO)\nstyle{\nunderline(true)\n}\nconsoleWrite("hello!")\nend');

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const outputArea = await TestConfig.getElementById(driver, 'output-area');
    const underline = await outputArea.getCssValue("text-decoration-line");

    expect(underline).toEqual('underline')

  }, 35000)

  test(testName.testBold, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nimport(IO)\nstyle{\nbold(true)\n}\nconsoleWrite("hello!")\nend');

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const outputArea = await TestConfig.getElementById(driver, 'output-area');
    const bold = await outputArea.getCssValue("font-weight");

    expect(bold).toEqual('700')

  }, 35000)

  test(testName.testItalic, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nimport(IO)\nstyle{\nitalic(true)\n}\nconsoleWrite("hello!")\nend');

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const outputArea = await TestConfig.getElementById(driver, 'output-area');
    const italic = await outputArea.getCssValue("font-style");

    expect(italic).toEqual('italic')

  }, 35000)

  test(testName.testAlign, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nimport(IO)\nstyle{\ntext_align(center)\n}\nconsoleWrite("hello!")\nend');

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const outputArea = await TestConfig.getElementById(driver, 'output-area');
    const algin = await outputArea.getCssValue("text-align");

    expect(algin).toEqual('center')

  }, 35000)

  test(testName.testAll, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nimport(IO)\nstyle{\npaint(blue)\ntext_size(larger)\ntext_color(white)\nunderline(true)\nbold(true)\nitalic(true)\ntext_align(center)\n}\nconsoleWrite("hello!")\nend');

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const outputArea = await TestConfig.getElementById(driver, 'output-area');
    const paint = await outputArea.getCssValue("background-color");
    const fontSize = await outputArea.getCssValue("font-size");
    const textColor = await outputArea.getCssValue("color");
    const underline = await outputArea.getCssValue("text-decoration-line");
    const bold = await outputArea.getCssValue("font-weight");
    const italic = await outputArea.getCssValue("font-style");
    const algin = await outputArea.getCssValue("text-align");

    expect(paint).toEqual('rgba(0, 0, 255, 1)');
    expect(textColor).toEqual('rgba(255, 255, 255, 1)');
    expect(fontSize).toEqual('19.2px');
    expect(underline).toEqual('underline');
    expect(bold).toEqual('700');
    expect(italic).toEqual('italic');
    expect(algin).toEqual('center');

  }, 35000)

});