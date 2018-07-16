// Dependencias
import React from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

// Componentes
import MenuBar from '../../MenuBar/MenuBarAgent';
import CalendarioComponent from '../../../components/Agent/Calendario/CalendarioComponent'

// Css
import cls from './Calendario.css';

class Calendario extends React.Component {    
  render() {
    return (
      <div>
        <MenuBar />
        <Grid container justify="center" className={cls.root}>
          <Grid item xs={12} sm={10}>
            <Paper elevation={0}>
              <Grid container justify="center">
                <Grid item xs={12}>
                  <Paper elevation={0}>
                    <Typography variant="title" gutterBottom className={cls.Typogra}>Calendario</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Paper elevation={0}>
                    <CalendarioComponent />
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  };
}

export default Calendario;