import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/es';

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
    console.log(this.props.job)
    let agent = (
      <Grid container></Grid>
    );
    let agents = null;
    let date = null;
    let caption = null;
    let services = null;
    if (this.props.job.attributes) {
      date = moment(this.props.job.attributes.started_at).format('MMMM D, YYYY h:mm:ss a').replace(/\b\w/g, l => l.toUpperCase())
      caption = `${moment(this.props.job.attributes.started_at).format('h:mm a')} - ${moment(this.props.job.attributes.finished_at).format('h:mm a')}`
      services = (
        <Grid className={cls.Services} container justify="center">
          <Grid className={cls.JobServices} item xs={12} sm={6}>
            <Typography variant="headline">
              Servicios contratados
            </Typography>
            <Typography variant="subheading">
              {this.props.job.attributes.job_details.map(detail => {
                if (detail.service.type_service === 'base') {
                  return detail.service.name
                }
                return null;
              })}
            </Typography>
          </Grid>
          <Grid className={cls.JobServices} item xs={12} sm={6}>
            <Typography variant="headline">
              Servicios Adicionales
            </Typography>
            {this.props.job.attributes.job_details.map(detail => {
              if (detail.service.type_service === 'addon') {
                if (detail.service.quantity) {
                  return (
                    <Typography key={detail.id} variant="subheading">
                      {detail.service.name} x{detail.value}
                    </Typography>
                  );
                } else {
                  return (
                    <Typography key={detail.id} variant="subheading">
                      {detail.service.name}
                    </Typography>
                  );
                }
              }
              return null;
            })}
          </Grid>
        </Grid>
      );
      if (this.props.job.attributes.agent ) {
        agent = (
          <Grid className={cls.JobAgent} container justify="center">        
            <Grid item xs={12} sm={12}>
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
        );
      }
      if (this.props.job.attributes.proposals.length === 0) {
        agents = (
          <Grid className={cls.OtherAgents} container justify="center">
            <Grid item xs={12} sm={6}>
              <Typography variant="headline" align="center">
                Sin agente asignado.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="headline" align="center">
                Sin agentes postulado.
              </Typography>
            </Grid>                  
          </Grid>
        );
      } else {
        agents = (
          <Grid className={cls.OtherAgents} container justify="center">
            <Grid item xs={12} sm={6}>
              <Typography variant="headline" align="center">
                Asignar Agente
              </Typography>
            </Grid>
            {this.props.job.attributes.proposals.map(proposal => {
              return (
                <div key={proposal.id} className={cls.AvatarAgent}>
                  <Avatar className={cls.AvatarMargin}>
                    RR
                  </Avatar>
                  <div className={cls.NameAgent}>
                    <Typography className={cls.Name} variant="subheading">
                      {proposal.agent.first_name} {proposal.agent.last_name}
                    </Typography>
                    <Typography className={cls.Name} variant="caption">
                      estrellas
                    </Typography>
                  </div>
                </div>
              );
            })}                  
          </Grid>
        );
      }
    }

    return (
      <Grid className={cls.JobShow} justify="center" container>
        <Grid item xs={5}>
          <Grid container>
            <Grid item xs={12}>
              <Paper className={cls.Job} elevation={1}>
                <Grid className={cls.ServiceDate} container justify="center">
                  <Grid item xs={12}>
                    <Typography variant="headline">
                      {date}
                    </Typography>
                    <Typography variant="caption">
                      {caption}
                    </Typography>
                  </Grid>
                </Grid>
                <Divider/>
                {agent}
                <Divider />
                {services}
                <Divider/>
                {agents}
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default JobShow;