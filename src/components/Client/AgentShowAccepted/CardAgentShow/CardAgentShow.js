import React, { Component } from 'react';

// Components
import {
  Grid,
  Typography,
} from 'material-ui';
import CardProfile from './CardInfo';

// Css
import cls from './CardAgentShow.css';
import Reviews from '../../../Agent/Reviews/Reviews';

class Profile extends Component {
  render() {
    let reviews = null;
    if (this.props.jobCard.attributes) {
      if (this.props.jobCard.attributes.agent_rewiews.data.length > 0) {
        reviews = this.props.jobCard.attributes.agent_rewiews.data.map( rr => (
          <Reviews review={rr} />
        ));
      }else{
        reviews = <Typography variant="title" gutterBottom align="center" className={cls.Typogra}>Sin comentarios</Typography>
      }
    }
    return (
      <div>
        <Grid container justify="center" className={cls.Profile}>
          <Grid item xs={12} sm={8}>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <CardProfile
                  jobCardInfo={this.props.jobCard} />
              </Grid>
            </Grid>
            <Grid container justify="center">
              <Grid item xs={12} sm={8}>
                <Grid container>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    {reviews}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Profile;