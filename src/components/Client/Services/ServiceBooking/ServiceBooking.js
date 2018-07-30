import React, { Component } from 'react';
import moment from 'moment';
import Alert from 'react-s-alert';

// Components
import {
  Grid,
} from 'material-ui';
import BookingForm from '../../BookingForm/BookingForm';
import HowWorks from '../../HowWorks/HowWorks';
import BookingTotal from './BookingTotal/BookingTotal';
import Checking from './Checking/Checking';
import Payment from './Payment/Payment';
import Thanks from './Thanks/Thanks';

// Css
import cls from './ServiceBooking.css';

const start = moment();
const remainder = 30 - (start.minute() % 30);
 
const dateTime = moment(start).add(remainder, "minutes");

console.log(dateTime);

class ServiceBooking extends Component {
  state = {
    value: '',
    form: {
      recurrent: {
        value: '0',
      },
      services_base: {
        id: 0,
        value: 0,
        name: '',
        time: 0,
        price: 0,
        errorText: 'Debe elegir un servicio principal',
      },
      services_addons: [],
      property: {
        value: '',
        errorText: 'Debe elegir una propiedad'
      },
      details: '',
      started_at: dateTime,
      finished_recurrency_at: null,
    },
    service: true,
    checking: false,
    payment: false,
    thanks: false,
  };

  componentDidMount () {
    let services_addons = [];
    this.props.services_addons.forEach(service => {
      if (service.quantity) {
        let input = {
          label: service.name,
          value: 1,
          active: false,
          id: service.id,
          icon: service.icon,
          quantity: service.quantity,
          time: service.time,
          price: service.price,
          time_per_price: service.time,
        };   
      services_addons.push(input)
      } else {
        let checkbox = {
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
  };

  handlePropertyChange = (event) => {
    if (event.target.value !== "") {
      this.setState({
        ...this.state,
        form: {
          ...this.state.form,
          property: {
            ...this.state.form.property,
            value: event.target.value,
          },
        },
      });
    } else {
      this.setState({
        ...this.state,
        form: {
          ...this.state.form,
          property: {
            ...this.state.form.property,
            value: '',
          },
        },
      });
    };
  };

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
  };

  handleTextChange = (event) => {
    const updatedControls = {
      ...this.state.form,
      details: event.target.value,
    };

    this.setState({
      form: updatedControls,
    });
  };

  handleServiceChange = (event) => {
    if (event.target.value !== "") {
      const service = this.props.service_base.find(s => s.id === parseInt(event.target.value, 10));
      const updatedObject = {
        id: service.id,
        value: service.id,
        name: service.name,
        time: service.time,
        price: service.price,
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
      const updatedObject = {
        id: 0,
        value: 0,
        name: '',
        time: 0,
        price: 0,
        errorText: 'Debe elegir un servicio principal',
      }
      this.setState({
        ...this.state,
        value: event.target.value,
        form: {
          ...this.state.form,
          services_base: updatedObject,
        },
      });
    }
  };

  changeCheckboxHandler = (event, key) => {
    event.preventDefault();
    let a = this.state.form.services_addons.slice();
    a[key].active = !this.state.form.services_addons[key].active
    this.setState({
      ...this.state.form,
      services_addons: a
    });
  };

  inputChangedHandler = (event, key) => {
    let a = this.state.form.services_addons.slice();
    a[key].value = event.target.value;
    a[key].time = event.target.value * a[key].time_per_price;
    this.setState({
      ...this.state.form,
      services_addons: a,
    });
  };

  changeDatetimeFinishedHandler = (dateTime) => {
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        finished_recurrency_at: moment(dateTime),
      }
    });
  };

  changeDatetimeHandler = (dateTime) => {
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        started_at: moment(dateTime),
      }
    })
  };

  createJobHandler = (event) => {
    event.preventDefault();
    const formData = {};
    formData["property_id"] = this.state.form.property.value;
    formData["started_at"] = this.state.form.started_at;
    formData["details"] = this.state.form.details;
    formData["frequency"] = parseInt(this.state.form.recurrent.value, 10);
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
    if (this.state.form.recurrent.value !== '0' ) {
      formData["finished_recurrency_at"] = this.state.form.finished_recurrency_at;
    }
    const job = {
      job: formData,
    };
    this.props.createJob(localStorage.getItem('token'), job);
  };

  nextPage = (event, actual_page) => {
    event.preventDefault();
    if (actual_page === 'Service') {
      if (this.state.form.services_base.id === 0) {
        Alert.error(this.state.form.services_base.errorText, {
          position: 'top',
          effect: 'genie',
        });
      } else if (this.state.form.property.value === '' || this.state.form.property.value === 'Propiedad') {
        Alert.error(this.state.form.property.errorText, {
          position: 'top',
          effect: 'genie',
        });
      } else if (this.state.form.started_at < Date.now()) {
        Alert.error('La fecha no puede ser menor a hoy', {
          position: 'top',
          effect: 'genie',
        });
      } else if (this.state.form.recurrent.value !== '0' && this.state.form.finished_recurrency_at < this.state.form.started_at) {
        Alert.error('La fecha de finalizacion del trabajo no puede ser menor a la fecha de inicio', {
          position: 'top',
          effect: 'genie',
        });
      } else {
        this.setState({
          service: false,
          checking: true,
          payment: false,
          thanks: false
        });
      }
    } else if (actual_page === 'Checking') {
      this.setState({
        service: false,
        checking: false,
        payment: true,
        thanks: false,
      });
    } else if (actual_page === 'Payment') {
      this.createJobHandler(event);
      this.setState({
        service: false,
        checking: false,
        payment: false,
        thanks: true,
      });
    }
  }

  backPage = (event, actual_page) => {
    event.preventDefault();
    if (actual_page === 'Checking') {
      this.setState({
        service: true,
        checking: false,
        payment: false,
        thanks: false
      });
    } else if (actual_page === 'Payment') {
      this.setState({
        service: false,
        checking: true,
        payment: false,
        thanks: false,
      });
    }
  }
  render() {
    return (
      <div className={cls.ServiceBooking}>
        <Grid container justify="center">
          <Grid item xs={12} sm={11} md={12} lg={10}>
            <Grid container justify="center">
              {this.state.service ? (
                <Grid container justify="center">
                  <Grid item xs={12} sm={12} md={7} lg={7}>
                    <Grid container>
                      <BookingForm
                        nextPage={this.nextPage}
                        value={this.state.value}
                        form={this.state.form}
                        service_base={this.props.service_base}
                        properties={this.props.properties}
                        cities={this.props.cities}
                        neightborhoods={this.props.neightborhoods}
                        fetchNeightborhoods={this.props.fetchNeightborhoods}
                        createProperty={this.props.createProperty}
                        handlePropertyChange={this.handlePropertyChange}
                        handleRecurrentChange={this.handleRecurrentChange}
                        handleServiceChange={this.handleServiceChange}
                        changeCheckboxHandler={this.changeCheckboxHandler}
                        inputChangedHandler={this.inputChangedHandler}
                        changeDatetimeHandler={this.changeDatetimeHandler}
                        changeDatetimeFinishedHandler={this.changeDatetimeFinishedHandler}
                        handleTextChange={this.handleTextChange}/>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={5} lg={5}>
                    <Grid container>
                      <Grid item xs={12} sm={6} md={12} lg={12}>
                        <BookingTotal form={this.state.form} />
                      </Grid>
                      <Grid item xs={12} sm={6} md={12} lg={12}>
                        <HowWorks />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              ) : null}
              {this.state.checking ? (
                <Grid container justify="center">
                  <Grid item xs={12} sm={11} md={8} lg={8}>
                    <Grid container justify="center">
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Checking
                          backPage={this.backPage}
                          nextPage={this.nextPage}
                          form={this.state.form} />
                      </Grid>
                      <Grid item xs={12} sm={8} md={7} lg={6}>
                        <HowWorks />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>                
              ) : null}
              {this.state.payment ? (
                <Grid container justify="center">
                  <Grid item xs={12} sm={11} md={8} lg={8}>
                    <Grid container>
                      <Grid item xs={12} lg={12}>
                        <Payment
                          backPage={this.backPage}
                          nextPage={this.nextPage} />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>                
              ) : null}
              {this.state.thanks ? (
                <Grid container justify="center">
                  <Grid item xs={12} sm={11} md={8} lg={8}>
                    <Grid container>
                      <Grid item xs={12} lg={12}>
                        <Thanks />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>                
              ) : null}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  };
};

export default ServiceBooking;