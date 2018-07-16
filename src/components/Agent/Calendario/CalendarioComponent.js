// Dependencias
import React from 'react';
import $ from 'jquery';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

// Componentes
import MenuBar from '../../../containers/MenuBar/MenuBarAgent';

// CSS
import 'fullcalendar/dist/fullcalendar.css';
import 'fullcalendar/dist/fullcalendar.print.min.css';
import 'fullcalendar/dist/fullcalendar.js';

class Calendario extends React.Component {
  state = {
    events: [
      {
        title: 'All Day Event Jose',
        start: '2018-06-05'
      },
      {
        title: 'All Day Event',
        start: '2018-06-05'
      },
      {
        title: 'Long Event',
        start: '2018-06-05',
        end: '2018-06-10'
      },
      {
        id: 999,
        title: 'Repeating Event clicker',
        start: '2018-06-05T16:00:00'
      },
      {
        id: 888,
        title: 'Repeating Event',
        start: '2018-06-05T16:00:00'
      },
      {
        title: 'Conference',
        start: '2018-06-05',
        end: '2017-05-13'
      },
      {
        title: 'Meeting',
        start: '2018-06-12T10:30:00',
        end: '2018-06-12T12:30:00'
      },
      {
        title: 'Birthday Party',
        start: '2018-06-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2018-06-11'
      }
    ],		
  }
  componentDidMount() {
    const { calendar } = this.refs;
    $(calendar).fullCalendar({
      eventClick: (eventObj) => {
        if (eventObj.id === 999) {
          alert(
          'Clicked Pepito' + eventObj.title
          );
        }else if (eventObj.id === 888) {
          alert(
          'Clicked Pepito 888' + eventObj.title
          );
        }
        return false;
      },
      events: this.state.events,
      eventLimit: 3,
    });
  };
  render() {
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

document.getElementById('root')

export default Calendario;