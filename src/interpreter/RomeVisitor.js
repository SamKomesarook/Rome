import { RomeVisitor } from "../lang/RomeVisitor";

RomeBaseVisitor = function(memArr, updateContentType) {
  RomeListener.call(this);
  this.memArr = memArr;
  this.updateContentType = updateContentType;
  return this;
};



// Visit a parse tree produced by RomeParser#Num.
RomeBaseVisitor.prototype.visitNum = function(ctx) {
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by RomeParser#Mem.
RomeBaseVisitor.prototype.visitMem = function(ctx) {
  return this.visitChildren(ctx);
};

<<<<<<< HEAD
// Visit a parse tree produced by RomeParser#Set.
RomeBaseVisitor.prototype.visitSet = function(ctx) {
  const affix = ")";
  // fetch the argument out from command
  var command = ctx.getText();
  var arg = command.substring(4, command.indexOf(affix));
  var selectedMem = getSelectedMem(this.memArr);
  console.log("Arg: ", arg);
  console.log("Mem: ", selectedMem);
  // this.memArr[selectedMem].props.contentType = arg;

  var tempMem = this.memArr[selectedMem];
  console.log("TEMP MEM: ", tempMem);

  var tempMemObj = new MemoryBlock(selectedMem, tempMem.type.name, tempMem.props.selected);
  tempMemObj.setContent(tempMem.props.content);
  tempMemObj.setContentType(arg);

  this.updateContentType(selectedMem, tempMemObj);
};


export default RomeBaseVisitor
=======
RomeVisitor.prototype.visitMove = function(ctx) {
  console.log("Visit Move!");
};

export default RomeVisitor;
>>>>>>> 11f46bbb15cd3d3dc99f7a9b95bebaf5c079f3aa
