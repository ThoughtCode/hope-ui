import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from 'material-ui/Avatar';

import * as actions from '../../../store/actions'

import Logo from '../../../logo_white.png';

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
    row: {
        display: 'flex',
        justifyContent: 'center',
    },
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        width: 60,
        height: 60,
    },
};
class Dashboard extends Component {
    logoutHandler = () => {
        this.props.onLogout();
    }
    render () {
        const { classes } = this.props;
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            <img src={Logo} height="62px" alt="Logo"></img>
                        </Typography>
                        <Button color="inherit" onClick={this.logoutHandler}>Logout</Button>
                    </Toolbar>
                </AppBar>
                Dashboard
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    };
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(Dashboard));