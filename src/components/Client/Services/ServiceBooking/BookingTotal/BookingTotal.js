import React from 'react';
import moment from 'moment';

// Components
import {
  Grid,
} from 'material-ui';

// Css
import cls from './BookingTotal.css';

const bookingTotal = (props) => {
  let price = 0;
  let base = 0;
  let time = 0;
  let frequency = null;
  if (props.form.recurrent.value === '0') {
    frequency = 'Una vez';
  } else if (props.form.recurrent.value === '1') {
    frequency = 'Semanal';
  } else if (props.form.recurrent.value === '2') {
    frequency = 'Quincenal';
  } else if (props.form.recurrent.value === '3') {
    frequency = 'Mensual';
  }
  if (props.form.services_addons.length > 0) {
    props.form.services_addons.forEach(s => {
      if (s.active) {
        price = ((s.price * s.time)) + price;
        time = s.time + time
      }
    })
  }
  if (props.form.services_parameters.length > 0) {
    props.form.services_parameters.forEach(s => {
      price = ((s.price * s.time)) + price;
      time = s.time + time
    })
  }
  base = props.form.services_base.name !== '' ? (props.form.services_base.price * props.form.services_base.time) : 0;
  time = time + props.form.services_base.time;
  let iva = 0;
  iva = ((base + price) * 0.12);
  const total = (base + price + iva);
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <div className={cls.BookingTotal}>
          <Grid container>
            <div className={cls.BookingTotalWrapper}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Grid container>
                  <div className={cls.BookingSection}>
                    <div className={cls.RowInfo}>
                      <div className={cls.InfoContent}>
                        <h3>
                          <span>{props.form.services_base.name === '' ? 'No ha seleccionado un servicio' : props.form.services_base.name} </span>
                          <span>{props.form.services_base.name === '' ? null : frequency}</span>
                        </h3>
                        <div>
                          <div className={cls.PadTop}>
                            <div>
                              {moment.utc(props.form.started_at).format('MMM D, YYYY h:mm a').replace(/\b\w/g, l => l.toUpperCase())}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <div className={cls.BookingSection}>
                  <Grid container>
                    <div className={cls.Row}>
                      <Grid item xs={12} md={12} lg={12}>
                        <Grid container>
                          <div className={cls.SummaryRow}>
                            {props.form.services_base.name !== '' ? (
                              <Grid container>
                                <Grid item md={12} lg={6}>
                                  <div className={cls.SummaryTitle}>{props.form.services_base.name}</div>
                                </Grid>
                                <Grid item md={12} lg={6}>
                                  <div className={cls.SummaryAmount}>${base.toFixed(2)}</div>
                                </Grid>
                              </Grid>
                            ) : (
                              <Grid container>
                                <Grid item xs={12} md={12} lg={6}>
                                  <div className={cls.SummaryTitle}>No ha seleccionado servicios</div>
                                </Grid>
                                <Grid item xs={12} md={12} lg={6}>
                                  <div className={cls.SummaryAmount}></div>
                                </Grid>
                              </Grid>
                            )}
                            {props.form.services_parameters.length > 0 ? 
                              props.form.services_parameters.map(addon => {
                                  {
                                  let price = addon.price;
                                  let time = addon.time;
                                  let summary = price * time;
                                  return (
                                    <Grid key={addon.id} container>
                                      <Grid item xs={12} md={6} lg={6}>
                                        <div className={cls.SummaryTitle}>{addon.label}</div>
                                      </Grid>
                                      <Grid item xs={12} md={6} lg={6}>
                                        <div className={cls.SummaryAmount}>${summary.toFixed(2)}</div>
                                      </Grid>
                                    </Grid>
                                  );
                                }
                              })
                            : null}
                            {props.form.services_addons.length > 0 ? 
                              props.form.services_addons.map(addon => {
                                if (addon.active) {
                                  let price = addon.price;
                                  let time = addon.time;
                                  let summary = price * time;
                                  return (
                                    <Grid key={addon.id} container>
                                      <Grid item xs={12} md={6} lg={6}>
                                        <div className={cls.SummaryTitle}>{addon.label}</div>
                                      </Grid>
                                      <Grid item xs={12} md={6} lg={6}>
                                        <div className={cls.SummaryAmount}>${summary.toFixed(2)}</div>
                                      </Grid>
                                    </Grid>
                                  );
                                } else {
                                  return null;
                                }
                              })
                            : null}
                            <Grid container>
                              <Grid item md={6} lg={6}>
                                <div className={cls.SummaryTitle}>IVA <small>12%</small></div>
                              </Grid>
                              <Grid item md={6} lg={6}>
                                <div className={cls.SummaryAmount}>${iva.toFixed(2)}</div>
                              </Grid>
                            </Grid>
                            <Grid container justify="center">
                              <Grid item md={8} lg={8}>
                                <div className={cls.SummaryTitle}><small>Total horas de limpieza {time}h</small></div>
                              </Grid>
                            </Grid>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                </div>
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <div className={cls.BookingSectionNoBorder}>
                  <Grid container>
                    <div className={cls.RowTotal}>
                      <Grid container>
                          <div className={cls.TotalText}>
                            <span>Te cobraremos</span>
                          </div>
                        <Grid item xs={6} md={6} lg={6}>
                          <div className={cls.Total}>
                            $
                            <span>
                              {total.toFixed(2)}
                            </span>
                          </div>
                        </Grid>
                        <Grid item xs={12}>
                          <span className={cls.TotalText}>{frequency} cada vez que te visitemos.</span>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                </div>
              </Grid>
            </div>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
}

export default bookingTotal;