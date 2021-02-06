import { combineReducers } from 'redux';
import countriesReducer from './countriesReducer';
import dropdownListReducer from './dropdownListReducer';

export default combineReducers({
    countries: countriesReducer,
    dropdown: dropdownListReducer,
});
