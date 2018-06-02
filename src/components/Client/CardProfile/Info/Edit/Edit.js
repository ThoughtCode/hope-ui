import React from 'react';
import { Link } from 'react-router-dom';

// Components
import {
  Grid,
  Avatar,
} from 'material-ui';

// Css
import cls from './Edit.css';

import Image from '../../../../../assets/avatar-default-300x300.jpg';

const edit = props => {
  return (
    <div className={cls.Div}>
      <h3 className={cls.CardTitle}><span>Actualizar Perfil</span></h3>
      <form className={cls.Form}>
        <Grid container>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <div className={cls.Container}>
              <Grid container justify="center">
                <div className={cls.AvatarContainer}>
                  <img className={cls.Image} src={Image} alt="profile" />
                  <input id="avatar" type="file" className={cls.AvatarFile} name="avatar"/>
                </div>  
                <label for="avatar">
                  <span>Subir nueva foto</span>
                </label>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <div className={cls.Container}>
              <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={6} className={cls.FormItem}>
                  <Grid container>
                    <label for="first_name"><span>Nombre</span></label>
                    <input className={cls.Input} type="text" name="first_name" value="Rai"/>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12} className={cls.FormItem} md={12} lg={6}>
                  <Grid container>
                    <label for="first_name"><span>Apellido</span></label>
                    <input className={cls.Input} type="text" name="first_name" value="Rai"/>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={6} className={cls.FormItem}>
                  <Grid container>
                    <label for="first_name"><span>Email</span></label>
                    <input className={cls.Input} type="text" name="first_name" value="Rai"/>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={6} className={cls.FormItem}>
                  <Grid container>
                    <label for="first_name"><span>Telefono</span></label>
                    <input className={cls.Input} type="text" name="first_name" value="Rai"/>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12} className={cls.FormItem}>
                  <Grid container>
                    <Link className={cls.Button} to="">
                      Cancelar
                    </Link>
                    <button className={cls.ButtonSave}><span>Guardar</span></button>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default edit;