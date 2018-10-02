// Dependencias
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import {
  Paper,
  Grid,
  Typography,
  Button,
} from 'material-ui';
import purple from 'material-ui/colors/purple';

import * as action from '../../../store/actions';

// Component
import LogoNocNoc from '../../../assets/LogoBlanco.svg';
import Twitter from '../../../assets/twittericon.svg';
import Facebook from '../../../assets/facebookicon.svg';
import Instagram from '../../../assets/InstagramIcon.svg';
import GooglePlay from '../../../assets/AppPlayStore.svg';
import AppStore from '../../../assets/AppStore.svg';
import cls from './Contact.css';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 1,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  cssLabel: {
    '&$cssFocused': {
      color: purple[500],
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: purple[500],
    },
  },
  bootstrapRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 1,
    },
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 14,
    padding: '10px 0',
    textAlign: 'center',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
  fiels: {
    marginTop: 0,
  }
});

class Contact extends Component {
  state = {
    formData: {
      name: {
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        errorText: null,
      },
      celular: {
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        errorText: null,
      },
      email: {
        elementType: 'input',
        label: 'Correo',
        elementConfig: {
          type: 'email',
          placeholder: 'ejemplo@ejemplo.com',
        },
        value: '',
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
        errorText: null,
      },
    },
    formIsValid: false,
  }

  formContact = (event) => {
    event.preventDefault();
    const formData = {};
    for (const formElementIdentifier in this.state.formData) {
      formData[formElementIdentifier] = this.state.formData[formElementIdentifier].value;
    }
    const contact = {
      contact: formData,
    };
    this.props.onFormContact(contact);
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.formData,
      [controlName]: {
        ...this.state.formData[controlName],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.formData[controlName].validation,
        ).isValid,
        errorText: this.checkValidity(
          event.target.value,
          this.state.formData[controlName].validation,
        ).errorText,
        touched: true,
      },
    };

    let formIsValid = true;
    for (const inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }

    this.setState({
      formData: updatedControls,
      formIsValid,
    });
  }

  rateChangedHandler = (value, controlName) => {
    const updatedControls = {
      ...this.state.formData,
      [controlName]: {
        ...this.state.formData[controlName],
        value: value,
        valid: this.checkRateValidity(
          value,
          this.state.formData[controlName].validation,
        ).isValid,
        errorText: this.checkRateValidity(
          value,
          this.state.formData[controlName].validation,
        ).errorText,
        touched: true,
      },
    };

    let formIsValid = true;
    for (const inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }

    this.setState({
      formData: updatedControls,
      formIsValid,
    });
  }

  checkValidity(value, rules) {
    let isValid = true;
    let errorText = null;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
      errorText = 'Requerido.';
    }

    return {
      isValid,
      errorText,
    };
  }

  checkRateValidity(value, rules) {
    let isValid = true;
    let errorText = null;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value > 0 && isValid;
      errorText = 'Requerido.';
    }

    return {
      isValid,
      errorText,
    };
  }
  render (){
    const { classes } = this.props;
    return (
      <div className={cls.Contact}>
        <Grid container align="center">
          <Grid item xs={6} sm={6} md={3}>
            <Paper className={cls.Paper} elevation={0}>
              <Typography variant="title">
                <img src={LogoNocNoc} height="100px" alt="Logo" className={cls.LogoNocNoc}></img>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className= {`${cls.Paper} ${cls.Border}`} elevation={0}>
              <Grid container>
                <Grid item xs={12}>
                  <Paper className={`${cls.SubTitle} ${cls.Paper}`} elevation={0}>Conócenos</Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={cls.Paper} elevation={0}>
                    <ul className={cls.UlContact}>
                      <li className={cls.ListContact}>
                        <NavLink className={cls.Link} to="/">Quiénes Somos?</NavLink>
                      </li>
                      <li className={cls.ListContact}>
                        <NavLink className={cls.Link} to="/agente/registro">Quiero ser agente</NavLink>
                      </li>
                      <li className={cls.ListContact}>
                        <NavLink className={cls.Link} to="/">Principios y Valores</NavLink>
                      </li>
                      <li className={cls.ListContact}>
                        <a className={cls.Link} href="/politicas#policies">Términos y Condiciones</a>
                      </li>
                    </ul>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={`${cls.Paper} ${cls.Border}`} elevation={0}>
              <Grid container justify="center">
                <Grid item xs={12}>
                  <Paper className={`${cls.SubTitle} ${cls.Paper}`} elevation={0}>Contactos</Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={`${cls.SubSubTitle} ${cls.Paper}`} elevation={0}>Déjanos tus datos y nos contactaremos contigo.</Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={cls.Paper} elevation={0}>
                    <input
                      className={cls.Field}
                      placeholder="Nombre"
                      id="name"
                      multiline="true"
                      margin="normal"
                      onChange={(event) => this.inputChangedHandler(event, 'name')}
                      InputProps={{
                        disableUnderline: true,
                        classes: {
                          root: classes.bootstrapRoot,
                          input: classes.bootstrapInput,
                        },
                      }}
                      InputLabelProps={{
                        shrink: true,
                        className: classes.bootstrapFormLabel,
                      }}
                    />
                    {!this.state.formData.name.valid && this.state.formData.name.touched ? (
                      <div className={cls.ErrorText}>
                        {this.state.formData.name.errorText}
                      </div>
                    ) : null}
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={cls.Paper} elevation={0}>
                    <input
                      className={cls.Field}
                      placeholder="Celular"
                      id="multiline-static"
                      multiline="true"
                      margin="normal"
                      onChange={(event) => this.inputChangedHandler(event, 'celular')}
                      InputProps={{
                        disableUnderline: true,
                        classes: {
                          root: classes.bootstrapRoot,
                          input: classes.bootstrapInput,
                        },
                      }}
                      InputLabelProps={{
                        shrink: true,
                        className: classes.bootstrapFormLabel,
                      }}
                    />
                    {!this.state.formData.celular.valid && this.state.formData.celular.touched ? (
                      <div className={cls.ErrorText}>
                        {this.state.formData.celular.errorText}
                      </div>
                    ) : null}
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={cls.Paper} elevation={0}>
                    <input
                      className={cls.Field}
                      placeholder="Correo"
                      id="multiline-static"
                      multiline="true"
                      margin="normal"
                      onChange={(event) => this.inputChangedHandler(event, 'email')}
                      InputProps={{
                        disableUnderline: true,
                        classes: {
                          root: classes.bootstrapRoot,
                          input: classes.bootstrapInput,
                        },
                      }}
                      InputLabelProps={{
                        shrink: true,
                        className: classes.bootstrapFormLabel,
                      }}
                    />
                    {!this.state.formData.email.valid && this.state.formData.email.touched ? (
                      <div className={cls.ErrorText}>
                        {this.state.formData.email.errorText}
                      </div>
                    ) : null}
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={cls.Paper} elevation={0}>
                    {this.state.formIsValid ? (
                      <Button
                      onClick={(event) => this.formContact(event, this.formContact)}
                      className={cls.ButtonContratar}
                      >Enviar</Button>
                    ): (
                      <Button className={cls.pageButtonInvalid}>Enviar</Button>
                    )}
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper className={cls.Paper} elevation={0}>
              <Grid container justify="center">
                <Grid item xs={12}>
                  <Paper className={`${cls.SubTitle} ${cls.Paper}`} elevation={0}>Descarga</Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={`${cls.SubSubTitle} ${cls.Paper}`} elevation={0}>Descarga Noc Noc desde la tienda de tu Smatphone</Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper className={cls.PaperSocial} elevation={0}>
                    <img src={GooglePlay} className={cls.iconSocial} alt="GoolglePlay" />
                    <img src={AppStore} className={cls.iconSocial} alt="App Store" />
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} className={cls.PaperSocial}>
            <a href="https://www.facebook.com/appnocnoc/" target="_blank"><img src={Facebook} alt="AppLogo" className={cls.Styleicon} /></a>
            <a href="https://www.instagram.com/nocnoc_ec/?hl=es-la" target="_blank"><img src={Instagram} alt="AppLogo" className={cls.Styleicon} /></a>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onFormContact: formData => dispatch(action.formContact(formData)),
});

export default connect(null, mapDispatchToProps) (withStyles(styles)(Contact));