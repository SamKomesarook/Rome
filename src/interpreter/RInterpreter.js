import { RomeListener } from "../lang/RomeListener";

var RInterpreter = function() {
  RomeListener.call(this);
  return this;
};

RInterpreter.prototype = Object.create(RomeListener.prototype);
RInterpreter.prototype.constructor = RInterpreter;

RInterpreter.prototype.enterR = function(ctx) {
  //console.log("ENTER R!");
};

RInterpreter.prototype.exitR = function(ctx) {
  //console.log("EXIT R!");
};

export default RInterpreter;
