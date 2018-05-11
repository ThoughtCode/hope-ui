import React, { Component } from 'react';

import MenuBar from '../../../containers/MenuBar/MenuBar';

class Dashboard extends Component {
  render() {
    return(
      <div>
        <MenuBar />
        <h1>Hola mundo</h1>
      </div>
    );
  }
}

export default Dashboard;
