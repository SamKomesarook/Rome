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
	    if(ctx.expressions().length < 1){
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
		this.display.commands = this.display.commands.flat(Infinity) //TODO is the assignment really necessary?
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

	visitWrite(ctx){
		if(this.display.memory[this.display.selected].content != ""){
			//TODO throw error
		}
		var arg = this.visitChildren(ctx)[2] //TODO no need to visit all children, just the args
		if(typeof arg == "object"){
			arg = arg[0]
		}
		if (arg[0] == "\"" && this.display.memory[this.display.selected].type == "numbers"){
			//TODO throw error
		}
		if (arg != "\"" && this.display.memory[this.display.selected].type == "letters"){
			//TODO throw error
		}
		if(this.display.selected == 11){
			//TODO animate
		}else if(this.display.selected == 12){
			//TODO animate
		}else{
			this.display.memory[this.display.selected].content = arg;
		}
	}
	visitFree(ctx){
		this.display.memory[this.display.selected].content = "";
	}
	visitIf(ctx){

	}
	visitSnet(ctx){

	}
	visitRnet(ctx){

	}
	visitKread(ctx){
		//TODO is this necessary?
	}
	visitSwrite(ctx){

	}
}

const VisitorComponent = () => {
    return (null)
}


export {
    Visitor,
    VisitorComponent
};
