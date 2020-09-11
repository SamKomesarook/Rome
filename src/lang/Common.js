import { RVisitor } from './RomeVisitor';
import { MVisitor } from './MachineVisitor';

const antlr4 = require('antlr4');

const processInstrs = (display, setDisplay) => {
  // var delayCount = 0;
  /*
    if (display.commands.length == 0) {
        break
    }

    for(var i=0; i<display.commands.length; i++){
        var instr = display.commands[i]
        if (instr.children[0].constructor.name == "KreadContext") {
            display.reading = true
            display.commands.splice(0, i)
            break
        } else {
            setTimeout(instr.accept(new Visitor(setDisplay, display)), delayCount)
        }
    }
    */
  while (true) {
    if (display.commands.length === 0 || display.errors) {
      break;
    }
    const instr = display.commands[0];
    display.commands.splice(0, 1);
    if (instr.children[0].constructor.name === 'KreadContext' || instr.children[0].constructor.name === 'ReadContext') {
      if (!display.importIO) {
        const errors = new ErrorReporter(display);
        errors.generalError("Unknown function 'k_read'");
        break;
      }
      setDisplay((display) => ({
        ...display,
        reading: true,
      }));
      break;
    } else {
      instr.accept(display.machine ? new MVisitor(setDisplay, display) : new RVisitor(setDisplay, display));
    }
  }
};

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

export {
  processInstrs,
  ErrorReporter,
};
