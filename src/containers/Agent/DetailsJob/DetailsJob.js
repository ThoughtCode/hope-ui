import React, { Component } from 'react';
import 'moment/locale/es';
import moment from 'moment';
import {
    Grid,
    Paper,
    Typography,
    Avatar,
    Button,
} from 'material-ui';

// Components
import CheckBox from './CheckBox';

// Css
import cls from './DetailsJob.css';

class DetailsJob extends Component {
  render() {
    return (
      <div>
        <Grid container justify="center">
          <Grid item xs={8}>
            <Paper elevation={0}>
              <Grid container className={cls.DetailsJob}>
                <Grid item xs={5}>
                  <Paper elevation={0}>
                    <Grid container className={cls.ServiceDate}>
                      <Grid item xs={12}>
                        <Paper>
                          <Typography variant="headline" className={cls.TitleDate}>Limpieza de Casa</Typography>
                          <Typography variant="caption" className={cls.TitleCaption}>Mensual</Typography>
                          <Typography variant="caption" className={cls.TitleCaption}>
                            {moment().format('MMMM D YYYY, h:mm:ss a').replace(/\b\w/g, l => l.toUpperCase())}
                          </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={12}>
                        <Paper className={cls.ServiceDate}>
                            <Typography variant="headline">Servicios Adicionales</Typography>
                            <CheckBox/>
                        </Paper>
                      </Grid>
                      <Grid item xs={12}>
                        <Paper className={cls.ServiceDate}>
                            <Typography variant="display3" gutterBottom className={cls.TypograFechaPrecio}>30$</Typography>
                        </Paper>
                      </Grid>
                      <Button className={cls.ButtonCancelar}>APLICAR</Button>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={7}>
                  <Paper elevation={0}>
                    <Grid container className={cls.ContenUserCliente}>
                      <Grid item xs={12}>
                        <Paper elevation={0}><Typography variant="headline">Cliente</Typography></Paper>
                      </Grid>
                      <Grid item xs={12} className={cls.AgentPostulate}>
                        <Paper elevation={0}>
                          <div className={cls.AvatarAgent}>
                            <Avatar className={cls.AvatarMargin}>
                              RR
                            </Avatar>
                            <div className={cls.NameAgent}>
                              <Typography className={cls.Name} variant="subheading">
                                  Rainiero Romero
                              </Typography>
                            </div>
                            <Typography className={cls.Name} variant="caption">
                                estrellas
                            </Typography>
                          </div>
                        </Paper>
                      </Grid>
                      <Grid item xs={12}>
                        <Paper elevation={0}><Typography variant="headline">Opiniones</Typography></Paper>
                      </Grid>
                      <Grid item xs={12} className={cls.AgentPostulate}>
                        <Paper elevation={0}>
                          <div className={cls.AvatarAgent}>
                            <Avatar className={cls.AvatarMargin}>
                              RR
                            </Avatar>
                            <div className={cls.NameAgent}>
                              <Typography variant="subheading">
                                  Rainiero Romero
                              </Typography>
                              <Typography variant="caption">
                                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo tempora adipisci ipsam temporibus sapiente in quidem dolores modi numquam hic odit maiores nemo fugit voluptates."
                              </Typography>
                            </div>
                          </div>
                        </Paper>
                      </Grid>
                      <Grid item xs={12} className={cls.AgentPostulate}>
                        <Paper elevation={0}>
                          <div className={cls.AvatarAgent}>
                            <Avatar className={cls.AvatarMargin}>
                              RR
                            </Avatar>
                            <div className={cls.NameAgent}>
                              <Typography variant="subheading">
                                  Rainiero Romero
                              </Typography>
                              <Typography variant="caption">
                                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo tempora adipisci ipsam temporibus sapiente in quidem dolores modi numquam hic odit maiores nemo fugit voluptates."
                              </Typography>
                            </div>
                          </div>
                        </Paper>
                      </Grid>
                      <Grid item xs={12}>
                        <Paper elevation={0}>
                          <div className={cls.AvatarAgent}>
                            <Avatar className={cls.AvatarMargin}>
                              RR
                            </Avatar>
                            <div className={cls.NameAgent}>
                              <Typography variant="subheading">
                                  Rainiero Romero
                              </Typography>
                              <Typography variant="caption">
                                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo tempora adipisci ipsam temporibus sapiente in quidem dolores modi numquam hic odit maiores nemo fugit voluptates."
                              </Typography>
                            </div>
                          </div>
                        </Paper>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default DetailsJob;