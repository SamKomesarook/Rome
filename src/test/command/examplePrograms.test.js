import TestConfig from '../TestConfig';

const webdriver = require('selenium-webdriver');
const { Key } = require('selenium-webdriver');

const testName = {
  testMoveNext: 'test the sample code: start\nmove(next)\nmove(last)\nend',
  testMoveLast: 'test the sample code: start\nmove(next)\nmove(last)\nend',
  testSetLetters: 'test the sample code: start\nset(letters)\nwrite("hello!")\nend',
  testSetNumbers: 'test the sample code: start\nset(numbers)\nwrite(4)\nend',
  testFree: 'test the sample code: start\nset(letters)\nwrite("hello")\nfree\nwrite("world!")\nend',
  testLoop: 'test the sample code: start\nloop(3){\nset(letters)\nwrite("content")\nmove(next)\n}\nend',
  testMemoryAccess: 'test the sample code: start\nset(numbers)\nwrite(3)\nmove(next)\nloop(memory(1)){\nset(letters)\nwrite("content")\nmove(next)\n}\nend',
  testNameAndMemoryAccess: 'test the sample code: start\nset(numbers)\nwrite(3)\nname("first")\nmove(next)\nloop(memory("first")){\nset(letters)\nwrite("content")\nmove(next)\n}\nend',
  testIfIsEqual: 'test the sample code: start\nset(numbers)\nwrite(3)\nif(is equal 3){\nmove(next)\nset(letters)\nwrite("is equal to 3!")\n}\nend',
  testIfNotLess: 'test the sample code: start\nset(numbers)\nwrite(3)\nif(not less 3){\nmove(next)\nset(letters)\nwrite("is not less than 3!")\n}\nend',
  testIfIsGreater: 'test the sample code: start\nset(numbers)\nwrite(3)\nif(is greater 3){\nmove(next)\nset(letters)\nwrite("is greater than 3!")\n}\nend',
  testNetworkWrite: 'test the sample code: start\nimport(network)\nn_write("hello!")\nend',
  testNetworkRead: 'test the sample code: start\nimport(network)\nn_read\nend',
  testKeyboardRead: 'test the sample code: start\nimport(IO)\nk_read\nend',
  testConsoleWrite: 'test the sample code: start\nimport(IO)\nk_write("hello!")\nend',
};

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
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.clear();

    const stopBtn = await TestConfig.getElementById(driver, 'stop-button');
    stopBtn.click();
  }, 30000);

  // move next write 1
  test(testName.testMoveNext, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nmove(next)\nset(numbers)\nwrite(1)\nend');

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const outputArea = await TestConfig.getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    const memoryCell1 = await TestConfig.getElementById(driver, 'memory-1');
    const memoryCell1Res = await memoryCell1.getText();

    expect(outputAreaRes).toEqual('');
    expect(memoryCell0Res).toEqual('');
    expect(memoryCell1Res).toEqual('1');
  }, 40000);

  // move next than move last and write 1
  test(testName.testMoveLast, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nmove(next)\nmove(last)\nset(numbers)\nwrite(1)\nend');

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const outputArea = await TestConfig.getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    const memoryCell1 = await TestConfig.getElementById(driver, 'memory-1');
    const memoryCell1Res = await memoryCell1.getText();

    expect(outputAreaRes).toEqual('');
    expect(memoryCell0Res).toEqual('1');
    expect(memoryCell1Res).toEqual('');
  }, 40000);

  // test set letters and than write hello!:
  // start
  // set(letters)
  // write("hello!")
  // end

  test(testName.testSetLetters, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(letters)\nwrite("hello!")\nend');

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const outputArea = await TestConfig.getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    expect(outputAreaRes).toEqual('');
    expect(memoryCell0Res).toEqual('"hello!"');
  }, 40000);

  // test set numbers with 4
  // start
  //   set(numbers)
  //   write(4)
  //   end

  test(testName.testSetNumbers, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(numbers)\nwrite(4)\nend');

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const outputArea = await TestConfig.getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    expect(outputAreaRes).toEqual('');
    expect(memoryCell0Res).toEqual('4');
  }, 40000);

  // free
  // start
  // set(letters)
  // write("hello")
  // free
  // write("world!")
  // end

  test(testName.testFree, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(letters)\nwrite("hello")\nfree\nwrite("world!")\nend');

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const outputArea = await TestConfig.getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    expect(outputAreaRes).toEqual('');
    expect(memoryCell0Res).toEqual('"world!"');
  }, 40000);

  // loop
  // start
  // loop(3){
  // set(letters)
  // write("content")
  // move(next)
  // }
  // end

  test(testName.testLoop, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nloop(3){\nset(letters)\nwrite("content")\nmove(next)\n}\nend');

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const outputArea = await TestConfig.getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    const memoryCell1 = await TestConfig.getElementById(driver, 'memory-1');
    const memoryCell1Res = await memoryCell1.getText();

    const memoryCell2 = await TestConfig.getElementById(driver, 'memory-2');
    const memoryCell2Res = await memoryCell2.getText();

    const memoryCell3 = await TestConfig.getElementById(driver, 'memory-3');
    const memoryCell3Res = await memoryCell3.getText();

    expect(outputAreaRes).toEqual('');
    expect(memoryCell0Res).toEqual('"content"');
    expect(memoryCell1Res).toEqual('"content"');
    expect(memoryCell2Res).toEqual('"content"');
    expect(memoryCell3Res).toEqual('');
  }, 40000);

  // access memory:
  //   start
  //   set(numbers)
  //   write(3)
  //   move(next)
  //   loop(memory(1)){
  //   set(letters)
  //   write("content")
  //   move(next)
  //   }
  //   end

  test(testName.testLoop, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(numbers)\nwrite(3)\nmove(next)\nloop(memory(1)){\nset(letters)\nwrite("content")\nmove(next)\n}\nend');

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const outputArea = await TestConfig.getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

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

    expect(outputAreaRes).toEqual('');
    expect(memoryCell0Res).toEqual('3');
    expect(memoryCell1Res).toEqual('"content"');
    expect(memoryCell2Res).toEqual('"content"');
    expect(memoryCell3Res).toEqual('"content"');
    expect(memoryCell4Res).toEqual('');
  }, 40000);

  // name and memory access:
  // start
  // set(numbers)
  // write(3)
  // name("first")
  // move(next)
  // loop(memory("first")){
  // set(letters)
  // write("content")
  // move(next)
  // }
  // end

  test(testName.testNameAndMemoryAccess, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(numbers)\nwrite(3)\nname("first")\nmove(next)\nloop(memory("first")){\nset(letters)\nwrite("content")\nmove(next)\n}\nend');

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const outputArea = await TestConfig.getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

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

    expect(outputAreaRes).toEqual('');
    expect(memoryCell0Res).toEqual('3');
    expect(memoryCell1Res).toEqual('"content"');
    expect(memoryCell2Res).toEqual('"content"');
    expect(memoryCell3Res).toEqual('"content"');
    expect(memoryCell4Res).toEqual('');
  }, 40000);

  // if is equal:
  //   start
  //   set(numbers)
  //   write(3)
  //   if(is equal 3){
  //   move(next)
  //   set(letters)
  //   write("is equal to 3!")
  //   }
  //   end

  //   test(testName.testIfIsEqual, async () => {
  //     const codingArea = await TestConfig.getElementById(driver, 'coding-area');
  //     await codingArea.sendKeys('start\nset(numbers)\nwrite(3)\nif(is equal 3){\nmove(next)\nset(letters)\nwrite("is equal to 3!")\n}\nend');

  //     const startBtn = await TestConfig.getElementById(driver, 'start-button');
  //     await startBtn.click();

  //     const outputArea = await TestConfig.getElementById(driver, 'output-area');
  //     const outputAreaRes = await outputArea.getText();

  //     const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
  //     const memoryCell0Res = await memoryCell0.getText();

  //     const memoryCell1 = await TestConfig.getElementById(driver, 'memory-1');
  //     const memoryCell1Res = await memoryCell1.getText();

  //     expect(outputAreaRes).toEqual('');
  //     expect(memoryCell0Res).toEqual('3');
  //     expect(memoryCell1Res).toEqual('"is equal to 3!"');
  //   }, 40000);

  // if not less:
  //   start
  //   set(numbers)
  //   write(3)
  //   if(not less 3){
  //   move(next)
  //   set(letters)
  //   write("is not less than 3!")
  //   }
  //   end

  test(testName.testIfNotLess, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(numbers)\nwrite(3)\nif(not less 3){\nmove(next)\nset(letters)\nwrite("is not less than 3!")\n}\nend');

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const outputArea = await TestConfig.getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    const memoryCell1 = await TestConfig.getElementById(driver, 'memory-1');
    const memoryCell1Res = await memoryCell1.getText();

    expect(outputAreaRes).toEqual('');
    expect(memoryCell0Res).toEqual('3');
    expect(memoryCell1Res).toEqual('"is not less than 3!"');
  }, 40000);

  // if is greater:
  //   start
  //   set(numbers)
  //   write(3)
  //   if(is greater 3){
  //   move(next)
  //   set(letters)
  //   write("is greater than 3!")
  //   }
  //   end

  test(testName.testIfIsGreater, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nset(numbers)\nwrite(3)\nif(is greater 3){\nmove(next)\nset(letters)\nwrite("is greater than 3!")\n}\nend');

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const outputArea = await TestConfig.getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    const memoryCell1 = await TestConfig.getElementById(driver, 'memory-1');
    const memoryCell1Res = await memoryCell1.getText();

    expect(outputAreaRes).toEqual('');
    expect(memoryCell0Res).toEqual('3');
    expect(memoryCell1Res).toEqual('');
  }, 40000);

  // import network and networkWrite:
  // start
  // import(network)
  // networkWrite("hello!")
  // end

  test(testName.testNetworkWrite, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nimport(network)\nnetworkWrite("hello!")\nend');

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const outputArea = await TestConfig.getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    expect(outputAreaRes).toEqual('');
    expect(memoryCell0Res).toEqual('');
  }, 40000);

  // import network and networkRead:
  // start
  // import(network)
  // networkRead
  // end

  test(testName.testNetworkRead, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nimport(network)\nnetworkRead\nend');

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const outputArea = await TestConfig.getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

    // const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    // const memoryCell0Res = await memoryCell0.getText();

    expect(outputAreaRes).toEqual('');
    // expect(memoryCell0Res).toEqual('');
  }, 40000);

  // import IO and KeyboardRead:
  // start
  // import(IO)
  // keyboardRead
  // end

  test(testName.testKeyboardRead, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nimport(IO)\nkeyboardRead\nend');

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const inputArea = await TestConfig.getElementById(driver, 'input-bar');
    await inputArea.sendKeys('hello!');
    await driver.actions().keyDown(Key.ENTER).perform();

    const outputArea = await TestConfig.getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    expect(outputAreaRes).toEqual('');
    expect(memoryCell0Res).toEqual('hello!');
  }, 40000);

  // import IO and consoleWrite:
  // start
  // import(IO)
  // consoleWrite("hello!")
  // end

  test(testName.testConsoleWrite, async () => {
    const codingArea = await TestConfig.getElementById(driver, 'coding-area');
    await codingArea.sendKeys('start\nimport(IO)\nconsoleWrite("hello!")\nend');

    const startBtn = await TestConfig.getElementById(driver, 'start-button');
    await startBtn.click();

    const outputArea = await TestConfig.getElementById(driver, 'output-area');
    const outputAreaRes = await outputArea.getText();

    const memoryCell0 = await TestConfig.getElementById(driver, 'memory-0');
    const memoryCell0Res = await memoryCell0.getText();

    expect(outputAreaRes).toEqual('hello!');
    expect(memoryCell0Res).toEqual('');
  }, 40000);
});
