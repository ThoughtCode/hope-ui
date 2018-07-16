// Dependencias
import React, { Component } from 'react';
import $ from 'jquery';

// Componentes
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import MenuBar from '../../../containers/MenuBar/MenuBarAgent';

// CSS
import 'fullcalendar/dist/fullcalendar.css';
import 'fullcalendar/dist/fullcalendar.print.min.css';
import 'fullcalendar/dist/fullcalendar.js';

class Calendario extends Component {
  render() {
    const { calendar } = this.refs;
    $(calendar).fullCalendar({
      events: this.props.events,
      eventLimit: 3,
    });
    return (
      <div>
        <MenuBar />
        <Grid container justify="center">
          <Grid item xs={12}>
            <Paper elevation={0}>
              <div ref='calendar'></div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  };
};

export default Calendario;