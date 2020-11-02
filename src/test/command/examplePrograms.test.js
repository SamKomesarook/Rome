import webdriver, { Key } from 'selenium-webdriver';
import TestConfig from '../TestConfig';

const testMoveNext = 'test the sample code: start\nmove(next)\nmove(last)\nend';
const testMoveLast = 'test the sample code: start\nmove(next)\nmove(last)\nend';
const testSetString = 'test the sample code: start\nset(string)\nwrite("hello!")\nend';
const testSetInteger = 'test the sample code: start\nset(integer)\nwrite(4)\nend';
const testFree = 'test the sample code: start\nset(string)\nwrite("hello")\nfree\nwrite("world!")\nend';
const testLoop = 'test the sample code: start\nloop(3){\nset(string)\nwrite("data")\nmove(next)\n}\nend';
const testMemoryAccess = 'test the sample code: start\nset(integer)\nwrite(3)\nmove(next)\nloop(memory(1)){\nset(string)\nwrite("data")\nmove(next)\n}\nend';
const testNameAndMemoryAccess = 'test the sample code: start\nset(integer)\nwrite(3)\nname("first")\nmove(next)\nloop(memory("first")){\nset(string)\nwrite("data")\nmove(next)\n}\nend';
const testIfIsEqual = 'test the sample code: start\nset(integer)\nwrite(3)\nif(is equal 3){\nmove(next)\nset(string)\nwrite("is equal to 3!")\n}\nend';
const testIfNotLess = 'test the sample code: start\nset(integer)\nwrite(3)\nif(not less 3){\nmove(next)\nset(string)\nwrite("not <3")\n}\nend';
const testIfIsGreater = 'test the sample code: start\nset(integer)\nwrite(3)\nif(is greater 3){\nmove(next)\nset(string)\nwrite("> 3")\n}\nend';
const testKeyboardRead = 'test the sample code: start\nimport(IO)\nkeyboardRead\nend';
const testConsoleWrite = 'test the sample code: start\nimport(IO)\nconsoleWrite("hello!")\nend';

describe('test example programs', () => {
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
    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('reset');
    await driver.actions().keyDown(Key.ENTER).perform();
    await consoleInput.sendKeys('consoleClear');
    await driver.actions().keyDown(Key.ENTER).perform();

    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.clear();
  }, 30000);

  // move next write 1
  test(testMoveNext, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nmove(next)\nset(integer)\nwrite(1)\nend');

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    const memoryCell1 = await TestConfig.getElementById(driver, 'memory-1');
    const memoryCell1Res = await memoryCell1.getText();

    expect(memoryCell0Res).toEqual('');
    expect(memoryCell1Res).toEqual('1');
  }, 40000);

  // move next than move last and write 1
  test(testMoveLast, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nmove(next)\nmove(last)\nset(integer)\nwrite(1)\nend');

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    const memoryCell1 = await TestConfig.getElementById(driver, 'memory-1');
    const memoryCell1Res = await memoryCell1.getText();

    expect(memoryCell0Res).toEqual('1');
    expect(memoryCell1Res).toEqual('');
  }, 40000);

  // test set string and than write hello!:
  // start
  // set(string)
  // write("hello!")
  // end

  test(testSetString, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(string)\nwrite("hello!")\nend');

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    expect(memoryCell0Res).toEqual('hello!');
  }, 40000);

  // test set integer with 4
  // start
  //   set(integer)
  //   write(4)
  //   end

  test(testSetInteger, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(integer)\nwrite(4)\nend');

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    expect(memoryCell0Res).toEqual('4');
  }, 40000);

  // free
  // start
  // set(string)
  // write("hello")
  // free
  // write("world!")
  // end

  test(testFree, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(string)\nwrite("hello")\nfree\nwrite("world!")\nend');

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    expect(memoryCell0Res).toEqual('world!');
  }, 40000);

  // loop
  // start
  // loop(3){
  // set(string)
  // write("data")
  // move(next)
  // }
  // end

  test(testLoop, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nloop(3){\nset(string)\nwrite("data")\nmove(next)\n}\nend');

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    const memoryCell1 = await TestConfig.getElementById(driver, 'memory-1');
    const memoryCell1Res = await memoryCell1.getText();

    const memoryCell2 = await TestConfig.getElementById(driver, 'memory-2');
    const memoryCell2Res = await memoryCell2.getText();

    const memoryCell3 = await TestConfig.getElementById(driver, 'memory-3');
    const memoryCell3Res = await memoryCell3.getText();

    expect(memoryCell0Res).toEqual('data');
    expect(memoryCell1Res).toEqual('data');
    expect(memoryCell2Res).toEqual('data');
    expect(memoryCell3Res).toEqual('');
  }, 40000);

  // access memory:
  //   start
  //   set(integer)
  //   write(3)
  //   move(next)
  //   loop(memory(1)){
  //   set(string)
  //   write("data")
  //   move(next)
  //   }
  //   end

  test(testMemoryAccess, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(integer)\nwrite(3)\nmove(next)\nloop(memory(1)){\nset(string)\nwrite("data")\nmove(next)\n}\nend');

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    const memoryCell1 = await TestConfig.getElementById(driver, 'memory-1');
    const memoryCell1Res = await memoryCell1.getText();

    const memoryCell2 = await TestConfig.getElementById(driver, 'memory-2');
    const memoryCell2Res = await memoryCell2.getText();

    const memoryCell3 = await TestConfig.getElementById(driver, 'memory-3');
    const memoryCell3Res = await memoryCell3.getText();

    const memoryCell4 = await TestConfig.getElementById(driver, 'memory-4');
    const memoryCell4Res = await memoryCell4.getText();

    expect(memoryCell0Res).toEqual('3');
    expect(memoryCell1Res).toEqual('data');
    expect(memoryCell2Res).toEqual('data');
    expect(memoryCell3Res).toEqual('data');
    expect(memoryCell4Res).toEqual('');
  }, 40000);

  // name and memory access:
  // start
  // set(integer)
  // write(3)
  // name("first")
  // move(next)
  // loop(memory("first")){
  // set(string)
  // write("data")
  // move(next)
  // }
  // end

  test(testNameAndMemoryAccess, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(integer)\nwrite(3)\nname("first")\nmove(next)\nloop(memory("first")){\nset(string)\nwrite("data")\nmove(next)\n}\nend');

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    const memoryCell1 = await TestConfig.getElementById(driver, 'memory-1');
    const memoryCell1Res = await memoryCell1.getText();

    const memoryCell2 = await TestConfig.getElementById(driver, 'memory-2');
    const memoryCell2Res = await memoryCell2.getText();

    const memoryCell3 = await TestConfig.getElementById(driver, 'memory-3');
    const memoryCell3Res = await memoryCell3.getText();

    const memoryCell4 = await TestConfig.getElementById(driver, 'memory-4');
    const memoryCell4Res = await memoryCell4.getText();

    expect(memoryCell0Res).toEqual('3');
    expect(memoryCell1Res).toEqual('data');
    expect(memoryCell2Res).toEqual('data');
    expect(memoryCell3Res).toEqual('data');
    expect(memoryCell4Res).toEqual('');
  }, 40000);

  // if is equal:
  //   start
  //   set(integer)
  //   write(3)
  //   if(is equal 3){
  //   move(next)
  //   set(string)
  //   write("is equal to 3!")
  //   }
  //   end

  test(testIfIsEqual, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(integer)\nwrite(3)\nif(is equal 3){\nmove(next)\nset(string)\nwrite("= 3")\n}\nend');

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    const memoryCell1 = await TestConfig.getElementById(driver, 'memory-1');
    const memoryCell1Res = await memoryCell1.getText();

    expect(memoryCell0Res).toEqual('3');
    expect(memoryCell1Res).toEqual('= 3');
  }, 40000);

  // if not less:
  //   start
  //   set(integer)
  //   write(3)
  //   if(not less 3){
  //   move(next)
  //   set(string)
  //   write("is not less than 3!")
  //   }
  //   end

  test(testIfNotLess, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(integer)\nwrite(3)\nif(not less 3){\nmove(next)\nset(string)\nwrite("not <3")\n}\nend');

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    const memoryCell1 = await TestConfig.getElementById(driver, 'memory-1');
    const memoryCell1Res = await memoryCell1.getText();

    expect(memoryCell0Res).toEqual('3');
    expect(memoryCell1Res).toEqual('not <3');
  }, 40000);

  // if is greater:
  //   start
  //   set(integer)
  //   write(3)
  //   if(is greater 3){
  //   move(next)
  //   set(string)
  //   write("is greater than 3!")
  //   }
  //   end

  test(testIfIsGreater, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(integer)\nwrite(3)\nif(is greater 3){\nmove(next)\nset(string)\nwrite("> 3")\n}\nend');

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    const memoryCell1 = await TestConfig.getElementById(driver, 'memory-1');
    const memoryCell1Res = await memoryCell1.getText();

    expect(memoryCell0Res).toEqual('3');
    expect(memoryCell1Res).toEqual('');
  }, 40000);

  // import IO and KeyboardRead:
  // start
  // import(IO)
  // keyboardRead
  // end

  test(testKeyboardRead, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nimport(IO)\nkeyboardRead\nend');

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();

    await consoleInput.sendKeys('hello!');
    await driver.actions().keyDown(Key.ENTER).perform();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    expect(memoryCell0Res).toEqual('hello!');
  }, 40000);

  // import IO and consoleWrite:
  // start
  // import(IO)
  // consoleWrite("hello!")
  // end

  test(testConsoleWrite, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nimport(IO)\nconsoleWrite("hello!")\nend');

    const consoleInput = await TestConfig.getElementById(driver, 'console-input');
    await consoleInput.sendKeys('start');
    await driver.actions().keyDown(Key.ENTER).perform();

    const secondConsoleRecord = await TestConfig.getElementByXpath(driver, '//*[@id="console"]/div[2]');
    const secondConsoleRecordRes = await secondConsoleRecord.getText();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    expect(secondConsoleRecordRes).toEqual('> hello!');
    expect(memoryCell0Res).toEqual('');
  }, 40000);
});
