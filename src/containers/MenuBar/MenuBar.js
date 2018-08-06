// Dependencias
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { withStyles } from 'material-ui/styles';
import {
  MenuItem,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  Avatar,
  Modal,
  Grid
} from 'material-ui';

// Component
import cls from './MenuBar.css';
import Logo from './img/logo.svg';
import Registro from '../../components/Client/Register/Register';
import Login from '../../components/Client/Login/Login';
import LoginAgent from '../../containers/Agent/Login/Login';

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
    openRegister: false,
    openAgentLogin: false,
    open: false
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleOpen = (modal) => {
    if (localStorage.getItem('signInAs') === 'customer') {
      this.props.history.push('/cliente')
    }
    if (localStorage.getItem('signInAs') === 'agent') {
      this.props.history.push('/agente')
    }
    if (modal === "register") {
      this.setState({
        openLogin: false,
        openAgentLogin: false,
        openRegister: true,
      });
    } else if (modal === "login") {
      this.setState({
        openLogin: true,
        openAgentLogin: false,
        openRegister: false,
      });
    } else if (modal === "loginAgent") {
      this.setState({
        openLogin: false,
        openAgentLogin: true,
        openRegister: false,
      });
    }
  };

  handleClose = () => {
    this.setState({
      openLogin: false,
      openAgentLogin: false,
      openRegister: false,
      anchorEl: null,
      open: false
    });
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
              <Link to="/">
                <img src={Logo} className={cls.Applogo} alt="logo" />
              </Link>
            </Typography>
            <MenuItem className={`${cls.DisplayMenuItem} ${cls.MenuItem} ${cls.MenuItemFix}`} component={Link} to="/cliente">
              Inicio
            </MenuItem>
            <MenuItem className={`${cls.DisplayMenuItem} ${cls.MenuItem} ${cls.MenuItemFix}`} component={Link} to="/cliente/trabajos">
              Trabajos
            </MenuItem>
            <div>
              <IconButton
                className={cls.Avatar}
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
              {this.props.profile === 'null' ? (
                <Avatar className={cls.IconUser}>
                  {(localStorage.getItem('first_name').charAt(0)).toUpperCase()}{(localStorage.getItem('last_name').charAt(0)).toUpperCase()}
                </Avatar>
              ) : (
                <Avatar
                  className={cls.IconUser}
                  src={this.props.profile}/>
              )}
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
                <a className={`${cls.Display} ${cls.SubMenuItem}`} component={Link} href="/cliente">Inicio</a>
                <a className={`${cls.Display} ${cls.SubMenuItem}`} component={Link} href="/cliente/trabajos">Trabajos</a>
                <a className={cls.SubMenuItem} onClick={this.handleClose} component={Link} href="/cliente/perfil/info">Mi Perfil</a>
                <a className={cls.SubMenuItem} onClick={this.props.logout} component={Link} href="/">Cerrar sesión</a>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      )
    } else {
      menu = (
        <AppBar topfixed="true" className={cls.AppBar} elevation={0}>
          <Toolbar className={cls.Toolbar}>
            <Typography variant="title" color="secondary" className={cls.flex}>
              <AnchorLink href="#main">
                <img src={Logo} className={cls.Applogo} alt="logo" />
              </AnchorLink>
            </Typography>
            <MenuItem className={cls.MenuItem}>
              <AnchorLink className={cls.styleAnchor} href="#works">¿Cómo Funciona?</AnchorLink>
            </MenuItem>
            <MenuItem className={cls.MenuItem}>
              <AnchorLink className={cls.styleAnchor} href="#Services">Servicios</AnchorLink>
            </MenuItem>
            <MenuItem className={cls.MenuItem}>
              <AnchorLink className={cls.styleAnchor} href="#Download">Únete a Noc Noc</AnchorLink>
            </MenuItem>
            <MenuItem className={cls.MenuItem}>
              <Button className={cls.styleAnchor} onClick={() => this.handleOpen("login")} >Iniciar Sesión</Button>
            </MenuItem>
          </Toolbar>
        </AppBar>
      );
    }
    return (
      <div className={cls.root}>
        {menu}
        <Grid container justify="center" className={cls.style}>
          <Grid item xs={12} md={8} sm={12}>
            <Grid container align="center">
              <Grid item xs={12} sm={4} align="right">
                <Modal
                  open={this.state.openRegister}
                  onClose={this.handleClose}
                >
                  <div className={`${cls.Modal} ${classes.paper}`}>
                    <Registro close={this.handleClose} />
                  </div>
                </Modal>
                <Modal
                  open={this.state.openLogin}
                  onClose={this.handleClose}
                >
                  <div className={`${cls.Modal} ${classes.paper}`}>
                    <Login className={cls.Modal} close={this.handleClose} switchModal={this.handleOpen}/>
                  </div>
                </Modal>
                <Modal
                  open={this.state.openAgentLogin}
                  onClose={this.handleClose}
                >
                  <div className={`${cls.Modal} ${classes.paper}`}>
                    <LoginAgent className={cls.Modal} close={this.handleClose} />
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

export default withRouter(MenuAppBar);