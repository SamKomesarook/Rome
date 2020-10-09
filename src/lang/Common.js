import { RVisitor } from './RomeVisitor';
import { MVisitor } from './MachineVisitor';
import { KreadContext } from './grammar/Rome/RomeParser';
import { ReadContext } from './grammar/Machine/MachineParser';
import { DisplayContext } from '../state/DisplayState';

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
      if (staticDisplay.debuging) {
        break;
      }
    }
  }
  if (staticDisplay.commands.length === 0 && staticDisplay.debuging) {
    // eslint-disable-next-line no-param-reassign
    staticDisplay.debuging = false;
    // eslint-disable-next-line no-param-reassign
    staticDisplay.debugEndHint = true;
  }
};

const debugInstrs = (staticDisplay, errorReporter) => {
  while (staticDisplay.commands.length !== 0) {
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
      if (staticDisplay.debuging) {
        break;
      }
    }
  }
  if (staticDisplay.commands.length === 0 && staticDisplay.debuging && !staticDisplay.error) {
    // eslint-disable-next-line no-param-reassign
    staticDisplay.debuging = false;
    // eslint-disable-next-line no-param-reassign
    staticDisplay.debugEndHint = true;
  }
};

export {
  processInstrs,
  ErrorReporter,
  debugInstrs,
};
