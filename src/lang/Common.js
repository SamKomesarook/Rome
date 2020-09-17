import { RVisitor } from './RomeVisitor';
import { MVisitor } from './MachineVisitor';
import { KreadContext } from './grammar/Rome/RomeParser';
import { ReadContext } from './grammar/Machine/MachineParser';

const antlr4 = require('antlr4');

class ErrorReporter extends antlr4.error.ErrorListener {
  constructor(display) {
    super();
    this.display = display;
  }

  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    this.display.output = this.display.output.concat(`${msg}\n`);
    this.display.errors = true;
  }

  generalError(msg) {
    this.display.output = this.display.output.concat(`${msg}\n`);
    this.display.errors = true;
  }
}

const processInstrs = (display, setDisplay) => {
  const errorReporter = new ErrorReporter(display);
  while (true) {
    if (display.commands.length === 0 || display.errors) {
      break;
    }
    const instr = display.commands[0];
    display.commands.splice(0, 1);

    if (instr.children[0].constructor === KreadContext
       || instr.children[0].constructor === ReadContext) {
      if (!display.importIO) {
        errorReporter.generalError("Unknown function 'keyboardRead'");
        break;
      }
      setDisplay((prevDisplay) => ({
        ...prevDisplay,
        reading: true,
      }));
      break;
    } else {
      instr.accept(display.machine
        ? new MVisitor(display, setDisplay, errorReporter)
        : new RVisitor(display, setDisplay, errorReporter));
    }
  }
};

export {
  processInstrs,
  ErrorReporter,
};
