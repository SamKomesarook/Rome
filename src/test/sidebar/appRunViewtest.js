import TestConfig from '../TestConfig';

const webdriver = require('selenium-webdriver');

const testName = {
  testOpenAppRunView: 'test open app run view',
  testCloseAppRunView: 'test close app run view',
};

describe('test app run view', () => {
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

  test(testName.testOpenAppRunView, async () => {
    const appRunViewBtn = await TestConfig.getElementById(driver, 'app-run-view');

    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    const switchBtn = await TestConfig.getElementById(driver, 'switch');
    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    const stopBtn = await TestConfig.getElementById(driver, 'stop-button');
    const memorySection = await TestConfig.getElementById(driver, 'memory-section');

    await appRunViewBtn.click();

    expect(await codingArea.isDisplayed()).toEqual(false);
    expect(await switchBtn.isDisplayed()).toEqual(false);
    expect(await startBtn.isDisplayed()).toEqual(false);
    expect(await stopBtn.isDisplayed()).toEqual(false);
    expect(await memorySection.isDisplayed()).toEqual(false);
  }, 35000);

  test(testName.testOpenAppRunView, async () => {
    const appRunViewBtn = await TestConfig.getElementById(driver, 'app-run-view');

    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    const switchBtn = await TestConfig.getElementById(driver, 'switch');
    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    const stopBtn = await TestConfig.getElementById(driver, 'stop-button');
    const memorySection = await TestConfig.getElementById(driver, 'memory-section');

    await appRunViewBtn.click();
    await appRunViewBtn.click();

    expect(await codingArea.isDisplayed()).toEqual(true);
    expect(await switchBtn.isDisplayed()).toEqual(true);
    expect(await startBtn.isDisplayed()).toEqual(true);
    expect(await stopBtn.isDisplayed()).toEqual(true);
    expect(await memorySection.isDisplayed()).toEqual(true);
  }, 35000);
});
