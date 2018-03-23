import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from '../../components/UI/Navigation/Navbar/Navbar';
import Register from '../../components/Client/Register/Register';
import Auth from '../../components/Client/Auth/Auth';

class Client extends Component {
    componentDidMount () {
        console.log(this.props)
    }
    render () {
        return (
            <div>
                <Navbar status="cliente"/>             
                <h1>Cliente</h1>
                <Route path={this.props.match.url + '/registro'} exact component={Register}/>
                <Route path={this.props.match.url + '/ingreso'} exact component={Auth}/>
            </div>
        );
    }
}

export default Client;