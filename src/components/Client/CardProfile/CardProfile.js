import React from 'react';
import { Link, NavLink, Route } from 'react-router-dom';

// Components
import {
 Grid, Avatar,
} from 'material-ui';

// Css
import cls from './CardProfile.css';

// Test
import Image from '../../../assets/avatar-default-300x300.jpg';

const cardProfile = props => {
  return (
    <div className={cls.CardProfile}>
      <Grid container>
        <Grid item lg={3}>
            <div>
              <ul className={cls.SideNav}>
                <Route path="/cliente/perfil" exact children={({match}) => (
                  <li className={`${cls.SideItem} ${match ? cls.IsSelected : null}`}>
                    <NavLink to="/cliente/perfil">Perfil</NavLink>
                  </li>
                )}/>
                <Route path="/cliente/perfil/contraseña" exact children={({match}) => (
                  <li className={`${cls.SideItem} ${match ? cls.IsSelected : null}`}>
                    <NavLink to="/cliente/perfil/contraseña">Contraseña</NavLink>
                  </li>
                )}/>
                <Route path="/cliente/perfil/propiedades" exact children={({match}) => (
                  <li className={`${cls.SideItem} ${match ? cls.IsSelected : null}`}>
                    <NavLink to="/cliente/perfil/propiedades">Propiedades</NavLink>
                  </li>
                )}/>
                <Route path="/cliente/perfil/metodo-pago" exact children={({match}) => (
                  <li className={`${cls.SideItem} ${match ? cls.IsSelected : null}`}>
                    <NavLink to="/cliente/perfil/metodo-pago">Metodo de pago</NavLink>
                  </li>
                )}/>
              </ul>
            </div>
        </Grid>
        <Grid item lg={9}>
          <Grid container className={cls.CardContainer}>
            <div className={cls.CardPrincipal}>
              <div>
                <Link className={cls.ButtonEdit} to="#"><span>Editar</span></Link>
                <h3 className={cls.CardTitle}><span>Perfil</span></h3>
                <Grid className={cls.CardPrincipalAccount} container>
                  <Grid item lg={4}>
                    <div className={cls.Container}>
                      <Grid container justify="center">
                        <Avatar
                          alt="Adelle Charles"
                          src={Image}
                          className={cls.Avatar}/>
                      </Grid>
                    </div>
                  </Grid>
                  <Grid item lg={8}>
                    <div className={cls.Container}>
                      <Grid container>
                        <ul className={cls.AccountList}>
                          <li>
                            <i className="fas fa-user"></i>
                            <span>Rai Romero</span>
                          </li>
                          <li>
                            <i className="fas fa-envelope"></i>
                            <span>Rainieromadrid@gmail.com</span>
                          </li>
                          <li>
                            <i className="fas fa-phone"></i>
                            <span>123456789</span>
                          </li>
                          <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Working Up</span>
                          </li>
                          <li>
                            <Link className={cls.ButtonLogout} to="#"><span>Cerrar Sesion</span></Link>
                          </li>
                        </ul>
                      </Grid>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default cardProfile;