// Core Imports
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

// CSS Framework Imports
import { withStyles } from 'material-ui/styles';

// Components
import PropertyList from '../../../../components/Client/Dashboard/Properties/PropertyList';
import PropertyShow from '../../../../components/Client/Dashboard/Properties/PropertyShow';
import PropertyCreate from '../../../../components/Client/Dashboard/Properties/PropertyCreate';

// Actions
import * as actions from '../../../../store/actions';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
  root: {
    flexGrow: 1,
  },
  body: {
    marginTop: 40,
  },
};

class Properties extends Component {
  componentDidMount() {
    this.props.onFetchProperties(this.props.token, this.props.userId);
  }

  showProperty = (id) => {
    this.props.history.push(`${this.props.match.path}/${id}`);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.body}>
        <Switch>
          <Route exact path={this.props.match.path}>
            <PropertyList properties={this.props.properties} show={this.showProperty} />
          </Route>
          <Route exact path={`${this.props.match.path}/crear`}>
            <PropertyCreate />
          </Route>
          <Route path={`${this.props.match.path}/:id`} exact>
            <PropertyShow properties={this.props.properties} />
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  properties: state.property.properties,
  loading: state.property.loading,
  token: state.auth.token,
  userId: state.auth.userId,
});

const mapDispatchToProps = dispatch => ({
  onFetchProperties: (token, userId) => dispatch(actions.fetchProperties(token, userId)),
});


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Properties));
