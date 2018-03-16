import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Layout from './containers/Layout/Layout';

class App extends Component {
    render() {
        return (
        <BrowserRouter>
            <div className="App">
                <Layout />        
            </div>
        </BrowserRouter>
        );
    }
}

export default App;
