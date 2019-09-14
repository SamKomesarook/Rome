var antlr4 = require('antlr4');

var ErrorListener = function(errors) {
        antlr4.error.ErrorListener.call(this);
        this.errors = errors;
        return this;
    };

ErrorListener.prototype = Object.create(antlr4.error.ErrorListener.prototype);
ErrorListener.prototype.constructor = ErrorListener;
ErrorListener.prototype.syntaxError = function (recognizer, offendingSymbol, line, column, msg, e){
	console.log(msg);
	
};
export default ErrorListener
