import React, { Component, Fragment } from 'react'
import Axios from 'axios';
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;
const echarts = require('echarts')
class Line extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <RangePicker onChange={this.onChange} />
                <div ref="lineEchart" style={{ width: '70%', height: 240 }}></div>
            </Fragment>

        );
    }
    onChange = (date, dateString) => {
        // console.log(date, dateString);
        Axios.get('/store/statistics/count', { params: { to: dateString[1], from: dateString[0], store_id: 'fbv' } }).then(res => {
            this.myChart.setOption({
                xAxis: {
                    data: res.data.result.map(item => item.date)
                },
                series: [{
                    data: res.data.result.map(item => item.count)
                }]
            });
        })
    }
    componentDidMount() {
        this.myChart = echarts.init(this.refs.lineEchart)
        this.myChart.setOption({
            title: {
                text: '统计'
            },
            tooltip: {
                extraCssText: 'width:160px;height:50px;',
                trigger: 'axis'
            },

            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2019-05-06', '2019-05-06', '2019-05-07', '2019-05-08']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                type: 'line',
                areaStyle: {},
                data: [120, 300, 230],
                areaStyle: {
                    normal: {
                        //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(38,197,254,0.4)'
                        }, {
                            offset: .34,
                            color: 'rgba(56,155,255,0.5)'
                        }, {
                            offset: 1,
                            color: 'rgba(80,141,255,0.6)'
                        }])
                    }
                }
            }],
            color: ['skyblue']
        });

    }
}

export default Line;