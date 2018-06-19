import React from 'react';
import { Link } from 'react-router-dom';

// Components
import {
  Grid,
  Avatar,
} from 'material-ui';

// Css
import cls from './CardAgentShow.css';

import Image from '../../../../assets/avatar-default-300x300.jpg';

const info = props => {
  let profile = null;
  if (props.user.attributes) {
    profile = (
      <Grid className={cls.CardPrincipalAccount} container>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className={cls.Container}>
            <Grid container justify="center">
              <Avatar
                alt="Adelle Charles"
                src={props.user.attributes.avatar.url || Image}
                className={cls.Avatar}/>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <div className={cls.Container}>
            <Grid container>
              <ul className={cls.AccountList}>
                <li>
                  <i className="fas fa-user"></i>
                  <span>{props.user.attributes.first_name} {props.user.attributes.last_name}</span>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <span>{props.user.attributes.email}</span>
                </li>
                <li>
                  <i className="fas fa-id-card"></i>
                  <span>{props.user.attributes.national_id}</span>
                </li>
                <li>
                  <Link className={cls.ButtonLogout} to="#"><span>Opiniones de otros Clientes</span></Link>
                </li>
              </ul>
            </Grid>
          </div>
        </Grid>
      </Grid>
    );
  };
  return (
    <div className={cls.Div}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
            <h1>Name</h1>
        </Grid>
        {profile}  
    </div>
  );
}

export default info;