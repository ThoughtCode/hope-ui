import React from 'react';
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

const info = props => {
  let profile = null;
  if (props.jobCardInfo.id)  {
    profile = (
      <Grid container>
        <Grid item xs={12}>
          <Paper>
            <Grid container alignItems="center">
              <Grid item xs={12} sm={3}>
                <Paper elevation={0}>
                  <Grid container className={cls.CardInfo} align="center">
                    <Grid item xs={12}>
                      <Paper elevation={0}>
                        {props.jobCardInfo.attributes.agent === null ? (
                          <Avatar
                            className={cls.Avatar}
                            src={Image}
                          />
                        ) : (
                          <Avatar
                            className={cls.Avatar}
                            src={props.jobCardInfo.attributes.agent.avatar.url}
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
                          {props.jobCardInfo.attributes.agent.first_name} {props.jobCardInfo.attributes.agent.last_name}
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
                                  <Stars />
                                </Paper>
                              </Grid>
                              <Grid item xs={4}>
                                <Paper className={cls.CantReviews} elevation={0}>
                                  {props.jobCardInfo.attributes.agent_rewiews_count} Opiniones
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
                          <span>{props.jobCardInfo.attributes.agent.email}</span>
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid item xs={12}>
                      <Paper elevation={0}>
                        <Typography variant="subheading" gutterBottom>
                          <i className="fas fa-id-card"></i>
                          <span>{props.jobCardInfo.attributes.agent.national_id}</span>
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
                        <Button className={cls.ButtonContratar}>CALIFICAR</Button>
                      </Paper>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  };
  // console.log(props.jobCardInfo)
  return (
    <div>
      {profile}  
    </div>
  );
}

export default info;