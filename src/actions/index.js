import { getCountries } from '../apis/restCountries';
import { GET_COUNTRIES } from './types';

export const getCountriesAction = () => async (dispatch) => {
    try {
        const payload = await getCountries();
        dispatch({ type: GET_COUNTRIES, payload });
    } catch (e) {
        throw new Error('could not fetch countries');
    }
};
