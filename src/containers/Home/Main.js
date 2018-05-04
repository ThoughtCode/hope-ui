// Dependencias
import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

// Component
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Grid container spacing={16} style={{ padding: 30 }} justify='center' className="Main-bg">
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Typography variant="headline" gutterBottom>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
              </Grid>
              <Grid item xs={12} sm={6} align="right">
                <Button color="secondary">REGÍSTRATE</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={8} >
            <Grid container>
              <Grid item xs={12} sm={8}>
                <Typography variant="subheadin" gutterBottom>
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

export default Main;