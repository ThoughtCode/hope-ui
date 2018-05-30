import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import JobShow from '../../../components/Client/Jobs/JobShow/JobShow';

import * as actions from '../../../store/actions'

class Job extends Component {
  componentDidMount() {
    this.props.onFetchJob(localStorage.getItem('token'), this.props.match.params.job_id);
  }
  render() {
    return (
      <JobShow
        job={this.props.job}/>
    );
  }
}

const mapStateToProps = state => {
  return {
    job: state.job.job,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchJob: (token, job_id) => dispatch(actions.fetchJob(token, job_id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Job);