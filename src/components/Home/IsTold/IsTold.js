// Dependencias
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

// Component
import cls from './IsTold.css'

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    backgroundColor: 'transparent',
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container className={cls.IsTold} justify="center">
        <Grid item xs={12} md={8} sm={12}>
          <Grid container align="center"  className={cls.TopSeccion}>
            <Grid item xs={12}>
              <Paper className={classes.paper} elevation={0}>
                <Typography variant="headline" gutterBottom className={cls.Typogra}>Es hora de que alguien lo haga por ti.</Typography>
                <Typography variant="headline" gutterBottom className={cls.Typogra}>"Busca y contrata tu servicio."</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper} elevation={0}>
                <div className={cls.LandingButton}>
                  <Button className={cls.pageButtonActive} component={Link} to="/cliente/registro" >Registrate</Button>
                </div>
              </Paper>
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