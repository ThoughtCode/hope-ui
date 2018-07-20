import React, { Component } from 'react';
import {
  Link,
} from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/es';

// Components
import {
  Grid,
  Paper,
  Typography,
  Avatar,
  Button,
  Modal,
} from 'material-ui';
import CancelBookingModal from '../CancelBookingModal/CancelBookingModal';
import Stars from './Stars'

// Css
import cls from './JobShow.css';

class JobShow extends Component {
  state = {
    openCancell: false,
  }

  handleClose = () => {
    this.setState({
      openCancell: false,
    });
  };
  
  handleOpen = () => {
    this.setState({
      openCancell: true,
    });
  }
  
  render() {
    let date = null;
    let caption = null;
    let services = null;
    let frequency = null;
    let agents = null;
    let agentTitle = null;
    let button = null;
    if (this.props.job.attributes) {
      if (this.props.job.attributes.can_cancel) {
        button = (
          <Button
          className={cls.ButtonCancelar}
          onClick={() => this.props.cancelled(localStorage.getItem('token'), this.props.job.id)}>
            CANCELAR TRABAJO
          </Button>
        )
      } else {
        button = (
          <Button
          className={cls.ButtonCancelar}
          onClick={this.handleOpen}>
            CANCELAR TRABAJO
          </Button>
        )
      }
      
      if (this.props.job.attributes.status === 'completed') {
        button = null;
      }
      date = moment(this.props.job.attributes.started_at).format('MMMM D, YYYY').replace(/\b\w/g, l => l.toUpperCase());
      caption = `${moment(this.props.job.attributes.started_at).format('h:mm a')} - ${moment(this.props.job.attributes.finished_at).format('h:mm a')}`;
      if (this.props.job.attributes.frequency === 'one_time') {
        frequency = 'Una vez';
      } else if (this.props.job.attributes.frequency === 'fortnightly') {
        frequency = 'Quincenal';
      } else if (this.props.job.attributes.frequency === 'weekly') {
        frequency = 'Semanal';
      } else if (this.props.job.attributes.frequency === 'monthly') {
        frequency = 'Mensual';
      }
      if (this.props.job.attributes.agent === null) {
        agentTitle = 'Agentes Postulados';
        agents = this.props.job.attributes.proposals.data.length > 0 ?
        this.props.job.attributes.proposals.data.map(p => (
          <Grid key={p.id} container className={cls.AgentPostulate}>
              <Grid item xs={12}>
                <Paper>
                  <div className={cls.AvatarAgent}>
                    <Link 
                      className={cls.Link}
                      to={`/cliente/trabajo/${this.props.job.id}/agente/postulado/${p.id}`}>
                      {p.attributes.agent.data.attributes.avatar.url === null ? (
                        <Avatar className={cls.AvatarMargin}>
                          {p.attributes.agent.data.attributes.first_name.charAt(0).toUpperCase()}{p.attributes.agent.data.attributes.last_name.charAt(0).toUpperCase()}
                        </Avatar>
                      ) : (
                        <Avatar 
                        className={cls.AvatarMargin}
                        src={p.attributes.agent.data.attributes.avatar.url}>
                        </Avatar>
                      )}
                    </Link>
                    <div className={cls.NameAgent}>
                      <Typography className={cls.Name} variant="subheading">
                        {p.attributes.agent.data.attributes.first_name} {p.attributes.agent.data.attributes.last_name}
                      </Typography>
                      <Typography className={cls.Name} variant="caption">
                        <Stars
                          agentRewiewsAverage={p.attributes.agent_rewiews_average}
                          />
                      </Typography>
                      <Typography className={cls.Name} variant="caption">
                        {p.attributes.agent_rewiews_count} Opiniones
                      </Typography>
                    </div>
                    <Button
                      onClick={(event) => this.props.accepted(event,localStorage.getItem('token'), this.props.job.id, p.id)}
                      className={cls.ButtonContratar}>
                        CONTRATAR
                    </Button>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          ))
          : (
          <div>
            <p>No hay agentes asigandos</p>
          </div>
        );
      } else {
        agentTitle = 'Agente Contratado';
        agents = (
          <Grid item xs={12} className={cls.AgentPostulate}>
            <Paper>
              <div className={cls.AvatarAgent}>
                {this.props.job.attributes.agent.avatar.url === null ? (
                  <Avatar className={cls.AvatarMargin}>
                    {this.props.job.attributes.agent.first_name.charAt(0)}{this.props.job.attributes.agent.last_name.charAt(0)}
                  </Avatar>
                ) : (
                  <Avatar 
                  className={cls.AvatarMargin}
                  src={this.props.job.attributes.agent.avatar.url}>
                  </Avatar>
                )}
                <div className={cls.NameAgent}>
                  <Typography className={cls.Name} variant="subheading">
                    {this.props.job.attributes.agent.first_name} {this.props.job.attributes.agent.last_name}
                  </Typography>
                  <Typography className={cls.Name} variant="caption">
                    <Stars 
                      agentRewiewsAverage={this.props.job.attributes.agent_rewiews_average}
                      />
                  </Typography>
                  <Typography className={cls.Name} variant="caption">
                    {this.props.job.attributes.agent_rewiews_count} Opiniones
                  </Typography>
                </div>
                <Button
                  className={cls.ButtonContratar}
                  component={Link}
                  to={`/cliente/trabajo/${this.props.job.id}/agente/contratado`}
                  >
                  VER PERFIL
                </Button>
              </div>
            </Paper>
          </Grid>
        );
      }
      services = (
        <Grid className={cls.Services} container>
          <Grid item xs={12}>
            <Typography variant="headline">
              Servicios contratados
            </Typography>
            <Typography variant="subheading" className={cls.subServicios}>
              {this.props.job.attributes.job_details.map(detail => {
                if (detail.service.type_service === 'base') {
                  return detail.service.name
                }
                return null;
              })}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="headline" className={cls.HeadService}>
              Servicios Adicionales
            </Typography>
            {this.props.job.attributes.job_details.map(detail => {
              if (detail.service.type_service === 'addon') {
                if (detail.service.quantity) {
                  return (
                    <Typography key={detail.id} variant="subheading" className={cls.subServicios}>
                      {detail.service.name} x{detail.value}
                    </Typography>
                  );
                } else {
                  return (
                    <Typography key={detail.id} variant="subheading" className={cls.subServicios}>
                      {detail.service.name}
                    </Typography>
                  );
                }
              }
              return null;
            })}
            <Typography variant="headline" className={cls.HeadService}>
              Detalles a considerar
            </Typography>
            <Typography variant="subheading" className={cls.subServicios}>
              {this.props.job.attributes.details}
            </Typography>
          </Grid>
        </Grid>
      );
    }
    return (
      <div>
        <Grid container justify="center">
          <Grid item xs={12} md={12} lg={10}>
            <Paper elevation={0}>
              <Grid container className={cls.JobShow}>
                <Grid item xs={12} md={6}>
                  <Paper elevation={0}>
                    <Grid container className={cls.ServiceDate}>
                      <Grid item xs={12}>
                        <Paper>
                          <Typography variant="headline" className={cls.TitleDate}>{date}</Typography>
                          <Typography variant="caption" className={cls.TitleCaption}>{caption}</Typography>
                          <Typography variant="caption" className={cls.TitleCaption}>{frequency}</Typography>
                        </Paper>
                        <Paper>
                        </Paper>
                      </Grid>
                      <Grid item xs={12}>
                        <Paper>{services}</Paper>
                      </Grid>
                      {button}
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={0}>
                    <Grid container className={cls.ServiceDate}>
                      <Grid item xs={12}>
                        <Paper elevation={0}>
                          <Typography variant="headline">
                            {agentTitle}
                          </Typography>
                        </Paper>
                      </Grid>
                      {agents}
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Modal
          open={this.state.openCancell}
          onClose={this.handleClose}
        >
          <div className={cls.Modal}>
            <CancelBookingModal
              close={this.handleClose}
              cancelled={this.props.cancelled}
              job_id={this.props.job.id} />
          </div>
        </Modal>
      </div>
    )
  }
}

export default JobShow;
