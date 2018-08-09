// Dependencias
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Componentes
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import MenuBar from '../../MenuBar/MenuBarAgent';
import MyJobsMain from '../../../components/Agent/MyJobsMain/MyJobsMain';
import Spinner from '../../../components/UI/Spinner/Spinner';

// Css
import cls from './MyJobs.css';

import * as actions from '../../../store/actions';

class MyJobs extends Component {
  componentDidMount() {
    this.props.onFetchJobAgentCurrent(localStorage.getItem('token'));
    this.props.onFetchJobAgentCompleted(localStorage.getItem('token'));
    this.props.onFetchJobAgentPostulated(localStorage.getItem('token'));
  };
  render() {
    return (
      <div>
        <MenuBar />
        <Grid container justify="center" className={cls.root}>
          <Grid item xs={12} sm={10} md={8}>
            {this.props.loading ? (
              <Spinner />
            ) : (
              <Paper elevation={0}>
                <Grid container justify="center" style={{backgroundColor: '#f9f9f9'}}>
                  <Grid item xs={12}>
                    <Paper elevation={0}>
                      <Typography variant="title" gutterBottom className={cls.Typogra}>Mis Trabajos</Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper elevation={0}>
                      <MyJobsMain
                        jobs={this.props.acceptedjobs}
                        jobsCompleted={this.props.completedjobs}
                        jobsPostulated={this.props.postulatedjobs} />
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

const mapDispatchToProps = dispatch => ({
  onFetchJobAgentCurrent: (token) => dispatch(actions.fetchJobAgentCurrent(token)),
  onFetchJobAgentCompleted: (token) => dispatch(actions.fetchJobAgentCompleted(token)),
  onFetchJobAgentPostulated: (token) => dispatch(actions.fetchJobAgentPostulated(token)),
});

const mapStateToProps = state => ({
  acceptedjobs: state.job.acceptedjobs,
  completedjobs: state.job.completedjobs,
  postulatedjobs: state.job.postulatedjobs,
  total_pages: state.job.total_pages,
  loading: state.job.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(MyJobs);