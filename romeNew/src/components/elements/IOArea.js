import React, { Component, useContext } from "react";
import { DisplayContext } from '../../state/DisplayState';
import { Visitor } from '../../lang/RomeVisitor'
//TODO no updates use setDisplay. Should we?
const InputArea = () => {
	const [display, setDisplay] = useContext(DisplayContext);
	//TODO centralise the method below
	function processInstrs(){
		while(true){
			var instr = display.commands[0]
			display.commands.splice(0,1)
			if(instr.children[0].constructor.name == "KreadContext"){
				display.reading = true
				break
			}else{
				instr.accept(new Visitor(setDisplay, display))
			}
			if (display.commands.length == 0){
				break
			}
		}
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
