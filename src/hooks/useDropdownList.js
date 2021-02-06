import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListAction } from '../actions';
import useCountries from './useCountries';

const useDropdownList = () => {
    const [search, setSearch] = useState('');
    const [countries] = useCountries();
    const { list } = useSelector((state) => state.dropdown);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!countries) {
            return;
        }
        dispatch(getListAction(countries, search));
    }, [countries, search, dispatch]);

    return { list, search, setSearch };
};

export default useDropdownList;
