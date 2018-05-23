// Dependencias
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { MenuItem } from 'material-ui/Menu';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Button from 'material-ui/Button';

// Component
import cls from './css/MenuBar.css';
import Logo from './img/logo.svg';

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
              <AnchorLink className={ cls.styleAnchor } href='#main'>
                <img src={Logo} className={cls.Applogo} alt="logo" />
              </AnchorLink>
            </Typography>
            <MenuItem>
              <AnchorLink className={ cls.styleAnchor } href='##'>Agendar servicio</AnchorLink>
            </MenuItem>
            <MenuItem onClick={this.handleClose}>
              <AnchorLink className={ cls.styleAnchor } href='##'>Nosotros</AnchorLink>
            </MenuItem>
            <MenuItem>
              <AnchorLink className={ cls.styleAnchor } href='#works'>¿Cómo Funciona?</AnchorLink>
            </MenuItem>
            <MenuItem onClick={this.handleClose}>
              <AnchorLink className={ cls.styleAnchor } href='##'>Únete a Noc Noc</AnchorLink>
            </MenuItem>
            <MenuItem onClick={this.handleClose}>
              <Button className={ cls.styleAnchor } component={Link} to="/login" >Iniciar Sesión</Button>
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