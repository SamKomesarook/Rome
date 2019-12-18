import React, { Component, useContext } from "react";
import { DisplayContext } from '../../state/DisplayState'
import "../styles/styles.css";

const Memory = () => {
	const [display] = useContext(DisplayContext);
	var memoryToReturn = []
	for (var mem of display.memory){
		console.log("con", mem.content)
			memoryToReturn.push(
				<div
				class={"memory" 
				+ (mem.selected ? " memorySelected" : "")
				+ (mem.type === "letters" ? " memoryLetters" : mem.type === "numbers" ? " memoryNumbers" : "")
				//TODO add fields for special and name
				}
				key={mem.key}
       				>
				{mem.content}
       				</div>
			)
		}
	
	return(memoryToReturn)
}

export default Memory;
