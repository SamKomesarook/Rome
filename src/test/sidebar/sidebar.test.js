import webdriver, { Key } from 'selenium-webdriver';
import TestConfig from '../TestConfig';

const testInitalState = 'test initial state of sidebar';
const testSelectDistLearn = 'test select distance learning';
const testSelectHelp = 'test select help';
const testSelectTabTwice = 'test select tab twice';
const testSelectBackground = 'test select background to dismiss tab';

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

  afterEach(async () => {
    await driver.navigate().refresh();
  }, 30000);

  test(testInitalState, async () => {
    const distanceLeanring = await TestConfig.getElementById(driver, 'distance-learning', false);
    const isDistLearnVisible = await distanceLeanring.isDisplayed();

    const help = await TestConfig.getElementById(driver, 'help', false);
    const isHelpVisible = await help.isDisplayed();

    expect(isDistLearnVisible).toEqual(false);
    expect(isHelpVisible).toEqual(false);
  }, 35000);

  test(testSelectDistLearn, async () => {
    const distLearnSidebarBtn = await TestConfig.getElementByXpath(driver, '//*[@id="sidebar"]/ul/li[1]/button');
    await distLearnSidebarBtn.click();

    const distanceLeanring = await TestConfig.getElementById(driver, 'distance-learning', false);
    const isDistLearnVisible = await distanceLeanring.isDisplayed();

    const help = await TestConfig.getElementById(driver, 'help', false);
    const isHelpVisible = await help.isDisplayed();

    expect(isDistLearnVisible).toEqual(true);
    expect(isHelpVisible).toEqual(false);
  }, 35000);

  test(testSelectHelp, async () => {
    const helpSidebarBtn = await TestConfig.getElementByName(driver, 'Help');
    await helpSidebarBtn.click();

    const distanceLeanring = await TestConfig.getElementById(driver, 'distance-learning', false);
    const isDistLearnVisible = await distanceLeanring.isDisplayed();

    const help = await TestConfig.getElementById(driver, 'help', false);
    const isHelpVisible = await help.isDisplayed();

    expect(isDistLearnVisible).toEqual(false);
    expect(isHelpVisible).toEqual(true);
  }, 35000);

  test(testSelectTabTwice, async () => {
    const distLearnSidebarBtn = await TestConfig.getElementByXpath(driver, '//*[@id="sidebar"]/ul/li[1]/button');
    await distLearnSidebarBtn.click();

    const distLearnBtnWidth = distLearnSidebarBtn.getRect().width;
    // Click the top right corner of the distance learning button
    await driver.actions().move(distLearnSidebarBtn, distLearnBtnWidth, 0).click().perform();

    const distanceLeanring = await TestConfig.getElementById(driver, 'distance-learning', false);
    const isDistLearnVisible = await distanceLeanring.isDisplayed();

    const help = await TestConfig.getElementById(driver, 'help', false);
    const isHelpVisible = await help.isDisplayed();

    expect(isDistLearnVisible).toEqual(false);
    expect(isHelpVisible).toEqual(false);
  }, 35000);

  test(testSelectBackground, async () => {
    const distLearnSidebarBtn = await TestConfig.getElementByXpath(driver, '//*[@id="sidebar"]/ul/li[1]/button');
    await distLearnSidebarBtn.click();

    const mainArea = await TestConfig.getElementByXpath(driver, '//*[@id="root"]/div');
    await mainArea.click();

    const distanceLeanring = await TestConfig.getElementById(driver, 'distance-learning', false);
    const isDistLearnVisible = await distanceLeanring.isDisplayed();

    const help = await TestConfig.getElementById(driver, 'help', false);
    const isHelpVisible = await help.isDisplayed();

    expect(isDistLearnVisible).toEqual(false);
    expect(isHelpVisible).toEqual(false);
  }, 35000);
});
