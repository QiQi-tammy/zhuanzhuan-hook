import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getDataAction, changeDataAction } from '../../action/index';

class Bussiness extends Component {
    state = {
        nav: [
            { type: "全部任务", id: 1 },
            { type: "进行中的任务", id: 2 },
            { type: "强行终止的任务", id: 3 },
            { type: "已完成的任务", id: 4 },
        ]
    }
    render() {
        const { list, changeData } = this.props
        return (
            <Fragment >
                <nav>
                    {
                        this.state.nav.map(item => (
                            <span style={{ margin: '0 10px' }} key={item.id} onClick={() => changeData(item.id)}>{item.type}</span>
                        ))
                    }
                </nav>
                {list.map(item => (
                    <dl key={item.id} style={{ display: 'flex', borderBottom: '1px solid #ccc' }}>
                        <dt><img src={item.img} alt="" style={{ width: 80 }} /></dt>
                        <dd>
                            <p>{item.title}</p>
                        </dd>
                    </dl>
                ))}
            </Fragment>
        )
    }
    componentDidMount() {
        this.props.getData()
    }
}
const mapStateToProps = state => ({
    list: state.list
})
const mapDispatchToProps = dispatch => ({
    getData() {
        dispatch(getDataAction())
    },
    changeData(id) {
        console.log(id)
        dispatch(changeDataAction(id))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Bussiness)