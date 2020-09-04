// Generated from Rome.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var RomeListener = require('./RomeListener').RomeListener;
var RomeVisitor = require('./RomeVisitor').RomeVisitor;

var grammarFileName = "Rome.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003.\u00b1\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0005\u0003!\n\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0005\u0004\'\n\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0005\u0005-\n\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u00064\n\u0006\f\u0006",
    "\u000e\u00067\u000b\u0006\u0003\u0006\u0007\u0006:\n\u0006\f\u0006\u000e",
    "\u0006=\u000b\u0006\u0003\u0006\u0003\u0006\u0007\u0006A\n\u0006\f\u0006",
    "\u000e\u0006D\u000b\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\bO\n\b\u0003\t\u0003",
    "\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n`\n\n\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0007\u000br\n\u000b\f\u000b\u000e\u000bu\u000b",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u0080\n\u000b",
    "\f\u000b\u000e\u000b\u0083\u000b\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u008b\n\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b",
    "\u0092\n\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u009b\n\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b\u00a2\n",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0007",
    "\u000b\u00a9\n\u000b\f\u000b\u000e\u000b\u00ac\u000b\u000b\u0003\u000b",
    "\u0005\u000b\u00af\n\u000b\u0003\u000b\u0002\u0002\f\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0014\u0002\u0006\u0003\u0002\u0016\u0017\u0003",
    "\u0002\u0018\u001a\u0003\u0002\n\u000b\u0003\u0002 !\u0002\u00c1\u0002",
    "\u0016\u0003\u0002\u0002\u0002\u0004 \u0003\u0002\u0002\u0002\u0006",
    "\"\u0003\u0002\u0002\u0002\b,\u0003\u0002\u0002\u0002\n.\u0003\u0002",
    "\u0002\u0002\fE\u0003\u0002\u0002\u0002\u000eH\u0003\u0002\u0002\u0002",
    "\u0010P\u0003\u0002\u0002\u0002\u0012_\u0003\u0002\u0002\u0002\u0014",
    "\u00ae\u0003\u0002\u0002\u0002\u0016\u0017\u0007-\u0002\u0002\u0017",
    "\u0003\u0003\u0002\u0002\u0002\u0018\u0019\u0007\u0012\u0002\u0002\u0019",
    "\u001a\u0007\u0003\u0002\u0002\u001a\u001b\u0007\u0013\u0002\u0002\u001b",
    "!\u0007\u0004\u0002\u0002\u001c\u001d\u0007\u0012\u0002\u0002\u001d",
    "\u001e\u0007\u0003\u0002\u0002\u001e\u001f\u0007\u0014\u0002\u0002\u001f",
    "!\u0007\u0004\u0002\u0002 \u0018\u0003\u0002\u0002\u0002 \u001c\u0003",
    "\u0002\u0002\u0002!\u0005\u0003\u0002\u0002\u0002\"#\u0007\r\u0002\u0002",
    "#&\u0007\u0003\u0002\u0002$\'\u0005\b\u0005\u0002%\'\u0005\u0002\u0002",
    "\u0002&$\u0003\u0002\u0002\u0002&%\u0003\u0002\u0002\u0002\'(\u0003",
    "\u0002\u0002\u0002()\u0007\u0004\u0002\u0002)\u0007\u0003\u0002\u0002",
    "\u0002*-\u0007,\u0002\u0002+-\u0005\u0006\u0004\u0002,*\u0003\u0002",
    "\u0002\u0002,+\u0003\u0002\u0002\u0002-\t\u0003\u0002\u0002\u0002./",
    "\u0007\u0007\u0002\u0002/5\u0007)\u0002\u000201\u0005\u0004\u0003\u0002",
    "12\u0007)\u0002\u000224\u0003\u0002\u0002\u000230\u0003\u0002\u0002",
    "\u000247\u0003\u0002\u0002\u000253\u0003\u0002\u0002\u000256\u0003\u0002",
    "\u0002\u00026;\u0003\u0002\u0002\u000275\u0003\u0002\u0002\u00028:\u0005",
    "\f\u0007\u000298\u0003\u0002\u0002\u0002:=\u0003\u0002\u0002\u0002;",
    "9\u0003\u0002\u0002\u0002;<\u0003\u0002\u0002\u0002<>\u0003\u0002\u0002",
    "\u0002=;\u0003\u0002\u0002\u0002>B\u0007\b\u0002\u0002?A\u0007)\u0002",
    "\u0002@?\u0003\u0002\u0002\u0002AD\u0003\u0002\u0002\u0002B@\u0003\u0002",
    "\u0002\u0002BC\u0003\u0002\u0002\u0002C\u000b\u0003\u0002\u0002\u0002",
    "DB\u0003\u0002\u0002\u0002EF\u0005\u0014\u000b\u0002FG\u0007)\u0002",
    "\u0002G\r\u0003\u0002\u0002\u0002HI\t\u0002\u0002\u0002IJ\u0007*\u0002",
    "\u0002JK\t\u0003\u0002\u0002KN\u0007*\u0002\u0002LO\u0005\b\u0005\u0002",
    "MO\u0007-\u0002\u0002NL\u0003\u0002\u0002\u0002NM\u0003\u0002\u0002",
    "\u0002O\u000f\u0003\u0002\u0002\u0002PQ\u0005\u0012\n\u0002QR\u0007",
    ")\u0002\u0002R\u0011\u0003\u0002\u0002\u0002ST\u0007$\u0002\u0002TU",
    "\u0007\u0003\u0002\u0002UV\u0007\'\u0002\u0002V`\u0007\u0004\u0002\u0002",
    "WX\u0007%\u0002\u0002XY\u0007\u0003\u0002\u0002YZ\u0007\'\u0002\u0002",
    "Z`\u0007\u0004\u0002\u0002[\\\u0007&\u0002\u0002\\]\u0007\u0003\u0002",
    "\u0002]^\u0007(\u0002\u0002^`\u0007\u0004\u0002\u0002_S\u0003\u0002",
    "\u0002\u0002_W\u0003\u0002\u0002\u0002_[\u0003\u0002\u0002\u0002`\u0013",
    "\u0003\u0002\u0002\u0002ab\u0007\t\u0002\u0002bc\u0007\u0003\u0002\u0002",
    "cd\t\u0004\u0002\u0002d\u00af\u0007\u0004\u0002\u0002e\u00af\u0007\f",
    "\u0002\u0002fg\u0007\u001f\u0002\u0002gh\u0007\u0003\u0002\u0002hi\t",
    "\u0005\u0002\u0002i\u00af\u0007\u0004\u0002\u0002jk\u0007\u0015\u0002",
    "\u0002kl\u0007\u0003\u0002\u0002lm\u0005\u000e\b\u0002mn\u0007\u0004",
    "\u0002\u0002no\u0007\u0005\u0002\u0002os\u0007)\u0002\u0002pr\u0005",
    "\f\u0007\u0002qp\u0003\u0002\u0002\u0002ru\u0003\u0002\u0002\u0002s",
    "q\u0003\u0002\u0002\u0002st\u0003\u0002\u0002\u0002tv\u0003\u0002\u0002",
    "\u0002us\u0003\u0002\u0002\u0002vw\u0007\u0006\u0002\u0002w\u00af\u0003",
    "\u0002\u0002\u0002xy\u0007\"\u0002\u0002yz\u0007\u0003\u0002\u0002z",
    "{\u0005\b\u0005\u0002{|\u0007\u0004\u0002\u0002|}\u0007\u0005\u0002",
    "\u0002}\u0081\u0007)\u0002\u0002~\u0080\u0005\f\u0007\u0002\u007f~\u0003",
    "\u0002\u0002\u0002\u0080\u0083\u0003\u0002\u0002\u0002\u0081\u007f\u0003",
    "\u0002\u0002\u0002\u0081\u0082\u0003\u0002\u0002\u0002\u0082\u0084\u0003",
    "\u0002\u0002\u0002\u0083\u0081\u0003\u0002\u0002\u0002\u0084\u0085\u0007",
    "\u0006\u0002\u0002\u0085\u00af\u0003\u0002\u0002\u0002\u0086\u0087\u0007",
    "\u0010\u0002\u0002\u0087\u008a\u0007\u0003\u0002\u0002\u0088\u008b\u0005",
    "\b\u0005\u0002\u0089\u008b\u0007-\u0002\u0002\u008a\u0088\u0003\u0002",
    "\u0002\u0002\u008a\u0089\u0003\u0002\u0002\u0002\u008b\u008c\u0003\u0002",
    "\u0002\u0002\u008c\u00af\u0007\u0004\u0002\u0002\u008d\u008e\u0007\u001d",
    "\u0002\u0002\u008e\u0091\u0007\u0003\u0002\u0002\u008f\u0092\u0005\b",
    "\u0005\u0002\u0090\u0092\u0007-\u0002\u0002\u0091\u008f\u0003\u0002",
    "\u0002\u0002\u0091\u0090\u0003\u0002\u0002\u0002\u0092\u0093\u0003\u0002",
    "\u0002\u0002\u0093\u00af\u0007\u0004\u0002\u0002\u0094\u00af\u0007\u001e",
    "\u0002\u0002\u0095\u00af\u0007\u000e\u0002\u0002\u0096\u0097\u0007\u000f",
    "\u0002\u0002\u0097\u009a\u0007\u0003\u0002\u0002\u0098\u009b\u0005\b",
    "\u0005\u0002\u0099\u009b\u0007-\u0002\u0002\u009a\u0098\u0003\u0002",
    "\u0002\u0002\u009a\u0099\u0003\u0002\u0002\u0002\u009b\u009c\u0003\u0002",
    "\u0002\u0002\u009c\u00af\u0007\u0004\u0002\u0002\u009d\u009e\u0007\u0011",
    "\u0002\u0002\u009e\u00a1\u0007\u0003\u0002\u0002\u009f\u00a2\u0007-",
    "\u0002\u0002\u00a0\u00a2\u0005\u0006\u0004\u0002\u00a1\u009f\u0003\u0002",
    "\u0002\u0002\u00a1\u00a0\u0003\u0002\u0002\u0002\u00a2\u00a3\u0003\u0002",
    "\u0002\u0002\u00a3\u00af\u0007\u0004\u0002\u0002\u00a4\u00a5\u0007#",
    "\u0002\u0002\u00a5\u00a6\u0007\u0005\u0002\u0002\u00a6\u00aa\u0007)",
    "\u0002\u0002\u00a7\u00a9\u0005\u0010\t\u0002\u00a8\u00a7\u0003\u0002",
    "\u0002\u0002\u00a9\u00ac\u0003\u0002\u0002\u0002\u00aa\u00a8\u0003\u0002",
    "\u0002\u0002\u00aa\u00ab\u0003\u0002\u0002\u0002\u00ab\u00ad\u0003\u0002",
    "\u0002\u0002\u00ac\u00aa\u0003\u0002\u0002\u0002\u00ad\u00af\u0007\u0006",
    "\u0002\u0002\u00aea\u0003\u0002\u0002\u0002\u00aee\u0003\u0002\u0002",
    "\u0002\u00aef\u0003\u0002\u0002\u0002\u00aej\u0003\u0002\u0002\u0002",
    "\u00aex\u0003\u0002\u0002\u0002\u00ae\u0086\u0003\u0002\u0002\u0002",
    "\u00ae\u008d\u0003\u0002\u0002\u0002\u00ae\u0094\u0003\u0002\u0002\u0002",
    "\u00ae\u0095\u0003\u0002\u0002\u0002\u00ae\u0096\u0003\u0002\u0002\u0002",
    "\u00ae\u009d\u0003\u0002\u0002\u0002\u00ae\u00a4\u0003\u0002\u0002\u0002",
    "\u00af\u0015\u0003\u0002\u0002\u0002\u0012 &,5;BN_s\u0081\u008a\u0091",
    "\u009a\u00a1\u00aa\u00ae"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", "'{'", "'}'", "'start'", "'end'", 
                     "'set'", "'numbers'", "'letters'", "'free'", "'memory'", 
                     "'k_read'", "'s_write'", "'write'", "'name'", "'import'", 
                     "'network'", "'IO'", "'if'", "'is'", "'not'", "'equal'", 
                     "'less'", "'greater'", "'and'", "'or'", "'n_write'", 
                     "'n_read'", "'move'", "'next'", "'last'", "'loop'", 
                     "'style'", "'paint'", "'text_color'", "'text_size'", 
                     null, null, "'\n'", "' '" ];

var symbolicNames = [ null, null, null, null, null, "START", "END", "SET", 
                      "NUM", "LET", "FREE", "MEM", "KREAD", "SWRITE", "WRITE", 
                      "NAME", "IMP", "NET", "IO", "IF", "IS", "NOT", "EQL", 
                      "LESS", "GRE", "AND", "OR", "NWRITE", "NREAD", "MOVE", 
                      "RIGHT", "LEFT", "LOOP", "STYLE", "PAINT", "TEXTCOLOR", 
                      "TEXTSIZE", "COLOR", "SIZE", "NEWLINE", "WS", "IDENTIFIER", 
                      "NUMBER", "STRLIT", "ONE_LINE_COMMENT" ];

var ruleNames =  [ "strargs", "imp", "mem", "intargs", "r", "expressions", 
                   "conditional", "stylingExpressions", "stylingExpression", 
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
RomeParser.NUM = 8;
RomeParser.LET = 9;
RomeParser.FREE = 10;
RomeParser.MEM = 11;
RomeParser.KREAD = 12;
RomeParser.SWRITE = 13;
RomeParser.WRITE = 14;
RomeParser.NAME = 15;
RomeParser.IMP = 16;
RomeParser.NET = 17;
RomeParser.IO = 18;
RomeParser.IF = 19;
RomeParser.IS = 20;
RomeParser.NOT = 21;
RomeParser.EQL = 22;
RomeParser.LESS = 23;
RomeParser.GRE = 24;
RomeParser.AND = 25;
RomeParser.OR = 26;
RomeParser.NWRITE = 27;
RomeParser.NREAD = 28;
RomeParser.MOVE = 29;
RomeParser.RIGHT = 30;
RomeParser.LEFT = 31;
RomeParser.LOOP = 32;
RomeParser.STYLE = 33;
RomeParser.PAINT = 34;
RomeParser.TEXTCOLOR = 35;
RomeParser.TEXTSIZE = 36;
RomeParser.COLOR = 37;
RomeParser.SIZE = 38;
RomeParser.NEWLINE = 39;
RomeParser.WS = 40;
RomeParser.IDENTIFIER = 41;
RomeParser.NUMBER = 42;
RomeParser.STRLIT = 43;
RomeParser.ONE_LINE_COMMENT = 44;

RomeParser.RULE_strargs = 0;
RomeParser.RULE_imp = 1;
RomeParser.RULE_mem = 2;
RomeParser.RULE_intargs = 3;
RomeParser.RULE_r = 4;
RomeParser.RULE_expressions = 5;
RomeParser.RULE_conditional = 6;
RomeParser.RULE_stylingExpressions = 7;
RomeParser.RULE_stylingExpression = 8;
RomeParser.RULE_expression = 9;


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
        this.state = 20;
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


function NetContext(parser, ctx) {
	ImpContext.call(this, parser);
    ImpContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NetContext.prototype = Object.create(ImpContext.prototype);
NetContext.prototype.constructor = NetContext;

RomeParser.NetContext = NetContext;

NetContext.prototype.IMP = function() {
    return this.getToken(RomeParser.IMP, 0);
};

NetContext.prototype.NET = function() {
    return this.getToken(RomeParser.NET, 0);
};
NetContext.prototype.enterRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.enterNet(this);
	}
};

NetContext.prototype.exitRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.exitNet(this);
	}
};

NetContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RomeVisitor ) {
        return visitor.visitNet(this);
    } else {
        return visitor.visitChildren(this);
    }
};



RomeParser.ImpContext = ImpContext;

RomeParser.prototype.imp = function() {

    var localctx = new ImpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, RomeParser.RULE_imp);
    try {
        this.state = 30;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            localctx = new NetContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 22;
            this.match(RomeParser.IMP);
            this.state = 23;
            this.match(RomeParser.T__0);
            this.state = 24;
            this.match(RomeParser.NET);
            this.state = 25;
            this.match(RomeParser.T__1);
            break;

        case 2:
            localctx = new IoContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 26;
            this.match(RomeParser.IMP);
            this.state = 27;
            this.match(RomeParser.T__0);
            this.state = 28;
            this.match(RomeParser.IO);
            this.state = 29;
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
        this.state = 32;
        this.match(RomeParser.MEM);
        this.state = 33;
        this.match(RomeParser.T__0);
        this.state = 36;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RomeParser.MEM:
        case RomeParser.NUMBER:
            this.state = 34;
            this.intargs();
            break;
        case RomeParser.STRLIT:
            this.state = 35;
            this.strargs();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 38;
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
    this.enterRule(localctx, 6, RomeParser.RULE_intargs);
    try {
        this.state = 42;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RomeParser.NUMBER:
            localctx = new NumContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 40;
            this.match(RomeParser.NUMBER);
            break;
        case RomeParser.MEM:
            localctx = new MemoryContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 41;
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
    this.enterRule(localctx, 8, RomeParser.RULE_r);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 44;
        this.match(RomeParser.START);
        this.state = 45;
        this.match(RomeParser.NEWLINE);
        this.state = 51;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RomeParser.IMP) {
            this.state = 46;
            this.imp();
            this.state = 47;
            this.match(RomeParser.NEWLINE);
            this.state = 53;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 57;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 7)) & ~0x1f) == 0 && ((1 << (_la - 7)) & ((1 << (RomeParser.SET - 7)) | (1 << (RomeParser.FREE - 7)) | (1 << (RomeParser.KREAD - 7)) | (1 << (RomeParser.SWRITE - 7)) | (1 << (RomeParser.WRITE - 7)) | (1 << (RomeParser.NAME - 7)) | (1 << (RomeParser.IF - 7)) | (1 << (RomeParser.NWRITE - 7)) | (1 << (RomeParser.NREAD - 7)) | (1 << (RomeParser.MOVE - 7)) | (1 << (RomeParser.LOOP - 7)) | (1 << (RomeParser.STYLE - 7)))) !== 0)) {
            this.state = 54;
            this.expressions();
            this.state = 59;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 60;
        this.match(RomeParser.END);
        this.state = 64;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RomeParser.NEWLINE) {
            this.state = 61;
            this.match(RomeParser.NEWLINE);
            this.state = 66;
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
    this.enterRule(localctx, 10, RomeParser.RULE_expressions);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 67;
        this.expression();
        this.state = 68;
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
    this.enterRule(localctx, 12, RomeParser.RULE_conditional);
    var _la = 0; // Token type
    try {
        localctx = new CondContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 70;
        _la = this._input.LA(1);
        if(!(_la===RomeParser.IS || _la===RomeParser.NOT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 71;
        this.match(RomeParser.WS);
        this.state = 72;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RomeParser.EQL) | (1 << RomeParser.LESS) | (1 << RomeParser.GRE))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 73;
        this.match(RomeParser.WS);
        this.state = 76;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RomeParser.MEM:
        case RomeParser.NUMBER:
            this.state = 74;
            this.intargs();
            break;
        case RomeParser.STRLIT:
            this.state = 75;
            this.match(RomeParser.STRLIT);
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
    this.enterRule(localctx, 14, RomeParser.RULE_stylingExpressions);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 78;
        this.stylingExpression();
        this.state = 79;
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


function TextSizeContext(parser, ctx) {
	StylingExpressionContext.call(this, parser);
    StylingExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TextSizeContext.prototype = Object.create(StylingExpressionContext.prototype);
TextSizeContext.prototype.constructor = TextSizeContext;

RomeParser.TextSizeContext = TextSizeContext;

TextSizeContext.prototype.TEXTSIZE = function() {
    return this.getToken(RomeParser.TEXTSIZE, 0);
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

TextColorContext.prototype.TEXTCOLOR = function() {
    return this.getToken(RomeParser.TEXTCOLOR, 0);
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
    this.enterRule(localctx, 16, RomeParser.RULE_stylingExpression);
    try {
        this.state = 93;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RomeParser.PAINT:
            localctx = new PaintContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 81;
            this.match(RomeParser.PAINT);
            this.state = 82;
            this.match(RomeParser.T__0);
            this.state = 83;
            this.match(RomeParser.COLOR);
            this.state = 84;
            this.match(RomeParser.T__1);
            break;
        case RomeParser.TEXTCOLOR:
            localctx = new TextColorContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 85;
            this.match(RomeParser.TEXTCOLOR);
            this.state = 86;
            this.match(RomeParser.T__0);
            this.state = 87;
            this.match(RomeParser.COLOR);
            this.state = 88;
            this.match(RomeParser.T__1);
            break;
        case RomeParser.TEXTSIZE:
            localctx = new TextSizeContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 89;
            this.match(RomeParser.TEXTSIZE);
            this.state = 90;
            this.match(RomeParser.T__0);
            this.state = 91;
            this.match(RomeParser.SIZE);
            this.state = 92;
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

SetContext.prototype.NUM = function() {
    return this.getToken(RomeParser.NUM, 0);
};

SetContext.prototype.LET = function() {
    return this.getToken(RomeParser.LET, 0);
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


function SnetContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

SnetContext.prototype = Object.create(ExpressionContext.prototype);
SnetContext.prototype.constructor = SnetContext;

RomeParser.SnetContext = SnetContext;

SnetContext.prototype.NWRITE = function() {
    return this.getToken(RomeParser.NWRITE, 0);
};

SnetContext.prototype.intargs = function() {
    return this.getTypedRuleContext(IntargsContext,0);
};

SnetContext.prototype.STRLIT = function() {
    return this.getToken(RomeParser.STRLIT, 0);
};
SnetContext.prototype.enterRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.enterSnet(this);
	}
};

SnetContext.prototype.exitRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.exitSnet(this);
	}
};

SnetContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RomeVisitor ) {
        return visitor.visitSnet(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function RnetContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

RnetContext.prototype = Object.create(ExpressionContext.prototype);
RnetContext.prototype.constructor = RnetContext;

RomeParser.RnetContext = RnetContext;

RnetContext.prototype.NREAD = function() {
    return this.getToken(RomeParser.NREAD, 0);
};
RnetContext.prototype.enterRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.enterRnet(this);
	}
};

RnetContext.prototype.exitRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.exitRnet(this);
	}
};

RnetContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RomeVisitor ) {
        return visitor.visitRnet(this);
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
    this.enterRule(localctx, 18, RomeParser.RULE_expression);
    var _la = 0; // Token type
    try {
        this.state = 172;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RomeParser.SET:
            localctx = new SetContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 95;
            this.match(RomeParser.SET);
            this.state = 96;
            this.match(RomeParser.T__0);
            this.state = 97;
            _la = this._input.LA(1);
            if(!(_la===RomeParser.NUM || _la===RomeParser.LET)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 98;
            this.match(RomeParser.T__1);
            break;
        case RomeParser.FREE:
            localctx = new FreeContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 99;
            this.match(RomeParser.FREE);
            break;
        case RomeParser.MOVE:
            localctx = new MoveContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 100;
            this.match(RomeParser.MOVE);
            this.state = 101;
            this.match(RomeParser.T__0);
            this.state = 102;
            _la = this._input.LA(1);
            if(!(_la===RomeParser.RIGHT || _la===RomeParser.LEFT)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 103;
            this.match(RomeParser.T__1);
            break;
        case RomeParser.IF:
            localctx = new IfContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 104;
            this.match(RomeParser.IF);
            this.state = 105;
            this.match(RomeParser.T__0);
            this.state = 106;
            this.conditional();
            this.state = 107;
            this.match(RomeParser.T__1);
            this.state = 108;
            this.match(RomeParser.T__2);
            this.state = 109;
            this.match(RomeParser.NEWLINE);
            this.state = 113;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(((((_la - 7)) & ~0x1f) == 0 && ((1 << (_la - 7)) & ((1 << (RomeParser.SET - 7)) | (1 << (RomeParser.FREE - 7)) | (1 << (RomeParser.KREAD - 7)) | (1 << (RomeParser.SWRITE - 7)) | (1 << (RomeParser.WRITE - 7)) | (1 << (RomeParser.NAME - 7)) | (1 << (RomeParser.IF - 7)) | (1 << (RomeParser.NWRITE - 7)) | (1 << (RomeParser.NREAD - 7)) | (1 << (RomeParser.MOVE - 7)) | (1 << (RomeParser.LOOP - 7)) | (1 << (RomeParser.STYLE - 7)))) !== 0)) {
                this.state = 110;
                this.expressions();
                this.state = 115;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 116;
            this.match(RomeParser.T__3);
            break;
        case RomeParser.LOOP:
            localctx = new LoopContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 118;
            this.match(RomeParser.LOOP);
            this.state = 119;
            this.match(RomeParser.T__0);
            this.state = 120;
            this.intargs();
            this.state = 121;
            this.match(RomeParser.T__1);
            this.state = 122;
            this.match(RomeParser.T__2);
            this.state = 123;
            this.match(RomeParser.NEWLINE);
            this.state = 127;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(((((_la - 7)) & ~0x1f) == 0 && ((1 << (_la - 7)) & ((1 << (RomeParser.SET - 7)) | (1 << (RomeParser.FREE - 7)) | (1 << (RomeParser.KREAD - 7)) | (1 << (RomeParser.SWRITE - 7)) | (1 << (RomeParser.WRITE - 7)) | (1 << (RomeParser.NAME - 7)) | (1 << (RomeParser.IF - 7)) | (1 << (RomeParser.NWRITE - 7)) | (1 << (RomeParser.NREAD - 7)) | (1 << (RomeParser.MOVE - 7)) | (1 << (RomeParser.LOOP - 7)) | (1 << (RomeParser.STYLE - 7)))) !== 0)) {
                this.state = 124;
                this.expressions();
                this.state = 129;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 130;
            this.match(RomeParser.T__3);
            break;
        case RomeParser.WRITE:
            localctx = new WriteContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 132;
            this.match(RomeParser.WRITE);
            this.state = 133;
            this.match(RomeParser.T__0);
            this.state = 136;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case RomeParser.MEM:
            case RomeParser.NUMBER:
                this.state = 134;
                this.intargs();
                break;
            case RomeParser.STRLIT:
                this.state = 135;
                this.match(RomeParser.STRLIT);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 138;
            this.match(RomeParser.T__1);
            break;
        case RomeParser.NWRITE:
            localctx = new SnetContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 139;
            this.match(RomeParser.NWRITE);
            this.state = 140;
            this.match(RomeParser.T__0);
            this.state = 143;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case RomeParser.MEM:
            case RomeParser.NUMBER:
                this.state = 141;
                this.intargs();
                break;
            case RomeParser.STRLIT:
                this.state = 142;
                this.match(RomeParser.STRLIT);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 145;
            this.match(RomeParser.T__1);
            break;
        case RomeParser.NREAD:
            localctx = new RnetContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 146;
            this.match(RomeParser.NREAD);
            break;
        case RomeParser.KREAD:
            localctx = new KreadContext(this, localctx);
            this.enterOuterAlt(localctx, 9);
            this.state = 147;
            this.match(RomeParser.KREAD);
            break;
        case RomeParser.SWRITE:
            localctx = new SwriteContext(this, localctx);
            this.enterOuterAlt(localctx, 10);
            this.state = 148;
            this.match(RomeParser.SWRITE);
            this.state = 149;
            this.match(RomeParser.T__0);
            this.state = 152;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case RomeParser.MEM:
            case RomeParser.NUMBER:
                this.state = 150;
                this.intargs();
                break;
            case RomeParser.STRLIT:
                this.state = 151;
                this.match(RomeParser.STRLIT);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 154;
            this.match(RomeParser.T__1);
            break;
        case RomeParser.NAME:
            localctx = new NameContext(this, localctx);
            this.enterOuterAlt(localctx, 11);
            this.state = 155;
            this.match(RomeParser.NAME);
            this.state = 156;
            this.match(RomeParser.T__0);
            this.state = 159;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case RomeParser.STRLIT:
                this.state = 157;
                this.match(RomeParser.STRLIT);
                break;
            case RomeParser.MEM:
                this.state = 158;
                this.mem();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 161;
            this.match(RomeParser.T__1);
            break;
        case RomeParser.STYLE:
            localctx = new StyleContext(this, localctx);
            this.enterOuterAlt(localctx, 12);
            this.state = 162;
            this.match(RomeParser.STYLE);
            this.state = 163;
            this.match(RomeParser.T__2);
            this.state = 164;
            this.match(RomeParser.NEWLINE);
            this.state = 168;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (RomeParser.PAINT - 34)) | (1 << (RomeParser.TEXTCOLOR - 34)) | (1 << (RomeParser.TEXTSIZE - 34)))) !== 0)) {
                this.state = 165;
                this.stylingExpressions();
                this.state = 170;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 171;
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
