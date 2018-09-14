import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import 'moment/locale/es';
import moment from 'moment';
import {
    Grid,
    Paper,
    Typography,
    Avatar,
    Button,
    Modal,
} from 'material-ui';
import Rating from 'react-rating';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Stars from './Stars';
// import Confirmation from './Confirmation'

// Css
import cls from './DetailsJob.css';

import * as actions from '../../../store/actions';
class DetailsJob extends Component {
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
  sendJobReview(wasSuccesful){
    if (wasSuccesful == true){
      this.props.onConfirmationPayment(localStorage.getItem('token'), this.props.match.params.job_id, wasSuccesful);
      this.props.history.push(`/agente/${this.props.match.params.job_id}/calificar`)
    } else {
      this.props.onConfirmationPayment(localStorage.getItem('token'), this.props.match.params.job_id, wasSuccesful);
      this.props.history.push('/agente')
    }
  }
  componentDidMount() {
    this.props.onJobDetails(localStorage.getItem('token'), this.props.match.params.job_id);
    this.props.onDisableButtonCustomer(localStorage.getItem('token'), this.props.match.params.job_id);
    this.props.onCanApply(localStorage.getItem('token'), this.props.match.params.job_id);
  };
  componentDidUpdate() {
    if (this.props.jobDetails.attributes && this.props.reviews.length === 0) {
      this.props.onReviews(localStorage.getItem('token'), this.props.jobDetails.attributes.customer.data.attributes.hashed_id);
    }
  };
  render() {
    let total = null;
    let service_base = null;
    let frequency = null;
    let services_addon = null;
    let services_parameter = null;
    let finishedAt = null;
    let startedAt = null;
    let finishedRecurrencyAt = null;
    let firstNameCustomer = null;
    let lastNameCustomer = null;
    let firstNameCustomerService = null;
    let lastNameCustomerService = null;    
    let avatar = null;
    let avatarCustomerJob = null;
    let commentCard = null;
    let rewiewsAverage = null;
    let reviewsCount = null;
    let details = null;
    let startedAtDetails = null;
    let finishedAtDetails = null;
    if(this.props.jobDetails.attributes){
      rewiewsAverage = this.props.jobDetails.attributes.customer_rewiews_average;
      reviewsCount = this.props.jobDetails.attributes.customer_rewiews_count;
      firstNameCustomer = this.props.jobDetails.attributes.customer.data.attributes.first_name;
      lastNameCustomer = this.props.jobDetails.attributes.customer.data.attributes.last_name;
      total = this.props.jobDetails.attributes.total;
      startedAt = moment.utc(this.props.jobDetails.attributes.started_at).format('MMMM D YYYY h:mm a').replace(/\b\w/g, l => l.toUpperCase());
      finishedRecurrencyAt = moment.utc(this.props.jobDetails.attributes.finished_recurrency_at).format('MMMM D YYYY h:mm a').replace(/\b\w/g, l => l.toUpperCase());
      finishedAt = moment.utc(this.props.jobDetails.attributes.finished_at).format('MMMM D h:mm a').replace(/\b\w/g, l => l.toUpperCase());
      avatar = this.props.jobDetails.attributes.customer.data.attributes.avatar.url;
      if (this.props.jobDetails.attributes.frequency === 'one_time') {
        frequency = 'Una vez';
      } else if (this.props.jobDetails.attributes.frequency === 'weekly') {
        frequency = 'Semanal';
      } else if (this.props.jobDetails.attributes.frequency === 'fortnightly') {
        frequency = 'Quincenal';
      } else if (this.props.jobDetails.attributes.frequency === 'monthly') {
        frequency = 'Mensual';
      };
      if(this.props.jobDetails.attributes.customer){
        avatar = this.props.jobDetails.attributes.customer.data.attributes.avatar.url;
      }
      if(this.props.reviews){
        if(this.props.reviews.length > 0 ){
          commentCard = this.props.reviews.map( cr => {
            return (
              <div className={cls.AvatarAgent} key={cr.attributes.id}>
                { avatar === null ? (
                  <div className={cls.Review}>
                    <div className={cls.ReviewHeader}>
                      <div className={cls.ReviewAvatar}>
                        <div className={cls.ReviewAvatarCircle}>
                          <div className={cls.AvatarInitials}>
                            {cr.attributes.owner.data.attributes.first_name.charAt(0).toUpperCase()}
                            {cr.attributes.owner.data.attributes.last_name.charAt(0).toUpperCase()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Avatar className={cls.AvatarInitials} src={cr.attributes.owner.data.attributes.avatar.url}></Avatar>
                )}
                  <div className={cls.ReviewName}>
                    <p>
                      {cr.attributes.owner.data.attributes.first_name} {cr.attributes.owner.data.attributes.last_name}
                    </p>
                    <div>
                      <Stars agentRewiewsAverage={cr.attributes.qualification}/>
                    </div>
                    <div className={cls.ReviewDetails}>
                      <p>{cr.attributes.comment}</p>
                    </div>
                  </div>
              </div>
            );
          })
        }else{
          commentCard = <Typography variant="title" gutterBottom align="center" className={cls.Typogra}>Sin comentarios</Typography>
        }
      }
      if(this.props.jobDetails.attributes.job_details.length > 0 ){
        this.props.jobDetails.attributes.job_details.map( detail => {
          if (detail.service.type_service === 'base') {
            service_base = detail.service.name;
          }
          return null;
        })
        services_parameter = 
        <ul className={cls.Ul}>
          {this.props.jobDetails.attributes.job_details.map( detail => {
            if (detail.service.type_service === 'parameter') {
              return (
                <li className={cls.Li} key={detail.id}>{detail.service.name} x {detail.value}</li>
              );
            }
            return null;
          })}
        </ul>
        services_addon = 
        <div>
          {this.props.jobDetails.attributes.job_details.length > 1 ? (
            <dt className={cls.TpWeightBold}>
              Servicios Adicionales
            </dt>
          ):(
            ""
          )}
          <ul className={cls.Ul}>
            {this.props.jobDetails.attributes.job_details.map( detail => {
              if (detail.service.type_service === 'addon') {
                return (
                  <li className={cls.Li} key={detail.id}>{detail.service.name} x {detail.value}</li>
                );
              }
              return null;
            })}
          </ul>
        </div>
      }
    }
    if (this.props.jobDetails.attributes){
      details = this.props.jobDetails.attributes.details
      firstNameCustomerService = this.props.jobDetails.attributes.customer.data.attributes.first_name
      lastNameCustomerService = this.props.jobDetails.attributes.customer.data.attributes.last_name
      avatarCustomerJob = this.props.jobDetails.attributes.customer.data.attributes.avatar.url
      startedAtDetails = this.props.jobDetails.attributes.started_at
      finishedAtDetails = this.props.jobDetails.attributes.finished_at
    }
    return (
      <div className={cls.JobDetailsServices}>
        <dl>
          <Grid item xs={12}>
            <Paper elevation={0}>
              {this.props.loading ? (
                <div className={cls.LoaderContainer}>
                  <Spinner />
                </div>
              ) : (
                <Grid container className={cls.DetailsJob}>
                  <Grid item xs={12} sm={5} md={5}>
                    <div className={cls.jobDetailHeader}></div>
                    <div className={cls.jobDetailsCard}>
                      <div className={cls.jobDetailsAvatar}>
                        {avatarCustomerJob === null ? (
                          <avatar className={cls.avatar}>
                            <div className={cls.avatarCircle}>
                              <div className={cls.avatarInitials}>
                                {firstNameCustomerService === null ? (<p></p>) : (firstNameCustomerService.charAt(0).toUpperCase())}
                                {lastNameCustomerService === null ? (<p></p>) : (lastNameCustomerService.charAt(0).toUpperCase())}
                              </div>
                            </div>
                          </avatar>
                        ) : (
                          <avatar className={cls.avatar}>
                            <div className={cls.avatarCircle} style={{backgroundImage: `url(${avatarCustomerJob})`, backgroundColor: '#676d73' }}>
                            </div>
                          </avatar>
                        )}
                      </div>
                      <p className={cls.jobDetailsCustomerName}>
                        {firstNameCustomerService} {lastNameCustomerService}
                      </p>
                      <p className={cls.jobDetailsCustomerAddress}>
                        {startedAt} - {finishedAt = 'Invalid Date' ? (finishedRecurrencyAt):(finishedAt)}
                      </p>
                    </div>
                    <dl>
                      <Grid container justify="center">
                        <Grid item xs={11}>
                          <Paper elevation={0}>
                            <dt className={cls.TpWeightBold}>Servicios contratados {frequency}</dt>
                            <dd className={cls.serviceBase}>{service_base}{services_parameter}</dd>
                          </Paper>
                        </Grid>
                        <Grid item xs={11}>
                          <Paper elevation={0}>
                            {/* <dt className={cls.TpWeightBold}>Servicios Adicionales</dt> */}
                            <dd>
                              {services_addon}
                            </dd>
                          </Paper>
                        </Grid>
                        <Grid item xs={11}>
                          <Paper elevation={0}>
                            <dt className={cls.TpWeightBold}>Detalles Adicionales</dt>
                            <dd style={{color: '#676d73'}}>
                              {details}
                            </dd>
                          </Paper>
                        </Grid>
                        <Grid item xs={11}>
                          <Paper elevation={0}>
                            <dt className={cls.TpWeightBold}>Precio</dt>
                            <dd className={cls.precio}>
                              ${total}
                            </dd>
                          </Paper>
                        </Grid>
                        {this.props.canApply.can_apply === true ? (
                          <Button className={cls.ButtonCancelar} onClick={() => this.props.onApplyProposal(localStorage.getItem('token'), this.props.match.params.job_id)}>APLICAR</Button>
                        ) : (
                          <p></p>
                          )
                        }
                      </Grid>
                    </dl>
                  </Grid>
                  <Grid item xs={12} sm={7} md={7}>
                    <Grid container className={cls.JobAgents}>
                      <div className={cls.JobAgentWrapper}>
                        <div className={cls.JobAgentsHeader}>
                          <h2 className={cls.Title}>Cliente</h2>
                        </div>
                        <div className={cls.QouteWrapper}>
                          <div className={cls.Qoute}>
                            <div className={cls.QouteHeader}>
                              <div className={cls.Avatar}>
                                <div className={cls.AgentAvatarCircle}>
                                {avatar === null ? (
                                  <div className={cls.AvatarInitials}>
                                    {firstNameCustomer === null ? (<p></p>) : (firstNameCustomer.charAt(0).toUpperCase())}
                                    {lastNameCustomer === null ? (<p></p>) : (lastNameCustomer.charAt(0).toUpperCase())}
                                  </div>
                                ) : (
                                  <Avatar src={avatar} className={cls.AvatarMargin}>
                                  </Avatar>
                                )}
                                </div>
                              </div>
                              <div className={cls.QouteName}>
                                <p>{firstNameCustomer} {lastNameCustomer}</p>
                              </div>
                            </div>
                            <div className={cls.QouteDetails}>
                              <Grid container className={cls.Container}>
                                <Grid item className={cls.Items} xs={6}>
                                  <Grid container justify="center">
                                    <div className={cls.StarsWrapper}>
                                      <div>
                                        <Rating initialRating={rewiewsAverage}
                                          readonly
                                          emptySymbol={<svg fill="#d3d4d5" className="_6fkXvDthZjQeULt0aYycL rLNwGbYp_J8ZBBDZBtgSD" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0c-.297 0-.543.2-.62.473l-1.574 4.86H.64c-.357 0-.64.31-.64.67 0 .22.11.417.277.534C.38 6.607 4.45 9.58 4.45 9.58s-1.563 4.8-1.593 4.877a.648.648 0 0 0 .977.76L8 12.183s4.073 2.967 4.167 3.034a.65.65 0 0 0 .37.116.65.65 0 0 0 .606-.876c-.03-.077-1.593-4.877-1.593-4.877s4.07-2.973 4.173-3.043A.654.654 0 0 0 16 6c0-.356-.277-.667-.634-.667H10.2L8.62.473A.643.643 0 0 0 8 0"></path></svg>}
                                          fullSymbol={<svg fill="#febe14" className="_6fkXvDthZjQeULt0aYycL rLNwGbYp_J8ZBBDZBtgSD" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0c-.297 0-.543.2-.62.473l-1.574 4.86H.64c-.357 0-.64.31-.64.67 0 .22.11.417.277.534C.38 6.607 4.45 9.58 4.45 9.58s-1.563 4.8-1.593 4.877a.648.648 0 0 0 .977.76L8 12.183s4.073 2.967 4.167 3.034a.65.65 0 0 0 .37.116.65.65 0 0 0 .606-.876c-.03-.077-1.593-4.877-1.593-4.877s4.07-2.973 4.173-3.043A.654.654 0 0 0 16 6c0-.356-.277-.667-.634-.667H10.2L8.62.473A.643.643 0 0 0 8 0"></path></svg>}
                                        />
                                        <div>
                                          <div className={cls.QouteDetailStats}>{reviewsCount} Opiniones</div>
                                        </div>
                                      </div>
                                    </div>
                                  </Grid>
                                </Grid>
                                <Grid item xs={6} className={cls.Items}>
                                  <Grid className={cls.QuoteNumberHires} container justify="center">
                                    <div>
                                      <div className={cls.TpBody}>{reviewsCount}</div>
                                      <div className={cls.QouteDetailStats}>Trabajos Completados</div>
                                    </div>
                                  </Grid>
                                </Grid>
                              </Grid>                      
                            </div>
                          </div>
                          {this.props.disableButtonCustomer.can_review === true ? (
                            <button
                              className={`${"btn"} ${cls.JobHire}`}
                              onClick={this.handleOpen}>CALIFICAR
                            </button>
                            ) : (
                              <p></p>
                            )
                          }
                          <Modal
                            open={this.state.openCancell}
                            onClose={this.handleClose}
                          >
                            <div className={cls.Modal}>
                              <div className={cls.CancelBookingModal}>
                                <div>
                                  <h2 className={cls.tytleModal}>Antes de continuar. Confirma que tú trabajo se realizo con éxito.</h2>
                                </div>
                                <div>
                                  <span className={cls.ButtonWrapper}>
                                    <button
                                      className={cls.ButtonAccept}
                                      onClick={(e) => this.sendJobReview(true)}
                                    >Si.
                                    </button>
                                  </span>
                                  <span className={cls.ButtonWrapper}>
                                    <button
                                      className={cls.ButtonCancell}
                                      onClick={(e) => this.sendJobReview(false)}
                                    >No.
                                    </button>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </Modal>
                        </div>
                        <Grid item xs={12}>
                          <div className={cls.JobAgentsHeader}>
                            <h2 className={cls.Title}>Opiniones</h2>
                          </div>
                        </Grid>
                        <Grid item xs={12} className={cls.AgentPostulate}>
                          <Paper elevation={0}>
                            {commentCard}
                          </Paper>
                        </Grid>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              )}
            </Paper>
          </Grid>
        </dl>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onJobDetails: (token, job_id) => dispatch(actions.jobDetails(token, job_id)),
  onReviews: (token, id) => dispatch(actions.reviews(token, id)),
  onApplyProposal: (token, job_id) => dispatch(actions.applyProposal(token, job_id)),
  onDisableButtonCustomer: (token, job_id) => dispatch(actions.disableButtonCustomer(token, job_id)),
  onCanApply: (token, job_id) => dispatch(actions.canApply(token, job_id)),
  onConfirmationPayment: (token, job_id, wasSuccesful) => dispatch(actions.confirmationPayment(token, job_id, wasSuccesful)),
});

const mapStateToProps = state => ({
  jobDetails: state.job.jobDetails,
  reviews: state.reviews.reviews,
  disableButtonCustomer: state.disableButtonCustomer.disableButtonCustomer,
  canApply: state.job.canApply,
  loading: state.job.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsJob);