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
  constructor(props){
    super(props);
    this.state = {
      auth: true,
      anchorEl: null,
      bgColor: 'transparent'
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  handleScroll() {
    const html = document.documentElement;
    if (html.scrollTop >= 100) {
      this.setState({ bgColor: 'rgba(255, 255, 255, 0.70)' });
    } else {
      this.setState({ bgColor: 'transparent' });
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar topfixed="true" style={{backgroundColor: 'transparent'}} elevation={0}>
          <Toolbar style={{ backgroundColor: this.state.bgColor }}>
            <Typography variant="title" color="secondary" className={classes.flex}>
              <AnchorLink style={ styleAnchor } href='#main'>
                <img src={Logo} className={cls.Applogo} alt="logo" />
              </AnchorLink>
            </Typography>
            <MenuItem style={{fontFamily: 'Arial'}}>
              <AnchorLink style={ styleAnchor } href='#download'>Descargas</AnchorLink>
            </MenuItem>
            <MenuItem style={{fontFamily: 'Arial'}}>
              <AnchorLink style={ styleAnchor } href='#works'>Cómo Funciona</AnchorLink>
            </MenuItem>
            <MenuItem onClick={this.handleClose} style={{fontFamily: 'Arial'}}>
              <AnchorLink style={ styleAnchor } href='#testimonios'>Testimonios</AnchorLink>
            </MenuItem>
            <MenuItem onClick={this.handleClose} style={{fontFamily: 'Arial'}}>
              <AnchorLink style={ styleAnchor } href='#contact'>Contactos</AnchorLink>
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