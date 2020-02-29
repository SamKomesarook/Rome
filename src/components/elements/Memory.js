import React, {Component, useContext} from "react";
import {DisplayContext} from '../../state/DisplayState'
import "../styles/styles.css";

const Memory = () => {

    const [display] = useContext(DisplayContext);

    function getMemory(id) {
        return (<div class={"memory" + (
                id == display.selected
                ? " memorySelected"
                : "") + (
                display.memory[id].type === "letters"
                ? " memoryLetters"
                : display.memory[id].type === "numbers"
                    ? " memoryNumbers"
                    : "")
            //TODO add fields for special and name
		} key={display.memory[id].key}>
            {display.memory[id].content}
        </div>)
    }

    return (<div class={"memorySection"}>
        <div class={"memoryRow"}>
            {getMemory(0)}{getMemory(4)}{getMemory(8)}</div>
        <div class={"memoryRow"}>
            {getMemory(1)}{getMemory(5)}{getMemory(9)}</div>
        <div class={"memoryRow"}>
            {getMemory(2)}{getMemory(6)}{getMemory(10)}</div>
        <div class={"memoryRow"}>
            {getMemory(3)}{getMemory(7)}{getMemory(11)}</div>
    </div>)
}

export default Memory;
