import { Dropdown } from 'semantic-ui-react';
import { NB_OF_ITEMS_DISPLAY } from '../../utils/constants';

const DropdownList = ({ displayIndex, filteredList, selected, setSelected, setDisplayIndex }) => (
    <>
        {filteredList && filteredList.length
            ? filteredList.slice(0, displayIndex).map((c, i) => (
                  <Dropdown.Item
                      className={selected && selected.name === c.name ? 'selected' : ''}
                      image={{ src: c.flag, rounded: true }}
                      text={c.name}
                      key={c.code + String(i)}
                      onClick={(e) => {
                          e.preventDefault();
                          setDisplayIndex(NB_OF_ITEMS_DISPLAY);
                          setSelected(c);
                      }}
                  />
              ))
            : [<Dropdown.Item key="none" text="No result found..." />]}
    </>
);

export default DropdownList;
