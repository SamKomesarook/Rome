// Generated from Rome.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by RomeParser.
function RomeListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

RomeListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
RomeListener.prototype.constructor = RomeListener;

// Enter a parse tree produced by RomeParser#Num.
RomeListener.prototype.enterNum = function(ctx) {
};

// Exit a parse tree produced by RomeParser#Num.
RomeListener.prototype.exitNum = function(ctx) {
};


// Enter a parse tree produced by RomeParser#Mem.
RomeListener.prototype.enterMem = function(ctx) {
};

// Exit a parse tree produced by RomeParser#Mem.
RomeListener.prototype.exitMem = function(ctx) {
};


// Enter a parse tree produced by RomeParser#r.
RomeListener.prototype.enterR = function(ctx) {
};

// Exit a parse tree produced by RomeParser#r.
RomeListener.prototype.exitR = function(ctx) {
};


// Enter a parse tree produced by RomeParser#expressions.
RomeListener.prototype.enterExpressions = function(ctx) {
};

// Exit a parse tree produced by RomeParser#expressions.
RomeListener.prototype.exitExpressions = function(ctx) {
};


// Enter a parse tree produced by RomeParser#Cond.
RomeListener.prototype.enterCond = function(ctx) {
};

// Exit a parse tree produced by RomeParser#Cond.
RomeListener.prototype.exitCond = function(ctx) {
};


// Enter a parse tree produced by RomeParser#Set.
RomeListener.prototype.enterSet = function(ctx) {
};

// Exit a parse tree produced by RomeParser#Set.
RomeListener.prototype.exitSet = function(ctx) {
};


// Enter a parse tree produced by RomeParser#Free.
RomeListener.prototype.enterFree = function(ctx) {
};

// Exit a parse tree produced by RomeParser#Free.
RomeListener.prototype.exitFree = function(ctx) {
};


// Enter a parse tree produced by RomeParser#Read.
RomeListener.prototype.enterRead = function(ctx) {
};

// Exit a parse tree produced by RomeParser#Read.
RomeListener.prototype.exitRead = function(ctx) {
};


// Enter a parse tree produced by RomeParser#Move.
RomeListener.prototype.enterMove = function(ctx) {
};

// Exit a parse tree produced by RomeParser#Move.
RomeListener.prototype.exitMove = function(ctx) {
};


// Enter a parse tree produced by RomeParser#If.
RomeListener.prototype.enterIf = function(ctx) {
};

// Exit a parse tree produced by RomeParser#If.
RomeListener.prototype.exitIf = function(ctx) {
};


// Enter a parse tree produced by RomeParser#Loop.
RomeListener.prototype.enterLoop = function(ctx) {
};

// Exit a parse tree produced by RomeParser#Loop.
RomeListener.prototype.exitLoop = function(ctx) {
};


// Enter a parse tree produced by RomeParser#Write.
RomeListener.prototype.enterWrite = function(ctx) {
};

// Exit a parse tree produced by RomeParser#Write.
RomeListener.prototype.exitWrite = function(ctx) {
};


// Enter a parse tree produced by RomeParser#Snet.
RomeListener.prototype.enterSnet = function(ctx) {
};

// Exit a parse tree produced by RomeParser#Snet.
RomeListener.prototype.exitSnet = function(ctx) {
};


// Enter a parse tree produced by RomeParser#Rnet.
RomeListener.prototype.enterRnet = function(ctx) {
};

// Exit a parse tree produced by RomeParser#Rnet.
RomeListener.prototype.exitRnet = function(ctx) {
};


// Enter a parse tree produced by RomeParser#Kread.
RomeListener.prototype.enterKread = function(ctx) {
};

// Exit a parse tree produced by RomeParser#Kread.
RomeListener.prototype.exitKread = function(ctx) {
};


// Enter a parse tree produced by RomeParser#Swrite.
RomeListener.prototype.enterSwrite = function(ctx) {
};

// Exit a parse tree produced by RomeParser#Swrite.
RomeListener.prototype.exitSwrite = function(ctx) {
};



exports.RomeListener = RomeListener;