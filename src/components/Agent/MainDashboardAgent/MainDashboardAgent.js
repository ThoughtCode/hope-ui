// Dependencias
import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

// Componentes
import CardJob from '../../../components/Agent/CardJob/CardJob';
import cls from './MainDashboardAgent.css'

class MainDashboardAgent extends Component {
  render() {

    return (
        <Grid container justify="center" className={cls.MainDashboardAgent}>
          <Grid item xs={12} sm={10}>
            <Paper elevation={0}>
              <Typography variant="title" gutterBottom className={cls.Typogra}>Trabajos</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0}>
              <CardJob />
            </Paper>
          </Grid>
        </Grid>
    );
  }
}

export default MainDashboardAgent;