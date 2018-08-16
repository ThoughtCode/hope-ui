// Dependencias
import React, { Component } from 'react';
// import { connect } from 'react-redux';

// Componentes
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Table from './Table';
import DatetimeReport from './DatetimeReport';
// import MyJobsMain from '../../../components/Agent/MyJobsMain/MyJobsMain';
// import Spinner from '../../../components/UI/Spinner/Spinner';

// Css
import cls from './Report.css';

// import * as actions from '../../../store/actions';

class Report extends Component {
  render() {
    return (
      <div>
        <Grid container justify="center" className={cls.root}>
          <Grid item xs={12} sm={10} md={8}>
            <Paper elevation={0}>
              <Typography variant="title" gutterBottom className={cls.Typogra}>Reporte</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <Paper elevation={0}>
              <Grid container alignItems="center">
                <Grid item>
                  <Paper className={cls.ContenDatetime} elevation={0}>
                    <Grid item xs={6} sm={12} className={cls.ContenDate}>
                      <Typography variant="title" gutterBottom>Semana</Typography>
                    </Grid>  
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper className={cls.ContenDatetime} elevation={0}>
                    <Grid item xs={6} sm={12} className={cls.ContenDate}>                    
                      <DatetimeReport />
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <Grid container>
              <Grid item xs={6} sm={12}>
                <Paper elevation={0}>
                  <Grid container>
                    <Grid item xs={6} sm={2}>
                      <Typography variant="title" gutterBottom className={cls.SubTipogra}>Usuario</Typography>
                    </Grid>  
                    <Grid item xs={6} sm={10}>                    
                      <Typography variant="title" gutterBottom className={cls.SubTipogra}>Sebastian Remache</Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={6} sm={2}>
                      <Typography variant="title" gutterBottom className={cls.SubTipogra}>Periodo</Typography>
                    </Grid>  
                    <Grid item xs={6} sm={10}>                    
                      <Typography variant="title" gutterBottom className={cls.SubTipogra}>23 Jul 2018 - 29 Jul 2018</Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={6} sm={12}>
                      <Table />
                    </Grid> 
                  </Grid>
                  <Grid container>
                    <Grid item xs={6} sm={1}>
                      <Typography variant="title" gutterBottom className={cls.SubTipogra}>Nota:</Typography>
                    </Grid>  
                    <Grid item xs={6} sm={11}>                    
                      <Typography variant="title" gutterBottom className={cls.SubTipogra}>Los reportes se actualizan cada hora.</Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Report;