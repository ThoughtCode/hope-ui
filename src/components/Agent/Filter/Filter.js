import React, { Component } from 'react';
import Datetime from 'react-datetime';
import classNames from 'classnames';
import moment from 'moment';

// Components
import { Grid, Divider } from 'material-ui';
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
  validDates = current => {
    return current.isAfter(Datetime.moment().subtract(1, 'days'));
  };

  validDatesTo = current => {
    return current.isAfter(moment(this.props.filter.date_from));
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
              value={this.props.filter.min_price}
              onChange={(event) => this.props.handleChange(event, 'min_price')}
              className={classNames(classes.margin, cls.textField)}
              InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>, }}
            />
            <TextField
              label="Maximo"
              id="simple-start-adornment"
              value={this.props.filter.max_price}
              onChange={(event) => this.props.handleChange(event, 'max_price')}
              className={classNames(classes.margin, cls.textField)}
              InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment>, }}
            />
            <Datetime
              isValidDate={this.validDates}
              label="Fecha"
              id="simple-start-adornment"
              value={moment(this.props.filter.date_from)}
              onChange={(dateTime) => this.props.changeDatetimeHandler(dateTime, 'date_from')}
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
              isValidDate={this.validDatesTo}
              label="Fecha"
              id="simple-start-adornment"
              value={moment(this.props.filter.date_to)}
              onChange={(dateTime) => this.props.changeDatetimeHandler(dateTime, 'date_to')}
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
                value={this.props.filter.frequency}
                onChange={(event) => this.props.handleChange(event, 'frequency')}
              >
                <FormControlLabel value="0" control={<Radio color="primary" />} label="Una Vez" />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset" required error className={classes.formControl}>
              <RadioGroup
                aria-label="filter"
                name="una-vez"
                className={classes.group}
                value={this.props.filter.frequency}
                onChange={(event) => this.props.handleChange(event, 'frequency')}
              >
                <FormControlLabel value="1" control={<Radio color="primary" />} label="Semanal" />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset" required error className={classes.formControl}>
              <RadioGroup
                aria-label="filter"
                name="una-vez"
                className={classes.group}
                value={this.props.filter.frequency}
                onChange={(event) => this.props.handleChange(event, 'frequency')}
              >
                <FormControlLabel value="2" control={<Radio color="primary" />} label="Quincenal" />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset" required error className={classes.formControl}>
              <RadioGroup
                aria-label="filter"
                name="semanal"
                className={classes.group}
                value={this.props.filter.frequency}
                onChange={(event) => this.props.handleChange(event, 'frequency')}
              >
                <FormControlLabel value="3" control={<Radio color="primary" />} label="Mensual" />
              </RadioGroup>
            </FormControl>
            <Button onClick={(event) => this.props.filterHandler(event)} className={`${cls.pageButtonActive} ${classes.button}`}>FILTRAR</Button>
            <Button onClick={() => window.location.reload() } className={`${cls.pageButtonActive} ${classes.button}`}>Ver Todos</Button>
          </Grid>
        </Grid>
        <Divider />
      </div>
    );
  }
}

export default withStyles(styles)(Filter);
