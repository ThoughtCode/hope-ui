// Dependencias
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

// Componentes
import cls from './JobShow.css';
import CardAgentShow from './CardAgentShow/CardAgentShow';

import * as actions from '../../../store/actions';

class AgentShow extends Component {
  componentDidMount() {
    this.props.onFetchJob(localStorage.getItem('token'), this.props.match.params.job_id);
    this.props.onShowReviews(this.props.token, this.props.match.params.job_id);
  }
  render() {
    return (
      <div>
        <Grid container justify="center" className={cls.root}>
          <Grid item xs={12} sm={10}>
            <Paper elevation={0}>
              <Grid container justify="center">
                <Grid item xs={12}>
                  <Paper elevation={0}>
                    <Typography variant="title" gutterBottom className={cls.Typogra}>Agente Contratado</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={cls.CardAgentShow} elevation={0}>
                    <CardAgentShow
                      jobCard={this.props.job}
                      job_id={this.props.match.params.job_id} />
                  </Paper>
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
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchJob: (token, job_id) => dispatch(actions.fetchJob(token, job_id)),
    onAcceptedJob: (token, job_id, proposal_id) => dispatch(actions.acceptedJob(token, job_id, proposal_id)),
    onCancelledJob: (token, job_id) => dispatch(actions.cancelledJob(token, job_id)),
    onShowReviews: (token, hashed_id) => dispatch(actions.showReviews(token, hashed_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AgentShow);