import React, { Component } from 'react';

class Financial extends Component {
    render() {
        return (
            <div>
                this is Financial
                    {this.props.children}
            </div>
        )
    }

}
export default Financial