// Dependencias
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu, { MenuItem } from 'material-ui/Menu';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// Component
import Logo from './img/logo.svg';

// CSS
import cls from './MenuResponsive.css'

const styleAnchor = {
  textDecoration: 'none',
  color: 'rgba(0, 0, 0, 0.87)'
};

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
        <AppBar style={{backgroundColor: 'transparent'}} elevation={0}>
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              <AnchorLink style={ styleAnchor } href='#main'>
                <img src={Logo} className={cls.Applogo} alt="logo" />
              </AnchorLink>
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <MenuIcon />
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
                  <MenuItem onClick={this.handleClose} style={{fontFamily: 'Arial'}}>
                    <AnchorLink style={ styleAnchor } href='#download'>Descargas</AnchorLink>
                  </MenuItem>
                  <MenuItem onClick={this.handleClose} style={{fontFamily: 'Arial'}}>
                    <AnchorLink style={ styleAnchor } href='#works'>Cómo Funciona</AnchorLink>
                  </MenuItem>
                  <MenuItem onClick={this.handleClose} style={{fontFamily: 'Arial'}}>
                    <AnchorLink style={ styleAnchor } href='#testimonios'>Testimonios</AnchorLink>
                  </MenuItem>
                  <MenuItem onClick={this.handleClose} style={{fontFamily: 'Arial'}}>
                    <AnchorLink style={ styleAnchor } href='#contact'>Contactos</AnchorLink>
                  </MenuItem>
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