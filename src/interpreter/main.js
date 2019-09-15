import RInterpreter from "./RInterpreter";

var antlr4 = require("antlr4");
var RomeLexer = require("../lang/RomeLexer").RomeLexer;
var RomeParser = require("../lang/RomeParser").RomeParser;
var RomeErrorListener = require("./ErrorListener").RomeErrorListener;

class Interpreter {
  constructor(code, memArr, updateContentType) {
    this.code = code;
    this.memArr = memArr;
    this.updateContentType = updateContentType;
    this.start(code);
  }
  
  start(code) {
    var chars = new antlr4.InputStream(code);
    var lexer = new RomeLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new RomeParser(tokens);
    parser.buildParseTrees = true;

    try {
      const tree = parser.r();
      if (tree.exception === null) {
        var rInterpreter = new RInterpreter(this.memArr, this.updateContentType);
        antlr4.tree.ParseTreeWalker.DEFAULT.walk(rInterpreter, tree);
      } else {
        console.log("Exception: ", tree.exception);
      }
    } catch (re) {
	    console.log(re);
    }
  }
}



export default Interpreter;
