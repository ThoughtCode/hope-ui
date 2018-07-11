import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'moment/locale/es';
import moment from 'moment';
import {
    Grid,
    Paper,
    Typography,
    Avatar,
    Button,
} from 'material-ui';

// Css
import cls from './DetailsJob.css';

import * as actions from '../../../store/actions';

class DetailsJob extends Component {
  componentDidMount() {
    this.props.onJobDetails(localStorage.getItem('token'), this.props.match.params.job_id);
  };
  render() {
    // console.log(this.props)
    let total = null;
    let detail = null;
    let details = null;
    let service_base = null;
    let frequency = null;
    let services_addon = null;
    let finishedAt = null;
    if(this.props.jobDetails.attributes){
      total = this.props.jobDetails.attributes.total;
      finishedAt = moment(this.props.jobDetails.attributes.started_at).format('MMMM D h:mm a').replace(/\b\w/g, l => l.toUpperCase());
      if(this.props.jobDetails.attributes.job_details.length > 0 ){
        this.props.jobDetails.attributes.job_details.map( detail => {
          if (detail.service.type_service === 'base') {
            service_base = detail.service.name;
          }
          return null;
        })
        services_addon = this.props.jobDetails.attributes.job_details.map( detail => {
          if (detail.service.type_service === 'addon') {
            return (
              <ul>{detail.service.name}</ul>
            );
          }
          return null;
        })
      }
    }
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
                          <Typography variant="headline" className={cls.TitleDate}>{service_base}</Typography>
                          <Typography variant="caption" className={cls.TitleCaption}>{frequency}</Typography>
                          <Typography variant="caption" className={cls.TitleCaption}>
                            {/* {moment().format('MMMM D YYYY, h:mm:ss a').replace(/\b\w/g, l => l.toUpperCase())} */}
                            {finishedAt}
                          </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={12}>
                        <Paper className={cls.ServiceDate}>
                          <Typography variant="headline">Servicios Adicionales</Typography>
                          <Grid container className={cls.ServiceDate}>
                            <Grid item xs={12}>
                              <Paper elevation={0}>
                                {services_addon}
                              </Paper>
                            </Grid>
                          </Grid>
                        </Paper>
                      </Grid>
                      <Grid item xs={12}>
                        <Paper className={cls.ServiceDate}>
                            <Typography variant="display3" gutterBottom className={cls.TypograFechaPrecio}>{total}$</Typography>
                        </Paper>
                      </Grid>
                      <Button className={cls.ButtonCancelar} onClick={() => this.props.onApplyProposal(localStorage.getItem('token'), this.props.match.params.job_id)}>APLICAR</Button>
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

const mapDispatchToProps = dispatch => ({
  onJobDetails: (token, job_id) => dispatch(actions.jobDetails(token, job_id)),
  onApplyProposal: (token, job_id) => dispatch(actions.applyProposal(token, job_id)),
});

const mapStateToProps = state => ({
  jobDetails: state.job.jobDetails,
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsJob);