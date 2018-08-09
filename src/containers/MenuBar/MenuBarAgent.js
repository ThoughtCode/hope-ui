// Dependencias
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { withStyles } from 'material-ui/styles';
import {
  MenuItem,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  Avatar,
  Modal,
  Grid
} from 'material-ui';

// Component
import cls from './MenuBar.css';
import Logo from './img/logo.svg';
import Login from '../../components/Client/Login/Login';

const styles = theme => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
  },
});

class AppBarMenu extends Component {
  state = {
    anchorEl: null,
    openLogin: false,
    open: false,
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleOpen = (modal) => {
    this.setState({ openLogin: true });
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
    this.setState({ open: false });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const { classes } = this.props;
    let menu = null;
    if (this.props.auth) {
      menu = (
        <AppBar topfixed="true" className={cls.AppBar} elevation={0}>
          <Toolbar className={cls.Toolbar}>
            <Typography variant="title" color="secondary" className={cls.flex}>
              <AnchorLink className={cls.styleAnchor} href="/">
                <img src={Logo} className={cls.Applogo} alt="logo" />
              </AnchorLink>
            </Typography>
            <MenuItem className={`${cls.DisplayMenuItem} ${cls.MenuItem}`} component={Link} to="/agente">Inicio</MenuItem>
            <MenuItem className={`${cls.DisplayMenuItem} ${cls.MenuItem}`} component={Link} to="/agente/trabajos">Mis Trabajos</MenuItem>
            <MenuItem className={`${cls.DisplayMenuItem} ${cls.MenuItem}`} component={Link} to="/agente/calendario">Calendario</MenuItem>
            <div>
              <IconButton
                className={cls.Avatar}
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
              {this.props.profile === 'null' ? (
                <Avatar>
                  {localStorage.getItem('first_name').charAt(0)}{localStorage.getItem('last_name').charAt(0)}
                </Avatar>
              ) : (
                <Avatar
                  src={this.props.profile}/>
                )}
                <i className={`${cls.IconAvatarMenuResponsive} ${"caret"}`}></i>
                <a className={`${cls.MenuItem} ${cls.Perfil} ${cls.DisplayNo}`}>Mi perfil <span className="caret"></span></a>
              </IconButton>
              <Menu
                className={cls.SubMenu}
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
                <MenuItem className={`${cls.Display} ${cls.SubMenuItem}`} component={Link} to="/agente">Inicio</MenuItem>
                <MenuItem className={`${cls.Display} ${cls.SubMenuItem}`} component={Link} to="/agente/trabajos">Mis Trabajos</MenuItem>
                <MenuItem className={`${cls.Display} ${cls.SubMenuItem}`} component={Link} to="/agente/calendario">Calendario</MenuItem>
                <MenuItem className={cls.SubMenuItem} onClick={this.handleClose} component={Link} to="/agente/perfil/info">Mi Perfil</MenuItem>
                <MenuItem className={cls.SubMenuItem} onClick={this.props.logout} component={Link} to="/">
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>        
      )
    }
    return (
      <div className={cls.root}>
        {menu}
        <Grid container justify="center" className={cls.style}>
          <Grid item xs={12} md={8} sm={12}>
            <Grid container align="center">
              <Grid item xs={12} sm={4} align="right">
                <Modal
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                  open={this.state.open}
                  onClose={this.handleClose}
                >
                  <div className={`${cls.Modal} ${classes.paper}`}>
                    <Login />
                  </div>
                </Modal>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const MenuAppBar = withStyles(styles)(AppBarMenu);

export default MenuAppBar;