import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import {
  Grid,
} from 'material-ui';
import CardProfile from '../../../components/Client/CardProfile/CardProfile';

// Css
import cls from './Profile.css';

import * as actions from '../../../store/actions';
import { FETCH_SERVICE_START } from '../../../store/actions/actionTypes';

class Profile extends Component {
  componentDidMount() {
    this.props.onFetchUser(localStorage.getItem('token'));
  }

  render() {
    return (
      <div>
        <Grid container justify="center" className={cls.Profile}>
          <Grid item xs={12} sm={11} md={8} lg={6}>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <h1>Mi Perfil</h1>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <CardProfile />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchUser: (token) => dispatch(actions.fetchCurrentUser(token)),
  }
}

export default connect(null, mapDispatchToProps)(Profile);