import RInterpreter from "./RInterpreter";
import RomeBaseVisitor from "./RomeVisitor";
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
ErrorListener.prototype.syntaxError = function (recognizer, offendingSymbol, line, column, msg, e){
	console.log(msg);

};

class Interpreter {
  constructor(code, memArr, updateContentType) {
    this.code = code;
    this.memArr = memArr;
    this.updateContentType = updateContentType;
    this.start(code);
  }
  
  start(code) {
    var errors = [];
    var chars = new antlr4.InputStream(code);
    var lexer = new RomeLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new RomeParser(tokens);
    parser.buildParseTrees = true;
    parser.removeErrorListeners();
    var errorListener = new ErrorListener(errors);
    parser.addErrorListener(errorListener);

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
