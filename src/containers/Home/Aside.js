// Dependencias
import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

// Component
import './Aside.css';

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

class Aside extends Component {
  render() {
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
                <Button style={styleButton}>REGISTRATE AHORA</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default (Aside);