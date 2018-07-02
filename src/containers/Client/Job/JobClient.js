// Dependencias
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Componentes
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import MainJobClient from '../MainJobClient/MainJobClient';

// Css
import cls from './JobClient.css';

import * as actions from '../../../store/actions';

class JobClient extends Component {
  componentDidMount () {
    this.props.onFetchNextJobs(this.props.token, null);
    this.props.onFetchHistoryJobs(this.props.token);
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
                    <Typography variant="title" gutterBottom className={cls.Typogra}>Trabajos</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper elevation={0}>
                    <MainJobClient
                      futureJobsMain={this.props.futureJobs}
                      jobsPast={this.props.historyjobs}
                    />
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
    futureJobs: state.job.nextjobs,
    historyjobs: state.job.historyjobs,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchNextJobs: (token) => dispatch(actions.fetchNextJobs(token, null)),
    onFetchHistoryJobs: (token) => dispatch(actions.fetchHistoryJobs(token)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobClient);