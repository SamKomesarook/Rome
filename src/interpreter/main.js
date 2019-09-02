var antlr4 = require('antlr4');
var RomeLexer = require('../lang/RomeLexer').RomeLexer;
var RomeParser = require('../lang/RomeParser').RomeParser;
var RomeListener = require('../lang/RomeListener').RomeListener;

function start(input) {
    var chars = new antlr4.InputStream(input);
    var lexer = new RomeLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new RomeParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.StartRule();

    var printer = new RomeListener();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);
}

start('Hello world');