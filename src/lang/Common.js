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
    this.display.consoleHistory.push(msg);
    this.display.errors = true;
    this.display.running = false;
  }

  generalError(msg) {
    this.display.consoleHistory.push(msg);
    this.display.errors = true;
    this.display.running = false;
  }
}

const processInstrs = (staticDisplay, errorReporter) => {
  while (staticDisplay.commands.length !== 0 && !staticDisplay.errors) {
    const instr = staticDisplay.commands.shift();

    if (instr.children[0].constructor === KreadContext
      || instr.children[0].constructor === ReadContext) {
      if (!staticDisplay.importIO) {
        errorReporter.generalError("Unknown function 'keyboardRead'");
        break;
      }
      // eslint-disable-next-line no-param-reassign
      staticDisplay.reading = true;
      break;
    } else {
      instr.accept(staticDisplay.machine
        ? new MVisitor(staticDisplay, errorReporter)
        : new RVisitor(staticDisplay, errorReporter));
    }
  }
};

export {
  processInstrs,
  ErrorReporter,
};
