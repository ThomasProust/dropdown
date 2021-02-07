import { Dropdown } from 'semantic-ui-react';
import { NB_OF_ITEMS_DISPLAY } from '../../utils/constants';

const DropdownList = ({
    displayIndex,
    filteredList,
    selected,
    setSelected,
    setSearch,
    setDisplayIndex,
}) => {
    return filteredList.length
        ? filteredList.slice(0, displayIndex).map((c) => (
              <Dropdown.Item
                  className={selected && selected.name === c.name ? 'selected' : ''}
                  image={{ src: c.flag, rounded: true }}
                  text={c.name}
                  key={c.name}
                  onClick={() => {
                      setDisplayIndex(NB_OF_ITEMS_DISPLAY);
                      setSearch(c.name);
                      setSelected(c);
                  }}
              />
          ))
        : [<Dropdown.Item key="none" text="No result found..." />];
};

export default DropdownList;
