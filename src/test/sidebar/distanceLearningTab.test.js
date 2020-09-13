import TestConfig from '../TestConfig';

const webdriver = require('selenium-webdriver');
const { By } = require('selenium-webdriver');

const testName = {
  testClickTab: 'test first entry of help tab',
  testSearchInput: 'test the function of searching',
  testLevelList: 'test the level dropdownfied',
  testWeekList: 'test the week dropdownfied',
  testVideo1: 'test the first video',
  testVideo2: 'test the second video',
};

describe('test distance learing tab', () => {
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

  test(testName.testClickTab, async () => {
    const content = await TestConfig.getElementByXpath(driver, '//*[@id="sidebar"]/ul/li[1]/button');
    await content.click();

    const serachArea = await TestConfig.getElementById(driver, 'dis-search');
    const serachText = await serachArea.getText();

    const levelList = await TestConfig.getElementById(driver, 'levels');
    const level = await levelList.getAttribute('value');

    const weekList = await TestConfig.getElementById(driver, 'weeks');
    const week = await weekList.getAttribute('value');

    const link1 = await TestConfig.getElementByXpath(driver, '//*[@id="distance-learning"]/div[2]/button[1]');
    await link1.click();

    expect(serachText).toEqual('');
    expect(level).toEqual('all');
    expect(week).toEqual('all');
    // const serachArea = await TestConfig.getElementById(driver, 'dis-serach')
    // await serachArea.sendKeys("fox");
  }, 40000);

  test(testName.testSearchInput, async () => {
    const content = await TestConfig.getElementByXpath(driver, '//*[@id="sidebar"]/ul/li[1]/button');
    await content.click();

    const serachArea = await TestConfig.getElementById(driver, 'dis-search');
    await serachArea.sendKeys('fox');

    const v1 = await TestConfig.getElementByXpath(driver, '//*[@id="distance-learning"]/div[2]/button');
    await v1.click();
  }, 40000);

  test(testName.testLevelList, async () => {
    const content = await TestConfig.getElementByXpath(driver, '//*[@id="sidebar"]/ul/li[1]/button');
    await content.click();

    const levelList = await TestConfig.getElementById(driver, 'levels');
    await levelList.click();
    // const selectT = await TestConfig.getElementById(driver, 'Toddler');
    // const T = levelList.findElement(By.id('toddler'));
    const level = await levelList.getAttribute('value');

    const link1 = await TestConfig.getElementByXpath(driver, '//*[@id="distance-learning"]/div[2]/button[1]');
    await link1.click();

    expect(level).toEqual('all');
  }, 40000);

  test(testName.testWeekList, async () => {
    const content = await TestConfig.getElementByXpath(driver, '//*[@id="sidebar"]/ul/li[1]/button');
    await content.click();

    const weekList = await TestConfig.getElementById(driver, 'weeks');
    await weekList.click();
    // const selectT = await TestConfig.getElementById(driver, 'Toddler');
    // const T = levelList.findElement(By.id('toddler'));
    const level = await weekList.getAttribute('value');

    const link1 = await TestConfig.getElementByXpath(driver, '//*[@id="distance-learning"]/div[2]/button[1]');
    await link1.click();

    expect(level).toEqual('all');
  }, 40000);

  test(testName.testVideo1, async () => {
    const content = await TestConfig.getElementByXpath(driver, '//*[@id="sidebar"]/ul/li[1]/button');
    await content.click();

    const link1 = await TestConfig.getElementByXpath(driver, '//*[@id="distance-learning"]/div[2]/button[1]');
    await link1.click();
  }, 35000);

  test(testName.testVideo2, async () => {
    const content = await TestConfig.getElementByXpath(driver, '//*[@id="sidebar"]/ul/li[1]/button');
    await content.click();

    const link1 = await TestConfig.getElementByXpath(driver, '//*[@id="distance-learning"]/div[2]/button[2]');
    await link1.click();
  }, 35000);
});
