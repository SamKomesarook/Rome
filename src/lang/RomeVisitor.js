import {RomeVisitor} from "./grammar/Rome/RomeVisitor";
import React, {Component, useContext} from "react";
import {DisplayContext, DisplayProvider} from '../state/DisplayState';
import {NetToggle, USBToggle} from '../components/elements/Peripherals'

var antlr4 = require("antlr4");

//TODO some updates use setDisplay. Should we?
class RVisitor extends RomeVisitor {
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
        //TODO check for maximum length (or spillover to the next memory cell?
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
        if (this.display.selected == 10) {
            NetToggle()
        } else if (this.display.selected == 11) {
            USBToggle()
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
        NetToggle()
    }
    visitRnet(ctx) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < Math.floor((Math.random() * 10) + 1); i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
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
        //TODO if string, print with parenthesis?
        this.display.output = this.display.output.concat(arg.replace('"', '').replace('"', ''), "\n")
    }
    visitNet(ctx) {
        this.display.importNet = true
    }
    visitIo(ctx) {
        this.display.importIo = true
    }
}

export {
    RVisitor
};
