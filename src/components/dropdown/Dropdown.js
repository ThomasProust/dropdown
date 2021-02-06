import './Dropdown.css';
import { useState, useCallback } from 'react';
import { Dropdown } from 'semantic-ui-react';
import useCountries from '../../hooks/useCountries';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import DropdownTrigger from './DropdownTrigger';

const MyDropdown = () => {
    const [countries] = useCountries([]);
    const [displayIndex, setDisplayIndex] = useState(10);
    const [filter, setFilter] = useState('');
    const [selected, setSelected] = useState(null);

    const listFnc = useCallback(
        (filter, setFilter, displayIndex, setDisplayIndex) => {
            if (!countries) {
                return null;
            }

            const displayedList = filter
                ? countries.filter((c) => c.name.includes(filter))
                : countries;
            const list = displayedList.length
                ? displayedList.slice(0, displayIndex).map((c) => (
                      <Dropdown.Item
                          className={selected && selected.name === c.name ? 'selected' : ''}
                          image={{ src: c.flag, rounded: true }}
                          text={c.name}
                          key={c.name}
                          onClick={() => {
                              setFilter(c.name);
                              setSelected(c);
                              setDisplayIndex(10);
                          }}
                      />
                  ))
                : [<Dropdown.Item key="none" text="No result found..." />];

            if (displayedList.length > 10) {
                list.push(
                    <LoadMoreBtn
                        key="btn"
                        current={displayIndex}
                        setDisplayIndex={setDisplayIndex}
                    />
                );
            }
            return list;
        },
        [countries, selected]
    );

    return (
        <div className="dropdown-wrapper">
            <Dropdown
                trigger={
                    <DropdownTrigger
                        selected={selected}
                        setSelected={setSelected}
                        filter={filter}
                        setFilter={setFilter}
                        setDisplayIndex={setDisplayIndex}
                    />
                }
                icon={null}
            >
                <Dropdown.Menu>
                    {listFnc(filter, setFilter, displayIndex, setDisplayIndex)}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default MyDropdown;
