import { GET_LIST } from '../actions/types';

const dropdownListReducer = (state = { selected: null, list: [] }, action) => {
    let { list } = state;

    switch (action.type) {
        case GET_LIST:
            list = action.payload;
            break;
        default:
            break;
    }

    return { ...state, list };
};

export default dropdownListReducer;
