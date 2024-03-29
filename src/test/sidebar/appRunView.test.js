import webdriver from 'selenium-webdriver';
import TestConfig from '../TestConfig';

const testOpenAppRunView = 'test open app run view';
const testCloseAppRunView = 'test close app run view';

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

  test(testOpenAppRunView, async () => {
    const appRunViewBtn = await TestConfig.getElementByName(driver, 'App Run View');

    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    const memorySection = await TestConfig.getElementByXpath(driver, '//*[@id="computer-column"]/div[1]');

    await appRunViewBtn.click();

    expect(await codingArea.isDisplayed()).toEqual(false);
    expect(await memorySection.isDisplayed()).toEqual(false);
  }, 35000);

  test(testCloseAppRunView, async () => {
    const appRunViewBtn = await TestConfig.getElementByName(driver, 'App Run View');

    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    const memorySection = await TestConfig.getElementByXpath(driver, '//*[@id="computer-column"]/div[1]');

    await appRunViewBtn.click();
    await appRunViewBtn.click();

    expect(await codingArea.isDisplayed()).toEqual(true);
    expect(await memorySection.isDisplayed()).toEqual(true);
  }, 35000);
});
