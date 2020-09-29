import { RomeVisitor } from './grammar/Rome/RomeVisitor';
import { USBToggle } from '../components/elements/Peripherals';
import { NumContext } from './grammar/Rome/RomeParser';

// TODO some updates use setDisplay. Should we?
class RVisitor extends RomeVisitor {
  constructor(staticDisplay, errorReporter) {
    super();
    this.staticDisplay = staticDisplay;
    this.errorReporter = errorReporter;
  }

  visitChildren(ctx) {
    if (!ctx) {
      return;
    }
    if (ctx.children) {
      return ctx.children.map((child) => {
        if (child.children && child.children.length !== 0) {
          return child.accept(this);
        }
        return child.getText();
      });
    }
  }

  visitR(ctx) {
    return this.visitChildren(ctx);
  }

  visitSet(ctx) {
    const { selected } = this.staticDisplay;
    const newType = this.visitChildren(ctx)[2]; // TODO no need to visit all of the children, just need the args
    this.staticDisplay.memory[selected].type = newType;

    switch (newType) {
      case 'character':
        this.staticDisplay.memory[selected].size = 1;
        break;
      case 'integer':
        this.staticDisplay.memory[selected].size = 2;
        break;
      case 'long':
      case 'float':
        this.staticDisplay.memory[selected].size = 4;
        break;
      case 'string':
        this.staticDisplay.memory[selected].size = 6;
        break;
      default:
        this.staticDisplay.memory[selected].size = 0;
    }
  }

  visitLoop(ctx) {
    // Ensure there are expressions inside the for loop
    if (ctx.expressions().length < 1) {
      return;
    }
    const upperBound = parseInt(this.visitChildren(ctx.intargs()));
    if (isNaN(upperBound)) {
      this.errorReporter.generalError('Non-number loop argument');
      return;
    }
    for (let i = 0; i < upperBound; i++) {
      this.staticDisplay.commands.unshift(ctx.expressions());
      this.staticDisplay.commands = this.staticDisplay.commands.flat(Infinity); // TODO is the assignment really necessary?
    }
  }

  visitMem(ctx) {
    if (ctx.strargs() != null) {
      const arg = this.visitChildren(ctx.strargs())[0];
      for (let i = 0; i < this.staticDisplay.memory.length; i++) {
        const mem = this.staticDisplay.memory[i];
        if (mem.name === arg) {
          return mem.content;
        }
      }
      this.errorReporter.generalError('No memory with that name');
    } else if (ctx.intargs().constructor === NumContext) {
      try {
        return this.staticDisplay.memory[parseInt(this.visitChildren(ctx.intargs())) - 1].content;
      } catch (e) {
        this.errorReporter.generalError('Cannot parse memory argument');
        return null;
      }
    } else {
      return this.visitChildren(ctx.intargs());
    }
  }

  visitMove(ctx) {
    if (this.visitChildren(ctx)[2] === 'next') {
      const maxUsableMemoryKey = this.staticDisplay.memorySize - this.staticDisplay.specialKeys.length - 1;
      if (this.staticDisplay.selected === maxUsableMemoryKey) {
        this.errorReporter.generalError('No more memory');
        return;
      }
      this.staticDisplay.selected += 1;
    } else {
      if (this.staticDisplay.selected === 0) {
        this.errorReporter.generalError('No more memory');
        return;
      }
      this.staticDisplay.selected -= 1;
    }
  }

  visitWrite(ctx) {
    const { type } = this.staticDisplay.memory[this.staticDisplay.selected];

    if (this.staticDisplay.memory[this.staticDisplay.selected].content !== '') {
      this.errorReporter.generalError('Memory cell not empty');
      return;
    }
    if (type === '') {
      this.errorReporter.generalError('Memory type not set');
      return;
    }
    let arg = this.visitChildren(ctx)[2]; // TODO no need to visit all children, just the args
    if (typeof arg === 'object') {
      arg = arg[0];
    }

    if (isNaN(arg) && (type === 'integer' || type === 'long' || type === 'float')) {
      this.errorReporter.generalError('Wrong memory type for writing');
      return;
    }
    if (!isNaN(arg)) {
      const number = Number(arg);
      const dec = arg.match(/\./g);

      if ((type === 'integer' && (number > 65535 || number < -65535))
      || (type === 'long' && (number > 4294967295 || number < -4294967295))
      || (type === 'float' && (number > Number.MAX_SAFE_INTEGER || number < Number.MIN_SAFE_INTEGER))) { // 9007199254740991, this is the MAX_SAFE_INTEGER provided by JavaScript
        this.errorReporter.generalError('Out of memory');
        return;
      }
      if ((type === 'integer' || type === 'long') && dec !== null) {
        this.errorReporter.generalError('Wrong memory type for writing');
        return;
      }
      if (type === 'float') {
        if (dec === null) {
          arg += '.00';
        } else if (dec.length > 1) {
          this.errorReporter.generalError('Wrong memory type for writing');
          return;
        }
      }
    }

    if (type === 'character' || type === 'string') {
      if (arg[0] === '"' && arg[arg.length - 1] === '"') {
        const pos = this.staticDisplay.memory[this.staticDisplay.selected].key;
        const numOfSpecialKeys = this.staticDisplay.specialKeys.length;
        const numOfUsableMemoryCells = this.staticDisplay.memorySize - numOfSpecialKeys;
        if ((type === 'character' && arg.length - 2 > 1)
        || (type === 'string' && arg.length - 2 > (numOfUsableMemoryCells * 6 - pos * 6))) {
          this.errorReporter.generalError('Out of memory');
          return;
        }
      } else {
        this.errorReporter.generalError('Wrong memory type for writing');
        return;
      }
    }

    // Get the keys of special memory cells
    const usbMemoryKey = this.staticDisplay.specialKeys.find((element) => element.specialContent === 'usb').key;
    if (this.staticDisplay.selected === usbMemoryKey) {
      USBToggle();
    } else {
      switch (type) {
        case 'character':
          this.staticDisplay.memory[this.staticDisplay.selected].content = arg.slice(1, -1);
          return;
        case 'string': {
          const strVal = arg.slice(1, -1);
          const pos = this.staticDisplay.memory[this.staticDisplay.selected].key;
          const base = Math.floor(strVal.length / 6);
          for (let i = 0; i < base + 1; i++) {
            this.staticDisplay.memory[pos + i * 1].content = strVal.substr(i * 6, 6);
            this.staticDisplay.memory[pos + i * 1].type = 'string';
            this.staticDisplay.memory[pos + i * 1].size = '6';
          }
          return;
        }
        default:
          this.staticDisplay.memory[this.staticDisplay.selected].content = arg;
      }
    }
  }

  visitFree(ctx) {
    this.staticDisplay.memory[this.staticDisplay.selected].content = '';
  }

  visitIf(ctx) {
    const condInput = this.visitChildren(ctx.conditional());
    const memoryCell = this.staticDisplay.memory[this.staticDisplay.selected];

    let leftValue;
    const rightValue = condInput[4][0];
    const compareKeyword = condInput[2];

    // Assign left value based on content type
    if (memoryCell.type === 'integer' || memoryCell.type === 'long' || memoryCell.type === 'float') {
      leftValue = memoryCell.content;
    } else {
      // Strip off the double quotes and convert string to int
      leftValue = parseInt(memoryCell.content.slice(1, -1));
      if (isNaN(leftValue)) {
        this.errorReporter.generalError('Wrong conditional argument type');
        return;
      }
    }

    if (condInput[0] === 'is') {
      if ((compareKeyword === 'less' && leftValue < rightValue)
      || (compareKeyword === 'greater' && leftValue > rightValue)
      // eslint-disable-next-line eqeqeq
      || (compareKeyword === 'equal' && leftValue == rightValue)) {
        this.staticDisplay.commands.unshift(ctx.expressions());
        this.staticDisplay.commands = this.staticDisplay.commands.flat(Infinity);
      }
    } else if (condInput[0] === 'not') {
      if ((compareKeyword === 'less' && leftValue >= rightValue)
      || (compareKeyword === 'greater' && leftValue <= rightValue)
      // eslint-disable-next-line eqeqeq
      || (compareKeyword === 'equal' && leftValue != rightValue)) {
        this.staticDisplay.commands.unshift(ctx.expressions());
        this.staticDisplay.commands = this.staticDisplay.commands.flat(Infinity);
      }
    }
  }

  visitKread(ctx) {
    if (!this.staticDisplay.importIO) {
      this.errorReporter.generalError("Unknown function 'keyboardRead'");
    }
    // TODO is this necessary?
    // TODO check for IO in outside methods
    // TODO check for memory number to determine if animations are needed
  }

  visitSwrite(ctx) {
    if (!this.staticDisplay.importIO) {
      this.errorReporter.generalError("Unknown function 'consoleWrite'");
      return;
    }
    let arg = this.visitChildren(ctx)[2]; // TODO no need to visit all children, just the args
    if (typeof arg === 'object') {
      arg = arg[0];
    }
    // TODO if string, print with parenthesis?
    this.staticDisplay.output = this.staticDisplay.output.concat(arg.replace('"', '').replace('"', ''), '\n');
  }

  visitIo(ctx) {
    this.staticDisplay.importIO = true;
  }

  visitName(ctx) {
    let arg = this.visitChildren(ctx)[2]; // TODO no need to visit all children, just the args
    if (typeof arg === 'object') {
      arg = arg[0];
    }
    if (arg[0] !== '"') {
      this.errorReporter.generalError('Cannot name a memory area as a number');
      return;
    }
    this.staticDisplay.memory[this.staticDisplay.selected].name = arg;
  }

  visitPaint(ctx) {
    const newValue = this.visitChildren(ctx)[2];
    this.staticDisplay.outputStyle.bgColor = newValue;
  }

  visitTextColor(ctx) {
    const newValue = this.visitChildren(ctx)[2];
    this.staticDisplay.outputStyle.txtColor = newValue;
  }

  visitTextSize(ctx) {
    const newValue = this.visitChildren(ctx)[2];
    this.staticDisplay.outputStyle.txtSize = newValue;
  }

  visitTextAlign(ctx) {
    const newValue = this.visitChildren(ctx)[2];
    this.staticDisplay.outputStyle.txtAlign = newValue;
  }

  visitBold(ctx) {
    const isBold = (this.visitChildren(ctx)[2] === 'true');
    const newValue = isBold ? 'bold' : '';
    this.staticDisplay.outputStyle.bold = newValue;
  }

  visitItalic(ctx) {
    const isItalic = (this.visitChildren(ctx)[2] === 'true');
    const newValue = isItalic ? 'italic' : '';
    this.staticDisplay.outputStyle.italic = newValue;
  }

  visitUnderline(ctx) {
    const isUnderline = (this.visitChildren(ctx)[2] === 'true');
    const newValue = isUnderline ? 'underline' : '';
    this.staticDisplay.outputStyle.underline = newValue;
  }
}

export {
  RVisitor,
};
