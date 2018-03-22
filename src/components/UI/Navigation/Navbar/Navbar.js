import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MenuItemLink from './MenuItemLink/MenuItemLink';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

class Navbar extends Component {
    state = {
        open: false
    }

    componentDidUpdate () {
        console.log(this.props);
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        let links = (
            <Drawer
                docked={false}
                open={this.state.open}
                onRequestChange={(open) => this.setState({open})}>
                <MenuItemLink to="/" also={this.handleRequestClose}>Home</MenuItemLink>
                <MenuItemLink to="/agente" also={this.handleRequestClose}>Agente</MenuItemLink>
                <MenuItemLink to="/cliente" also={this.handleRequestClose}>Cliente</MenuItemLink>
                {/* <MenuItem containerElement={<NavLink to="/"/>}>Home</MenuItem>
                <MenuItem containerElement={<NavLink to="/login"/>}>Login</MenuItem>
                <MenuItem containerElement={<NavLink to="/register"/>}>Registro</MenuItem> */}
            </Drawer>
        );
        if (this.props.status === 'cliente') {
            links = (
                <Drawer
                    docked={false}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}>
                    <MenuItemLink to="/" also={this.handleRequestClose}>Home</MenuItemLink>
                    <MenuItemLink to="/cliente/ingreso" also={this.handleRequestClose}>Login</MenuItemLink>
                    <MenuItemLink to="/cliente/registro" also={this.handleRequestClose}>Registro</MenuItemLink>
                    {/* <MenuItem containerElement={<NavLink to="/"/>}>Home</MenuItem>
                    <MenuItem containerElement={<NavLink to="/login"/>}>Login</MenuItem>
                    <MenuItem containerElement={<NavLink to="/register"/>}>Registro</MenuItem> */}
                </Drawer>
            );
        } else if (this.props.status === 'agente') {
            links = (
                <Drawer
                    docked={false}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}>
                    <MenuItemLink to="/" also={this.handleRequestClose}>Home</MenuItemLink>
                    <MenuItemLink to="/agente/ingreso" also={this.handleRequestClose}>Login</MenuItemLink>
                    <MenuItemLink to="/agente/registro" also={this.handleRequestClose}>Registro</MenuItemLink>
                    {/* <MenuItem containerElement={<NavLink to="/"/>}>Home</MenuItem>
                    <MenuItem containerElement={<NavLink to="/login"/>}>Login</MenuItem>
                    <MenuItem containerElement={<NavLink to="/register"/>}>Registro</MenuItem> */}
                </Drawer>
            );
        }
        return (
            <header>
                <AppBar 
                title="Hope"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onLeftIconButtonClick={this.handleToggle}/>
                {links}
            </header>
        );
    }
}

export default withRouter(Navbar);