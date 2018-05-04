// Dependencias
import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import IconUno from '../Img/IconUno.png'
import Congratulation from '../Img/Congratulation.png'
import One from '../Img/One.png'
import Two from '../Img/Two.png'
import Three from '../Img/Three.png'

// Component
import './Funtion.css';

const stylesBox1 = {
  height: '50px',
  width: '50px',
  backgroundColor: 'red',
};

class Funtion extends Component {
  render() {
    return (
      <div className="Funtion">
        <Grid container spacing={16} style={{ padding: 30 }} justify='center'>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Typography variant="headline" gutterBottom>How it Works.</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} >
            <Grid container>

              <Grid xs={12} sm={12}>
                <Grid container style={{padding:30}}>
                  <Grid xs={12} sm={2}>
                    <Grid container>
                      <img src={IconUno} alt="AppLogo" />
                    </Grid>
                  </Grid>
                  <Grid xs={12} sm={10}>
                    <Grid container>
                      <img src={One} alt="AppLogo" />
                    </Grid>
                    <Grid container>
                      <Grid xs={12} sm={11}>
                        <Typography variant="headline" gutterBottom>Lorem ipsum dolor.</Typography>
                      </Grid>
                      <Typography variant="subheadin" gutterBottom align="right">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid xs={12} sm={12}>
                <Grid container style={{padding:30}} direction={'column'} justify={'end'} align={'end'}>
                  <Grid xs={12} sm={10}>
                    <Grid container>
                      <Grid xs={12} sm={10}>
                        <img src={Two} alt="AppLogo" />
                      </Grid>
                      <Grid xs={12} sm={10}>
                        <Typography variant="headline" gutterBottom>Lorem ipsum dolor.</Typography>
                        <Typography variant="subheadin" gutterBottom align="right">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </Typography>
                      </Grid>
                      <Grid xs={12} sm={2}>
                        <img src={IconUno} alt="AppLogo" />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              
              <Grid xs={12} sm={11}>
                <Grid container direction={'column'} justify={'end'} align={'end'}>
                  <Grid xs={12} sm={11}>
                    <img src={Two} alt="AppLogo" />
                  </Grid>
                  <Grid xs={12} sm={11}>
                    <Typography variant="headline" gutterBottom>Lorem ipsum dolor.</Typography>
                  </Grid>
                  <Grid xs={12} sm={11}>
                    <Typography variant="subheadin" gutterBottom align="right">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid xs={12} sm={12}>
                <Grid container style={{padding:30}}>
                  <Grid xs={12} sm={2}>
                    <Grid container>
                      <img src={IconUno} alt="AppLogo" />
                    </Grid>
                  </Grid>
                  <Grid xs={12} sm={10}>
                    <Grid container>
                      <img src={Three} alt="AppLogo" />
                    </Grid>
                    <Grid container>
                      <Grid xs={12} sm={11}>
                        <Typography variant="headline" gutterBottom>Lorem ipsum dolor.</Typography>
                      </Grid>
                      <Typography variant="subheadin" gutterBottom align="right">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              
              <Grid xs={12} sm={11}>
                <Grid container direction={'column'} justify={'end'} align={'end'}>
                  <Grid xs={12} sm={11}>
                    <Typography variant="headline" gutterBottom>CONGRATULATION.</Typography>
                  </Grid>
                  <Grid xs={12} sm={11}>
                    <Typography variant="subheadin" gutterBottom align="right">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid xs={12} sm={1}>
                <Grid container>
                  <img src={Congratulation} alt="AppLogo" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default (Funtion);