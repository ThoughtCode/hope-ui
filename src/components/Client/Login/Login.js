import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import FacebookLogin from 'react-facebook-login';
import Button from 'material-ui/Button';
import Auth from '../Auth/Auth';

import * as actions from '../../../store/actions';

class Login extends Component {
  state = {
    accessToken: null,
  }

  onLoginWithFacebook = () => {
    this.props.onLogin(this.state.accessToken);
  }

  responseFacebook = (response) => {
    const { accessToken } = response.accessToken;
    this.setState(
      {
        accessToken,
      },
      this.onLoginWithFacebook,
    );
  }

  render() {
    return (
      <div>
        <div style={{ textAlign: 'center' }}>
          <h1>Login</h1>
          <FacebookLogin
            appId="2057031764572769"
            autoLoad={false}
            fields="name,email"
            callback={this.responseFacebook}
          />
          <Auth />
          <Button component={Link} to="/cliente/registro" style={{ margin: '10px 0' }}>
            Registro
          </Button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onLogin: accessToken => dispatch(actions
    .facebookLogin(accessToken)),
});

export default connect(null, mapDispatchToProps)(Login);
