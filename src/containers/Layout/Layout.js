import React, { Component } from 'react';

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