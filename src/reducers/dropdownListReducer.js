import { GET_LIST } from '../actions/types';

const dropdownListReducer = (list = [], action) => {
    switch (action.type) {
        case GET_LIST:
            list = action.payload;
            break;
        default:
            break;
    }

    return list;
};

export default dropdownListReducer;
