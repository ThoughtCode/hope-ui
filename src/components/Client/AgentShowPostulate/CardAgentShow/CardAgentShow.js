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
    // console.log(this.props.postulate.agent)
    return (
      <div>
        <Grid container justify="center" className={cls.Info}>
          <Grid item xs={12} sm={8}>
            <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <CardInfo
                  postulateCard={this.props.postulate.agent}
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