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

    const expectedTopic = 'Rome-Education + Julia Brown Schools +';
    const expectedThank = 'Special thanks to:\nTon Binh On - Nick (programming)\nJiecong Zhang (programming)\nShujie Yang (programming)\nErina Ho (gorgeous logo)';

    expect(aboutContentInfo).toContain(expectedTopic);
    expect(aboutContentInfo).toContain(expectedThank);
  }, 35000);
});
