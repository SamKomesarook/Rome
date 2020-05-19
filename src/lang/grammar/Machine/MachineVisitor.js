// Generated from Machine.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by MachineParser.

function MachineVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

MachineVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
MachineVisitor.prototype.constructor = MachineVisitor;

// Visit a parse tree produced by MachineParser#r.
MachineVisitor.prototype.visitR = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MachineParser#expressions.
MachineVisitor.prototype.visitExpressions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MachineParser#MoveR.
MachineVisitor.prototype.visitMoveR = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MachineParser#MoveL.
MachineVisitor.prototype.visitMoveL = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MachineParser#Print.
MachineVisitor.prototype.visitPrint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MachineParser#Read.
MachineVisitor.prototype.visitRead = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MachineParser#Inc.
MachineVisitor.prototype.visitInc = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MachineParser#Dec.
MachineVisitor.prototype.visitDec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MachineParser#Loop.
MachineVisitor.prototype.visitLoop = function(ctx) {
  return this.visitChildren(ctx);
};



exports.MachineVisitor = MachineVisitor;