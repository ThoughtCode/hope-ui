import React, { Component } from 'react';
import Datetime from 'react-datetime';
import classNames from 'classnames';
import moment from 'moment';

import {Grid, Divider} from 'material-ui';
import { withStyles } from 'material-ui/styles';
import InputAdornment from 'material-ui/Input/InputAdornment';
import TextField from 'material-ui/TextField';
import Radio from 'material-ui/Radio';
import RadioGroup from 'material-ui/Radio/RadioGroup';
import FormControl from 'material-ui/Form/FormControl';
import FormControlLabel from 'material-ui/Form/FormControlLabel';
import Button from 'material-ui/Button';

// Css
import cls from './Filter.css'

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
});

class Filter extends Component {
  state = {
    filter: {
      min_price: 0,
      max_price: 0,
      date_from: Date.now(),
      date_to: Date.now(),
      frequency: '0',
    },
  };

  changeDatetimeHandler = (dateTime, key) => {
    this.setState({
      ...this.state,
      filter: {
        ...this.state.filter,
        [key]: moment(dateTime),
      }
    })
  };
  
  handleChange = (event, key) => {
    this.setState({
      ...this.state,
      filter: {
        ...this.state.filter,
        [key]: event.target.value,
      },
    });
  }

  filterHandler = (event) => {
    event.preventDefault();
    const filter = this.state.filter;
    this.props.filter(localStorage.getItem('token'), filter);
  };

  renderInput = (props) => {
    return (
      <div>
        <TextField
          InputLabelProps={{
            shrink: true,
          }}
          {...props}/>
      </div>
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={cls.root}>
        <Grid container align="center" alignItems="center">
          <Grid item xs={12}>
          <i className={`${cls.IconStyle} ${"material-icons"}`}>date_range</i>
          <TextField
            label="Minimo"
            id="simple-start-adornment"
            value={this.state.filter.min_price}
            onChange={(event) => this.handleChange(event, 'min_price')}
            className={classNames(classes.margin, cls.textField)}
            InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>, }}
          />
          <TextField
            label="Maximo"
            id="simple-start-adornment"
            value={this.state.filter.max_price}
            onChange={(event) => this.handleChange(event, 'max32_price')}
            className={classNames(classes.margin, cls.textField)}
            InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment>, }}
          />
          <Datetime
            label="Fecha"
            id="simple-start-adornment"
            value={this.state.filter.date_from}
            onChange={(dateTime) => this.changeDatetimeHandler(dateTime, 'date_from')}
            dateFormat="MM/DD/YYYY"
            renderInput={this.renderInput}
            timeFormat={false}
            className={classNames(classes.margin, cls.textField)}
            inputProps={{
              className: classNames(classes.margin, cls.textField),
              placeholder: 'Inicio',
              label: 'Fecha',
            }}
          />
          <Datetime
            label="Fecha"
            id="simple-start-adornment"
            value={this.state.filter.date_to}
            onChange={(dateTime) => this.changeDatetimeHandler(dateTime, 'date_to')}
            dateFormat="MM/DD/YYYY"
            renderInput={this.renderInput}
            timeFormat={false}
            className={classNames(classes.margin, cls.textField)}
            inputProps={{
              className: classNames(classes.margin, cls.textField),
              placeholder: 'Fin',
              label: 'Fecha',
            }}
          />
          <FormControl component="fieldset" required error className={classes.formControl}>
            <RadioGroup
              aria-label="filter"
              name="una-vez"
              className={classes.group}
              value={this.state.filter.frequency}
              onChange={(event) => this.handleChange(event, 'frequency')}
            >
              <FormControlLabel value="0" control={<Radio color="primary" />} label="Una Vez" />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset" required error className={classes.formControl}>
            <RadioGroup
              aria-label="filter"
              name="una-vez"
              className={classes.group}
              value={this.state.filter.frequency}
              onChange={(event) => this.handleChange(event, 'frequency')}
            >
              <FormControlLabel value="1" control={<Radio color="primary" />} label="Diario" />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset" required error className={classes.formControl}>
            <RadioGroup
              aria-label="filter"
              name="una-vez"
              className={classes.group}
              value={this.state.filter.frequency}
              onChange={(event) => this.handleChange(event, 'frequency')}
            >
              <FormControlLabel value="2" control={<Radio color="primary" />} label="Semanal" />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset" required error className={classes.formControl}>
            <RadioGroup
              aria-label="filter"
              name="semanal"
              className={classes.group}
              value={this.state.filter.frequency}
              onChange={(event) => this.handleChange(event, 'frequency')}
            >
              <FormControlLabel value="3" control={<Radio color="primary" />} label="Mensual" />
            </RadioGroup>
          </FormControl>
          <Button onClick={(event) => this.filterHandler(event)} className={`${cls.pageButtonActive} ${classes.button}`}>FILTRAR</Button>
        </Grid>
        </Grid>
        <Divider />
      </div>
    );
  }
}

export default withStyles(styles)(Filter);