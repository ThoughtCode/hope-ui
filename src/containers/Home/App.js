// Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme, withStyles } from 'material-ui/styles';
import grey from 'material-ui/colors/grey';
import blue from 'material-ui/colors/blue';

// Component
import '../../App.css';
import MenuBar from '../../containers/MenuBar/MenuResponsive';
import Main from '../../containers/Home/Main';
import Download from '../../containers/Home/Download2';
import Funtion from '../../containers/Home/Funtion'
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

class App extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };
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
        <div className="App">
          <MenuBar />
          <Main />
          <Download id="Download" />
          <Funtion />
          <Aside />
          <Testimonials />
          <Contact />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles) (App);