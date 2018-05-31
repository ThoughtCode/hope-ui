// Dependencias
import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Modal from 'material-ui/Modal';

// Component
import cls from './IsTold.css'
import Registro from '../../Client/Register/Register'

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    backgroundColor: 'transparent',
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
                  <Registro />
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