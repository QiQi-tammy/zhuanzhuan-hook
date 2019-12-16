import React, { Component } from 'react'
import Sector from '../../components/Echart/Sector';
import Line from '../../components/Echart/Line';
class FirstHome extends Component {
    state = {
        lineList: [],
        list: []
    }
    render() {
        return (
            <div>
                <Line />
                <Sector />
            </div>

        );
    }

}

export default FirstHome;