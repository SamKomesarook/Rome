import {
    MachineVisitor
} from "./grammar/RomeVisitor";
import React, {
    Component,
    useContext
} from "react";
import {
    DisplayContext,
    DisplayProvider
} from '../state/DisplayState';

var antlr4 = require("antlr4");

class Visitor extends RomeVisitor {

    constructor(set, display) {
        super()
        this.set = set
        this.display = display
    }

    //TODO move the method below to common file
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

    visitMoveR(ctx) {
        this.display.selected += 1
    }
    visitMoveL(ctx) {
        this.display.selected -= 1
    }
    visitPrint(ctx) {
        //TODO convert to ascii
        this.display.output = this.display.output.concat(this.display.memory[this.display.selected].content, "\n")
    }
    visitRead(ctx) {

    }
    visitInc(ctx) {
        this.display.memory[this.display.selected].content += 1
    }
    visitDec(ctx) {
        this.display.memory[this.display.selected].content -= 1
    }
    visitLoop(ctx) {

    }

}