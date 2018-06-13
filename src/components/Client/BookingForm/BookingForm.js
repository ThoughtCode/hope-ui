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
    value: '',
    form: {
      recurrent: {
        value: '2',
      },
      services_base: {
        id: 0,
        value: 0,
        name: '',
        time: 0,
        price: 0 
      },
      services_addons: [],
      property: '',
      started_at: new Date(),
    },
  }

  componentDidMount () {
    let services_addons = [];
    this.props.services_addons.forEach(service => {
      if (service.quantity) {
        let input = {
          elementType: 'input',
          label: service.name,
          elementConfig: {
            type: 'number',
            placeholder: service.name,
          },
          value: '',
          active: false,
          id: service.id,
          icon: service.icon,
        };   
      services_addons.push(input)
      } else {
        let checkbox = {
          elementType: 'checkbox',
          id: service.id,
          label: service.name,
          value: 1,
          active: false,
          time: service.time,
          price: service.price,
          icon: service.icon,
        };
        services_addons.push(checkbox);
      }
    })
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        services_addons: services_addons
      }
    })
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

  inputChangedHandler = (event, key) => {
    const updatedControls = {
      ...this.state.form,
      services_addons: {
        ...this.state.form.services_addons,
        [key]: {
          ...this.state.form.services_addons[key],
          value: event.target.value
        }
      }
    }
      
    this.setState({
      form: updatedControls,
    });
  }

  changeCheckboxHandler = (event, key) => {
    event.preventDefault();
    const updatedControls = {
      ...this.state.form,
      services_addons: {
        ...this.state.form.services_addons,
        [key]: {
          ...this.state.form.services_addons[key],
          active: !this.state.form.services_addons[key].active,
        }
      }
    }

    this.setState({
      form: updatedControls,
    });
  }

  handleServiceChange = (event) => {
    if (event.target.value !== "") {
      const service = this.props.service_base.find(s => s.id === parseInt(event.target.value, 10));
      const updatedObject = {
        id: service.id,
        value: service.id,
        name: service.name,
        time: service.time,
        price: service.price
      }
  
      this.setState({
        ...this.state,
        value: event.target.value,
        form: {
          ...this.state.form,
          services_base: updatedObject
        }
      });
    } else {
      this.setState({
        ...this.state,
        value: event.target.value,
      });
    }
  };

  handlePropertyChange = (event) => {
    if (event.target.value !== "") {
      this.setState({
        ...this.state,
        form: {
          ...this.state.form,
          property: event.target.value
        }
      });
    } else {
      this.setState({
        ...this.state,
        form: {
          ...this.state.form,
          property: event.target.value
        }
      });
    }
  };

  createJobHandler = (event) => {
    event.preventDefault();
    const formData = {};
    formData["property_id"] = this.state.form.property;
    formData["started_at"] = this.state.form.started_at;
    formData["job_details_attributes"] = [{
      service_id: this.state.form.services_base.id,
      value: 1
    }]
    for (const formElementIdentifier in this.state.form.services_addons) {
      if (this.state.form.services_addons[formElementIdentifier].active) {
        formData["job_details_attributes"].push({
          service_id: this.state.form.services_addons[formElementIdentifier].id,
          value: this.state.form.services_addons[formElementIdentifier].value
        })
      }
    }
    const job = {
      job: formData,
    };
    this.props.createJob(localStorage.getItem('token'), job);
  }

  changeDatetimeHandler = (dateTime) => {
    console.log(moment(dateTime).format());
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        started_at: moment(dateTime),
      }
    })
  }

  changeActiveHandler = (event) => {
    event.preventDefault();
    this.setState({
      active: !this.state.active
    });
  }

  handleRecurrentChange = (event) => {
    const updatedControls = {
      ...this.state.form,
      recurrent: {
        ...this.state.form.recurrent,
        value: event.target.value,
      },
    };

    this.setState({
      form: updatedControls,
    });
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
    console.log(this.state);
    const formElementAddon = [];
    for (let key in this.state.form.services_addons) {
      formElementAddon.push({
        id: key,
        config: this.state.form.services_addons[key]
      });
    }
    let properties = null;
    if (this.props.properties.length > 0 && !this.state.showCreateProperty) {
      properties = (
        <Grid container>
          <div className={cls.Row}>
            <div>
              <h3 className={cls.SubHeaderText}>
                <span className={cls.SubHeaderNumber}>4</span>
                <span>Elige la propiedad donde se realizara el servicio</span>
              </h3>
              <button onClick={this.changeCreatePropertyHandler} className={cls.ButonProperty}>Agregar Nueva Propiedad</button>
              <div className={cls.Service}>
                <div className={cls.Property}>
                  <select
                    className={cls.Select}
                    value={this.state.form.property}
                    onChange={this.handlePropertyChange}>
                    <option>Propiedad</option>
                    {this.props.properties.map(property => (
                      <option key={property.id} value={property.attributes.id}>{property.attributes.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
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
                      <h5 className={cls.Parragraph}>Elige entre mensual, bimensual o semanal!</h5>
                      <div>
                        <div className={cls.Selection}>
                          <div className={cls.SelectionButtons}>
                            <input className={cls.RadioInput}
                              id="month"
                              type="radio"
                              value="1"
                              checked={this.state.form.recurrent.value === '1'}
                              onChange={this.handleRecurrentChange}/>
                            <label className={cls.LabelInput} htmlFor="month">
                              <div className={cls.BoxRadio}>
                                <div className={cls.BoxPlanRadio}>
                                  Mensual
                                </div>
                              </div>
                            </label>
                          </div>
                          <div className={cls.SelectionButtons}>
                            <input className={cls.RadioInput}
                              id="bimonth"
                              type="radio"
                              value="2"
                              checked={this.state.form.recurrent.value === '2'}
                              onChange={this.handleRecurrentChange}/>
                            <label className={cls.LabelInput} htmlFor="bimonth">
                              <div className={cls.BoxRadio}>
                                <div className={cls.BoxPlanRadio}>
                                  Bimestral
                                </div>
                              </div>
                            </label>
                          </div>
                          <div className={cls.SelectionButtons}>
                            <input className={cls.RadioInput}
                              id="trimonth"
                              type="radio"
                              value="3"
                              checked={this.state.form.recurrent.value === '3'}
                              onChange={this.handleRecurrentChange}/>
                            <label className={cls.LabelInput} htmlFor="trimonth">
                              <div className={cls.BoxRadio}>
                                <div className={cls.BoxPlanRadio}>
                                  Trimestral
                                </div>
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cls.Row}>
                    <div>
                      <h3 className={cls.SubHeaderText}>
                        <span className={cls.SubHeaderNumber}>2</span>
                        <span>Elige el servicio de limpieza principal</span>
                      </h3>
                      <div className={cls.Service}>
                          <select
                            className={cls.Select}
                            value={this.state.value}
                            onChange={this.handleServiceChange}>
                            <option>Servicio Principal</option>
                            {this.props.service_base.map(service => (
                              <option key={service.id} value={service.id}>{service.name}</option>
                            ))}
                          </select>
                      </div>
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
                  <div className={cls.ExtraServices}>
                    <div className={cls.BlockServices}>
                      <Grid container>
                        {formElementAddon.map((addon) => (
                          <li key={addon.id} className={cls.Extras}>
                            <label onClick={(event) => this.changeCheckboxHandler(event, addon.id)} className={cls.ExtraLabel}>
                              <input id="extra1" type="checkbox" value="1"/>
                              <div className={cls.ExtraSvg}>
                                <div dangerouslySetInnerHTML={{__html: addon.config.icon}} className={addon.config.active ? cls.ExtraIconActive : cls.ExtraIcon}>
                                </div>
                                <p>{addon.config.label}</p>
                              </div>
                            </label>
                          </li>
                        ))}
                      </Grid>
                    </div>
                  </div>
                </Grid>
              </div>
              <div className={cls.ServiceSection}>
                {properties}
              </div>
              <div className={cls.ServiceSection}>
                <div className={cls.Row}>
                  <div>
                    <h3 className={cls.SubHeaderText}>
                      <span className={cls.SubHeaderNumber}>5</span>
                      <span>Eliga la fecha del servicio</span>
                    </h3>
                    <Grid container>
                      <div className={cls.Service}>
                        <Grid container>
                          <Grid item xs={6}>
                            <Grid container>
                              <div className={cls.Property}>
                                <Datetime
                                  isValidDate={this.validDates}
                                  value={this.state.form.started_at}
                                  dateFormat="MM/DD/YYYY"
                                  timeFormat={false}
                                  onChange={this.changeDatetimeHandler}
                                  inputProps={{
                                    className: `${cls.Input}`,
                                  }} />
                              </div>
                            </Grid>
                          </Grid>
                          <Grid item xs={6}>
                            <Grid container>
                              <div className={cls.Property}>
                                <Datetime
                                  isValidDate={this.validDates}
                                  value={moment(this.state.form.started_at)}
                                  dateFormat={false}
                                  onChange={this.changeDatetimeHandler}
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
                  <div className={cls.MarginBottom}>
                    <Grid container>
                      <Grid item lg={6}>
                        <Grid container>
                          <div className={cls.Columns}>
                            <label>Numero de Tarjeta de Credito</label>
                            <div className={cls.Relative}>
                              <div className={cls.CardNumber}>
                                <input className={cls.Input} />
                              </div>
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                      <Grid item lg={6}>
                        <Grid container>
                          <div className={cls.Columns}>
                            <img 
                              alt="Credit Cards" 
                              className={cls.CreditCardIcon} 
                              src="https://cache.hbfiles.com/assets/miscellaneous/payment-strip-f751680936dec11c6599aacdd9dbfa9b.png"/>
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>
                </div>
                <div className={cls.Row}>
                  <div className={cls.MarginBottom}>
                    <Grid container>
                      <Grid item lg={3}>
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
                      <Grid item lg={3}>
                        <Grid container>
                          <div className={cls.Columns}>
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
                        <button onClick={(event) => this.createJobHandler(event)} className={cls.ButtonBookingCore}>Crear trabajo</button>
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