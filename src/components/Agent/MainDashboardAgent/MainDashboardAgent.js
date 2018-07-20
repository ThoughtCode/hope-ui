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
        <Paper key={job.id} className={cls.CardJob} elevation={0}>
          <CardJob
            job={job}
            apply={this.props.applyProposal}/>
        </Paper>
      ));
    }
    return (
      <Grid container justify="center" className={cls.MainDashboardAgent}>
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <Paper elevation={0}>
            <Typography variant="title" gutterBottom className={cls.Typogra}>Trabajos</Typography>
          </Paper>
        </Grid>  
        <Grid item xs={12} className={cls.PaginationTop}>
          {jobs}
        </Grid>
        {this.props.total_pages > 0 ? (
          <Grid item xs={10} sm={5}>
            <Paper elevation={0}>
              <Grid container justify="flex-end" align="right" alignItems="center" className={cls.PaginationTop}>
                <Grid item xs={4} sm={4}>
                  <Paper elevation={0}>
                    <Typography variant="body1">{this.props.current_page} de {this.props.total_pages}</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={2} sm={1}>
                  <Paper elevation={0}>
                    <Typography variant="subheading">
                      <i onClick={this.props.goBack} className="material-icons">keyboard_arrow_left</i>
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={2} sm={1}>
                  <Paper elevation={0}>
                    <Typography variant="subheading">
                      <i onClick={this.props.goNext} className="material-icons">keyboard_arrow_right</i>
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ) : null}
      </Grid>
    );
  }
}

export default MainDashboardAgent;