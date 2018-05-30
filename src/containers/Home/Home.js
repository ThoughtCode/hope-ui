// Dependencias
import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme, withStyles } from 'material-ui/styles';
import grey from 'material-ui/colors/grey';
import blue from 'material-ui/colors/blue';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

// Component
import classes from '../../App.css';
import MenuBar from '../../containers/MenuBar/MenuBar';
import MenuResponsive from '../../containers/MenuBar/MenuResponsive';
import Main from '../../components/Home/Main/Main';
import Guarantees from '../../components/Home/Guarantees/Guarantees';
import IsTold from '../../components/Home/IsTold/IsTold';
import Funtion from '../../components/Home/Funtion/Funtion';
import Services from '../../components/Home/Services/Services';
import Testimonio from '../../components/Home/Testimonio/Testimonio';

import Download from '../../components/Home/Download/Download';
import Contact from '../../components/Home/Contact/Contact';

const styles = myTheme => ({
  root: myTheme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: myTheme.spacing.unit * 3,
  }),
});

class Home extends Component {
  render() {
    const theme = createMuiTheme({
      palette:{
        primary: { 
          light: grey[50],
          main: grey[0],
          dark: grey[700],
          contrastText: '#000',
        },
        secondary: {
          light: blue[50],
          main: blue[400],
          dark: blue[500],
          contrastText: '#000',
        },
        accent: grey,
        error: grey,
      },
      typography: {
        // Tell Material-UI what's the font-size on the html element is.
        fontFamily: 'Fabada',
      },
    });

    return (
      <MuiThemeProvider theme={theme}>
        <Grid container>
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
            <Paper elevation={0} className={classes.paper} id="download">
              <Guarantees />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.paper} id="download">
              <IsTold />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.paper} id="works">
              <Funtion />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.paper} id="Services">
              <Services />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.paper} id="Services">
              <Testimonio />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.paper} id="download">
              <Download />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.paper} id="contact">
              <Contact />
              <Typography gutterBottom style={{backgroundColor: '#0069a7', color:'#fff', fontFamily: 'Arial', padding: 20}}>Powerare by Thoughtcode</Typography>
            </Paper>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(Home);