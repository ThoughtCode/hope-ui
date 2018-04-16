import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Layout from './containers/Layout/Layout';
import Client from './containers/Client/Client';
import Landing from './containers/Landing/Landing';
import Dashboard from './containers/Client/Dashboard/Dashboard';
// import Home from './components/Home/Home';

class App extends Component {

    componentDidMount () {
        console.log(this.props)
    }
    render() {
        return (
            <div className="App">
                <Layout>
                    <Switch>
                        {/* <Route path="/agente" component={Agent}/>  */}
                        <Route path="/cliente/dashboard" component={Dashboard}/>
                        <Route path="/cliente" component={Client}/>
                        <Route path="/" exact component={Landing}/>
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
