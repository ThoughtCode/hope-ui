import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import * as actions from '../../../../store/actions';


class PropertyShow extends Component {
  componentDidMount() {
    if (!Object.keys(this.props.property).length > 0) {
      this.props.onGetProperty(this.props.token, this.props.match.params.id);
    }
  }
  render() {
    let property = null;
    if (Object.keys(this.props.property).length > 0) {
      property = (
        <div>
          <h1>{this.props.property.id}</h1>
          <p>{this.props.property.attributes.name}</p>
        </div>
      );
    }
    return (
      <div>
        {property}
        <Button variant="raised" color="primary">
          Editar
        </Button>
        <Button variant="raised" color="primary">
          Borrar
        </Button>
        <Route />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onGetProperty: (token, id) => dispatch(actions.fetchProperty(token, id)),
});

const mapStateToProps = (state, ownProps) => {
  let property = [];
  const propertyId = ownProps.match.params.id;
  if (state.property.properties.length > 0) {
    property = Object.assign(
      {},
      state.property.properties.find(proper => proper.id === propertyId),
    );
  }
  return {
    property: Object.keys(property).length > 0 ? property : state.property.property,
    token: state.auth.token,
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PropertyShow));
