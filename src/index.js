import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import InputField from './components/elements/InputField';
import SubmitButton from './components/elements/SubmitButton';
import bcrypt from 'bcryptjs';


class LoginControl extends React.Component {

    

    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.state = {password: ''};
      this.state = {isLoggedIn: false};
      
    }
   

    handleLoginClick() {

        let hash = "$2b$09$xL3tXFifu0DWY/OYGvRD4eiDE0atzsOIWHtyL99fY/7WXYNSt0Z7a";
        let check = bcrypt.compareSync(this.state.password, hash);

        if(check) {
          
            this.setState({isLoggedIn: true})
    
        }
        
        else {
            window.alert("Wrong password, please try again")
        }

    }


    setPassword(property, val){
        val = val.trim()
        if (val.length > 12){
          return;
        }
        this.setState({
          [property]: val
        })
      }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
    //   let button;
  
      if (isLoggedIn) {

        return(<App />);

        
      } else {
        return(
          <div className='app'>  
            <div className='container'>
                <div className="loginForm">
                Please login 
                <InputField
                type='password'
                placeholder='Password'
                value={this.state.password ? this.state.password : ''}
                onChange={ (val) => this.setPassword('password', val) }
                />

                <SubmitButton
                text='Login'
                disabled={this.state.buttonDisabled}
                onClick={this.handleLoginClick}
                />
                </div>
            </div>
          </div>
            );
      }
  
    }
  }


ReactDOM.render(<LoginControl />, document.getElementById('root'));


serviceWorker.unregister();