// Generated from Rome.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var RomeListener = require('./RomeListener').RomeListener;
var RomeVisitor = require('./RomeVisitor').RomeVisitor;

var grammarFileName = "Rome.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003%\u0086\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0005\u0002\u0013\n",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u0019",
    "\n\u0003\u0003\u0003\u0007\u0003\u001c\n\u0003\f\u0003\u000e\u0003\u001f",
    "\u000b\u0003\u0003\u0003\u0003\u0003\u0007\u0003#\n\u0003\f\u0003\u000e",
    "\u0003&\u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005",
    "1\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006",
    "C\n\u0006\f\u0006\u000e\u0006F\u000b\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0007\u0006L\n\u0006\f\u0006\u000e\u0006O\u000b\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006Z\n\u0006\f\u0006\u000e",
    "\u0006]\u000b\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0005\u0006e\n\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006l\n\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006s\n\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006",
    "z\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0005\u0006\u0081\n\u0006\u0003\u0006\u0005\u0006\u0084\n\u0006\u0003",
    "\u0006\u0002\u0002\u0007\u0002\u0004\u0006\b\n\u0002\u0007\u0003\u0002",
    "\u0010\u0011\u0003\u0002\u0012\u0014\u0003\u0002\u0006\u0007\u0003\u0002",
    "\u001a\u001b\u0003\u0002\u0015\u0016\u0002\u0097\u0002\u0012\u0003\u0002",
    "\u0002\u0002\u0004\u0014\u0003\u0002\u0002\u0002\u0006\'\u0003\u0002",
    "\u0002\u0002\b*\u0003\u0002\u0002\u0002\n\u0083\u0003\u0002\u0002\u0002",
    "\f\u0013\u0007$\u0002\u0002\r\u000e\u0007\t\u0002\u0002\u000e\u000f",
    "\u0007\u001c\u0002\u0002\u000f\u0010\u0005\u0002\u0002\u0002\u0010\u0011",
    "\u0007\u001d\u0002\u0002\u0011\u0013\u0003\u0002\u0002\u0002\u0012\f",
    "\u0003\u0002\u0002\u0002\u0012\r\u0003\u0002\u0002\u0002\u0013\u0003",
    "\u0003\u0002\u0002\u0002\u0014\u0015\u0007\u0003\u0002\u0002\u0015\u0018",
    "\u0007!\u0002\u0002\u0016\u0017\u0007\u000e\u0002\u0002\u0017\u0019",
    "\u0007!\u0002\u0002\u0018\u0016\u0003\u0002\u0002\u0002\u0018\u0019",
    "\u0003\u0002\u0002\u0002\u0019\u001d\u0003\u0002\u0002\u0002\u001a\u001c",
    "\u0005\u0006\u0004\u0002\u001b\u001a\u0003\u0002\u0002\u0002\u001c\u001f",
    "\u0003\u0002\u0002\u0002\u001d\u001b\u0003\u0002\u0002\u0002\u001d\u001e",
    "\u0003\u0002\u0002\u0002\u001e \u0003\u0002\u0002\u0002\u001f\u001d",
    "\u0003\u0002\u0002\u0002 $\u0007\u0004\u0002\u0002!#\u0007!\u0002\u0002",
    "\"!\u0003\u0002\u0002\u0002#&\u0003\u0002\u0002\u0002$\"\u0003\u0002",
    "\u0002\u0002$%\u0003\u0002\u0002\u0002%\u0005\u0003\u0002\u0002\u0002",
    "&$\u0003\u0002\u0002\u0002\'(\u0005\n\u0006\u0002()\u0007!\u0002\u0002",
    ")\u0007\u0003\u0002\u0002\u0002*+\t\u0002\u0002\u0002+,\u0007\"\u0002",
    "\u0002,-\t\u0003\u0002\u0002-0\u0007\"\u0002\u0002.1\u0005\u0002\u0002",
    "\u0002/1\u0007%\u0002\u00020.\u0003\u0002\u0002\u00020/\u0003\u0002",
    "\u0002\u00021\t\u0003\u0002\u0002\u000223\u0007\u0005\u0002\u000234",
    "\u0007\u001c\u0002\u000245\t\u0004\u0002\u00025\u0084\u0007\u001d\u0002",
    "\u00026\u0084\u0007\b\u0002\u00027\u0084\u0007\f\u0002\u000289\u0007",
    "\u0019\u0002\u00029:\u0007\u001c\u0002\u0002:;\t\u0005\u0002\u0002;",
    "\u0084\u0007\u001d\u0002\u0002<=\u0007\u000f\u0002\u0002=>\u0007\u001c",
    "\u0002\u0002>D\u0005\b\u0005\u0002?@\t\u0006\u0002\u0002@A\u0007\"\u0002",
    "\u0002AC\u0005\b\u0005\u0002B?\u0003\u0002\u0002\u0002CF\u0003\u0002",
    "\u0002\u0002DB\u0003\u0002\u0002\u0002DE\u0003\u0002\u0002\u0002EG\u0003",
    "\u0002\u0002\u0002FD\u0003\u0002\u0002\u0002GH\u0007\u001d\u0002\u0002",
    "HI\u0007\u001e\u0002\u0002IM\u0007!\u0002\u0002JL\u0005\u0006\u0004",
    "\u0002KJ\u0003\u0002\u0002\u0002LO\u0003\u0002\u0002\u0002MK\u0003\u0002",
    "\u0002\u0002MN\u0003\u0002\u0002\u0002NP\u0003\u0002\u0002\u0002OM\u0003",
    "\u0002\u0002\u0002PQ\u0007\u001f\u0002\u0002Q\u0084\u0003\u0002\u0002",
    "\u0002RS\u0007 \u0002\u0002ST\u0007\u001c\u0002\u0002TU\u0005\u0002",
    "\u0002\u0002UV\u0007\u001d\u0002\u0002VW\u0007\u001e\u0002\u0002W[\u0007",
    "!\u0002\u0002XZ\u0005\u0006\u0004\u0002YX\u0003\u0002\u0002\u0002Z]",
    "\u0003\u0002\u0002\u0002[Y\u0003\u0002\u0002\u0002[\\\u0003\u0002\u0002",
    "\u0002\\^\u0003\u0002\u0002\u0002][\u0003\u0002\u0002\u0002^_\u0007",
    "\u001f\u0002\u0002_\u0084\u0003\u0002\u0002\u0002`a\u0007\r\u0002\u0002",
    "ad\u0007\u001c\u0002\u0002be\u0005\u0002\u0002\u0002ce\u0007%\u0002",
    "\u0002db\u0003\u0002\u0002\u0002dc\u0003\u0002\u0002\u0002ef\u0003\u0002",
    "\u0002\u0002f\u0084\u0007\u001d\u0002\u0002gh\u0007\u0017\u0002\u0002",
    "hk\u0007\u001c\u0002\u0002il\u0005\u0002\u0002\u0002jl\u0007%\u0002",
    "\u0002ki\u0003\u0002\u0002\u0002kj\u0003\u0002\u0002\u0002lm\u0003\u0002",
    "\u0002\u0002m\u0084\u0007\u001d\u0002\u0002no\u0007\u0018\u0002\u0002",
    "or\u0007\u001c\u0002\u0002ps\u0005\u0002\u0002\u0002qs\u0007%\u0002",
    "\u0002rp\u0003\u0002\u0002\u0002rq\u0003\u0002\u0002\u0002st\u0003\u0002",
    "\u0002\u0002t\u0084\u0007\u001d\u0002\u0002uv\u0007\n\u0002\u0002vy",
    "\u0007\u001c\u0002\u0002wz\u0005\u0002\u0002\u0002xz\u0007%\u0002\u0002",
    "yw\u0003\u0002\u0002\u0002yx\u0003\u0002\u0002\u0002z{\u0003\u0002\u0002",
    "\u0002{\u0084\u0007\u001d\u0002\u0002|}\u0007\u000b\u0002\u0002}\u0080",
    "\u0007\u001c\u0002\u0002~\u0081\u0005\u0002\u0002\u0002\u007f\u0081",
    "\u0007%\u0002\u0002\u0080~\u0003\u0002\u0002\u0002\u0080\u007f\u0003",
    "\u0002\u0002\u0002\u0081\u0082\u0003\u0002\u0002\u0002\u0082\u0084\u0007",
    "\u001d\u0002\u0002\u00832\u0003\u0002\u0002\u0002\u00836\u0003\u0002",
    "\u0002\u0002\u00837\u0003\u0002\u0002\u0002\u00838\u0003\u0002\u0002",
    "\u0002\u0083<\u0003\u0002\u0002\u0002\u0083R\u0003\u0002\u0002\u0002",
    "\u0083`\u0003\u0002\u0002\u0002\u0083g\u0003\u0002\u0002\u0002\u0083",
    "n\u0003\u0002\u0002\u0002\u0083u\u0003\u0002\u0002\u0002\u0083|\u0003",
    "\u0002\u0002\u0002\u0084\u000b\u0003\u0002\u0002\u0002\u0010\u0012\u0018",
    "\u001d$0DM[dkry\u0080\u0083"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'start'", "'end'", "'set'", "'numbers'", "'letters'", 
                     "'free'", "'memory'", "'read_keyboard'", "'write_screen'", 
                     "'read'", "'write'", "'import'", "'if'", "'is'", "'not'", 
                     "'equal'", "'less'", "'greater'", "'and'", "'or'", 
                     "'write_net'", "'read_net'", "'move'", "'right'", "'left'", 
                     "'('", "')'", "'{'", "'}'", "'loop'", "'\n'", "' '" ];

var symbolicNames = [ null, "START", "END", "SET", "NUM", "LET", "FREE", 
                      "MEM", "KREAD", "SWRITE", "READ", "WRITE", "IMP", 
                      "IF", "IS", "NOT", "EQL", "LESS", "GRE", "AND", "OR", 
                      "SNET", "RNET", "MOVE", "RIGHT", "LEFT", "LPAR", "RPAR", 
                      "LSQ", "RSQ", "LOOP", "NEWLINE", "SPACE", "IDENTIFIER", 
                      "NUMBER", "STRLIT" ];

var ruleNames =  [ "intargs", "r", "expressions", "conditional", "expression" ];

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
RomeParser.READ = 10;
RomeParser.WRITE = 11;
RomeParser.IMP = 12;
RomeParser.IF = 13;
RomeParser.IS = 14;
RomeParser.NOT = 15;
RomeParser.EQL = 16;
RomeParser.LESS = 17;
RomeParser.GRE = 18;
RomeParser.AND = 19;
RomeParser.OR = 20;
RomeParser.SNET = 21;
RomeParser.RNET = 22;
RomeParser.MOVE = 23;
RomeParser.RIGHT = 24;
RomeParser.LEFT = 25;
RomeParser.LPAR = 26;
RomeParser.RPAR = 27;
RomeParser.LSQ = 28;
RomeParser.RSQ = 29;
RomeParser.LOOP = 30;
RomeParser.NEWLINE = 31;
RomeParser.SPACE = 32;
RomeParser.IDENTIFIER = 33;
RomeParser.NUMBER = 34;
RomeParser.STRLIT = 35;

RomeParser.RULE_intargs = 0;
RomeParser.RULE_r = 1;
RomeParser.RULE_expressions = 2;
RomeParser.RULE_conditional = 3;
RomeParser.RULE_expression = 4;


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
    this.enterRule(localctx, 0, RomeParser.RULE_intargs);
    try {
        this.state = 16;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RomeParser.NUMBER:
            localctx = new NumContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 10;
            this.match(RomeParser.NUMBER);
            break;
        case RomeParser.MEM:
            localctx = new MemContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 11;
            this.match(RomeParser.MEM);
            this.state = 12;
            this.match(RomeParser.LPAR);
            this.state = 13;
            this.intargs();
            this.state = 14;
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

RContext.prototype.IMP = function() {
    return this.getToken(RomeParser.IMP, 0);
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
    this.enterRule(localctx, 2, RomeParser.RULE_r);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 18;
        this.match(RomeParser.START);
        this.state = 19;
        this.match(RomeParser.NEWLINE);
        this.state = 22;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===RomeParser.IMP) {
            this.state = 20;
            this.match(RomeParser.IMP);
            this.state = 21;
            this.match(RomeParser.NEWLINE);
        }

        this.state = 27;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RomeParser.SET) | (1 << RomeParser.FREE) | (1 << RomeParser.KREAD) | (1 << RomeParser.SWRITE) | (1 << RomeParser.READ) | (1 << RomeParser.WRITE) | (1 << RomeParser.IF) | (1 << RomeParser.SNET) | (1 << RomeParser.RNET) | (1 << RomeParser.MOVE) | (1 << RomeParser.LOOP))) !== 0)) {
            this.state = 24;
            this.expressions();
            this.state = 29;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 30;
        this.match(RomeParser.END);
        this.state = 34;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RomeParser.NEWLINE) {
            this.state = 31;
            this.match(RomeParser.NEWLINE);
            this.state = 36;
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
    this.enterRule(localctx, 4, RomeParser.RULE_expressions);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 37;
        this.expression();
        this.state = 38;
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
    this.enterRule(localctx, 6, RomeParser.RULE_conditional);
    var _la = 0; // Token type
    try {
        localctx = new CondContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 40;
        _la = this._input.LA(1);
        if(!(_la===RomeParser.IS || _la===RomeParser.NOT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 41;
        this.match(RomeParser.SPACE);
        this.state = 42;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RomeParser.EQL) | (1 << RomeParser.LESS) | (1 << RomeParser.GRE))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 43;
        this.match(RomeParser.SPACE);
        this.state = 46;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RomeParser.MEM:
        case RomeParser.NUMBER:
            this.state = 44;
            this.intargs();
            break;
        case RomeParser.STRLIT:
            this.state = 45;
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

ReadContext.prototype.accept = function(visitor) {
    if ( visitor instanceof RomeVisitor ) {
        return visitor.visitRead(this);
    } else {
        return visitor.visitChildren(this);
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

KreadContext.prototype.LPAR = function() {
    return this.getToken(RomeParser.LPAR, 0);
};

KreadContext.prototype.RPAR = function() {
    return this.getToken(RomeParser.RPAR, 0);
};

KreadContext.prototype.intargs = function() {
    return this.getTypedRuleContext(IntargsContext,0);
};

KreadContext.prototype.STRLIT = function() {
    return this.getToken(RomeParser.STRLIT, 0);
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

IfContext.prototype.conditional = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConditionalContext);
    } else {
        return this.getTypedRuleContext(ConditionalContext,i);
    }
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

IfContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RomeParser.SPACE);
    } else {
        return this.getToken(RomeParser.SPACE, i);
    }
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

IfContext.prototype.AND = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RomeParser.AND);
    } else {
        return this.getToken(RomeParser.AND, i);
    }
};


IfContext.prototype.OR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RomeParser.OR);
    } else {
        return this.getToken(RomeParser.OR, i);
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

SnetContext.prototype.SNET = function() {
    return this.getToken(RomeParser.SNET, 0);
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

RnetContext.prototype.RNET = function() {
    return this.getToken(RomeParser.RNET, 0);
};

RnetContext.prototype.LPAR = function() {
    return this.getToken(RomeParser.LPAR, 0);
};

RnetContext.prototype.RPAR = function() {
    return this.getToken(RomeParser.RPAR, 0);
};

RnetContext.prototype.intargs = function() {
    return this.getTypedRuleContext(IntargsContext,0);
};

RnetContext.prototype.STRLIT = function() {
    return this.getToken(RomeParser.STRLIT, 0);
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
    this.enterRule(localctx, 8, RomeParser.RULE_expression);
    var _la = 0; // Token type
    try {
        this.state = 129;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RomeParser.SET:
            localctx = new SetContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 48;
            this.match(RomeParser.SET);
            this.state = 49;
            this.match(RomeParser.LPAR);
            this.state = 50;
            _la = this._input.LA(1);
            if(!(_la===RomeParser.NUM || _la===RomeParser.LET)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 51;
            this.match(RomeParser.RPAR);
            break;
        case RomeParser.FREE:
            localctx = new FreeContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 52;
            this.match(RomeParser.FREE);
            break;
        case RomeParser.READ:
            localctx = new ReadContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 53;
            this.match(RomeParser.READ);
            break;
        case RomeParser.MOVE:
            localctx = new MoveContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 54;
            this.match(RomeParser.MOVE);
            this.state = 55;
            this.match(RomeParser.LPAR);
            this.state = 56;
            _la = this._input.LA(1);
            if(!(_la===RomeParser.RIGHT || _la===RomeParser.LEFT)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 57;
            this.match(RomeParser.RPAR);
            break;
        case RomeParser.IF:
            localctx = new IfContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 58;
            this.match(RomeParser.IF);
            this.state = 59;
            this.match(RomeParser.LPAR);
            this.state = 60;
            this.conditional();
            this.state = 66;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===RomeParser.AND || _la===RomeParser.OR) {
                this.state = 61;
                _la = this._input.LA(1);
                if(!(_la===RomeParser.AND || _la===RomeParser.OR)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 62;
                this.match(RomeParser.SPACE);
                this.state = 63;
                this.conditional();
                this.state = 68;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 69;
            this.match(RomeParser.RPAR);
            this.state = 70;
            this.match(RomeParser.LSQ);
            this.state = 71;
            this.match(RomeParser.NEWLINE);
            this.state = 75;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RomeParser.SET) | (1 << RomeParser.FREE) | (1 << RomeParser.KREAD) | (1 << RomeParser.SWRITE) | (1 << RomeParser.READ) | (1 << RomeParser.WRITE) | (1 << RomeParser.IF) | (1 << RomeParser.SNET) | (1 << RomeParser.RNET) | (1 << RomeParser.MOVE) | (1 << RomeParser.LOOP))) !== 0)) {
                this.state = 72;
                this.expressions();
                this.state = 77;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 78;
            this.match(RomeParser.RSQ);
            break;
        case RomeParser.LOOP:
            localctx = new LoopContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 80;
            this.match(RomeParser.LOOP);
            this.state = 81;
            this.match(RomeParser.LPAR);
            this.state = 82;
            this.intargs();
            this.state = 83;
            this.match(RomeParser.RPAR);
            this.state = 84;
            this.match(RomeParser.LSQ);
            this.state = 85;
            this.match(RomeParser.NEWLINE);
            this.state = 89;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RomeParser.SET) | (1 << RomeParser.FREE) | (1 << RomeParser.KREAD) | (1 << RomeParser.SWRITE) | (1 << RomeParser.READ) | (1 << RomeParser.WRITE) | (1 << RomeParser.IF) | (1 << RomeParser.SNET) | (1 << RomeParser.RNET) | (1 << RomeParser.MOVE) | (1 << RomeParser.LOOP))) !== 0)) {
                this.state = 86;
                this.expressions();
                this.state = 91;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 92;
            this.match(RomeParser.RSQ);
            break;
        case RomeParser.WRITE:
            localctx = new WriteContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 94;
            this.match(RomeParser.WRITE);
            this.state = 95;
            this.match(RomeParser.LPAR);
            this.state = 98;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case RomeParser.MEM:
            case RomeParser.NUMBER:
                this.state = 96;
                this.intargs();
                break;
            case RomeParser.STRLIT:
                this.state = 97;
                this.match(RomeParser.STRLIT);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 100;
            this.match(RomeParser.RPAR);
            break;
        case RomeParser.SNET:
            localctx = new SnetContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 101;
            this.match(RomeParser.SNET);
            this.state = 102;
            this.match(RomeParser.LPAR);
            this.state = 105;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case RomeParser.MEM:
            case RomeParser.NUMBER:
                this.state = 103;
                this.intargs();
                break;
            case RomeParser.STRLIT:
                this.state = 104;
                this.match(RomeParser.STRLIT);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 107;
            this.match(RomeParser.RPAR);
            break;
        case RomeParser.RNET:
            localctx = new RnetContext(this, localctx);
            this.enterOuterAlt(localctx, 9);
            this.state = 108;
            this.match(RomeParser.RNET);
            this.state = 109;
            this.match(RomeParser.LPAR);
            this.state = 112;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case RomeParser.MEM:
            case RomeParser.NUMBER:
                this.state = 110;
                this.intargs();
                break;
            case RomeParser.STRLIT:
                this.state = 111;
                this.match(RomeParser.STRLIT);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 114;
            this.match(RomeParser.RPAR);
            break;
        case RomeParser.KREAD:
            localctx = new KreadContext(this, localctx);
            this.enterOuterAlt(localctx, 10);
            this.state = 115;
            this.match(RomeParser.KREAD);
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
        case RomeParser.SWRITE:
            localctx = new SwriteContext(this, localctx);
            this.enterOuterAlt(localctx, 11);
            this.state = 122;
            this.match(RomeParser.SWRITE);
            this.state = 123;
            this.match(RomeParser.LPAR);
            this.state = 126;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case RomeParser.MEM:
            case RomeParser.NUMBER:
                this.state = 124;
                this.intargs();
                break;
            case RomeParser.STRLIT:
                this.state = 125;
                this.match(RomeParser.STRLIT);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 128;
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
