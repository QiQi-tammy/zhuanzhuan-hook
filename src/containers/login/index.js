import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';
import axios from 'axios';
import './index.css';

class Login extends Component {
    state = {
        code: ''
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: 'Please input your phone!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="phone"
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('checkCode', {
                        rules: [{ required: true, message: 'Please input your checkCode!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="checkCode"
                        />
                    )}
                    <span className="span" onClick={() => this.getCode()}>获取验证码</span>
                    {
                        this.state.code ? <span className="span">{this.state.code}</span> : null
                    }

                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">Login</Button>
                </Form.Item>
            </Form>
        )
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // console.log('Received values of form: ', values);
                axios.post('/api/login', { phone: values.phone, password: values.password, checkcode: values.checkCode }).then(res => {
                    // console.log(res)
                    if (res.data.code === 1) {
                        this.getCode()
                    } else {
                        window.sessionStorage.setItem('sessionId', res.data.sessionId)
                        this.props.history.push('/')
                    }
                })

            }
        });
    }
    getCode = () => {
        axios.get('/api/checkCode').then(res => {
            this.setState({
                code: res.data.Verification
            })
        })
    }
}
export default Form.create({ name: 'normal_login' })(Login)