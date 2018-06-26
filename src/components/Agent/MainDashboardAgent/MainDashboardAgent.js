// Dependencias
import React, { Component } from 'react';

// Componentes
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import CardJob from '../../../components/Agent/CardJob/CardJob';
import cls from './MainDashboardAgent.css'

class MainDashboardAgent extends Component {
  render() {
    let jobs = (
      <Typography variant="title" gutterBottom align="center" className={cls.Typogra}>No trabajos</Typography>
    );
    if (this.props.jobs.length > 0) {
      jobs = this.props.jobs.map(job => (
        <CardJob
          job={job}/>
      ));
    }
    return (
      <Grid container justify="center" className={cls.MainDashboardAgent}>
        <Grid item xs={12} sm={5}>
          <Paper elevation={0}>
            <Typography variant="title" gutterBottom className={cls.Typogra}>Trabajos</Typography>
          </Paper>
        </Grid>  
        <Grid item xs={12} className={cls.PaginationTop}>
          <Paper elevation={0}>
            {jobs}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Paper elevation={0}>
            <Grid container justify="flex-end" align="right" alignItems="center" className={cls.PaginationTop}>
              <Grid item xs={12} sm={4}>
                <Paper elevation={0}>
                  <Typography variant="body1">1-2 de 15</Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={1}>
                <Paper elevation={0}>
                  <Typography variant="subheading">
                    <i className="material-icons">keyboard_arrow_left</i>
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={1}>
                <Paper elevation={0}>
                  <Typography variant="subheading">
                    <i className="material-icons">keyboard_arrow_right</i>
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default MainDashboardAgent;