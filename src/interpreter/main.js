import RVisitor from "./RomeVisitor";
import ErrorReporter from "./ErrorReporter";
var antlr4 = require("antlr4");
var RomeLexer = require("../lang/RomeLexer").RomeLexer;
var RomeParser = require("../lang/RomeParser").RomeParser;

/**
 * main Interpreter class
 */
class Interpreter {
  constructor(
    code,
    memArr,
    updateContentType,
    moveMem,
    writeContent,
    freeMem,
    sendMemAnimation,
    readMemAnimation,
    toggle,
    printAnimation
  ) {
    this.code = code;
    this.memArr = memArr;
    this.updateContentType = updateContentType;
    this.moveMem = moveMem;
    this.writeContent = writeContent;
    this.freeMem = freeMem;
    this.sendMemAnimation = sendMemAnimation;
    this.readMemAnimation = readMemAnimation;
    this.toggle = toggle;
    this.printAnimation = printAnimation;
    this.start(code);
  }

  /**
   * Starting point of lexer, parser and interpreter. Interpreter will only comes in when there is no error in code
   * @param {Object} code code that need to be parsed
   */
  start(code) {
    var chars = new antlr4.InputStream(code);
    var lexer = new RomeLexer(chars);
    // lexer.removeErrorListeners();
    // lexer.addErrorListener(new ErrorReporter(this));
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new RomeParser(tokens);
    parser.buildParseTrees = true;
    // replace with custom error listener
    parser.removeErrorListeners();
    parser.addErrorListener(new ErrorReporter(this));
    const tree = parser.r();
    // run code when there is no exception
    if (tree.exception === null && parser._syntaxErrors === 0) {
      try {
        tree.accept(
          new RVisitor(
            this.memArr,
            this.updateContentType,
            this.moveMem,
            this.writeContent,
            this.freeMem,
            this.sendMemAnimation,
            this.readMemAnimation,
            this.printAnimation
          )
        );
        this.toggle();
      } catch (e) {
        console.log("ERROR AFTER");
        alert(e.name + ": " + e.message);
      }
    } else {
      console.log(parser);
      console.log(parser._syntaxErrors);
      console.log("ERROR BEFORE");
    }
  }
}

export default Interpreter;
