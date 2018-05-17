import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import MenuBar from '../../containers/MenuBar/MenuBar';
import Dashboard from './Dashboard/Dashboard';
import Service from './Service/Service';

// Css
import cls from './Client.css'

class Client extends Component {
  render () {
    return (
      <div className={cls.Client}>
        <MenuBar />
        <Switch>
          <Route path={`${this.props.match.url}/dashboard`} exact component={Dashboard}/>
          <Route path={`${this.props.match.url}/servicio/:service_id`} exact component={Service}/>
          <Redirect to={`${this.props.match.url}/dashboard`} />
        </Switch>
      </div>
    );
  }
}

export default Client;
