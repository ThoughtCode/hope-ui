import React, { Component } from 'react';
import moment from 'moment';

// Components
import {
  Grid,
} from 'material-ui';
import Datetime from 'react-datetime';
import { Tooltip, } from 'react-tippy';
import PropertyForm from '../PropertyForm/PropertyForm';

// Css
import cls from './BookingForm.css';

class BookingForm extends Component {
  state = {
    showCreateProperty: false,
    has_properties: this.props.properties.length > 0,
  }

  componentDidUpdate() {
    if (!this.state.has_properties) {
      if (this.props.properties.length > 0) {
        this.setState({
          has_properties: true,
        });
      }
    }
  }

  changeCreatePropertyHandler = () => {
    this.setState({
      showCreateProperty: !this.state.showCreateProperty,
    });
  }
  
  validDates = current => {
    return current.isAfter(Datetime.moment().subtract(1, 'day'));
  };

  render () {
    const formElementAddon = [];
    for (let key in this.props.form.services_addons) {
      formElementAddon.push({
        id: key,
        config: this.props.form.services_addons[key]
      });
    }
    let properties = null;
    if (this.props.properties.length > 0 && !this.state.showCreateProperty) {
      properties = (
        <Grid container>
          <div className={cls.Row}>
            <Grid container>
              <div className={cls.Row}>
                <h3 className={cls.SubHeaderText}>
                  <span className={cls.SubHeaderNumber}>4</span>
                  <span>Registra tu dirección</span>
                </h3>
              </div>
              <div className={cls.Row}>
                <div className={cls.BorderPadding}>
                  <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={7}>
                      <Grid container>
                        <div className={cls.Service}>
                          <div className={cls.Property}>
                            <select
                              className={cls.Select}
                              value={this.props.form.property.value}
                              onChange={this.props.handlePropertyChange}>
                              <option>Propiedad</option>
                              {this.props.properties.map(property => (
                                <option key={property.id} value={property.attributes.id}>{property.attributes.name}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={5}>
                      <Grid container justify="center">
                        <button onClick={this.changeCreatePropertyHandler} className={cls.ButonProperty}>Agregar Nueva Propiedad</button>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Grid>
          </div>
        </Grid>
      );
    } else {
      properties = (
        <Grid container>
          <div className={cls.Row}>
            <div>
              <h3 className={cls.SubHeaderText}>
                <span className={cls.SubHeaderNumber}>5</span>
                <span>Registra tu dirección</span>
              </h3>
              <div className={cls.SubHeaderText}>
                <PropertyForm 
                  cities={this.props.cities}
                  neightborhoods={this.props.neightborhoods}
                  fetchNeightborhoods={this.props.fetchNeightborhoods}
                  createProperty={this.props.createProperty}
                  cancelDisabled={this.state.has_properties}/>
              </div>
            </div>
          </div>
        </Grid>
      );
    };
    if (this.state.showCreateProperty) {
      properties = (
        <Grid container>
          <div className={cls.Row}>
            <div>
              <h3 className={cls.SubHeaderText}>
                <span className={cls.SubHeaderNumber}>5</span>
                <span>Registra tu dirección</span>
              </h3>
              <div className={cls.SubHeaderText}>
                <PropertyForm 
                  cities={this.props.cities}
                  neightborhoods={this.props.neightborhoods}
                  fetchNeightborhoods={this.props.fetchNeightborhoods}
                  createProperty={this.props.createProperty}
                  cancel={this.changeCreatePropertyHandler}
                  cancelDisabled={this.state.has_properties}/>
              </div>
            </div>
          </div>
        </Grid>
      );
    }
    return(
      <div className={cls.BookingForm}>
        <Grid container>
          <form className={cls.Form}>
            <div className={cls.ContentWrapper}>
              <div className={cls.ServiceSection}>
                <Grid container>
                  <div className={cls.Row}>
                    <h2 className={cls.HeaderText}>Sigue estos pasos para contratar nuestros servicios</h2>
                  </div>
                  <div className={cls.Row}>
                    <Grid container>
                      <div>
                        <Grid container>
                          <h3 className={cls.SubHeaderText}>
                            <span className={cls.SubHeaderNumber}>1</span>
                            <span>Elige el tipo de servicio que necesitas</span>
                          </h3>
                          <div className={cls.Service}>
                            <Grid item xs={12} sm={12} md={12} lg={6}>
                              <div className={cls.BorderPadding}>
                                <Grid container>
                                  <select
                                    className={cls.Select}
                                    value={this.props.value}
                                    onChange={this.props.handleServiceChange}>
                                    <option value="">Servicio Principal</option>
                                    {this.props.service_base.map(service => (
                                      <option key={service.id} value={service.id}>{service.name}</option>
                                    ))}
                                  </select>
                                </Grid>
                              </div>
                            </Grid>
                          </div>
                        </Grid>
                      </div>
                    </Grid>
                  </div>
                  <div className={cls.Row}>
                    <div>
                      <h3 className={cls.SubHeaderText}>
                        <span className={cls.SubHeaderNumber}>2</span>
                        <span>Elige la frecuencia, dia y hora de nuestra visita</span>
                      </h3>
                      <div className={cls.service}>
                        <div className={cls.Selection}>
                          <Grid container>
                            <Grid item xs={12} className={cls.MaxWidthSelection}>
                              <Tooltip
                                title="Te visitaremos una sola vez en la fecha seleccionada"
                                position="top"
                              >
                                <div className={cls.SelectionButtons}>
                                  <input className={cls.RadioInput}
                                    id="one_time"
                                    type="radio"
                                    value="0"
                                    checked={this.props.form.recurrent.value === '0'}
                                    onChange={this.props.handleRecurrentChange}/>
                                  <label className={cls.LabelInput} htmlFor="one_time">
                                    <div className={cls.BoxRadio}>
                                      <div className={cls.BoxPlanRadio}>
                                        Una Vez
                                      </div>
                                    </div>
                                  </label>
                                </div>
                              </Tooltip>
                            </Grid>
                            <Grid item xs={12} className={cls.MaxWidthSelection}>
                              <Tooltip
                                title="Te visitemos semanalmente el día que tu elijas"
                                position="top"
                              >
                                <div className={cls.SelectionButtons}>
                                  <input className={cls.RadioInput}
                                    id="diary"
                                    type="radio"
                                    value="1"
                                    checked={this.props.form.recurrent.value === '1'}
                                    onChange={this.props.handleRecurrentChange}/>
                                  <label className={cls.LabelInput} htmlFor="diary">
                                    <div className={cls.BoxRadio}>
                                      <div className={cls.BoxPlanRadio}>
                                        Semanal
                                      </div>
                                    </div>
                                  </label>
                                </div>
                              </Tooltip>
                            </Grid>
                            <Grid item xs={12} className={cls.MaxWidthSelection}>
                              <Tooltip
                                title="Te visitaremos cada 15 días el día que tu elijas"
                                position="top"
                              >
                                <div className={cls.SelectionButtons}>
                                  <input className={cls.RadioInput}
                                    id="weekly"
                                    type="radio"
                                    value="2"
                                    checked={this.props.form.recurrent.value === '2'}
                                    onChange={this.props.handleRecurrentChange}/>
                                  <label className={cls.LabelInput} htmlFor="weekly">
                                    <div className={cls.BoxRadio}>
                                      <div className={cls.BoxPlanRadio}>
                                        Quincenal
                                      </div>
                                    </div>
                                  </label>
                                </div>
                              </Tooltip>
                            </Grid>
                            <Grid item xs={12} className={cls.MaxWidthSelection}>
                              <Tooltip
                                title="Te visitaremos una vez al mes el día que tu elijas"
                                position="top"
                              >
                                <div className={cls.SelectionButtons}>
                                  <input className={cls.RadioInput}
                                    id="monthly"
                                    type="radio"
                                    value="3"
                                    checked={this.props.form.recurrent.value === '3'}
                                    onChange={this.props.handleRecurrentChange}/>
                                  <label className={cls.LabelInput} htmlFor="monthly">
                                    <div className={cls.BoxRadio}>
                                      <div className={cls.BoxPlanRadio}>
                                        Mensual
                                      </div>
                                    </div>
                                  </label>
                                </div>
                              </Tooltip>
                            </Grid>
                          </Grid>
                        </div>
                      </div>
                      <Grid container justify="center" align="center">
                        <div className={cls.ServiceDate}>
                          <Grid container justify="center">
                            <Grid item xs={12} sm={6} md={5} lg={5}>
                              <Grid container justify="center">
                                <div className={cls.Property}>
                                  <Datetime
                                    isValidDate={this.validDates}
                                    value={this.props.form.started_at}
                                    dateFormat="MM/DD/YYYY"
                                    timeFormat={false}
                                    onChange={this.props.changeDatetimeHandler}
                                    inputProps={{
                                      className: `${cls.Input}`,
                                    }} />
                                </div>
                              </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6} md={5} lg={5}>
                              <Grid container justify="center">
                                <div className={cls.Property}>
                                  <Datetime
                                    timeConstraints={{
                                      minutes: {
                                        step: 30,
                                      }
                                    }}
                                    isValidDate={this.validDates}
                                    value={moment(this.props.form.started_at)}
                                    dateFormat={false}
                                    onChange={this.props.changeDatetimeHandler}
                                    inputProps={{
                                      className: `${cls.InputTime}`,
                                    }} />
                                </div>
                              </Grid>
                            </Grid>
                          </Grid>
                        </div>
                      </Grid>
                      {this.props.form.recurrent.value !== '0' ? (
                        <Grid container justify="center">
                          <div className={cls.ServiceDate}>
                            <Grid container justify="center">
                              <Grid item xs={12} sm={12} md={12} lg={12}>
                                <div>
                                  <h3 className={cls.SubHeaderText}>
                                    <span>Elija la fecha de finalización del servicio</span>
                                  </h3>
                                </div>
                                <Grid container justify="center">
                                  <div className={cls.Property}>
                                    <Datetime
                                      isValidDate={this.validDates}
                                      value={this.props.form.finished_recurrency_at}
                                      dateFormat="MM/DD/YYYY"
                                      timeFormat={false}
                                      onChange={this.props.changeDatetimeFinishedHandler}
                                      inputProps={{
                                        className: `${cls.Input}`,
                                      }} />
                                  </div>
                                </Grid>
                              </Grid>
                            </Grid>
                          </div>
                        </Grid>
                      ) : (
                        null
                      )}
                    </div>
                  </div>
                  <div className={cls.Row}>
                    <div>
                      <h3 className={cls.SubHeaderText}>
                        <span className={cls.SubHeaderNumber}>3</span>
                        <span>Eliga los servicios adicionales</span>
                      </h3>
                    </div>
                  </div>
                  <div className={cls.Row}>
                    <Grid container>
                      <div className={cls.BlockServices}>
                        <div className={cls.BorderPadding}>
                          <Grid container>
                            {formElementAddon.map((addon) => (
                              <li key={addon.id} className={cls.Extras}>
                                <label onClick={(event) => this.props.changeCheckboxHandler(event, addon.id)} className={cls.ExtraLabel}>
                                  <input className={cls.InputNone} id="extra1" type="checkbox" value="1"/>
                                  <div className={cls.ExtraSvg}>
                                    <p className={cls.HeightDef}>{addon.config.label}</p>
                                    <div dangerouslySetInnerHTML={{__html: addon.config.icon}} className={addon.config.active ? cls.ExtraIconActive : cls.ExtraIcon}>
                                    </div>
                                  </div>
                                </label>
                                {addon.config.quantity && addon.config.active ? (
                                  <div className={cls.CenterInput}>
                                    <p className={cls.NoMargin}><span>Cantidad</span></p>
                                    <input
                                      type="number"
                                      value={addon.config.value}
                                      onChange={(event) => this.props.inputChangedHandler(event, addon.id)}
                                      className={cls.InputQuantity} />
                                  </div>
                                ) : (
                                  null
                                )}
                              </li>
                            ))}
                          </Grid>
                        </div>
                      </div>
                    </Grid>
                  </div>
                </Grid>
              </div>
              <div className={cls.ServiceSection}>
                <Grid container>
                  {properties}
                </Grid>
              </div>
              <div className={cls.ServiceSection}>
                <Grid container>
                  <div className={cls.Row}>
                    <Grid container>
                      <div>
                        <Grid container>
                          <h3 className={cls.SubHeaderText}>
                            <span>¿Algo mas que quieras contarnos?</span>
                          </h3>
                          <div className={cls.Service}>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                              <div className={cls.BorderPadding}>
                                <Grid container>
                                  <textarea
                                    placeholder="Informacion adicional acerca del trabajo"
                                    rows="8"
                                    className={cls.Textarea}
                                    value={this.props.form.details}
                                    onChange={(event) => this.props.handleTextChange(event)}>
                                  </textarea>
                                </Grid>
                              </div>
                            </Grid>
                          </div>
                        </Grid>
                      </div>
                    </Grid>
                  </div>
                </Grid>
              </div>
              <div className={cls.ServiceSection}>
                <Grid container>
                  <div className={cls.ButtonBooking}>
                    <Grid container>
                      <div className={cls.Row}>
                        <button onClick={(event) => this.props.nextPage(event, 'Service')} className={cls.ButtonBookingCore}>Solicitar servicio</button>
                      </div>
                    </Grid>
                  </div>
                </Grid>
              </div>
            </div>
          </form>
        </Grid>
      </div>
    );
  }
}

export default BookingForm;