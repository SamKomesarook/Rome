import React, { Component } from 'react'
import Typed from "react-typed";
import '../styles/styles.css';

export default class InputOutputArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ref: this.props.compRef
        }
    }

    render() {
        const outputStyle ={
            height:"180px",
            backgroundColor:"#D0D0D0",
            overflow:"auto"
        }
        return (
            <div data-tip data-for="DashboardArea" ref={this.state.ref}>
                <div contentEditable="false" className="form-control rounded-0 z-depth-1 testing" 
                   id="outputArea" style={outputStyle}
                 >
                </div>
                <Typed
                    strings={[
                        "Input something......."
                    ]}
                    typeSpeed={40}
                    backSpeed={30}
                    attr="placeholder"
                    loop>

                    <input type="text" className="dashboard"/>
                </Typed>
            </div>
        )
    }
}
