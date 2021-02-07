import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListAction } from '../actions';

const useDropdownList = (data = []) => {
    const [search, setSearch] = useState('');
    const list = useSelector((state) => state.dropdownList);
    const dispatch = useDispatch();

    useEffect(() => {
        if (Array.isArray(data)) {
            dispatch(getListAction(data, search));
        }
    }, [data, search, dispatch]);

    return { list, search, setSearch };
};

export default useDropdownList;
