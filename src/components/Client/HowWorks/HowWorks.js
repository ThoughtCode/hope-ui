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
                &nbsp;&nbsp;Elige la frecuencia del servicio, si deseas que sea una sola vez o cada cierto tiempo determinado
              </div>
            </li>
            <li className={cls.ListItem}>
              <i className="fa fa-caret-right"></i>
              <div className={cls.ListItemStep}>
                &nbsp;&nbsp;Elige un servicio principal que desees
              </div>
            </li>
            <li className={cls.ListItem}>
              <i className="fa fa-caret-right"></i>
              <div className={cls.ListItemStep}>
                &nbsp;&nbsp;Elige los servicios adicionales, pueden ser por cantidad
              </div>
            </li>
            <li className={cls.ListItem}>
              <i className="fa fa-caret-right"></i>
              <div className={cls.ListItemStep}>
                &nbsp;&nbsp;Elige la propiedad a la que quieres socilidar el servicio
              </div>
            </li>
            <li className={cls.ListItem}>
              <i className="fa fa-caret-right"></i>
              <div className={cls.ListItemStep}>
                &nbsp;&nbsp;Elige la propiedad a la que quieres socilitar el servicio
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