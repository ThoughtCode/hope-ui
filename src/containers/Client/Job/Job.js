import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import JobShow from '../../../components/Client/Jobs/JobShow/JobShow';

import * as actions from '../../../store/actions';

class Job extends Component {
  componentDidMount() {
    this.props.onFetchJob(localStorage.getItem('token'), this.props.match.params.job_id);
  }

  acceptedProposal = (event, token, job_id, proposal_id) => {
    event.preventDefault();
    this.props.onAcceptedJob(token, job_id, proposal_id);
  }

  render() {
    let hashedId = null
    if(this.props.job.attributes){
      hashedId = this.props.job.attributes.property.hashed_id
    }
    return (
      <JobShow
        hashedId={hashedId}
        job={this.props.job}
        accepted={this.acceptedProposal}
        cancelled={this.props.onCancelledJob}/>
    );
  }
}

const mapStateToProps = state => {
  return {
    job: state.job.job,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchJob: (token, job_id) => dispatch(actions.fetchJob(token, job_id)),
    onAcceptedJob: (token, job_id, proposal_id) => dispatch(actions.acceptedJob(token, job_id, proposal_id)),
    onCancelledJob: (token, job_id) => dispatch(actions.cancelledJob(token, job_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Job);