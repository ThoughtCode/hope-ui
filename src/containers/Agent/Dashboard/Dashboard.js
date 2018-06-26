// Dependencias
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Componentes
import MenuBar from '../../MenuBar/MenuBarAgent';
import Filter from '../../../components/Agent/Filter/Filter';
import MainDashboardAgent from '../../../components/Agent/MainDashboardAgent/MainDashboardAgent';

// Css
import cls from './Dashboard.css';

import * as actions from '../../../store/actions';

class DashboardAgent extends Component {
  componentDidMount() {
    this.props.onFetchJobs(localStorage.getItem('token'));
  };
  render() {
    return (
      <div className={cls.Dashboard}>
        <MenuBar />
        <Filter filter={this.props.onFetchJobs}/>
        <MainDashboardAgent jobs={this.props.jobs} />
      </div>
    );
  };
};

const mapDispatchToProps = dispatch => ({
  onFetchJobs: (token, filter = null) => dispatch(actions.fetchJobsAgent(token, filter)),
});

const mapStateToProps = state => ({
  jobs: state.job.jobs,
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardAgent);