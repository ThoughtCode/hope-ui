// Dependencias
import React, { Component } from 'react';
// Component
import classes from '../../App.css';
import MenuBar from '../../containers/MenuBar/MenuBar';
import MenuResponsive from '../../containers/MenuBar/MenuResponsive';
import Main from '../../components/Home/Main/Main';
import Guarantees from '../../components/Home/Guarantees/Guarantees';
import Description from '../../components/Home/Description/Description';
import Funtion from '../../components/Home/Funtion/Funtion';
import Services from '../../components/Home/Services/Services';
import Testimonio from '../../components/Home/Testimonio/Testimonio';
import Download from '../../components/Home/Download/Download';
import Contact from '../../components/Home/Contact/Contact';
import Footer from '../../components/Home/Footer/Footer';
import cls from './Home.css';

class Home extends Component {
  render() {
    return (
      <div container justify="center">
        <div className={classes.MenuBar}><MenuBar /></div>
        <div className={classes.MenuNone}><MenuResponsive /></div>
        <Main id="main" />
        <Description />
        <Guarantees />
        {/* <Funtion id="Funtion" /> */}
        {/* <Services /> */}
        {/* <Testimonio className={cls.testimonioHome} id="Services" /> */}
        {/* <Download /> */}
        {/* <Contact /> */}
        <Footer />
        {/* <p gutterBottom style={{backgroundColor: '#0069a7', color:'#fff', fontFamily: 'Arial', padding: 20, marginBottom: 0}}>
          <a component="a" href="http://thoughtcode.co/" style={{textDecoration: 'none', color: 'white'}}>Diseñado por Thoughtcode</a>
        </p> */}
      </div>
    );
  }
}

export default Home;