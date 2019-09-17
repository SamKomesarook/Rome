import { RomeListener } from "../lang/RomeListener";
import MemoryBlock from "../entity/MemoryBlock";

var RInterpreter = function(
  memArr,
  memObjToSymbol,
  updateMem,
  updateContentType,
  moveMem
) {
  RomeListener.call(this);
  this.memArr = memArr;
  this.memObjToSymbol = memObjToSymbol;
  this.updateMem = updateMem;
  this.updateContentType = updateContentType;
  this.moveMem = moveMem;
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
  var selectedMem = getSelectedMemId(this.memArr);
  // console.log("Arg: ", arg);
  // console.log("Mem: ", selectedMem);

  var tempMem = this.memArr[selectedMem];
  // console.log("TEMP MEM: ", tempMem);

  var tempMemObj = createMemObj(
    tempMem.props.id,
    tempMem.type.name,
    tempMem.props.selected,
    tempMem.props.content,
    arg
  );

  this.updateContentType(selectedMem, tempMemObj);
};

RInterpreter.prototype.exitSet = function(ctx) {
  console.log("EXIT SET!");
};
// End set

// Start move
RInterpreter.prototype.enterMove = function(ctx) {
  console.log("ENTER Move!");
  const affix = ")";
  var command = ctx.getText();
  var arg = command.substring(5, command.indexOf(affix));
  var selectedMem = getSelectedMemId(this.memArr);
  console.log("Arg: ", arg);
  console.log("Mem: ", selectedMem);

  var tempOldMem = this.memArr[selectedMem];
  var tempNewMem =
    arg === "right"
      ? this.memArr[selectedMem + 1]
      : this.memArr[selectedMem - 1];

  var tempOldMemObj = createMemObj(
    tempOldMem.props.id,
    tempOldMem.type.name,
    false,
    tempOldMem.props.content,
    tempOldMem.props.contentType
  );

  var tempNewMemObj = createMemObj(
    tempNewMem.props.id,
    tempNewMem.type.name,
    true,
    tempNewMem.props.content,
    tempNewMem.props.contentType
  );

  this.moveMem(tempOldMemObj, tempNewMemObj, arg);
};

RInterpreter.prototype.exitMove = function(ctx) {
  console.log("EXIT Move!");
};
//End Move

// get id of current focued memory block
function getSelectedMemId(memArr) {
  for (var i = 0; i < memArr.length; i++) {
    if (memArr[i].props.selected === true) {
      return i;
    }
  }
}

// create memory block object
function createMemObj(id, type, selected, content, contentType) {
  var mem = new MemoryBlock(id, type, selected);
  mem.setContent(content);
  mem.setContentType(contentType);
  return mem;
}

// function getNextMem(id) {
//   return id + 1 <= 14 ? id + 1 : null;
// }

// function getPreviousMem(id) {
//   return id - 1 >= 0 ? id - 1 : null;
// }

export default RInterpreter;
