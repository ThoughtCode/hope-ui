import React from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import moment from 'moment';
import {Avatar} from 'material-ui';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

// Css
import cls from './CardJob.css';
import Profile from './img/0.jpeg';
import CheckBox from './CheckBox';

const styles = theme => ({
    paper: {
      padding: theme.spacing.unit * 1,
    },
});

function CardJob(props) {
  const { classes } = props;

  return (
    <div className={cls.root}>
      <Grid container justify="center">
        <Grid item xs={5}>
            <Grid container alignItems="center" className={cls.CardJob}>
                
                <Grid item xs={12}>
                    <Paper className={classes.paper} elevation={0}>
                        <Grid container alignItems="center">
                            <Grid item xs={12} sm={6}>
                                <Paper className={`${cls.TitleCard} ${classes.paper}`} elevation={0}>Limpieza de Casa</Paper>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <Paper className={`${cls.StatuCard} ${classes.paper}`} elevation={0}>Mensual</Paper>
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
                                    <CheckBox />
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
                                <Typography variant="display3" gutterBottom className={cls.TypograFechaPrecio}>30$</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper className={`${cls.pageButtonActive} ${classes.paper}`}>
                        <Grid container align="center">
                            <Grid item xs={12}>
                                <Button variant="contained" className={cls.Button} fullWidth >APLICAR</Button>
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

CardJob.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (CardJob);