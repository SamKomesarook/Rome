import webdriver, { Key } from 'selenium-webdriver';
import TestConfig from '../TestConfig';

const testPaint = 'test the paint command in style';
const testSize = 'test the size command in style';
const testColor = 'test the color command in style';
const testUnderline = 'test the underline command in style';
const testBold = 'test the bold command in style';
const testItalic = 'test the italic command in style';
const testAlign = 'test the align command in style';
const testAll = 'test the combine result with all style command';

describe('test styling language', () => {
  let driver;
  const STYLING_WAIT_TIME = 2000;

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

  test(testPaint, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nimport(IO)\nstyle{\npaint(blue)\n}\nconsoleWrite("hello!")\nend');

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();
    await driver.sleep(STYLING_WAIT_TIME);

    const console = await TestConfig.getElementById(driver, 'console');
    const paint = await console.getCssValue('background-color');

    expect(paint).toEqual('rgba(0, 0, 255, 1)');
  }, 35000);

  test(testSize, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nimport(IO)\nstyle{\ntext_size(larger)\n}\nconsoleWrite("hello!")\nend');

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();
    await driver.sleep(STYLING_WAIT_TIME);

    const console = await TestConfig.getElementById(driver, 'console');
    const fontSize = await console.getCssValue('font-size');

    expect(fontSize).toEqual('19.2px');
  }, 35000);

  test(testColor, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nimport(IO)\nstyle{\ntext_color(white)\n}\nconsoleWrite("hello!")\nend');

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();

    const console = await TestConfig.getElementById(driver, 'console');
    const textColor = await console.getCssValue('color');

    expect(textColor).toEqual('rgba(255, 255, 255, 1)');
  }, 35000);

  test(testUnderline, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nimport(IO)\nstyle{\nunderline\n}\nconsoleWrite("hello!")\nend');

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();

    const console = await TestConfig.getElementById(driver, 'console');
    const underline = await console.getCssValue('text-decoration-line');

    expect(underline).toEqual('underline');
  }, 35000);

  test(testBold, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nimport(IO)\nstyle{\nbold\n}\nconsoleWrite("hello!")\nend');

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();
    await driver.sleep(STYLING_WAIT_TIME);

    const console = await TestConfig.getElementById(driver, 'console');
    const bold = await console.getCssValue('font-weight');

    expect(bold).toEqual('700');
  }, 35000);

  test(testItalic, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nimport(IO)\nstyle{\nitalic\n}\nconsoleWrite("hello!")\nend');

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();

    const console = await TestConfig.getElementById(driver, 'console');
    const italic = await console.getCssValue('font-style');

    expect(italic).toEqual('italic');
  }, 35000);

  test(testAlign, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nimport(IO)\nstyle{\ntext_align(center)\n}\nconsoleWrite("hello!")\nend');

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();

    const console = await TestConfig.getElementById(driver, 'console');
    const align = await console.getCssValue('text-align');

    expect(align).toEqual('center');
  }, 35000);

  test(testAll, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nimport(IO)\nstyle{\npaint(blue)\ntext_size(larger)\ntext_color(white)\nunderline\nbold\nitalic\ntext_align(center)\n}\nconsoleWrite("hello!")\nend');

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();
    await driver.sleep(STYLING_WAIT_TIME);

    const console = await TestConfig.getElementById(driver, 'console');
    const paint = await console.getCssValue('background-color');
    const fontSize = await console.getCssValue('font-size');
    const textColor = await console.getCssValue('color');
    const underline = await console.getCssValue('text-decoration-line');
    const bold = await console.getCssValue('font-weight');
    const italic = await console.getCssValue('font-style');
    const align = await console.getCssValue('text-align');

    expect(paint).toEqual('rgba(0, 0, 255, 1)');
    expect(textColor).toEqual('rgba(255, 255, 255, 1)');
    expect(fontSize).toEqual('19.2px');
    expect(underline).toEqual('underline');
    expect(bold).toEqual('700');
    expect(italic).toEqual('italic');
    expect(align).toEqual('center');
  }, 35000);
});
