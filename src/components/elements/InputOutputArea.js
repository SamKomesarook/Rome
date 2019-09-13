import React, { Component } from 'react'
import Typed from "react-typed";
import '../styles/styles.css';

export default class InputOutputArea extends Component {
    render() {
        return (
            <div >
                <textarea className="dashboard" rows="10" disabled/>
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
