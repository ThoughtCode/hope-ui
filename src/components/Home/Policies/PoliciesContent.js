import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import cls from './Policies.css'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'justify',
    color: theme.palette.text.secondary,
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={12} sm={10}>
          <Paper className={`${cls.Title} ${classes.paper}`} elevation={0}>
            <Typography className={cls.TitlePrincipal} variant="display1" gutterBottom>Términos y Condiciones</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Paper className={classes.paper} elevation={0}>
            <Typography className={cls.Content} variant="headline" gutterBottom>1. Objeto</Typography>
            <Typography className={cls.Text}>
              Las presentes Condiciones Generales de Uso regulan el uso de la aplicación informática de NOC NOC (en adelante, la "Aplicación") así como también del a través del sitio web www.nocnoc.com.ec (en adelante, el "Sitio Web"), ya sea con su actual nombre o con cualquier otra denominación con la que pueda cambiarse a futuro por parte de HOPESERV CIA LTDA con R.U.C. 1792851300001. Al ingresar y hacer uso de esta Aplicación y Sitio Web el usuario ("Usuario") reconoce y ratifica que ha leído y aceptado estas Condiciones Generales de Uso y se compromete a cumplir con todos sus términos y condiciones. De igual manera, el Usuario reconoce y acepta que el acceso y uso de esta Aplicación y/o Sitio Web estará sujeto a las Condiciones Generales de Uso que se encuentren vigentes al momento de acceder a la misma. HOPESERV (NOC NOC) se reserva el derecho de modificar y/o cambiar en cualquier momento las presentes Condiciones Generales de Uso. En el caso de que el usuario no acepte estas condiciones no podrá acceder a utilizar, contratar y/o solicitar los servicios que ofrece NOC NOC. El Usuario podrá notificar a NOC NOC cualquier tema o situación descrita estas condiciones con la cual no esté de acuerdo a través de nuestros canales de atención descritos en el Sitio web. Asimismo, NOC NOC se reserva el derecho de dar de baja, suspender, interrumpir o dejar de operar la Aplicación y/o el Sitio Web en cualquier momento.<br/><br/>
              La Aplicación está enfocada exclusivamente a usuarios que se encuentren en Ecuador en las provincias o ciudades que NOC NOC haya designado para uso de los servicios, en el caso de que usuarios que estén fuera del territorio Ecuatoriano o fuera de las ciudades descritas, utilicen la aplicación para contratar los servicios que ofrece la misma, será de entera responsabilidad y riesgo de dicho usuario los posibles cargos, y/o perjuicios que esto genere.
            </Typography>
            <Typography variant="headline" gutterBottom className={cls.SubContent}>2. Contenidos</Typography>
            <Typography className={cls.Text}>
              A través de la Aplicación de NOC NOC, el Usuario podrá solicitar diferentes servicios como limpieza, jardinería, plomería, cocina o cualquier otro servicio publicado en la aplicación y Sitio Web (en adelante, el "Servicio"), para lo cual NOC NOC se reserva el derecho de aumentar, modificar o quitar cualquiera de los servicios.  También esta aplicación brindará al cliente acceso a diversos contenidos, perfiles, información y datos proporcionados para gestionar la relación con el Servicio (en adelante, los "Contenidos"), mismos que podrán ser cambiados o modificados. NOC NOC no garantiza que los Contenidos proporcionados por clientes o a través de la Aplicación y/o Sitio Web serán en todo caso correctos, completos o actualizados ya que NOC NOC actúa en calidad de intermediario en nombre propio en la prestación de servicios varios al Usuario. Será responsabilidad de los terceros, llamados “agentes de servicio”, la prestación de los servicios contratados a través de la Aplicación o Sitio Web. NOC NOC únicamente pone a disposición del Usuario una herramienta digital para reservar, calendarizar los servicios descritos que son prestados por terceros, dándole facilidades en la gestión de pago (al utilizar tarjetas de débito y crédito), gestión y búsqueda de profesiones. El Usuario exonera a NOC NOC de cualquier responsabilidad derivada del servicio prestado por los terceros.<br/><br/>
              Los Servicios constituyen una plataforma de tecnología que permite a los usuarios de aplicaciones móviles y/o Sitios web proporcionadas como parte de los Servicios organizar y planear servicios de diferente índole con terceros proveedores independientes de dichos servicios, conforme a un acuerdo con NOCNOC (“Terceros proveedores”).
            </Typography>
            <Typography variant="headline" gutterBottom className={cls.SubContent}>3. Uso, Restricciones y Acceso</Typography>
            <Typography className={cls.Text}>
              El acceso a la Aplicación estará limitado a usuarios que sean mayores de edad, considerándose los 18 años como mayoría de edad. El Usuario no podrá autorizar o delegar a personas menores de edad el uso de su cuenta, ni podrá permitir que terceras personas tengan acceso a la Aplicación o Sitio Web a través de su cuenta; El usuario acepta que el acceso y uso de la Aplicación y/o Sitio Web tiene lugar libre y conscientemente, bajo su exclusiva responsabilidad. NOC NOC, en ningún caso será responsable por el uso, de la aplicación o Sitio Web, de cuentas por terceros, es de estricta responsabilidad de usuario el uso correcto de su cuenta. Por lo tanto, el usuario deberá abstenerse de utilizar la Aplicación y/o Sitio Web para realizar actividades ilegales, fraudulentas o que atenten la seguridad e integridad de los Agentes. El Usuario al acceder a la aplicación y/o Sitio Web, se compromete a hacer un uso adecuado y lícito de conformidad con la legislación aplicable y las presentes Condiciones Generales de Uso, la moral y las buenas costumbres generalmente aceptadas, así como el orden público.  De igual manera el usuario se compromete a no atentar contra el Sitio Web y/o la Aplicación sobrecargándola, modificándola, provocando daños o en los sistemas de sus proveedores o de terceros; introducir o difundir virus informáticos o cualesquiera otros sistemas físicos o lógicos que sean susceptibles de causar daños en los sistemas de NOC NOC, de sus proveedores o de terceros.<br/><br/>
              El Usuario únicamente podrá acceder a la Aplicación y/o Sitio Web a través de los medios autorizados. NOC NOC no será responsable en caso de que el Usuario no disponga de un dispositivo que sea compatible o haya descargado una versión de la Aplicación incompatible con su dispositivo móvil.<br/><br/>
              El usuario no podrá: retirar cualquier nota de derechos de autor, marca registrada u otra nota de propiedad de cualquier parte de los Servicios; reproducir, modificar, preparar obras derivadas sobre los Servicios, distribuir, licenciar, arrendar, revender, transferir, exhibir públicamente, presentar públicamente, transmitir, retransmitir o explotar de otra forma los Servicios, excepto como se permita expresamente por NOC NOC
            </Typography>
            <Typography variant="headline" gutterBottom className={cls.SubContent}>4. Acceso</Typography>
            <Typography className={cls.Text}>
              Para acceder a la aplicación, el usuario o el agente deberán realizar un registro previo, llenando un formulario, cumpliendo con las características de cada campo. NOC NOC se reserva el derecho de aceptar o rechazar libremente la solicitud de registro por parte del Usuario y/o Agente.<br/><br/>
              La información ingresada por el Usuario y/o Agente en el Formulario de Registro deberán ser exactos, actuales y veraces en todo momento. El acceso y uso de la Aplicación o del área específica del Sitio Web estará sujeta una contraseña solicitada al rellenar el Formulario de Registro, siendo el usuario el responsable en todo momento de la custodia de su contraseña, asumiendo con eso cualquier daño y prejuicio que pudiera derivarse de su uso indebido, así como de la cesión, revelación o extravío de la misma.<br/><br/>
              Si por alguna razón el Usuario y/o el Agente, olvidasen su contraseña, podrán utilizar la opción de “olvido de contraseña” y únicamente realizando ciertas validaciones podrá realizar cambios en la misma. Si hubiese un riesgo que suponga acceso y/o utilización por parte de terceros no autorizados, el Usuario podrá comunicarlo a NOC NOC a fin de que proceda inmediatamente al bloqueo y sustitución de la misma. En todo caso, cualesquiera operaciones realizadas el Usuario es quien será responsable y pagará los gastos y/o daños que se deriven de cualquier acceso y/o uso no autorizado que se realice con anterioridad a dicha comunicación.
            </Typography>
            <Typography variant="headline" gutterBottom className={cls.SubContent}>5. Pago y facturación</Typography>
            <Typography className={cls.Text}>
              Las tarifas que se cobraran por brindar un servicio serán calculadas de acuerdo a la selección de servicios por parte del usuario, y se mostraran previo al agendamiento de un servicio, una vez que el cliente las aceptar y agenda el servicio quedan programadas en la Aplicación y/o Sitio Web. Las tarifas, sus actualizaciones, y condiciones de uso estarán disponibles en todo momento en la Aplicación y/o Sitio Web y están sujetas a posibles modificaciones. El Usuario acepta que en fines de semana y feriado que son días especiales se cobre un recargo adicional. Este costo adicional se encontrará incluido en el precio final que se muestra al cliente al momento de solicitar un servicio. NOC NOC se reserva el derecho a modificar, ampliar, reducir, establecer y/o eliminar cualquier modalidad de pago en cualquier momento según estime conveniente para el correcto funcionamiento del Servicio. Las tarifas aplicables al Servicio contratado serán cobradas al Usuario después de recibido el servicio, dichas tarifas serán cobradas de forma automática a través de los datos de la tarjeta de crédito o débito proporcionados por el Usuario, NOC NOC se reserva el derecho a realizar una validación del método de pago y/o solicitar la pre-autorización para el cobro a la entidad de crédito vinculada a la tarjeta de crédito o débito facilitada por el Usuario. NOC NOC se reserva el derecho a restringir el uso y a recuperar el importe de promociones, cupones, invitaciones y descuentos a aquellos Usuarios que hagan un uso inadecuado, ilícito o abusivo de los mismos.<br/><br/>
              Para NOC NOC la creación de diferentes cuentas que compartan un método de pago electrónico con otros Usuarios con el fin de beneficiarse indebidamente de descuentos, cupones e invitaciones, se lo considera un uso abusivo de las mismas y NOC NOC se reserva el derecho de bloqueo, o eliminación de dichas cuentas. Las invitaciones, cupones y descuentos estarán sujetos a la vigencia definida por NOC NOC y no podrán ser usadas posteriormente a su caducidad. Así mismo, NOC NOC se reserva el derecho a anular, eliminar o reducir el valor de los descuentos, cupones, invitaciones y promociones en cualquier momento.<br/><br/>
              En el caso de haber solicitado un servicio y este sea cancelado por el usuario, se realizará el recargo de un valor por la cancelación, dicho recargo se realizará a directo a la tarjeta de crédito o débito entregada por el usuario como método de pago, el usuario acepta este recargo como parte de las condiciones al solicitar un servicio. NOC NOC se reserva el derecho de modificar, cambiar o eliminar el valor de recargo.<br/><br/>
              NOC NOC, pone a disposición un método de pago ágil con uso de tarjetas de crédito y débito, por lo que en ningún caso se aceptará pagos en efectivo o pagos por fuera del servicio otorgado directamente a los agentes de servicio.
            </Typography>
            <Typography variant="headline" gutterBottom className={cls.SubContent}>6. Derechos de propiedad intelectual</Typography>
            <Typography className={cls.Text}>
              El Usuario reconoce y acepta que todos los derechos de propiedad intelectual sobre la información, contenidos y/o cualesquiera otros elementos que se encuentren en la Aplicación y/o Sitio Web (incluyendo, sin limitación, marcas, logotipos, nombres comerciales, textos, imágenes, gráficos, diseños, sonidos, bases de datos, reportes, software, diagramas de flujo, presentación, códigos, audio y vídeo), pertenecen a NOC NOC. EL Usuario podrá utilizar cualquiera de estos elementos insertados en la Aplicación y/o Sitio Web única y exclusivamente para su uso personal, privado y por ningún motivo con fines lucrativos.<br/><br/>
              La información que contiene la Aplicación y/o Sitio Web es de NOC NOC, y no podrá ser utilizada en otras páginas o aplicaciones de otra índole
            </Typography>
            <Typography variant="headline" gutterBottom className={cls.SubContent}>7. Protección de datos</Typography>
            <Typography className={cls.Text}>
              Los datos personales de los clientes y usuarios (en lo posterior se lo denominará, los Datos) que proporcionen en los formularios de registro se integrarán en bases de datos que son responsabilidad de NOC NOC y están sujetos a una política de privacidad y para uso exclusivo de estadísticas, campañas y gestión de NOC NOC
            </Typography>
            <Typography variant="headline" gutterBottom className={cls.SubContent}>8. Exclusión de garantías y responsabilidad</Typography>
            <Typography className={cls.Text}>
              NOCNOC Se reserva el derecho de garantizar la disponibilidad y continuidad de la Aplicación y/o Sitio Web. Por lo que NOC NOC no será en ningún caso responsable por cualesquiera daños y perjuicios que puedan derivarse de la falta de disponibilidad, interrupción, fallos, averías, bloqueos, suspensiones, retrasos, accesibilidad u otros fallos a la Aplicación y/o Sitio Web. Los Usuarios tendrán con NOC NOC un seguro que permitirá cubrir posibles accidentes que puedan suceder durante la gestión del servicio contratado, este seguro tendrá un límite de aplicación de hasta <small className={cls.SmallText}>500 dólares</small> en daños para muebles, decoración, cuadros, electrodomésticos, ropa u otro ítem que pueda verse comprometido. El seguro aplicará única y exclusivamente a daños ocurridos en el transcurso del tiempo en el que se haya contratado el servicio, en el caso de haber algún inconveniente antes o posterior a la visita de un asesor no será parte del objetivo al que responde el seguro. NOC NOC se reserva el derecho de cambiar la póliza del seguro y la cobertura del mismo.<br/><br/>
              NOC NOC no garantiza la ausencia de virus ni de otros elementos en la Aplicación y/o Sitio Web que pueden haber sido introducidos por terceros ajenos a NOC NOC y que puedan producir alteraciones en los sistemas físicos o lógicos del Usuario o en los documentos electrónicos y ficheros almacenados en sus sistemas. En consecuencia, NOC NOC no será en ningún caso responsable de los daños y perjuicios que pudieran derivarse de dichas alteraciones. Con la suscripción de las presentes Condiciones Generales de Uso, el Usuario declara que mantendrá indemne frente a cualquier reclamación a NOC NOC, sus accionistas, directores, socios, empleados, abogados y agentes derivados del incumplimiento por parte del Usuario de cualquier disposición contenida las presentes Condiciones Generales de Uso o de cualquier ley o regulación aplicable a las mismas, por  incumplimiento o violación de los derechos de terceros incluyendo, cualquier daño o perjuicio causado por el Usuario en el uso del Servicio a un tercero y por el incumplimiento del uso permitido de la Aplicación y/o Sitio Web.
            </Typography>
            <Typography variant="headline" gutterBottom className={cls.SubContent}>9. Notificaciones</Typography>
            <Typography className={cls.Text}>
              NOC NOC podrá realizar notificaciones o campañas a través de notificaciones generales en la Aplicación (PUSH), a través de la dirección de correo electrónico (Mailing) facilitada por el Usuario en el Registro, mediante SMS, o a través de correo ordinario a la dirección facilitada por el Usuario.
            </Typography>
            <Typography variant="headline" gutterBottom className={cls.SubContent}>10. Cesión</Typography>
            <Typography className={cls.Text}>
              El Usuario no podrá ceder los derechos y obligaciones asumidos al utilizar la aplicación y/o Sitio Web, que se describen en las presentes Condiciones Generales de Uso sin el previo consentimiento escrito de NOC NOC.<br/><br/>
              NOC NOC podrá ceder, sin necesidad de tener un consentimiento previo del Usuario, las presentes Condiciones Generales de Uso a cualquier entidad comprendida dentro de su grupo de sociedades, en todo el mundo, así como a cualquier persona natural o jurídica que le suceda en el ejercicio de su negocio.
            </Typography>
            <Typography variant="headline" gutterBottom className={cls.SubContent}>11. Ley aplicable y Jurisdicción</Typography>
            <Typography className={cls.Text}>
              Las presentes Condiciones Generales de Uso, así como la relación entre NOC y el Usuario, se regirán a la legislación de la República del Ecuador. Toda controversia o diferencia que surja de, relativa a, o que tenga relación con este contrato, será resuelta por un tribunal arbitral del Centro de Arbitraje y Mediación de la Cámara de Comercio de Quito, que se sujetará a lo dispuesto en la Ley de Arbitraje y Mediación, el Reglamento de dicho Centro y las siguientes normas: " El tribunal estará integrado por un árbitro designado conforme el Reglamento del Centro; " El tribunal decidirá en derecho; " Para la ejecución de medidas cautelares, el tribunal arbitral está facultado para solicitar a los funcionarios públicos, judiciales, policiales y administrativos su cumplimiento sin que sea necesario el recurrir a juez ordinario alguno; " El procedimiento arbitral será confidencial.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);