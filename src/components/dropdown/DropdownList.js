import { useState } from 'react';
import { Dropdown } from 'semantic-ui-react';

const DropdownList = ({ filteredList, selected, setSelected, setSearch }) => {
    const [displayIndex, setDisplayIndex] = useState(10);

    return filteredList.length
        ? filteredList.slice(0, displayIndex).map((c) => (
              <Dropdown.Item
                  className={selected && selected.name === c.name ? 'selected' : ''}
                  image={{ src: c.flag, rounded: true }}
                  text={c.name}
                  key={c.name}
                  onClick={() => {
                      setSearch(c.name);
                      setSelected(c);
                      setDisplayIndex(10);
                  }}
              />
          ))
        : [<Dropdown.Item key="none" text="No result found..." />];
};

export default DropdownList;
