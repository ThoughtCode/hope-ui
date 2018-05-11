import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu, { MenuItem } from 'material-ui/Menu';
// import MenuLogo from '@material-ui/icons/Menu';
import Logo from './img/logo.svg';
// import AccountCircle from '@material-ui/icons/AccountCircle';
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
  AppBar: {
    color: 'rgba(255, 255, 255, 0.54)',
    textColor: '#000000',
    height: 50,
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
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
       
          <AppBar topFixed elevation={1}>
            <Toolbar>
              <Typography variant="title" color="secondary" className={classes.flex}>
                <img src={Logo} className="App-logo" alt="logo" />
              </Typography>
              <MenuItem onClick={this.handleClose} style={{fontFamily: 'Arial'}}>Opcion 1</MenuItem>
              <MenuItem onClick={this.handleClose} style={{fontFamily: 'Arial'}}>Opcion 2</MenuItem>
              <MenuItem onClick={this.handleClose} style={{fontFamily: 'Arial'}}>Opcion 3</MenuItem>
              <MenuItem onClick={this.handleClose} style={{fontFamily: 'Arial'}}>Opcion 4</MenuItem>
              <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                <AccountCircle />
              </IconButton>
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
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
                  <MenuItem onClick={this.handleClose}>Name</MenuItem>
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