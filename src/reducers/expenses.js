import { ADD_EXPENSE, EDIT_EXPENSE, DELETE_EXPENSE } from '../actions/actions';


const initialState = localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : [];

const expenses = (state = initialState, action) => {
	switch(action.type) {
		case ADD_EXPENSE :
			return [
				...state,
				{	
					id: action.id,
					description: action.description,
					sum: action.sum,
					date: action.date
				}
			
			];
		case EDIT_EXPENSE : 
			return state.map( expense => expense.id === action.id ? 
				{
					id: action.id,
					description: action.description,
					sum: action.sum,
					date: action.date
				} : 
				expense
			);

		case DELETE_EXPENSE :
			return state.filter( expense => expense.id !== action.id );

	}
	return state;
}

export default expenses