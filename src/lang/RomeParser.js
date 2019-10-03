// Generated from Rome.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var RomeListener = require('./RomeListener').RomeListener;
var RomeVisitor = require('./RomeVisitor').RomeVisitor;

var grammarFileName = "Rome.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003&\u007f\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005",
    "\u0002\u0015\n\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0005\u0003\u001d\n\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004$\n\u0004\f\u0004",
    "\u000e\u0004\'\u000b\u0004\u0003\u0004\u0007\u0004*\n\u0004\f\u0004",
    "\u000e\u0004-\u000b\u0004\u0003\u0004\u0003\u0004\u0007\u00041\n\u0004",
    "\f\u0004\u000e\u00044\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0005\u0006?\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0007\u0007Q\n\u0007\f\u0007\u000e\u0007T\u000b\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0007\u0007_\n\u0007\f\u0007\u000e\u0007b\u000b\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0005\u0007j\n\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0005\u0007q\n\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007z\n\u0007",
    "\u0003\u0007\u0005\u0007}\n\u0007\u0003\u0007\u0002\u0002\b\u0002\u0004",
    "\u0006\b\n\f\u0002\u0006\u0003\u0002\u0011\u0012\u0003\u0002\u0013\u0015",
    "\u0003\u0002\u0006\u0007\u0003\u0002\u001b\u001c\u0002\u008c\u0002\u0014",
    "\u0003\u0002\u0002\u0002\u0004\u001c\u0003\u0002\u0002\u0002\u0006\u001e",
    "\u0003\u0002\u0002\u0002\b5\u0003\u0002\u0002\u0002\n8\u0003\u0002\u0002",
    "\u0002\f|\u0003\u0002\u0002\u0002\u000e\u000f\u0007\r\u0002\u0002\u000f",
    "\u0010\u0007#\u0002\u0002\u0010\u0015\u0007\u000e\u0002\u0002\u0011",
    "\u0012\u0007\r\u0002\u0002\u0012\u0013\u0007#\u0002\u0002\u0013\u0015",
    "\u0007\u000f\u0002\u0002\u0014\u000e\u0003\u0002\u0002\u0002\u0014\u0011",
    "\u0003\u0002\u0002\u0002\u0015\u0003\u0003\u0002\u0002\u0002\u0016\u001d",
    "\u0007%\u0002\u0002\u0017\u0018\u0007\t\u0002\u0002\u0018\u0019\u0007",
    "\u001d\u0002\u0002\u0019\u001a\u0005\u0004\u0003\u0002\u001a\u001b\u0007",
    "\u001e\u0002\u0002\u001b\u001d\u0003\u0002\u0002\u0002\u001c\u0016\u0003",
    "\u0002\u0002\u0002\u001c\u0017\u0003\u0002\u0002\u0002\u001d\u0005\u0003",
    "\u0002\u0002\u0002\u001e\u001f\u0007\u0003\u0002\u0002\u001f%\u0007",
    "\"\u0002\u0002 !\u0005\u0002\u0002\u0002!\"\u0007\"\u0002\u0002\"$\u0003",
    "\u0002\u0002\u0002# \u0003\u0002\u0002\u0002$\'\u0003\u0002\u0002\u0002",
    "%#\u0003\u0002\u0002\u0002%&\u0003\u0002\u0002\u0002&+\u0003\u0002\u0002",
    "\u0002\'%\u0003\u0002\u0002\u0002(*\u0005\b\u0005\u0002)(\u0003\u0002",
    "\u0002\u0002*-\u0003\u0002\u0002\u0002+)\u0003\u0002\u0002\u0002+,\u0003",
    "\u0002\u0002\u0002,.\u0003\u0002\u0002\u0002-+\u0003\u0002\u0002\u0002",
    ".2\u0007\u0004\u0002\u0002/1\u0007\"\u0002\u00020/\u0003\u0002\u0002",
    "\u000214\u0003\u0002\u0002\u000220\u0003\u0002\u0002\u000223\u0003\u0002",
    "\u0002\u00023\u0007\u0003\u0002\u0002\u000242\u0003\u0002\u0002\u0002",
    "56\u0005\f\u0007\u000267\u0007\"\u0002\u00027\t\u0003\u0002\u0002\u0002",
    "89\t\u0002\u0002\u00029:\u0007#\u0002\u0002:;\t\u0003\u0002\u0002;>",
    "\u0007#\u0002\u0002<?\u0005\u0004\u0003\u0002=?\u0007&\u0002\u0002>",
    "<\u0003\u0002\u0002\u0002>=\u0003\u0002\u0002\u0002?\u000b\u0003\u0002",
    "\u0002\u0002@A\u0007\u0005\u0002\u0002AB\u0007\u001d\u0002\u0002BC\t",
    "\u0004\u0002\u0002C}\u0007\u001e\u0002\u0002D}\u0007\b\u0002\u0002E",
    "F\u0007\u001a\u0002\u0002FG\u0007\u001d\u0002\u0002GH\t\u0005\u0002",
    "\u0002H}\u0007\u001e\u0002\u0002IJ\u0007\u0010\u0002\u0002JK\u0007\u001d",
    "\u0002\u0002KL\u0005\n\u0006\u0002LM\u0007\u001e\u0002\u0002MN\u0007",
    "\u001f\u0002\u0002NR\u0007\"\u0002\u0002OQ\u0005\b\u0005\u0002PO\u0003",
    "\u0002\u0002\u0002QT\u0003\u0002\u0002\u0002RP\u0003\u0002\u0002\u0002",
    "RS\u0003\u0002\u0002\u0002SU\u0003\u0002\u0002\u0002TR\u0003\u0002\u0002",
    "\u0002UV\u0007 \u0002\u0002V}\u0003\u0002\u0002\u0002WX\u0007!\u0002",
    "\u0002XY\u0007\u001d\u0002\u0002YZ\u0005\u0004\u0003\u0002Z[\u0007\u001e",
    "\u0002\u0002[\\\u0007\u001f\u0002\u0002\\`\u0007\"\u0002\u0002]_\u0005",
    "\b\u0005\u0002^]\u0003\u0002\u0002\u0002_b\u0003\u0002\u0002\u0002`",
    "^\u0003\u0002\u0002\u0002`a\u0003\u0002\u0002\u0002ac\u0003\u0002\u0002",
    "\u0002b`\u0003\u0002\u0002\u0002cd\u0007 \u0002\u0002d}\u0003\u0002",
    "\u0002\u0002ef\u0007\f\u0002\u0002fi\u0007\u001d\u0002\u0002gj\u0005",
    "\u0004\u0003\u0002hj\u0007&\u0002\u0002ig\u0003\u0002\u0002\u0002ih",
    "\u0003\u0002\u0002\u0002jk\u0003\u0002\u0002\u0002k}\u0007\u001e\u0002",
    "\u0002lm\u0007\u0018\u0002\u0002mp\u0007\u001d\u0002\u0002nq\u0005\u0004",
    "\u0003\u0002oq\u0007&\u0002\u0002pn\u0003\u0002\u0002\u0002po\u0003",
    "\u0002\u0002\u0002qr\u0003\u0002\u0002\u0002r}\u0007\u001e\u0002\u0002",
    "s}\u0007\u0019\u0002\u0002t}\u0007\n\u0002\u0002uv\u0007\u000b\u0002",
    "\u0002vy\u0007\u001d\u0002\u0002wz\u0005\u0004\u0003\u0002xz\u0007&",
    "\u0002\u0002yw\u0003\u0002\u0002\u0002yx\u0003\u0002\u0002\u0002z{\u0003",
    "\u0002\u0002\u0002{}\u0007\u001e\u0002\u0002|@\u0003\u0002\u0002\u0002",
    "|D\u0003\u0002\u0002\u0002|E\u0003\u0002\u0002\u0002|I\u0003\u0002\u0002",
    "\u0002|W\u0003\u0002\u0002\u0002|e\u0003\u0002\u0002\u0002|l\u0003\u0002",
    "\u0002\u0002|s\u0003\u0002\u0002\u0002|t\u0003\u0002\u0002\u0002|u\u0003",
    "\u0002\u0002\u0002}\r\u0003\u0002\u0002\u0002\u000e\u0014\u001c%+2>",
    "R`ipy|"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'start'", "'end'", "'set'", "'numbers'", "'letters'", 
                     "'free'", "'memory'", "'k_read'", "'s_write'", "'write'", 
                     "'import'", "'network'", "'IO'", "'if'", "'is'", "'not'", 
                     "'equal'", "'less'", "'greater'", "'and'", "'or'", 
                     "'n_write'", "'n_read'", "'move'", "'next'", "'last'", 
                     "'('", "')'", "'{'", "'}'", "'loop'", "'\n'", "' '" ];

var symbolicNames = [ null, "START", "END", "SET", "NUM", "LET", "FREE", 
                      "MEM", "KREAD", "SWRITE", "WRITE", "IMP", "NET", "IO", 
                      "IF", "IS", "NOT", "EQL", "LESS", "GRE", "AND", "OR", 
                      "NWRITE", "NREAD", "MOVE", "RIGHT", "LEFT", "LPAR", 
                      "RPAR", "LSQ", "RSQ", "LOOP", "NEWLINE", "SPACE", 
                      "IDENTIFIER", "NUMBER", "STRLIT" ];

var ruleNames =  [ "imp", "intargs", "r", "expressions", "conditional", 
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
RomeParser.START = 1;
RomeParser.END = 2;
RomeParser.SET = 3;
RomeParser.NUM = 4;
RomeParser.LET = 5;
RomeParser.FREE = 6;
RomeParser.MEM = 7;
RomeParser.KREAD = 8;
RomeParser.SWRITE = 9;
RomeParser.WRITE = 10;
RomeParser.IMP = 11;
RomeParser.NET = 12;
RomeParser.IO = 13;
RomeParser.IF = 14;
RomeParser.IS = 15;
RomeParser.NOT = 16;
RomeParser.EQL = 17;
RomeParser.LESS = 18;
RomeParser.GRE = 19;
RomeParser.AND = 20;
RomeParser.OR = 21;
RomeParser.NWRITE = 22;
RomeParser.NREAD = 23;
RomeParser.MOVE = 24;
RomeParser.RIGHT = 25;
RomeParser.LEFT = 26;
RomeParser.LPAR = 27;
RomeParser.RPAR = 28;
RomeParser.LSQ = 29;
RomeParser.RSQ = 30;
RomeParser.LOOP = 31;
RomeParser.NEWLINE = 32;
RomeParser.SPACE = 33;
RomeParser.IDENTIFIER = 34;
RomeParser.NUMBER = 35;
RomeParser.STRLIT = 36;

RomeParser.RULE_imp = 0;
RomeParser.RULE_intargs = 1;
RomeParser.RULE_r = 2;
RomeParser.RULE_expressions = 3;
RomeParser.RULE_conditional = 4;
RomeParser.RULE_expression = 5;


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

IoContext.prototype.SPACE = function() {
    return this.getToken(RomeParser.SPACE, 0);
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

NetContext.prototype.SPACE = function() {
    return this.getToken(RomeParser.SPACE, 0);
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
    this.enterRule(localctx, 0, RomeParser.RULE_imp);
    try {
        this.state = 18;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            localctx = new NetContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 12;
            this.match(RomeParser.IMP);
            this.state = 13;
            this.match(RomeParser.SPACE);
            this.state = 14;
            this.match(RomeParser.NET);
            break;

        case 2:
            localctx = new IoContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 15;
            this.match(RomeParser.IMP);
            this.state = 16;
            this.match(RomeParser.SPACE);
            this.state = 17;
            this.match(RomeParser.IO);
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


function MemContext(parser, ctx) {
	IntargsContext.call(this, parser);
    IntargsContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MemContext.prototype = Object.create(IntargsContext.prototype);
MemContext.prototype.constructor = MemContext;

RomeParser.MemContext = MemContext;

MemContext.prototype.MEM = function() {
    return this.getToken(RomeParser.MEM, 0);
};

MemContext.prototype.LPAR = function() {
    return this.getToken(RomeParser.LPAR, 0);
};

MemContext.prototype.intargs = function() {
    return this.getTypedRuleContext(IntargsContext,0);
};

MemContext.prototype.RPAR = function() {
    return this.getToken(RomeParser.RPAR, 0);
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
    this.enterRule(localctx, 2, RomeParser.RULE_intargs);
    try {
        this.state = 26;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RomeParser.NUMBER:
            localctx = new NumContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 20;
            this.match(RomeParser.NUMBER);
            break;
        case RomeParser.MEM:
            localctx = new MemContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 21;
            this.match(RomeParser.MEM);
            this.state = 22;
            this.match(RomeParser.LPAR);
            this.state = 23;
            this.intargs();
            this.state = 24;
            this.match(RomeParser.RPAR);
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
    this.enterRule(localctx, 4, RomeParser.RULE_r);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 28;
        this.match(RomeParser.START);
        this.state = 29;
        this.match(RomeParser.NEWLINE);
        this.state = 35;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RomeParser.IMP) {
            this.state = 30;
            this.imp();
            this.state = 31;
            this.match(RomeParser.NEWLINE);
            this.state = 37;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 41;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RomeParser.SET) | (1 << RomeParser.FREE) | (1 << RomeParser.KREAD) | (1 << RomeParser.SWRITE) | (1 << RomeParser.WRITE) | (1 << RomeParser.IF) | (1 << RomeParser.NWRITE) | (1 << RomeParser.NREAD) | (1 << RomeParser.MOVE) | (1 << RomeParser.LOOP))) !== 0)) {
            this.state = 38;
            this.expressions();
            this.state = 43;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 44;
        this.match(RomeParser.END);
        this.state = 48;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RomeParser.NEWLINE) {
            this.state = 45;
            this.match(RomeParser.NEWLINE);
            this.state = 50;
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
    this.enterRule(localctx, 6, RomeParser.RULE_expressions);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 51;
        this.expression();
        this.state = 52;
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

CondContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RomeParser.SPACE);
    } else {
        return this.getToken(RomeParser.SPACE, i);
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
    this.enterRule(localctx, 8, RomeParser.RULE_conditional);
    var _la = 0; // Token type
    try {
        localctx = new CondContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 54;
        _la = this._input.LA(1);
        if(!(_la===RomeParser.IS || _la===RomeParser.NOT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 55;
        this.match(RomeParser.SPACE);
        this.state = 56;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RomeParser.EQL) | (1 << RomeParser.LESS) | (1 << RomeParser.GRE))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 57;
        this.match(RomeParser.SPACE);
        this.state = 60;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RomeParser.MEM:
        case RomeParser.NUMBER:
            this.state = 58;
            this.intargs();
            break;
        case RomeParser.STRLIT:
            this.state = 59;
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

LoopContext.prototype.LPAR = function() {
    return this.getToken(RomeParser.LPAR, 0);
};

LoopContext.prototype.intargs = function() {
    return this.getTypedRuleContext(IntargsContext,0);
};

LoopContext.prototype.RPAR = function() {
    return this.getToken(RomeParser.RPAR, 0);
};

LoopContext.prototype.LSQ = function() {
    return this.getToken(RomeParser.LSQ, 0);
};

LoopContext.prototype.NEWLINE = function() {
    return this.getToken(RomeParser.NEWLINE, 0);
};

LoopContext.prototype.RSQ = function() {
    return this.getToken(RomeParser.RSQ, 0);
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

WriteContext.prototype.LPAR = function() {
    return this.getToken(RomeParser.LPAR, 0);
};

WriteContext.prototype.RPAR = function() {
    return this.getToken(RomeParser.RPAR, 0);
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

SetContext.prototype.LPAR = function() {
    return this.getToken(RomeParser.LPAR, 0);
};

SetContext.prototype.RPAR = function() {
    return this.getToken(RomeParser.RPAR, 0);
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

MoveContext.prototype.LPAR = function() {
    return this.getToken(RomeParser.LPAR, 0);
};

MoveContext.prototype.RPAR = function() {
    return this.getToken(RomeParser.RPAR, 0);
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

SwriteContext.prototype.LPAR = function() {
    return this.getToken(RomeParser.LPAR, 0);
};

SwriteContext.prototype.RPAR = function() {
    return this.getToken(RomeParser.RPAR, 0);
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

IfContext.prototype.LPAR = function() {
    return this.getToken(RomeParser.LPAR, 0);
};

IfContext.prototype.conditional = function() {
    return this.getTypedRuleContext(ConditionalContext,0);
};

IfContext.prototype.RPAR = function() {
    return this.getToken(RomeParser.RPAR, 0);
};

IfContext.prototype.LSQ = function() {
    return this.getToken(RomeParser.LSQ, 0);
};

IfContext.prototype.NEWLINE = function() {
    return this.getToken(RomeParser.NEWLINE, 0);
};

IfContext.prototype.RSQ = function() {
    return this.getToken(RomeParser.RSQ, 0);
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

SnetContext.prototype.LPAR = function() {
    return this.getToken(RomeParser.LPAR, 0);
};

SnetContext.prototype.RPAR = function() {
    return this.getToken(RomeParser.RPAR, 0);
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



RomeParser.ExpressionContext = ExpressionContext;

RomeParser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, RomeParser.RULE_expression);
    var _la = 0; // Token type
    try {
        this.state = 122;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RomeParser.SET:
            localctx = new SetContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 62;
            this.match(RomeParser.SET);
            this.state = 63;
            this.match(RomeParser.LPAR);
            this.state = 64;
            _la = this._input.LA(1);
            if(!(_la===RomeParser.NUM || _la===RomeParser.LET)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 65;
            this.match(RomeParser.RPAR);
            break;
        case RomeParser.FREE:
            localctx = new FreeContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 66;
            this.match(RomeParser.FREE);
            break;
        case RomeParser.MOVE:
            localctx = new MoveContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 67;
            this.match(RomeParser.MOVE);
            this.state = 68;
            this.match(RomeParser.LPAR);
            this.state = 69;
            _la = this._input.LA(1);
            if(!(_la===RomeParser.RIGHT || _la===RomeParser.LEFT)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 70;
            this.match(RomeParser.RPAR);
            break;
        case RomeParser.IF:
            localctx = new IfContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 71;
            this.match(RomeParser.IF);
            this.state = 72;
            this.match(RomeParser.LPAR);
            this.state = 73;
            this.conditional();
            this.state = 74;
            this.match(RomeParser.RPAR);
            this.state = 75;
            this.match(RomeParser.LSQ);
            this.state = 76;
            this.match(RomeParser.NEWLINE);
            this.state = 80;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RomeParser.SET) | (1 << RomeParser.FREE) | (1 << RomeParser.KREAD) | (1 << RomeParser.SWRITE) | (1 << RomeParser.WRITE) | (1 << RomeParser.IF) | (1 << RomeParser.NWRITE) | (1 << RomeParser.NREAD) | (1 << RomeParser.MOVE) | (1 << RomeParser.LOOP))) !== 0)) {
                this.state = 77;
                this.expressions();
                this.state = 82;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 83;
            this.match(RomeParser.RSQ);
            break;
        case RomeParser.LOOP:
            localctx = new LoopContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 85;
            this.match(RomeParser.LOOP);
            this.state = 86;
            this.match(RomeParser.LPAR);
            this.state = 87;
            this.intargs();
            this.state = 88;
            this.match(RomeParser.RPAR);
            this.state = 89;
            this.match(RomeParser.LSQ);
            this.state = 90;
            this.match(RomeParser.NEWLINE);
            this.state = 94;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RomeParser.SET) | (1 << RomeParser.FREE) | (1 << RomeParser.KREAD) | (1 << RomeParser.SWRITE) | (1 << RomeParser.WRITE) | (1 << RomeParser.IF) | (1 << RomeParser.NWRITE) | (1 << RomeParser.NREAD) | (1 << RomeParser.MOVE) | (1 << RomeParser.LOOP))) !== 0)) {
                this.state = 91;
                this.expressions();
                this.state = 96;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 97;
            this.match(RomeParser.RSQ);
            break;
        case RomeParser.WRITE:
            localctx = new WriteContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 99;
            this.match(RomeParser.WRITE);
            this.state = 100;
            this.match(RomeParser.LPAR);
            this.state = 103;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case RomeParser.MEM:
            case RomeParser.NUMBER:
                this.state = 101;
                this.intargs();
                break;
            case RomeParser.STRLIT:
                this.state = 102;
                this.match(RomeParser.STRLIT);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 105;
            this.match(RomeParser.RPAR);
            break;
        case RomeParser.NWRITE:
            localctx = new SnetContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 106;
            this.match(RomeParser.NWRITE);
            this.state = 107;
            this.match(RomeParser.LPAR);
            this.state = 110;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case RomeParser.MEM:
            case RomeParser.NUMBER:
                this.state = 108;
                this.intargs();
                break;
            case RomeParser.STRLIT:
                this.state = 109;
                this.match(RomeParser.STRLIT);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 112;
            this.match(RomeParser.RPAR);
            break;
        case RomeParser.NREAD:
            localctx = new RnetContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 113;
            this.match(RomeParser.NREAD);
            break;
        case RomeParser.KREAD:
            localctx = new KreadContext(this, localctx);
            this.enterOuterAlt(localctx, 9);
            this.state = 114;
            this.match(RomeParser.KREAD);
            break;
        case RomeParser.SWRITE:
            localctx = new SwriteContext(this, localctx);
            this.enterOuterAlt(localctx, 10);
            this.state = 115;
            this.match(RomeParser.SWRITE);
            this.state = 116;
            this.match(RomeParser.LPAR);
            this.state = 119;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case RomeParser.MEM:
            case RomeParser.NUMBER:
                this.state = 117;
                this.intargs();
                break;
            case RomeParser.STRLIT:
                this.state = 118;
                this.match(RomeParser.STRLIT);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 121;
            this.match(RomeParser.RPAR);
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
