import { RomeListener } from "../lang/RomeListener";
import MemoryBlock from "../entity/MemoryBlock";

var RInterpreter = function(
  memArr,
  memObjToSymbol,
  updateMem,
  updateContentType,
  moveMem,
  writeContent
) {
  RomeListener.call(this);
  this.memArr = memArr;
  this.memObjToSymbol = memObjToSymbol;
  this.updateMem = updateMem;
  this.updateContentType = updateContentType;
  this.moveMem = moveMem;
  this.writeContent = writeContent;
  return this;
};

RInterpreter.prototype = Object.create(RomeListener.prototype);
RInterpreter.prototype.constructor = RInterpreter;

RInterpreter.prototype.enterR = function(ctx) {
  console.log("ENTER R!");
  // console.log(ctx.expressions());
  // // get name of tokens
  // for (var i = 0; i < ctx.expressions().length; i++) {
  //   console.log("Next Token: ", ctx.expressions()[i].getText());
  // }
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
  // fetch the argument out from command
  var command = getCommand(ctx);
  var arg = getCommandArg("set".length + 1, command);
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
  // console.log("EXIT SET!");
};
// End set

// Start move
RInterpreter.prototype.enterMove = function(ctx) {
  console.log("ENTER Move!");
  var command = getCommand(ctx);
  var arg = getCommandArg("move".length + 1, command);
  var selectedMem = getSelectedMemId(this.memArr);
  // console.log("Arg: ", arg);
  // console.log("Mem: ", selectedMem);

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
  // console.log("EXIT Move!");
};
//End Move

//Start Write
RInterpreter.prototype.enterWrite = function(ctx) {
  console.log("Enter write");
  var command = getCommand(ctx);
  var arg = getCommandArg("write".length + 1, command);
  var selectedMem = getSelectedMemId(this.memArr);

  var tempMem = this.memArr[selectedMem];

  var newMemObj = createMemObj(
    tempMem.props.id,
    tempMem.type.name,
    tempMem.props.selected,
    arg,
    tempMem.props.contentType
  );

  // check content type and if arguments is match to specific contentType
  if (newMemObj.contentType === "letters") {
    if (isNaN(arg)) {
      this.writeContent(newMemObj);
    } else {
      alert("Content Type is not valid!");
    }
  } else if (newMemObj.contentType === "numbers") {
    if (isNaN(arg)) {
      alert("Content Type is not valid!");
    } else {
      this.writeContent(newMemObj);
    }
  }
};

RInterpreter.prototype.exitWrite = function(ctx) {};
//End Write

//get command
function getCommand(ctx) {
  return ctx.getText();
}

//get command argument
function getCommandArg(index, command) {
  const affix = ")";
  var arg = command.substring(index, command.indexOf(affix));
  // remove double-quote/single quote
  if (arg.indexOf("'") >= 0 || arg.indexOf('"') >= 0) {
    arg = arg.replace(/['"]+/g, "");
  }
  return arg;
}

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
