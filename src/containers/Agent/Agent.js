import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from '../../components/UI/Navigation/Navbar/Navbar';
import Register from '../../components/Agent/Register/Register';

class Agent extends Component {
    render () {
        return (
            <div>
                <Navbar status="agente"/>
                <h1>Agente</h1>
                <Route path={this.props.match.url + '/registro'} exact component={Register}/>
            </div>
        );
    }
}

export default Agent;