import webdriver, { Key } from 'selenium-webdriver';
import TestConfig from '../TestConfig';

const testFeedbackInfo = 'test first entry of help tab';

describe('test help tab', () => {
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

  test(testFeedbackInfo, async () => {
    const feedback = await TestConfig.getElementByName(driver, 'Feedback');
    await feedback.click();

    const nameInput = await TestConfig.getElementById(driver, 'fb-name');
    const nameInputValue = await nameInput.getText();
    const namePlaceholder = await nameInput.getAttribute('placeholder');
    const nameLable = await TestConfig.getElementByXpath(driver, '//*[@id="fb-form"]/div[1]/label');
    const nameLableTitle = await nameLable.getText();

    expect(nameInputValue).toEqual('');
    expect(namePlaceholder).toEqual('Your name');
    expect(nameLableTitle).toEqual('Name:');

    const emailInput = await TestConfig.getElementById(driver, 'fb-email');
    const emailInputValue = await emailInput.getText();
    const emailPlaceholder = await emailInput.getAttribute('placeholder');
    const emailLable = await TestConfig.getElementByXpath(driver, '//*[@id="fb-form"]/div[2]/label');
    const emailLableTitle = await emailLable.getText();

    expect(emailInputValue).toEqual('');
    expect(emailPlaceholder).toEqual('Your email');
    expect(emailLableTitle).toEqual('Email:');

    const contentInput = await TestConfig.getElementById(driver, 'fb-content');
    const contentInputValue = await contentInput.getText();
    const contentPlaceholder = await contentInput.getAttribute('placeholder');
    const contentlLable = await TestConfig.getElementByXpath(driver, '//*[@id="fb-form"]/div[3]/label');
    const contentLableTitle = await contentlLable.getText();

    expect(contentInputValue).toEqual('');
    expect(contentPlaceholder).toEqual('Content of feedback');
    expect(contentLableTitle).toEqual('Feedback:');

    const submitButton = await TestConfig.getElementByXpath(driver, '//*[@id="fb-form"]/div[4]/button');
    const submitButtonTitle = await submitButton.getText();

    expect(submitButtonTitle).toEqual('Submit');
  }, 35000);
});
