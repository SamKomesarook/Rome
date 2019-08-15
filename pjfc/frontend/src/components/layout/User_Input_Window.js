import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export class User_Input_Window extends Component {

    constructor(props) {
        super(props);
        this.containerEl = document.createElement('div');
        this.externalWindow = null;
    }

    componentDidMount() {
        this.externalWindow = window.open('', '', 'width=600,height=400,left=500');

        this.externalWindow.document.body.appendChild(this.containerEl);

        this.externalWindow.document.title = 'User Input Dashboard';

        this.externalWindow.addEventListener('beforeunload', () => {
            this.props.closeWindowPortal();
        })
    }

    componentWillUnmount() {
        this.externalWindow.close();
    }

    render() {
        return ReactDOM.createPortal(
            <div className="col-lg-8">
                <h1>User Input Dashboard</h1>
                <div className="row"><textarea rows='20' cols='50'></textarea></div>
                <hr></hr>
                <div className="row"><input type="text"/></div>
            </div>, this.containerEl
        )
    }
}

export default User_Input_Window;