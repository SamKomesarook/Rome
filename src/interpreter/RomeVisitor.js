import { RomeVisitor } from "../lang/RomeVisitor";
import MemoryBlock from "../entity/MemoryBlock";

var RVisitor = function(
  memArr,
  updateContentType,
  moveMem,
  writeContent,
  freeMem
) {
  RomeVisitor.call(this); // inherit default visitor
  this.memArr = memArr;
  this.updateContentType = updateContentType;
  this.moveMem = moveMem;
  this.writeContent = writeContent;
  this.freeMem = freeMem;
  return this;
};

// continue inheriting default visitor
RVisitor.prototype = Object.create(RomeVisitor.prototype);
RVisitor.prototype.constructor = RVisitor;

RVisitor.prototype.visitChildren = function(ctx) {
  if (!ctx) {
    return;
  }

  if (ctx.children) {
    return ctx.children.map(child => {
      if (child.children && child.children.length !== 0) {
        return child.accept(this);
      } else {
        return child.getText();
      }
    });
  }
};

RVisitor.prototype.visitR = function(ctx) {
  console.log("Visit R!");
  return this.visitChildren(ctx);
};

// Visit a parse tree produced by RomeParser#Num.
RVisitor.prototype.visitNum = function(ctx) {
  return this.visitChildren(ctx);
};

RVisitor.prototype.visitLoop = function(ctx) {
  for (var i = 0; i < ctx.getText()[5]; i++) {
    this.visitChildren(ctx);
  }
  return;
};

RVisitor.prototype.visitSet = function(ctx) {
  console.log("Visit Set!");
  var command = getCommand(ctx);
  var arg = getCommandArg("set".length + 1, command);
  var selectedMem = getSelectedMemId(this.memArr);

  var tempMem = this.memArr[selectedMem];

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
  return this.visitChildren(ctx);
};

RVisitor.prototype.visitMove = function(ctx) {
  console.log("Visit Move!");
  var command = getCommand(ctx);
  var arg = getCommandArg("move".length + 1, command);
  var selectedMem = getSelectedMemId(this.memArr);

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
    alert("Hit the wall of memory");
  }

  return this.visitChildren(ctx);
};

RVisitor.prototype.visitWrite = function(ctx) {
  console.log("Visit write!");
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

  // check content type and memory availability
  var matchedType = contentTypeMatch(newMemObj.contentType, arg);
  var contentAvail = memAvailability(tempMem.props.content);
  if (!matchedType) {
    alert("Wrong type!");
  } else if (!contentAvail) {
    alert("Memory is not available!");
  } else {
    this.writeContent(newMemObj);
  }
  return this.visitChildren(ctx);
};

RVisitor.prototype.visitRead = function(ctx) {
  console.log("Visit Read!");
  var selectedMem = getSelectedMemId(this.memArr);
  var tempMem = this.memArr[selectedMem];
  var typeAllow = tempMem.props.contentType;

  var userInput = "";
  // force user input something and only whitespace is not allowed
  while (userInput === "" || userInput === null || userInput.match(/^\s+$/)) {
    userInput = prompt("User Input, Please enter a " + typeAllow + " type");
  }

  var newMemObj = createMemObj(
    tempMem.props.id,
    tempMem.type.name,
    tempMem.props.selected,
    userInput,
    tempMem.props.contentType
  );

  // check content type and memory availability
  var matchedType = contentTypeMatch(newMemObj.contentType, userInput);
  var contentAvail = memAvailability(tempMem.props.content);
  if (!matchedType) {
    alert("Wrong type!");
  } else if (!contentAvail) {
    alert("Memory is not available!");
  } else {
    this.writeContent(newMemObj);
  }
  return this.visitChildren(ctx);
};

RVisitor.prototype.visitFree = function(ctx) {
  console.log("Visit free!");
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
  return this.visitChildren(ctx);
};

RVisitor.prototype.visitMem = function(ctx) {
  console.log("Visit Mem!");
  var command = getCommand(ctx);
  var arg = getCommandArg("memory".length + 1, command);

  // if arg is a number, get memory block using the number
  if (!isNaN(arg)) {
    var tempMem = this.memArr[arg];
    if (tempMem.props.contentType === "letters") {
      // alert("Memory Content is not a number");
      console.log("Memory content is not a number");
    } else {
      // console.log("Memory content: ", tempMem.props.content);
      return tempMem.props.content;
    }
  } else {
    // recursively memory interpreter
    return this.visitChildren(ctx);
  }
};

// conditional regex: ((is|not)\ (less|greater|equal)\ (([0-9])|memory\([0-9]+\)))+
RVisitor.prototype.visitIf = function(ctx) {
  console.log("Visit if!");
  var command = getCommand(ctx);
  var arg = getCommandArg("if".length + 1, command);

  // get current selected memory
  var currMem = this.memArr[getSelectedMemId(this.memArr)];

  var condState = checkCond(arg, currMem);

  if (condState) {
    return this.visitChildren(ctx);
  }
};

RVisitor.prototype.visitCond = function(ctx) {
  console.log("Visit cond!");
  console.log(ctx.getText());
};

RVisitor.prototype.visitSnet = function(ctx) {
  console.log("Visit Send Net!");
  const netMemId = 14;
  var command = getCommand(ctx);
  var arg = getCommandArg("write_net".length + 1, command);

  var netMem = this.memArr[netMemId];
  var memObj = new MemoryBlock(
    netMemId,
    netMem.type.name,
    netMem.props.selected,
    arg,
    netMem.props.contentType
  );
  memObj.setAnimated(true);

  this.writeContent(memObj);
};

RVisitor.prototype.visitRnet = function(ctx) {};

/**
 * get command and arguments
 * @param {Object} ctx
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
 * check the if statement condition with value of the current selected memory
 * @param {string} condition string represent condition
 * @param {Object} currMem current selected memory
 * @return {Boolean} true is condition match, false otherwise
 */
function checkCond(condition, currMem) {
  var conditionList = condition.split(" ");
  // console.log(conditionList);
  var comparsion = conditionList[0];
  var type = conditionList[1];
  var indicator = conditionList[2];

  var memory = createMemObj(
    currMem.props.id,
    currMem.type.name,
    currMem.props.selected,
    currMem.props.content,
    currMem.props.contentType
  );

  // only allow equal when comparing to string
  if (memory.contentType === "letters") {
    if (comparsion === "is") {
      return type === "equal" && memory.content === indicator;
    } else {
      // comparsion is "not"
      return type === "equal" && memory.content !== indicator;
    }
  } else {
    // check comparsion and match type with indicator
    if (comparsion === "is") {
      if (type === "less") {
        return memory.content < indicator;
      } else if (type === "equal") {
        return memory.content === indicator;
      } else if (type === "greater") {
        return memory.content > indicator;
      }
    } else {
      // when comparsion type is "not"
      if (type === "less") {
        return memory.content >= indicator;
      } else if (type === "equal") {
        return memory.content !== indicator;
      } else if (type === "greater") {
        return memory.content <= indicator;
      }
    }
  }
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

// export default RomeVisitor;
export default RVisitor;
