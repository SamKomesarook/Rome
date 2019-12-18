import React, { Component, useContext } from "react";
import { DisplayContext } from '../../state/DisplayState';
import { Visitor } from '../../lang/RomeVisitor'

const InputArea = () => {
	const [display, setDisplay] = useContext(DisplayContext);
	//TODO centralise the method below
	function processInstrs(){
		var count = 0;
		for(var instr of display.commands){
			count+=1
			if(instr.children[0].constructor.name == "KreadContext"){
				display.running = false
				display.reading = true
				break
			}else{
				instr.accept(new Visitor(setDisplay, display))
			}		
		}
		display.commands = display.commands.slice(count)
		return true
	}

	function handleKey(event) {
		if (event.keyCode === 13) {
			var newMem = display.memory
		
	newMem[display.selected].content = display.input 
			setDisplay(display => ({...display, memory: newMem, reading: false}))
			processInstrs()
		}
	}

	function onChange(event){
		event.preventDefault()
		const value = event.target.value
		setDisplay(display => ({...display, input: value}))
	}
	return(
		<input type="text" onKeyDown={handleKey} onChange={onChange} disabled={!display.reading} value={!display.reading ? "" : display.input}></input> 
	)
}

const OutputArea = () => {	

	const [display, setDisplay] = useContext(DisplayContext);
	return(
		<div contentEditable="false" className="ioArea" 
                   id="outputArea"
                 >
		{display.output}
                </div>
	)	
}

export {InputArea, OutputArea}
