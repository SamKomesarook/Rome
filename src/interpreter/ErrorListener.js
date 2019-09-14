var antlr4 = require('antlr4');
function RomeErrorListener(ErrorListener) {
	ErrorListener.call(this);
}

RomeErrorListener.prototype = Object.create(antlr4.error.ErrorListener.prototype);
RomeErrorListener.prototype.constructor = RomeErrorListener;
RomeErrorListener.prototype.syntaxError = function (recognizer, offendingSymbol, line, column, msg, e){
	console.log(msg);
	
};

export default RomeErrorListener
