import React, { Component } from 'react';

// Components
import {
  Grid,
} from 'material-ui';
import CardInfo from './CardInfo';

// Css
import cls from './CardAgentShow.css';

class Info extends Component {
  render() {
    let postulates = null;
    let postulate = 0;
    if (this.props.postulate.length > 0) {
      postulates = this.props.postulate.map( p => (
        postulate = p.attributes
      ));
    };
    return (
      <div>
        <Grid container justify="center" className={cls.Info}>
          <Grid item xs={12} sm={8}>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <CardInfo
                  agentRewiews={this.props.agentRewiew}
                  postulatCard={postulate}
                  />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Info;