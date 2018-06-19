import React from 'react';
import { Link } from 'react-router-dom';

// Components
import {
  Grid,
  Avatar,
} from 'material-ui';

// Css

import Image from '../../../../assets/avatar-default-300x300.jpg';

const info = props => {
  let profile = null;
  if (props.user.attributes) {
    profile = (
      <Grid container>
        <Grid item xs={12}>
          <Avatar
            alt="Adelle Charles"
            src={props.user.attributes.avatar.url || Image}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <i className="fas fa-user"></i>
          <span>{props.user.attributes.first_name} {props.user.attributes.last_name}</span>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Link to="#"><span>Opiniones de otros Clientes</span></Link>
        </Grid>
        <Grid item xs={6} sm={3}>
          <i className="fas fa-envelope"></i>
          <span>{props.user.attributes.email}</span>
        </Grid>
        <Grid item xs={6} sm={3}>
          <i className="fas fa-id-card"></i>
          <span>{props.user.attributes.national_id}</span>
        </Grid>
      </Grid>
    );
  };
  return (
    <div>
      {profile}  
    </div>
  );
}

export default info;