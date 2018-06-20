import { combineReducers } from 'redux';
 
import expenses from './expenses';
import total from './total';
import sortField from './sortField';

export default combineReducers({
	expenses,
	total,
	sortField
})