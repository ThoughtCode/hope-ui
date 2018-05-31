// Dependencias
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

// Component
import cls from './Services.css'
import Service1 from '../../../assets/Service1.jpeg'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    backgroundColor: '#fafafa',
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container className={cls.Services} justify="center">
        <Grid item xs={12} md={10} sm={12}>
          <Grid container>
            <Grid item xs={12}>
              <Paper className={classes.paper} elevation={0}>
                <Typography variant="headline" gutterBottom className={cls.Typogra}>Servicios</Typography>
              </Paper>
            </Grid>
            
            <Grid container justify="center">
              <Grid item xs={12} sm={6} md={8} className={cls.TestimonialsContainer}>
                <Paper className={classes.paper} elevation={0}>
                  <Typography variant="headline" gutterBottom className={cls.SubTytle}>Limpieza de hogar</Typography>
                  <img className={cls.ImageResponsive} src={Service1} alt="pinture" />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={4} className={cls.TestimonialsContainer}>
                <Paper className={classes.paper} elevation={0}>
                  <Typography variant="headline" gutterBottom className={cls.SubTytle}>Montaje de muebles</Typography>
                  <img className={cls.imageServices} src="//cache.hbfiles.com/assets/home/services_assembly-094e26b64894275b61949dab65d23781.jpeg" alt="pinture" />
                </Paper>
              </Grid>



              <Grid item xs={12} sm={6} md={4} className={cls.TestimonialsContainer}>
                <Paper className={classes.paper} elevation={0}>
                  <Typography variant="headline" gutterBottom className={cls.SubTytle}>Montaje de TV</Typography>
                  <img className={cls.imageServices} src="//cache.hbfiles.com/assets/home/services_tv_mounting-7404458fa9fea08dfb6b7623f89f2acd.jpeg" alt="pinture" />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={4} className={cls.TestimonialsContainer}>
                <Paper className={classes.paper} elevation={0}>
                  <Typography variant="headline" gutterBottom className={cls.SubTytle}>Pintura interior</Typography>
                  <img className={cls.imageServices} src="//cache.hbfiles.com/assets/home/services_painting-ffad5433ee803637b4a6759cd53eaff7.jpeg" alt="pinture" />
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={4} className={cls.TestimonialsContainer}>
                <Paper className={classes.paper} elevation={0}>
                  <Typography variant="headline" gutterBottom className={cls.SubTytle}>Colgantes y estantes colgantes</Typography>
                  <img className={cls.imageServices} src="//cache.hbfiles.com/assets/home/services_pictures-2b66751444ce3462a0303379a6754c3c.jpeg" alt="pinture" />
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