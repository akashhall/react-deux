import React, { Component } from 'react';
import { Redirect } from 'react-router'
import Input from './../../atoms/inputBox';
import Button from './../../atoms/button';
import Modal from './../../atoms/modal';
import './login-page.css';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userPassword: '',
      loginSuccess: '',
      show: false,
    }
  }

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  checkUserLogin = (e) => {
    if (this.state.userName === 'shaadi' && this.state.userPassword === '123') {
      this.setState({ loginSuccess: true });
    }
    else {
      this.setState({ show : true });
    }
  }
  showModal = () => {
    this.setState({ show: true });
  };

hideModal = () => {
    this.setState({ show: false });
};

  render() {
    if (this.state.loginSuccess) {
       this.props.history.push({
        pathname: '/slides',
        state: { loginToken: true }
      })
    }
    return (
      <div className="main-div">
      <div className="login-page">
        <Input className="input-class" placeholder="username" value={this.state.userName} onChange={this.onInputChange} name="userName" /> <br />
        <Input className="input-class" placeholder="password" value={this.state.userPassword} onChange={this.onInputChange} name="userPassword" /> <br />
        <Button className="login-button" value="Login" onClick={this.checkUserLogin} />
        <Modal show={this.state.show} handleClose={this.hideModal} customClassName="error-message"><span> User Credentials are Wrong Try Again</span></Modal>
      </div>
      </div>
    );
  }
}

export default LoginPage;
