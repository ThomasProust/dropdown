import { GET_COUNTRIES } from '../actions/types';

const countriesReducer = (countries = [], action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            countries = action.payload;
            break;
        default:
            break;
    }

    return countries;
};

export default countriesReducer;
