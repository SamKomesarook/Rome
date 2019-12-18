import { RomeVisitor } from "./grammar/RomeVisitor";
import React, { Component, useContext } from "react";
import { DisplayContext, DisplayProvider } from '../state/DisplayState';
var antlr4 = require("antlr4");

class Visitor extends RomeVisitor {
	constructor(set, display){
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
	for(var child of ctx.children){
		if(child.toString() == "[45]"){ //TODO change this to compare the 'constructor.name' property
			comms.push(child)
		}
	}
	this.set(display => ({...display, commands: comms}))
	
    return this.visitChildren(ctx);
  }

	visitKread(ctx){
		//TODO currently all logic is outside. Should it be in here?
	}



visitSet(ctx) {
	var newMemory = this.display.memory
	newMemory[this.display.selected].type = this.visitChildren(ctx)[2]; //TODO no need to visit all of the children, just need the args
	this.set(display => ({ ...display, memory: newMemory}));

  }

	visitLoop(ctx) {
		var upperBound = parseInt(this.visitChildren(ctx.intargs()));
		var exprs = []
		for (var i = 0; i < upperBound; i++) {
			exprs.push(ctx.expressions())
		}
		var toset = this.display.commands
		toset.shift()
		toset.unshift(exprs.flat())
		/*
		for (var i = 0; i < upperBound; i++) {
			ctx.expressions().map(
			expr => {
				//this.visitChildren(expr);
				exprs.push(expr)
			}
			);
    		}*/
				/*
		toset.shift()
		toset.unshift(exprs)
		toset = toset.flat()
		console.log("toset", toset)
		this.set(display => ({ ...display, commands: toset}))
		console.log("yooo", this.display.commands)
		*/
	}
	visitMem(ctx){
		
		console.log(int(this.visitChildren(ctx)))
		return 4
  }
}

const VisitorComponent = () => {
	return(null)
}


export { Visitor, VisitorComponent };
