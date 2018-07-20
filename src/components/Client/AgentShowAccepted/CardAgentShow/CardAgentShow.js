import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import {
  Grid,
  Typography,
} from 'material-ui';
import CardProfile from './CardInfo';

// Css
import cls from './CardAgentShow.css';
import Reviews from '../../../Agent/Reviews/Reviews';

import * as actions from '../../../../store/actions';

class Profile extends Component {
  componentDidMount() {
    this.props.onDisableButton(localStorage.getItem('token'), this.props.job_id);
  }
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
          <Grid item xs={11} sm={12}>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <CardProfile
                  jobCardInfo={this.props.jobCard}
                  canReviewJob={this.props.disableButtonjob.can_review}
                />
              </Grid>
            </Grid>
            <Grid container justify="center">
              <Grid item xs={12} sm={12}>
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
const mapStateToProps = state => {
  return {
    token: state.auth.token || localStorage.getItem('token'),
    disableButtonjob: state.disableButton.disableButton,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onDisableButton: (token, job_id) => dispatch(actions.disableButton(token, job_id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps) (Profile);