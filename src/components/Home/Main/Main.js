// Dependencias
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { Grid, Paper} from 'material-ui';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';

// Component
import cls from './Main.css';
import Registro from '../../../components/Client/Register/Register';
import Login from '../../../components/Client/Login/Login';
import LoginAgent from '../../../containers/Agent/Login/Login';

const styles = theme => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
  },
});

class Main extends Component {
  state = {
    openRegister: false,
    openLogin: false,
    openAgentLogin: false,
  };

  handleOpen = (modal) => {
    if (localStorage.getItem('signInAs') === 'customer') {
      this.props.history.push('/cliente')
    }
    if (localStorage.getItem('signInAs') === 'agent') {
      this.props.history.push('/agente')
    }
    if (modal === "register") {
      this.setState({
        openLogin: false,
        openAgentLogin: false,
        openRegister: true,
      });
    } else if (modal === "login") {
      this.setState({
        openLogin: true,
        openAgentLogin: false,
        openRegister: false,
      });
    } else if (modal === "loginAgent") {
      this.setState({
        openLogin: false,
        openAgentLogin: true,
        openRegister: false,
      });
    }
  };

  handleClose = () => {
    this.setState({
      openLogin: false,
      openAgentLogin: false,
      openRegister: false,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={cls.Main}>
        <Grid container justify="center" className={cls.style}>
          <Grid item xs={12} md={8} sm={12}>
            <Grid container align="center">
              <Grid item xs={12} sm={12}>
                <Typography variant="headline" gutterBottom className={cls.Typogra}>
                  Regístrate y agenda los servicios que Noc Noc tiene para ti.
                </Typography>
              </Grid>
              <Grid item xs={6} sm={12} align="right">
                <Paper className={classes.paper}>
                  <Modal
                    open={this.state.openRegister}
                    onClose={this.handleClose}
                  >
                    <div className={`${cls.Modal} ${classes.paper}`}>
                      <Registro close={this.handleClose} />
                    </div>
                  </Modal>
                </Paper>
                <Modal
                  open={this.state.openLogin}
                  onClose={this.handleClose}
                >
                  <div className={`${cls.Modal} ${classes.paper}`}>
                    <Login className={cls.Modal} close={this.handleClose} switchModal={this.handleOpen}/>
                  </div>
                </Modal>
                <Modal
                  open={this.state.openAgentLogin}
                  onClose={this.handleClose}
                >
                  <div className={`${cls.Modal} ${classes.paper}`}>
                    <LoginAgent className={cls.Modal} close={this.handleClose} />
                  </div>
                </Modal>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={8} sm={12}>
            <Grid container align="center">
              <div className={cls.LandingButton}>
                <Grid container>
                  <Grid item xs={12} sm={12}>
                    <Button className={cls.pageButtonActive} onClick={() => this.handleOpen("register")}>Regístrate</Button>
                    <Button className={cls.pageButton} onClick={() => this.handleOpen("login")} >Iniciar Sesión</Button>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(Main));
