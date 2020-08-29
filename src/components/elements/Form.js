import React from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';




class LoginForm extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      buttonDisabled: false
    }
  }


  setInputValue(property, val){
    val = val.trim()
    if (val.length > 12){
      return;
    }
    this.setState({
      [property]: val
    })
  }

  render(){
    return(
      <div className="loginForm">
        Please login 
        <InputField
          type='text'
          placeholder='Password'
          value={this.state.password ? this.state.password : ''}
          onChange={ (val) => this.setInputValue('password', val) }
        />

        <SubmitButton
          text='Login'
          disabled={this.state.buttonDisabled}
        />

      </div>
    );
  }
    
}

export default LoginForm;
