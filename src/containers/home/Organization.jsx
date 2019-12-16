import React, { Component, Fragment } from 'react';

class Organization extends Component {
    render() {
        return (
            <Fragment>
                this is organization
                    {this.props.children}
            </Fragment>
        )
    }

}
export default Organization