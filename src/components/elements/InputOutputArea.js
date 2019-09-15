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
        return (
            <div data-tip data-for="DashboardArea" ref={this.state.ref}>
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