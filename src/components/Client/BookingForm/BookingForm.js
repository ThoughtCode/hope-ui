import React, { Component } from 'react';

// Components
import {
  Grid,
} from 'material-ui';
import PropertyForm from '../PropertyForm/PropertyForm';
import Datetime from 'react-datetime';
import moment from 'moment';

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
              <div>
                <Grid container>
                  <h3 className={cls.SubHeaderText}>
                    <span className={cls.SubHeaderNumber}>4</span>
                    <span>Elige la propiedad donde se realizara el servicio</span>
                  </h3>
                  <Grid item xs={12} sm={12} md={12} lg={6}>
                    <Grid container>
                      <div className={cls.Service}>
                        <div className={cls.Property}>
                          <select
                            className={cls.Select}
                            value={this.props.form.property}
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
                  <Grid item xs={12} sm={12} md={12} lg={6}>
                    <Grid container justify="center">
                      <button onClick={this.changeCreatePropertyHandler} className={cls.ButonProperty}>Agregar Nueva Propiedad</button>
                    </Grid>
                  </Grid>
                </Grid>
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
                <span className={cls.SubHeaderNumber}>4</span>
                <span>No tienes propiedades debes crear una propiedad</span>
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
                <span className={cls.SubHeaderNumber}>4</span>
                <span>No tienes propiedades debes crear una propiedad</span>
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
                    <h2 className={cls.HeaderText}>Elige tu servicio de limpieza</h2>
                  </div>
                  <div className={cls.Row}>
                    <div>
                      <h3 className={cls.SubHeaderText}>
                        <span className={cls.SubHeaderNumber}>1</span>
                        <span>Elige tu frecuencia de limpieza</span>
                      </h3>
                      <h5 className={cls.Parragraph}>Elige entre una vez, diario, semanal o mensual!</h5>
                      <div>
                        <div className={cls.Selection}>
                          <Grid container>
                            <Grid item xs={12} sm={6} md={6} lg={6}>
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
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6}>
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
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6}>
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
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6}>
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
                            </Grid>
                          </Grid>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cls.Row}>
                    <Grid container>
                      <div>
                        <Grid container>
                          <h3 className={cls.SubHeaderText}>
                            <span className={cls.SubHeaderNumber}>2</span>
                            <span>Elige el servicio de limpieza principal</span>
                          </h3>
                          <div className={cls.Service}>
                            <Grid item xs={12} sm={12} md={12} lg={6}>
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
                            </Grid>
                          </div>
                        </Grid>
                      </div>
                    </Grid>
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
                    <div>
                      <h3 className={cls.SubHeaderText}>
                        <span className={cls.SubHeaderNumber}>5</span>
                        <span>Eliga la fecha del servicio</span>
                      </h3>
                        <Grid container>
                          <div className={cls.Service}>
                            <Grid container>
                              <Grid item xs={6} sm={4} md={4} lg={3}>
                                <Grid container>
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
                              <Grid item xs={3} sm={4} md={4} lg={3}>
                                  <Grid container>
                                    <div className={cls.Property}>
                                      <Datetime
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
                    </div>
                  </div>
                </Grid>
              </div>
              <div className={cls.ServiceSection}>
                <div className={cls.Row}>
                  <div>
                    <h3 className={cls.SubHeaderText}>
                      <span>Metodo de Pago</span>
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
                              <div className={cls.CardNumber}>
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
              </div>
              <div className={cls.ServiceSection}>
                <Grid container>
                  <div className={cls.ButtonBooking}>
                    <Grid container>
                      <div className={cls.Row}>
                        <button onClick={(event) => this.props.createJobHandler(event)} className={cls.ButtonBookingCore}>Crear trabajo</button>
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