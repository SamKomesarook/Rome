import React, { useContext } from "react";
import {DisplayContext} from '../../state/DisplayState'

const Slider = () => {

    const [ setDisplay ] = useContext(DisplayContext);

    function onChange(event) {
        event.preventDefault()
        const value = event.target.value
        setDisplay(display => ({
            ...display,
            delay: value
        }))
    }

    return (<div className="slider form-group shadow-textarea">
        <input data-tip="data-tip" data-for="SliderTips" type="range" className="Slider" min="1" max="10" step="1" id="Slider" onChange={onChange.bind(this)}/>
    </div>);

}

export default Slider;
