// Dependencias
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu, { MenuItem } from 'material-ui/Menu';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Button from 'material-ui/Button';

// Component
import Logo from './img/logo.svg';

// CSS
import cls from './MenuResponsive.css'

const styleAnchor = {
  textDecoration: 'none',
  color: '#0069A7'
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
    anchorEl: null,
    openLogin: false,
    open: false
  }
  constructor(props){
    super(props);
    this.state = {
      auth: true,
      anchorEl: null,
      bgColor: '#fff'
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

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
    });
  };

  handleScroll() {
    const html = document.documentElement;
    if (html.scrollTop >= 100) {
      this.setState({ bgColor: '#fff' });
    } else {
      this.setState({ bgColor: '#fff' });
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    let menu = null;

    return (
      <div className={classes.root}>
        <AppBar style={{backgroundColor: 'transparent'}} elevation={0}>
          <Toolbar style={{ backgroundColor: this.state.bgColor }}>
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
                  <MenuItem style={{fontFamily: 'Arial'}}>
                    <AnchorLink style={ styleAnchor } href='##'>Agendar servicio</AnchorLink>
                  </MenuItem>
                  <MenuItem onClick={this.handleClose} style={{fontFamily: 'Arial'}}>
                    <AnchorLink style={ styleAnchor } href='##'>Nosotros</AnchorLink>
                  </MenuItem>
                  <MenuItem style={{fontFamily: 'Arial'}}>
                    <AnchorLink style={ styleAnchor } href='#works'>¿Cómo Funciona?</AnchorLink>
                  </MenuItem>
                  <MenuItem onClick={this.handleClose} style={{fontFamily: 'Arial'}}>
                    <AnchorLink style={ styleAnchor } href='##'>Únete a Noc Noc</AnchorLink>
                  </MenuItem>
                  <MenuItem onClick={this.handleClose}>
                    <Button className={ cls.styleAnchor } component={Link} to="/login" >Iniciar Sesión</Button>
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