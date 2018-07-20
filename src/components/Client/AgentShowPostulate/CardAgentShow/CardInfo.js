import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Components
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  Button,
} from 'material-ui';

import * as actions from '../../../../store/actions';

// Css
import cls from './CardAgentShow.css'
import Image from '../../../../assets/avatar-default-300x300.jpg';
import Stars from '../../Jobs/JobShow/Stars';

class Info extends Component {
  acceptedProposal = (event, token, job_id, proposal_id) => {
    event.preventDefault();
    this.props.onAcceptedJob(token, job_id, proposal_id);
  }
  render() {
    let avatar = null;
    let firstName = null;
    let lastName = null;
    let email = null;
    let nationalId = null;
    let rewiewsAverage = null;
    let rewiewsCount = null;
    let proposal_id = null;
    let job_id = null;
    console.log(this.props.postulatCard);
    if (this.props.postulatCard) {
      avatar = this.props.postulatCard.agent.data.attributes.avatar.url;
      firstName = this.props.postulatCard.agent.data.attributes.first_name;
      lastName = this.props.postulatCard.agent.data.attributes.last_name;
      email = this.props.postulatCard.agent.data.attributes.email;
      nationalId = this.props.postulatCard.agent.data.attributes.national_id;
      rewiewsAverage = this.props.postulatCard.agent.data.attributes.rewiews_average;
      rewiewsCount = this.props.postulatCard.agent.data.attributes.rewiews_count;      
      proposal_id = this.props.postulatCard.hashed_id;
      job_id = this.props.postulatCard.job.hashed_id;
    }
    return (
      <div>
        <Grid container>
          <Grid item xs={12}>
            <Paper>
              <Grid container alignItems="center">
                <Grid item xs={12} sm={3}>
                  <Paper elevation={0}>
                    <Grid container className={cls.CardInfo} align="center">
                      <Grid item xs={12}>
                        <Paper elevation={0}>
                          {avatar === null ? (
                            <Avatar
                              className={cls.Avatar}
                              src={Image}
                            />
                          ) : (
                            <Avatar
                              className={cls.Avatar}
                              src={avatar}
                            />
                          )}
                        </Paper>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={5}>
                  <Paper elevation={0}>
                    <Grid className={cls.MidCard} container>
                      <Grid item xs={12}>
                        <Paper elevation={0}>
                          <Typography variant="headline" gutterBottom>
                            {firstName} {lastName} 
                          </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={12}>
                        <Paper elevation={0}>
                          <Link to="#">
                            <Typography variant="subheading" gutterBottom>
                              <Grid container>
                                <Grid item xs={5} sm={5}>
                                  <Paper elevation={0}>
                                    <Stars
                                      agentRewiewsAverage={rewiewsAverage}
                                    />
                                  </Paper>
                                </Grid>
                                <Grid item xs={6} sm={7}>
                                  <Paper className={cls.CantReviews} elevation={0}>
                                    {rewiewsCount} Opiniones
                                  </Paper>
                                </Grid>
                              </Grid>
                            </Typography>
                          </Link>
                        </Paper>  
                      </Grid>
                      <Grid item xs={12}>
                        <Paper elevation={0}>
                          <Typography variant="subheading" gutterBottom>
                            <i className="fas fa-envelope"></i>
                              {' ' + email}
                          </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={12}>
                        <Paper elevation={0}>
                          <Typography variant="subheading" gutterBottom>
                            <i className="fas fa-id-card"></i>
                              {' ' + nationalId}
                          </Typography>
                        </Paper>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Paper elevation={0}>
                    <Grid container className={cls.MidCard} justify="center">
                      <Grid item xs={5} sm={4}>
                        <Paper elevation={0}>
                          <Button
                            onClick={(event) => this.acceptedProposal(event,localStorage.getItem('token'), job_id, proposal_id)}
                            className={cls.ButtonContratar}>
                              CONTRATAR
                          </Button>
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
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAcceptedJob: (token, job_id, proposal_id) => dispatch(actions.acceptedJob(token, job_id, proposal_id)),
  };
};

export default connect(null, mapDispatchToProps)(Info);