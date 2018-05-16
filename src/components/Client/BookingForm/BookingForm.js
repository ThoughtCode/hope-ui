import React, { Component } from 'react';

// Components
import {
  Grid,
  Paper,
  Typography,
  Button,
} from 'material-ui';
import Input from '../../UI/Input/Input';

// Css
import cls from './BookingForm.css';

class BookingForm extends Component {
  state = {
    service_base: {
      elementType: 'input',
      label: 'Cantidad',
      elementConfig: {
        type: 'number',
        placeholder: 'Cantidad',
      },
      value: '',
    },
    property: {
      elementType: 'select',
      label: 'Propiedad',
      elementConfig: {
        type: 'select',
        placeholder: 'Propiedad',
      },
      value: '',
    }
  }
  render () {
    return(
      <div>
        <Grid container justify="center" className={cls.BookingForm}>
          <Grid item xs={10}>
              <Paper className={cls.Paper} elevation={2}>
                <Grid container justify="center">
                  <Grid item xs={12}>
                    <Typography variant="headline" component="h3">
                      Servicio Base
                    </Typography>
                  </Grid>
                  <Grid item className={cls.Item}>
                    <Typography variant="subheading" component="p">
                      Numero de cuartos: 
                    </Typography>
                    <Input
                      elementType={this.state.service_base.elementType} 
                      elementConfig={this.state.service_base.elementConfig}/>
                  </Grid>
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
                  <Grid item className={cls.Item}>
                    <Typography variant="subheading" component="p">
                      Numero de ventanas: 
                    </Typography>
                    <Input
                      elementType={this.state.service_base.elementType} 
                      elementConfig={this.state.service_base.elementConfig}/>
                  </Grid>
                </Grid>
              </Paper>
          </Grid>
          <Grid item xs={10}>
              <Paper className={cls.Paper} elevation={2}>
                <Typography variant="headline" component="h3">
                  Propiedad
                </Typography>
                <Input
                  elementType={this.state.property.elementType} 
                  value={this.state.property.value}
                  elementConfig={this.state.property.elementConfig}/>
              </Paper>
          </Grid>
          <Grid item xs={10}>
              <Paper className={cls.Paper} elevation={2}>
                <Button>
                  Submit
                </Button>
              </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default BookingForm;