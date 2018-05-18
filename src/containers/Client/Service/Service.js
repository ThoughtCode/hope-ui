import React, { Component } from 'react';

// Components
import ServiceImage from '../../../components/Client/Services/ServiceImage/ServiceImage';
import ServiceBooking from '../../../components/Client/Services/ServiceBooking/ServiceBooking';


class Service extends Component {
  render () {
    return (
      <div>
        <ServiceImage />
        <ServiceBooking />
      </div>
    );
  }
}

export default Service;