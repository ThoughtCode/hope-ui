import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import {
  Grid,
} from 'material-ui';
import CardProfile from './CardInfo';

// Css
import cls from './CardAgentShow.css';

import * as actions from '../../../../store/actions';

class Profile extends Component {
  componentDidMount() {
    this.props.onFetchUser(localStorage.getItem('token'));
  }

  render() {
    return (
      <div>
        <Grid container justify="center" className={cls.Profile}>
          <Grid item xs={12} sm={8}>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <CardProfile
                  user={this.props.user}
                  loading={this.props.loading}
                  />
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
    loading: state.user.loading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchUser: (token) => dispatch(actions.fetchCurrentUser(token)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);