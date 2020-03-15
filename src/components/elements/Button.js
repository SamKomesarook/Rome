import React, {Component, useContext} from "react";
import {DisplayContext} from '../../state/DisplayState';
import {RVisitor} from '../../lang/RomeVisitor'
import {MVisitor} from '../../lang/MachineVisitor'
import {processInstrs, ErrorReporter} from '../../lang/Common'
var antlr4 = require("antlr4");
var RomeLexer = require("../../lang/grammar/Rome/RomeLexer").RomeLexer;
var RomeParser = require("../../lang/grammar/Rome/RomeParser").RomeParser;
var MachineLexer = require("../../lang/grammar/Machine/MachineLexer").MachineLexer;
var MachineParser = require("../../lang/grammar/Machine/MachineParser").MachineParser;

//TODO no updates use setDisplay. Should we?
const StartButton = () => {

    const [display, setDisplay] = useContext(DisplayContext);

    function start(event) {

        setDisplay(display => ({
            ...display,
            running: true
        }));
        var chars = new antlr4.InputStream(display.text);
        var lexer = (display.machine)
            ? new MachineLexer(chars)
            : new RomeLexer(chars)
        var tokens = new antlr4.CommonTokenStream(lexer);
        var parser = (display.machine)
            ? new MachineParser(tokens)
            : new RomeParser(tokens)
        parser.buildParseTrees = true;
        parser.removeErrorListeners();
        parser.addErrorListener(new ErrorReporter(display));

        const tree = parser.r();

        if (tree.exception === null && parser._syntaxErrors === 0) {
            try {
                for (var child of tree.children) {
                    if (child.constructor.name != "TerminalNodeImpl") {
                        display.commands.push(child)
                    }
                }
                setDisplay(display => ({
                    ...display,
                    errors: false
                }));
                processInstrs(display, setDisplay)
                return true;
            } catch (e) {
                console.log(e)
                //TODO print error messages
            }
        }

    }

    return (<button className="startButton" onClick={start} type="button" disabled={display.running
            ? true
            : false
}>
        start
    </button>)
}

const StopButton = () => {
    const [display, setDisplay] = useContext(DisplayContext);
    function stop(event) {
        var newMem = display.memory
        if (display.machine) {
            for (var mem of newMem) {
                mem.content = 0;
            }
        } else {
            for (var mem of newMem) {
                mem.type = "";
                mem.content = "";
                mem.name = "";
            }
        }

        setDisplay(display => ({
            ...display,
            running: false,
            output: "",
            input: "",
            errors: false,
            reading: false,
            selected: 0,
            commands: [],
            importIO: false,
            importNet: false,
            memory: newMem
        }))
    }

    return (<button className="stopButton" onClick={stop} type="button" disabled={display.running
            ? false
            : true
}>
        stop
    </button>)
}

export {
    StartButton,
    StopButton
};
