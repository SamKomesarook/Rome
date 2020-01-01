import {RomeVisitor} from "./grammar/RomeVisitor";
import React, {Component, useContext} from "react";
import {DisplayContext, DisplayProvider} from '../state/DisplayState';
var antlr4 = require("antlr4");

//TODO some updates use setDisplay. Should we?
class Visitor extends RomeVisitor {
    constructor(set, display) {
        super()
        this.set = set
        this.display = display
    }
    visitChildren(ctx) {
        if (!ctx) {
            return;
        }
        if (ctx.children) {
            return ctx.children.map(child => {
                if (child.children && child.children.length !== 0) {
                    return child.accept(this);
                } else {
                    return child.getText();
                }
            });
        }
    }

    visitR(ctx) {
        /*
        var comms = this.display.commands
        for (var child of ctx.children) {
            if (child.toString() == "[45]") { //TODO change this to compare the 'constructor.name' property
                comms.push(child)
            }
        }
        this.set(display => ({
            ...display,
            commands: comms
        }))
*/
        return this.visitChildren(ctx)
    }

    visitSet(ctx) {
        var newMemory = this.display.memory
        newMemory[this.display.selected].type = this.visitChildren(ctx)[2]; //TODO no need to visit all of the children, just need the args
        this.set(display => ({
            ...display,
            memory: newMemory
        }));

    }

    visitLoop(ctx) {
        if (ctx.expressions().length < 1) {
            return
        }
        try {
            var upperBound = parseInt(this.visitChildren(ctx.intargs()));
        } catch (e) {
            //TODO print error
        }
        var exprs = []
        for (var i = 0; i < upperBound; i++) {
            this.display.commands.unshift(ctx.expressions())
            this.display.commands = this.display.commands.flat(Infinity) //TODO is the assignment really necessary?
        }
    }
    visitMem(ctx) {
        if (ctx.intargs().constructor.name == "NumContext") {
            try {
                return this.display.memory[parseInt(this.visitChildren(ctx.intargs())) - 1].content
            } catch (e) {
                //TODO print error
                return null
            }
        } else {

            return this.visitChildren(ctx.intargs())
        }
    }
    visitMove(ctx) {
        if (ctx.children[2].getText() == "next") {
            if (this.display.selected == 10) { //TODO replace magic number
                //TODO throw error
            }
            this.display.selected += 1
        } else {
            if (this.display.selected == 0) {
                //TODO throw error
            }
            this.display.selected -= 1
        }
    }

    visitWrite(ctx) {
        //TODO check for maximum length (or spillover to the next memory cell? <<<<<< )
        if (this.display.memory[this.display.selected].content != "") {
            //TODO throw error
        }
        var arg = this.visitChildren(ctx)[2] //TODO no need to visit all children, just the args
        if (typeof arg == "object") {
            arg = arg[0]
        }
        if (arg[0] == "\"" && this.display.memory[this.display.selected].type == "numbers") {
            //TODO throw error
        }
        if (arg != "\"" && this.display.memory[this.display.selected].type == "letters") {
            //TODO throw error
        }
        if (this.display.selected == 11) {
            //TODO animate
        } else if (this.display.selected == 12) {
            //TODO animate
        } else {
            this.display.memory[this.display.selected].content = arg;
        }
    }
    visitFree(ctx) {
        this.display.memory[this.display.selected].content = "";
    }
    visitIf(ctx) {
        var args = this.visitChildren(ctx.conditional())
        var mem = this.display.memory[this.display.selected]
        console.log(mem.content)
        if (mem.type == "letters") {
            var condArg1 = mem.content
        } else {
            try {
                var condArg1 = parseInt(mem.content)
            } catch (e) {
                //TODO write error
            }
        }
        try { //TODO not too effective, as someone might want to write a string of numbers
            var condArg2 = args[4][0]
        } catch (e) {
            //TODO write error
        }
        if (args[0] == "is") {
            if (args[2] == "less") {
                if (condArg1 < condArg2) {
                    this.display.commands.unshift(ctx.expressions())
                    this.display.commands = this.display.commands.flat(Infinity)
                }
            } else if (args[2] == "greater") {
                if (condArg1 > condArg2) {
                    this.display.commands.unshift(ctx.expressions())
                    this.display.commands = this.display.commands.flat(Infinity)
                }
            } else {
                if (condArg1 == condArg2) {
                    this.display.commands.unshift(ctx.expressions())
                    this.display.commands = this.display.commands.flat(Infinity)
                }
            }
        } else {
            if (args[2] == "less") {
                if (condArg1 >= condArg2) {
                    this.display.commands.unshift(ctx.expressions())
                    this.display.commands = this.display.commands.flat(Infinity)
                }
            } else if (args[2] == "greater") {
                if (condArg1 <= condArg2) {
                    this.display.commands.unshift(ctx.expressions())
                    this.display.commands = this.display.commands.flat(Infinity)
                }
            } else {
                if (condArg1 != condArg2) {
                    this.display.commands.unshift(ctx.expressions())
                    this.display.commands = this.display.commands.flat(Infinity)
                }
            }
        }
    }
    visitSnet(ctx) {
        //TODO
    }
    visitRnet(ctx) {
        //TODO
    }
    visitKread(ctx) {
        //TODO is this necessary?
        //TODO check for IO in outside methods
        //TODO check for memory number to determine if animations are needed
    }
    visitSwrite(ctx) {
        if (!this.display.importIo) {
            //TODO throw error
        }
        var arg = this.visitChildren(ctx)[2] //TODO no need to visit all children, just the args
        if (typeof arg == "object") {
            arg = arg[0]
        }
        this.display.output = this.display.output.concat(arg.replace('"', '').replace('"', ''), "\n")
        console.log(this.display.output)
    }
    visitNet(ctx) {
        this.display.importNet = true
    }
    visitIo(ctx) {
        this.display.importIo = true
    }
}

function processInstrs(display, setDisplay){
    while(true){
        if (display.commands.length == 0){
            break
        }
        var instr = display.commands[0]
        display.commands.splice(0,1)
        if(instr.children[0].constructor.name == "KreadContext"){
            display.reading = true
            break
        }else{
            instr.accept(new Visitor(setDisplay, display))
        }
    }
    return true
}

export {
    Visitor,
    processInstrs
};
