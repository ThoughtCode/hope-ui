import React from 'react';

// Components
import {
  Grid,
} from 'material-ui';

// Css
import cls from './HowWorks.css';

import Check from '../../../assets/check.png';

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
              <img src={Check} className={cls.Check} alt="check"/>
              &nbsp;&nbsp;Elige el tipo de servicio que necesitas
            </li>
            <li className={cls.ListItem}>
              <img src={Check} className={cls.Check} alt="check"/>
              &nbsp;&nbsp;Elige la frecuencia, dia y hora de nuestra visita
            </li>
            <li className={cls.ListItem}>
              <img src={Check} className={cls.Check} alt="check"/>
              &nbsp;&nbsp;Elige servicios adicionales
            </li>
            <li className={cls.ListItem}>
              <img src={Check} className={cls.Check} alt="check"/>
              &nbsp;&nbsp;Elige o registra tu direccion
            </li>
            <li className={cls.ListItem}>
              <img src={Check} className={cls.Check} alt="check"/>
              &nbsp;&nbsp;Paga tu servicio con una tarjeta de credito o debito
            </li>
            <li className={cls.ListItem}>
              <img src={Check} className={cls.Check} alt="check"/>
              &nbsp;&nbsp;Elige la fecha del servicio
            </li>
          </ul>
        </div>
      </div>
    </Grid>
  );
}

export default howWorks;