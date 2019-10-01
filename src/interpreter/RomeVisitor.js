import { RomeVisitor } from "../lang/RomeVisitor";
import Utility from "./InterpreterUtility";

var RVisitor = function(
  memArr,
  updateContentType,
  moveMem,
  writeContent,
  freeMem,
  sendNet,
  readNet
) {
  RomeVisitor.call(this); // inherit default visitor
  this.memArr = memArr;
  this.updateContentType = updateContentType;
  this.moveMem = moveMem;
  this.writeContent = writeContent;
  this.freeMem = freeMem;
  this.sendNet = sendNet;
  this.readNet = readNet;
  this.utility = new Utility();
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
  var utility = new Utility();
  var command = utility.getCommand(ctx);
  var arg = utility.getCommandArg("set".length + 1, command);
  var selectedMem = utility.getSelectedMemId(this.memArr);

  var tempMem = this.memArr[selectedMem];

  var tempMemObj = utility.createMemObj(
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
  var utility = new Utility();
  var command = utility.getCommand(ctx);
  var arg = utility.getCommandArg("move".length + 1, command);
  var selectedMem = utility.getSelectedMemId(this.memArr);

  var validMove = utility.checkMemRange(selectedMem, arg);
  if (validMove) {
    var tempOldMem = this.memArr[selectedMem];
    var tempNewMem =
      arg === "next"
        ? this.memArr[selectedMem + 1]
        : this.memArr[selectedMem - 1];

    var tempOldMemObj = utility.createMemObj(
      tempOldMem.props.id,
      tempOldMem.type.name,
      false,
      tempOldMem.props.content,
      tempOldMem.props.contentType
    );

    var tempNewMemObj = utility.createMemObj(
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
  var utility = new Utility();
  var command = utility.getCommand(ctx);
  var arg = utility.getCommandArg("write".length + 1, command);
  var selectedMem = utility.getSelectedMemId(this.memArr);

  var tempMem = this.memArr[selectedMem];

  var newMemObj = utility.createMemObj(
    tempMem.props.id,
    tempMem.type.name,
    tempMem.props.selected,
    arg,
    tempMem.props.contentType
  );

  // check content type and memory availability
  var matchedType = utility.contentTypeMatch(newMemObj.contentType, arg);
  var contentAvail = utility.memAvailability(tempMem.props.content);
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
  var utility = new Utility();
  var selectedMem = utility.getSelectedMemId(this.memArr);
  var tempMem = this.memArr[selectedMem];
  var typeAllow = tempMem.props.contentType;

  var userInput = "";
  // force user input something and only whitespace is not allowed
  while (userInput === "" || userInput === null || userInput.match(/^\s+$/)) {
    userInput = prompt("User Input, Please enter a " + typeAllow + " type");
  }

  var newMemObj = utility.createMemObj(
    tempMem.props.id,
    tempMem.type.name,
    tempMem.props.selected,
    userInput,
    tempMem.props.contentType
  );

  // check content type and memory availability
  var matchedType = utility.contentTypeMatch(newMemObj.contentType, userInput);
  var contentAvail = utility.memAvailability(tempMem.props.content);
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
  var utility = new Utility();
  var selectedMem = utility.getSelectedMemId(this.memArr);
  var tempMem = this.memArr[selectedMem];
  var tempMemObj = utility.createMemObj(
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
  var utility = new Utility();
  var command = utility.getCommand(ctx);
  var arg = utility.getCommandArg("memory".length + 1, command);

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
  var utility = new Utility();
  var command = utility.getCommand(ctx);
  var arg = utility.getCommandArg("if".length + 1, command);

  // get current selected memory
  var currMem = this.memArr[utility.getSelectedMemId(this.memArr)];

  var condState = utility.checkCond(arg, currMem);

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
  var utility = new Utility();
  const netMemId = 14;
  var command = utility.getCommand(ctx);
  var arg = utility.getCommandArg("write_net".length + 1, command);

  var netMem = this.memArr[netMemId];
  var netMemObj = utility.createMemObj(
    netMemId,
    netMem.type.name,
    netMem.props.selected,
    arg,
    netMem.props.contentType
  );
  netMemObj.setAnimated(true);
  this.sendNet(netMemObj);
};

RVisitor.prototype.visitRnet = function(ctx) {
  console.log("Visit Receive Net!");
  var utility = new Utility();
  const netMemId = 14;
  var received_content = "hello";

  var netMem = this.memArr[netMemId];
  var netMemObj = utility.createMemObj(
    netMemId,
    netMem.type.name,
    netMem.props.selected,
    received_content,
    netMem.props.contentType
  );
  netMemObj.setAnimated(true);
  this.readNet(netMemObj);
};

// export default RomeVisitor;
export default RVisitor;
