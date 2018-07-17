import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import { Grid } from 'material-ui';

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import Button from 'material-ui/Button';
import Auth from '../Auth/Auth';
import cls from './Login.css';
import FacebookIcon from '../../../assets/facebookicon.svg';

import * as actions from '../../../store/actions';

class Login extends Component {
  state = {
    accessToken: null,
  }

  responseFacebook = (response) => {
    console.log(response);
    this.props.onLogin(response.accessToken);
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
            <Grid item xs={12}>
              <Paper elevation={0}>
                <Typography variant="headline" gutterBottom className={cls.Title}>Entra a la plataforma de tus sueños en servicios</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={0}>
                <Typography variant="headline" gutterBottom className={cls.Typogra}>Es hora de que alguien lo haga por ti.</Typography>
                <Typography variant="headline" gutterBottom className={cls.Typogra}>"Busca y contrata tu servicio."</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={0}>
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
                    autoLoad={true}
                    fields="name,email,picture"
                    scope="public_profile"
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
          </Grid>
          <Grid container justify="center" className={cls.ContainerOpciones}>
            <Button className={cls.PageButtonRegister} onClick={() => this.props.switchModal("loginAgent")} >Entra como agente</Button>
            <Button className={cls.PageButtonRegister} component={Link} to="/reset" >¿OLVIDÓ SU CONTRASEÑA?</Button>
          </Grid>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onLogin: accessToken => dispatch(actions.facebookLogin(accessToken)),
});

export default connect(null, mapDispatchToProps)(Login);