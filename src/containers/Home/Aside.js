// Dependencias
import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

// Component
import './Aside.css';

const stylesBox1 = {
  backgroundColor: '#0069a7',
  color: '#fff',
  padding: 30,
  justifyContent: 'center',
};

const styleButton = {
  backgroundColor: '#eee',
  color: '#0069a7',
  fontFamily: 'Arial',
  textAlign: 'center',
}

class Aside extends Component {
  render() {
    return (
      <div className="Aside">
        <Grid container spacing={16} style={stylesBox1}>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Typography variant="headline" gutterBottom>Lorem ipsum dolor sit ament, consectetur adipisicing elit.</Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                Lorem ipsum dolor sit ament, consectetur adipisicing elit.
              </Grid>
              <Button style={styleButton}>ENVIAR</Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default (Aside);