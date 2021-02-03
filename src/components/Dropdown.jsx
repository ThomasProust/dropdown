import React from 'react';
import { css } from '@emotion/react';
import { Dropdown } from 'semantic-ui-react';
import useCountries from '../hooks/useCountries';

const MyDropdown = () => {
    const [countries] = useCountries();
    return (
        <Dropdown
            css={dropdownStyles}
            placeholder="Select Country"
            search
            selection
            options={countries}
        />
    );
};

const dropdownStyles = css({
    '.flag': {
        width: '24px !important',
        height: '16px !important',
    },
});
export default MyDropdown;
