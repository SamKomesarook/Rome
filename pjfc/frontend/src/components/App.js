import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import User_Input_Window from './layout/User_Input_Window';

export class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            showWindowPortal: false
        };

        this.toggleWindow = this.toggleWindowPortal.bind(this);
        this.closeWindow = this.closeWindowPortal.bind(this);
    }

    componentDidMount() {
        window.addEventListener('beforeunload', () => {
            this.closeWindowPortal();
        });
    }

    toggleWindowPortal() {
        this.setState(state => ({
            ...state,
            showWindowPortal: !state.showWindowPortal,
        }))
    }

    closeWindowPortal() {
        this.setState({ showWindowPortal: false})
    }

    render() {
        return (
            <div>
                <h1>React App</h1>
                <button onClick={() => this.toggleWindowPortal()}>Open test</button>
                {this.state.showWindowPortal && <User_Input_Window closeWindowPortal={this.closeWindowPortal} />}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
