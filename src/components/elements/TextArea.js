import React, {Component, useContext} from "react";
import Typed from "react-typed";
import {DisplayContext} from '../../state/DisplayState'

const TextArea = () => {

    const [display, setDisplay] = useContext(DisplayContext);

    function onChange(event) {
        event.preventDefault()
        const value = event.target.value
        //TODO ensure the below includes newline breaks and shit...
        setDisplay(display => ({
            ...display,
            text: value
        }))
    }

    return (<div className="textArea form-group shadow-textarea" id="codingWrapper">
        <Typed
            strings={[
                "start\nmove(next)\nmove(last)\nend",
                "start\nset(letters)\nwrite(\"hello!\")\nend",
                "start\nset(numbers)\nwrite(4)\nend",
                "start\nset(letters)\nwrite(\"hello\")\nfree\nwrite(\" world!\")\nend",
                "start\nloop(3){\nset(letters)\nwrite(\"content\")\nmove(next)\n}\nend",
                "start\nset(numbers)\nwrite(3)\nmove(next)\nloop(memory(1)){\nset(letters)\nwrite(\"content\")\nmove(next)\n}\nend",
                "start\nset(numbers)\nwrite(3)\nname(\"first\")\nmove(next)\nloop(memory(\"first\")){\nset(letters)\nwrite(\"content\")\nmove(next)\n}\nend",
                "start\nset(numbers)write(3)\nif(is equal 3){\nmove(next)\nset(letters)\nwrite(\"is equal to 3!\")\n}\nend",
                "start\nset(numbers)write(3)\nif(not less 3){\nmove(next)\nset(letters)\nwrite(\"is not less than 3!\")\n}\nend",
                "start\nset(numbers)write(3)\nif(is greater 3){\nmove(next)\nset(letters)\nwrite(\"is greater than 3!\")\n}\nend",
                "start\nimport network\nend",
                "start\nimport network\nn_write(\"hello!\")\nend",
                "start\nimport network\nn_read\nend",
                "start\nimport IO\nk_read\nend",
                "start\nimport IO\nk_write(\"hello!\")\nend",
            ]} typeSpeed={40} backSpeed={30} attr="placeholder" loop="loop" showCursor={false}>
            <textarea className="form-control rounded-0 z-depth-1" cols="50" rows="28" id="codingArea" onChange={onChange.bind(this)}/>
        </Typed>
    </div>);
}

export default TextArea;
