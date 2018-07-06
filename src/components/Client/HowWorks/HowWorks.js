import React from 'react';

// Components
import {
  Grid,
} from 'material-ui';

// Css
import cls from './HowWorks.css';

const howWorks = props => {
  return (
    <Grid container>
      <div className={cls.HowWorks}>
        <div>
          <div className={cls.Question}>
            <h3>
              Como funciona?
            </h3>
          </div>
          <ul>
            <li className={cls.ListItem}>
              <i className="fa fa-caret-right"></i>
              <div className={cls.ListItemStep}>
                &nbsp;&nbsp;Elige el tipo de servicio que necesitas
              </div>
            </li>
            <li className={cls.ListItem}>
              <i className="fa fa-caret-right"></i>
              <div className={cls.ListItemStep}>
                &nbsp;&nbsp;Elige la frecuencia, dia y hora de nuestra visita
              </div>
            </li>
            <li className={cls.ListItem}>
              <i className="fa fa-caret-right"></i>
              <div className={cls.ListItemStep}>
                &nbsp;&nbsp;Elige servicios adicionales
              </div>
            </li>
            <li className={cls.ListItem}>
              <i className="fa fa-caret-right"></i>
              <div className={cls.ListItemStep}>
                &nbsp;&nbsp;Elige o registra tu direccion
              </div>
            </li>
            <li className={cls.ListItem}>
              <i className="fa fa-caret-right"></i>
              <div className={cls.ListItemStep}>
                &nbsp;&nbsp;Paga tu servicio con una tarjeta de credito o debito
              </div>
            </li>
            <li className={cls.ListItem}>
              <i className="fa fa-caret-right"></i>
              <div className={cls.ListItemStep}>
                &nbsp;&nbsp;Elige la fecha del servicio
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Grid>
  );
}

export default howWorks;