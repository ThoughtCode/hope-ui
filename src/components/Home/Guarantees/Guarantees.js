// Dependencias
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

// Component
import cls from './Guarantees.css'
import Profecionales from '../../../assets/GuaranteesProfecional.png'
import GuaranteesAlDia from '../../../assets/GuaranteesAlDia.png'
import Guarante from '../../../assets/Guarante.png'

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    backgroundColor: 'transparent',
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container className={cls.Guarante} justify="center">
        <Grid item xs={12} md={10} sm={12}>
          <Grid container>
            
            <Grid container align="center" justify="center" className={cls.TopSeccion}>
              <Grid item xs={12} sm={4} md={4}>
                <Paper className={classes.paper} elevation={0}>
                  <img src={Profecionales} alt="Profecionales" />
                  <Typography variant="headline" gutterBottom className={cls.SubTytle}>Profecionales con experiencias</Typography>
                  <Grid item xs={12} className={cls.Text}>
                    Los profesionales que usan la plataforma NocNoc tienen experiencia, son amables y están en proceso de verificación de antecedentes.
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <Paper className={classes.paper} elevation={0}>
                  <img src={GuaranteesAlDia} alt="Garantias Al Dia"/>
                  <Typography variant="headline" gutterBottom className={cls.SubTytle}>Disponibilidad al día</Typography>
                  <Grid item xs={12} className={cls.Text}>
                    Reserve en línea en 60 segundos y programe su servicio hogareño para mañana.
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <Paper className={classes.paper} elevation={0}>
                  <img src={Guarante} alt="Garantias" />
                  <Typography variant="headline" gutterBottom className={cls.SubTytle}>Garantía de felicidad con NocNoc</Typography>
                  <Grid item xs={12} className={cls.Text}>
                    Tú felicidad es nuestra meta. Si no está contento, trabajaremos para hacerlo bien.
                  </Grid>
                </Paper>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);