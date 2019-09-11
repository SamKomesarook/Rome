import { RomeListener } from "../lang/RomeListener";
// import ReadInterpreter from "./ReadInterpreter";

var RInterpreter = function() {
  RomeListener.call(this);
  return this;
};

RInterpreter.prototype = Object.create(RomeListener.prototype);
RInterpreter.prototype.constructor = RInterpreter;

RInterpreter.prototype.enterR = function(ctx) {
  console.log("ENTER R!");
  // console.log(ctx.expressions());
  // // get name of tokens
  // for (var i = 0; i < ctx.expressions().length; i++) {
  //   var tokenName = ctx.expressions()[i].getText();
  //   var tempInterpreter = createInterpreter(tokenName);
  // }
};

// var createInterpreter = (name) => {
//   name = name.replace(/\s/g, "");
//   if (name === "read") {
//     return new ReadInterpreter();
//   } else {
//     return null
//   }
// };

RInterpreter.prototype.exitR = function(ctx) {
  console.log("EXIT R!");
};

export default RInterpreter;
