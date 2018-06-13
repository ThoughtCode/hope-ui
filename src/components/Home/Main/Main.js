// Dependencias
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';

// Component
import cls from './Main.css';
import Registro from '../../../components/Client/Register/Register';
import Login from '../../../components/Client/Login/Login';

const styles = theme => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
  },
});

class Main extends Component {
  state = {
    openRegister: false,
    openLogin: false,
    open: false
  };

  handleOpen = (modal) => {
    if (localStorage.getItem('signInAs') === 'customer') {
      this.props.history.push('/cliente')
    }
    if (localStorage.getItem('signInAs') === 'agent') {
      this.props.history.push('/agente')
    }
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
    const { classes } = this.props;
    return (
      <div className={cls.Main}>
        <Grid container justify="center" className={cls.style}>
          <Grid item xs={12} md={8} sm={12}>
            <Grid container align="center">
              <Grid item xs={12} sm={12}>
                <Typography variant="headline" gutterBottom className={cls.Typogra}>
                  Registrate y agenda los servicios que te ofrece Noc Noc.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4} align="right">
                <Modal
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                  open={this.state.open}
                  onClose={this.handleClose}
                >
                  <div className={`${cls.Modal} ${classes.paper}`}>
                    { this.state.openRegister && 
                      <Registro close={this.handleClose} />
                    }
                    { this.state.openLogin && 
                      <Login close={this.handleClose} />
                    }
                  </div>
                </Modal>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={8} sm={12}>
            <Grid container align="center">
              <Grid item xs={12} sm={12}>
                <Typography variant="subheading" gutterBottom className={cls.SubTypogra}>
                  Es hora que alguien lo haga por ti, descarga la aplicación y reserva fácilmente tu servicio en el lugar que lo desees. Olvídate del efectivo, paga de forma segura con tu tarjeta a través de la aplicación.
                </Typography>
              </Grid>
              <div className={cls.LandingButton}>
                <Grid container>
                  <Grid item xs={12} sm={12}>
                    <Button className={cls.pageButtonActive} onClick={() => this.handleOpen("register")}>Registrate</Button>
                    <Button className={cls.pageButton} onClick={() => this.handleOpen("login")} >Iniciar Sesion</Button>
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
