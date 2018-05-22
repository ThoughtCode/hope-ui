// DEPENDENCIAS
import React, { Component } from 'react';

// COMPONENTES
import cls from './Agent.css'

class Client extends Component {
  render () {
    return (
      <div className={cls.Client}>
        <div className={cls.Main}>
          AGENTE DASHBOARD
        </div>
      </div>
    );
  }
}

export default Client;
