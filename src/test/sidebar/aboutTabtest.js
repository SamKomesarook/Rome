import TestConfig from '../TestConfig';

const webdriver = require('selenium-webdriver');

const testName = {
  testAboutInfo: 'test the about info shows in about tab',
};

describe('test about tab', () => {
  let driver;

  beforeAll(async () => {
    driver = new webdriver.Builder().withCapabilities(TestConfig.CAPABILITIES).build();
    await driver.get(TestConfig.URL);
    await TestConfig.loginPass(driver);
  }, 30000);

  afterAll(async () => {
    await driver.quit();
  }, 40000);

  test(testName.testAboutInfo, async () => {
    const about = await TestConfig.getElementByName(driver, 'About');
    await about.click();

    const aboutContent = await TestConfig.getElementById(driver, 'about-content');
    const aboutContentInfo = await aboutContent.getText();

    const expectedInfo = 'Rome-Education + Julia Brown Schools +  = \n\nSpecial thanks to:\n\nNick On (programming)\nJiecong Zhang (programming)\nShujie Yang (programming)\nErina Ho (gorgeous logo)';

    expect(aboutContentInfo).toEqual(expectedInfo);
  }, 35000);
});
