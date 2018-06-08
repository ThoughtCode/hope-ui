//Dependencias
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

//Component
import cls from './App.css';
import Layout from './containers/Layout/Layout';
import Home from './containers/Home/Home';
import Client from './containers/Client/Client';
import Agent from './containers/Agent/Agent';
import AgentDashboard from './containers/Agent/Dashboard/Dashboard';
import LoginClient from './components/Client/Login/Login';
import RegisterClient from './components/Client/Register/Register';
import LoginAgent from './containers/Agent/Login/Login';
import ResetClient from './containers/Client/Reset/Reset';
import ResetAgent from './containers/Agent/Reset/Reset';

import * as actions from './store/actions';

class App extends Component {
  render() {
    let routes = null;
    if (this.props.auth) {
      routes = (
        <Route path="/cliente" component={Client}/>
      )
    }
    return (
      <div className={cls.body}>
        <Layout>
          <Switch>
            {routes}
            <Route path="/reset" component={ResetClient}/>
            <Route path="/agente/reset" component={ResetAgent}/>
            <Route path="/cliente/login" component={LoginClient}/>
            <Route path="/agente/login" component={LoginAgent}/>
            <Route path="/cliente/registro" component={RegisterClient}/>
            <Route path="/agente/dashboard" component={AgentDashboard}/>
            <Route path="/agente" component={Agent}/>
            <Route path="/" exact component={Home}/>
            <Redirect to="/"/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.token || localStorage.getItem('token')
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (email, password) => dispatch(actions.auth(email, password))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));