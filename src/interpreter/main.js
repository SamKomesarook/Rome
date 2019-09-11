import RInterpreter from "./RInterpreter";
import ReadInterpreter from "./ReadInterpreter";

var antlr4 = require("antlr4");
var RomeLexer = require("../lang/RomeLexer").RomeLexer;
var RomeParser = require("../lang/RomeParser").RomeParser;

class Interpreter {
  constructor(input, memArr) {
    this.input = input;
    this.memArr = memArr;
    this.start(input);
  }

  start(input) {
    var chars = new antlr4.InputStream(input);
    var lexer = new RomeLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new RomeParser(tokens);
    parser.buildParseTrees = true;

    try {
      const tree = parser.r();
      var rInterpreter = new RInterpreter();
      antlr4.tree.ParseTreeWalker.DEFAULT.walk(rInterpreter, tree);

      var readInterpreter = new ReadInterpreter(this.memArr);
      antlr4.tree.ParseTreeWalker.DEFAULT.walk(readInterpreter, tree);
    } catch (re) {
      console.log(re);
    }
  }
}

export default Interpreter;
