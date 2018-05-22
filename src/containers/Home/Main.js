// Dependencias
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';

// Component
import cls from './Main.css';
import Registro from '../../components/Client/Register/Register';

const styles = theme => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
  },
});

class Main extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
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
            <Grid container>
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
                    <Registro />
                  </div>
                </Modal>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={8} sm={12}>
            <Grid container>
              <Grid item xs={12} sm={12}>
                <Typography variant="subheading" gutterBottom className={cls.SubTypogra}>
                  Es hora que alguien lo haga por ti, descarga la aplicación y reserva fácilmente tu servicio en el lugar que lo desees. Olvídate del efectivo, paga de forma segura con tu tarjeta a través de la aplicación.
                </Typography>
              </Grid>
              <div className={cls.LandingButton}>
                <Button className={cls.pageButton} component={Link} to="/registro" >REGISTRATE</Button>
                <Button className={cls.pageButton} component={Link} to="/login" >INICIAR SESION</Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const RegistroWa = withStyles(styles)(Main);

export default RegistroWa;