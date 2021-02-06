import { getCountries } from '../apis/restCountries';
import { GET_COUNTRIES, GET_LIST } from './types';

export const getCountriesAction = () => async (dispatch) => {
    try {
        const payload = await getCountries();
        dispatch({ type: GET_COUNTRIES, payload });
    } catch (e) {
        throw new Error('could not fetch countries');
    }
};

export const getListAction = (data, search) => (dispatch) => {
    const payload = data.filter((d) => d.name.toLowerCase().includes(search.toLowerCase()));
    dispatch({
        type: GET_LIST,
        payload,
    });
};
