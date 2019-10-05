import MemoryBlock from "../entity/MemoryBlock";

/**
 * Utility object to get information for different command
 */
class Utility {
  /**
   * get command and arguments
   * @param {Object} ctx
   * @return {string} command and arguments
   */
  getCommand(ctx) {
    return ctx.getText();
  }

  /**
   * strip argument out from command
   * @param {int} index
   * @param {string} command
   * @return {string | int} arguments that inside the command
   */
  getCommandArg(index, command) {
    const affix = ")";
    var arg = command.substring(index, command.indexOf(affix));
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
   * @param {array} memArr
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
   * @param {string} type of the memory
   * @param {boolean} if the memory is selected
   * @param {string | int} memory content
   * @param {string} type of the memory block
   * @return {MemoryBlock} a memory block object
   */
  createMemObj(id, type, selected, content, contentType) {
    var memObj = new MemoryBlock(id, type, selected);
    memObj.setContent(content);
    memObj.setContentType(contentType);
    return memObj;
  }

  /**
   * check if argument type match with memory content type
   * @param {string} content type that the memory is for
   * @param {*} command argument
   * @return {boolean} true if type matches, false otherwise
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
   * check if memory content is empty
   * @param {string} memContent
   * @return {boolean} true is the memory content is empty
   */
  memAvailability(memContent) {
    return memContent === "";
  }

  /**
   * check if movement of selected memory is valid
   * @param {int} id id of memory block
   * @param {string} direction direction of movement
   * @return {Boolean} true if movement is valid, false otherwise
   */
  checkMemRange(id, direction) {
    try {
      if (
        (id === 0 && direction === "last") ||
        (id === 14 && direction === "next")
      ) {
        throw new Error("Hit the wall of memory");
      } else if (direction !== "last" && direction !== "next") {
        throw new Error("Invalid direction argument");
      }
      return true;
    } catch (e) {
      alert(e.name + ": " + e.message);
      return false;
    }
  }

  /**
   * Generator a random string which has max lenth of 10, and min length of 1
   * // [1]"Generate random string/characters in JavaScript", Stack Overflow, 2019. [Online]. Available: https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript?page=1&tab=votes#tab-top. [Accessed: 05- Oct- 2019].
   * @return {String} random string generated
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
    try {
      if (!imported) {
        throw new Error("Missing import package!");
      }
      return true;
    } catch (e) {
      alert(e.name + ": " + e.message);
      return false;
    }
  }
}

export default Utility;
