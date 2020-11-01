import webdriver, { Key } from 'selenium-webdriver';
import TestConfig from '../TestConfig';

const testTabInit = 'test initial state of distance tab when first entry';
const testSearchInput1 = 'test searching video using input "fox"';
const testSearchInput2 = 'test searching video using input "browser"';
const testLevelList = 'test the level dropdownfied';
const testWeekList = 'test the week dropdownfied';
const testVideo1 = 'test the first video';
const testVideo2 = 'test the second video';

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

  test(testTabInit, async () => {
    const content = await TestConfig.getElementByXpath(driver, '//*[@id="sidebar"]/ul/li[1]/button');
    await content.click();

    const serachArea = await TestConfig.getElementById(driver, 'dis-search');
    const serachText = await serachArea.getText();

    const levelList = await TestConfig.getElementById(driver, 'levels');
    const level = await levelList.getAttribute('value');

    const weekList = await TestConfig.getElementById(driver, 'weeks');
    const week = await weekList.getAttribute('value');

    const link1 = await TestConfig.getElementByXpath(driver, '//*[@id="distance-learning"]/div[2]/button[1]');
    const title1 = await link1.getText();

    const link2 = await TestConfig.getElementByXpath(driver, '//*[@id="distance-learning"]/div[2]/button[2]');
    const title2 = await link2.getText();

    expect(serachText).toEqual('');
    expect(level).toEqual('all');
    expect(week).toEqual('all');
    expect(title1).toEqual('Rome Intro');
    expect(title2).toEqual('Sidebar');
  }, 40000);

  test(testSearchInput1, async () => {
    const content = await TestConfig.getElementByXpath(driver, '//*[@id="sidebar"]/ul/li[1]/button');
    await content.click();

    const searchArea = await TestConfig.getElementById(driver, 'dis-search');
    await searchArea.sendKeys('intro');

    const link1 = await TestConfig.getElementByXpath(driver, '//*[@id="distance-learning"]/div[2]/button');
    const title1 = await link1.getText();

    expect(title1).toEqual('Rome Intro');
  }, 40000);

  test(testSearchInput2, async () => {
    const content = await TestConfig.getElementByXpath(driver, '//*[@id="sidebar"]/ul/li[1]/button');
    await content.click();

    const searchArea = await TestConfig.getElementById(driver, 'dis-search');
    await searchArea.sendKeys('sidebar');

    const link2 = await TestConfig.getElementByXpath(driver, '//*[@id="distance-learning"]/div[2]/button');
    const title2 = await link2.getText();

    expect(title2).toEqual('Sidebar');
  }, 40000);

  test(testLevelList, async () => {
    const content = await TestConfig.getElementByXpath(driver, '//*[@id="sidebar"]/ul/li[1]/button');
    await content.click();

    const levelList = await TestConfig.getElementById(driver, 'levels');
    await levelList.sendKeys('Kindergarten');

    const link1 = await TestConfig.getElementByXpath(driver, '//*[@id="distance-learning"]/div[2]/button');
    const title1 = await link1.getText();

    expect(title1).toEqual('Rome Intro');
  }, 40000);

  test(testWeekList, async () => {
    const content = await TestConfig.getElementByXpath(driver, '//*[@id="sidebar"]/ul/li[1]/button');
    await content.click();

    const weekList = await TestConfig.getElementById(driver, 'weeks');
    await weekList.sendKeys('1');

    const link1 = await TestConfig.getElementByXpath(driver, '//*[@id="distance-learning"]/div[2]/button');
    const title1 = await link1.getText();

    expect(title1).toEqual('Rome Intro');
  }, 40000);

  test(testVideo1, async () => {
    const content = await TestConfig.getElementByXpath(driver, '//*[@id="sidebar"]/ul/li[1]/button');
    await content.click();

    const link1 = await TestConfig.getElementByXpath(driver, '//*[@id="distance-learning"]/div[2]/button[1]');
    await link1.click();

    const video1 = await TestConfig.getElementById(driver, 'video-player', false);
    const isVideo1Visible = await video1.isDisplayed();

    expect(isVideo1Visible).toEqual(true);
  }, 35000);

  test(testVideo2, async () => {
    const content = await TestConfig.getElementByXpath(driver, '//*[@id="sidebar"]/ul/li[1]/button');
    await content.click();

    const link2 = await TestConfig.getElementByXpath(driver, '//*[@id="distance-learning"]/div[2]/button[2]');
    await link2.click();

    const video2 = await TestConfig.getElementById(driver, 'video-player', false);
    const isVideo2Visible = await video2.isDisplayed();

    expect(isVideo2Visible).toEqual(true);
  }, 35000);
});
