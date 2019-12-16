import React, { Component, Fragment } from 'react';

class Data extends Component {
    render() {
        return (
            <Fragment >
                this is Data
                    {this.props.children}
            </Fragment>
        )
    }

}
export default Data