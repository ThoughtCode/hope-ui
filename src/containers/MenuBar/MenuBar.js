// Dependencias
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { MenuItem } from 'material-ui/Menu';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// Component
import cls from './css/MenuBar.css';
import Logo from './img/logo.svg';

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
  constructor(props){
    super(props);
    this.state = {
      auth: true,
      anchorEl: null,
      bgColor: '#fff',
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  handleScroll() {
    const html = document.documentElement;
    if (html.scrollTop >= 80) {
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

    return (
      <div className={classes.root}>
        <AppBar topfixed="true" style={{backgroundColor: 'transparent'}} elevation={2}>
          <Toolbar style={{ backgroundColor: this.state.bgColor }}>
            <Typography variant="title" color="secondary" className={classes.flex}>
              <AnchorLink style={ styleAnchor } href='#main'>
                <img src={Logo} className={cls.Applogo} alt="logo" />
              </AnchorLink>
            </Typography>
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
            <MenuItem onClick={this.handleClose} style={{fontFamily: 'Arial'}}>
              <AnchorLink style={ styleAnchor } href="##">Iniciar Sesion</AnchorLink>
            </MenuItem>
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