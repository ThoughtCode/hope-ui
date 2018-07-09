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
    // console.log(this.props.agentRewiew)
    // console.log(this.props.postulate)
    // let postulateCard = null
    let postulates = null
    let postulate = 0
    if (this.props.postulate.length > 0) {
      postulates = this.props.postulate.map( p => (
        postulate = p.attributes
        // console.log(postulate)
      ));
    };
    // console.log(this.props.postulate)
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