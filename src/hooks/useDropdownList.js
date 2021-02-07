import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListAction } from '../actions';

const useDropdownList = (data) => {
    const [search, setSearch] = useState('');
    const { list } = useSelector((state) => state.dropdown);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!data) {
            return;
        }
        dispatch(getListAction(data, search));
    }, [data, search, dispatch]);

    return { list, search, setSearch };
};

export default useDropdownList;
