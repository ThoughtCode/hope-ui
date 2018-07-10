// Dependencias
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {Paper, Button} from 'material-ui';
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
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={0}>
            <Typography variant="headline" gutterBottom className={cls.Typogra}>Servicios</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={`${cls.ContentServices} ${classes.paper}`} align="center" elevation={0}>
            <img className={cls.ImageResponsive} src={Service1} alt="pinture" />
            <div className={cls.footerServicios}>
              <Typography variant="headline" gutterBottom className={cls.SubTytle} >Limpieza de hogar</Typography>
              <Button className={cls.pageButtonActive} >Contrátalo</Button>
            </div>
          </Paper>
        </Grid>
      </Grid>


      <Grid container className={cls.Services} justify="center">
        <Grid item xs={12} sm={8}>
          <Grid container>
            <Grid item xs={12}>
              <Paper className={classes.paper} elevation={0}>
              </Paper>
            </Grid>
            
            <Grid container justify="center">
              <Grid item xs={12} sm={6} md={8} className={cls.TestimonialsContainer}>
                <Paper className={classes.paper} elevation={0}>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper} elevation={0}>
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