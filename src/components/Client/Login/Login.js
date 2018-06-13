import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import {Grid, Modal,} from 'material-ui';

import LoginAgent from '../../../containers/Agent/Login/Login';
import Registro from '../../../components/Client/Register/Register';
import FacebookLogin from 'react-facebook-login';
import Button from 'material-ui/Button';
import Auth from '../Auth/Auth';
import cls from './Login.css';

import * as actions from '../../../store/actions';

class Login extends Component {
  state = {
    accessToken: null,
    openRegister: false,
    openLogin: false,
    open: false
  }

  onLoginWithFacebook = () => {
    this.props.onLogin(this.state.accessToken);
  }

  responseFacebook = (response) => {
    const { accessToken } = response.accessToken;
    this.setState({
        accessToken,
      },
      this.onLoginWithFacebook,
    );
  }

  handleOpen = (modal) => {
    if (modal === "register") {
      this.setState({ openLogin: false });
      this.setState({ openRegister: true });
    } else if(modal === "login") {
      this.setState({ openRegister: false });
      this.setState({ openLogin: true });
    }
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <div className={cls.Login}>
          <Grid container className={cls.ModalHeader}>
            <Grid item xs={12} sm={12}>
              <Button onClick={this.props.close}>
                <i className="material-icons">clear</i>
              </Button>
            </Grid>
          </Grid>
          <Grid container justify="center" className={cls.LoginContainer}>
            <Grid item xs={12} sm={12}>
            </Grid>
            <Grid item xs={12} sm={12}>
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
            <Grid item xs={12}>
              <Paper elevation={0}>
                <FacebookLogin
                  appId="2057031764572769"
                  autoLoad={false}
                  fields="name,email"
                  callback={this.responseFacebook} />
              </Paper>
            </Grid>
          </Grid>
          <Grid container justify="center" className={cls.LoginContainer}>
            <Grid item xs={12}>
              <Paper elevation={0}>
                <Button onClick={() => this.handleOpen("login")} >Entra como agente</Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={0}>
                <Button onClick={() => this.handleOpen("register")} >¿NO TIENES UNA CUENTA?</Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={0}>
                <Button component={Link} to="/reset" >¿OLVIDÓ SU CONTRASEÑA?</Button>
              </Paper>
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid item xs={12}>
              <Grid container align="center">
                <Grid item xs={12} align="right">
                  <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                  >
                    <div className={`${cls.ModalAgent} ${cls.paper}`}>
                      { this.state.openRegister && 
                        <Registro />
                      }
                      { this.state.openLogin && 
                        <LoginAgent />
                      }
                    </div>
                  </Modal>
                </Grid>
              </Grid>
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
