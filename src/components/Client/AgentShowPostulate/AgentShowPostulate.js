// Dependencias
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

// Componentes
import cls from './AgentShow.css';
import CardAgentShow from './CardAgentShow/CardAgentShow';
import Reviews from '../../../components/Agent/Reviews/Reviews';


import * as actions from '../../../store/actions';

class AgentShow extends Component {
  componentDidMount() {
    this.props.onFetchJob(localStorage.getItem('token'), this.props.match.params.job_id);
    this.props.onShowReviews(localStorage.getItem('token'), this.props.match.params.job_id);
    this.props.onProposalPostulate(localStorage.getItem('token'), this.props.match.params.job_id, this.props.match.params.proposal_id);
  }
  render() {
    // console.log(this.props.proposalPostulate.agent)
    let postulate = 0;
    let agentRewiew;
    let postulateReviews;
    let r;
    let reviews = null;
    if (this.props.proposalPostulate.agent) {
      if (this.props.proposalPostulate.agent.data.attributes.rewiews.data.length > 0) {
        reviews = this.props.proposalPostulate.agent.data.attributes.rewiews.data.map( rr => (
           <Reviews review={rr} />
        ))
      }
    }
    if (this.props.job.attributes){
      agentRewiew=this.props.job.attributes
      postulate=this.props.job.attributes.proposals.data
      // console.log(postulate)
    }
    return (
      <div>
        <Grid container justify="center" className={cls.root}>
          <Grid item xs={12} sm={10}>
            <Paper elevation={0}>
              <Grid container justify="center">
                <Grid item xs={12}>
                  <Paper elevation={0}>
                    <Typography variant="title" gutterBottom className={cls.Typogra}>Agente Postulado</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={cls.CardAgentShow} elevation={0}>
                    <CardAgentShow
                      agentRewiew={agentRewiew}
                      postulate={postulate}
                      />
                  </Paper>
                </Grid>
              </Grid>
              <Grid container justify="center">
                <Grid item xs={12} sm={8}>
                  <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      {reviews}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token || localStorage.getItem('token'),
    job: state.job.job,
    proposalPostulate: state.proposal.proposalPostulate,
    // review: state.review.review,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchJob: (token, job_id) => dispatch(actions.fetchJob(token, job_id)),
    onAcceptedJob: (token, job_id, proposal_id) => dispatch(actions.acceptedJob(token, job_id, proposal_id)),
    onCancelledJob: (token, job_id) => dispatch(actions.cancelledJob(token, job_id)),
    onShowReviews: (token, hashed_id) => dispatch(actions.showReviews(token, hashed_id)),
    onProposalPostulate: (token, job_id, hashed_id) => dispatch(actions.proposalPostulate(token, job_id, hashed_id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AgentShow);