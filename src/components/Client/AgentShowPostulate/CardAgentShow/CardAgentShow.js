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
    return (
      <div>
        <Grid container justify="center" className={cls.Info}>
          <Grid item xs={12} sm={12}>
            <Grid container>
              <Grid item xs={12}>
                <CardInfo
                  postulatCard={this.props.postulate}
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