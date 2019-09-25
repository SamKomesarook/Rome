// Generated from Rome.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by RomeParser.

function RomeVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

RomeVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
RomeVisitor.prototype.constructor = RomeVisitor;

// Visit a parse tree produced by RomeParser#Num.
RomeVisitor.prototype.visitNum = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RomeParser#Mem.
RomeVisitor.prototype.visitMem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RomeParser#r.
RomeVisitor.prototype.visitR = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RomeParser#expressions.
RomeVisitor.prototype.visitExpressions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RomeParser#Cond.
RomeVisitor.prototype.visitCond = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RomeParser#Set.
RomeVisitor.prototype.visitSet = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RomeParser#Free.
RomeVisitor.prototype.visitFree = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RomeParser#Read.
RomeVisitor.prototype.visitRead = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RomeParser#Move.
RomeVisitor.prototype.visitMove = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RomeParser#If.
RomeVisitor.prototype.visitIf = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RomeParser#Loop.
RomeVisitor.prototype.visitLoop = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RomeParser#Write.
RomeVisitor.prototype.visitWrite = function(ctx) {
  return this.visitChildren(ctx);
};



exports.RomeVisitor = RomeVisitor;