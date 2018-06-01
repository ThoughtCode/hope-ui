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
          <Grid item lg={6}>
            <Grid container>
              <Grid item lg={12}>
                <h1>Mi Perfil</h1>
              </Grid>
              <Grid item lg={12}>
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