// Dependencias
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Componentes
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import cls from './MisTrabajos.css';
import MenuBar from '../../MenuBar/MenuBarAgent';
import MiJobsMain from '../../../components/Agent/MiJobsMain/MiJobsMain';

import * as actions from '../../../store/actions';

class MisTrabajos extends Component {
  componentDidMount() {
    this.props.onFetchJobAgentCurrent(localStorage.getItem('token'));
    this.props.onFetchJobAgenteCompleted(localStorage.getItem('token'));
  };
  render() {
    return (
      <div>
        <MenuBar />
        <Grid container justify="center" className={cls.root}>
          <Grid item xs={12} sm={10}>
            <Paper elevation={0}>
              <Grid container justify="center">
                <Grid item xs={12}>
                  <Paper elevation={0}>
                    <Typography variant="title" gutterBottom className={cls.Typogra}>Mis Trabajos</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper elevation={0}>
                    <MiJobsMain
                      jobs={this.props.acceptedjobs}
                      jobsCompleted={this.props.completedjobs} />
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
const mapDispatchToProps = dispatch => ({
    onFetchJobAgentCurrent: (token) => dispatch(actions.fetchJobAgentCurrent(token)),
    onFetchJobAgenteCompleted: (token) => dispatch(actions.fetchJobAgenteCompleted(token)),
});
const mapStateToProps = state => ({
  acceptedjobs: state.job.acceptedjobs,
  completedjobs: state.job.completedjobs,
  total_pages: state.job.total_pages,
});

export default connect(mapStateToProps, mapDispatchToProps)(MisTrabajos);