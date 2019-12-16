import React, { Component, Fragment } from 'react'
import { Table, DatePicker, Popover, Button, Input, Select } from 'antd';
import Axios from 'axios';

const { RangePicker } = DatePicker;
const { Option } = Select
class Loans extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            newData: [],
            startTime: '',
            endTime: '',
            sm: '',
            em: '',
            status: ['全部', '未审核', '已接单', '已完成'],
            columns: [
                {
                    title: '订单号',
                    dataIndex: 'id',
                    key: 'id'
                },
                {
                    title: '下单时间',
                    dataIndex: 'date',
                    key: 'date',
                },
                {
                    title: '用户名称',
                    dataIndex: 'customerName',
                    key: 'customerName',
                },
                {
                    title: '手机号',
                    dataIndex: 'phone',
                    key: 'phone',
                }, {
                    title: '转单类型',
                    dataIndex: 'type',
                    key: 'type',
                }, {
                    title: '贷款金额(万元)',
                    dataIndex: 'money',
                    key: 'money',
                }, {
                    title: '订单状态',
                    dataIndex: 'handleState',
                    key: 'handleState',
                    render: (text, record) => {
                        switch (text) {
                            case 0: return "全部"
                            case 1: return "未审核"
                            case 2: return "已接单"
                            case 3: return "已完成"
                            case 4: return '新订单'
                        }
                    }
                },
                {
                    title: '客服',
                    dataIndex: 'serviceName',
                    key: 'serviceName',
                },

                {
                    title: '操作',
                    key: 'action',
                    render: (text, record) => (
                        <Popover placement="bottom" content={text.customerName} trigger="click">
                            <Button style={{ width: 30, height: 30, borderRadius: '50%', textAlign: 'center' }}>···</Button>
                        </Popover>

                    )
                }
            ]
        };
    }
    render() {
        const { newData, sm, em, columns, status } = this.state
        return (
            <Fragment>
                <div className="status">
                    <span>
                        处理时间：<RangePicker onChange={this.changeTime} />
                    </span>
                    <span className="money">
                        金额范围：
                        <Input type="text" name="sm" value={sm} onChange={(e) => this.changeMoney(e)} />
                        --
                        <Input type="text" name="em" value={em} onChange={(e) => this.changeMoney(e)} />
                    </span>
                    <Button onClick={this.filterFn}>筛选</Button>
                </div>
                <div className="status">
                    <span>
                        处理状态：{
                            status.map((item, index) => (
                                <Button key={index} onClick={() => this.changeStatus(index)}>{item}</Button>
                            ))
                        }
                    </span>
                    <div>
                        转单类型：

                         <Select name='' defaultValue="房乐贷" style={{ width: 120 }} onChange={this.changeType}>
                            <Option value="房乐贷">房乐贷</Option>
                            <Option value="车乐贷">车乐贷</Option>
                            <Option value="押房贷">押房贷</Option>
                        </Select>
                    </div>
                </div>
                <Table columns={columns} dataSource={newData} rowKey="id"></Table>
            </Fragment>

        );
    }
    changeType = (value) => {//选择转单类型
        // console.log(value)
        let arr = this.state.dataSource.filter(item => item.type === value)
        this.setState({
            newData: arr
        })
    }
    changeStatus = (index) => {//处理状态筛选
        let arr = null
        if (index === 0) {
            arr = this.state.dataSource
        } else {
            arr = this.state.dataSource.filter(item => item.handleState === index)
        }
        this.setState({
            newData: arr
        })
    }
    changeMoney = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    changeTime = (date, dateString) => {//时间范围
        // console.log(date, dateString);
        this.setState({
            startTime: new Date(dateString[0]).getTime(),
            endTime: new Date(dateString[1]).getTime()
        })
    }
    filterFn = () => {
        const { startTime, endTime, sm, em, dataSource, newData } = this.state

        let arr = startTime === "" && endTime === "" ?
            [...newData] :
            dataSource.filter(item => {
                const t = new Date(item.date).getTime()
                if (startTime < t && t < endTime) {
                    return true
                } else {
                    return false
                }
            })

        arr = sm !== '' && em !== '' ?
            arr.filter(item => {
                if (item.money < this.state.em && this.state.sm < item.money) {
                    return true
                } else {
                    return false
                }

            }) : [...arr]

        this.setState({
            newData: arr
        })
    }
    componentDidMount() {
        Axios.get('/api/list?order=2', { headers: { authorization: window.sessionStorage.getItem('sessionId') } }).then(res => {
            // console.log(res.data.data)
            this.setState({
                dataSource: res.data.data,
                newData: res.data.data
            })
        })

    }
}

export default Loans;