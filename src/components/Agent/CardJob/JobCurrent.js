import React from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import moment from 'moment';
import {Avatar} from 'material-ui';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

// Css
import cls from './CardJob.css';
import Profile from './img/0.jpeg';

const styles = theme => ({
    paper: {
      padding: theme.spacing.unit * 1,
    },
});


const CardJob = ( props ) => {
  const { classes } = props;
  // let service_base = null;
  let frequency = null;
  // let services_addon = null;
  // props.jobCurrent.attributes.job_details.forEach(j => {
  //   if (j.service.type_service === 'base') {
  //     service_base = j.service.name;
  //   };
  // });
  // services_addon = props.jobCurrent.attributes.job_details.map(j => {
  //   if (j.service.type_service === 'addon') {
  //     return (
  //       <li key={j.id}>{j.service.name}</li>
  //     );
  //   };
  //   return null;
  // });
  // if (props.jobCurrent.attributes.frequency === 'one_time') {
  //   frequency = 'Una vez';
  // } else if (props.jobCurrent.attributes.frequency === 'weekly') {
  //   frequency = 'Semanal';
  // } else if (props.jobCurrent.attributes.frequency === 'fortnightly') {
  //   frequency = 'Quincenal';
  // } else if (props.jobCurrent.attributes.frequency === 'monthly') {
  //   frequency = 'Mensual';
  // };
  return (
    <div className={cls.root}>
    {console.log(props.jobCurrent)}
      <Grid container justify="center">
        <Grid item xs={6}>
            <Grid container alignItems="center" className={cls.CardJob}>
                
                <Grid item xs={12}>
                    <Paper className={classes.paper} elevation={0}>
                        <Grid container alignItems="center">
                            <Grid item xs={12} sm={6}>
                                <Paper className={`${cls.TitleCard} ${classes.paper}`} elevation={0}>service_base</Paper>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <Paper className={`${cls.StatuCard} ${classes.paper}`} elevation={0}>{frequency}</Paper>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Paper className={classes.paper} elevation={0}>
                                    <div className={cls.ContainerAvatar}>
                                        <div className={cls.imgAvatar}>
                                            <Avatar aria-label="Recipe" src={Profile}></Avatar>
                                        </div>
                                        <div className={cls.NameAvatar}>
                                            <Typography variant="subheading" gutterBottom>Rainiero Romero</Typography>
                                        </div>
                                    </div>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper} elevation={0}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Paper className={`${cls.SubTitleCard} ${classes.paper}`} elevation={0}>Servicios Adicionales</Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper className={classes.paper} elevation={0}>
                                  <ul>Servicio 1</ul>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper} elevation={0}>
                        <Grid container align="center">
                            <Grid item xs={12} sm={6}>
                                <Paper className={classes.paper} elevation={0}>
                                    <Typography variant="title" gutterBottom className={cls.TypograFechaPrecio}>
                                        {moment(props.date).format('MMMM D').replace(/\b\w/g, l => l.toUpperCase())}
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={6} className={cls.BordeFecha}>
                                <Paper className={classes.paper} elevation={0}>
                                    <Typography variant="title" gutterBottom className={cls.TypograFechaPrecio}>
                                        {moment(props.date).format('h:mm:ss a').replace(/\b\w/g, l => l.toUpperCase())}
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="display3" gutterBottom className={cls.TypograFechaPrecio}>30$s</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper className={`${cls.pageButtonJobCurrentDetalles} ${classes.paper}`}>
                        <Grid container align="center">
                            <Grid item xs={12}>
                                <Button className={cls.ButtonDetalles} fullWidth >VER DETALLES</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper className={`${cls.pageButtonJobCurrentCancelar} ${classes.paper}`}>
                        <Grid container align="center">
                            <Grid item xs={12}>
                                <Button className={cls.ButtonCancelar} fullWidth >CANCELAR</Button>
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

export default withStyles(styles) (CardJob);