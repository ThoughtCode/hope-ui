// Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme, withStyles } from 'material-ui/styles';
import grey from 'material-ui/colors/grey';
import blue from 'material-ui/colors/blue';
import Typography from 'material-ui/Typography';

// Component
import classes from '../../App.css';
import MenuBar from '../../containers/MenuBar/MenuBar';
import MenuResponsive from '../../containers/MenuBar/MenuResponsive';
import Main from '../../containers/Home/Main';
import Download from '../../containers/Home/Download';
import Funtion from '../../containers/Home/Funtion';
import Aside from '../../containers/Home/Aside'
import Testimonials from '../../containers/Home/Testimonials'
import Contact from '../../containers/Home/Contact'

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
        fontSize: 14,
        fontFamily: 'Fabada',
      },
    });

    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <div className={classes.MenuBar}>
            <MenuBar />
          </div>
          <div className={classes.MenuNone} >
            <MenuResponsive />
          </div>
          <div id="main">
            <Main />
          </div>
          <div id="download">
            <Download />
          </div>
          <div id="works">
            <Funtion />
          </div>
          <div>
            <Aside />
          </div>
          <div id="testimonios">
            <Testimonials />
          </div>
          <div id="contact">
            <Contact />
            <Typography gutterBottom style={{backgroundColor: '#0069a7', color:'#fff', fontFamily: 'Arial', padding: 20}}>Powerare by Thoughtcode</Typography>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(Home);