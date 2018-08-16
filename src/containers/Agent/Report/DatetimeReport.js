import React, { Component } from 'react';
import Datetime from 'react-datetime';

// Css
import cls from './Report.css';

class DatePickers extends Component {
  render() {
    return (
      <form className={cls.containerDatetimeReport} noValidate>
        <Datetime
          className={cls.InputDateTime}
          dateFormat="MM/DD/YYYY"
          inputProps={{
            className: 'form-control',
            placeholder: 'Desde',
            label: 'Fecha',
          }}
        />
        <Datetime
          className={cls.InputDateTime}
          dateFormat="MM/DD/YYYY"
          inputProps={{
            className: 'form-control',
            placeholder: 'Hasta',
            label: 'Fecha',
          }}
        />
        <button
          // onClick={(event) => this.props.filterHandler(event)}
          className={cls.FilterBtn}
        >Filtrar</button>
      </form>
    );
  }
}

export default DatePickers;