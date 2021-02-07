import { useState } from 'react';
import { Input } from 'semantic-ui-react';

const DropdownTrigger = ({ filter, setFilter, selected, setSelected }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleOnChange = (_, data) => {
        setFilter(data.value);
        setSelected(null);
    };

    const handleOnClick = () => {
        setFilter('');
    };

    return (
        <div className="input-wrapper">
            {selected && selected.flag && (
                <img
                    className="input-image ui rounded image"
                    src={selected.flag}
                    alt="selected flag"
                />
            )}
            <Input
                className={selected && 'selected'}
                placeholder={isFocused ? 'Search' : 'Select'}
                type="text"
                value={selected ? selected.name : filter}
                onChange={handleOnChange}
                icon="chevron down"
                onClick={handleOnClick}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </div>
    );
};

export default DropdownTrigger;
