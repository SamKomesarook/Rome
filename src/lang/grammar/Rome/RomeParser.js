// Generated from Rome.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var RomeListener = require('./RomeListener').RomeListener;
var RomeVisitor = require('./RomeVisitor').RomeVisitor;

var grammarFileName = "Rome.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00038\u00d5\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005",
    "\u0004&\n\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0005\u0006.\n\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0007\u00075\n\u0007\f\u0007\u000e\u0007",
    "8\u000b\u0007\u0003\u0007\u0007\u0007;\n\u0007\f\u0007\u000e\u0007>",
    "\u000b\u0007\u0003\u0007\u0003\u0007\u0007\u0007B\n\u0007\f\u0007\u000e",
    "\u0007E\u000b\u0007\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0005\tQ\n\t\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0005\nY\n\n\u0003\n\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f}\n\f\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0007\r\u008f\n\r\f\r\u000e",
    "\r\u0092\u000b\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0007\r\u009d\n\r\f\r\u000e\r\u00a0\u000b\r\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0007",
    "\r\u00ab\n\r\f\r\u000e\r\u00ae\u000b\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0005\r\u00b6\n\r\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0003\r\u0003\r\u0003\r\u0005\r\u00bf\n\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0003\r\u0005\r\u00c6\n\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r",
    "\u0007\r\u00cd\n\r\f\r\u000e\r\u00d0\u000b\r\u0003\r\u0005\r\u00d3\n",
    "\r\u0003\r\u0002\u0002\u000e\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0018\u0002\u0007\u0003\u0002\u0018\u0019\u0003\u0002\u001a",
    "\u001c\u0003\u0002$%\u0003\u0002\n\u000e\u0003\u0002 !\u0002\u00e8\u0002",
    "\u001a\u0003\u0002\u0002\u0002\u0004\u001c\u0003\u0002\u0002\u0002\u0006",
    "!\u0003\u0002\u0002\u0002\b)\u0003\u0002\u0002\u0002\n-\u0003\u0002",
    "\u0002\u0002\f/\u0003\u0002\u0002\u0002\u000eF\u0003\u0002\u0002\u0002",
    "\u0010I\u0003\u0002\u0002\u0002\u0012R\u0003\u0002\u0002\u0002\u0014",
    "]\u0003\u0002\u0002\u0002\u0016|\u0003\u0002\u0002\u0002\u0018\u00d2",
    "\u0003\u0002\u0002\u0002\u001a\u001b\u00077\u0002\u0002\u001b\u0003",
    "\u0003\u0002\u0002\u0002\u001c\u001d\u0007\u0015\u0002\u0002\u001d\u001e",
    "\u0007\u0003\u0002\u0002\u001e\u001f\u0007\u0016\u0002\u0002\u001f ",
    "\u0007\u0004\u0002\u0002 \u0005\u0003\u0002\u0002\u0002!\"\u0007\u0010",
    "\u0002\u0002\"%\u0007\u0003\u0002\u0002#&\u0005\n\u0006\u0002$&\u0005",
    "\u0002\u0002\u0002%#\u0003\u0002\u0002\u0002%$\u0003\u0002\u0002\u0002",
    "&\'\u0003\u0002\u0002\u0002\'(\u0007\u0004\u0002\u0002(\u0007\u0003",
    "\u0002\u0002\u0002)*\u00076\u0002\u0002*\t\u0003\u0002\u0002\u0002+",
    ".\u00075\u0002\u0002,.\u0005\u0006\u0004\u0002-+\u0003\u0002\u0002\u0002",
    "-,\u0003\u0002\u0002\u0002.\u000b\u0003\u0002\u0002\u0002/0\u0007\u0007",
    "\u0002\u000206\u00071\u0002\u000212\u0005\u0004\u0003\u000223\u0007",
    "1\u0002\u000235\u0003\u0002\u0002\u000241\u0003\u0002\u0002\u000258",
    "\u0003\u0002\u0002\u000264\u0003\u0002\u0002\u000267\u0003\u0002\u0002",
    "\u00027<\u0003\u0002\u0002\u000286\u0003\u0002\u0002\u00029;\u0005\u000e",
    "\b\u0002:9\u0003\u0002\u0002\u0002;>\u0003\u0002\u0002\u0002<:\u0003",
    "\u0002\u0002\u0002<=\u0003\u0002\u0002\u0002=?\u0003\u0002\u0002\u0002",
    "><\u0003\u0002\u0002\u0002?C\u0007\b\u0002\u0002@B\u00071\u0002\u0002",
    "A@\u0003\u0002\u0002\u0002BE\u0003\u0002\u0002\u0002CA\u0003\u0002\u0002",
    "\u0002CD\u0003\u0002\u0002\u0002D\r\u0003\u0002\u0002\u0002EC\u0003",
    "\u0002\u0002\u0002FG\u0005\u0018\r\u0002GH\u00071\u0002\u0002H\u000f",
    "\u0003\u0002\u0002\u0002IJ\t\u0002\u0002\u0002JK\u00072\u0002\u0002",
    "KL\t\u0003\u0002\u0002LP\u00072\u0002\u0002MQ\u0005\n\u0006\u0002NQ",
    "\u00077\u0002\u0002OQ\u0005\b\u0005\u0002PM\u0003\u0002\u0002\u0002",
    "PN\u0003\u0002\u0002\u0002PO\u0003\u0002\u0002\u0002Q\u0011\u0003\u0002",
    "\u0002\u0002RS\t\u0002\u0002\u0002ST\u00072\u0002\u0002TU\t\u0003\u0002",
    "\u0002UX\u00072\u0002\u0002VY\u0005\n\u0006\u0002WY\u00077\u0002\u0002",
    "XV\u0003\u0002\u0002\u0002XW\u0003\u0002\u0002\u0002YZ\u0003\u0002\u0002",
    "\u0002Z[\u00072\u0002\u0002[\\\t\u0004\u0002\u0002\\\u0013\u0003\u0002",
    "\u0002\u0002]^\u0005\u0016\f\u0002^_\u00071\u0002\u0002_\u0015\u0003",
    "\u0002\u0002\u0002`a\u0007\'\u0002\u0002ab\u0007\u0003\u0002\u0002b",
    "c\u0007.\u0002\u0002c}\u0007\u0004\u0002\u0002de\u0007(\u0002\u0002",
    "ef\u0007\u0003\u0002\u0002fg\u0007.\u0002\u0002g}\u0007\u0004\u0002",
    "\u0002hi\u0007)\u0002\u0002ij\u0007\u0003\u0002\u0002jk\u0007/\u0002",
    "\u0002k}\u0007\u0004\u0002\u0002lm\u0007*\u0002\u0002mn\u0007\u0003",
    "\u0002\u0002no\u00070\u0002\u0002o}\u0007\u0004\u0002\u0002pq\u0007",
    "+\u0002\u0002qr\u0007\u0003\u0002\u0002rs\u00073\u0002\u0002s}\u0007",
    "\u0004\u0002\u0002tu\u0007,\u0002\u0002uv\u0007\u0003\u0002\u0002vw",
    "\u00073\u0002\u0002w}\u0007\u0004\u0002\u0002xy\u0007-\u0002\u0002y",
    "z\u0007\u0003\u0002\u0002z{\u00073\u0002\u0002{}\u0007\u0004\u0002\u0002",
    "|`\u0003\u0002\u0002\u0002|d\u0003\u0002\u0002\u0002|h\u0003\u0002\u0002",
    "\u0002|l\u0003\u0002\u0002\u0002|p\u0003\u0002\u0002\u0002|t\u0003\u0002",
    "\u0002\u0002|x\u0003\u0002\u0002\u0002}\u0017\u0003\u0002\u0002\u0002",
    "~\u007f\u0007\t\u0002\u0002\u007f\u0080\u0007\u0003\u0002\u0002\u0080",
    "\u0081\t\u0005\u0002\u0002\u0081\u00d3\u0007\u0004\u0002\u0002\u0082",
    "\u00d3\u0007\u000f\u0002\u0002\u0083\u0084\u0007\u001f\u0002\u0002\u0084",
    "\u0085\u0007\u0003\u0002\u0002\u0085\u0086\t\u0006\u0002\u0002\u0086",
    "\u00d3\u0007\u0004\u0002\u0002\u0087\u0088\u0007\u0017\u0002\u0002\u0088",
    "\u0089\u0007\u0003\u0002\u0002\u0089\u008a\u0005\u0010\t\u0002\u008a",
    "\u008b\u0007\u0004\u0002\u0002\u008b\u008c\u0007\u0005\u0002\u0002\u008c",
    "\u0090\u00071\u0002\u0002\u008d\u008f\u0005\u000e\b\u0002\u008e\u008d",
    "\u0003\u0002\u0002\u0002\u008f\u0092\u0003\u0002\u0002\u0002\u0090\u008e",
    "\u0003\u0002\u0002\u0002\u0090\u0091\u0003\u0002\u0002\u0002\u0091\u0093",
    "\u0003\u0002\u0002\u0002\u0092\u0090\u0003\u0002\u0002\u0002\u0093\u0094",
    "\u0007\u0006\u0002\u0002\u0094\u00d3\u0003\u0002\u0002\u0002\u0095\u0096",
    "\u0007\"\u0002\u0002\u0096\u0097\u0007\u0003\u0002\u0002\u0097\u0098",
    "\u0005\n\u0006\u0002\u0098\u0099\u0007\u0004\u0002\u0002\u0099\u009a",
    "\u0007\u0005\u0002\u0002\u009a\u009e\u00071\u0002\u0002\u009b\u009d",
    "\u0005\u000e\b\u0002\u009c\u009b\u0003\u0002\u0002\u0002\u009d\u00a0",
    "\u0003\u0002\u0002\u0002\u009e\u009c\u0003\u0002\u0002\u0002\u009e\u009f",
    "\u0003\u0002\u0002\u0002\u009f\u00a1\u0003\u0002\u0002\u0002\u00a0\u009e",
    "\u0003\u0002\u0002\u0002\u00a1\u00a2\u0007\u0006\u0002\u0002\u00a2\u00d3",
    "\u0003\u0002\u0002\u0002\u00a3\u00a4\u0007#\u0002\u0002\u00a4\u00a5",
    "\u0007\u0003\u0002\u0002\u00a5\u00a6\u0005\u0012\n\u0002\u00a6\u00a7",
    "\u0007\u0004\u0002\u0002\u00a7\u00a8\u0007\u0005\u0002\u0002\u00a8\u00ac",
    "\u00071\u0002\u0002\u00a9\u00ab\u0005\u000e\b\u0002\u00aa\u00a9\u0003",
    "\u0002\u0002\u0002\u00ab\u00ae\u0003\u0002\u0002\u0002\u00ac\u00aa\u0003",
    "\u0002\u0002\u0002\u00ac\u00ad\u0003\u0002\u0002\u0002\u00ad\u00af\u0003",
    "\u0002\u0002\u0002\u00ae\u00ac\u0003\u0002\u0002\u0002\u00af\u00b0\u0007",
    "\u0006\u0002\u0002\u00b0\u00d3\u0003\u0002\u0002\u0002\u00b1\u00b2\u0007",
    "\u0013\u0002\u0002\u00b2\u00b5\u0007\u0003\u0002\u0002\u00b3\u00b6\u0005",
    "\n\u0006\u0002\u00b4\u00b6\u00077\u0002\u0002\u00b5\u00b3\u0003\u0002",
    "\u0002\u0002\u00b5\u00b4\u0003\u0002\u0002\u0002\u00b6\u00b7\u0003\u0002",
    "\u0002\u0002\u00b7\u00d3\u0007\u0004\u0002\u0002\u00b8\u00d3\u0007\u0011",
    "\u0002\u0002\u00b9\u00ba\u0007\u0012\u0002\u0002\u00ba\u00be\u0007\u0003",
    "\u0002\u0002\u00bb\u00bf\u0005\n\u0006\u0002\u00bc\u00bf\u0005\b\u0005",
    "\u0002\u00bd\u00bf\u00077\u0002\u0002\u00be\u00bb\u0003\u0002\u0002",
    "\u0002\u00be\u00bc\u0003\u0002\u0002\u0002\u00be\u00bd\u0003\u0002\u0002",
    "\u0002\u00bf\u00c0\u0003\u0002\u0002\u0002\u00c0\u00d3\u0007\u0004\u0002",
    "\u0002\u00c1\u00c2\u0007\u0014\u0002\u0002\u00c2\u00c5\u0007\u0003\u0002",
    "\u0002\u00c3\u00c6\u00077\u0002\u0002\u00c4\u00c6\u0005\u0006\u0004",
    "\u0002\u00c5\u00c3\u0003\u0002\u0002\u0002\u00c5\u00c4\u0003\u0002\u0002",
    "\u0002\u00c6\u00c7\u0003\u0002\u0002\u0002\u00c7\u00d3\u0007\u0004\u0002",
    "\u0002\u00c8\u00c9\u0007&\u0002\u0002\u00c9\u00ca\u0007\u0005\u0002",
    "\u0002\u00ca\u00ce\u00071\u0002\u0002\u00cb\u00cd\u0005\u0014\u000b",
    "\u0002\u00cc\u00cb\u0003\u0002\u0002\u0002\u00cd\u00d0\u0003\u0002\u0002",
    "\u0002\u00ce\u00cc\u0003\u0002\u0002\u0002\u00ce\u00cf\u0003\u0002\u0002",
    "\u0002\u00cf\u00d1\u0003\u0002\u0002\u0002\u00d0\u00ce\u0003\u0002\u0002",
    "\u0002\u00d1\u00d3\u0007\u0006\u0002\u0002\u00d2~\u0003\u0002\u0002",
    "\u0002\u00d2\u0082\u0003\u0002\u0002\u0002\u00d2\u0083\u0003\u0002\u0002",
    "\u0002\u00d2\u0087\u0003\u0002\u0002\u0002\u00d2\u0095\u0003\u0002\u0002",
    "\u0002\u00d2\u00a3\u0003\u0002\u0002\u0002\u00d2\u00b1\u0003\u0002\u0002",
    "\u0002\u00d2\u00b8\u0003\u0002\u0002\u0002\u00d2\u00b9\u0003\u0002\u0002",
    "\u0002\u00d2\u00c1\u0003\u0002\u0002\u0002\u00d2\u00c8\u0003\u0002\u0002",
    "\u0002\u00d3\u0019\u0003\u0002\u0002\u0002\u0012%-6<CPX|\u0090\u009e",
    "\u00ac\u00b5\u00be\u00c5\u00ce\u00d2"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", "'{'", "'}'", "'start'", "'end'", 
                     "'set'", "'integer'", "'long'", "'character'", "'string'", 
                     "'float'", "'free'", "'memory'", "'keyboardRead'", 
                     "'consoleWrite'", "'write'", "'name'", "'import'", 
                     "'IO'", "'if'", "'is'", "'not'", "'equal'", "'less'", 
                     "'greater'", "'and'", "'or'", "'move'", "'next'", "'last'", 
                     "'loop'", "'while'", "'add'", "'minus'", "'style'", 
                     "'paint'", "'text_color'", "'text_size'", "'text_align'", 
                     "'bold'", "'italic'", "'underline'", null, null, null, 
                     "'\n'", "' '" ];

var symbolicNames = [ null, null, null, null, null, "START", "END", "SET", 
                      "INT", "LONG", "CHAR", "STR", "FLO", "FREE", "MEM", 
                      "KREAD", "SWRITE", "WRITE", "NAME", "IMP", "IO", "IF", 
                      "IS", "NOT", "EQL", "LESS", "GRE", "AND", "OR", "MOVE", 
                      "RIGHT", "LEFT", "LOOP", "WHILE", "ADD", "MINUS", 
                      "STYLE", "PAINT", "TEXT_COLOR", "TEXT_SIZE", "TEXT_ALIGN", 
                      "BOLD", "ITALIC", "UNDERLINE", "COLOR", "SIZE", "ALIGN_PROP", 
                      "NEWLINE", "WS", "BOOLEAN_PROP", "IDENTIFIER", "NUMBER", 
                      "FLOAT", "STRLIT", "ONE_LINE_COMMENT" ];

var ruleNames =  [ "strargs", "imp", "mem", "floatargs", "intargs", "r", 
                   "expressions", "conditional", "whileConditional", "stylingExpressions", 
                   "stylingExpression", "expression" ];

function RomeParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

RomeParser.prototype = Object.create(antlr4.Parser.prototype);
RomeParser.prototype.constructor = RomeParser;

Object.defineProperty(RomeParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

RomeParser.EOF = antlr4.Token.EOF;
RomeParser.T__0 = 1;
RomeParser.T__1 = 2;
RomeParser.T__2 = 3;
RomeParser.T__3 = 4;
RomeParser.START = 5;
RomeParser.END = 6;
RomeParser.SET = 7;
RomeParser.INT = 8;
RomeParser.LONG = 9;
RomeParser.CHAR = 10;
RomeParser.STR = 11;
RomeParser.FLO = 12;
RomeParser.FREE = 13;
RomeParser.MEM = 14;
RomeParser.KREAD = 15;
RomeParser.SWRITE = 16;
RomeParser.WRITE = 17;
RomeParser.NAME = 18;
RomeParser.IMP = 19;
RomeParser.IO = 20;
RomeParser.IF = 21;
RomeParser.IS = 22;
RomeParser.NOT = 23;
RomeParser.EQL = 24;
RomeParser.LESS = 25;
RomeParser.GRE = 26;
RomeParser.AND = 27;
RomeParser.OR = 28;
RomeParser.MOVE = 29;
RomeParser.RIGHT = 30;
RomeParser.LEFT = 31;
RomeParser.LOOP = 32;
RomeParser.WHILE = 33;
RomeParser.ADD = 34;
RomeParser.MINUS = 35;
RomeParser.STYLE = 36;
RomeParser.PAINT = 37;
RomeParser.TEXT_COLOR = 38;
RomeParser.TEXT_SIZE = 39;
RomeParser.TEXT_ALIGN = 40;
RomeParser.BOLD = 41;
RomeParser.ITALIC = 42;
RomeParser.UNDERLINE = 43;
RomeParser.COLOR = 44;
RomeParser.SIZE = 45;
RomeParser.ALIGN_PROP = 46;
RomeParser.NEWLINE = 47;
RomeParser.WS = 48;
RomeParser.BOOLEAN_PROP = 49;
RomeParser.IDENTIFIER = 50;
RomeParser.NUMBER = 51;
RomeParser.FLOAT = 52;
RomeParser.STRLIT = 53;
RomeParser.ONE_LINE_COMMENT = 54;

RomeParser.RULE_strargs = 0;
RomeParser.RULE_imp = 1;
RomeParser.RULE_mem = 2;
RomeParser.RULE_floatargs = 3;
RomeParser.RULE_intargs = 4;
RomeParser.RULE_r = 5;
RomeParser.RULE_expressions = 6;
RomeParser.RULE_conditional = 7;
RomeParser.RULE_whileConditional = 8;
RomeParser.RULE_stylingExpressions = 9;
RomeParser.RULE_stylingExpression = 10;
RomeParser.RULE_expression = 11;


function StrargsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RomeParser.RULE_strargs;
    return this;
}

StrargsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StrargsContext.prototype.constructor = StrargsContext;


 
StrargsContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function StrContext(parser, ctx) {
	StrargsContext.call(this, parser);
    StrargsContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StrContext.prototype = Object.create(StrargsContext.prototype);
StrContext.prototype.constructor = StrContext;

RomeParser.StrContext = StrContext;

StrContext.prototype.STRLIT = function() {
    return this.getToken(RomeParser.STRLIT, 0);
};
StrContext.prototype.enterRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.enterStr(this);
	}
};

StrContext.prototype.exitRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.exitStr(this);
	}
};

StrContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RomeVisitor ) {
        return visitor.visitStr(this);
    } else {
        return visitor.visitChildren(this);
    }
};



RomeParser.StrargsContext = StrargsContext;

RomeParser.prototype.strargs = function() {

    var localctx = new StrargsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, RomeParser.RULE_strargs);
    try {
        localctx = new StrContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 24;
        this.match(RomeParser.STRLIT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ImpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RomeParser.RULE_imp;
    return this;
}

ImpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ImpContext.prototype.constructor = ImpContext;


 
ImpContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function IoContext(parser, ctx) {
	ImpContext.call(this, parser);
    ImpContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IoContext.prototype = Object.create(ImpContext.prototype);
IoContext.prototype.constructor = IoContext;

RomeParser.IoContext = IoContext;

IoContext.prototype.IMP = function() {
    return this.getToken(RomeParser.IMP, 0);
};

IoContext.prototype.IO = function() {
    return this.getToken(RomeParser.IO, 0);
};
IoContext.prototype.enterRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.enterIo(this);
	}
};

IoContext.prototype.exitRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.exitIo(this);
	}
};

IoContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RomeVisitor ) {
        return visitor.visitIo(this);
    } else {
        return visitor.visitChildren(this);
    }
};



RomeParser.ImpContext = ImpContext;

RomeParser.prototype.imp = function() {

    var localctx = new ImpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, RomeParser.RULE_imp);
    try {
        localctx = new IoContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 26;
        this.match(RomeParser.IMP);
        this.state = 27;
        this.match(RomeParser.T__0);
        this.state = 28;
        this.match(RomeParser.IO);
        this.state = 29;
        this.match(RomeParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RomeParser.RULE_mem;
    return this;
}

MemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MemContext.prototype.constructor = MemContext;

MemContext.prototype.MEM = function() {
    return this.getToken(RomeParser.MEM, 0);
};

MemContext.prototype.intargs = function() {
    return this.getTypedRuleContext(IntargsContext,0);
};

MemContext.prototype.strargs = function() {
    return this.getTypedRuleContext(StrargsContext,0);
};

MemContext.prototype.enterRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.enterMem(this);
	}
};

MemContext.prototype.exitRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.exitMem(this);
	}
};

MemContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RomeVisitor ) {
        return visitor.visitMem(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RomeParser.MemContext = MemContext;

RomeParser.prototype.mem = function() {

    var localctx = new MemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, RomeParser.RULE_mem);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 31;
        this.match(RomeParser.MEM);
        this.state = 32;
        this.match(RomeParser.T__0);
        this.state = 35;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RomeParser.MEM:
        case RomeParser.NUMBER:
            this.state = 33;
            this.intargs();
            break;
        case RomeParser.STRLIT:
            this.state = 34;
            this.strargs();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 37;
        this.match(RomeParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FloatargsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RomeParser.RULE_floatargs;
    return this;
}

FloatargsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FloatargsContext.prototype.constructor = FloatargsContext;


 
FloatargsContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function FloatContext(parser, ctx) {
	FloatargsContext.call(this, parser);
    FloatargsContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FloatContext.prototype = Object.create(FloatargsContext.prototype);
FloatContext.prototype.constructor = FloatContext;

RomeParser.FloatContext = FloatContext;

FloatContext.prototype.FLOAT = function() {
    return this.getToken(RomeParser.FLOAT, 0);
};
FloatContext.prototype.enterRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.enterFloat(this);
	}
};

FloatContext.prototype.exitRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.exitFloat(this);
	}
};

FloatContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RomeVisitor ) {
        return visitor.visitFloat(this);
    } else {
        return visitor.visitChildren(this);
    }
};



RomeParser.FloatargsContext = FloatargsContext;

RomeParser.prototype.floatargs = function() {

    var localctx = new FloatargsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, RomeParser.RULE_floatargs);
    try {
        localctx = new FloatContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 39;
        this.match(RomeParser.FLOAT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IntargsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RomeParser.RULE_intargs;
    return this;
}

IntargsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IntargsContext.prototype.constructor = IntargsContext;


 
IntargsContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function MemoryContext(parser, ctx) {
	IntargsContext.call(this, parser);
    IntargsContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MemoryContext.prototype = Object.create(IntargsContext.prototype);
MemoryContext.prototype.constructor = MemoryContext;

RomeParser.MemoryContext = MemoryContext;

MemoryContext.prototype.mem = function() {
    return this.getTypedRuleContext(MemContext,0);
};
MemoryContext.prototype.enterRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.enterMemory(this);
	}
};

MemoryContext.prototype.exitRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.exitMemory(this);
	}
};

MemoryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RomeVisitor ) {
        return visitor.visitMemory(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NumContext(parser, ctx) {
	IntargsContext.call(this, parser);
    IntargsContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumContext.prototype = Object.create(IntargsContext.prototype);
NumContext.prototype.constructor = NumContext;

RomeParser.NumContext = NumContext;

NumContext.prototype.NUMBER = function() {
    return this.getToken(RomeParser.NUMBER, 0);
};
NumContext.prototype.enterRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.enterNum(this);
	}
};

NumContext.prototype.exitRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.exitNum(this);
	}
};

NumContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RomeVisitor ) {
        return visitor.visitNum(this);
    } else {
        return visitor.visitChildren(this);
    }
};



RomeParser.IntargsContext = IntargsContext;

RomeParser.prototype.intargs = function() {

    var localctx = new IntargsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, RomeParser.RULE_intargs);
    try {
        this.state = 43;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RomeParser.NUMBER:
            localctx = new NumContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 41;
            this.match(RomeParser.NUMBER);
            break;
        case RomeParser.MEM:
            localctx = new MemoryContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 42;
            this.mem();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RomeParser.RULE_r;
    return this;
}

RContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RContext.prototype.constructor = RContext;

RContext.prototype.START = function() {
    return this.getToken(RomeParser.START, 0);
};

RContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RomeParser.NEWLINE);
    } else {
        return this.getToken(RomeParser.NEWLINE, i);
    }
};


RContext.prototype.END = function() {
    return this.getToken(RomeParser.END, 0);
};

RContext.prototype.imp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ImpContext);
    } else {
        return this.getTypedRuleContext(ImpContext,i);
    }
};

RContext.prototype.expressions = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionsContext);
    } else {
        return this.getTypedRuleContext(ExpressionsContext,i);
    }
};

RContext.prototype.enterRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.enterR(this);
	}
};

RContext.prototype.exitRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.exitR(this);
	}
};

RContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RomeVisitor ) {
        return visitor.visitR(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RomeParser.RContext = RContext;

RomeParser.prototype.r = function() {

    var localctx = new RContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, RomeParser.RULE_r);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 45;
        this.match(RomeParser.START);
        this.state = 46;
        this.match(RomeParser.NEWLINE);
        this.state = 52;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RomeParser.IMP) {
            this.state = 47;
            this.imp();
            this.state = 48;
            this.match(RomeParser.NEWLINE);
            this.state = 54;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 58;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 7)) & ~0x1f) == 0 && ((1 << (_la - 7)) & ((1 << (RomeParser.SET - 7)) | (1 << (RomeParser.FREE - 7)) | (1 << (RomeParser.KREAD - 7)) | (1 << (RomeParser.SWRITE - 7)) | (1 << (RomeParser.WRITE - 7)) | (1 << (RomeParser.NAME - 7)) | (1 << (RomeParser.IF - 7)) | (1 << (RomeParser.MOVE - 7)) | (1 << (RomeParser.LOOP - 7)) | (1 << (RomeParser.WHILE - 7)) | (1 << (RomeParser.STYLE - 7)))) !== 0)) {
            this.state = 55;
            this.expressions();
            this.state = 60;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 61;
        this.match(RomeParser.END);
        this.state = 65;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RomeParser.NEWLINE) {
            this.state = 62;
            this.match(RomeParser.NEWLINE);
            this.state = 67;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExpressionsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RomeParser.RULE_expressions;
    return this;
}

ExpressionsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionsContext.prototype.constructor = ExpressionsContext;

ExpressionsContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ExpressionsContext.prototype.NEWLINE = function() {
    return this.getToken(RomeParser.NEWLINE, 0);
};

ExpressionsContext.prototype.enterRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.enterExpressions(this);
	}
};

ExpressionsContext.prototype.exitRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.exitExpressions(this);
	}
};

ExpressionsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RomeVisitor ) {
        return visitor.visitExpressions(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RomeParser.ExpressionsContext = ExpressionsContext;

RomeParser.prototype.expressions = function() {

    var localctx = new ExpressionsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, RomeParser.RULE_expressions);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 68;
        this.expression();
        this.state = 69;
        this.match(RomeParser.NEWLINE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ConditionalContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RomeParser.RULE_conditional;
    return this;
}

ConditionalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionalContext.prototype.constructor = ConditionalContext;


 
ConditionalContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function CondContext(parser, ctx) {
	ConditionalContext.call(this, parser);
    ConditionalContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CondContext.prototype = Object.create(ConditionalContext.prototype);
CondContext.prototype.constructor = CondContext;

RomeParser.CondContext = CondContext;

CondContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RomeParser.WS);
    } else {
        return this.getToken(RomeParser.WS, i);
    }
};


CondContext.prototype.IS = function() {
    return this.getToken(RomeParser.IS, 0);
};

CondContext.prototype.NOT = function() {
    return this.getToken(RomeParser.NOT, 0);
};

CondContext.prototype.LESS = function() {
    return this.getToken(RomeParser.LESS, 0);
};

CondContext.prototype.GRE = function() {
    return this.getToken(RomeParser.GRE, 0);
};

CondContext.prototype.EQL = function() {
    return this.getToken(RomeParser.EQL, 0);
};

CondContext.prototype.intargs = function() {
    return this.getTypedRuleContext(IntargsContext,0);
};

CondContext.prototype.STRLIT = function() {
    return this.getToken(RomeParser.STRLIT, 0);
};

CondContext.prototype.floatargs = function() {
    return this.getTypedRuleContext(FloatargsContext,0);
};
CondContext.prototype.enterRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.enterCond(this);
	}
};

CondContext.prototype.exitRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.exitCond(this);
	}
};

CondContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RomeVisitor ) {
        return visitor.visitCond(this);
    } else {
        return visitor.visitChildren(this);
    }
};



RomeParser.ConditionalContext = ConditionalContext;

RomeParser.prototype.conditional = function() {

    var localctx = new ConditionalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, RomeParser.RULE_conditional);
    var _la = 0; // Token type
    try {
        localctx = new CondContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 71;
        _la = this._input.LA(1);
        if(!(_la===RomeParser.IS || _la===RomeParser.NOT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 72;
        this.match(RomeParser.WS);
        this.state = 73;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RomeParser.EQL) | (1 << RomeParser.LESS) | (1 << RomeParser.GRE))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 74;
        this.match(RomeParser.WS);
        this.state = 78;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RomeParser.MEM:
        case RomeParser.NUMBER:
            this.state = 75;
            this.intargs();
            break;
        case RomeParser.STRLIT:
            this.state = 76;
            this.match(RomeParser.STRLIT);
            break;
        case RomeParser.FLOAT:
            this.state = 77;
            this.floatargs();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function WhileConditionalContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RomeParser.RULE_whileConditional;
    return this;
}

WhileConditionalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhileConditionalContext.prototype.constructor = WhileConditionalContext;


 
WhileConditionalContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function WhileCondContext(parser, ctx) {
	WhileConditionalContext.call(this, parser);
    WhileConditionalContext.prototype.copyFrom.call(this, ctx);
    return this;
}

WhileCondContext.prototype = Object.create(WhileConditionalContext.prototype);
WhileCondContext.prototype.constructor = WhileCondContext;

RomeParser.WhileCondContext = WhileCondContext;

WhileCondContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RomeParser.WS);
    } else {
        return this.getToken(RomeParser.WS, i);
    }
};


WhileCondContext.prototype.IS = function() {
    return this.getToken(RomeParser.IS, 0);
};

WhileCondContext.prototype.NOT = function() {
    return this.getToken(RomeParser.NOT, 0);
};

WhileCondContext.prototype.LESS = function() {
    return this.getToken(RomeParser.LESS, 0);
};

WhileCondContext.prototype.GRE = function() {
    return this.getToken(RomeParser.GRE, 0);
};

WhileCondContext.prototype.EQL = function() {
    return this.getToken(RomeParser.EQL, 0);
};

WhileCondContext.prototype.ADD = function() {
    return this.getToken(RomeParser.ADD, 0);
};

WhileCondContext.prototype.MINUS = function() {
    return this.getToken(RomeParser.MINUS, 0);
};

WhileCondContext.prototype.intargs = function() {
    return this.getTypedRuleContext(IntargsContext,0);
};

WhileCondContext.prototype.STRLIT = function() {
    return this.getToken(RomeParser.STRLIT, 0);
};
WhileCondContext.prototype.enterRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.enterWhileCond(this);
	}
};

WhileCondContext.prototype.exitRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.exitWhileCond(this);
	}
};

WhileCondContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RomeVisitor ) {
        return visitor.visitWhileCond(this);
    } else {
        return visitor.visitChildren(this);
    }
};



RomeParser.WhileConditionalContext = WhileConditionalContext;

RomeParser.prototype.whileConditional = function() {

    var localctx = new WhileConditionalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, RomeParser.RULE_whileConditional);
    var _la = 0; // Token type
    try {
        localctx = new WhileCondContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 80;
        _la = this._input.LA(1);
        if(!(_la===RomeParser.IS || _la===RomeParser.NOT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 81;
        this.match(RomeParser.WS);
        this.state = 82;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RomeParser.EQL) | (1 << RomeParser.LESS) | (1 << RomeParser.GRE))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 83;
        this.match(RomeParser.WS);
        this.state = 86;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RomeParser.MEM:
        case RomeParser.NUMBER:
            this.state = 84;
            this.intargs();
            break;
        case RomeParser.STRLIT:
            this.state = 85;
            this.match(RomeParser.STRLIT);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 88;
        this.match(RomeParser.WS);
        this.state = 89;
        _la = this._input.LA(1);
        if(!(_la===RomeParser.ADD || _la===RomeParser.MINUS)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StylingExpressionsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RomeParser.RULE_stylingExpressions;
    return this;
}

StylingExpressionsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StylingExpressionsContext.prototype.constructor = StylingExpressionsContext;

StylingExpressionsContext.prototype.stylingExpression = function() {
    return this.getTypedRuleContext(StylingExpressionContext,0);
};

StylingExpressionsContext.prototype.NEWLINE = function() {
    return this.getToken(RomeParser.NEWLINE, 0);
};

StylingExpressionsContext.prototype.enterRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.enterStylingExpressions(this);
	}
};

StylingExpressionsContext.prototype.exitRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.exitStylingExpressions(this);
	}
};

StylingExpressionsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RomeVisitor ) {
        return visitor.visitStylingExpressions(this);
    } else {
        return visitor.visitChildren(this);
    }
};




RomeParser.StylingExpressionsContext = StylingExpressionsContext;

RomeParser.prototype.stylingExpressions = function() {

    var localctx = new StylingExpressionsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, RomeParser.RULE_stylingExpressions);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 91;
        this.stylingExpression();
        this.state = 92;
        this.match(RomeParser.NEWLINE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StylingExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RomeParser.RULE_stylingExpression;
    return this;
}

StylingExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StylingExpressionContext.prototype.constructor = StylingExpressionContext;


 
StylingExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ItalicContext(parser, ctx) {
	StylingExpressionContext.call(this, parser);
    StylingExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ItalicContext.prototype = Object.create(StylingExpressionContext.prototype);
ItalicContext.prototype.constructor = ItalicContext;

RomeParser.ItalicContext = ItalicContext;

ItalicContext.prototype.ITALIC = function() {
    return this.getToken(RomeParser.ITALIC, 0);
};

ItalicContext.prototype.BOOLEAN_PROP = function() {
    return this.getToken(RomeParser.BOOLEAN_PROP, 0);
};
ItalicContext.prototype.enterRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.enterItalic(this);
	}
};

ItalicContext.prototype.exitRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.exitItalic(this);
	}
};

ItalicContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RomeVisitor ) {
        return visitor.visitItalic(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TextAlignContext(parser, ctx) {
	StylingExpressionContext.call(this, parser);
    StylingExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TextAlignContext.prototype = Object.create(StylingExpressionContext.prototype);
TextAlignContext.prototype.constructor = TextAlignContext;

RomeParser.TextAlignContext = TextAlignContext;

TextAlignContext.prototype.TEXT_ALIGN = function() {
    return this.getToken(RomeParser.TEXT_ALIGN, 0);
};

TextAlignContext.prototype.ALIGN_PROP = function() {
    return this.getToken(RomeParser.ALIGN_PROP, 0);
};
TextAlignContext.prototype.enterRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.enterTextAlign(this);
	}
};

TextAlignContext.prototype.exitRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.exitTextAlign(this);
	}
};

TextAlignContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RomeVisitor ) {
        return visitor.visitTextAlign(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function UnderlineContext(parser, ctx) {
	StylingExpressionContext.call(this, parser);
    StylingExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnderlineContext.prototype = Object.create(StylingExpressionContext.prototype);
UnderlineContext.prototype.constructor = UnderlineContext;

RomeParser.UnderlineContext = UnderlineContext;

UnderlineContext.prototype.UNDERLINE = function() {
    return this.getToken(RomeParser.UNDERLINE, 0);
};

UnderlineContext.prototype.BOOLEAN_PROP = function() {
    return this.getToken(RomeParser.BOOLEAN_PROP, 0);
};
UnderlineContext.prototype.enterRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.enterUnderline(this);
	}
};

UnderlineContext.prototype.exitRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.exitUnderline(this);
	}
};

UnderlineContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RomeVisitor ) {
        return visitor.visitUnderline(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TextSizeContext(parser, ctx) {
	StylingExpressionContext.call(this, parser);
    StylingExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TextSizeContext.prototype = Object.create(StylingExpressionContext.prototype);
TextSizeContext.prototype.constructor = TextSizeContext;

RomeParser.TextSizeContext = TextSizeContext;

TextSizeContext.prototype.TEXT_SIZE = function() {
    return this.getToken(RomeParser.TEXT_SIZE, 0);
};

TextSizeContext.prototype.SIZE = function() {
    return this.getToken(RomeParser.SIZE, 0);
};
TextSizeContext.prototype.enterRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.enterTextSize(this);
	}
};

TextSizeContext.prototype.exitRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.exitTextSize(this);
	}
};

TextSizeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RomeVisitor ) {
        return visitor.visitTextSize(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BoldContext(parser, ctx) {
	StylingExpressionContext.call(this, parser);
    StylingExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BoldContext.prototype = Object.create(StylingExpressionContext.prototype);
BoldContext.prototype.constructor = BoldContext;

RomeParser.BoldContext = BoldContext;

BoldContext.prototype.BOLD = function() {
    return this.getToken(RomeParser.BOLD, 0);
};

BoldContext.prototype.BOOLEAN_PROP = function() {
    return this.getToken(RomeParser.BOOLEAN_PROP, 0);
};
BoldContext.prototype.enterRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.enterBold(this);
	}
};

BoldContext.prototype.exitRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.exitBold(this);
	}
};

BoldContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RomeVisitor ) {
        return visitor.visitBold(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PaintContext(parser, ctx) {
	StylingExpressionContext.call(this, parser);
    StylingExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PaintContext.prototype = Object.create(StylingExpressionContext.prototype);
PaintContext.prototype.constructor = PaintContext;

RomeParser.PaintContext = PaintContext;

PaintContext.prototype.PAINT = function() {
    return this.getToken(RomeParser.PAINT, 0);
};

PaintContext.prototype.COLOR = function() {
    return this.getToken(RomeParser.COLOR, 0);
};
PaintContext.prototype.enterRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.enterPaint(this);
	}
};

PaintContext.prototype.exitRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.exitPaint(this);
	}
};

PaintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RomeVisitor ) {
        return visitor.visitPaint(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TextColorContext(parser, ctx) {
	StylingExpressionContext.call(this, parser);
    StylingExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TextColorContext.prototype = Object.create(StylingExpressionContext.prototype);
TextColorContext.prototype.constructor = TextColorContext;

RomeParser.TextColorContext = TextColorContext;

TextColorContext.prototype.TEXT_COLOR = function() {
    return this.getToken(RomeParser.TEXT_COLOR, 0);
};

TextColorContext.prototype.COLOR = function() {
    return this.getToken(RomeParser.COLOR, 0);
};
TextColorContext.prototype.enterRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.enterTextColor(this);
	}
};

TextColorContext.prototype.exitRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.exitTextColor(this);
	}
};

TextColorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RomeVisitor ) {
        return visitor.visitTextColor(this);
    } else {
        return visitor.visitChildren(this);
    }
};



RomeParser.StylingExpressionContext = StylingExpressionContext;

RomeParser.prototype.stylingExpression = function() {

    var localctx = new StylingExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, RomeParser.RULE_stylingExpression);
    try {
        this.state = 122;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RomeParser.PAINT:
            localctx = new PaintContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 94;
            this.match(RomeParser.PAINT);
            this.state = 95;
            this.match(RomeParser.T__0);
            this.state = 96;
            this.match(RomeParser.COLOR);
            this.state = 97;
            this.match(RomeParser.T__1);
            break;
        case RomeParser.TEXT_COLOR:
            localctx = new TextColorContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 98;
            this.match(RomeParser.TEXT_COLOR);
            this.state = 99;
            this.match(RomeParser.T__0);
            this.state = 100;
            this.match(RomeParser.COLOR);
            this.state = 101;
            this.match(RomeParser.T__1);
            break;
        case RomeParser.TEXT_SIZE:
            localctx = new TextSizeContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 102;
            this.match(RomeParser.TEXT_SIZE);
            this.state = 103;
            this.match(RomeParser.T__0);
            this.state = 104;
            this.match(RomeParser.SIZE);
            this.state = 105;
            this.match(RomeParser.T__1);
            break;
        case RomeParser.TEXT_ALIGN:
            localctx = new TextAlignContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 106;
            this.match(RomeParser.TEXT_ALIGN);
            this.state = 107;
            this.match(RomeParser.T__0);
            this.state = 108;
            this.match(RomeParser.ALIGN_PROP);
            this.state = 109;
            this.match(RomeParser.T__1);
            break;
        case RomeParser.BOLD:
            localctx = new BoldContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 110;
            this.match(RomeParser.BOLD);
            this.state = 111;
            this.match(RomeParser.T__0);
            this.state = 112;
            this.match(RomeParser.BOOLEAN_PROP);
            this.state = 113;
            this.match(RomeParser.T__1);
            break;
        case RomeParser.ITALIC:
            localctx = new ItalicContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 114;
            this.match(RomeParser.ITALIC);
            this.state = 115;
            this.match(RomeParser.T__0);
            this.state = 116;
            this.match(RomeParser.BOOLEAN_PROP);
            this.state = 117;
            this.match(RomeParser.T__1);
            break;
        case RomeParser.UNDERLINE:
            localctx = new UnderlineContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 118;
            this.match(RomeParser.UNDERLINE);
            this.state = 119;
            this.match(RomeParser.T__0);
            this.state = 120;
            this.match(RomeParser.BOOLEAN_PROP);
            this.state = 121;
            this.match(RomeParser.T__1);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RomeParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function LoopContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LoopContext.prototype = Object.create(ExpressionContext.prototype);
LoopContext.prototype.constructor = LoopContext;

RomeParser.LoopContext = LoopContext;

LoopContext.prototype.LOOP = function() {
    return this.getToken(RomeParser.LOOP, 0);
};

LoopContext.prototype.intargs = function() {
    return this.getTypedRuleContext(IntargsContext,0);
};

LoopContext.prototype.NEWLINE = function() {
    return this.getToken(RomeParser.NEWLINE, 0);
};

LoopContext.prototype.expressions = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionsContext);
    } else {
        return this.getTypedRuleContext(ExpressionsContext,i);
    }
};
LoopContext.prototype.enterRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.enterLoop(this);
	}
};

LoopContext.prototype.exitRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.exitLoop(this);
	}
};

LoopContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RomeVisitor ) {
        return visitor.visitLoop(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function WriteContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

WriteContext.prototype = Object.create(ExpressionContext.prototype);
WriteContext.prototype.constructor = WriteContext;

RomeParser.WriteContext = WriteContext;

WriteContext.prototype.WRITE = function() {
    return this.getToken(RomeParser.WRITE, 0);
};

WriteContext.prototype.intargs = function() {
    return this.getTypedRuleContext(IntargsContext,0);
};

WriteContext.prototype.STRLIT = function() {
    return this.getToken(RomeParser.STRLIT, 0);
};
WriteContext.prototype.enterRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.enterWrite(this);
	}
};

WriteContext.prototype.exitRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.exitWrite(this);
	}
};

WriteContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RomeVisitor ) {
        return visitor.visitWrite(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SetContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SetContext.prototype = Object.create(ExpressionContext.prototype);
SetContext.prototype.constructor = SetContext;

RomeParser.SetContext = SetContext;

SetContext.prototype.SET = function() {
    return this.getToken(RomeParser.SET, 0);
};

SetContext.prototype.INT = function() {
    return this.getToken(RomeParser.INT, 0);
};

SetContext.prototype.LONG = function() {
    return this.getToken(RomeParser.LONG, 0);
};

SetContext.prototype.CHAR = function() {
    return this.getToken(RomeParser.CHAR, 0);
};

SetContext.prototype.STR = function() {
    return this.getToken(RomeParser.STR, 0);
};

SetContext.prototype.FLO = function() {
    return this.getToken(RomeParser.FLO, 0);
};
SetContext.prototype.enterRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.enterSet(this);
	}
};

SetContext.prototype.exitRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.exitSet(this);
	}
};

SetContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RomeVisitor ) {
        return visitor.visitSet(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MoveContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MoveContext.prototype = Object.create(ExpressionContext.prototype);
MoveContext.prototype.constructor = MoveContext;

RomeParser.MoveContext = MoveContext;

MoveContext.prototype.MOVE = function() {
    return this.getToken(RomeParser.MOVE, 0);
};

MoveContext.prototype.RIGHT = function() {
    return this.getToken(RomeParser.RIGHT, 0);
};

MoveContext.prototype.LEFT = function() {
    return this.getToken(RomeParser.LEFT, 0);
};
MoveContext.prototype.enterRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.enterMove(this);
	}
};

MoveContext.prototype.exitRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.exitMove(this);
	}
};

MoveContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RomeVisitor ) {
        return visitor.visitMove(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function KreadContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

KreadContext.prototype = Object.create(ExpressionContext.prototype);
KreadContext.prototype.constructor = KreadContext;

RomeParser.KreadContext = KreadContext;

KreadContext.prototype.KREAD = function() {
    return this.getToken(RomeParser.KREAD, 0);
};
KreadContext.prototype.enterRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.enterKread(this);
	}
};

KreadContext.prototype.exitRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.exitKread(this);
	}
};

KreadContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RomeVisitor ) {
        return visitor.visitKread(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function SwriteContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SwriteContext.prototype = Object.create(ExpressionContext.prototype);
SwriteContext.prototype.constructor = SwriteContext;

RomeParser.SwriteContext = SwriteContext;

SwriteContext.prototype.SWRITE = function() {
    return this.getToken(RomeParser.SWRITE, 0);
};

SwriteContext.prototype.intargs = function() {
    return this.getTypedRuleContext(IntargsContext,0);
};

SwriteContext.prototype.floatargs = function() {
    return this.getTypedRuleContext(FloatargsContext,0);
};

SwriteContext.prototype.STRLIT = function() {
    return this.getToken(RomeParser.STRLIT, 0);
};
SwriteContext.prototype.enterRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.enterSwrite(this);
	}
};

SwriteContext.prototype.exitRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.exitSwrite(this);
	}
};

SwriteContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RomeVisitor ) {
        return visitor.visitSwrite(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StyleContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StyleContext.prototype = Object.create(ExpressionContext.prototype);
StyleContext.prototype.constructor = StyleContext;

RomeParser.StyleContext = StyleContext;

StyleContext.prototype.STYLE = function() {
    return this.getToken(RomeParser.STYLE, 0);
};

StyleContext.prototype.NEWLINE = function() {
    return this.getToken(RomeParser.NEWLINE, 0);
};

StyleContext.prototype.stylingExpressions = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StylingExpressionsContext);
    } else {
        return this.getTypedRuleContext(StylingExpressionsContext,i);
    }
};
StyleContext.prototype.enterRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.enterStyle(this);
	}
};

StyleContext.prototype.exitRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.exitStyle(this);
	}
};

StyleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RomeVisitor ) {
        return visitor.visitStyle(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function WhileContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

WhileContext.prototype = Object.create(ExpressionContext.prototype);
WhileContext.prototype.constructor = WhileContext;

RomeParser.WhileContext = WhileContext;

WhileContext.prototype.WHILE = function() {
    return this.getToken(RomeParser.WHILE, 0);
};

WhileContext.prototype.whileConditional = function() {
    return this.getTypedRuleContext(WhileConditionalContext,0);
};

WhileContext.prototype.NEWLINE = function() {
    return this.getToken(RomeParser.NEWLINE, 0);
};

WhileContext.prototype.expressions = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionsContext);
    } else {
        return this.getTypedRuleContext(ExpressionsContext,i);
    }
};
WhileContext.prototype.enterRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.enterWhile(this);
	}
};

WhileContext.prototype.exitRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.exitWhile(this);
	}
};

WhileContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RomeVisitor ) {
        return visitor.visitWhile(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FreeContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FreeContext.prototype = Object.create(ExpressionContext.prototype);
FreeContext.prototype.constructor = FreeContext;

RomeParser.FreeContext = FreeContext;

FreeContext.prototype.FREE = function() {
    return this.getToken(RomeParser.FREE, 0);
};
FreeContext.prototype.enterRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.enterFree(this);
	}
};

FreeContext.prototype.exitRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.exitFree(this);
	}
};

FreeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RomeVisitor ) {
        return visitor.visitFree(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IfContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IfContext.prototype = Object.create(ExpressionContext.prototype);
IfContext.prototype.constructor = IfContext;

RomeParser.IfContext = IfContext;

IfContext.prototype.IF = function() {
    return this.getToken(RomeParser.IF, 0);
};

IfContext.prototype.conditional = function() {
    return this.getTypedRuleContext(ConditionalContext,0);
};

IfContext.prototype.NEWLINE = function() {
    return this.getToken(RomeParser.NEWLINE, 0);
};

IfContext.prototype.expressions = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionsContext);
    } else {
        return this.getTypedRuleContext(ExpressionsContext,i);
    }
};
IfContext.prototype.enterRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.enterIf(this);
	}
};

IfContext.prototype.exitRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.exitIf(this);
	}
};

IfContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RomeVisitor ) {
        return visitor.visitIf(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NameContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NameContext.prototype = Object.create(ExpressionContext.prototype);
NameContext.prototype.constructor = NameContext;

RomeParser.NameContext = NameContext;

NameContext.prototype.NAME = function() {
    return this.getToken(RomeParser.NAME, 0);
};

NameContext.prototype.STRLIT = function() {
    return this.getToken(RomeParser.STRLIT, 0);
};

NameContext.prototype.mem = function() {
    return this.getTypedRuleContext(MemContext,0);
};
NameContext.prototype.enterRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.enterName(this);
	}
};

NameContext.prototype.exitRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.exitName(this);
	}
};

NameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RomeVisitor ) {
        return visitor.visitName(this);
    } else {
        return visitor.visitChildren(this);
    }
};



RomeParser.ExpressionContext = ExpressionContext;

RomeParser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, RomeParser.RULE_expression);
    var _la = 0; // Token type
    try {
        this.state = 208;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RomeParser.SET:
            localctx = new SetContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 124;
            this.match(RomeParser.SET);
            this.state = 125;
            this.match(RomeParser.T__0);
            this.state = 126;
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RomeParser.INT) | (1 << RomeParser.LONG) | (1 << RomeParser.CHAR) | (1 << RomeParser.STR) | (1 << RomeParser.FLO))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 127;
            this.match(RomeParser.T__1);
            break;
        case RomeParser.FREE:
            localctx = new FreeContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 128;
            this.match(RomeParser.FREE);
            break;
        case RomeParser.MOVE:
            localctx = new MoveContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 129;
            this.match(RomeParser.MOVE);
            this.state = 130;
            this.match(RomeParser.T__0);
            this.state = 131;
            _la = this._input.LA(1);
            if(!(_la===RomeParser.RIGHT || _la===RomeParser.LEFT)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 132;
            this.match(RomeParser.T__1);
            break;
        case RomeParser.IF:
            localctx = new IfContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 133;
            this.match(RomeParser.IF);
            this.state = 134;
            this.match(RomeParser.T__0);
            this.state = 135;
            this.conditional();
            this.state = 136;
            this.match(RomeParser.T__1);
            this.state = 137;
            this.match(RomeParser.T__2);
            this.state = 138;
            this.match(RomeParser.NEWLINE);
            this.state = 142;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(((((_la - 7)) & ~0x1f) == 0 && ((1 << (_la - 7)) & ((1 << (RomeParser.SET - 7)) | (1 << (RomeParser.FREE - 7)) | (1 << (RomeParser.KREAD - 7)) | (1 << (RomeParser.SWRITE - 7)) | (1 << (RomeParser.WRITE - 7)) | (1 << (RomeParser.NAME - 7)) | (1 << (RomeParser.IF - 7)) | (1 << (RomeParser.MOVE - 7)) | (1 << (RomeParser.LOOP - 7)) | (1 << (RomeParser.WHILE - 7)) | (1 << (RomeParser.STYLE - 7)))) !== 0)) {
                this.state = 139;
                this.expressions();
                this.state = 144;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 145;
            this.match(RomeParser.T__3);
            break;
        case RomeParser.LOOP:
            localctx = new LoopContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 147;
            this.match(RomeParser.LOOP);
            this.state = 148;
            this.match(RomeParser.T__0);
            this.state = 149;
            this.intargs();
            this.state = 150;
            this.match(RomeParser.T__1);
            this.state = 151;
            this.match(RomeParser.T__2);
            this.state = 152;
            this.match(RomeParser.NEWLINE);
            this.state = 156;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(((((_la - 7)) & ~0x1f) == 0 && ((1 << (_la - 7)) & ((1 << (RomeParser.SET - 7)) | (1 << (RomeParser.FREE - 7)) | (1 << (RomeParser.KREAD - 7)) | (1 << (RomeParser.SWRITE - 7)) | (1 << (RomeParser.WRITE - 7)) | (1 << (RomeParser.NAME - 7)) | (1 << (RomeParser.IF - 7)) | (1 << (RomeParser.MOVE - 7)) | (1 << (RomeParser.LOOP - 7)) | (1 << (RomeParser.WHILE - 7)) | (1 << (RomeParser.STYLE - 7)))) !== 0)) {
                this.state = 153;
                this.expressions();
                this.state = 158;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 159;
            this.match(RomeParser.T__3);
            break;
        case RomeParser.WHILE:
            localctx = new WhileContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 161;
            this.match(RomeParser.WHILE);
            this.state = 162;
            this.match(RomeParser.T__0);
            this.state = 163;
            this.whileConditional();
            this.state = 164;
            this.match(RomeParser.T__1);
            this.state = 165;
            this.match(RomeParser.T__2);
            this.state = 166;
            this.match(RomeParser.NEWLINE);
            this.state = 170;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(((((_la - 7)) & ~0x1f) == 0 && ((1 << (_la - 7)) & ((1 << (RomeParser.SET - 7)) | (1 << (RomeParser.FREE - 7)) | (1 << (RomeParser.KREAD - 7)) | (1 << (RomeParser.SWRITE - 7)) | (1 << (RomeParser.WRITE - 7)) | (1 << (RomeParser.NAME - 7)) | (1 << (RomeParser.IF - 7)) | (1 << (RomeParser.MOVE - 7)) | (1 << (RomeParser.LOOP - 7)) | (1 << (RomeParser.WHILE - 7)) | (1 << (RomeParser.STYLE - 7)))) !== 0)) {
                this.state = 167;
                this.expressions();
                this.state = 172;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 173;
            this.match(RomeParser.T__3);
            break;
        case RomeParser.WRITE:
            localctx = new WriteContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 175;
            this.match(RomeParser.WRITE);
            this.state = 176;
            this.match(RomeParser.T__0);
            this.state = 179;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case RomeParser.MEM:
            case RomeParser.NUMBER:
                this.state = 177;
                this.intargs();
                break;
            case RomeParser.STRLIT:
                this.state = 178;
                this.match(RomeParser.STRLIT);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 181;
            this.match(RomeParser.T__1);
            break;
        case RomeParser.KREAD:
            localctx = new KreadContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 182;
            this.match(RomeParser.KREAD);
            break;
        case RomeParser.SWRITE:
            localctx = new SwriteContext(this, localctx);
            this.enterOuterAlt(localctx, 9);
            this.state = 183;
            this.match(RomeParser.SWRITE);
            this.state = 184;
            this.match(RomeParser.T__0);
            this.state = 188;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case RomeParser.MEM:
            case RomeParser.NUMBER:
                this.state = 185;
                this.intargs();
                break;
            case RomeParser.FLOAT:
                this.state = 186;
                this.floatargs();
                break;
            case RomeParser.STRLIT:
                this.state = 187;
                this.match(RomeParser.STRLIT);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 190;
            this.match(RomeParser.T__1);
            break;
        case RomeParser.NAME:
            localctx = new NameContext(this, localctx);
            this.enterOuterAlt(localctx, 10);
            this.state = 191;
            this.match(RomeParser.NAME);
            this.state = 192;
            this.match(RomeParser.T__0);
            this.state = 195;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case RomeParser.STRLIT:
                this.state = 193;
                this.match(RomeParser.STRLIT);
                break;
            case RomeParser.MEM:
                this.state = 194;
                this.mem();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 197;
            this.match(RomeParser.T__1);
            break;
        case RomeParser.STYLE:
            localctx = new StyleContext(this, localctx);
            this.enterOuterAlt(localctx, 11);
            this.state = 198;
            this.match(RomeParser.STYLE);
            this.state = 199;
            this.match(RomeParser.T__2);
            this.state = 200;
            this.match(RomeParser.NEWLINE);
            this.state = 204;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (RomeParser.PAINT - 37)) | (1 << (RomeParser.TEXT_COLOR - 37)) | (1 << (RomeParser.TEXT_SIZE - 37)) | (1 << (RomeParser.TEXT_ALIGN - 37)) | (1 << (RomeParser.BOLD - 37)) | (1 << (RomeParser.ITALIC - 37)) | (1 << (RomeParser.UNDERLINE - 37)))) !== 0)) {
                this.state = 201;
                this.stylingExpressions();
                this.state = 206;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 207;
            this.match(RomeParser.T__3);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.RomeParser = RomeParser;
