import React, { Component } from 'react';
import Navbar from '../../components/UI/Navigation/Navbar/Navbar';

class Layout extends Component {
    render () {
        return (
            <div>
                {/* <Navbar status={this.props.status}/> */}
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}


export default Layout;