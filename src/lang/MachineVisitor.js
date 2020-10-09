import { MachineVisitor } from './grammar/Machine/MachineVisitor';

class MVisitor extends MachineVisitor {
  constructor(staticDisplay, errorReporter) {
    super();
    this.staticDisplay = staticDisplay;
    this.errorReporter = errorReporter;
  }

  // TODO move the method below to common file
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

  visitMoveR(ctx) {
    this.staticDisplay.selected += 1;
  }

  visitMoveL(ctx) {
    this.staticDisplay.selected -= 1;
  }

  visitPrint(ctx) {
    // TODO convert to ascii
    const selectedMemoryContent = this.staticDisplay.memory[this.staticDisplay.selected].content;
    this.staticDisplay.consoleHistory.push(selectedMemoryContent);
  }

  visitRead(ctx) {

  }

  visitInc(ctx) {
    this.staticDisplay.memory[this.staticDisplay.selected].content += 1;
  }

  visitDec(ctx) {
    this.staticDisplay.memory[this.staticDisplay.selected].content -= 1;
  }

  visitLoop(ctx) {
    // TODO add catch for infinite loop
    if (ctx.expressions().length < 1) {
      return;
    }
    if (this.staticDisplay.memory[this.staticDisplay.selected].content !== 0) {
      this.staticDisplay.commands.unshift(ctx);
      this.staticDisplay.commands.unshift(ctx.expressions());
      this.staticDisplay.commands = this.staticDisplay.commands.flat(Infinity);
    }
  }
}
export { MVisitor };
