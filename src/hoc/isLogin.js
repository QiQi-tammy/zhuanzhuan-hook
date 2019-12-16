import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'

const IsLogin = (Wrap) => class extends Component {
    render() {
        return (
            <Fragment>
                {
                    window.sessionStorage.getItem('sessionId') ?
                        <Wrap {...this.props} /> :
                        <Redirect to="/login" />
                }
            </Fragment>
        )
    }
}
export default IsLogin