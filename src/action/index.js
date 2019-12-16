import Axios from "axios";

export const changeDataAction = (id) => ({
    type: 'CHANGE',
    value: id
})

export const getDataAction = () => dispatch => Axios.get('./data/list.json').then(res => {
    console.log(res, '55555555')
    dispatch({
        type: 'INIT',
        value: res.data
    })
})

