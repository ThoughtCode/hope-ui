// Dependencias
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Modal from 'material-ui/Modal';
import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import {
  Grid,
  Paper,
  Button,
  Typography,
  } from 'material-ui';

// Component
import cls from './Services.css';
import Service1 from '../../../assets/Service1.jpeg';
import Registro from '../../../components/Client/Register/Register';

const styles = theme => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
  },
});

class FullWidthGrid extends Component {
  state = {
    openRegister: false,
    openLogin: false,
    openAgentLogin: false,
  };
  handleOpen = (modal) => {
    console.log(modal, 'estoy aqui')
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
  render(){
    const { classes } = this.props;
    return (
      <div className={cls.root}>
        <Grid container justify="center" className={cls.contenTitle}>
          <Grid item xs={12}>
            <Paper className={cls.Paper} elevation={0}>
              <h1 variant="headline" gutterBottom className={cls.Typogra}>Servicios</h1>
            </Paper>
          </Grid>
        </Grid>
        <Grid container className={cls.Services} justify="center">
          <Grid item xs={12} sm={6}>
            <Paper className={cls.ContentServices} align="center" elevation={0}>
              <img className={cls.ImageResponsive} src={Service1} alt="pinture" />
              <div className={cls.footerServicios}>
                <Typography variant="headline" gutterBottom className={cls.SubTytle} >Limpieza de hogar</Typography>
                <Button className={cls.pageButtonActive} onClick={() => this.handleOpen("register")}>Contrátalo</Button>
              </div>
            </Paper>
          </Grid>
        </Grid>
        <Modal
          open={this.state.openRegister}
          onClose={this.handleClose}
        >
          <div className={`${cls.Modal} ${classes.paper}`}>
            <Registro close={this.handleClose} />
          </div>
        </Modal>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(FullWidthGrid));
