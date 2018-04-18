import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import FacebookLogin from 'react-facebook-login';
import Button from 'material-ui/Button';
import Auth from '../Auth/Auth';

import * as actions from '../../../store/actions'

class Login extends Component {
  state = {
    accessToken: null
  }

  responseFacebook = (response) => {
    let accessToken = response.accessToken;
    this.setState(
      {
        accessToken: accessToken
      },
      this.onLoginWithFacebook
    );
  }

  onLoginWithFacebook = () => {
    this.props.onLogin(this.state.accessToken)
  }

  render () {
    return (
      <div>
        <div style={{textAlign: 'center'}}>
          <h1>Login</h1>
          <FacebookLogin
            appId="2057031764572769"
            autoLoad={false}
            fields="name,email"
            callback={this.responseFacebook} />
          <Auth />
          <Button component={Link} to="/cliente/registro" style={{margin: '10px 0'}}>
            Registro
          </Button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (access_token) => dispatch(actions.facebookLogin(access_token))
  };
};

export default connect(null, mapDispatchToProps)(Login);