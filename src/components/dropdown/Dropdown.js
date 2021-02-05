import './Dropdown.css';
import { useState, useCallback } from 'react';
import { Dropdown, Input } from 'semantic-ui-react';
import useCountries from '../../hooks/useCountries';
import LoadMoreBtn from './LoadMoreBtn';

const MyDropdown = () => {
    const [countries] = useCountries();
    const [displayIndex, setDisplayIndex] = useState(10);
    const [filter, setFilter] = useState();

    const handleOnChange = (_, data) => {
        setFilter(data.value);
    };

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
                          image={{ src: c.flag, rounded: true }}
                          text={c.name}
                          key={c.name}
                          onClick={() => {
                              setFilter('');
                              setDisplayIndex(10);
                          }}
                      />
                  ))
                : [<Dropdown.Item text="No result found..." />];

            if (displayedList.length > 10) {
                list.push(<LoadMoreBtn current={displayIndex} setDisplayIndex={setDisplayIndex} />);
            }
            return list;
        },
        [countries]
    );

    const trigger = (
        <div>
            <Input
                placeholder="Search"
                type="text"
                value={filter}
                onChange={handleOnChange}
                icon="chevron down"
                iconPosition="right"
            />
        </div>
    );

    return (
        <div>
            <Dropdown trigger={trigger} icon={null}>
                <Dropdown.Menu>
                    {listFnc && listFnc(filter, setFilter, displayIndex, setDisplayIndex)}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default MyDropdown;
