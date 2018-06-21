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
    this.props.onFetchNextJobs(this.props.token);
    this.props.onFetchHistoryJobs(this.props.token);
  }

  showServiceClick = (id) => {
    this.props.history.push(`servicio/${id}`);
  }

  render () {
    return (
      <div className={cls.Dashboard}>
        <Jumbotron />
        <Services clicked={this.showServiceClick} services={this.props.services} />
        <NextJobs nextjobs={this.props.nextjobs} />
        <PastJobs historyjobs={this.props.historyjobs} />
        <Download />
        <Contact />
      </div>
    );
  };
};

const mapStateToProps = state => {
  return {
    token: state.auth.token || localStorage.getItem('token'),
    services: state.service.services,
    nextjobs: state.job.nextjobs,
    historyjobs: state.job.historyjobs,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchServices: (token) => dispatch(actions.fetchServices(token)),
    onFetchNextJobs: (token) => dispatch(actions.fetchNextJobs(token)),
    onFetchHistoryJobs: (token) => dispatch(actions.fetchHistoryJobs(token)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
