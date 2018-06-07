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
                <CardProfile
                  user={this.props.user}
                  update={this.props.onUpdateUser}
                  updateAvatar={this.props.onUpdateAvatar}
                  loading={this.props.loading}/>
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
    user: state.user.user,
    loading: state.user.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchUser: (token) => dispatch(actions.fetchCurrentUser(token)),
    onUpdateUser: (token, form) => dispatch(actions.updatedCurrentUser(token, form)),
    onUpdateAvatar: (token, file) => dispatch(actions.updatedCurrentUserAvatar(token, file)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);