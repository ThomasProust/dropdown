import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import Dropdown from '../../components/dropdown';
import { store } from '../../store';
import { mockCountriesFactory } from '../mocks/mockCountries';
import { NB_OF_ITEMS_DISPLAY } from '../../utils/constants';

describe('Dropdown', () => {
    describe('input placeholder', () => {
        let container;
        beforeEach(() => {
            const { container: appContainer } = render(
                <Provider store={store}>
                    <Dropdown data={[]} />
                </Provider>
            );
            container = appContainer;
        });
        it('renders the dropdown with default placeholder', () => {
            const input = container.getElementsByTagName('input').item(0);
            expect(input.placeholder).toEqual('Select');
        });

        it('gets the right placeholder value when focused', () => {
            const input = container.getElementsByTagName('input').item(0);
            fireEvent.focus(input);
            expect(input.placeholder).toEqual('Search');
        });
    });

    describe('dropdown list', () => {
        it('does not show the list if the trigger is not focused', () => {
            const { container } = render(
                <Provider store={store}>
                    <Dropdown data={[]} />
                </Provider>
            );
            const menuList = container.getElementsByClassName('menu')[0];

            const input = container.getElementsByTagName('input')[0];
            fireEvent.blur(input);

            expect(menuList).not.toHaveClass('visible');
        });

        it('shows the list if the trigger is focused', () => {
            const { container } = render(
                <Provider store={store}>
                    <Dropdown data={[]} />
                </Provider>
            );
            const menuList = container.getElementsByClassName('menu')[0];

            const input = container.getElementsByTagName('input')[0];
            fireEvent.focus(input);

            expect(menuList).toHaveClass('visible');
        });

        it('display a `result not found` when data is empty', () => {
            const { container } = render(
                <Provider store={store}>
                    <Dropdown data={[]} />
                </Provider>
            );
            const list = container.getElementsByClassName('item');

            expect(list.length).toEqual(1);
            expect(list[0].getElementsByClassName('text')[0].innerHTML).toEqual(
                'No result found...'
            );
        });

        it('display the options in the menu', () => {
            const countries = mockCountriesFactory(5);

            const { container } = render(
                <Provider store={store}>
                    <Dropdown data={countries} />
                </Provider>
            );
            const list = container.getElementsByClassName('item');
            expect(list.length).toEqual(countries.length);
            [...list].forEach((item, i) => {
                expect(item.getElementsByClassName('text')[0].innerHTML).toEqual(countries[i].name);
            });
        });

        it('does not display more options than the NB_OF_ITEMS_DISPLAY', () => {
            const countries = mockCountriesFactory(20);

            const { container } = render(
                <Provider store={store}>
                    <Dropdown data={countries} />
                </Provider>
            );

            const list = container.getElementsByClassName('item');
            expect(list.length).toEqual(NB_OF_ITEMS_DISPLAY);
            countries.slice(0, NB_OF_ITEMS_DISPLAY).forEach((c, i) => {
                expect(list[i].getElementsByClassName('text')[0].innerHTML).toEqual(c.name);
            });
        });

        it('does increment the number of options displayed by NB_OF_ITEMS_DISPLAY when scroll hits bottom', () => {
            const countries = mockCountriesFactory(30);
            const { container } = render(
                <Provider store={store}>
                    <Dropdown data={countries} />
                </Provider>
            );

            const menu = container.getElementsByClassName('menu')[0];
            fireEvent.scroll(menu);

            const list = container.getElementsByClassName('item');
            expect(list.length).toEqual(NB_OF_ITEMS_DISPLAY * 2);
            countries.slice(0, NB_OF_ITEMS_DISPLAY * 2).forEach((c, i) => {
                expect(list[i].getElementsByClassName('text')[0].innerHTML).toEqual(c.name);
            });
        });

        it('keeps incrementing the number of options up to the number of data elements', () => {
            const countries = mockCountriesFactory(30);

            const { container } = render(
                <Provider store={store}>
                    <Dropdown data={countries} />
                </Provider>
            );
            const menu = container.getElementsByClassName('menu')[0];
            fireEvent.scroll(menu);
            fireEvent.scroll(menu);

            const list = container.getElementsByClassName('item');
            expect(list.length).toEqual(countries.length);
        });

        it('does not display more elements than the number of data elements', () => {
            const countries = mockCountriesFactory(11);

            const { container } = render(
                <Provider store={store}>
                    <Dropdown data={countries} />
                </Provider>
            );

            const menu = container.getElementsByClassName('menu')[0];
            fireEvent.scroll(menu);
            fireEvent.scroll(menu);

            const list = container.getElementsByClassName('item');
            expect(list.length).toEqual(countries.length);
        });
    });

    describe('list filtering', () => {
        it('should filter the list on input change', () => {
            const countries = mockCountriesFactory(5);
            countries.push(
                { name: 'searchedCountry', flag: 'flag', code: 5 },
                { name: 'countrySearch', flag: 'flag', code: 6 }
            );

            const { container } = render(
                <Provider store={store}>
                    <Dropdown data={countries} />
                </Provider>
            );

            const input = container.getElementsByTagName('input')[0];
            fireEvent.focus(input);
            fireEvent.change(input, { target: { value: 'sea' } });

            const list = container.getElementsByClassName('item');
            expect(list).toHaveLength(2);
            expect(list[0].getElementsByClassName('text')[0].innerHTML).toEqual(countries[5].name);
            expect(list[1].getElementsByClassName('text')[0].innerHTML).toEqual(countries[6].name);
        });

        it('should filter the elements against the whole list', () => {
            const countries = mockCountriesFactory(29);
            countries.push(
                { name: 'searchedCountry', flag: 'flag', code: 29 },
                { name: 'countrySearch', flag: 'flag', code: 30 }
            );
            const { container } = render(
                <Provider store={store}>
                    <Dropdown data={countries} />
                </Provider>
            );

            const input = container.getElementsByTagName('input')[0];
            fireEvent.focus(input);
            fireEvent.change(input, { target: { value: 'sear' } });

            const list = container.getElementsByClassName('item');
            expect(list).toHaveLength(2);
            expect(list[0].getElementsByClassName('text')[0].innerHTML).toEqual(countries[29].name);
            expect(list[1].getElementsByClassName('text')[0].innerHTML).toEqual(countries[30].name);
        });

        it('updates the input value when an option is selected', () => {
            const countries = mockCountriesFactory(29);

            const { container } = render(
                <Provider store={store}>
                    <Dropdown data={countries} />
                </Provider>
            );

            const input = container.getElementsByTagName('input')[0];
            const list = container.getElementsByClassName('item');
            fireEvent.focus(input);
            fireEvent.click(list[0]);

            expect(input).toHaveValue(list[0].name);
        });
    });
});
