import React, { useContext } from "react";
import {DisplayContext} from '../../state/DisplayState';
import {processInstrs} from '../../lang/Common'
import {NetToggle, USBToggle} from './Peripherals'
//TODO no updates use setDisplay. Should we?
const InputArea = () => {
    const [display, setDisplay] = useContext(DisplayContext);

    function handleKey(event) {
        if (event.keyCode === 13) {
            var newMem = display.memory
            if (display.selected === 10){
				NetToggle()
			}else if(display.selected === 11) {
				USBToggle()
			} else {
                newMem[display.selected].content = display.input
            }
			setDisplay(display => ({
				...display,
				memory: newMem,
				reading: false
			}))
            processInstrs(display, setDisplay)
        }
    }

    function onChange(event) {
        event.preventDefault()
        const value = event.target.value
        setDisplay(display => ({
            ...display,
            input: value
        }))
    }


    return (<input className="inputBar" size="60" type="text" onKeyDown={handleKey} onChange={onChange} disabled={!display.reading} value={!display.reading
            ? ""
            : display.input}></input>)
}

const OutputArea = () => {

    const [display] = useContext(DisplayContext);
    return (<div contentEditable="false" className="outputArea" id="outputArea">
        {display.output}
    </div>)
}

export {
    InputArea,
    OutputArea
}
