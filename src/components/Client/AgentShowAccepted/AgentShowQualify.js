// Dependencias
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Paper,
  Grid,
  TextField,
  Typography,
  Button,
  } from 'material-ui';

// Componentes
import cls from './JobShow.css';
import { start } from 'pretty-error';
// import Reviews from '../../../components/Agent/Reviews/Reviews';

import * as actions from '../../../store/actions';
var Rating = require('react-rating');

class AgentShowQualify extends Component {
  componentDidMount() {
    this.props.onQualify(localStorage.getItem('token'), this.props.match.params.job_id);
  }
  registerQualify = (event) => {
    event.preventDefault();
    const formData = {};
    for (const formElementIdentifier in this.state.registerForm) {
      formData[formElementIdentifier] = this.state.registerForm[formElementIdentifier].value;
    }
    const customer = {
      customer: formData,
    };
    this.props.onRegisterUser(customer);
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <Grid container justify="center" className={cls.root}>
          <Grid item xs={10} sm={10}>
            <Paper elevation={0}>
              <Grid container justify="center">
                <Grid item xs={12}>
                  <Paper elevation={0}>
                    <Typography variant="title" gutterBottom className={cls.Typogra}>Calificar Agenten</Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Paper elevation={0}>
              <Grid container justify="center" className={cls.Boot}>
                <Grid item xs={12}>
                  <Paper elevation={0}>
                    <Grid container spacing={24} justify="center">
                      <Grid item xs={10} sm={12}>
                        <Paper elevation={0}>
                          <Grid container spacing={24} justify="center">
                            <Grid item xs={12} sm={3}>
                              <Paper elevation={0}>
                                <TextField
                                  id="multiline-static"
                                  label="Comenta tú calificación"
                                  multiline
                                  rows="4"
                                  // className={classes.textField}
                                  margin="normal"
                                />
                              </Paper>
                            </Grid>
                          </Grid>
                        </Paper>
                      </Grid>
                      <Grid item xs={10} sm={12}>
                        <Paper elevation={0}>
                          <Grid container spacing={24} justify="center">
                            <Grid item xs={12} sm={3}>
                              <Paper elevation={0}>
                                <Typography variant="title" gutterBottom className={cls.SubTypogra}>Selecciona tu preferencia</Typography>
                                  <Rating 
                                    // initialRating={this.props.agentRewiewsAverage}
                                    emptySymbol={<img src="http://dreyescat.github.io/react-rating/assets/images/star-empty.png" className={`${cls.Stars} ${"icon"}`} alt="starsMin" />}
                                    fullSymbol={<img src="http://dreyescat.github.io/react-rating/assets/images/star-full.png" className={`${cls.Stars} ${"icon"}`} alt="startFull" />}
                                  />
                              </Paper>
                            </Grid>
                          </Grid>
                        </Paper>
                      </Grid>
                      <Grid item xs={10} sm={12}>
                        <Paper elevation={0}>
                          <Grid container spacing={24} justify="center">
                            <Grid item xs={12} sm={3}>
                              <Paper elevation={0}>
                                <Button
                                  onClick={(event) => this.registerQualify(event)}
                                  className={cls.ButtonContratar}>
                                  ENVIAR CALIFICACION
                                </Button>
                              </Paper>
                            </Grid>
                          </Grid>
                        </Paper>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onQualify: (job_id, comment, qualification) => dispatch(actions.qualify(job_id, comment, qualification))
  };
};

export default connect(null, mapDispatchToProps) (AgentShowQualify);