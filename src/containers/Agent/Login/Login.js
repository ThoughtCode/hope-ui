import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import Button from 'material-ui/Button';
import Auth from '../../../components/Agent/Auth/Auth';
import cls from './Login.css';
import Logo from '../../../assets/Logo.svg';
import FacebookIcon from '../../../assets/facebookicon.svg';

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
        <div className={cls.Login}>
        <Grid container className={cls.ModalHeader}>
            <Grid item xs={12}>
              <Button onClick={this.props.close}>
                <i className="material-icons">clear</i>
              </Button>
            </Grid>
          </Grid>
          <Grid container justify="center" className={cls.LoginContainer}>
            <Grid item xs={2} sm={12}>
              <Paper className={cls.paper} elevation={0}>
                 <Button className={cls.pageButtonLogin} component={Link} to="/" >
                  <img src={Logo} className={cls.Applogo} alt="logo" />
                 </Button>
              </Paper>
            </Grid>
            <Grid item xs={10} sm={12}>
              <Paper className={cls.paper} elevation={0}>
                <Typography variant="headline" gutterBottom className={cls.Typogra}>ENTRA COMO AGENTE</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={cls.paper} elevation={0}>
                <Auth />
              </Paper>
            </Grid>
            <Grid item xs={12} align="center">
              <Paper elevation={0}>
                <div className={cls.Divider}>
                  <i className="material-icons">circle</i>
                  <i className={`${cls.DividerIcon} ${"material-icons"}`}>radio_button_unchecked</i>
                  <i className="material-icons">circle</i>
                </div>
                <div className={cls.ButtonFacebookContainer}>
                  <FacebookLogin
                    appId="2057031764572769"
                    autoLoad={false}
                    fields="name,email"
                    callback={this.responseFacebook}
                    render={renderProps => (
                      <Button onClick={renderProps.onClick} className={`${cls.ButtonFacebookContainer} ${cls.ButtonFacebookText}`} >
                        <img className={cls.IconFacebook} src={FacebookIcon} alt="IconFacebook" />
                        Inicia Sesión con Facebook
                      </Button>      
                    )}
                  />
                </div>
              </Paper>
            </Grid>
            <Grid container justify="center" className={cls.ContainerOpciones}>
              <Button className={cls.pageButtonLogin} component={Link} to="/agente/registro" >¿NO TIENES UNA CUENTA?</Button>
              <Button className={cls.pageButtonLogin} component={Link} to="/agente/resetear" >¿OLVIDÓ SU CONTRASEÑA?</Button>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onLogin: accessToken => dispatch(actions.facebookLogin(accessToken)),
  onAuth: (email, password) => dispatch(actions.authAgent(email, password)),
});

export default connect(null, mapDispatchToProps)(Login);
