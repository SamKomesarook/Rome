import { RomeListener } from "../lang/RomeListener";
import MemoryBlock from "../entity/MemoryBlock";

var RInterpreter = function(memArr, updateContentType) {
  RomeListener.call(this);
  this.memArr = memArr;
  this.updateContentType = updateContentType;
  return this;
};

RInterpreter.prototype = Object.create(RomeListener.prototype);
RInterpreter.prototype.constructor = RInterpreter;

RInterpreter.prototype.enterR = function(ctx) {
  console.log("ENTER R!");
  // console.log(ctx.expressions());
  // // get name of tokens
  for (var i = 0; i < ctx.expressions().length; i++) {
    console.log("Next Token: ", ctx.expressions()[i].getText());
  }
};

RInterpreter.prototype.exitR = function(ctx) {
  //console.log("EXIT R!");
};

// Start read
RInterpreter.prototype.enterRead = function(ctx) {
  console.log("Enter Read");
};

RInterpreter.prototype.exitRead = function(ctx) {};
// End read

// Start set
RInterpreter.prototype.enterSet = function(ctx) {
  console.log("ENTER SET!");
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

RInterpreter.prototype.exitSet = function(ctx) {
  console.log("EXIT SET!");
};
// End set

function getSelectedMem(memArr) {
  for (var i = 0; i < memArr.length; i++) {
    if (memArr[i].props.selected === true) {
      return i;
    }
  }
}

export default RInterpreter;
