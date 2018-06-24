import { combineReducers } from 'redux';
 
import expenses from './expenses';
import total from './total';
import sortField from './sortField';
import filterField from './filterField';

export default combineReducers({
	expenses,
	total,
	sortField,
	filterField
})