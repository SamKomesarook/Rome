import React, { Component, useContext } from "react";
import Typed from "react-typed";
import { DisplayContext } from '../../state/DisplayState'


const TextArea = () => {
	
	const [display, setDisplay] = useContext(DisplayContext);

	function onChange(event) {
event.preventDefault()
    const value = event.target.value
//TODO ensure the below includes newline breaks and shit...
setDisplay(display => ({ ...display, text: value }))
}
	
	return (
	<div className="textArea form-group shadow-textarea" id="codingWrapper">
	<Typed
	    //TODO write the example strings
            strings={[
              "testing string here",
		"more testing strings..."
            ]}
            typeSpeed={40}
            backSpeed={30}
            attr="placeholder"
            loop
            showCursor={false}
          >
           <textarea
              className="form-control rounded-0 z-depth-1"
              cols="50"
              id="codingArea"
              rows="28"
	      onChange={onChange.bind(this)}
            />
	</Typed>
          </div>
       
    );
}

export default TextArea;
