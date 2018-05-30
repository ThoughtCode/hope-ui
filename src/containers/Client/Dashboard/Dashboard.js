import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Jumbotron from '../../../components/Client/Jumbotron/Jumbotron';
import Services from '../../../components/Client/Services/Services';
import NextJobs from '../../../components/Client/NextJobs/NextJobs';
import PastJobs from '../../../components/Client/PastJobs/PastJobs';
import Download from '../../../components/Home/Download/Download';
import Contact from '../../../components/Home/Contact/Contact';

// Css
import cls from './Dashboard.css'

import * as actions from '../../../store/actions';

class Dashboard extends Component {
  componentDidMount () {
    this.props.onFetchServices(this.props.token);
    this.props.onFetchJobs(this.props.token);
  }

  showServiceClick = (id) => {
    this.props.history.push(`servicio/${id}`);
  }

  render () {
    return (
      <div className={cls.Dashboard}>
        <Jumbotron />
        <Services clicked={this.showServiceClick} services={this.props.services} />
        <NextJobs jobs={this.props.jobs} />
        <PastJobs jobs={this.props.jobs} />
        <Download />
        <Contact />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token || localStorage.getItem('token'),
    services: state.service.services,
    jobs: state.job.jobs,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchServices: (token) => dispatch(actions.fetchServices(token)),
    onFetchJobs: (token) => dispatch(actions.fetchJobs(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
