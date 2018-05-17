import React, { Component } from 'react';

// Components
import {
  TextField,
  Grid,
  Paper,
  Typography,
  Button,
  FormControl,
  FormGroup,
  MenuItem,
  Select,
  InputLabel,
  FormControlLabel,
  Checkbox,
} from 'material-ui';
import { DateTimePicker } from 'material-ui-pickers';
import Input from '../../UI/Input/Input';
import PropertyForm from '../PropertyForm/PropertyForm';

// Css
import cls from './BookingForm.css';

class BookingForm extends Component {
  state = {
    has_properties: this.props.properties.length > 0,
    value: '',
    form: {
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
          price: service.price
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

  inputChangedHandler = (event, key, type) => {
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

  changeCheckboxHandler = (event, checked, key, type) => {
    const updatedControls = {
      ...this.state.form,
      services_addons: {
        ...this.state.form.services_addons,
        [key]: {
          ...this.state.form.services_addons[key],
          active: checked,
        }
      }
    }

    this.setState({
      form: updatedControls,
    });
  }

  handleServiceChange = (event) => {
    if (event.target.value !== "") {
      const service = this.props.service_base.find(s => s.id === event.target.value);
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
    console.log(dateTime.format('MMMM Do YYYY, h:mm:ss a'));
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        started_at: dateTime.format(),
      }
    })
  }

  render () {
    console.log(this.state);
    const formElementBase = [];
    const formElementAddon = [];
    for (let key in this.state.form.services_base) {
      formElementBase.push({
        id: key,
        config: this.state.form.services_base[key]
      });
    }
    for (let key in this.state.form.services_addons) {
      formElementAddon.push({
        id: key,
        config: this.state.form.services_addons[key]
      });
    }
    let properties = this.props.properties.length > 0 ? (
      <Paper className={cls.Paper} elevation={2}>
        <Typography variant="headline" component="h3">
          Propiedad
        </Typography>
        <FormControl className={cls.Select}>
          <InputLabel htmlFor="age-simple">Eliga una propiedad</InputLabel>
          <Select
            value={this.state.form.property}
            onChange={this.handlePropertyChange}
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {this.props.properties.map(property => (
              <MenuItem
                key={property.id}
                value={property.attributes.id}>{property.attributes.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Paper>
    ) : (
      <Paper className={cls.Paper} elevation={2}>
        <Typography variant="headline" component="h3">
          No tienes propiedades
        </Typography>
        <PropertyForm 
          cities={this.props.cities}
          neightborhoods={this.props.neightborhoods}
          fetchNeightborhoods={this.props.fetchNeightborhoods}
          createProperty={this.props.createProperty}/>
      </Paper>
    );
    let form = (
      <div>
        <Grid item xs={10}>
          <Paper className={cls.Paper} elevation={2}>
            <Grid container justify="center">
              <Grid item xs={12}>
                <Typography variant="headline" component="h3">
                  Servicio Base
                </Typography>
              </Grid>
              <TextField
                id="select-service"
                select
                label="Eliga un Servicio"
                className={cls.Select}
                value={this.state.value}
                onChange={this.handleServiceChange}
                margin="normal">
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {this.props.service_base.map(service => (
                  <MenuItem
                    key={service.id}
                    value={service.id}>{service.name}</MenuItem>
                ))}
              </TextField>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper className={cls.Paper} elevation={2}>
            <Grid container justify="center">
              <Grid item xs={12}>
                <Typography variant="headline" component="h3">
                  Servicios Adicionales
                </Typography>
              </Grid>
              {formElementAddon.map(formElement => (
                <Grid key={formElement.id} item className={cls.Item} xs={12}>
                  <Typography variant="subheading" component="p">
                    {formElement.config.label}
                  </Typography>
                  <FormGroup row>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={formElement.config.active}
                            onChange={(event, checked) => this.changeCheckboxHandler(event, checked, formElement.id, 'addon')}
                            value={`${formElement.config.value}`}
                          />
                        }
                        label={formElement.config.label}
                      />
                    </FormGroup>
                  {formElement.config.elementType === 'input' && (
                    <Input
                      elementType={formElement.config.elementType} 
                      elementConfig={formElement.config.elementConfig}
                      value={formElement.config.value}
                      changed={event => this.inputChangedHandler(event, formElement.id, 'addon')}
                    />
                  )}
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={10}>
         {properties} 
        </Grid>
        <Grid item xs={10}>
          <Paper className={cls.Paper} elevation={2}>
            <Grid container justify="center">
              <Grid item xs={12}>
                <Typography variant="headline" component="h3">
                  Seleccionar Fecha
                </Typography>
              </Grid>
              <Grid item xs={12}>
                  <DateTimePicker
                    value={this.state.form.started_at}
                    onChange={this.changeDatetimeHandler}/>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper className={cls.Paper} elevation={2}>
            <Button onClick={this.createJobHandler}>
              Submit
            </Button>
          </Paper>
        </Grid>
      </div>
    );
    return(
      <div>
        <form>
          <Grid container justify="center" className={cls.BookingForm}>
            {form}
          </Grid>
        </form>
      </div>
    );
  }
}

export default BookingForm;