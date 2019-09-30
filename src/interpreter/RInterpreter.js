import { RomeListener } from "../lang/RomeListener";
import MemoryBlock from "../entity/MemoryBlock";

var RInterpreter = function(
  memArr,
  updateContentType,
  moveMem,
  writeContent,
  freeMem
) {
  RomeListener.call(this);
  this.memArr = memArr;
  this.updateContentType = updateContentType;
  this.moveMem = moveMem;
  this.writeContent = writeContent;
  this.freeMem = freeMem;
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

  // only allow set content type when memory is empty
  if (tempMemObj.getContent() !== "") {
    alert("Memory isn't empty!");
  } else {
    this.updateContentType(selectedMem, tempMemObj);
  }
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

  var validMove = checkMemRange(selectedMem, arg);

  if (validMove) {
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
  } else {
    alert("Hit the wall of memory!");
  }
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
  var matchedType = contentTypeMatch(newMemObj.contentType, arg);
  if (!matchedType) {
    alert("Wrond content type!");
  } else {
    var contentAvail = memAvailability(tempMem.props.content);
    if (!contentAvail) {
      alert("Memory is not available!");
    } else {
      this.writeContent(newMemObj);
    }
  }

  // this.writeContent(newMemObj);
};

RInterpreter.prototype.exitWrite = function(ctx) {};
//End Write

//Start Free
RInterpreter.prototype.enterFree = function(ctx) {
  console.log("Enter Free!");
  var selectedMem = getSelectedMemId(this.memArr);
  var tempMem = this.memArr[selectedMem];
  var tempMemObj = createMemObj(
    tempMem.props.id,
    tempMem.type.name,
    tempMem.props.selected,
    "",
    tempMem.props.contentType
  );

  this.freeMem(tempMemObj);
};

RInterpreter.prototype.exitFree = function(ctx) {};
//End Free

//Start Mem
RInterpreter.prototype.enterMem = function(ctx) {
  console.log("Enter Memory");
  var command = getCommand(ctx);
  var arg = getCommandArg("memory".length + 1, command);

  var tempMem = this.memArr[arg];
  if (tempMem.props.contentType === "letters") {
    alert("Memory content is not a number");
  } else {
    alert(tempMem.props.contentType);
    return tempMem.props.content;
  }
};

RInterpreter.prototype.exitMem = function(ctx) {
  console.log("Exit Memory");
};
//End Mem

/**
 * get command and arguments
 * @return {string} command and arguments
 */
function getCommand(ctx) {
  return ctx.getText();
}

/**
 * strip argument out from command
 * @param {int} index
 * @param {string} command
 * @return {string | int} arguments that inside the command
 */
function getCommandArg(index, command) {
  const affix = ")";
  var arg = command.substring(index, command.indexOf(affix));
  // remove double-quote/single quote
  if (arg.indexOf("'") >= 0 || arg.indexOf('"') >= 0) {
    arg = arg.replace(/['"]+/g, "");
  }
  return arg;
}

/**
 * get selected memory from memory array
 * @param {array} memArr
 * @return {int} selected memory ID
 */
function getSelectedMemId(memArr) {
  for (var i = 0; i < memArr.length; i++) {
    if (memArr[i].props.selected === true) {
      return i;
    }
  }
}

/**
 * create memory block object
 * @param {int} memory object id
 * @param {string} type of the memory
 * @param {boolean} if the memory is selected
 * @param {string | int} memory content
 * @param {string} type of the memory block
 * @return {MemoryBlock} a memory block object
 */
function createMemObj(id, type, selected, content, contentType) {
  var mem = new MemoryBlock(id, type, selected);
  mem.setContent(content);
  mem.setContentType(contentType);
  return mem;
}

/**
 * check if argument type match with memory content type
 * @param {string} content type that the memory is for
 * @param {*} command argument
 * @return {boolean} true if type matches, false otherwise
 */
function contentTypeMatch(contentType, arg) {
  if (contentType === "letters") {
    if (!isNaN(arg)) {
      return false;
    }
  } else if (contentType === "numbers") {
    if (isNaN(arg)) {
      return false;
    }
  }
  return true;
}

/**
 * check if memory content is empty
 * @param {string} memContent
 * @return {boolean} true is the memory content is empty
 */
function memAvailability(memContent) {
  // console.log("Memory Content: ", memContent);
  return memContent === "";
}

/**
 * check if movement of selected memory is valid
 * @param {int} id of memory block
 * @param {string} direction direction of movement
 * @return {Boolean} true if movement is valid, false otherwise
 */
function checkMemRange(id, direction) {
  if (id === 0 && direction === "left") {
    return false;
  } else if (id === 14 && direction === "right") {
    return false;
  }
  return true;
}

export default RInterpreter;
