import React, { Component } from 'react';
import Wrap from '../../components/wrap';
import IsLogin from '../../hoc/isLogin';

class Home extends Component {
    state = {}
    render() {
        return (
            <Wrap>
                {this.props.children}
            </Wrap>
        );
    }
}

export default IsLogin(Home);