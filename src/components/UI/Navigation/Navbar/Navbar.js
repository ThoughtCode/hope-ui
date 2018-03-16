import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Route } from 'react-router-dom';

class Navbar extends Component {
    state = {
        open: false
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        return (
            <header>
                <AppBar 
                title="Hope"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onLeftIconButtonClick={this.handleToggle}/>
                <Drawer
                docked={false}
                open={this.state.open}
                onRequestChange={(open) => this.setState({open})}>
                    <MenuItem href="/">Home</MenuItem>
                    <MenuItem href="/login">Login</MenuItem>
                    <MenuItem>Registro</MenuItem>
                </Drawer>
                <Route path="/" exact render={() => <h1>Home</h1>}/>
                <Route path="/login" exact render={() => <h1>Login</h1>}/>
            </header>
        );
    }
}

export default Navbar;