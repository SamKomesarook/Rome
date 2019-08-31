import React, { Component } from 'react'
import ReactToolTip from 'react-tooltip'
import Tooltips from "./Tooltips";

export class HelpButton extends Component {
    state = { class: "btn btn-primary" };
  
    render() {
        return (
            <div>
                <button type="button" className={this.state.class} data-tip data-for="clickForHelp" data-event="click" data-event-off="blur">
                {this.props.name}
                </button>
             </div>
        )
    }
}

export default HelpButton;