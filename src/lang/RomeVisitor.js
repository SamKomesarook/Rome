import { RomeVisitor } from './grammar/Rome/RomeVisitor';
import { USBToggle } from '../components/computer/Peripherals';
import { NumContext } from './grammar/Rome/RomeParser';

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
      // eslint-disable-next-line consistent-return
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
    const { dataTypeSize } = this.staticDisplay;

    const OUT_OF_MEMORY = 'Out of memory';
    const WRONG_TYPE = 'Wrong memory type for writing';

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
      this.errorReporter.generalError(WRONG_TYPE);
      return;
    }
    if (!isNaN(arg)) {
      const number = Number(arg);
      const dec = arg.match(/\./g);

      if ((type === 'integer' && (number > 65535 || number < -65535))
      || (type === 'long' && (number > 4294967295 || number < -4294967295))
      || (type === 'float' && (number > Number.MAX_SAFE_INTEGER || number < Number.MIN_SAFE_INTEGER))) { // 9007199254740991, this is the MAX_SAFE_INTEGER provided by JavaScript
        this.errorReporter.generalError(OUT_OF_MEMORY);
        return;
      }
      if ((type === 'integer' || type === 'long') && dec !== null) {
        this.errorReporter.generalError(WRONG_TYPE);
        return;
      }
      if (type === 'float') {
        if (dec === null) {
          arg += '.00';
        } else if (dec.length > 1) {
          this.errorReporter.generalError(WRONG_TYPE);
          return;
        }
      }
    }

    if (type === 'string') {
      if ((arg[0] !== '"' || arg[arg.length - 1] !== '"') && (arg[0] !== '“' || arg[arg.length - 1] !== '”')) {
        this.errorReporter.generalError(WRONG_TYPE);
        return;
      }

      const pos = this.staticDisplay.memory[this.staticDisplay.selected].key;
      const numOfSpecialKeys = this.staticDisplay.specialKeys.length;
      const numUsableCells = this.staticDisplay.memorySize - numOfSpecialKeys;
      const availableLength = numUsableCells * dataTypeSize.string - pos * dataTypeSize.string;
      // Check if the memory has enough space to accomodate the input
      if (arg.length - 2 > availableLength) {
        this.errorReporter.generalError(OUT_OF_MEMORY);
        return;
      }
    }

    if (type === 'character') {
      if ((arg[0] !== "'" || arg[arg.length - 1] !== "'") && (arg[0] !== '‘' || arg[arg.length - 1] !== '’')) {
        this.errorReporter.generalError(WRONG_TYPE);
        return;
      }
      if (arg.length - 2 > 1) {
        this.errorReporter.generalError(OUT_OF_MEMORY);
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
          const base = Math.floor(strVal.length / dataTypeSize.string);

          // Ensure one memory cell only contains the defined number of letter
          for (let i = 0; i < base + 1; i++) {
            this.staticDisplay.memory[pos + i * 1].content = strVal.substr(i * dataTypeSize.string, dataTypeSize.string);
            this.staticDisplay.memory[pos + i * 1].type = 'string';
            if (i > 0) {
              this.staticDisplay.selected += 1;
            }
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
    const rightValue = condInput[4];
    const compareKeyword = condInput[2];

    // Assign left value based on content type
    if (memoryCell.type === 'integer' || memoryCell.type === 'long' || memoryCell.type === 'float') {
      leftValue = memoryCell.content;
    } else {
      leftValue = parseInt(memoryCell.content);
      if (isNaN(leftValue)) {
        leftValue = `"${memoryCell.content}"`;
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
      this.staticDisplay.consoleHistory.push(arg);
    } else {
      this.staticDisplay.consoleHistory.push(arg.slice(1, -1));
    }
  }

  visitIo(ctx) {
    this.staticDisplay.importIO = true;
  }

  visitMath(ctx) {
    this.staticDisplay.importMath = true;
  }

  visitRandom(ctx) {
    // check whether math package is imported
    if (!this.staticDisplay.importMath) {
      this.errorReporter.generalError('Require import(math) for random number function');
      return;
    }

    // check if there is memory
    if (this.staticDisplay.memory[this.staticDisplay.selected].content !== '') {
      this.errorReporter.generalError('Memory cell not empty');
      return;
    }

    // set memory type as integer
    this.staticDisplay.memory[this.staticDisplay.selected].type = 'integer';

    let arg = this.visitChildren(ctx)[2]; // TODO no need to visit all children, just the args
    if (typeof arg === 'object') {
      arg = arg[0];
    }

    // convert the argument to integer
    const number = parseInt(arg);

    // check whether argument less than 0
    if (number < 0) {
      this.errorReporter.generalError('Please input a positive number for random number function');
      return;
    }

    // check whether argument less than 65535 which generates random number bigger than 65535
    if (number > 65535) { // 9007199254740991, this is the MAX_SAFE_INTEGER provided by JavaScript
      this.errorReporter.generalError('Please input a number which is not bigger than 65535, otherwise the random number will be out of memory');
      return;
    }

    const randNum = Math.floor(Math.random() * (number+1));
    this.staticDisplay.memory[this.staticDisplay.selected].content = randNum;
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
    this.staticDisplay.consoleStyle.bgColor = newValue;
  }

  visitTextColor(ctx) {
    const newValue = this.visitChildren(ctx)[2];
    this.staticDisplay.consoleStyle.txtColor = newValue;
  }

  visitTextSize(ctx) {
    const newValue = this.visitChildren(ctx)[2];
    this.staticDisplay.consoleStyle.txtSize = newValue;
  }

  visitTextAlign(ctx) {
    const newValue = this.visitChildren(ctx)[2];
    this.staticDisplay.consoleStyle.txtAlign = newValue;
  }

  visitBold(ctx) {
    const isBold = (this.visitChildren(ctx)[2] === 'true');
    const newValue = isBold ? 'bold' : '';
    this.staticDisplay.consoleStyle.bold = newValue;
  }

  visitItalic(ctx) {
    const isItalic = (this.visitChildren(ctx)[2] === 'true');
    const newValue = isItalic ? 'italic' : '';
    this.staticDisplay.consoleStyle.italic = newValue;
  }

  visitUnderline(ctx) {
    const isUnderline = (this.visitChildren(ctx)[2] === 'true');
    const newValue = isUnderline ? 'underline' : '';
    this.staticDisplay.consoleStyle.underline = newValue;
  }
}

export {
  RVisitor,
};
