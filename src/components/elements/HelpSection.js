import React, { Component } from 'react'

export default class HelpSection extends Component {
    render() {
        return (
            <div>
                <div className="row justify-content-md-center">
                    <h5>Command List</h5>
                </div>
                <div className="row">
                    <div className="col col-md-4">
                        <ul>
                            <li>start</li>
                            <li>end</li>
                            <li>move</li>
                            <li>set</li>
                            <li>write</li>
                            <li>s_write</li>
                            <li>if</li>
                        </ul>
                    </div>
                    <div className="col col-md-4">
                        <ul>
                            <li>loop</li>
                            <li>memory</li>
                            <li>free</li>
                            <li>k_read</li>
                            <li>n_read</li>
                            <li>n_write</li>
                            <li>import</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}