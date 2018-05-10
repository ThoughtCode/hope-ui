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
  color: '#fff',
  padding: 90,
  paddingTop: 180,
};

const img = {
  width: 350,
};

const imgButton = {
  width: 200,
  paddingRight: 10,
};

const styles = theme => ({
  root: {
    padding: theme.spacing.unit,
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.secondary.main,
    },
  },
});

class Download extends Component {
  render() {
    return (
      <div className="Download">
        <Grid container spacing={16} style={stylesBox1} justify='center'>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={12} sm={5}>
                <img src={AppLogo} alt="AppLogo" style={img} xs={6} sm={3} />
              </Grid>                
              <Grid item xs={12} sm={7} style={{padding: 50}}>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography variant="headline" gutterBottom align="left">Download our Download</Typography>
                  </Grid>
                  <Grid item xs={12} style={{ paddingTop: 40, fontFamily: 'Fabada' }}>
                    <Typography variant="subheadin" gutterBottom align="left">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} style={{ paddingTop: 40, fontFamily: 'Fabada' }} align="left">
                    <img src={GooglePlay}  alt="GoolglePlay" style={imgButton} />
                    <img src={AppStore}  alt="App Store" style={imgButton} />
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