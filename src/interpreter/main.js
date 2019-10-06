import RVisitor from "./RomeVisitor";
var antlr4 = require("antlr4");
var RomeLexer = require("../lang/RomeLexer").RomeLexer;
var RomeParser = require("../lang/RomeParser").RomeParser;

var ErrorListener = function(errors) {
  antlr4.error.ErrorListener.call(this);
  this.errors = errors;
  return this;
};

ErrorListener.prototype = Object.create(antlr4.error.ErrorListener.prototype);
ErrorListener.prototype.constructor = ErrorListener;
ErrorListener.prototype.syntaxError = function(
  recognizer,
  offendingSymbol,
  line,
  column,
  msg,
  e
) {
  console.log(msg);
};

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
    toggle
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
    this.start(code);
  }

  // using visitor
  start(code) {
    var chars = new antlr4.InputStream(code);
    var lexer = new RomeLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new RomeParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser.r();

    // run code when there is no exception
    if (tree.exception === null) {
      tree.accept(
        new RVisitor(
          this.memArr,
          this.updateContentType,
          this.moveMem,
          this.writeContent,
          this.freeMem,
          this.sendMemAnimation,
          this.readMemAnimation
        )
      );
      this.toggle();
    } else {
      console.log("Exception: ", tree.exception);
      console.log("ERROR");
    }
  }
}

export default Interpreter;
