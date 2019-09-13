// Generated from Rome.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var RomeListener = require('./RomeListener').RomeListener;
var grammarFileName = "Rome.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001cS\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0005\u0002\u0011\n\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0007\u0003\u0016\n\u0003\f\u0003\u000e\u0003",
    "\u0019\u000b\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u001d\n\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0005\u00052\n\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0007\u00058\n\u0005\f\u0005\u000e\u0005;\u000b\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0006\u0005A\n\u0005\r\u0005",
    "\u000e\u0005B\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005N",
    "\n\u0005\u0003\u0005\u0005\u0005Q\n\u0005\u0003\u0005\u0002\u0002\u0006",
    "\u0002\u0004\u0006\b\u0002\u0006\u0003\u0002\u0006\u0007\u0003\u0002",
    "\u0013\u0014\u0003\u0002\r\u000e\u0003\u0002\u000f\u0011\u0002[\u0002",
    "\u0010\u0003\u0002\u0002\u0002\u0004\u0012\u0003\u0002\u0002\u0002\u0006",
    "\u001e\u0003\u0002\u0002\u0002\bP\u0003\u0002\u0002\u0002\n\u0011\u0007",
    "\u001b\u0002\u0002\u000b\f\u0007\t\u0002\u0002\f\r\u0007\u0015\u0002",
    "\u0002\r\u000e\u0005\u0002\u0002\u0002\u000e\u000f\u0007\u0016\u0002",
    "\u0002\u000f\u0011\u0003\u0002\u0002\u0002\u0010\n\u0003\u0002\u0002",
    "\u0002\u0010\u000b\u0003\u0002\u0002\u0002\u0011\u0003\u0003\u0002\u0002",
    "\u0002\u0012\u0013\u0007\u0003\u0002\u0002\u0013\u0017\u0007\u0019\u0002",
    "\u0002\u0014\u0016\u0005\u0006\u0004\u0002\u0015\u0014\u0003\u0002\u0002",
    "\u0002\u0016\u0019\u0003\u0002\u0002\u0002\u0017\u0015\u0003\u0002\u0002",
    "\u0002\u0017\u0018\u0003\u0002\u0002\u0002\u0018\u001a\u0003\u0002\u0002",
    "\u0002\u0019\u0017\u0003\u0002\u0002\u0002\u001a\u001c\u0007\u0004\u0002",
    "\u0002\u001b\u001d\u0007\u0019\u0002\u0002\u001c\u001b\u0003\u0002\u0002",
    "\u0002\u001c\u001d\u0003\u0002\u0002\u0002\u001d\u0005\u0003\u0002\u0002",
    "\u0002\u001e\u001f\u0005\b\u0005\u0002\u001f \u0007\u0019\u0002\u0002",
    " \u0007\u0003\u0002\u0002\u0002!\"\u0007\u0005\u0002\u0002\"#\u0007",
    "\u0015\u0002\u0002#$\t\u0002\u0002\u0002$Q\u0007\u0016\u0002\u0002%",
    "Q\u0007\b\u0002\u0002&Q\u0007\n\u0002\u0002\'(\u0007\u0012\u0002\u0002",
    "()\u0007\u0015\u0002\u0002)*\t\u0003\u0002\u0002*Q\u0007\u0016\u0002",
    "\u0002+,\u0007\f\u0002\u0002,-\u0007\u0015\u0002\u0002-.\t\u0004\u0002",
    "\u0002.1\t\u0005\u0002\u0002/2\u0005\u0002\u0002\u000202\u0007\u001c",
    "\u0002\u00021/\u0003\u0002\u0002\u000210\u0003\u0002\u0002\u000223\u0003",
    "\u0002\u0002\u000234\u0007\u0016\u0002\u000245\u0007\u0017\u0002\u0002",
    "59\u0007\u0019\u0002\u000268\u0005\u0006\u0004\u000276\u0003\u0002\u0002",
    "\u00028;\u0003\u0002\u0002\u000297\u0003\u0002\u0002\u00029:\u0003\u0002",
    "\u0002\u0002:<\u0003\u0002\u0002\u0002;9\u0003\u0002\u0002\u0002<Q\u0007",
    "\u0018\u0002\u0002=>\u0007\u0017\u0002\u0002>@\u0007\u0019\u0002\u0002",
    "?A\u0005\u0006\u0004\u0002@?\u0003\u0002\u0002\u0002AB\u0003\u0002\u0002",
    "\u0002B@\u0003\u0002\u0002\u0002BC\u0003\u0002\u0002\u0002CD\u0003\u0002",
    "\u0002\u0002DE\u0007\u0018\u0002\u0002EF\u0007\u0017\u0002\u0002FG\u0005",
    "\u0002\u0002\u0002GH\u0007\u0018\u0002\u0002HQ\u0003\u0002\u0002\u0002",
    "IJ\u0007\u000b\u0002\u0002JM\u0007\u0015\u0002\u0002KN\u0005\u0002\u0002",
    "\u0002LN\u0007\u001c\u0002\u0002MK\u0003\u0002\u0002\u0002ML\u0003\u0002",
    "\u0002\u0002NO\u0003\u0002\u0002\u0002OQ\u0007\u0016\u0002\u0002P!\u0003",
    "\u0002\u0002\u0002P%\u0003\u0002\u0002\u0002P&\u0003\u0002\u0002\u0002",
    "P\'\u0003\u0002\u0002\u0002P+\u0003\u0002\u0002\u0002P=\u0003\u0002",
    "\u0002\u0002PI\u0003\u0002\u0002\u0002Q\t\u0003\u0002\u0002\u0002\n",
    "\u0010\u0017\u001c19BMP"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'start'", "'end'", "'set'", "'numbers'", "'letters'", 
                     "'free'", "'memory'", "'read'", "'write'", "'if'", 
                     "'is'", "'not'", "'equal'", "'less'", "'greater'", 
                     "'move'", "'right'", "'left'", "'('", "')'", "'['", 
                     "']'", "'\n'" ];

var symbolicNames = [ null, "START", "END", "SET", "NUM", "LET", "FREE", 
                      "MEM", "READ", "WRITE", "IF", "IS", "NOT", "EQL", 
                      "LESS", "GRE", "MOVE", "RIGHT", "LEFT", "LPAR", "RPAR", 
                      "LSQ", "RSQ", "NEWLINE", "IDENTIFIER", "NUMBER", "STRLIT" ];

var ruleNames =  [ "intargs", "r", "expressions", "expression" ];

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
RomeParser.READ = 8;
RomeParser.WRITE = 9;
RomeParser.IF = 10;
RomeParser.IS = 11;
RomeParser.NOT = 12;
RomeParser.EQL = 13;
RomeParser.LESS = 14;
RomeParser.GRE = 15;
RomeParser.MOVE = 16;
RomeParser.RIGHT = 17;
RomeParser.LEFT = 18;
RomeParser.LPAR = 19;
RomeParser.RPAR = 20;
RomeParser.LSQ = 21;
RomeParser.RSQ = 22;
RomeParser.NEWLINE = 23;
RomeParser.IDENTIFIER = 24;
RomeParser.NUMBER = 25;
RomeParser.STRLIT = 26;

RomeParser.RULE_intargs = 0;
RomeParser.RULE_r = 1;
RomeParser.RULE_expressions = 2;
RomeParser.RULE_expression = 3;


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


function NumberContext(parser, ctx) {
	IntargsContext.call(this, parser);
    IntargsContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumberContext.prototype = Object.create(IntargsContext.prototype);
NumberContext.prototype.constructor = NumberContext;

RomeParser.NumberContext = NumberContext;

NumberContext.prototype.NUMBER = function() {
    return this.getToken(RomeParser.NUMBER, 0);
};
NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.exitNumber(this);
	}
};


function MemoryContext(parser, ctx) {
	IntargsContext.call(this, parser);
    IntargsContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MemoryContext.prototype = Object.create(IntargsContext.prototype);
MemoryContext.prototype.constructor = MemoryContext;

RomeParser.MemoryContext = MemoryContext;

MemoryContext.prototype.MEM = function() {
    return this.getToken(RomeParser.MEM, 0);
};

MemoryContext.prototype.LPAR = function() {
    return this.getToken(RomeParser.LPAR, 0);
};

MemoryContext.prototype.intargs = function() {
    return this.getTypedRuleContext(IntargsContext,0);
};

MemoryContext.prototype.RPAR = function() {
    return this.getToken(RomeParser.RPAR, 0);
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



RomeParser.IntargsContext = IntargsContext;

RomeParser.prototype.intargs = function() {

    var localctx = new IntargsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, RomeParser.RULE_intargs);
    try {
        this.state = 14;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RomeParser.NUMBER:
            localctx = new NumberContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 8;
            this.match(RomeParser.NUMBER);
            break;
        case RomeParser.MEM:
            localctx = new MemoryContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 9;
            this.match(RomeParser.MEM);
            this.state = 10;
            this.match(RomeParser.LPAR);
            this.state = 11;
            this.intargs();
            this.state = 12;
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




RomeParser.RContext = RContext;

RomeParser.prototype.r = function() {

    var localctx = new RContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, RomeParser.RULE_r);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 16;
        this.match(RomeParser.START);
        this.state = 17;
        this.match(RomeParser.NEWLINE);
        this.state = 21;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RomeParser.SET) | (1 << RomeParser.FREE) | (1 << RomeParser.READ) | (1 << RomeParser.WRITE) | (1 << RomeParser.IF) | (1 << RomeParser.MOVE) | (1 << RomeParser.LSQ))) !== 0)) {
            this.state = 18;
            this.expressions();
            this.state = 23;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 24;
        this.match(RomeParser.END);
        this.state = 26;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===RomeParser.NEWLINE) {
            this.state = 25;
            this.match(RomeParser.NEWLINE);
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




RomeParser.ExpressionsContext = ExpressionsContext;

RomeParser.prototype.expressions = function() {

    var localctx = new ExpressionsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, RomeParser.RULE_expressions);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 28;
        this.expression();
        this.state = 29;
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


function ReadContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ReadContext.prototype = Object.create(ExpressionContext.prototype);
ReadContext.prototype.constructor = ReadContext;

RomeParser.ReadContext = ReadContext;

ReadContext.prototype.READ = function() {
    return this.getToken(RomeParser.READ, 0);
};
ReadContext.prototype.enterRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.enterRead(this);
	}
};

ReadContext.prototype.exitRule = function(listener) {
    if(listener instanceof RomeListener ) {
        listener.exitRead(this);
	}
};


function LoopContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LoopContext.prototype = Object.create(ExpressionContext.prototype);
LoopContext.prototype.constructor = LoopContext;

RomeParser.LoopContext = LoopContext;

LoopContext.prototype.LSQ = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RomeParser.LSQ);
    } else {
        return this.getToken(RomeParser.LSQ, i);
    }
};


LoopContext.prototype.NEWLINE = function() {
    return this.getToken(RomeParser.NEWLINE, 0);
};

LoopContext.prototype.RSQ = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RomeParser.RSQ);
    } else {
        return this.getToken(RomeParser.RSQ, i);
    }
};


LoopContext.prototype.intargs = function() {
    return this.getTypedRuleContext(IntargsContext,0);
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

IfContext.prototype.IS = function() {
    return this.getToken(RomeParser.IS, 0);
};

IfContext.prototype.NOT = function() {
    return this.getToken(RomeParser.NOT, 0);
};

IfContext.prototype.LESS = function() {
    return this.getToken(RomeParser.LESS, 0);
};

IfContext.prototype.GRE = function() {
    return this.getToken(RomeParser.GRE, 0);
};

IfContext.prototype.EQL = function() {
    return this.getToken(RomeParser.EQL, 0);
};

IfContext.prototype.intargs = function() {
    return this.getTypedRuleContext(IntargsContext,0);
};

IfContext.prototype.STRLIT = function() {
    return this.getToken(RomeParser.STRLIT, 0);
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



RomeParser.ExpressionContext = ExpressionContext;

RomeParser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, RomeParser.RULE_expression);
    var _la = 0; // Token type
    try {
        this.state = 78;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RomeParser.SET:
            localctx = new SetContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 31;
            this.match(RomeParser.SET);
            this.state = 32;
            this.match(RomeParser.LPAR);
            this.state = 33;
            _la = this._input.LA(1);
            if(!(_la===RomeParser.NUM || _la===RomeParser.LET)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 34;
            this.match(RomeParser.RPAR);
            break;
        case RomeParser.FREE:
            localctx = new FreeContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 35;
            this.match(RomeParser.FREE);
            break;
        case RomeParser.READ:
            localctx = new ReadContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 36;
            this.match(RomeParser.READ);
            break;
        case RomeParser.MOVE:
            localctx = new MoveContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 37;
            this.match(RomeParser.MOVE);
            this.state = 38;
            this.match(RomeParser.LPAR);
            this.state = 39;
            _la = this._input.LA(1);
            if(!(_la===RomeParser.RIGHT || _la===RomeParser.LEFT)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 40;
            this.match(RomeParser.RPAR);
            break;
        case RomeParser.IF:
            localctx = new IfContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 41;
            this.match(RomeParser.IF);
            this.state = 42;
            this.match(RomeParser.LPAR);
            this.state = 43;
            _la = this._input.LA(1);
            if(!(_la===RomeParser.IS || _la===RomeParser.NOT)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 44;
            _la = this._input.LA(1);
            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RomeParser.EQL) | (1 << RomeParser.LESS) | (1 << RomeParser.GRE))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 47;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case RomeParser.MEM:
            case RomeParser.NUMBER:
                this.state = 45;
                this.intargs();
                break;
            case RomeParser.STRLIT:
                this.state = 46;
                this.match(RomeParser.STRLIT);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 49;
            this.match(RomeParser.RPAR);
            this.state = 50;
            this.match(RomeParser.LSQ);
            this.state = 51;
            this.match(RomeParser.NEWLINE);
            this.state = 55;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RomeParser.SET) | (1 << RomeParser.FREE) | (1 << RomeParser.READ) | (1 << RomeParser.WRITE) | (1 << RomeParser.IF) | (1 << RomeParser.MOVE) | (1 << RomeParser.LSQ))) !== 0)) {
                this.state = 52;
                this.expressions();
                this.state = 57;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 58;
            this.match(RomeParser.RSQ);
            break;
        case RomeParser.LSQ:
            localctx = new LoopContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 59;
            this.match(RomeParser.LSQ);
            this.state = 60;
            this.match(RomeParser.NEWLINE);
            this.state = 62; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 61;
                this.expressions();
                this.state = 64; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RomeParser.SET) | (1 << RomeParser.FREE) | (1 << RomeParser.READ) | (1 << RomeParser.WRITE) | (1 << RomeParser.IF) | (1 << RomeParser.MOVE) | (1 << RomeParser.LSQ))) !== 0));
            this.state = 66;
            this.match(RomeParser.RSQ);
            this.state = 67;
            this.match(RomeParser.LSQ);
            this.state = 68;
            this.intargs();
            this.state = 69;
            this.match(RomeParser.RSQ);
            break;
        case RomeParser.WRITE:
            localctx = new WriteContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 71;
            this.match(RomeParser.WRITE);
            this.state = 72;
            this.match(RomeParser.LPAR);
            this.state = 75;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case RomeParser.MEM:
            case RomeParser.NUMBER:
                this.state = 73;
                this.intargs();
                break;
            case RomeParser.STRLIT:
                this.state = 74;
                this.match(RomeParser.STRLIT);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 77;
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
