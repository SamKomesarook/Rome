import TestConfig from '../TestConfig';

const webdriver = require('selenium-webdriver');

const testName = {
  testInitialState: 'test the indicator at the initial state',
  testAppRunning: 'test the indicator when the app is switch on and off',
};

describe('test processor indicator', () => {
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

  test(testName.testInitialState, async () => {
    const processorIndicator = await TestConfig.getElementById(driver, 'chip');
    const processorIndicatorColor = await processorIndicator.getCssValue('fill');

    expect(processorIndicatorColor).toEqual('rgb(0, 0, 0)');
  }, 35000);

  test(testName.testAppRunning, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(letters)\nwrite("hello!")\nend');

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const processorIndicator = await TestConfig.getElementById(driver, 'chip');
    let processorIndicatorColor = await processorIndicator.getCssValue('fill');

    expect(processorIndicatorColor).toEqual('rgb(149, 131, 255)');

    const stopBtn = await TestConfig.getElementById(driver, 'stop-button');
    await stopBtn.click();

    processorIndicatorColor = await processorIndicator.getCssValue('fill');

    expect(processorIndicatorColor).toEqual('rgb(0, 0, 0)');
  }, 35000);
});
