import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  Button,
} from 'material-ui';

// Css
import cls from './CardAgentShow.css'
import Image from '../../../../assets/avatar-default-300x300.jpg';
import Stars from '../../Jobs/JobShow/Stars';

class Info extends Component {
  render() {
    let avatar
    let firstName
    let lastName
    let email
    let nationalId
    let rewiewsAverage
    let rewiewsCount
    if (this.props.postulatCard.agent) {
      // console.log(this.props.postulatCard.agent.data.attributes)
      avatar = this.props.postulatCard.agent.data.attributes.avatar.url;
      firstName = this.props.postulatCard.agent.data.attributes.first_name;
      lastName = this.props.postulatCard.agent.data.attributes.last_name;
      email = this.props.postulatCard.agent.data.attributes.email;
      nationalId = this.props.postulatCard.agent.data.attributes.national_id;
      rewiewsAverage = this.props.postulatCard.agent.data.attributes.rewiews_average;
      rewiewsCount = this.props.postulatCard.agent.data.attributes.rewiews_count;      
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
                    <Grid container>
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
                                <Grid item xs={4}>
                                  <Paper elevation={0}>
                                    <Stars
                                      agentRewiewsAverage={rewiewsAverage}
                                    />
                                  </Paper>
                                </Grid>
                                <Grid item xs={4}>
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
                              {email}
                          </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={12}>
                        <Paper elevation={0}>
                          <Typography variant="subheading" gutterBottom>
                            <i className="fas fa-id-card"></i>
                              {nationalId}
                          </Typography>
                        </Paper>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Paper elevation={0}>
                    <Grid container justify="center">
                      <Grid item xs={12} sm={4}>
                        <Paper elevation={0}>
                          <Button className={cls.ButtonContratar}>CONTRATAR</Button>
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

export default Info;