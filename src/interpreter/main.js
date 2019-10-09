import RVisitor from "./RomeVisitor";
import ErrorReporter from "./ErrorReporter";
var antlr4 = require("antlr4");
var RomeLexer = require("../lang/RomeLexer").RomeLexer;
var RomeParser = require("../lang/RomeParser").RomeParser;

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

  // using visitor
  start(code) {
    var chars = new antlr4.InputStream(code);
    var lexer = new RomeLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new RomeParser(tokens);
    parser.buildParseTrees = true;
    // replace with custom error listener
    parser.removeErrorListeners();
    parser.addErrorListener(new ErrorReporter(this));
    const tree = parser.r();

    // run code when there is no exception
    if (tree.exception === null) {
	try{
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
    }catch(e){
	alert(e.name + ": " + e.message);
    }
    }
  }
}

export default Interpreter;
