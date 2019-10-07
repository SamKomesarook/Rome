var antlr4 = require("antlr4");

class ErrorReporter extends antlr4.error.ErrorListener {
  constructor(interpreter) {
    super();
    this.interpreter = interpreter;
  }

  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    const mismatchRegex = /(expecting)\s(?:('[a-zA-z]*'))/gm;
    const mismatchRequireRegex = /(expecting)\s'/gm;

    const extraneousRegex = /(expecting)\s(?:({('[a-zA-Z_]*'(, )*)*)(})*)/gm;
    const extraneousRequireRegex = /('[a-zA-Z_]*')/gm;

    var outputMsg;
    if (mismatchRegex.test(msg)) {
      outputMsg = msg.match(mismatchRegex)[0];
      outputMsg = outputMsg.replace(mismatchRequireRegex, "");
      outputMsg = outputMsg.replace("'", "");
      outputMsg =
        "Require a '<strong>" +
        outputMsg +
        "</strong>' at line " +
        line +
        " column " +
        column;
    } else if (extraneousRegex.test(msg)) {
      outputMsg = msg.match(extraneousRegex)[0];
      var acceptableToken = outputMsg.match(extraneousRequireRegex);
      outputMsg = "Require: ";
      for (var i = 0; i < acceptableToken.length; i++) {
        acceptableToken[i] = acceptableToken[i].replace(/'/g, "");
        outputMsg += "'<strong>" + acceptableToken[i] + "</strong>'";
        if (i !== acceptableToken.length - 1) {
          outputMsg += " or ";
        }
      }
      outputMsg += " at line " + line + " column " + column;
    }

    if (outputMsg == null) {
      outputMsg =
        "Missing the key word end at line " +
        (parseInt(line) + 1) +
        " column 0";
    }
    this.interpreter.printAnimation(outputMsg);
  }
}

export default ErrorReporter;
