import React, { Component } from 'react';
import moment from 'moment';

// Components
import {
  Grid,
} from 'material-ui';
import BookingForm from '../../BookingForm/BookingForm';
import HowWorks from '../../HowWorks/HowWorks';
import BookingTotal from './BookingTotal/BookingTotal';

// Css
import cls from './ServiceBooking.css';

class ServiceBooking extends Component {
  state = {
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
        price: 0
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
  };

  render() {
    return (
      <div className={cls.ServiceBooking}>
        <Grid container justify="center">
          <Grid item xs={12} sm={11} md={10} lg={10}>
            <Grid container justify="center">
              <Grid item xs={12} sm={11} md={7} lg={7}>
                <Grid container>
                  <BookingForm
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
                    createJobHandler={this.createJobHandler}/>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={11} md={5} lg={3}>
                <Grid container>
                  <Grid item xs={6} lg={12}>
                    <BookingTotal form={this.state.form} />
                  </Grid>
                  <Grid item xs={6} lg={12}>
                    <HowWorks />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ServiceBooking;