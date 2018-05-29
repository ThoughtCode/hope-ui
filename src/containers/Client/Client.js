import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

// Components
import MenuBar from '../MenuBar/MenuBar';
import Dashboard from './Dashboard/Dashboard';
import Service from './Service/Service';
import Job from './Job/Job';

// Css
import cls from './Client.css'

import * as actions from '../../store/actions'
class Client extends Component {
  render () {
    return (
      <div className={cls.Client}>
        <MenuBar auth={this.props.auth} logout={this.props.onLogout}/>
        <Switch>
          <Route path={`${this.props.match.url}/dashboard`} exact component={Dashboard}/>
          <Route path={`${this.props.match.url}/servicio/:service_id`} exact component={Service}/>
          <Route path={`${this.props.match.url}/trabajo/:job_id`} exact component={Job}/>
          <Redirect to={`${this.props.match.url}/dashboard`} />
        </Switch>
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
    onLogout: () => dispatch(actions.logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Client);
