import { RomeVisitor } from "../lang/RomeVisitor";
import Utility from "./InterpreterUtility";

/**
 * Custome Visitor inherit from RomeVisitor which is generated by anltr4
 */
class RVisitor extends RomeVisitor {
  constructor(
    memArr,
    updateContentType,
    moveMem,
    writeContent,
    freeMem,
    sendMemAnimation,
    readMemAnimation
  ) {
    super();
    this.memArr = memArr;
    this.updateContentType = updateContentType;
    this.moveMem = moveMem;
    this.writeContent = writeContent;
    this.freeMem = freeMem;
    this.sendMemAnimation = sendMemAnimation;
    this.readMemAnimation = readMemAnimation;
    this.netImported = false;
    this.ioImported = false;
  }

  visitChildren(ctx) {
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
  }

  /**
   * start of the visitor
   * @param {Object} ctx context generated by antlr4
   */
  visitR(ctx) {
    console.log("Visit R!");
    return this.visitChildren(ctx);
  }

  /**
   * loop visitor
   * @param {Object} ctx context generated by antlr4
   */
  visitLoop(ctx) {
    var utility = new Utility();
    var command = utility.getCommand(ctx);
    var num = utility.loopMemCommand(command, this.memArr);
    alert(num);
    for (var i = 0; i < num; i++) {
      this.visitChildren(ctx);
    }
    return;
  }

  /**
   * set visitor
   * @param {Object} ctx context generated by antlr4
   */
  visitSet(ctx) {
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
  }

  /**
   * move visitor
   * @param {Object} ctx context generated by antlr4
   */
  visitMove(ctx) {
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
      this.moveMem(tempOldMemObj, tempNewMemObj);
    }
    return this.visitChildren(ctx);
  }

  /**
   * write visitor
   * @param {Object} ctx context generated by antlr4
   */
  visitWrite(ctx) {
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
  }

  /**
   * Kread visitor
   * @param {Object} ctx context generated by antlr4
   */
  visitKread(ctx) {
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
    var matchedType = utility.contentTypeMatch(
      newMemObj.contentType,
      userInput
    );
    var contentAvail = utility.memAvailability(tempMem.props.content);
    if (!matchedType) {
      alert("Wrong type!");
    } else if (!contentAvail) {
      alert("Memory is not available!");
    } else {
      this.writeContent(newMemObj);
    }
    return this.visitChildren(ctx);
  }

  /**
   * free visitor
   * @param {Object} ctx context generated by antlr4
   */
  visitFree(ctx) {
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
  }

  /**
   * memory visitor
   * @param {Object} ctx context generated by antlr4
   */
  visitMem(ctx) {
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
  }

  /**
   * if visitor
   * conditional regex: ((is|not)\ (less|greater|equal)\ (([0-9])|memory\([0-9]+\)))+
   * @param {Object} ctx context generated by antlr4
   */
  visitIf(ctx) {
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
  }

  /**
   * n_write visitor
   * @param {Object} ctx context generated by antlr4
   */
  visitSnet(ctx) {
    console.log("Visit Send Net!");
    var utility = new Utility();
    var imported = utility.checkImp(this.netImported);
    const netMemId = 14;
    if (imported) {
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
      this.sendMemAnimation(netMemObj);
    }
    return this.visitChildren(ctx);
  }

  /**
   * n_read visitor
   * @param {Object} ctx context generated by antlr4
   */
  visitRnet(ctx) {
    console.log("Visit Receive Net!");
    var utility = new Utility();
    var imported = utility.checkImp(this.netImported);
    const netMemId = 14;
    if (imported) {
      var receivedContent = utility.stringGenerator();
      var netMem = this.memArr[netMemId];
      var netMemObj = utility.createMemObj(
        netMemId,
        netMem.type.name,
        netMem.props.selected,
        receivedContent,
        netMem.props.contentType
      );
      netMemObj.setAnimated(true);
      this.readMemAnimation(netMemObj);
    }
    return this.visitChildren(ctx);
  }

  /**
   * import network visitor
   * @param {Object} ctx context generated by antlr4
   */
  visitNet(ctx) {
    this.netImported = true;
    return this.visitChildren(ctx);
  }

  /**
   * import io visitor
   * @param {Object} ctx context generated by antlr4
   */
  visitIo(ctx) {
    this.ioImported = true;
    return this.visitChildren(ctx);
  }
}

// export default RomeVisitor;
export default RVisitor;
