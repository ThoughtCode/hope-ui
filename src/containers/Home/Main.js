// Dependencias
import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';

// Component
import './Main.css';
import Registro from '../../components/Client/Register/Register';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 0 + rand();
  const left = 0 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const style = {
  padding: 60,
  paddingTop: 200,
  color: "#c6c5c5",
  fontSize: '1.5rem',
};

const styleButton = {
  fontFamily: 'Arial',
  backgroundColor: "#0069a7",
  color: "#fff",
  marginTop: 10,
  fontSize: '1.4rem',
};

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
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
    return (
      <div className="Main">
        <Grid container spacing={24} style={ style } justify='center' className="Main-bg">
          <Grid item xs={12} md={8} sm={12}>
            <Grid container>
              <Grid item xs={12} sm={8}>
                <Typography variant="headline" gutterBottom style={{ color:'#0069a7', fontSize: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
              </Grid>
              <Grid item xs={12} sm={4} align="right">
                <Button onClick={this.handleOpen} color="secondary" style={ styleButton }>REGÍSTRATE</Button>
                <Modal
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                  open={this.state.open}
                  onClose={this.handleClose}
                >
                  <div style={getModalStyle()}>
                    <Registro />
                    <RegistroWa />
                  </div>
                </Modal>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={8} sm={12}>
            <Grid container>
              <Grid item xs={12} sm={8}>
                <Typography variant="subheading" gutterBottom style={{ color: '#000', paddingTop: 40, fontFamily: 'Fabada' }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const RegistroWa = withStyles(styles)(Main);

export default Main;