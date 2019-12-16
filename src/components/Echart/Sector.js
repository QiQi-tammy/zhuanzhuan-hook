import React, { Component } from 'react'
import Axios from 'axios';

const echarts = require('echarts')
class Sector extends Component {
    render() {
        return (
            <div ref="echart" style={{ width: 300, height: 240 }}></div>
        );
    }
    componentDidMount() {
        let myEac = echarts.init(this.refs.echart)
        Axios.get('/store/statistics/catcount', { params: { to: '2019-06-09', from: '2019-05-30', store_id: 'fbfbfv' } }).then(res => {
            myEac.setOption({
                tooltip: {
                    trigger: 'item',
                    confine: true,
                    extraCssText: 'width:160px;height:50px;',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['40%', '55%'],
                        data: res.data.result.map(item => item)
                    }
                ]
            })
        })

    }
}

export default Sector;