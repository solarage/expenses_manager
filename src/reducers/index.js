import { combineReducers } from 'redux';
 
import expenses from './expenses';
import total from './total';

export default combineReducers({
	expenses,
	total
})