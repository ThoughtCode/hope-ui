import React from 'react';
import { NavLink, Route } from 'react-router-dom';

// Components
import {
 Grid,
} from 'material-ui';
import Info from './Info/Info';
import Edit from './Info/Edit/Edit';
import EditPassword from './EditPassword/EditPassword';

// Css
import cls from './CardProfile.css';

const cardProfile = props => {
  return (
    <div className={cls.CardProfile}>
      <Grid container>
        <Grid item xs={12} sm={4} md={3} lg={3}>
            <div className={cls.Div}>
              <ul className={cls.SideNav}>
                <Route path="/agente/perfil/info" children={({match}) => (
                  <li className={`${cls.SideItem} ${match ? cls.IsSelected : null}`}>
                    <NavLink className={cls.Link} to="/agente/perfil/info">Perfil</NavLink>
                  </li>
                )}/>
                <Route path="/agente/perfil/contraseña" children={({match}) => (
                  <li className={`${cls.SideItem} ${match ? cls.IsSelected : null}`}>
                    <NavLink className={cls.Link} to="/agente/perfil/contraseña">Contraseña</NavLink>
                  </li>
                )}/>
              </ul>
            </div>
        </Grid>
        <Grid item xs={12} sm={8} md={9} lg={9}>
          <Grid container className={cls.CardContainer}>
            <div className={cls.CardPrincipal}>
              <Route path="/agente/perfil/info" exact render={() => <Info logout={props.logout} user={props.user}/>}/>
              <Route path="/agente/perfil/info/editar" exact render={() => <Edit
                user={props.user}
                update={props.update}
                updateAvatar={props.updateAvatar}
                loading={props.loading}/>}/>
              <Route path="/agente/perfil/contraseña" exact render={() => <EditPassword changePassword={props.changePassword} />}/>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default cardProfile;