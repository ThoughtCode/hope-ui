// Dependencias
import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

// Component
import classes from '../../../App.css';
import MenuBar from '../../../containers/MenuBar/MenuBarPolicies';
import MenuResponsive from '../../../containers/MenuBar/MenuResponsive';
import PoliciesContent from './PoliciesContent.js'

import cls from './Policies.css';

const styles = myTheme => ({
  root: myTheme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: myTheme.spacing.unit * 3,
  }),
});

class Policies extends Component {
  render() {
    return (
        <Grid container justify="center" className={cls.Policies}>
          <Grid item xs={12}>
            <Paper elevation={0} className={`${classes.paper} ${classes.MenuBar}`}>
              <MenuBar />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={`${classes.paper} ${classes.MenuNone}`}>
              <MenuResponsive />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={7} className={cls.PoliciesContent}>
            <Paper elevation={0} className={classes.paper}>
                <PoliciesContent />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.paper}>
              <Typography gutterBottom style={{backgroundColor: '#0069a7', color:'#fff', fontFamily: 'Arial', padding: 20}}>Powerare by Thoughtcode</Typography>
            </Paper>
          </Grid>
        </Grid>
    );
  }
}

export default withStyles(styles)(Policies);