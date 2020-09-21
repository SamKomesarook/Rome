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

const processInstrs = (staticDisplay) => {
  const errorReporter = new ErrorReporter(staticDisplay);
  while (true) {
    if (staticDisplay.commands.length === 0 || staticDisplay.errors) {
      break;
    }

    const instr = staticDisplay.commands[0];
    staticDisplay.commands.splice(0, 1);

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
