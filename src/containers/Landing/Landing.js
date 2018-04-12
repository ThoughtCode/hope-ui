import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

import Logo from '../../logo.png';

class Landing extends Component {
    render () {
        return (
            <div>
                <AppBar
                  iconElementLeft={<img src={Logo} height="62px"></img>}
                  iconElementRight={
                    <div>
                      <FlatButton label="Agent" />
                      <FlatButton label="Customer" />
                    </div>
                  }
                />
                Welcome
                Content
            </div>
        );
    }
}


export default Landing;