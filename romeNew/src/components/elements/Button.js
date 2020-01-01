import React, { Component, useContext } from "react";
import { DisplayContext } from '../../state/DisplayState';
import { Visitor, processInstrs } from '../../lang/RomeVisitor'
var antlr4 = require("antlr4");
var RomeLexer = require("../../lang/grammar/RomeLexer").RomeLexer;
var RomeParser = require("../../lang/grammar/RomeParser").RomeParser;

//TODO no updates use setDisplay. Should we?
const StartButton = () => {

	const [display, setDisplay] = useContext(DisplayContext);

	function start(event) {
		setDisplay(display => ({ ...display, running: true }));
		var chars = new antlr4.InputStream(display.text);
    		var lexer = new RomeLexer(chars);
    		var tokens = new antlr4.CommonTokenStream(lexer);
    		var parser = new RomeParser(tokens);
		parser.buildParseTrees = true;
		const tree = parser.r();
		if (tree.exception === null && parser._syntaxErrors === 0) {
		try{
			for(var child of tree.children){
				if(child.toString() == "[45]"){ //TODO change this to compare the 'constructor.name' property
					display.commands.push(child)
				}
			}
			processInstrs(display, setDisplay)
			return true;
		}catch(e){
			console.log(e)
			//TODO print error messages

		}
		}

	}

	return(
	<button
		className="startButton"
	  onClick={start}
          type="button"
          disabled={
            display.running
              ? true
              : false
          }
        >	start
		</button>
	)
}

const StopButton = () => {
	const [display, setDisplay] = useContext(DisplayContext);
	function stop(event) {
		var newMem = display.memory
		for(var mem of newMem){
		mem.type="";
			mem.content="";
			mem.name="";
		}
		setDisplay(display => ({ ...display, running: false,
		output:"",
			input:"",
	reading:false,
	selected:0,
	commands:[],
	importIO:false,
	importNet:false,
		memory: newMem}))
	}

	return(
	<button
		className="stopButton"
	  onClick={stop}
          type="button"
          disabled={
            display.running
              ? false
              : true
          }
        >	stop
		</button>

	)
}

export {StartButton, StopButton};
