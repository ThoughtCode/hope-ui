// Dependencias
import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

// Component
import './Main.css';

const style = {
  padding: 90,
  paddingTop: 200,
  color: "#c6c5c5",
  fontSize: '1.5rem',
};

const styleButton = {
  fontFamily: 'Arial',
  backgroundColor: "#0069a7",
  color: "#fff",
  marginTop: 10,
}

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Grid container spacing={24} style={ style } justify='center' className="Main-bg">
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={12} sm={8}>
                <Typography variant="headline" gutterBottom style={{ color: "#0069a7" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
              </Grid>
              <Grid item xs={12} sm={4} align="right">
                <Button color="secondary" style={ styleButton }>REGÍSTRATE</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={8} >
            <Grid container>
              <Grid item xs={12} sm={8}>
                <Typography variant="subheadin" gutterBottom style={{ paddingTop: 40, fontFamily: 'Fabada' }}>
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