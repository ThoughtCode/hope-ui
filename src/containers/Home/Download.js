// Dependencias
import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import AppLogo from '../Img/AppLogo.png';
import AppStore from '../Img/AppStore.png';
import GooglePlay from '../Img/GooglePlay.png';

// Component
import './Download.css';

const stylesBox1 = {
  backgroundColor: '#0069a7',
  color: '#fff',
  padding: 30,
};

class Download extends Component {
  render() {
    return (
      <div className="Download">
        <Grid container spacing={16} style={stylesBox1} justify='center'>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <img src={AppLogo} alt="AppLogo" />
              </Grid>                
              <Grid item xs={12} sm={6}>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography variant="headline" gutterBottom align="right">Download our Download</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subheadin" gutterBottom align="right">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} align="right">
                    <img src={GooglePlay}  alt="GoolglePlay" />
                    <img src={AppStore}  alt="App Store" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={8}>
            <Grid container>
            </Grid>
          </Grid>
          <Grid item xs={8} >
            <Grid container>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default (Download);