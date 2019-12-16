import React, { Component, Fragment } from 'react';
import './index.css';


class Order extends Component {
    state = {

    }
    render() {
        return (
            <Fragment>
                {this.props.children}
            </Fragment>
        )
    }


}
export default Order