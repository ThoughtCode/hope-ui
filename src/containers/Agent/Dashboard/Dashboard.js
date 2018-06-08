// Dependencias
import React, { Component } from 'react';

// Componentes
import MenuBar from '../../MenuBar/MenuBarAgent';
import Filter from '../../../components/Agent/Filter/Filter';
import MainDashboardAgent from '../../../components/Agent/MainDashboardAgent/MainDashboardAgent';

// Css
import cls from './Dashboard.css';

class DashboardAgent extends Component {
  render() {
    return (
      <div className={cls.Dashboard}>
        <MenuBar />
        <Filter />
        <MainDashboardAgent />
      </div>
    );
  }
}

export default DashboardAgent;