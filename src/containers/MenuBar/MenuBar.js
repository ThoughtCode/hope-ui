// Dependencias
import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { MenuItem } from 'material-ui/Menu';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Button from 'material-ui/Button';

// Component
import cls from './MenuBar.css';
import Logo from './img/logo.svg';

const menuAppBar = props => {
  let menu = null; 
  if (props.auth) {
    menu = (
      <AppBar topfixed="true" className={cls.AppBar} elevation={2}>
        <Toolbar className={cls.Toolbar}>
          <Typography variant="title" color="secondary" className={cls.flex}>
            <AnchorLink className={cls.styleAnchor} href="#main">
              <img src={Logo} className={cls.Applogo} alt="logo" />
            </AnchorLink>
          </Typography>
          <MenuItem>
            <AnchorLink className={cls.styleAnchor} href="##">Agendar servicio</AnchorLink>
          </MenuItem>
          <MenuItem>
            <Button className={cls.styleAnchor} onClick={props.logout} component={Link} to="/cliente/login" >Logout</Button>
          </MenuItem>
        </Toolbar>
      </AppBar>        
    )
  } else {
    menu = (
        <AppBar topfixed="true" className={cls.AppBar} elevation={2}>
          <Toolbar className={cls.Toolbar}>
            <Typography variant="title" color="secondary" className={cls.flex}>
              <AnchorLink className={cls.styleAnchor} href="#main">
                <img src={Logo} className={cls.Applogo} alt="logo" />
              </AnchorLink>
            </Typography>
            <MenuItem>
              <AnchorLink className={cls.styleAnchor} href="##">Agendar servicio</AnchorLink>
            </MenuItem>
            <MenuItem>
              <AnchorLink className={cls.styleAnchor} href="##">Nosotros</AnchorLink>
            </MenuItem>
            <MenuItem>
              <AnchorLink className={cls.styleAnchor} href="#works">¿Cómo Funciona?</AnchorLink>
            </MenuItem>
            <MenuItem>
              <AnchorLink className={cls.styleAnchor} href="##">Únete a Noc Noc</AnchorLink>
            </MenuItem>
            <MenuItem>
              <Button className={cls.styleAnchor} component={Link} to="/cliente/login" >Iniciar Sesión</Button>
            </MenuItem>
          </Toolbar>
        </AppBar>
    );
  }
  return (
    <div className={cls.root}>
      {menu}
    </div>
  );
}

export default menuAppBar;