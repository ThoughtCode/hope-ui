import React, { Component } from 'react';

// Components
import {
  Grid,
} from 'material-ui';
import CardProfile from './CardInfo';

// Css
import cls from './CardAgentShow.css';
import Reviews from '../../../Agent/Reviews/Reviews';

class Profile extends Component {
  render() {
    // console.log(this.props.jobCard);
    let reviews = 0;
    let customer = 0;
    if(this.props.jobCard.attributes){
      reviews = this.props.jobCard.attributes.agent_rewiews
      customer = this.props.jobCard.attributes.customer
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
                    <Reviews
                      reviews={reviews}
                      customer={customer}
                    />
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