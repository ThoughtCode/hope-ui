// Dependencias
import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
// Component
import classes from '../../../index.css';
import MenuBar from '../../../containers/MenuBar/MenuBarPolicies';
import MenuResponsive from '../../../containers/MenuBar/MenuResponsive';
import PoliciesContent from './PoliciesContent.js';
import Footer from '../Footer/Footer';

class Policies extends Component {
  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={12} className={classes.MenuBar}>
          <MenuBar />
        </Grid>
        <Grid item xs={12} className={classes.MenuNone}>
          <MenuResponsive />
        </Grid>
        <Grid item xs={12} sm={7} className={classes.PoliciesContent}>
          <PoliciesContent />
        </Grid>
        <Footer/>
      </Grid>
    );
  }
}

export default Policies;