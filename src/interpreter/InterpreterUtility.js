import MemoryBlock from "../entity/MemoryBlock";

/**
 * Utility object to get information for different command
 */
class Utility {
  /**
   * get command and arguments
   * @param {Object} ctx
   * @return {String} command and arguments
   */
  getCommand(ctx) {
    return ctx.getText();
  }

  /**
   * strip argument out from command
   * @param {int} index
   * @param {String} command
   * @return {String | int} arguments that inside the command
   */
  getCommandArg(index, command) {
    var affix;
    // set different affix when hit loop or if command
   if (command.includes("{")) {
      affix = "{";
    } else {
      affix = ")";
    }
    var arg = command.substring(index, command.indexOf(affix));
	  //TODO Conds and Loops return an argument with ')' attached, so this removes it...
 if (command.includes("{")) {
arg = arg.substring(0, arg.length - 1);
 }
    if (arg.indexOf("'") >= 0 || arg.indexOf('"') >= 0) {
      arg = arg.replace(/['"]+/g, "");
    }
    return arg;
  }

  /**
   * check the if statement condition with value of the current selected memory
   * @param {String} condition string represent condition
   * @param {Object} currMem current selected memory
   * @return {Boolean} true is condition match, false otherwise
   */
  checkCond(condition, currMem) {
    var conditionList = condition.split(" ");
    var comparison = conditionList[0];
    var type = conditionList[1];
    var indicator = conditionList[2];

    var memObj = this.createMemObj(
      currMem.props.id,
      currMem.type.name,
      currMem.props.selected,
      currMem.props.content,
      currMem.props.contentType
    );
    if (memObj.contentType === "letters") {
      if (comparison === "is") {
        return type === "equal" && memObj.content === indicator;
      } else {
        // comparsion is "not"
        return type === "equal" && memObj.content !== indicator;
      }
    } else {
      // check comparsion and match type with indicator
      if (comparison === "is") {
        if (type === "less") {
          return memObj.content < indicator;
        } else if (type === "equal") {
          return memObj.content === indicator;
        } else if (type === "greater") {
          return memObj.content > indicator;
        }
      } else {
        // when comparsion type is "not"
        if (type === "less") {
          return memObj.content >= indicator;
        } else if (type === "equal") {
          return memObj.content !== indicator;
        } else if (type === "greater") {
          return memObj.content <= indicator;
        }
      }
    }
  }

  /**
   * get selected memory from memory array
   * @param {Array} memArr
   * @return {int} selected memory ID
   */
  getSelectedMemId(memArr) {
    for (var i = 0; i < memArr.length; i++) {
      if (memArr[i].props.selected) {
        return i;
      }
    }
  }

  /**
   * create memory block object
   * @param {int} memory object id
   * @param {String} type of the memory
   * @param {Boolean} if the memory is selected
   * @param {String | int} memory content
   * @param {String} type of the memory block
   * @return {MemoryBlock} a MemoryBlock object
   */
  createMemObj(id, type, selected, content, contentType) {
    var memObj = new MemoryBlock(id, type, selected);
    memObj.setContent(content);
    memObj.setContentType(contentType);
    return memObj;
  }

  /**
   * check if argument type match with memory content type
   * @param {String} content type that the memory is for
   * @param {String | int} arg argument
   * @return {Boolean} true if type matches, false otherwise
   */
  contentTypeMatch(contentType, arg) {
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
   * check if memory content is available to writing i.e. content is empty
   * @param {String} memContent
   * @return {Boolean} true is the memory content is empty
   */
  memAvailability(memContent) {
    return memContent === "";
  }

  /**
   * check if movement of selected memory is valid
   * @param {int} id id of memory block
   * @param {String} direction direction of movement
   * @return {Boolean} true if movement is valid, false otherwise
   */
  checkMemRange(id, direction) {
    if (
      (id === 0 && direction === "last") ||
      (id === 14 && direction === "next")
    ) {
      throw new Error("Hit the wall of memory");
    } else if (direction !== "last" && direction !== "next") {
      throw new Error("Invalid direction argument");
    }
    return true;
  }

  /**
   * Generator a random String which has max lenth of 10, and min length of 1
   * // [1]"Generate random String/characters in JavaScript", Stack Overflow, 2019. [Online]. Available: https://stackoverflow.com/questions/1349404/generate-random-String-characters-in-javascript?page=1&tab=votes#tab-top. [Accessed: 05- Oct- 2019].
   * @return {String} random String generated
   */
  stringGenerator() {
    var length = Math.floor(Math.random() * 10) + 1;
    var str = "";
    var charPool = "abcdefghijklmnopqrstuvwxyz";
    var poolLength = charPool.length;
    for (var i = 0; i < length; i++) {
      str += charPool.charAt(Math.floor(Math.random() * poolLength));
    }
    return str;
  }

  /**
   * Check if package is imported
   * @param {Boolean} imported boolean value to indicate if package is imported
   */
  checkImp(imported) {
    if (!imported) {
      throw new Error("Missing import package!");
    }
    return true;
  }

  /**
   * Fetch the content when hit the memory command, for loop command
   * @param {String} command command which contain the word "memory"
   * @param {Array} memArr memory array
   * @return {int} content inside a memory, throw exception if not valid
   */
  loopMemCommand(command, memArr) {
    const memCmdRegex = /(memory\()\d+\)/gm; // match memory([0-9]+)
    const memRegex = /(memory)/gm; // match exact word "memory"
    const numRegex = /\d+/gm; // match any number

    if (memCmdRegex.test(command)) {
      // when the argument need to get content from other memory block

      var num = command.match(numRegex)[0];
      var tempMem = memArr[num];

      if (tempMem.props.contentType === "letters") {
        throw new Error("Memory content is not a number!");
      }
      var value = tempMem.props.content;
      if (value > 14) {
        throw new Error("Out of range!");
      }
      var memCmd = command.match(memCmdRegex)[0];
      command = command.replace(memCmd, value);
      if (memRegex.test(command)) {
        return this.loopMemCommand(command, memArr);
      } else {
        return value;
      }
    } else if (numRegex.test(command)) {
      // if the argument is number only
      return command.match(numRegex)[0];
    }
  }

  /**
   * Fetch the content when hit the memory command, for s_write command
   * @param {String} command command which contain the word "memory"
   * @param {Array} memArr memory array
   * @return {String} content inside a memory, throw exception if not valid
   */
  swriteMemCommand(command, memArr) {
    const memCmdRegex = /(memory\()\d+\)/gm; // match memory([0-9]+)
    const memRegex = /(memory)/gm; // match exact word "memory"
    const numRegex = /\d+/gm; // match any number

    if (memCmdRegex.test(command)) {
      var num = command.match(numRegex)[0];
      var tempMem = memArr[num];
      var content = tempMem.props.content;
      if (content > 14) {
        throw new Error("Out of range!");
      }
      var memCmd = command.match(memCmdRegex)[0];
      command = command.replace(memCmd, content);
      if (memRegex.test(command)) {
        return this.swriteMemCommand(command, memArr);
      } else {
        return content;
      }
    } else if (command === "s_write") {
      var currentId = this.getSelectedMemId(memArr);
      var resultMem = memArr[currentId];
      return resultMem.props.content;
    }
  }
}

export default Utility;
