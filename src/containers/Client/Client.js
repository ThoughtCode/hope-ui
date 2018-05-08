import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import Register from '../../components/Client/Register/Register';
import Login from '../../components/Client/Login/Login';

import Logo from '../../logo_white.png';

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
class Client extends Component {
    
    render () {
        const { classes } = this.props;
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            <img src={Logo} height="62px" alt="Logo"></img>
                        </Typography>
                        <Button component={Link} to="/cliente" color="inherit">Customer</Button>
                        <Button color="inherit">Agent</Button>
                    </Toolbar>
                </AppBar>
                <Route path='/cliente'
                    exact
                    component={Login}/>
                <Route path={this.props.match.url + '/registro'} exact component={Register}/>
            </div>
        );
    };
}

export default withStyles(styles)(Client);