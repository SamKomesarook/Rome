var antlr4 = require("antlr4");
var RomeLexer = require("../lang/RomeLexer").RomeLexer;
var RomeParser = require("../lang/RomeParser").RomeParser;

class Interpreter {
  constructor(input) {
    this.input = input;
    console.log(input);
  }

  start(input) {
    var chars = new antlr4.InputStream(input);
    var lexer = new RomeLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new RomeParser(tokens);
    parser.buildParseTrees = true;
  }
}

exports.Interpreter = Interpreter;
