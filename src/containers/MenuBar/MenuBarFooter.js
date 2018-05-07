import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
// import MenuLogo from '@material-ui/icons/Menu';
import Logo from './img/logo.svg';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu, { MenuItem } from 'material-ui/Menu';
import './css/MenuBar.css'

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
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
       
          <AppBar elevation={1}>
            <Toolbar>
              <Typography variant="title" color="secondary" className={classes.flex}>
                <img src={Logo} className="App-logo" alt="logo" />
              </Typography>
              <MenuItem onClick={this.handleClose} style={{fontFamily: 'Arial'}}>Descargas</MenuItem>
              <MenuItem onClick={this.handleClose} style={{fontFamily: 'Arial'}}>Cómo Funciona</MenuItem>
              <MenuItem onClick={this.handleClose} style={{fontFamily: 'Arial'}}>Testimonios</MenuItem>
              <MenuItem onClick={this.handleClose} style={{fontFamily: 'Arial'}}>Contactos</MenuItem>
              {auth && (
                <div>
                    <div className="App-name"></div>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.handleClose}
                  >
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>Log Out</MenuItem>
                  </Menu>
                </div>
              )}
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