// Generated from Rome.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by RomeParser.

function RomeVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

RomeVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
RomeVisitor.prototype.constructor = RomeVisitor;

// Visit a parse tree produced by RomeParser#Str.
RomeVisitor.prototype.visitStr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RomeParser#Io.
RomeVisitor.prototype.visitIo = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RomeParser#mem.
RomeVisitor.prototype.visitMem = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RomeParser#Num.
RomeVisitor.prototype.visitNum = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RomeParser#Memory.
RomeVisitor.prototype.visitMemory = function(ctx) {
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


// Visit a parse tree produced by RomeParser#whileCond.
RomeVisitor.prototype.visitWhileCond = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RomeParser#stylingExpressions.
RomeVisitor.prototype.visitStylingExpressions = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RomeParser#Paint.
RomeVisitor.prototype.visitPaint = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RomeParser#TextColor.
RomeVisitor.prototype.visitTextColor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RomeParser#TextSize.
RomeVisitor.prototype.visitTextSize = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RomeParser#TextAlign.
RomeVisitor.prototype.visitTextAlign = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RomeParser#Bold.
RomeVisitor.prototype.visitBold = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RomeParser#Italic.
RomeVisitor.prototype.visitItalic = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RomeParser#Underline.
RomeVisitor.prototype.visitUnderline = function(ctx) {
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


// Visit a parse tree produced by RomeParser#While.
RomeVisitor.prototype.visitWhile = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RomeParser#Write.
RomeVisitor.prototype.visitWrite = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RomeParser#Kread.
RomeVisitor.prototype.visitKread = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RomeParser#Swrite.
RomeVisitor.prototype.visitSwrite = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RomeParser#Name.
RomeVisitor.prototype.visitName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by RomeParser#Style.
RomeVisitor.prototype.visitStyle = function(ctx) {
  return this.visitChildren(ctx);
};



exports.RomeVisitor = RomeVisitor;