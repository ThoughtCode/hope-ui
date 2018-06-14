// Dependencias
import React from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';

// Css
import cls from './CardJobClient.css';

// Component
import CardJobPast from './CardJobPast';

const styles = theme => ({
    paper: {
      padding: theme.spacing.unit * 1,
    },
});

function CardJob(props) {
  const { classes } = props;

  return (
    <div className={cls.root}>
      <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper} elevation={0}><CardJobPast /></Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper} elevation={0}><CardJobPast /></Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper} elevation={0}><CardJobPast /></Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper} elevation={0}><CardJobPast /></Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CardJob.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (CardJob);