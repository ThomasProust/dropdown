import { GET_COUNTRIES } from '../actions/types';

const countriesReducer = (state = { countries: [] }, action) => {
    let { countries } = state;

    switch (action.type) {
        case GET_COUNTRIES:
            countries = action.payload;
            break;
        default:
            break;
    }

    return { countries };
};

export default countriesReducer;
