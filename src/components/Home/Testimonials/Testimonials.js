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
import Testimonials from '../../../assets/Testimonials.jpg'
import mood from '../../../assets/mood.png'

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
                  <Avatar src={mood} alt="Avatar 1" className={cls.imagetestimonials} />
                  <Typography variant="headline" gutterBottom className={cls.SubTytle}>Maria Castillo</Typography>
                  <Grid item xs={12} className={cls.TestimonioComentario}>
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo tempora adipisci ipsam temporibus sapiente in quidem dolores modi numquam hic odit maiores nemo fugit voluptates."
                  </Grid>
                </Paper>
              </Grid>
            <Grid item xs={12} sm={6} md={4} className={cls.TestimonialsContainer}>
              <Paper className={classes.paper} elevation={0}>
              <Avatar
                src="http://cdn2.salud180.com/sites/default/files/styles/medium/public/field/image/2013/11/hombreguapo.jpg" alt="AppLogo"
                className={cls.imagetestimonials}/>
                <Typography variant="headline" gutterBottom className={cls.SubTytle}>Alberto Gonzalez</Typography>
                <Grid item xs={12} className={cls.TestimonioComentario}>
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo tempora adipisci ipsam temporibus sapiente in quidem dolores modi numquam hic odit maiores nemo fugit voluptates."
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} className={cls.TestimonialsContainer}>
              <Paper className={classes.paper} elevation={0}>
                <Avatar
                  src="http://catesthill.com/wp-content/uploads/2016/01/catesthill-scandi-living-12.jpg" alt="Avatar"
                  className={cls.imagetestimonials}
                />
                <Typography variant="headline" gutterBottom className={cls.SubTytle}>Angela Torre</Typography>
                <Grid item xs={12} className={cls.TestimonioComentario}>
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo tempora adipisci ipsam temporibus sapiente in quidem dolores modi numquam hic odit maiores nemo fugit voluptates."
                </Grid>
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