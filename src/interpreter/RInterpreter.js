import RomeListener from "../lang/RomeListener";

class RPrinter extends RomeListener {
  constructor() {
    super();
    RomeListener.call(this); // inherit default listener
    return this;
  }
  enterR(ctx) {
    console.log("Enter R!");
    console.log(ctx);
  }
  exitR(ctx) {
    console.log("Exit R!");
    console.log(ctx);
  }
}

RPrinter.prototype = Object.create(RomeListener.prototype);
RPrinter.prototype.constructor = RPrinter;
