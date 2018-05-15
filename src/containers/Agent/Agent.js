// DEPENDENCIAS
import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

// COMPONENTES
import AppLogo from '../../assets/Logo.svg';
import From from './Form/Form';
import './Agent.css'

const style = {
  paddingTop: 50,
};

class Agent extends Component {
  render () {
    return (
      <div className="Agent">
        <img src={AppLogo} className="App-logo" alt="logo" />
        <Grid container className="Agent" spacing={24} justify='center' style={ style }>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={12} sm={8}>
                <Typography variant="headline" gutterBottom style={{ color: "#0069a7", fontFamily: "Fabada", fontSize: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <From />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Agent;