// Dependencias
import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

// Componentes
import cls from './MisTrabajos.css';
import MenuBar from '../../MenuBar/MenuBarAgent';
import MainMisTrabajos from '../../../components/Agent/MainMisTrabajos/MainMisTrabajos'

class MisTrabajos extends Component {
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
                                    <MainMisTrabajos />
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

export default MisTrabajos;