import { RomeVisitor } from './grammar/Rome/RomeVisitor';
import { USBToggle } from '../components/elements/Peripherals';

// TODO some updates use setDisplay. Should we?
class RVisitor extends RomeVisitor {
  constructor(display, setDisplay, errorReporter) {
    super();
    this.display = display;
    this.setDisplay = setDisplay;
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
    const newMemory = this.display.memory;
    newMemory[this.display.selected].type = this.visitChildren(ctx)[2]; // TODO no need to visit all of the children, just need the args
    this.setDisplay((display) => ({
      ...display,
      memory: newMemory,
    }));
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
      this.display.commands.unshift(ctx.expressions());
      this.display.commands = this.display.commands.flat(Infinity); // TODO is the assignment really necessary?
    }
  }

  visitMem(ctx) {
    if (ctx.strargs() != null) {
      const arg = this.visitChildren(ctx.strargs())[0];
      for (let i = 0; i < this.display.memory.length; i++) {
        const mem = this.display.memory[i];
        if (mem.name === arg) {
          return mem.content;
        }
      }
      this.errorReporter.generalError('No memory with that name');
    } else if (ctx.intargs().constructor.name === 'NumContext') {
      try {
        return this.display.memory[parseInt(this.visitChildren(ctx.intargs())) - 1].content;
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
      const maxUsableMemoryKey = this.display.memorySize - this.display.specialKeys.length - 1;
      if (this.display.selected === maxUsableMemoryKey) {
        this.errorReporter.generalError('No more memory');
        return;
      }
      this.display.selected += 1;
    } else {
      if (this.display.selected === 0) {
        this.errorReporter.generalError('No more memory');
        return;
      }
      this.display.selected -= 1;
    }
  }

  visitWrite(ctx) {
    // TODO check for maximum length (or spillover to the next memory cell?
    if (this.display.memory[this.display.selected].content !== '') {
      this.errorReporter.generalError('Memory cell not empty');
      return;
    }
    if (this.display.memory[this.display.selected].type === '') {
      this.errorReporter.generalError('Memory type not set');
      return;
    }
    let arg = this.visitChildren(ctx)[2]; // TODO no need to visit all children, just the args
    if (typeof arg === 'object') {
      arg = arg[0];
    }
    if (arg[0] === '"' && this.display.memory[this.display.selected].type === 'numbers') {
      this.errorReporter.generalError('Wrong memory type for writing');
      return;
    }
    if (arg[0] !== '"' && this.display.memory[this.display.selected].type === 'letters') {
      this.errorReporter.generalError('Wrong memory type for writing');
      return;
    }

    // Get the keys of special memory cells
    const usbMemoryKey = this.display.specialKeys.find((element) => element.specialContent === 'usb').key;
    if (this.display.selected === usbMemoryKey) {
      USBToggle();
    } else {
      this.display.memory[this.display.selected].content = arg;
    }
  }

  visitFree(ctx) {
    this.display.memory[this.display.selected].content = '';
  }

  visitIf(ctx) {
    const condInput = this.visitChildren(ctx.conditional());
    const memoryCell = this.display.memory[this.display.selected];

    let leftValue;
    const rightValue = condInput[4][0];
    const compareKeyword = condInput[2];

    // Assign left value based on content type
    if (memoryCell.type === 'numbers') {
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
        this.display.commands.unshift(ctx.expressions());
        this.display.commands = this.display.commands.flat(Infinity);
      }
    } else if (condInput[0] === 'not') {
      if ((compareKeyword === 'less' && leftValue >= rightValue)
      || (compareKeyword === 'greater' && leftValue <= rightValue)
      // eslint-disable-next-line eqeqeq
      || (compareKeyword === 'equal' && leftValue != rightValue)) {
        this.display.commands.unshift(ctx.expressions());
        this.display.commands = this.display.commands.flat(Infinity);
      }
    }
  }

  visitKread(ctx) {
    if (!this.display.importIO) {
      this.errorReporter.generalError("Unknown function 'k_read'");
    }
    // TODO is this necessary?
    // TODO check for IO in outside methods
    // TODO check for memory number to determine if animations are needed
  }

  visitSwrite(ctx) {
    if (!this.display.importIO) {
      this.errorReporter.generalError("Unknown function 's_write'");
      return;
    }
    let arg = this.visitChildren(ctx)[2]; // TODO no need to visit all children, just the args
    if (typeof arg === 'object') {
      arg = arg[0];
    }
    // TODO if string, print with parenthesis?
    this.display.output = this.display.output.concat(arg.replace('"', '').replace('"', ''), '\n');
  }

  visitIo(ctx) {
    this.display.importIO = true;
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
    this.display.memory[this.display.selected].name = arg;
  }

  visitPaint(ctx) {
    const newValue = this.visitChildren(ctx)[2];
    // Update display.outputStyle.bgColor
    this.setDisplay((prevDisplay) => ({
      ...prevDisplay,
      outputStyle: {
        ...prevDisplay.outputStyle,
        bgColor: newValue,
      },
    }));
  }

  visitTextColor(ctx) {
    const newValue = this.visitChildren(ctx)[2];
    // Update display.outputStyle.bgColor
    this.setDisplay((prevDisplay) => ({
      ...prevDisplay,
      outputStyle: {
        ...prevDisplay.outputStyle,
        txtColor: newValue,
      },
    }));
  }

  visitTextSize(ctx) {
    const newValue = this.visitChildren(ctx)[2];
    // Update display.outputStyle.bgColor
    this.setDisplay((prevDisplay) => ({
      ...prevDisplay,
      outputStyle: {
        ...prevDisplay.outputStyle,
        txtSize: newValue,
      },
    }));
  }

  visitTextAlign(ctx) {
    const newValue = this.visitChildren(ctx)[2];
    // Update display.outputStyle.bgColor
    this.setDisplay((prevDisplay) => ({
      ...prevDisplay,
      outputStyle: {
        ...prevDisplay.outputStyle,
        txtAlign: newValue,
      },
    }));
  }

  visitBold(ctx) {
    const isBold = (this.visitChildren(ctx)[2] === 'true');
    const newValue = isBold ? 'bold' : '';
    // Update display.outputStyle.bold
    this.setDisplay((prevDisplay) => ({
      ...prevDisplay,
      outputStyle: {
        ...prevDisplay.outputStyle,
        bold: newValue,
      },
    }));
  }

  visitItalic(ctx) {
    const isItalic = (this.visitChildren(ctx)[2] === 'true');
    const newValue = isItalic ? 'italic' : '';
    // Update display.outputStyle.italic
    this.setDisplay((prevDisplay) => ({
      ...prevDisplay,
      outputStyle: {
        ...prevDisplay.outputStyle,
        italic: newValue,
      },
    }));
  }

  visitUnderline(ctx) {
    const isUnderline = (this.visitChildren(ctx)[2] === 'true');
    const newValue = isUnderline ? 'underline' : '';
    // Update display.outputStyle.underline
    this.setDisplay((prevDisplay) => ({
      ...prevDisplay,
      outputStyle: {
        ...prevDisplay.outputStyle,
        underline: newValue,
      },
    }));
  }
}

export {
  RVisitor,
};
