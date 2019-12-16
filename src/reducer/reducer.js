const defaultState = {
    list: [],
    newList: []
}
const reducers = (state = defaultState, { type, value }) => {
    switch (type) {
        case 'INIT':
            return {
                ...state,
                list: value,
                newList: value
            }
            break;
        case 'CHANGE':
            return {
                ...state,
                list: state.newList.filter(item => item.status === value)
            }
            break
    }
    return state
}
export default reducers