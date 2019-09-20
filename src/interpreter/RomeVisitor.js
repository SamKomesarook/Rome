import { RomeVisitor } from "../lang/RomeVisitor";

// Visit a parse tree produced by RomeParser#Num.
RomeVisitor.prototype.visitNum = function(ctx) {
  return this.visitChildren(ctx);
};

RomeVisitor.prototype.visitMove = function(ctx) {
  console.log("Visit Move!");
};

export default RomeVisitor;
