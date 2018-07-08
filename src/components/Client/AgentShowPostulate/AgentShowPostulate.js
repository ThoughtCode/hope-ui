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
    this.props.onProposalPostulate(localStorage.getItem('token'), this.props.match.params.job_id, this.props.match.params.proposal_id);
  }
  render() {
    console.log(this.props.postulate)
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
                      postulate={this.props.postulate}
                      />
                  </Paper>
                </Grid>
              </Grid>
              <Grid container justify="center">
                <Grid item xs={12} sm={8}>
                  <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <Reviews
                        job={this.props.job}
                      />
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
    postulate: state.proposal.postulate,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onProposalPostulate: (token, job_id, hashed_id) => dispatch(actions.proposalPostulate(token, job_id, hashed_id)),
    onShowReviews: (token, id) => dispatch(actions.showReviews(token, id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AgentShow);