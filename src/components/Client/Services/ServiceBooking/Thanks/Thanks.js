import React from 'react';

// Components
import {
  Grid,
} from 'material-ui';
import Check from '../../../../../assets/check.png';

import cls from './Thanks.css';

const thanks = (props) => {
  return (
    <div className={cls.BookingForm}>
      <Grid container>
        <form className={cls.Form}>
          <div className={cls.ContentWrapper}>
            <div className={cls.ServiceSection}>
              <Grid container>
                <div className={cls.Row}>
                  <div>
                    <h3 className={cls.SubHeaderText}>
                      <span className={cls.Capitalize}>{localStorage.getItem('first_name')}</span>
                    </h3>
                  </div>
                </div>
                <div className={cls.RowCenter}>
                  <img src={Check} alt="" />
                </div>
                <div className={cls.Row}>
                  <div className={cls.PaddingTop}>
                    <h3 className={cls.SubHeaderText}>
                      <span>Gracias por tu pago</span>
                    </h3>
                  </div>
                </div>
              </Grid>
            </div>  
          </div>
        </form>
      </Grid>
    </div>
  );
};

export default thanks;