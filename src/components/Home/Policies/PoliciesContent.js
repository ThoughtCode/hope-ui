import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import cls from './Policies.css'

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

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={12} sm={10}>
          <Paper className={`${cls.Title} ${classes.paper}`} elevation={0}>
            <Typography variant="display1" gutterBottom>Politicas de Calidad</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Paper className={`${cls.Content} ${classes.paper}`} elevation={0}>
            <Typography variant="headline" gutterBottom>Subheading</Typography>
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium obcaecati iste ut? Quas maxime harum, esse id labore odit possimus sed saepe illum at repellat atque minus facere. Quo, repellendus.
            </Typography>
            <Typography variant="headline" gutterBottom className={cls.SubContent}>Subheading</Typography>
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium obcaecati iste ut? Quas maxime harum, esse id labore odit possimus sed saepe illum at repellat atque minus facere. Quo, repellendus.
            </Typography>
            <Typography variant="headline" gutterBottom className={cls.SubContent}>Subheading</Typography>
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium obcaecati iste ut? Quas maxime harum, esse id labore odit possimus sed saepe illum at repellat atque minus facere. Quo, repellendus.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);