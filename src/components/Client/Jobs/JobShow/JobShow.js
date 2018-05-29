import React, { Component } from 'react';

// Components
import {
  Grid,
  Paper,
  Divider,
  Typography,
  Avatar,
} from 'material-ui';

// Css
import cls from './JobShow.css';

class JobShow extends Component {
  render() {
    return (
      <Grid className={cls.JobShow} justify="center" container>
        <Grid item xs={11} sm={10} md={10} lg={10}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Paper className={cls.Job} elevation={1}>
                <Grid className={cls.ServiceDate} container justify="center">
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography variant="headline">
                      Mayo 30, 2017
                    </Typography>
                    <Typography variant="caption">
                      3:00 pm - 5:00 pm
                    </Typography>
                  </Grid>
                </Grid>
                <Divider/>
                <Grid className={cls.JobAgent} container justify="center">
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography variant="headline" align="center">
                      Agente
                    </Typography>
                  </Grid>
                  <div className={cls.AvatarAgent}>
                    <Avatar className={cls.AvatarMargin}>
                      RR
                    </Avatar>
                    <div className={cls.NameAgent}>
                      <Typography className={cls.Name} variant="subheading">
                        Rainiero Romero
                      </Typography>
                      <Typography className={cls.Name} variant="caption">
                        estrellas
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Divider />
                <Grid className={cls.Services} container justify="center">
                  <Grid className={cls.JobServices} item xs={12} sm={12} lg={12}>
                    <Typography variant="headline">
                      Servicios contratados
                    </Typography>
                    <Typography variant="subheading">
                      Limpieza de casa
                    </Typography>
                    <Typography variant="headline">
                      Servicios Adicionales
                    </Typography>
                    <Typography variant="subheading">
                      Limpieza de casa
                    </Typography>
                    <Typography variant="subheading">
                      Limpieza de casa
                    </Typography>
                    <Typography variant="subheading">
                      Limpieza de casa
                    </Typography>
                  </Grid>
                </Grid>
                <Divider/>
                <Grid className={cls.OtherAgents} container justify="center">
                  <Grid item xs={12} sm={12} lg={12}>
                    <Typography variant="headline" align="center">
                      Asignar Agente
                    </Typography>
                  </Grid>                  
                  <div className={cls.AvatarAgent}>
                    <Avatar className={cls.AvatarMargin}>
                      RR
                    </Avatar>
                    <div className={cls.NameAgent}>
                      <Typography className={cls.Name} variant="subheading">
                        Rainiero Romero
                      </Typography>
                      <Typography className={cls.Name} variant="caption">
                        estrellas
                      </Typography>
                    </div>
                  </div>
                  <div className={cls.AvatarAgent}>
                    <Avatar className={cls.AvatarMargin}>
                      RR
                    </Avatar>
                    <div className={cls.NameAgent}>
                      <Typography className={cls.Name} variant="subheading">
                        Rainiero Romero
                      </Typography>
                      <Typography className={cls.Name} variant="caption">
                        estrellas
                      </Typography>
                    </div>
                  </div>
                  <div className={cls.AvatarAgent}>
                    <Avatar className={cls.AvatarMargin}>
                      RR
                    </Avatar>
                    <div className={cls.NameAgent}>
                      <Typography className={cls.Name} variant="subheading">
                        Rainiero Romero
                      </Typography>
                      <Typography className={cls.Name} variant="caption">
                        estrellas
                      </Typography>
                    </div>
                  </div>
                  <div className={cls.AvatarAgent}>
                    <Avatar className={cls.AvatarMargin}>
                      RR
                    </Avatar>
                    <div className={cls.NameAgent}>
                      <Typography className={cls.Name} variant="subheading">
                        Rainiero Romero
                      </Typography>
                      <Typography className={cls.Name} variant="caption">
                        estrellas
                      </Typography>
                    </div>
                  </div>
                  <div className={cls.AvatarAgent}>
                    <Avatar className={cls.AvatarMargin}>
                      RR
                    </Avatar>
                    <div className={cls.NameAgent}>
                      <Typography className={cls.Name} variant="subheading">
                        Rainiero Romero
                      </Typography>
                      <Typography className={cls.Name} variant="caption">
                        estrellas
                      </Typography>
                    </div>
                  </div>
                  <div className={cls.AvatarAgent}>
                    <Avatar className={cls.AvatarMargin}>
                      RR
                    </Avatar>
                    <div className={cls.NameAgent}>
                      <Typography className={cls.Name} variant="subheading">
                        Rainiero Romero
                      </Typography>
                      <Typography className={cls.Name} variant="caption">
                        estrellas
                      </Typography>
                    </div>
                  </div>
                  <div className={cls.AvatarAgent}>
                    <Avatar className={cls.AvatarMargin}>
                      RR
                    </Avatar>
                    <div className={cls.NameAgent}>
                      <Typography className={cls.Name} variant="subheading">
                        Rainiero Romero
                      </Typography>
                      <Typography className={cls.Name} variant="caption">
                        estrellas
                      </Typography>
                    </div>
                  </div>
                  <div className={cls.AvatarAgent}>
                    <Avatar className={cls.AvatarMargin}>
                      RR
                    </Avatar>
                    <div className={cls.NameAgent}>
                      <Typography className={cls.Name} variant="subheading">
                        Rainiero Romero
                      </Typography>
                      <Typography className={cls.Name} variant="caption">
                        estrellas
                      </Typography>
                    </div>
                  </div>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default JobShow;