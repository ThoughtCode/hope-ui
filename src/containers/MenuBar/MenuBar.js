// Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, NavLink } from 'react-router-dom'
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Menu, { MenuItem } from 'material-ui/Menu';

// Component
import './css/MenuBar.css';
import Logo from './img/logo.svg';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
       
          <AppBar topFixed elevation={1}>
            <Toolbar>
              <Typography variant="title" color="secondary" className={classes.flex}>
                <img src={Logo} className="App-logo" alt="logo" />
              </Typography>
              <a href="#Download" activeClassName="selected"><MenuItem onClick={this.handleClose} style={{fontFamily: 'Arial'}}>Descargas</MenuItem></a>
              <MenuItem onClick={this.handleClose} style={{fontFamily: 'Arial'}}>Cómo Funciona</MenuItem>
              <MenuItem onClick={this.handleClose} style={{fontFamily: 'Arial'}}>Testimonios</MenuItem>
              <MenuItem onClick={this.handleClose} style={{fontFamily: 'Arial'}}>Contactos</MenuItem>
            </Toolbar>
          </AppBar>
        
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);