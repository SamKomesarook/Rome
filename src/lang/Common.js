import { TerminalNodeImpl } from 'antlr4/tree/Tree';
import antlr4 from 'antlr4';
import { RVisitor } from './RomeVisitor';
import { MVisitor } from './MachineVisitor';
import { RomeLexer } from './grammar/Rome/RomeLexer';
import { RomeParser, KreadContext } from './grammar/Rome/RomeParser';
import { MachineLexer } from './grammar/Machine/MachineLexer';
import { MachineParser, ReadContext } from './grammar/Machine/MachineParser';

class ErrorReporter extends antlr4.error.ErrorListener {
  constructor(display) {
    super();
    this.display = display;
  }

  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    this.display.consoleHistory.push('ERROR: '+msg);
    this.display.errors = true;
    this.display.running = false;
  }

  generalError(msg) {
    this.display.consoleHistory.push('ERROR: '+msg);
    this.display.errors = true;
    this.display.running = false;
  }
}

const processInstrs = (staticDisplay, errorReporter = new ErrorReporter(staticDisplay)) => {
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
      // Process the line of code
      instr.accept(staticDisplay.machine
        ? new MVisitor(staticDisplay, errorReporter)
        : new RVisitor(staticDisplay, errorReporter));

      if (staticDisplay.isDebugActive) {
        break;
      }
    }
  }
};

const compile = (staticDisplay) => {
  const chars = new antlr4.InputStream(staticDisplay.text);
  const lexer = (staticDisplay.machine)
    ? new MachineLexer(chars)
    : new RomeLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = (staticDisplay.machine)
    ? new MachineParser(tokens)
    : new RomeParser(tokens);
  const errorReporter = new ErrorReporter(staticDisplay);
  parser.buildParseTrees = true;
  parser.removeErrorListeners();
  parser.addErrorListener(errorReporter);

  const tree = parser.r();

  if (tree.exception === null && parser._syntaxErrors === 0) {
    try {
      for (const child of tree.children) {
        if (child.constructor !== TerminalNodeImpl) {
          staticDisplay.commands.push(child);
        }
      }
      // eslint-disable-next-line no-param-reassign
      staticDisplay.errors = false;
      processInstrs(staticDisplay, errorReporter);
    } catch (e) {
      console.log(e);
    }
  }

  return staticDisplay;
};

export {
  processInstrs,
  ErrorReporter,
  compile,
};
