// DEPENDENCIAS
import React, { Component } from 'react';
import Grid from 'material-ui/Grid';

// COMPONENTES
import MenuBar from '../../containers/MenuBar/MenuBarClientRes';
import './Client.css';

const style = {
  paddingTop: 50,
};

class Agent extends Component {
  render() {
    return (
      <div className="Agent">
        <MenuBar />
        <Grid container className="Agent" spacing={24} justify='center' style={ style }>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={12} sm={8}>
                Hola
              </Grid>
              <Grid item xs={12} sm={4}>
                Hola Mundo
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Agent;
