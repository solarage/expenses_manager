import { UPDATE_SORTFIELD } from '../actions/actions';

const initialState = localStorage.getItem('sortField') ? JSON.parse(localStorage.getItem('sortField')) : { sortBy: "default" };

const sortField = (state = initialState, action) => {
	switch(action.type) {
		case UPDATE_SORTFIELD : 
			return {
				...state,
				sortBy: action.sortBy
			};
	}	
	return state;
}

export default sortField