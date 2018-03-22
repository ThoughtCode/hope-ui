import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Layout from './containers/Layout/Layout';
import Agent from './containers/Agent/Agent';
import Client from './containers/Client/Client';
import Home from './components/Home/Home';

class App extends Component {

    componentDidMount () {
        console.log(this.props)
    }
    render() {
        return (
            <div className="App">
                <Layout>
                    <Switch>
                        <Route path="/agente" component={Agent}/> 
                        <Route path="/cliente" component={Client}/>
                        <Route path="/" exact component={Home}/>
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
