import axios from 'axios';

const countriesApi = axios.create({
    baseURL: 'https://restcountries.eu/rest/v2',
});

export const getCountries = async () => {
    const { data } = await countriesApi.get('/');
    return data.map((c) => ({
        key: c.alpha2Code.toLowerCase(),
        value: c.alpha2Code.toLowerCase(),
        image: { className: 'flag', src: c.flag },
        text: c.name,
    }));
};
