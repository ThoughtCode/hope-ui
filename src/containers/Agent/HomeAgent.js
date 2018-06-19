// DEPENDENCIAS
import React,{ Component } from 'react';

// COMPONENTES
import Registro from './Register/Register';
// import Work from './Work/Work';
// import Itworks from './Itworks/Itworks';
// import AsideAgente from './Aside/Aside';
// import IsTold from './IsTold/IsTold';
// import Contact from '../../components/Home/Contact/Contact';

class Agent extends Component{
  render() {
    return (
      <div>
        <div id="RegistreAgente">
          <Registro />
        </div>
      </div>
    );
  }
}

export default Agent;