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
import RegistreAgent from './containers/Agent/Registre/Agent';
import LoginCliente from './components/Client/Login/Login';
import RegistroCliente from './components/Client/Register/Register';
import LoginAgent from './containers/Agent/Login/Login';
import ResetCliente from './containers/Client/Reset/Reset';
import ResetAgent from './containers/Agent/Reset/Reset';

import * as actions from './store/actions';

class App extends Component {
  // componentDidMount () {
  //   const email = 'rainieromadrid@gmail.com';
  //   const password = 123456;
  //   this.props.onLogin(email, password);
  // }
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
            <Route path="/reset" component={ResetCliente}/>
            <Route path="/agente/reset" component={ResetAgent}/>
            <Route path="/login" component={LoginCliente}/>
            <Route path="/agente/login" component={LoginAgent}/>
            <Route path="/registro" component={RegistroCliente}/>
            <Route path="/cliente" component={Client}/>
            <Route path="/agente/dashboard" component={Agent}/>
            <Route path="/agente/registro" component={RegistreAgent}/>
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