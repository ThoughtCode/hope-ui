// Dependencias
import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

// Component
import './Testimonials.css';

const stylesBox1 = {
  backgroundColor: '#fff',
  padding: 30,
};

const space = {
  padding: 10,
}

class Testimonials extends Component {
  render() {
    return (
      <div className="Testimonials">
        <Grid container spacing={16} style={stylesBox1} justify='center'>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Typography variant="headline" gutterBottom>Testimonials</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={8} >
            <Grid container>
              <Grid item xs={4}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo tempora adipisci ipsam temporibus sapiente in quidem dolores modi numquam hic odit maiores nemo fugit voluptates nostrum sint, non aspernatur. Blanditiis.
              </Grid>
              <Grid item xs={8}>
                <img src="http://www.icat.org.mx/wp-content/uploads/2012/11/testimonios.jpg" alt="AppLogo" />
              </Grid>
            </Grid>
            <Grid container style={space}>
              <Grid item xs>
                <img src="https://static.wixstatic.com/media/d5f2d1977eb9475b95ee2119f340a3eb.jpg/v1/fill/w_278,h_280,al_c,q_80,usm_0.66_1.00_0.01/d5f2d1977eb9475b95ee2119f340a3eb.webp" alt="AppLogo" />
                <Typography variant="headline" gutterBottom>"Testimonials 1"</Typography>
              </Grid>
              <Grid item xs>
                <img src="https://static.wixstatic.com/media/d5f2d1977eb9475b95ee2119f340a3eb.jpg/v1/fill/w_278,h_280,al_c,q_80,usm_0.66_1.00_0.01/d5f2d1977eb9475b95ee2119f340a3eb.webp" alt="AppLogo" />
                <Typography variant="headline" gutterBottom>"Testimonials 2"</Typography>
              </Grid>
              <Grid item xs>
                <img src="https://static.wixstatic.com/media/d5f2d1977eb9475b95ee2119f340a3eb.jpg/v1/fill/w_278,h_280,al_c,q_80,usm_0.66_1.00_0.01/d5f2d1977eb9475b95ee2119f340a3eb.webp" alt="AppLogo" />
                <Typography variant="headline" gutterBottom>"Testimonials 3"</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default (Testimonials);