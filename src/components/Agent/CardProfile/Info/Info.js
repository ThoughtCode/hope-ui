import React from 'react';
import { Link } from 'react-router-dom';

// Components
import {
  Grid,
  Avatar,
} from 'material-ui';

// Css
import cls from './Info.css';

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
                  <Link className={cls.ButtonLogout} to="#"><span>Cerrar Sesion</span></Link>
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
      <Link className={cls.ButtonEdit} to="/agente/perfil/info/editar"><span>Editar</span></Link>
      <h3 className={cls.CardTitle}><span>Perfil</span></h3>
      {profile}  
    </div>
  );
}

export default info;