
import { RomeVisitor } from "../lang/RomeVisitor";
import MemoryBlock from "../entity/MemoryBlock";

// Visit a parse tree produced by RomeParser#Num.
RomeVisitor.prototype.visitNum = function(ctx) {
  return this.visitChildren(ctx);
};
