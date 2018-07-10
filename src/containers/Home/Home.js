// Dependencias
import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

// Component
import classes from '../../App.css';
import MenuBar from '../../containers/MenuBar/MenuBar';
import MenuResponsive from '../../containers/MenuBar/MenuResponsive';
import Main from '../../components/Home/Main/Main';
import Guarantees from '../../components/Home/Guarantees/Guarantees';
import Funtion from '../../components/Home/Funtion/Funtion';
import Services from '../../components/Home/Services/Services';
import Testimonio from '../../components/Home/Testimonio/Testimonio';

import Download from '../../components/Home/Download/Download';
import Contact from '../../components/Home/Contact/Contact';
import cls from './Home.css';

const styles = myTheme => ({
  root: myTheme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: myTheme.spacing.unit * 3,
  }),
});

class Home extends Component {
  render() {
    return (
        <Grid container justify="center">
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
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.paper} id="main">
              <Main />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.paper} id="##">
              <Guarantees />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.paper} id="works">
              <Funtion />
            </Paper>
          </Grid>
          <Grid item xs={12} id="Services" className={cls.Services}>
            <Paper elevation={0} className={classes.paper}>
              <Services />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.paper} id="Services">
              <Testimonio />
            </Paper>
          </Grid>
          <Grid item xs={12} md={8} id="Download" className={cls.Download}>
            <Paper elevation={0} className={classes.paper}>
              <Download />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.paper} id="contact">
              <Contact />
              <Typography gutterBottom style={{backgroundColor: '#0069a7', color:'#fff', fontFamily: 'Arial', padding: 20}}>
                <a component="a" href="http://thoughtcode.co/" style={{textDecoration: 'none', color: 'white' }}>Diseñado por Thoughtcode</a>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
    );
  }
}

export default withStyles(styles)(Home);