import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import './App.css';
import Layout from './containers/Layout/Layout';
import Client from './containers/Client/Client';
import Landing from './containers/Landing/Landing';
import Dashboard from './containers/Client/Dashboard/Dashboard';

import * as actions from './store/actions'

class App extends Component {
    componentDidMount () {
        this.props.onTryAutoSignup();
    }

    render() {
        let routes = (
            <Switch>
                {/* <Route path="/agente" component={Agent}/>  */}
                <Route path="/cliente" component={Client}/>
                <Route path="/" exact component={Landing}/>
                <Redirect to="/" />
            </Switch>
        );

        if ( this.props.isAuthenticated ) {
            routes = (
                <Switch>
                    {/* <Route path="/agente" component={Agent}/>  */}
                    <Route path="/cliente/dashboard" component={Dashboard}/>
                    <Redirect to="/cliente/dashboard" />
                </Switch>
            )
        }
        return (
            <div className="App">
                <Layout>
                    {routes}
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null || localStorage.getItem('token')
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
