import React, { Component } from 'react';
import Datetime from 'react-datetime';
import moment from 'moment';
import {TextField} from 'material-ui';

// Css
import cls from './Report.css';

class DatePickers extends Component {
  // validDates = current => {
  //   return current.isAfter(moment(this.props.filter.date_from));
  //   // return current.isAfter(Datetime.moment().subtract(1, 'days'));
  // };

  // validDatesTo = current => {
  //   return current.isAfter(Datetime.moment().subtract(1, 'days'));
  //   // return current.isAfter(moment(this.props.filter.date_from));
  // };

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
    // console.log(this.props)
    return (
      <form className={cls.containerDatetimeReport} noValidate>
        <Datetime
          className={cls.InputDateTime}
          isValidDate={this.validDates}
          // value={moment(this.props.filter.date_from)}
          onChange={(dateTime) => this.props.changeDatetimeHandler(dateTime, 'date_from')}
          dateFormat="MM/DD/YYYY"
          timeFormat={false}
          inputProps={{
            className: 'form-control',
            placeholder: 'Desde',
            label: 'Fecha',
          }}
        />
        <Datetime
          className={cls.InputDateTime}
          isValidDate={this.validDatesTo}
          id="simple-start-adornment"
          // value={moment(this.props.filter.date_to)}
          onChange={(dateTime) => this.props.changeDatetimeHandler(dateTime, 'date_to')}
          dateFormat="MM/DD/YYYY"
          timeFormat={false}
          inputProps={{
            className: 'form-control',
            placeholder: 'Hasta',
            label: 'Fecha',
          }}
        />
        <button onClick={(event) => this.props.filterHandler(event)} className={cls.FilterBtn}>Filtrar</button>
      </form>
    );
  }
}

export default DatePickers;