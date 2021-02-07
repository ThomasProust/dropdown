const mockCountrytemplate = { flag: 'aUrlToASvg.svg', name: 'Country' };

export const mockCountriesFactory = (nbOfCountry) => {
    const list = [];
    for (let i = 0; i < nbOfCountry; i++) {
        list.push({ ...mockCountrytemplate, code: i });
    }
    return list;
};
