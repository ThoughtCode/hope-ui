// Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';

// Component
import './Aside.css';
import Registro from '../../components/Client/Register/Register';

const stylesBox1 = {
  backgroundColor: '#0069a7',
  color: '#eee',
  padding: 45,
  justifyContent: 'center',
};

const styleButton = {
  fontFamily: 'Fabada',
  backgroundColor: '#eee',
  color: '#0069a7',
  textAlign: 'center',
}

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

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
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
      <div className="Aside">
        <Grid container spacing={16} style={stylesBox1} direction={'column'} justify={'center'} align={'center'}>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={12} sm={12}>
                <Typography variant="headline" gutterBottom style={{color: "#fff"}}>Lorem ipsum dolor sit ament, consectetur adipisicing elit.</Typography>
              </Grid>
              <Grid item xs={12} sm={12} style={{paddingTop: 30}}>
                Lorem ipsum dolor sit ament, consectetur adipisicing elit.
              </Grid>
              <Grid item xs={12} sm={12} style={{paddingTop: 30}}>
                <Button style={styleButton} onClick={this.handleOpen}>REGISTRATE AHORA</Button>
                <Modal
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                  open={this.state.open}
                  onClose={this.handleClose}
                >
                  <div style={getModalStyle()}>
                    <Registro />
                  </div>
                </Modal>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Aside.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (Aside);