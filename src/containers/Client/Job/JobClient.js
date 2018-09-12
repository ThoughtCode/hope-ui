// Dependencias
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Componentes
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import MainJobClient from '../MainJobClient/MainJobClient';
import Spinner from '../../../components/UI/Spinner/Spinner';

// Css
import cls from './JobClient.css';

import * as actions from '../../../store/actions';

class JobClient extends Component {
  state = {
    filter: {
      current_page_current: 1,
    },
  };
  componentDidMount () {
    this.props.onFetchNextJobsCurrent(this.props.token, this.state.filter.current_page_current);
  }
  render() {
    return (
      <div>
        <Grid container justify="center" className={cls.root}>
          <Grid item xs={12} sm={10} md={8}>
            {this.props.loading ? (
              <div className={cls.LoaderContainer}>
                <Spinner />
              </div>
            ) : (
              <Paper elevation={0}>
                <Grid container justify="center">
                  <Grid item xs={11} md={12} style={{backgroundColor: '#f9f9f9'}}>
                    <Paper elevation={0}>
                      <Typography variant="title" gutterBottom className={cls.Typogra}>Mis trabajos</Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={11} md={12}>
                    <Paper elevation={0}>
                      <MainJobClient
                        {...this.props}
                      />
                    </Paper>
                  </Grid>
                </Grid>
              </Paper>
            )}
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: localStorage.getItem('token'),
    futureJobsMain: state.job.nextjobsCurrent,
    jobsPast: state.job.listJobsCompleted,
    totalPagesCurrentCustomer: state.job.totalPagesCurrentCustomer,
    totalPagesCurrentPast: state.job.totalPagesCurrentPast,
    loading: state.job.loading, 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchNextJobsCurrent: (token, filter) => dispatch(actions.fetchNextJobsCurrent(token, filter)),
    onFetchListJobsCompleted: (token, filter) => dispatch(actions.fetchListJobsCompleted(token, filter)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobClient);