import { useState } from 'react';
import { Dropdown } from 'semantic-ui-react';
import DropdownTrigger from './DropdownTrigger';
import useDropdownList from '../../hooks/useDropdownList';
import DropdownList from './DropdownList';
import { isScrollBottomReached } from '../../utils/eventHandlers';
import { NB_OF_ITEMS_DISPLAY } from '../../utils/constants';
import './Dropdown.css';

const MyDropdown = ({ data }) => {
    const { list, search, setSearch } = useDropdownList(data);
    const [selected, setSelected] = useState(null);
    const [displayIndex, setDisplayIndex] = useState(NB_OF_ITEMS_DISPLAY);

    const handleOnScroll = (e) => {
        e.preventDefault();
        if (isScrollBottomReached(e.target)) {
            setDisplayIndex(displayIndex + NB_OF_ITEMS_DISPLAY);
        }
    };

    return (
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
                onScroll={(e) => handleOnScroll(e)}
                onClose={() => setDisplayIndex(NB_OF_ITEMS_DISPLAY)}
            >
                <DropdownList
                    displayIndex={displayIndex}
                    setDisplayIndex={setDisplayIndex}
                    filteredList={list}
                    selected={selected}
                    setSelected={setSelected}
                />
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default MyDropdown;
