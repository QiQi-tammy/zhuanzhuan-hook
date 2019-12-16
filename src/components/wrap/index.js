import React, { Component } from 'react';
import { Layout, Menu, Icon, Tag } from 'antd';
import 'antd/dist/antd.css';
import './index.css'
import { subnav } from '../../config/subnav';
import { NavLink } from 'react-router-dom';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

class Wrap extends Component {
    state = {
        collapsed: false,
        subnav,
        arr: [],
        ind: ''
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    log = (item) => {
        this.ind = item
        this.props.children.props.history.push('/' + item)
    }
    render() {
        return (
            <Layout className="wrapper">
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <h4 style={{ color: "#fff", padding: '10px 15px' }}>转转管理后台</h4>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.props.children.props.location.pathname]}>
                        {
                            this.state.subnav.map(item => (
                                item.children === undefined || item.children.length < 1
                                    ? <Menu.Item key={item.path}>
                                        <NavLink to={item.path}> {item.name}</NavLink>
                                    </Menu.Item>
                                    : <SubMenu
                                        key={item.path}
                                        title={<NavLink to={item.path}> {item.name}</NavLink>}>
                                        {
                                            item.children.map(child => (
                                                <Menu.Item key={child.path}>
                                                    <NavLink to={child.path}> {child.name}</NavLink>
                                                </Menu.Item>
                                            ))
                                        }
                                    </SubMenu>
                            ))
                        }
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                        {
                            this.state.arr.map((item, index) => (
                                <Tag key={index} color={this.ind === item ? 'skyblue' : null} closable onClick={() => this.log(item)} >{item}</Tag>
                            ))
                        }

                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px 0',
                            padding: 24,
                            background: '#fff',
                            minHeight: 280,
                        }}
                    >
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        )
    }
    componentDidMount() {
        window.onhashchange = () => {
            let tabs = [...this.state.arr]
            if (!tabs.find(item => item === window.location.hash.slice(2))) {
                tabs.push(window.location.hash.slice(2))
            }
            this.setState({
                arr: tabs
            })
        }

    }
}

export default Wrap