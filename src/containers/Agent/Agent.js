// DEPENDENCIAS
import React from 'react';

// COMPONENTES
import Registro from './Register/Register';
import Work from './Work/Work';
import Itworks from './Itworks/Itworks';
import AsideAgente from './Aside/Aside';
import IsTold from './IsTold/IsTold';
import Contact from '../../components/Home/Contact/Contact';

function Agent(props) {
  return (
    <div>
      <div id="RegistreAgente">
        <Registro />
      </div>
      <Work />
      <Itworks />
      <AsideAgente />
      <IsTold />
      <Contact />
    </div>
  );
}

export default Agent;