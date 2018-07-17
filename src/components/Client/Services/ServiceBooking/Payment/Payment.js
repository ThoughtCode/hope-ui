import React from 'react';

// Components
import {
  Grid,
} from 'material-ui';

import cls from './Payment.css';

const payment = (props) => {
  return (
    <Grid container>
      <div className={cls.BookingForm}>
        <Grid container>
          <form className={cls.Form}>
            <div className={cls.ContentWrapper}>
              <div className={cls.ServiceSection}>
                <Grid container>
                  <div className={cls.Row}>
                    <div>
                    <span onClick={(event) => props.backPage(event, 'Payment')} className={cls.ButtonBack}>{'<<'} Volver</span>
                      <h3 className={cls.SubHeaderText}>
                        <span>Ingresa tu forma de Pago</span>
                      </h3>
                    </div>
                  </div>
                  <div className={cls.Row}>
                    <Grid container>
                      <div className={cls.MarginBottom}>
                        <Grid container>
                          <Grid item xs={12} sm={12} md={12} lg={6}>
                            <Grid container>
                              <div className={cls.Columns}>
                                <Grid container>
                                  <Grid item xs={12} sm={12} md={12} lg={12}>
                                    <label>Numero de Tarjeta de Credito</label>
                                    <div className={cls.Relative}>
                                      <div className={cls.CardNumber}>
                                        <input className={cls.Input} />
                                      </div>
                                    </div>
                                  </Grid>
                                </Grid>
                              </div>
                            </Grid>
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={6}>
                            <Grid container>
                              <div className={cls.ColumnsIcon}>
                                <Grid container>
                                  <img 
                                    alt="Credit Cards" 
                                    className={cls.CreditCardIcon} 
                                    src="https://cache.hbfiles.com/assets/miscellaneous/payment-strip-f751680936dec11c6599aacdd9dbfa9b.png"/>
                                </Grid>
                              </div>
                            </Grid>
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                  </div>
                  <div className={cls.Row}>
                    <div className={cls.MarginBottom}>
                      <Grid container>
                        <Grid item xs={12} sm={12} md={12} lg={6}>
                          <Grid container>
                            <div className={cls.Columns}>
                              <label>Nombre de la tarjeta de credito</label>
                              <div className={cls.Relative}>
                                <div className={cls.CardName}>
                                  <input className={cls.Input} />
                                </div>
                              </div>
                            </div>
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                  <div className={cls.Row}>
                    <div className={cls.MarginBottom}>
                      <Grid container>
                        <Grid item xs={6} sm={6} md={6} lg={3}>
                          <Grid container>
                            <div className={cls.Columns}>
                              <label>Expiracion</label>
                              <div className={cls.Relative}>
                                <div className={cls.CardNumber}>
                                  <input className={cls.InputSmall} />
                                </div>
                              </div>
                            </div>
                          </Grid>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={3}>
                          <Grid container>
                            <div>
                              <label>CVC</label>
                              <div className={cls.Relative}>
                                <div className={cls.CardNumber}>
                                  <input className={cls.InputSmall} />
                                </div>
                              </div>
                            </div>
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                  <div className={cls.ButtonBooking}>
                    <Grid container>
                      <div className={cls.Row}>
                        <button onClick={(event) => props.nextPage(event, 'Payment')} className={cls.ButtonBookingCore}>Pagar</button>
                      </div>
                    </Grid>
                  </div>
                </Grid>
              </div>  
            </div>
          </form>
        </Grid>
      </div>
    </Grid>
  );
};

export default payment;