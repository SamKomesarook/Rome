import TestConfig from '../TestConfig';

const webdriver = require('selenium-webdriver');

const testName = {
  testCommentBetweenLines: 'test comment in between lines',
};

describe('test write string', () => {
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
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.clear();

    const stopBtn = await TestConfig.getElementById(driver, 'reset-button');
    stopBtn.click();
  }, 30000);

  test(testName.testCommentBetweenLines, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('# this is a comment\nstart\n# this is a comment\nset(string)\n# this is a comment\nwrite("hello!")\n# this is a comment\nend\n# this is a comment');

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const outputArea = await TestConfig.getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    expect(outputAreaRes).toEqual('');
    expect(memoryCell0Res).toEqual('"hello!"');
  }, 35000);
});
