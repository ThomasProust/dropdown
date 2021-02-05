import axios from 'axios';

const countriesApi = axios.create({
    baseURL: 'https://restcountries.eu/rest/v2',
});

export const getCountries = async () => {
    const { data } = await countriesApi.get('/', {
        params: { fields: 'name;flag;alpha2Code' },
    });
    return data;
};
