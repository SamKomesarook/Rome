// Generated from Rome.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var RomeListener = require('./RomeListener').RomeListener;
var RomeVisitor = require('./RomeVisitor').RomeVisitor;

var grammarFileName = "Rome.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00038\u00c7\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003#\n\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004)\n\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0005",
    "\u00061\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0007\u00078\n\u0007\f\u0007\u000e\u0007;\u000b\u0007\u0003\u0007",
    "\u0007\u0007>\n\u0007\f\u0007\u000e\u0007A\u000b\u0007\u0003\u0007\u0003",
    "\u0007\u0007\u0007E\n\u0007\f\u0007\u000e\u0007H\u000b\u0007\u0003\b",
    "\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0005\tT\n\t\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0005\u000bu\n\u000b\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0007\f\u0087\n\f\f\f\u000e\f\u008a\u000b",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0007\f\u0095\n\f\f\f\u000e\f\u0098\u000b\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u00a2\n\f\u0003\f",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u00ac",
    "\n\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u00b3\n\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0007\f\u00ba\n\f\f\f\u000e\f\u00bd",
    "\u000b\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u00c5",
    "\n\f\u0003\f\u0002\u0002\r\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0002\u0006\u0003\u0002\u0019\u001a\u0003\u0002\u001b\u001d",
    "\u0003\u0002\n\u000e\u0003\u0002\"#\u0002\u00dd\u0002\u0018\u0003\u0002",
    "\u0002\u0002\u0004\"\u0003\u0002\u0002\u0002\u0006$\u0003\u0002\u0002",
    "\u0002\b,\u0003\u0002\u0002\u0002\n0\u0003\u0002\u0002\u0002\f2\u0003",
    "\u0002\u0002\u0002\u000eI\u0003\u0002\u0002\u0002\u0010L\u0003\u0002",
    "\u0002\u0002\u0012U\u0003\u0002\u0002\u0002\u0014t\u0003\u0002\u0002",
    "\u0002\u0016\u00c4\u0003\u0002\u0002\u0002\u0018\u0019\u00077\u0002",
    "\u0002\u0019\u0003\u0003\u0002\u0002\u0002\u001a\u001b\u0007\u0015\u0002",
    "\u0002\u001b\u001c\u0007\u0003\u0002\u0002\u001c\u001d\u0007\u0016\u0002",
    "\u0002\u001d#\u0007\u0004\u0002\u0002\u001e\u001f\u0007\u0015\u0002",
    "\u0002\u001f \u0007\u0003\u0002\u0002 !\u0007\u0017\u0002\u0002!#\u0007",
    "\u0004\u0002\u0002\"\u001a\u0003\u0002\u0002\u0002\"\u001e\u0003\u0002",
    "\u0002\u0002#\u0005\u0003\u0002\u0002\u0002$%\u0007\u0010\u0002\u0002",
    "%(\u0007\u0003\u0002\u0002&)\u0005\n\u0006\u0002\')\u0005\u0002\u0002",
    "\u0002(&\u0003\u0002\u0002\u0002(\'\u0003\u0002\u0002\u0002)*\u0003",
    "\u0002\u0002\u0002*+\u0007\u0004\u0002\u0002+\u0007\u0003\u0002\u0002",
    "\u0002,-\u00075\u0002\u0002-\t\u0003\u0002\u0002\u0002.1\u00074\u0002",
    "\u0002/1\u0005\u0006\u0004\u00020.\u0003\u0002\u0002\u00020/\u0003\u0002",
    "\u0002\u00021\u000b\u0003\u0002\u0002\u000223\u0007\u0007\u0002\u0002",
    "39\u00070\u0002\u000245\u0005\u0004\u0003\u000256\u00070\u0002\u0002",
    "68\u0003\u0002\u0002\u000274\u0003\u0002\u0002\u00028;\u0003\u0002\u0002",
    "\u000297\u0003\u0002\u0002\u00029:\u0003\u0002\u0002\u0002:?\u0003\u0002",
    "\u0002\u0002;9\u0003\u0002\u0002\u0002<>\u0005\u000e\b\u0002=<\u0003",
    "\u0002\u0002\u0002>A\u0003\u0002\u0002\u0002?=\u0003\u0002\u0002\u0002",
    "?@\u0003\u0002\u0002\u0002@B\u0003\u0002\u0002\u0002A?\u0003\u0002\u0002",
    "\u0002BF\u0007\b\u0002\u0002CE\u00070\u0002\u0002DC\u0003\u0002\u0002",
    "\u0002EH\u0003\u0002\u0002\u0002FD\u0003\u0002\u0002\u0002FG\u0003\u0002",
    "\u0002\u0002G\r\u0003\u0002\u0002\u0002HF\u0003\u0002\u0002\u0002IJ",
    "\u0005\u0016\f\u0002JK\u00070\u0002\u0002K\u000f\u0003\u0002\u0002\u0002",
    "LM\t\u0002\u0002\u0002MN\u00071\u0002\u0002NO\t\u0003\u0002\u0002OS",
    "\u00071\u0002\u0002PT\u0005\n\u0006\u0002QT\u00077\u0002\u0002RT\u0005",
    "\b\u0005\u0002SP\u0003\u0002\u0002\u0002SQ\u0003\u0002\u0002\u0002S",
    "R\u0003\u0002\u0002\u0002T\u0011\u0003\u0002\u0002\u0002UV\u0005\u0014",
    "\u000b\u0002VW\u00070\u0002\u0002W\u0013\u0003\u0002\u0002\u0002XY\u0007",
    "&\u0002\u0002YZ\u0007\u0003\u0002\u0002Z[\u0007-\u0002\u0002[u\u0007",
    "\u0004\u0002\u0002\\]\u0007\'\u0002\u0002]^\u0007\u0003\u0002\u0002",
    "^_\u0007-\u0002\u0002_u\u0007\u0004\u0002\u0002`a\u0007(\u0002\u0002",
    "ab\u0007\u0003\u0002\u0002bc\u0007.\u0002\u0002cu\u0007\u0004\u0002",
    "\u0002de\u0007)\u0002\u0002ef\u0007\u0003\u0002\u0002fg\u0007/\u0002",
    "\u0002gu\u0007\u0004\u0002\u0002hi\u0007*\u0002\u0002ij\u0007\u0003",
    "\u0002\u0002jk\u00072\u0002\u0002ku\u0007\u0004\u0002\u0002lm\u0007",
    "+\u0002\u0002mn\u0007\u0003\u0002\u0002no\u00072\u0002\u0002ou\u0007",
    "\u0004\u0002\u0002pq\u0007,\u0002\u0002qr\u0007\u0003\u0002\u0002rs",
    "\u00072\u0002\u0002su\u0007\u0004\u0002\u0002tX\u0003\u0002\u0002\u0002",
    "t\\\u0003\u0002\u0002\u0002t`\u0003\u0002\u0002\u0002td\u0003\u0002",
    "\u0002\u0002th\u0003\u0002\u0002\u0002tl\u0003\u0002\u0002\u0002tp\u0003",
    "\u0002\u0002\u0002u\u0015\u0003\u0002\u0002\u0002vw\u0007\t\u0002\u0002",
    "wx\u0007\u0003\u0002\u0002xy\t\u0004\u0002\u0002y\u00c5\u0007\u0004",
    "\u0002\u0002z\u00c5\u0007\u000f\u0002\u0002{|\u0007!\u0002\u0002|}\u0007",
    "\u0003\u0002\u0002}~\t\u0005\u0002\u0002~\u00c5\u0007\u0004\u0002\u0002",
    "\u007f\u0080\u0007\u0018\u0002\u0002\u0080\u0081\u0007\u0003\u0002\u0002",
    "\u0081\u0082\u0005\u0010\t\u0002\u0082\u0083\u0007\u0004\u0002\u0002",
    "\u0083\u0084\u0007\u0005\u0002\u0002\u0084\u0088\u00070\u0002\u0002",
    "\u0085\u0087\u0005\u000e\b\u0002\u0086\u0085\u0003\u0002\u0002\u0002",
    "\u0087\u008a\u0003\u0002\u0002\u0002\u0088\u0086\u0003\u0002\u0002\u0002",
    "\u0088\u0089\u0003\u0002\u0002\u0002\u0089\u008b\u0003\u0002\u0002\u0002",
    "\u008a\u0088\u0003\u0002\u0002\u0002\u008b\u008c\u0007\u0006\u0002\u0002",
    "\u008c\u00c5\u0003\u0002\u0002\u0002\u008d\u008e\u0007$\u0002\u0002",
    "\u008e\u008f\u0007\u0003\u0002\u0002\u008f\u0090\u0005\n\u0006\u0002",
    "\u0090\u0091\u0007\u0004\u0002\u0002\u0091\u0092\u0007\u0005\u0002\u0002",
    "\u0092\u0096\u00070\u0002\u0002\u0093\u0095\u0005\u000e\b\u0002\u0094",
    "\u0093\u0003\u0002\u0002\u0002\u0095\u0098\u0003\u0002\u0002\u0002\u0096",
    "\u0094\u0003\u0002\u0002\u0002\u0096\u0097\u0003\u0002\u0002\u0002\u0097",
    "\u0099\u0003\u0002\u0002\u0002\u0098\u0096\u0003\u0002\u0002\u0002\u0099",
    "\u009a\u0007\u0006\u0002\u0002\u009a\u00c5\u0003\u0002\u0002\u0002\u009b",
    "\u009c\u0007\u0013\u0002\u0002\u009c\u00a1\u0007\u0003\u0002\u0002\u009d",
    "\u00a2\u0005\n\u0006\u0002\u009e\u00a2\u0005\b\u0005\u0002\u009f\u00a2",
    "\u00077\u0002\u0002\u00a0\u00a2\u00076\u0002\u0002\u00a1\u009d\u0003",
    "\u0002\u0002\u0002\u00a1\u009e\u0003\u0002\u0002\u0002\u00a1\u009f\u0003",
    "\u0002\u0002\u0002\u00a1\u00a0\u0003\u0002\u0002\u0002\u00a2\u00a3\u0003",
    "\u0002\u0002\u0002\u00a3\u00c5\u0007\u0004\u0002\u0002\u00a4\u00c5\u0007",
    "\u0011\u0002\u0002\u00a5\u00a6\u0007\u0012\u0002\u0002\u00a6\u00ab\u0007",
    "\u0003\u0002\u0002\u00a7\u00ac\u0005\n\u0006\u0002\u00a8\u00ac\u0005",
    "\b\u0005\u0002\u00a9\u00ac\u00077\u0002\u0002\u00aa\u00ac\u00076\u0002",
    "\u0002\u00ab\u00a7\u0003\u0002\u0002\u0002\u00ab\u00a8\u0003\u0002\u0002",
    "\u0002\u00ab\u00a9\u0003\u0002\u0002\u0002\u00ab\u00aa\u0003\u0002\u0002",
    "\u0002\u00ac\u00ad\u0003\u0002\u0002\u0002\u00ad\u00c5\u0007\u0004\u0002",
    "\u0002\u00ae\u00af\u0007\u0014\u0002\u0002\u00af\u00b2\u0007\u0003\u0002",
    "\u0002\u00b0\u00b3\u00077\u0002\u0002\u00b1\u00b3\u0005\u0006\u0004",
    "\u0002\u00b2\u00b0\u0003\u0002\u0002\u0002\u00b2\u00b1\u0003\u0002\u0002",
    "\u0002\u00b3\u00b4\u0003\u0002\u0002\u0002\u00b4\u00c5\u0007\u0004\u0002",
    "\u0002\u00b5\u00b6\u0007%\u0002\u0002\u00b6\u00b7\u0007\u0005\u0002",
    "\u0002\u00b7\u00bb\u00070\u0002\u0002\u00b8\u00ba\u0005\u0012\n\u0002",
    "\u00b9\u00b8\u0003\u0002\u0002\u0002\u00ba\u00bd\u0003\u0002\u0002\u0002",
    "\u00bb\u00b9\u0003\u0002\u0002\u0002\u00bb\u00bc\u0003\u0002\u0002\u0002",
    "\u00bc\u00be\u0003\u0002\u0002\u0002\u00bd\u00bb\u0003\u0002\u0002\u0002",
    "\u00be\u00c5\u0007\u0006\u0002\u0002\u00bf\u00c0\u0007 \u0002\u0002",
    "\u00c0\u00c1\u0007\u0003\u0002\u0002\u00c1\u00c2\u0005\n\u0006\u0002",
    "\u00c2\u00c3\u0007\u0004\u0002\u0002\u00c3\u00c5\u0003\u0002\u0002\u0002",
    "\u00c4v\u0003\u0002\u0002\u0002\u00c4z\u0003\u0002\u0002\u0002\u00c4",
    "{\u0003\u0002\u0002\u0002\u00c4\u007f\u0003\u0002\u0002\u0002\u00c4",
    "\u008d\u0003\u0002\u0002\u0002\u00c4\u009b\u0003\u0002\u0002\u0002\u00c4",
    "\u00a4\u0003\u0002\u0002\u0002\u00c4\u00a5\u0003\u0002\u0002\u0002\u00c4",
    "\u00ae\u0003\u0002\u0002\u0002\u00c4\u00b5\u0003\u0002\u0002\u0002\u00c4",
    "\u00bf\u0003\u0002\u0002\u0002\u00c5\u0017\u0003\u0002\u0002\u0002\u0011",
    "\"(09?FSt\u0088\u0096\u00a1\u00ab\u00b2\u00bb\u00c4"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", "'{'", "'}'", "'start'", "'end'", 
                     "'set'", "'integer'", "'long'", "'character'", "'string'", 
                     "'float'", "'free'", "'memory'", "'keyboardRead'", 
                     "'consoleWrite'", "'write'", "'name'", "'import'", 
                     "'IO'", "'math'", "'if'", "'is'", "'not'", "'equal'", 
                     "'less'", "'greater'", "'and'", "'or'", "'rand'", "'move'", 
                     "'next'", "'last'", "'loop'", "'style'", "'paint'", 
                     "'text_color'", "'text_size'", "'text_align'", "'bold'", 
                     "'italic'", "'underline'", null, null, null, "'\n'", 
                     "' '" ];

var symbolicNames = [ null, null, null, null, null, "START", "END", "SET", 
                      "INT", "LONG", "CHAR", "STR", "FLO", "FREE", "MEM", 
                      "KREAD", "SWRITE", "WRITE", "NAME", "IMP", "IO", "MATH", 
                      "IF", "IS", "NOT", "EQL", "LESS", "GRE", "AND", "OR", 
                      "RANDOM", "MOVE", "RIGHT", "LEFT", "LOOP", "STYLE", 
                      "PAINT", "TEXT_COLOR", "TEXT_SIZE", "TEXT_ALIGN", 
                      "BOLD", "ITALIC", "UNDERLINE", "COLOR", "SIZE", "ALIGN_PROP", 
                      "NEWLINE", "WS", "BOOLEAN_PROP", "IDENTIFIER", "NUMBER", 
                      "FLOAT", "CHARACTER", "STRLIT", "ONE_LINE_COMMENT" ];

var ruleNames =  [ "strargs", "imp", "mem", "floatargs", "intargs", "r", 
                   "expressions", "conditional", "stylingExpressions", "stylingExpression", 
                   "expression" ];

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
RomeParser.MATH = 21;
RomeParser.IF = 22;
RomeParser.IS = 23;
RomeParser.NOT = 24;
RomeParser.EQL = 25;
RomeParser.LESS = 26;
RomeParser.GRE = 27;
RomeParser.AND = 28;
RomeParser.OR = 29;
RomeParser.RANDOM = 30;
RomeParser.MOVE = 31;
RomeParser.RIGHT = 32;
RomeParser.LEFT = 33;
RomeParser.LOOP = 34;
RomeParser.STYLE = 35;
RomeParser.PAINT = 36;
RomeParser.TEXT_COLOR = 37;
RomeParser.TEXT_SIZE = 38;
RomeParser.TEXT_ALIGN = 39;
RomeParser.BOLD = 40;
RomeParser.ITALIC = 41;
RomeParser.UNDERLINE = 42;
RomeParser.COLOR = 43;
RomeParser.SIZE = 44;
RomeParser.ALIGN_PROP = 45;
RomeParser.NEWLINE = 46;
RomeParser.WS = 47;
RomeParser.BOOLEAN_PROP = 48;
RomeParser.IDENTIFIER = 49;
RomeParser.NUMBER = 50;
RomeParser.FLOAT = 51;
RomeParser.CHARACTER = 52;
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
RomeParser.RULE_stylingExpressions = 8;
RomeParser.RULE_stylingExpression = 9;
RomeParser.RULE_expression = 10;


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
        this.state = 22;
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


function MathContext(parser, ctx) {
	ImpContext.call(this, parser);
    ImpContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MathContext.prototype = Object.create(ImpContext.prototype);
MathContext.prototype.constructor = MathContext;

RomeParser.MathContext = MathContext;

MathContext.prototype.IMP = function() {
    return this.getToken(RomeParser.IMP, 0);
};

MathContext.prototype.MATH = function() {
    return this.getToken(RomeParser.MATH, 0);
};
MathContext.prototype.enterRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.enterMath(this);
	}
};

MathContext.prototype.exitRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.exitMath(this);
	}
};

MathContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RomeVisitor ) {
        return visitor.visitMath(this);
    } else {
        return visitor.visitChildren(this);
    }
};



RomeParser.ImpContext = ImpContext;

RomeParser.prototype.imp = function() {

    var localctx = new ImpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, RomeParser.RULE_imp);
    try {
        this.state = 32;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            localctx = new IoContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 24;
            this.match(RomeParser.IMP);
            this.state = 25;
            this.match(RomeParser.T__0);
            this.state = 26;
            this.match(RomeParser.IO);
            this.state = 27;
            this.match(RomeParser.T__1);
            break;

        case 2:
            localctx = new MathContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 28;
            this.match(RomeParser.IMP);
            this.state = 29;
            this.match(RomeParser.T__0);
            this.state = 30;
            this.match(RomeParser.MATH);
            this.state = 31;
            this.match(RomeParser.T__1);
            break;

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
        this.state = 34;
        this.match(RomeParser.MEM);
        this.state = 35;
        this.match(RomeParser.T__0);
        this.state = 38;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RomeParser.MEM:
        case RomeParser.NUMBER:
            this.state = 36;
            this.intargs();
            break;
        case RomeParser.STRLIT:
            this.state = 37;
            this.strargs();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 40;
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
        this.state = 42;
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
        this.state = 46;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RomeParser.NUMBER:
            localctx = new NumContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 44;
            this.match(RomeParser.NUMBER);
            break;
        case RomeParser.MEM:
            localctx = new MemoryContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 45;
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
        this.state = 48;
        this.match(RomeParser.START);
        this.state = 49;
        this.match(RomeParser.NEWLINE);
        this.state = 55;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RomeParser.IMP) {
            this.state = 50;
            this.imp();
            this.state = 51;
            this.match(RomeParser.NEWLINE);
            this.state = 57;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 61;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 7)) & ~0x1f) == 0 && ((1 << (_la - 7)) & ((1 << (RomeParser.SET - 7)) | (1 << (RomeParser.FREE - 7)) | (1 << (RomeParser.KREAD - 7)) | (1 << (RomeParser.SWRITE - 7)) | (1 << (RomeParser.WRITE - 7)) | (1 << (RomeParser.NAME - 7)) | (1 << (RomeParser.IF - 7)) | (1 << (RomeParser.RANDOM - 7)) | (1 << (RomeParser.MOVE - 7)) | (1 << (RomeParser.LOOP - 7)) | (1 << (RomeParser.STYLE - 7)))) !== 0)) {
            this.state = 58;
            this.expressions();
            this.state = 63;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 64;
        this.match(RomeParser.END);
        this.state = 68;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RomeParser.NEWLINE) {
            this.state = 65;
            this.match(RomeParser.NEWLINE);
            this.state = 70;
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
        this.state = 71;
        this.expression();
        this.state = 72;
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
        this.state = 74;
        _la = this._input.LA(1);
        if(!(_la===RomeParser.IS || _la===RomeParser.NOT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 75;
        this.match(RomeParser.WS);
        this.state = 76;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RomeParser.EQL) | (1 << RomeParser.LESS) | (1 << RomeParser.GRE))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 77;
        this.match(RomeParser.WS);
        this.state = 81;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RomeParser.MEM:
        case RomeParser.NUMBER:
            this.state = 78;
            this.intargs();
            break;
        case RomeParser.STRLIT:
            this.state = 79;
            this.match(RomeParser.STRLIT);
            break;
        case RomeParser.FLOAT:
            this.state = 80;
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
    this.enterRule(localctx, 16, RomeParser.RULE_stylingExpressions);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 83;
        this.stylingExpression();
        this.state = 84;
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
    this.enterRule(localctx, 18, RomeParser.RULE_stylingExpression);
    try {
        this.state = 114;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RomeParser.PAINT:
            localctx = new PaintContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 86;
            this.match(RomeParser.PAINT);
            this.state = 87;
            this.match(RomeParser.T__0);
            this.state = 88;
            this.match(RomeParser.COLOR);
            this.state = 89;
            this.match(RomeParser.T__1);
            break;
        case RomeParser.TEXT_COLOR:
            localctx = new TextColorContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 90;
            this.match(RomeParser.TEXT_COLOR);
            this.state = 91;
            this.match(RomeParser.T__0);
            this.state = 92;
            this.match(RomeParser.COLOR);
            this.state = 93;
            this.match(RomeParser.T__1);
            break;
        case RomeParser.TEXT_SIZE:
            localctx = new TextSizeContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 94;
            this.match(RomeParser.TEXT_SIZE);
            this.state = 95;
            this.match(RomeParser.T__0);
            this.state = 96;
            this.match(RomeParser.SIZE);
            this.state = 97;
            this.match(RomeParser.T__1);
            break;
        case RomeParser.TEXT_ALIGN:
            localctx = new TextAlignContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 98;
            this.match(RomeParser.TEXT_ALIGN);
            this.state = 99;
            this.match(RomeParser.T__0);
            this.state = 100;
            this.match(RomeParser.ALIGN_PROP);
            this.state = 101;
            this.match(RomeParser.T__1);
            break;
        case RomeParser.BOLD:
            localctx = new BoldContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 102;
            this.match(RomeParser.BOLD);
            this.state = 103;
            this.match(RomeParser.T__0);
            this.state = 104;
            this.match(RomeParser.BOOLEAN_PROP);
            this.state = 105;
            this.match(RomeParser.T__1);
            break;
        case RomeParser.ITALIC:
            localctx = new ItalicContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 106;
            this.match(RomeParser.ITALIC);
            this.state = 107;
            this.match(RomeParser.T__0);
            this.state = 108;
            this.match(RomeParser.BOOLEAN_PROP);
            this.state = 109;
            this.match(RomeParser.T__1);
            break;
        case RomeParser.UNDERLINE:
            localctx = new UnderlineContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 110;
            this.match(RomeParser.UNDERLINE);
            this.state = 111;
            this.match(RomeParser.T__0);
            this.state = 112;
            this.match(RomeParser.BOOLEAN_PROP);
            this.state = 113;
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

WriteContext.prototype.floatargs = function() {
    return this.getTypedRuleContext(FloatargsContext,0);
};

WriteContext.prototype.STRLIT = function() {
    return this.getToken(RomeParser.STRLIT, 0);
};

WriteContext.prototype.CHARACTER = function() {
    return this.getToken(RomeParser.CHARACTER, 0);
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


function RandomContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RandomContext.prototype = Object.create(ExpressionContext.prototype);
RandomContext.prototype.constructor = RandomContext;

RomeParser.RandomContext = RandomContext;

RandomContext.prototype.RANDOM = function() {
    return this.getToken(RomeParser.RANDOM, 0);
};

RandomContext.prototype.intargs = function() {
    return this.getTypedRuleContext(IntargsContext,0);
};
RandomContext.prototype.enterRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.enterRandom(this);
	}
};

RandomContext.prototype.exitRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.exitRandom(this);
	}
};

RandomContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RomeVisitor ) {
        return visitor.visitRandom(this);
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

SwriteContext.prototype.CHARACTER = function() {
    return this.getToken(RomeParser.CHARACTER, 0);
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
    this.enterRule(localctx, 20, RomeParser.RULE_expression);
    var _la = 0; // Token type
    try {
        this.state = 194;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RomeParser.SET:
            localctx = new SetContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 116;
            this.match(RomeParser.SET);
            this.state = 117;
            this.match(RomeParser.T__0);
            this.state = 118;
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RomeParser.INT) | (1 << RomeParser.LONG) | (1 << RomeParser.CHAR) | (1 << RomeParser.STR) | (1 << RomeParser.FLO))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 119;
            this.match(RomeParser.T__1);
            break;
        case RomeParser.FREE:
            localctx = new FreeContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 120;
            this.match(RomeParser.FREE);
            break;
        case RomeParser.MOVE:
            localctx = new MoveContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 121;
            this.match(RomeParser.MOVE);
            this.state = 122;
            this.match(RomeParser.T__0);
            this.state = 123;
            _la = this._input.LA(1);
            if(!(_la===RomeParser.RIGHT || _la===RomeParser.LEFT)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 124;
            this.match(RomeParser.T__1);
            break;
        case RomeParser.IF:
            localctx = new IfContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 125;
            this.match(RomeParser.IF);
            this.state = 126;
            this.match(RomeParser.T__0);
            this.state = 127;
            this.conditional();
            this.state = 128;
            this.match(RomeParser.T__1);
            this.state = 129;
            this.match(RomeParser.T__2);
            this.state = 130;
            this.match(RomeParser.NEWLINE);
            this.state = 134;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(((((_la - 7)) & ~0x1f) == 0 && ((1 << (_la - 7)) & ((1 << (RomeParser.SET - 7)) | (1 << (RomeParser.FREE - 7)) | (1 << (RomeParser.KREAD - 7)) | (1 << (RomeParser.SWRITE - 7)) | (1 << (RomeParser.WRITE - 7)) | (1 << (RomeParser.NAME - 7)) | (1 << (RomeParser.IF - 7)) | (1 << (RomeParser.RANDOM - 7)) | (1 << (RomeParser.MOVE - 7)) | (1 << (RomeParser.LOOP - 7)) | (1 << (RomeParser.STYLE - 7)))) !== 0)) {
                this.state = 131;
                this.expressions();
                this.state = 136;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 137;
            this.match(RomeParser.T__3);
            break;
        case RomeParser.LOOP:
            localctx = new LoopContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 139;
            this.match(RomeParser.LOOP);
            this.state = 140;
            this.match(RomeParser.T__0);
            this.state = 141;
            this.intargs();
            this.state = 142;
            this.match(RomeParser.T__1);
            this.state = 143;
            this.match(RomeParser.T__2);
            this.state = 144;
            this.match(RomeParser.NEWLINE);
            this.state = 148;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(((((_la - 7)) & ~0x1f) == 0 && ((1 << (_la - 7)) & ((1 << (RomeParser.SET - 7)) | (1 << (RomeParser.FREE - 7)) | (1 << (RomeParser.KREAD - 7)) | (1 << (RomeParser.SWRITE - 7)) | (1 << (RomeParser.WRITE - 7)) | (1 << (RomeParser.NAME - 7)) | (1 << (RomeParser.IF - 7)) | (1 << (RomeParser.RANDOM - 7)) | (1 << (RomeParser.MOVE - 7)) | (1 << (RomeParser.LOOP - 7)) | (1 << (RomeParser.STYLE - 7)))) !== 0)) {
                this.state = 145;
                this.expressions();
                this.state = 150;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 151;
            this.match(RomeParser.T__3);
            break;
        case RomeParser.WRITE:
            localctx = new WriteContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 153;
            this.match(RomeParser.WRITE);
            this.state = 154;
            this.match(RomeParser.T__0);
            this.state = 159;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case RomeParser.MEM:
            case RomeParser.NUMBER:
                this.state = 155;
                this.intargs();
                break;
            case RomeParser.FLOAT:
                this.state = 156;
                this.floatargs();
                break;
            case RomeParser.STRLIT:
                this.state = 157;
                this.match(RomeParser.STRLIT);
                break;
            case RomeParser.CHARACTER:
                this.state = 158;
                this.match(RomeParser.CHARACTER);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 161;
            this.match(RomeParser.T__1);
            break;
        case RomeParser.KREAD:
            localctx = new KreadContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 162;
            this.match(RomeParser.KREAD);
            break;
        case RomeParser.SWRITE:
            localctx = new SwriteContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 163;
            this.match(RomeParser.SWRITE);
            this.state = 164;
            this.match(RomeParser.T__0);
            this.state = 169;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case RomeParser.MEM:
            case RomeParser.NUMBER:
                this.state = 165;
                this.intargs();
                break;
            case RomeParser.FLOAT:
                this.state = 166;
                this.floatargs();
                break;
            case RomeParser.STRLIT:
                this.state = 167;
                this.match(RomeParser.STRLIT);
                break;
            case RomeParser.CHARACTER:
                this.state = 168;
                this.match(RomeParser.CHARACTER);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 171;
            this.match(RomeParser.T__1);
            break;
        case RomeParser.NAME:
            localctx = new NameContext(this, localctx);
            this.enterOuterAlt(localctx, 9);
            this.state = 172;
            this.match(RomeParser.NAME);
            this.state = 173;
            this.match(RomeParser.T__0);
            this.state = 176;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case RomeParser.STRLIT:
                this.state = 174;
                this.match(RomeParser.STRLIT);
                break;
            case RomeParser.MEM:
                this.state = 175;
                this.mem();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 178;
            this.match(RomeParser.T__1);
            break;
        case RomeParser.STYLE:
            localctx = new StyleContext(this, localctx);
            this.enterOuterAlt(localctx, 10);
            this.state = 179;
            this.match(RomeParser.STYLE);
            this.state = 180;
            this.match(RomeParser.T__2);
            this.state = 181;
            this.match(RomeParser.NEWLINE);
            this.state = 185;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (RomeParser.PAINT - 36)) | (1 << (RomeParser.TEXT_COLOR - 36)) | (1 << (RomeParser.TEXT_SIZE - 36)) | (1 << (RomeParser.TEXT_ALIGN - 36)) | (1 << (RomeParser.BOLD - 36)) | (1 << (RomeParser.ITALIC - 36)) | (1 << (RomeParser.UNDERLINE - 36)))) !== 0)) {
                this.state = 182;
                this.stylingExpressions();
                this.state = 187;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 188;
            this.match(RomeParser.T__3);
            break;
        case RomeParser.RANDOM:
            localctx = new RandomContext(this, localctx);
            this.enterOuterAlt(localctx, 11);
            this.state = 189;
            this.match(RomeParser.RANDOM);
            this.state = 190;
            this.match(RomeParser.T__0);
            this.state = 191;
            this.intargs();
            this.state = 192;
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


exports.RomeParser = RomeParser;
exports.KreadContext = KreadContext;
exports.NumContext = NumContext;