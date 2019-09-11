import { RomeListener } from "../lang/RomeListener"

var ReadInterpreter = function(memArr) {
    RomeListener.call(this);
    this.memArr = memArr;
    return this;
};

ReadInterpreter.prototype = Object.create(RomeListener.prototype);
ReadInterpreter.prototype.constructor = ReadInterpreter;

ReadInterpreter.prototype.enterRead = function(ctx) {
    var content = "";
    for (var i = 0; i < this.memArr.length; i++) {
        console.log(this.memArr[i].props.selected);
        if (this.memArr[i].props.selected === true) {
            content = this.memArr[i].props.content;
            console.log("Content: ", content);
            return content;
        }
    }
}

ReadInterpreter.prototype.exitRead = function(ctx) {
    console.log("Exit read!");
}

export default ReadInterpreter;
