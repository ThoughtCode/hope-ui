// Dependencias
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';

// Component
import cls from './Testimonials.css'
import Testimonials from '../../assets/Testimonials.jpg'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container className={cls.styleTestimonials} justify="center">
        <Grid item xs={12} md={8} sm={12}>
          <Grid container>
            <Grid item xs={12}>
              <Paper className={classes.paper} elevation={0}>
                <Typography variant="headline" gutterBottom className={cls.Typogra}>Testimonios</Typography>
              </Paper>
            </Grid>
           
            <Grid item xs={12} sm={12} md={4}>
              <Paper className={classes.paper} elevation={0}>
                <Grid container>
                  <Grid item xs={2} md={12}>
                    <i className="material-icons" >home</i>
                  </Grid>
                  <Grid item xs={10} md={12}>
                    <Typography variant="headline" gutterBottom className={cls.SubTypogra}>Lorem ipsum dolor.</Typography>
                  </Grid>
                  <Grid item xs={12} className={cls.SubSubTypogra}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo tempora adipisci ipsam temporibus sapiente in quidem dolores modi numquam hic odit maiores nemo fugit voluptates.
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <Paper className={classes.paper} elevation={0}>
                <Grid container>
                  <Grid item>
                    <img className={cls.imagetestimonialsMain} src={Testimonials} alt="AppLogo" />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            
            <Grid container justify="center">
              <Grid item xs={12} sm={6} md={4} className={cls.TestimonialsContainer}>
                <Paper className={classes.paper} elevation={0}>
                  <Avatar alt="Adelle Charles"
                  src="https://static.wixstatic.com/media/d5f2d1977eb9475b95ee2119f340a3eb.jpg/v1/fill/w_278,h_280,al_c,q_80,usm_0.66_1.00_0.01/d5f2d1977eb9475b95ee2119f340a3eb.webp" alt="AppLogo"
                  className={cls.imagetestimonials}/>
                  <Typography variant="headline" gutterBottom className={cls.SubTytle}>"Testimonials 1"</Typography>
                </Paper>
              </Grid>
            <Grid item xs={12} sm={6} md={4} className={cls.TestimonialsContainer}>
              <Paper className={classes.paper} elevation={0}>
              <Avatar alt="Adelle Charles"
                src="https://static.wixstatic.com/media/d5f2d1977eb9475b95ee2119f340a3eb.jpg/v1/fill/w_278,h_280,al_c,q_80,usm_0.66_1.00_0.01/d5f2d1977eb9475b95ee2119f340a3eb.webp" alt="AppLogo"
                className={cls.imagetestimonials}/>
                <Typography variant="headline" gutterBottom className={cls.SubTytle}>"Testimonials 1"</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} className={cls.TestimonialsContainer}>
              <Paper className={classes.paper} elevation={0}>
      <Avatar
        alt="Adelle Charles"
        src="https://static.wixstatic.com/media/d5f2d1977eb9475b95ee2119f340a3eb.jpg/v1/fill/w_278,h_280,al_c,q_80,usm_0.66_1.00_0.01/d5f2d1977eb9475b95ee2119f340a3eb.webp" alt="AppLogo"
        className={cls.imagetestimonials}
      />

                <Typography variant="headline" gutterBottom className={cls.SubTytle}>"Testimonials 1"</Typography>
              </Paper>
            </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);