// Dependencias
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Component
import './App.css';
import Layout from './containers/Layout/Layout';
import Home from './containers/Home/App';
import Client from './containers/Client/Client';
import Agent from './containers/Agent/Agent';
import AgentDashboard from './containers/Agent/Dashboard/Dashboard';

class App extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/cliente" component={Client} />
            <Route path="/agente" exact component={Agent} />
            <Route path="/agente/dashboard" component={AgentDashboard} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
