import './Dropdown.css';
import { useState, useCallback } from 'react';
import { Dropdown } from 'semantic-ui-react';
import DropdownTrigger from './DropdownTrigger';
import useDropdownList from '../../hooks/useDropdownList';
import DropdownList from './DropdownList';
import { isScrollBottomReached } from '../../utils/eventHandlers';
import { NB_OF_ITEMS_DISPLAY } from '../../utils/constants';

const MyDropdown = ({ data }) => {
    const { list, search, setSearch } = useDropdownList(data);
    const [selected, setSelected] = useState(null);
    const [displayIndex, setDisplayIndex] = useState(NB_OF_ITEMS_DISPLAY);

    const listFnc = useCallback(
        (setSelected, setSearch, setDisplayIndex) => {
            return (
                <DropdownList
                    displayIndex={displayIndex}
                    setDisplayIndex={setDisplayIndex}
                    filteredList={list}
                    setSearch={setSearch}
                    selected={selected}
                    setSelected={setSelected}
                />
            );
        },
        [list, selected, displayIndex]
    );

    const handleOnScroll = (e) => {
        if (isScrollBottomReached(e.target)) {
            console.log('loading more..');
            setDisplayIndex(displayIndex + NB_OF_ITEMS_DISPLAY);
        }
    };

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
                <Dropdown.Menu
                    onScroll={handleOnScroll}
                    onClose={() => setDisplayIndex(NB_OF_ITEMS_DISPLAY)}
                >
                    {listFnc(setSelected, setSearch, setDisplayIndex)}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default MyDropdown;
