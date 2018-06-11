import React from 'react';
import classNames from 'classnames';
import {Grid, Divider} from 'material-ui';
import PropTypes from 'prop-types';
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

class Filter extends React.Component {
  state = {
    value: 'semanal',
  };
  
  handleChange = event => {
    this.setState({ value: event.target.value });
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
            className={classNames(classes.margin, cls.textField)}
            InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>, }}
          />
          <TextField
            label="Maximo"
            id="simple-start-adornment"
            className={classNames(classes.margin, cls.textField)}
            InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment>, }}
          />
          <TextField
            label="Fecha"
            id="simple-start-adornment"
            className={classNames(classes.margin, cls.textField)}
            InputProps={{ startAdornment: <InputAdornment position="start">Inicio</InputAdornment>, }}
          />
          <TextField
            label="Fecha"
            id="simple-start-adornment"
            className={classNames(classes.margin, cls.textField)}
            InputProps={{ startAdornment: <InputAdornment position="start">Fin</InputAdornment>, }}
          />
          <FormControl component="fieldset" required error className={classes.formControl}>
            <RadioGroup
              aria-label="filter"
              name="semanal"
              className={classes.group}
              value={this.state.value}
              onChange={this.handleChange}
            >
              <FormControlLabel value="semanal" control={<Radio color="primary" />} label="Semanal" />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset" required error className={classes.formControl}>
            <RadioGroup
              aria-label="filter"
              name="una-vez"
              className={classes.group}
              value={this.state.value}
              onChange={this.handleChange}
            >
              <FormControlLabel value="male" control={<Radio color="primary" />} label="Una Vez" />
            </RadioGroup>
          </FormControl>
          <Button variant="contained" className={`${cls.pageButtonActive} ${classes.button}`}>FILTRAR</Button>
        </Grid>
        </Grid>
        <Divider />
      </div>
    );
  }
}

Filter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Filter);