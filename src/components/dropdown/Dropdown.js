import './Dropdown.css';
import { useState, useCallback } from 'react';
import { Dropdown } from 'semantic-ui-react';
import DropdownTrigger from './DropdownTrigger';
import useDropdownList from '../../hooks/useDropdownList';
import DropdownList from './DropdownList';

const MyDropdown = () => {
    const { list, search, setSearch } = useDropdownList();
    const [selected, setSelected] = useState(null);

    const listFnc = useCallback(
        (setSelected, setSearch) => {
            return (
                <DropdownList
                    filteredList={list}
                    setSearch={setSearch}
                    selected={selected}
                    setSelected={setSelected}
                />
            );
        },
        [list, selected]
    );

    return (
        <div className="dropdown-wrapper">
            <Dropdown
                trigger={
                    <DropdownTrigger
                        selected={selected}
                        setSelected={setSelected}
                        filter={search}
                        setFilter={setSearch}
                    />
                }
                icon={null}
            >
                <Dropdown.Menu>{listFnc(setSelected, setSearch)}</Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default MyDropdown;
