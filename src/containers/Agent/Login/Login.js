import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import FacebookLogin from 'react-facebook-login';
import Button from 'material-ui/Button';
import Auth from '../../../components/Agent/Auth/Auth';
import cls from './css/Login.css';
import Logo from '../../../assets/Logo.svg'

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
          <Grid container className={cls.ButtonClose}>
            <Grid item xs={12} sm={12}>
              <Paper className={cls.paper} elevation={0}>
                <Button component={Link} to="/">
                  <i className="material-icons">clear</i>
                </Button>
              </Paper>
            </Grid>
          </Grid>
          <Grid container justify="center" className={cls.LoginContainer}>
            <Grid item xs={12} sm={12}>
              <Paper className={cls.paper} elevation={0}>
                 <Button className={cls.pageButtonLogin} component={Link} to="/" >
                  <img src={Logo} className={cls.Applogo} alt="logo" />
                 </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Paper className={cls.paper} elevation={0}>
                <Typography variant="headline" gutterBottom className={cls.Typogra}>AGENTE</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={cls.paper} elevation={0}>
                <Auth />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={cls.paper} elevation={0}>
                <Button className={cls.pageButtonFacebook}>
                  <FacebookLogin appId="2057031764572769" autoLoad={false} fields="name,email" callback={this.responseFacebook} />
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={cls.paper} elevation={0}>
                <Button className={cls.pageButtonLogin} component={Link} to="/login" >Entra como cliente</Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Paper className={cls.paper} elevation={0}>
                <Button className={cls.pageButtonLogin} component={Link} to="/agente/registre" >¿NO TIENES UNA CUENTA?</Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Paper className={cls.paper} elevation={0}>
                <Button className={cls.pageButtonLogin} component={Link} to="/agente/reset" >¿OLVIDÓ SU CONTRASEÑA?</Button>
              </Paper>
            </Grid>
          </Grid>
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
