import React, { Component } from 'react';

// Components
import {
  Grid,
} from 'material-ui';
import CardProfile from '../../../components/Client/CardProfile/CardProfile';

// Css
import cls from './Profile.css';

class Profile extends Component {
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

export default Profile;