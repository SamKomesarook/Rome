// Generated from Machine.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var MachineListener = require('./MachineListener').MachineListener;
var MachineVisitor = require('./MachineVisitor').MachineVisitor;

var grammarFileName = "Machine.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u000b&\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0003\u0002\u0007\u0002\n\n\u0002\f\u0002\u000e\u0002\r\u000b",
    "\u0002\u0003\u0003\u0003\u0003\u0007\u0003\u0011\n\u0003\f\u0003\u000e",
    "\u0003\u0014\u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004\u001e\n",
    "\u0004\f\u0004\u000e\u0004!\u000b\u0004\u0003\u0004\u0005\u0004$\n\u0004",
    "\u0003\u0004\u0002\u0002\u0005\u0002\u0004\u0006\u0002\u0002\u0002+",
    "\u0002\u000b\u0003\u0002\u0002\u0002\u0004\u000e\u0003\u0002\u0002\u0002",
    "\u0006#\u0003\u0002\u0002\u0002\b\n\u0005\u0004\u0003\u0002\t\b\u0003",
    "\u0002\u0002\u0002\n\r\u0003\u0002\u0002\u0002\u000b\t\u0003\u0002\u0002",
    "\u0002\u000b\f\u0003\u0002\u0002\u0002\f\u0003\u0003\u0002\u0002\u0002",
    "\r\u000b\u0003\u0002\u0002\u0002\u000e\u0012\u0005\u0006\u0004\u0002",
    "\u000f\u0011\u0007\u000b\u0002\u0002\u0010\u000f\u0003\u0002\u0002\u0002",
    "\u0011\u0014\u0003\u0002\u0002\u0002\u0012\u0010\u0003\u0002\u0002\u0002",
    "\u0012\u0013\u0003\u0002\u0002\u0002\u0013\u0005\u0003\u0002\u0002\u0002",
    "\u0014\u0012\u0003\u0002\u0002\u0002\u0015$\u0007\u0003\u0002\u0002",
    "\u0016$\u0007\u0004\u0002\u0002\u0017$\u0007\u0005\u0002\u0002\u0018",
    "$\u0007\u0006\u0002\u0002\u0019$\u0007\u0007\u0002\u0002\u001a$\u0007",
    "\b\u0002\u0002\u001b\u001f\u0007\t\u0002\u0002\u001c\u001e\u0005\u0004",
    "\u0003\u0002\u001d\u001c\u0003\u0002\u0002\u0002\u001e!\u0003\u0002",
    "\u0002\u0002\u001f\u001d\u0003\u0002\u0002\u0002\u001f \u0003\u0002",
    "\u0002\u0002 \"\u0003\u0002\u0002\u0002!\u001f\u0003\u0002\u0002\u0002",
    "\"$\u0007\n\u0002\u0002#\u0015\u0003\u0002\u0002\u0002#\u0016\u0003",
    "\u0002\u0002\u0002#\u0017\u0003\u0002\u0002\u0002#\u0018\u0003\u0002",
    "\u0002\u0002#\u0019\u0003\u0002\u0002\u0002#\u001a\u0003\u0002\u0002",
    "\u0002#\u001b\u0003\u0002\u0002\u0002$\u0007\u0003\u0002\u0002\u0002",
    "\u0006\u000b\u0012\u001f#"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'>'", "'<'", "'.'", "','", "'+'", "'-'", "'['", 
                     "']'", "'\n'" ];

var symbolicNames = [ null, "MOVER", "MOVEL", "PRINT", "READ", "INC", "DEC", 
                      "LPAR", "RPAR", "NEWLINE" ];

var ruleNames =  [ "r", "expressions", "expression" ];

function MachineParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

MachineParser.prototype = Object.create(antlr4.Parser.prototype);
MachineParser.prototype.constructor = MachineParser;

Object.defineProperty(MachineParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

MachineParser.EOF = antlr4.Token.EOF;
MachineParser.MOVER = 1;
MachineParser.MOVEL = 2;
MachineParser.PRINT = 3;
MachineParser.READ = 4;
MachineParser.INC = 5;
MachineParser.DEC = 6;
MachineParser.LPAR = 7;
MachineParser.RPAR = 8;
MachineParser.NEWLINE = 9;

MachineParser.RULE_r = 0;
MachineParser.RULE_expressions = 1;
MachineParser.RULE_expression = 2;


function RContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MachineParser.RULE_r;
    return this;
}

RContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RContext.prototype.constructor = RContext;

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
    if(listener instanceof MachineListener ) {
        listener.enterR(this);
	}
};

RContext.prototype.exitRule = function(listener) {
    if(listener instanceof MachineListener ) {
        listener.exitR(this);
	}
};

RContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MachineVisitor ) {
        return visitor.visitR(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MachineParser.RContext = RContext;

MachineParser.prototype.r = function() {

    var localctx = new RContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, MachineParser.RULE_r);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 9;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MachineParser.MOVER) | (1 << MachineParser.MOVEL) | (1 << MachineParser.PRINT) | (1 << MachineParser.READ) | (1 << MachineParser.INC) | (1 << MachineParser.DEC) | (1 << MachineParser.LPAR))) !== 0)) {
            this.state = 6;
            this.expressions();
            this.state = 11;
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
    this.ruleIndex = MachineParser.RULE_expressions;
    return this;
}

ExpressionsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionsContext.prototype.constructor = ExpressionsContext;

ExpressionsContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ExpressionsContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MachineParser.NEWLINE);
    } else {
        return this.getToken(MachineParser.NEWLINE, i);
    }
};


ExpressionsContext.prototype.enterRule = function(listener) {
    if(listener instanceof MachineListener ) {
        listener.enterExpressions(this);
	}
};

ExpressionsContext.prototype.exitRule = function(listener) {
    if(listener instanceof MachineListener ) {
        listener.exitExpressions(this);
	}
};

ExpressionsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MachineVisitor ) {
        return visitor.visitExpressions(this);
    } else {
        return visitor.visitChildren(this);
    }
};




MachineParser.ExpressionsContext = ExpressionsContext;

MachineParser.prototype.expressions = function() {

    var localctx = new ExpressionsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, MachineParser.RULE_expressions);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 12;
        this.expression();
        this.state = 16;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MachineParser.NEWLINE) {
            this.state = 13;
            this.match(MachineParser.NEWLINE);
            this.state = 18;
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


function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MachineParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function MoveRContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MoveRContext.prototype = Object.create(ExpressionContext.prototype);
MoveRContext.prototype.constructor = MoveRContext;

MachineParser.MoveRContext = MoveRContext;

MoveRContext.prototype.MOVER = function() {
    return this.getToken(MachineParser.MOVER, 0);
};
MoveRContext.prototype.enterRule = function(listener) {
    if(listener instanceof MachineListener ) {
        listener.enterMoveR(this);
	}
};

MoveRContext.prototype.exitRule = function(listener) {
    if(listener instanceof MachineListener ) {
        listener.exitMoveR(this);
	}
};

MoveRContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MachineVisitor ) {
        return visitor.visitMoveR(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ReadContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ReadContext.prototype = Object.create(ExpressionContext.prototype);
ReadContext.prototype.constructor = ReadContext;

MachineParser.ReadContext = ReadContext;

ReadContext.prototype.READ = function() {
    return this.getToken(MachineParser.READ, 0);
};
ReadContext.prototype.enterRule = function(listener) {
    if(listener instanceof MachineListener ) {
        listener.enterRead(this);
	}
};

ReadContext.prototype.exitRule = function(listener) {
    if(listener instanceof MachineListener ) {
        listener.exitRead(this);
	}
};

ReadContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MachineVisitor ) {
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

MachineParser.LoopContext = LoopContext;

LoopContext.prototype.LPAR = function() {
    return this.getToken(MachineParser.LPAR, 0);
};

LoopContext.prototype.RPAR = function() {
    return this.getToken(MachineParser.RPAR, 0);
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
    if(listener instanceof MachineListener ) {
        listener.enterLoop(this);
	}
};

LoopContext.prototype.exitRule = function(listener) {
    if(listener instanceof MachineListener ) {
        listener.exitLoop(this);
	}
};

LoopContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MachineVisitor ) {
        return visitor.visitLoop(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PrintContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PrintContext.prototype = Object.create(ExpressionContext.prototype);
PrintContext.prototype.constructor = PrintContext;

MachineParser.PrintContext = PrintContext;

PrintContext.prototype.PRINT = function() {
    return this.getToken(MachineParser.PRINT, 0);
};
PrintContext.prototype.enterRule = function(listener) {
    if(listener instanceof MachineListener ) {
        listener.enterPrint(this);
	}
};

PrintContext.prototype.exitRule = function(listener) {
    if(listener instanceof MachineListener ) {
        listener.exitPrint(this);
	}
};

PrintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MachineVisitor ) {
        return visitor.visitPrint(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DecContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DecContext.prototype = Object.create(ExpressionContext.prototype);
DecContext.prototype.constructor = DecContext;

MachineParser.DecContext = DecContext;

DecContext.prototype.DEC = function() {
    return this.getToken(MachineParser.DEC, 0);
};
DecContext.prototype.enterRule = function(listener) {
    if(listener instanceof MachineListener ) {
        listener.enterDec(this);
	}
};

DecContext.prototype.exitRule = function(listener) {
    if(listener instanceof MachineListener ) {
        listener.exitDec(this);
	}
};

DecContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MachineVisitor ) {
        return visitor.visitDec(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MoveLContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MoveLContext.prototype = Object.create(ExpressionContext.prototype);
MoveLContext.prototype.constructor = MoveLContext;

MachineParser.MoveLContext = MoveLContext;

MoveLContext.prototype.MOVEL = function() {
    return this.getToken(MachineParser.MOVEL, 0);
};
MoveLContext.prototype.enterRule = function(listener) {
    if(listener instanceof MachineListener ) {
        listener.enterMoveL(this);
	}
};

MoveLContext.prototype.exitRule = function(listener) {
    if(listener instanceof MachineListener ) {
        listener.exitMoveL(this);
	}
};

MoveLContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MachineVisitor ) {
        return visitor.visitMoveL(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IncContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IncContext.prototype = Object.create(ExpressionContext.prototype);
IncContext.prototype.constructor = IncContext;

MachineParser.IncContext = IncContext;

IncContext.prototype.INC = function() {
    return this.getToken(MachineParser.INC, 0);
};
IncContext.prototype.enterRule = function(listener) {
    if(listener instanceof MachineListener ) {
        listener.enterInc(this);
	}
};

IncContext.prototype.exitRule = function(listener) {
    if(listener instanceof MachineListener ) {
        listener.exitInc(this);
	}
};

IncContext.prototype.accept = function(visitor) {
    if ( visitor instanceof MachineVisitor ) {
        return visitor.visitInc(this);
    } else {
        return visitor.visitChildren(this);
    }
};



MachineParser.ExpressionContext = ExpressionContext;

MachineParser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, MachineParser.RULE_expression);
    var _la = 0; // Token type
    try {
        this.state = 33;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case MachineParser.MOVER:
            localctx = new MoveRContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 19;
            this.match(MachineParser.MOVER);
            break;
        case MachineParser.MOVEL:
            localctx = new MoveLContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 20;
            this.match(MachineParser.MOVEL);
            break;
        case MachineParser.PRINT:
            localctx = new PrintContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 21;
            this.match(MachineParser.PRINT);
            break;
        case MachineParser.READ:
            localctx = new ReadContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 22;
            this.match(MachineParser.READ);
            break;
        case MachineParser.INC:
            localctx = new IncContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 23;
            this.match(MachineParser.INC);
            break;
        case MachineParser.DEC:
            localctx = new DecContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 24;
            this.match(MachineParser.DEC);
            break;
        case MachineParser.LPAR:
            localctx = new LoopContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 25;
            this.match(MachineParser.LPAR);
            this.state = 29;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << MachineParser.MOVER) | (1 << MachineParser.MOVEL) | (1 << MachineParser.PRINT) | (1 << MachineParser.READ) | (1 << MachineParser.INC) | (1 << MachineParser.DEC) | (1 << MachineParser.LPAR))) !== 0)) {
                this.state = 26;
                this.expressions();
                this.state = 31;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 32;
            this.match(MachineParser.RPAR);
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

exports.ReadContext = ReadContext;
exports.MachineParser = MachineParser;
