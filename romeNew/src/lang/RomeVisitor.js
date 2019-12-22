import {
    RomeVisitor
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

        return this.visitChildren(ctx)
    }

    visitKread(ctx) {
        //TODO currently all logic is outside. Should it be in here?
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
	    if(ctx.expressions().length >= 1){
		return
	    }
	try{
        var upperBound = parseInt(this.visitChildren(ctx.intargs()));
	}catch(e){
		//TODO print error
	}
        var exprs = []
        for (var i = 0; i < upperBound; i++) {
            this.display.commands.unshift(ctx.expressions())
        }
    }
    visitMem(ctx) {
	if(ctx.intargs().constructor.name == "NumContext"){
		try{
			return this.display.memory[parseInt(this.visitChildren(ctx.intargs()))-1].content
		}catch(e){
			//TODO print error
			return null
		}
	}else{
		
		return this.visitChildren(ctx.intargs())
	}
    }
	visitMove(ctx){
		if(ctx.children[2].getText() == "next"){
			if(this.display.selected == 10){ //TODO replace magic number
				//TODO throw error
			}
			this.display.memory[this.display.selected].selected = false
			this.display.memory[this.display.selected+1].selected = true
			this.display.selected+=1
		}else{
			if(this.display.selected == 0){
				//TODO throw error
			}
			this.display.memory[this.display.selected].selected = false
			this.display.memory[this.display.selected-1].selected = true
			this.display.selected-=1
		}
	}
}

const VisitorComponent = () => {
    return (null)
}


export {
    Visitor,
    VisitorComponent
};
