// Dependencias
import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Facebook from '../Img/Facebook.png';
import Twitter from '../Img/Twitter.png';

// Component
import './Contact.css';
import LogoNocNoc from '../Img/LogoBlanco.svg';

const stylesBox1 = {
  backgroundColor: '#0069a7',
  color: '#fff',
  padding: 30,
};

const styleButton = {
  backgroundColor: '#eee',
  color: '#0069a7',
  fontFamily: 'Arial',
}

class Contact extends Component {
  render() {
    return (
      <div className="Contact" direction={'column'} style={stylesBox1} >
        <Grid container spacing={16} justify='center'>
          <Grid item xs={8}>
            <Grid container>
              <Grid item xs={12} sm={2}>
                <Typography variant="headline" gutterBottom></Typography>
                <Typography variant="title">
                  <img src={LogoNocNoc} height="100px" alt="Logo"></img>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={5} style={{ paddingRight: 30, paddingLeft: 30 }}>
                <form>
                  <TextField id="email" label="E-mail" defaultValue="email@email.com" fullWidth margin = "normal" />
                  <TextField id="name" label="Full Name" defaultValue="Full Name" fullWidth margin = "normal" />
                  <TextField id="multiline-static" label="Message" multiline rows="4" defaultValue="Lorem ipsum dolor sit amet, consectetur adipisicing elit." fullWidth margin = "normal" />
                  <Button style={styleButton}>ENVIAR</Button>
                </form>
              </Grid>
              <Grid item xs={12} sm={5} style={{ paddingLeft: 30 }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt numquam eius ducimus natus mollitia sequi nemo dicta.
                <Typography gutterBottom>Teléfono:</Typography>
                <Typography gutterBottom>E-mail:</Typography>
                <img src={Facebook} alt="Icon Facebook" />
                <img src={Twitter} alt="Icon Twitter" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default (Contact);