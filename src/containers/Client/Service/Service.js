import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import ServiceImage from '../../../components/Client/Services/ServiceImage/ServiceImage';
import ServiceBooking from '../../../components/Client/Services/ServiceBooking/ServiceBooking';
import Spinner from '../../../components/UI/Spinner/Spinner';

// Css
import cls from './Service.css';

import * as actions from '../../../store/actions';

class Service extends Component {
  componentDidMount () {
    this.props.onFetchService(this.props.match.params.service_id, this.props.token);
    this.props.onFetchProperties(this.props.token);
    this.props.onFetchCities(this.props.token);
  }
  render () {
    let serviceImage = <ServiceImage />
    let serviceBooking = null;
    if (this.props.service.attributes) {
      serviceImage = (
        <ServiceImage title={this.props.service.attributes.name} image={this.props.service.attributes.image.url}/>
      )
      serviceBooking = (
        <ServiceBooking
          service_base={this.props.service.attributes.service_base}
          services_addons={this.props.service.attributes.services_addons}
          properties={this.props.properties}
          cities={this.props.cities}
          neightborhoods={this.props.neightborhoods}
          fetchNeightborhoods={this.props.onFetchNeightborhoods}
          createProperty={this.props.onCreateProperty}
          createJob={this.props.onCreateJob}/>
      )
    }
    return (
      <div>
        {this.props.loading ? (
          <div className={cls.LoaderContainer}>
            <Spinner/>
          </div>
        ) : (
          <div>
            {serviceImage}
            {serviceBooking}
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchService: (id, token) => dispatch(actions.fetchService(id, token)),
    onFetchProperties: (token) => dispatch(actions.fetchProperties(token)),
    onFetchCities: (token) => dispatch(actions.fetchCities(token)),
    onFetchNeightborhoods: (token, id) => dispatch(actions.fetchNeightborhoods(token, id)),
    onCreateProperty: (token, formData) => dispatch(actions.createProperty(token, formData)),
    onCreateJob: (token, formData) => dispatch(actions.createJob(token, formData)),
  };
};

const mapStateToProps = state => {
  return {
    token: state.auth.token || localStorage.getItem('token'),
    service: state.service.service,
    properties: state.property.properties,
    cities: state.city.cities,
    neightborhoods: state.neightborhood.neightborhoods,
    loading: state.service.loading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Service);