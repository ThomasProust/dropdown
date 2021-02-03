import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCountriesAction } from '../actions';

const useCountries = () => {
    const countries = useSelector((state) => state.countries.countries);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountriesAction());
    }, [dispatch]);

    return [countries];
};

export default useCountries;
