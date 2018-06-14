// Dependencias
import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

// Componentes
import cls from './JobClient.css';
import MainJobClient from '../MainJobClient/MainJobClient'

class JobClient extends Component {
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
                                    <MainJobClient />
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

export default JobClient;