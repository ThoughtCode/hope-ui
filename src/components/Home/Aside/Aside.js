// Dependencias
import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';

// Component
import cls from './Aside.css';
import Registro from '../../../components/Client/Register/Register';

const styles = theme => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
  },
});

class Aside extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <Grid container className={cls.IsTold} justify="center">
        <Grid item xs={12} md={8} sm={12}>
          <Grid container align="center"  className={cls.TopSeccion}>
            <Grid item xs={12}>
              <Paper className={classes.paper} elevation={0}>
                <Typography variant="headline" gutterBottom className={cls.Typogra}>Es hora de que alguien lo haga por ti.</Typography>
                <Typography variant="headline" gutterBottom className={cls.Typogra}>"Busca y contrata tu servicio."</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper} elevation={0}>
                <div className={cls.LandingButton}>
                  <Button className={cls.pageButtonActive} onClick={this.handleOpen} >Registrate</Button>
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
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
    );
  }
}

export default withStyles(styles)(Aside);