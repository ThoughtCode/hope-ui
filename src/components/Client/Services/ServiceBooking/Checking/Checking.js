import React, { Component } from 'react';
import moment from 'moment';
import Alert from 'react-s-alert';

// Components
import {
  Grid,
} from 'material-ui';

// Css
import cls from './Checking.css';

class Checking extends Component {
  state = {
    check: false
  }

  handleCheckbox = () => {
    this.setState({
      check: !this.state.check,
    });
  }

  changePageValidator = (event) => {
    event.preventDefault();
    if (this.state.check) {
      this.props.nextPage(event, 'Checking')
    } else {
      Alert.error('Debes aceptar los terminos y condiciones para avanzar', {
        position: 'top',
        effect: 'genie',
      });
    }
  }

  render () {
    let price = 0;
    let base = 0;
    let time = 0;
    let frequency = null;
    if (this.props.form.services_addons.length > 0) {
      this.props.form.services_addons.forEach(s => {
        if (s.active) {
          price = ((s.price * s.time)) + price;
          time = s.time + time
        }
      })
    }
    base = this.props.form.services_base.name !== '' ? (this.props.form.services_base.price * this.props.form.services_base.time) : 0;
    time = time + this.props.form.services_base.time;
    let iva = 0;
    iva = ((base + price) * 0.12);
    const total = (base + price + iva);
    if (this.props.form.recurrent.value === '0') {
      frequency = 'una vez';
    } else if (this.props.form.recurrent.value === '1') {
      frequency = 'semanal';
    } else if (this.props.form.recurrent.value === '2') {
      frequency = 'quincenal';
    } else if (this.props.form.recurrent.value === '3') {
      frequency = 'mensual';
    }
    return (
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container>
            <div className={cls.BookingTotal}>
              <Grid container>
                <div className={cls.BookingTotalWrapper}>
                  <Grid item xs={12} sm={12} lg={12}>
                    <Grid container>
                      <div className={cls.BookingSection}>
                        <Grid container>
                          <div className={cls.RowInfo}>
                            <div className={cls.InfoContent}>
                              <span onClick={(event) => this.props.backPage(event, 'Checking')} className={cls.ButtonBack}>{'<<'} Volver</span>
                              <h3 className={cls.ServiceMain}>
                                <span>{this.props.form.services_base.name === '' ? 'No ha seleccionado un servicio' : this.props.form.services_base.name} </span>
                                <span>{frequency}</span>
                              </h3>
                              <div>
                                <div className={cls.PadTop}>
                                  <div>
                                    {moment(this.props.form.started_at).format('MMM D, YYYY h:mm a').replace(/\b\w/g, l => l.toUpperCase())}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Grid>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} lg={12}>
                    <div className={cls.BookingSection}>
                      <Grid container>
                        <div className={cls.Row}>
                          <Grid item xs={12} lg={12}>
                            <Grid container>
                              <div className={cls.SummaryRow}>
                                {this.props.form.services_base.name !== '' ? (
                                  <Grid container>
                                    <Grid item xs={6} lg={6}>
                                      <div className={cls.SummaryTitle}>{this.props.form.services_base.name}</div>
                                    </Grid>
                                    <Grid item xs={6} lg={6}>
                                      <div className={cls.SummaryAmount}>${base.toFixed(2)}</div>
                                    </Grid>
                                  </Grid>
                                ) : (
                                  <Grid container>
                                    <Grid item xs={6} lg={6}>
                                      <div className={cls.SummaryTitle}>No ha seleccionado servicios</div>
                                    </Grid>
                                    <Grid item xs={6} lg={6}>
                                      <div className={cls.SummaryAmount}></div>
                                    </Grid>
                                  </Grid>
                                )}
                                {this.props.form.services_addons.length > 0 ? 
                                  this.props.form.services_addons.map(addon => {
                                    if (addon.active) {
                                      return (
                                        <Grid key={addon.id} container>
                                          <Grid item xs={6} lg={6}>
                                            <div className={cls.SummaryTitle}>{addon.label}</div>
                                          </Grid>
                                          <Grid item xs={6} lg={6}>
                                            <div className={cls.SummaryAmount}>${(addon.price * addon.time)}</div>
                                          </Grid>
                                        </Grid>
                                      );
                                    } else {
                                      return null;
                                    }
                                  })
                                : null}
                                <Grid container>
                                  <Grid item xs={6} lg={6}>
                                    <div className={cls.SummaryTitle}>IVA <small>12%</small></div>
                                  </Grid>
                                  <Grid item xs={6} lg={6}>
                                    <div className={cls.SummaryAmount}>${iva.toFixed(2)}</div>
                                  </Grid>
                                </Grid>
                                <Grid container>
                                  <Grid item xs={8} lg={8}>
                                    <div className={cls.SummaryTime}><small>Total horas de limpieza <span className={cls.Hour}>{time}h</span></small></div>
                                  </Grid>
                                </Grid>
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                      </Grid>
                    </div>
                  </Grid>
                  <Grid item xs={12} lg={12}>
                    <div className={cls.BookingSectionNoBorder}>
                      <Grid container>
                        <div className={cls.RowTotal}>
                          <Grid container>
                            <Grid item xs={6} lg={6}>
                              <div className={cls.TotalText}>
                                <span>Total</span>
                              </div>
                            </Grid>
                            <Grid item xs={6} lg={6}>
                              <div className={cls.Total}>
                                $
                                <span>
                                  {total.toFixed(2)}
                                </span>
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                      </Grid>
                    </div>
                  </Grid>
                  <Grid item xs={12} lg={12}>
                    <div className={cls.BookingSectionNoBorderTerm}>
                      <Grid container>
                        <div className={cls.RowTotalTerm}>
                          <Grid container>
                            <Grid item xs={12} lg={12}>
                              <div className={cls.Term}>
                                <input onChange={this.handleCheckbox} checked={this.state.check} type="checkbox"/>
                                <span className={cls.TermText}><a className={cls.Link} href="/politicas" target="_blank">Acepto terminos y condiciones</a></span>
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                      </Grid>
                    </div>
                  </Grid>
                  <Grid item xs={12} lg={12}>
                    <div className={cls.BookingSectionNoBorderTerm}>
                      <Grid container>
                        <div className={cls.RowTotalTerm}>
                          <Grid container>
                            <Grid item xs={12} lg={12}>
                              <button onClick={(event) => this.changePageValidator(event)} className={cls.ButtonBookingCore}>Pagar</button>
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
      </Grid>
    );
  }
};

export default Checking;