import RInterpreter from "./RInterpreter";

var antlr4 = require("antlr4");
var RomeLexer = require("../lang/RomeLexer").RomeLexer;
var RomeParser = require("../lang/RomeParser").RomeParser;
var RomeErrorListener = require("./ErrorListener").RomeErrorListener;

class Interpreter {
  constructor(input) {
    this.input = input;
    this.start(input);
  }

  start(input) {
	  //console.log("TESTING");
    var chars = new antlr4.InputStream(input);
    var lexer = new RomeLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new RomeParser(tokens);
    parser.buildParseTrees = true;

    try {
      const tree = parser.r();
      var rInterpreter = new RInterpreter();
      antlr4.tree.ParseTreeWalker.DEFAULT.walk(rInterpreter, tree);
    } catch (re) {
	    console.log("ERROR");
      //console.log(re);
    }
  }
}



export default Interpreter;
