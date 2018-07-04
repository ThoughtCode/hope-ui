import React from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import cls from './Review.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
});

function ReviewsAgent(props) {
  const { classes } = props;
  console.log(props.job)
  return (
    <div className={`${cls.Review} ${classes.root}`}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Grid container spacing={24}>
              <Grid item xs={6} sm={2}>
                <Paper className={classes.paper}>Avatar</Paper>
              </Grid>
              <Grid item xs={6} sm={7}>
                <Paper className={classes.paper}>Nombre Apellido</Paper>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper className={classes.paper}>Estrellas</Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>Mensaje</Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(ReviewsAgent);