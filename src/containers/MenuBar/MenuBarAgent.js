// Dependencias
import React, { Component } from 'react';
import { connect } from 'react-redux';
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
  Grid,
  Badge,
} from 'material-ui';

// Component
import cls from './MenuBar.css';
import Logo from './img/logo.svg';
import Login from '../../components/Client/Login/Login';

import * as actions from '../../store/actions';

const styles = theme => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
  }
});

class AppBarMenu extends Component {
  state = {
    anchorEl: null,
    anchorElNotification: null,
    openLogin: false,
    open: false,
    openNotification: false,
  }

  componentDidMount() {
    this.props.onFetchUser(localStorage.getItem('token'));
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleNotification = event => {
    this.setState({ anchorElNotification: event.currentTarget });
  };

  handleOpen = (modal) => {
    this.setState({ openLogin: true });
    this.setState({ open: true });
    this.setState({ openNotification: true });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
    this.setState({ open: false });
    this.setState({ anchorElNotification: false });
  };

  render() {
    const { anchorEl } = this.state;
    const { anchorElNotification } = this.state;
    const open = Boolean(anchorEl);
    const openNotification = Boolean(anchorElNotification);
    const { classes } = this.props;
    let menu = null;
    let status = null;
    if (this.props.user.attributes) {
      status = this.props.user.attributes.status
    }
    if (this.props.auth) {
      menu = (
        <AppBar topfixed="true" className={cls.AppBar} elevation={0}>
          <Toolbar className={cls.Toolbar}>
            <Typography variant="title" color="secondary" className={cls.flex}>
              <AnchorLink className={cls.styleAnchor} href="/">
                <img src={Logo} className={cls.Applogo} alt="logo" />
              </AnchorLink>
            </Typography>
            {status === 'pending' ? (
              <p></p>
            ) : (
              <div>
                <IconButton
                  className={cls.ButtonNotification}
                  aria-label="4 pending messages"
                  aria-owns={openNotification ? 'menu-appbar-notification' : null}
                  aria-haspopup="true"
                  onClick={this.handleNotification}
                >
                  <Badge badgeContent={4} color="primary">
                    <i className="fa notification-icons fa-bell-o"></i>
                  </Badge>
                </IconButton>
                <Menu
                  className={cls.SubMenu}
                  id="menu-appbar-notification"
                  anchorEl={anchorElNotification}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={openNotification}
                  onClose={this.handleClose}
                >
                  <div className={`${cls.notificationBox} ${cls.show} ${cls.arrowNotificationTip}`}>
                    <ul className={cls.notificationList} id="notification-list-transactions">
                      <li className={cls.notificationMessage} data-notification="">
                        <i className={`${"fa"} ${cls.notifTitle}`} aria-hidden="true"></i>
                        <a className={cls.notificationLink} href="##">
                          <p className={cls.notificationContent}>Nuevos trabajos disponibles</p>
                        </a>
                      </li>
                      <li className={cls.notificationMessage} data-notification="">
                        <i className={`${"fa"} ${cls.notifTitle}`} aria-hidden="true"></i>
                        <a className={cls.notificationLink} href="##">
                          <p className={cls.notificationContent}>Te Calificaron</p>
                        </a>
                      </li>
                      <li className={cls.notificationMessage} data-notification="">
                        <i className={`${"fa"} ${cls.notifTitle}`} aria-hidden="true"></i>
                        <a className={cls.notificationLink} href="##">
                          <p className={cls.notificationContent}>Trabajo Aceptado</p>
                        </a>
                      </li>
                      <li className={cls.notificationMessage} data-notification="">
                        <i className={`${"fa"} ${cls.notifTitle}`} aria-hidden="true"></i>
                        <a className={cls.notificationLink} href="##">
                          <p className={cls.notificationContent}>Postulastes un trabajo</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </Menu>
              </div>
            )}
            <MenuItem className={`${cls.DisplayMenuItem} ${cls.MenuItem}`} component={Link} to="/agente">Inicio</MenuItem>
            <MenuItem className={`${cls.DisplayMenuItem} ${cls.MenuItem}`} component={Link} to="/agente/trabajos">Mis Trabajos</MenuItem>
            <MenuItem className={`${cls.DisplayMenuItem} ${cls.MenuItem}`} component={Link} to="">Reportes</MenuItem>
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
                <MenuItem className={`${cls.Display} ${cls.SubMenuItem}`} component={Link} to="">Reportes</MenuItem>
                <MenuItem className={`${cls.Display} ${cls.SubMenuItem}`} component={Link} to="/agente/calendario">Calendario</MenuItem>
                <MenuItem className={cls.SubMenuItem} onClick={this.handleClose} component={Link} to="/agente/perfil/info">Mi Perfil</MenuItem>
                <MenuItem className={cls.SubMenuItem} onClick={this.props.logout} component={Link} to="/">Cerrar sesión</MenuItem>
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

const mapDispatchToProps = dispatch => ({
  onFetchUser: (token) => dispatch(actions.fetchCurrentAgent(token)),
});

const mapStateToProps = state => ({
  user: state.user.user,
});

const MenuAppBar = withStyles(styles)(AppBarMenu);

export default connect(mapStateToProps, mapDispatchToProps) (MenuAppBar);